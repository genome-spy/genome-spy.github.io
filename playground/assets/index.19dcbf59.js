var wn=Object.defineProperty,Sn=Object.defineProperties;var _n=Object.getOwnPropertyDescriptors;var At=Object.getOwnPropertySymbols;var Dn=Object.prototype.hasOwnProperty,Cn=Object.prototype.propertyIsEnumerable;var Ge=(n,e,t)=>e in n?wn(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,v=(n,e)=>{for(var t in e||(e={}))Dn.call(e,t)&&Ge(n,t,e[t]);if(At)for(var t of At(e))Cn.call(e,t)&&Ge(n,t,e[t]);return n},T=(n,e)=>Sn(n,_n(e));var ce=(n,e,t)=>(Ge(n,typeof e!="symbol"?e+"":e,t),t);import{e as En,t as In,a as Ye,f as k,w as Ke,p as D,c as Pn,b as Tn,i as ee,d as kn,g as On,h as An,j as Fn,k as I,l as ze,m as Me,n as M,o as O,q as se,r as ri,s as j,I as mt,u as ai,v as Y,x as gt,y as ke,z as Rn,A as $n,B as zn,C as Mn,D as Ln,E as Nn,F as Oe,G as Vn,H as Bn,J as P,K as qn,L as jn,M as Un,N as Gn,O as ge,P as ye,Q as Wn,R as li,S as yt,T as ci,U as Hn,V as Ae,W as H,X as he,Y as di,Z as Xn,_ as Zn,$ as Le,a0 as Ce,a1 as Qe,a2 as Jn,a3 as Yn,a4 as fi,a5 as hi,a6 as pi,a7 as Kn,a8 as Qn,a9 as ui,aa as et,ab as es,ac as ts,ad as is,ae as Ne,af as mi,ag as ns,ah as ss,ai as os,aj as rs,ak as as,al as ls,am as Ft,an as cs,ao as ds,ap as fs,aq as hs,ar as Ve,as as ps,at as us,au as ms,av as gs,aw as ys,ax as bs,ay as vs,az as xs,aA as gi,aB as Be,aC as Fe,aD as ws,aE as Ss,aF as De,aG as bt,aH as _s,aI as Ds,aJ as Cs,aK as yi,aL as Es,aM as Is,aN as Ps,aO as Rt,aP as Ts,aQ as ks,aR as $t,aS as bi}from"./vendor.a9a27531.js";const Os=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}};Os();const zt=1;function vt(){let n=[0,1],e=[0,1],t=1,i=1,s=0,o=0,r=.5,a=0;const c=f=>(f-n[0])/t*i+e[0];return c.invert=f=>(f-e[0])/i*t+n[0],c.domain=function(f){if(arguments.length){if(n=En(f),t=n[1]-n[0],t<zt){t=zt;const d=(n[0]+n[1])/2;n[0]=d-t/2,n[1]=d+t/2}return c}else return n},c.range=function(f){return arguments.length?(e=[...f],i=e[1]-e[0],c):e},c.numberingOffset=function(f){return arguments.length?(a=f,c):a},c.padding=function(f){return arguments.length?(o=f,s=Math.min(1,f),c):s},c.paddingInner=function(f){return arguments.length?(s=Math.min(1,f),c):s},c.paddingOuter=function(f){return arguments.length?(o=f,c):o},c.align=function(f){return arguments.length?(r=Math.max(0,Math.min(1,f)),c):r},c.step=()=>i/t,c.bandwidth=()=>c.step(),c.ticks=f=>{const d=c.align(),h=c.numberingOffset();return In(n[0]-d+h,n[1]-d+h,Math.min(f,Math.ceil(t))).filter(Number.isInteger).map(u=>u-a)},c.tickFormat=(f,d)=>{if(d)throw new Error("Index scale's tickFormat does not support a specifier!");const u=Ye(n[0],n[1],Math.min(f,Math.ceil(t)))<1e5?k(","):k(".3s");return p=>u(p+a)},c.copy=()=>vt().domain(n).range(e).paddingInner(s).paddingOuter(o).numberingOffset(a),c}function As(){const n=vt().numberingOffset(1);let e;n.genome=function(i){return arguments.length?(e=i,n):e},n.ticks=i=>{if(!e)return[];const s=n.domain(),o=n.numberingOffset(),[r,a]=[Math.max(s[0],0),Math.min(s[1],e.totalSize-1)].map(f=>e.toChromosome(f)),l=Math.max(1,Ye(s[0],s[1],i)),c=[];for(let f=r.index;f<=a.index;f++){const d=e.chromosomes[f],h=Math.max(d.continuousStart+l,s[0]-(s[0]-d.continuousStart)%l),u=Math.min(d.continuousEnd-l/4,s[1]+1);for(let p=h;p<=u;p+=l){const m=p-o;m>=s[0]&&m<s[1]&&c.push(m)}}return c},n.tickFormat=(i,s)=>{if(!e)return;if(s)throw new Error("Locus scale's tickFormat does not support a specifier!");const o=n.domain(),r=o[1]-o[0],a=n.numberingOffset(),c=Ye(o[0],o[1],Math.min(i,Math.ceil(r)))<1e6?k(","):k(".3s"),f=d=>d-e.toChromosome(d).continuousStart;return d=>c(f(d)+a)};const t=n.copy;return n.copy=()=>t().genome(e),n}function Fs(n){return n.type=="locus"}function Rs(n,e){var t=n.getBoundingClientRect();return[e.clientX-t.left-n.clientLeft,e.clientY-t.top-n.clientTop]}function vi(n,e){return n.length==e.length&&n.every((t,i)=>n[i]===e[i])}function $s(n,e,t,i){return n.length==e.length&&n.every((s,o)=>t(n[o])===i(e[o]))}function L(n){return Array.isArray(n)?n:typeof n!="undefined"?[n]:[]}function F(n){return n[n.length-1]}class zs{constructor(e){this.container=e,this.element=document.createElement("div"),this.element.className="tooltip",this._visible=!0,this.container.appendChild(this.element),this._previousTooltipDatum=void 0,this.enabledStack=[!0],this._penaltyUntil=0,this._lastCoords=void 0,this._previousMove=0,this.clear()}set visible(e){e!=this._visible&&(this.element.style.display=e?null:"none",this._visible=e)}get visible(){return this._visible}get enabled(){var e;return(e=F(this.enabledStack))!=null?e:!0}pushEnabledState(e){this.enabledStack.push(e),e||(this.visible=!1)}popEnabledState(){this.enabledStack.pop()}handleMouseMove(e){this.mouseCoords=Rs(this.container,e);const t=performance.now();!this.visible&&!this._isPenalty()&&t-this._previousMove>500&&(this._penaltyUntil=t+70),this._lastCoords&&Ms(this.mouseCoords,this._lastCoords)>20&&(this._penaltyUntil=t+400),this._lastCoords=this.mouseCoords,this.visible&&this.updatePlacement(),this._previousMove=t}updatePlacement(){const[t,i]=this.mouseCoords;let s=t+20;s>this.container.clientWidth-this.element.offsetWidth&&(s=t-20-this.element.offsetWidth),this.element.style.left=s+"px",this.element.style.top=Math.min(i+20,this.container.clientHeight-this.element.offsetHeight)+"px"}setContent(e){if(!e||!this.enabled||this._isPenalty()){this.visible&&(Ke("",this.element),this.visible=!1),this._previousTooltipDatum=void 0;return}Ke(e,this.element),this.visible=!0,this.updatePlacement()}clear(){this._previousTooltipDatum=void 0,this.setContent(void 0)}updateWithDatum(e,t){e!==this._previousTooltipDatum&&(this._previousTooltipDatum=e,t||(t=i=>Promise.resolve(D` ${JSON.stringify(i)} `)),t(e).then(i=>this.setContent(i)).catch(i=>{if(i!=="debounced")throw i}))}_isPenalty(){return this._penaltyUntil&&this._penaltyUntil>performance.now()}}function Ms(n,e){let t=0;for(let i=0;i<n.length;i++)t+=(n[i]-e[i])**2;return Math.sqrt(t)}function xt(n,e={}){const t=Pn({forbidden:[],allowed:["datum"],globalvar:"global",fieldvar:"datum"});try{const i=Tn(n),s=t(i),o=Function("datum","global",`"use strict"; return (${s.code});`),r=a=>o(a,e);return r.fields=s.fields,r}catch(i){throw new Error(`Invalid expression: ${n}, ${i.message}`)}}function Ls(){let n=0;const e=new Map,t=i=>{let s=e.get(i);return s===void 0&&(s=n++,e.set(i,s)),s};return t.addAll=i=>{for(const s of i)t(s)},t.invert=i=>{for(const s of e.entries())if(s[1]==i)return s[0]},t.domain=()=>[...e.keys()],t}function Ns(n,e){const t={};e||(e=n.encoding);for(const[i,s]of Object.entries(e)){if(!s)continue;const o=n.unitView.getScaleResolution(A(s)&&s.resolutionChannel||i);t[i]=Vs(e[i],o==null?void 0:o.getScale(),n.unitView.getAccessor(i),i)}return t}function Vs(n,e,t,i){let s;if(R(n)){const o=n.value;s=r=>o,s.constant=!0,s.constantValue=!0,s.accessor=void 0}else if(t)if(i=="text")s=o=>{},s.accessor=t,s.constant=t.constant;else{if(!e)throw new Error(`Missing scale! "${i}": ${JSON.stringify(n)}`);if(s=o=>e(t(o)),ee(e.type)){const o=Ls();o.addAll(e.domain()),s.indexer=o}s.constant=t.constant,s.accessor=t,s.scale=e}else throw new Error(`Missing value or accessor (field, expr, datum) on channel "${i}": ${JSON.stringify(n)}`);return s.invert=e?o=>e.invert(o):o=>{throw new Error("No scale available, cannot invert: "+JSON.stringify(n))},s.channelDef=n,s.applyMetadata=o=>{for(const r in s)r in s&&(o[r]=s[r]);return o},s}function R(n){return n&&"value"in n}function be(n){return n&&"field"in n}function ve(n){return n&&"datum"in n}function A(n){return be(n)||ve(n)||wt(n)||xi(n)}function tt(n,e){const t=n.mark.encoding[e];if(A(t))return t;throw new Error("Not a channel def with scale!")}function xi(n){return n&&"chrom"in n}function wt(n){return n&&"expr"in n}const xe=["x","y"],Bs=["x2","y2"],qs=[...xe,...Bs];function wi(n){return xe.includes(n)}function pe(n){return qs.includes(n)}const St={x:"x2",y:"y2"},Si=Object.fromEntries(Object.entries(St).map(n=>[n[1],n[0]]));function fe(n){return n in Si}function js(n){const e=St[n];if(e)return e;throw new Error(`${n} has no secondary channel!`)}function ae(n){var e;return(e=Si[n])!=null?e:n}function K(n){return["color","fill","stroke"].includes(ae(n))}function qe(n){return["shape","squeeze"].includes(n)}function _i(n){switch(n){case"shape":return["circle","square","triangle-up","cross","diamond","triangle-down","triangle-right","triangle-left"]}}function Di(n){if(!qe(n))throw new Error("Not a discrete channel: "+n);const e=new Map(_i(n).map((t,i)=>[t,i]));return t=>{const i=e.get(t);if(i!==void 0)return i;throw new Error(`Invalid value for "${n}" channel: ${t}`)}}function _(n,e=n){if(/^[A-Za-z0-9_]+$/.test(n)){const t=new Function("datum",`return datum[${JSON.stringify(n)}]`);return kn(t,[n],e)}else return On(n)}class Us{constructor(){this.accessorCreators=[],this.register(e=>{if(be(e))try{const t=_(e.field);return t.constant=!1,t.fields=An(t),t}catch(t){throw new Error(`Invalid field definition: ${t.message}`)}}),this.register(e=>wt(e)?Gs(e.expr):void 0),this.register(e=>{if(ve(e)){const i=Fn(e.datum);return i.constant=!0,i.fields=[],i}})}register(e){this.accessorCreators.push(e)}createAccessor(e){for(const t of this.accessorCreators){const i=t(e);if(i)return i}}}function Gs(n){const e=xt(n);return e.constant=e.fields.length==0,e}var Ws=`/**
 * The vertex position wrt the rectangle specified by (x, x2, y, y2).
 * [0, 0] = [x, y], [1, 1] = [x2, y2]. 
 * The x or y component may contain fractional values if the rectangle 
 * have been tessellated.
 */
in vec2 frac;

/** Minimum size (width, height) of the displayed rectangle in pixels */
uniform vec2 uMinSize;

/** Minimum opacity for the size size clamping */
uniform float uMinOpacity;

/** top-right, bottom-right, top-left, bottom-left */
uniform vec4 uCornerRadii;

flat out lowp vec4 vFillColor;
flat out lowp vec4 vStrokeColor;
flat out float vHalfStrokeWidth;
flat out vec4 vCornerRadii;


#if defined(ROUNDED_CORNERS) || defined(STROKED)
/** Position for SDF-strokes */
out vec2 vPosInPixels;
#endif

/** Size of the rect in pixels */
flat out vec2 vHalfSizeInPixels;

/**
 * Clamps the minimumSize and returns an opacity that reflects the amount of clamping.
 */
float clampMinSize(inout float pos, float frac, float size, float minSize) {
    if (minSize > 0.0 && abs(size) < minSize) {
        pos += (frac - 0.5) * (minSize * sign(size) - size);
        return abs(size) / minSize;
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

void main(void) {
    vec2 normalizedMinSize = uMinSize / uViewportSize;

    float x = getScaled_x();
    float x2 = getScaled_x2();
    float y = getScaled_y();
    float y2 = getScaled_y2();

    sort(x, x2);
    sort(y, y2);

    // Clamp x to prevent precision artifacts when the scale is zoomed very close.
	// TODO: clamp y as well
	float clampMargin = 1.0;
    vec2 pos1 = vec2(clamp(x, 0.0 - clampMargin, 1.0 + clampMargin), y);
    vec2 pos2 = vec2(clamp(x2, 0.0 - clampMargin, 1.0 + clampMargin), y2);

    vec2 size = pos2 - pos1;

    if (size.x <= 0.0 || size.y <= 0.0) {
        // Early exit. May increase performance or not...
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
        return;
    }

    vec2 pos = pos1 + frac * size;

    size.y *= getSampleFacetHeight(pos);

    // Clamp to minimum size, optionally compensate with opacity
    float opaFactor = uViewOpacity * max(uMinOpacity,
        clampMinSize(pos.x, frac.x, size.x, normalizedMinSize.x) *
        clampMinSize(pos.y, frac.y, size.y, normalizedMinSize.y));

    pos = applySampleFacet(pos);

#if defined(ROUNDED_CORNERS) || defined(STROKED)
    // Add an extra pixel to stroke width to accommodate edge antialiasing
    float aaPadding = 1.0 / uDevicePixelRatio;
    float strokeWidth = getScaled_strokeWidth();
    float strokeOpacity = getScaled_strokeOpacity() * opaFactor;

    vec2 centeredFrac = frac - 0.5;
    vec2 expand = centeredFrac * (strokeWidth + aaPadding) / uViewportSize;
    pos += expand;

    vec2 sizeInPixels = size * uViewportSize;
    vPosInPixels = (centeredFrac + expand / size) * sizeInPixels;

    vHalfSizeInPixels = sizeInPixels / 2.0;

    vCornerRadii = min(uCornerRadii, min(vHalfSizeInPixels.x, vHalfSizeInPixels.y));
    vHalfStrokeWidth = strokeWidth / 2.0;
    vStrokeColor = vec4(getScaled_stroke() * strokeOpacity, strokeOpacity);
#endif

    gl_Position = unitToNdc(pos);

    float fillOpacity = getScaled_fillOpacity() * opaFactor;
    vFillColor = vec4(getScaled_fill() * fillOpacity, fillOpacity);

    setupPicking();
}
`,Hs=`#if defined(ROUNDED_CORNERS) || defined(STROKED)
in vec2 vPosInPixels;
#endif

flat in vec2 vHalfSizeInPixels;

flat in lowp vec4 vFillColor;
flat in lowp vec4 vStrokeColor;
flat in float vHalfStrokeWidth;
flat in vec4 vCornerRadii;

out lowp vec4 fragColor;

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

void main(void) {

#if defined(ROUNDED_CORNERS) || defined(STROKED)
#ifdef ROUNDED_CORNERS
    // Distance from rectangle's edge in pixels. Negative inside the rectangle.
    float d = sdRoundedBox(vPosInPixels, vHalfSizeInPixels, vCornerRadii);
#else
    float d = sdSharpBox(vPosInPixels, vHalfSizeInPixels);
#endif

    fragColor = distanceToColor(d, vFillColor, vStrokeColor, vHalfStrokeWidth);

    if (fragColor.a == 0.0) {
        discard;
    }
#else
    // The trivial, non-decorated case
    fragColor = vFillColor;
#endif

    if (uPickingEnabled) {
        fragColor = vPickingColor;
    }
}
`;function it(n,e=[],t=0){const i=Math.fround(n);return e[t]=i,e[t+1]=isFinite(i)?n-i:0,e}function Xs(n){switch(Qs(n).gpuVendor.toLowerCase()){case"nvidia":return`  #define NVIDIA_GPU
  // Nvidia optimizes away the calculation necessary for emulated fp64
  #define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
  `;case"intel":return`  #define INTEL_GPU
  // Intel optimizes away the calculation necessary for emulated fp64
  #define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
  // Intel's built-in 'tan' function doesn't have acceptable precision
  #define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
  // Intel GPU doesn't have full 32 bits precision in same cases, causes overflow
  #define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
  `;case"amd":return`  #define AMD_GPU
  `;default:return`  #define DEFAULT_GPU
  // Prevent driver from optimizing away the calculation necessary for emulated fp64
  #define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
  // Intel's built-in 'tan' function doesn't have acceptable precision
  #define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
  // Intel GPU doesn't have full 32 bits precision in same cases, causes overflow
  #define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
  `}}const Zs=7936,Js=7937,Ys=7938,Ks=35724;function Qs(n){const e=n.getExtension("WEBGL_debug_renderer_info"),t=n.getParameter(e&&e.UNMASKED_VENDOR_WEBGL||Zs),i=n.getParameter(e&&e.UNMASKED_RENDERER_WEBGL||Js);return{gpuVendor:eo(t,i),vendor:t,renderer:i,version:n.getParameter(Ys),shadingLanguageVersion:n.getParameter(Ks)}}function eo(n,e){return n.match(/NVIDIA/i)||e.match(/NVIDIA/i)?"NVIDIA":n.match(/INTEL/i)||e.match(/INTEL/i)?"INTEL":n.match(/AMD/i)||e.match(/AMD/i)||n.match(/ATI/i)||e.match(/ATI/i)?"AMD":"UNKNOWN GPU"}const _t="attr_",Ci="uDomain_",to="range_",Mt="scale_",Ei="getScaled_",nt="uRangeTexture_",Lt=3402823466e29;function io(n){const e=n.match(/^(?:(\w+)-)?(\w+)$/);if(!e)throw new Error("Not a scale type: "+n);return{family:e[1]||"continuous",transform:e[2]}}function no(n,e){let t;if(qe(n))t=J(Di(n)(e));else if(I(e))if(K(n))t=oo(e);else throw new Error(`String values are not supported on the "${n}" channel: ${e}`);else if(ze(e))t=J(e?1:0);else if(e===null)if(K(n))t=J([0,0,0]);else throw new Error(`null value is not supported on the "${n}" chanel.`);else t=J(e);return`
#define ${n}_DEFINED
${t.type} ${Ei}${n}() {
    // Constant value
    return ${t};
}`}function so(n,e,t){var V;if(R(t))throw new Error(`Cannot create scale for "value": ${JSON.stringify(t)}`);const i=ae(n),s=_t+n,o=Ci+i,r=to+i,a=!!e.fp64,l=a?"vec2":"float",c=e.domain?e.domain().length:void 0;let f;const d=[];d.push(""),d.push("/".repeat(70)),d.push(`// Channel: ${n}`),d.push(""),d.push(`#define ${n}_DEFINED`),a&&d.push(`#define ${n}_FP64`);const{transform:h}=io(e.type),u=(b,...Z)=>ro.apply(null,[b+(a?"Fp64":""),"value",...Z]);let p;switch(h){case"linear":p=u("scaleLinear","domain",r);break;case"log":p=u("scaleLog","domain",r,e.base());break;case"symlog":p=u("scaleSymlog","domain",r,e.constant());break;case"pow":case"sqrt":p=u("scalePow","domain",r,e.exponent());break;case"index":case"locus":case"point":case"band":p=u("scaleBand","domain",r,e.paddingInner(),e.paddingOuter(),e.align(),(V=t.band)!=null?V:.5);break;case"ordinal":case"null":case"identity":p=u("scaleIdentity");break;case"threshold":break;default:throw new Error(`Unsupported scale type: ${e.type}! ${n}: ${JSON.stringify(t)}`)}const m=Me(e.type)||M(e.type)&&K(n)?[0,1]:e.range?e.range():void 0;if(m&&n==i&&m.length&&m.every(O)){const b=Nt(m);d.push(`const ${b.type} ${r} = ${b};`)}const y=K(n)?"vec3":"float";let g;if(K(n)){const b=nt+i;if(n==i&&d.push(`uniform sampler2D ${b};`),M(e.type))g=`getInterpolatedColor(${b}, transformed)`;else if(ee(e.type)||se(e.type))g=`getDiscreteColor(${b}, int(transformed))`;else throw new Error("Problem with color scale!")}else if(e.type==="ordinal"||se(e.type)){const b=nt+i;n==i&&d.push(`uniform sampler2D ${b};`),g=`getDiscreteColor(${b}, int(transformed)).r`}ve(t)?d.push(`uniform highp ${l} ${s};`):d.push(`in highp ${l} ${s};`);const w=[],x=M(e.type)&&c>2,S=se(e.type)||x;if(w.push("int slot = 0;"),S){const b=o;w.push(x?`while (slot < ${b}.length() - 2 && value >= ${b}[slot + 1]) { slot++; }`:`while (slot < ${b}.length() && value >= ${b}[slot]) { slot++; }`)}const E=M(e.type)||se(e.type)||["band","point"].includes(e.type);if(p){const b=o;if(E){const Z=a?"vec4":"vec2";w.push(`${Z} domain = ${Z}(${b}[slot], ${b}[slot + 1]);`)}w.push(`float transformed = ${p};`),x&&w.push(`transformed = (float(slot) + transformed) / (float(${b}.length()) - 1.0);`)}else w.push("float transformed = float(slot);");"clamp"in e&&e.clamp()&&w.push(`transformed = clampToRange(transformed, ${Nt(m)});`),w.push(`return ${g!=null?g:"transformed"};`),d.push(`
${y} ${Mt}${n}(${l} value) {
${w.map(b=>`    ${b}
`).join("")}
}`),d.push(`
${y} ${Ei}${n}() {
    return ${Mt}${n}(${s});
}`);const G=d.join(`
`);if(E&&n==i){const b=M(e.type)||se(e.type)?c:2;f=`${a?"vec2":"float"} ${o}[${b}];`}return{glsl:G,domainUniform:f}}function st(n){if(!O(n))throw new Error(`Not a number: ${n}`);if(n==1/0)return""+Lt;if(n==-1/0)return""+-Lt;{let e=`${n}`;return/^(-)?\d+$/.test(e)&&(e+=".0"),e}}function J(n){typeof n=="number"&&(n=[n]);const e=n.length;if(e<1||e>4)throw new Error("Invalid number of components: "+e);let t,i;return e>1?(t=`vec${e}`,i=`${t}(${n.map(st).join(", ")})`):(t="float",i=st(n[0])),Object.assign(i,{type:t,numComponents:e})}function oo(n){const e=ri(n).rgb();return J([e.r,e.g,e.b].map(t=>t/255))}function Nt(n){return J([n[0],F(n)])}function ro(n,...e){const t=[];for(const i of e)O(i)?t.push(st(i)):j(i)?t.push(J(i)):t.push(i);return`${n}(${t.join(", ")})`}class ao{constructor(e){this.size=e,this.arrays={},this.pushers=[],this.dataUpdaters=[],this.vertexCount=0}addConverter(e,t){const i=this.createUpdater(_t+e,t.numComponents||1,t.arrayReference),s=t.f;this.dataUpdaters.push(t.arrayReference?o=>i(s(o)):o=>i(s(o)))}createUpdater(e,t,i){if(!O(this.size))throw new Error("The number of vertices must be defined!");let s,o,r=0;const a=new Float32Array(this.size*t);if(this.arrays[e]={data:a,numComponents:t},t==1){let l=0;const c=f=>{l=+f};s=()=>{a[r++]=l},o=c}else{let l=i!=null?i:[0];const c=i?f=>{}:f=>{l=f};switch(t){case 1:break;case 2:s=()=>{a[r++]=l[0],a[r++]=l[1]},o=c;break;case 3:s=()=>{a[r++]=l[0],a[r++]=l[1],a[r++]=l[2]},o=c;break;case 4:s=()=>{a[r++]=l[0],a[r++]=l[1],a[r++]=l[2],a[r++]=l[3]},o=c;break;default:throw new Error("Invalid numComponents: "+t)}}return this.pushers.push(s),o}_unrollPushAll(){let e="",t="";for(let s=0;s<this.pushers.length;s++)e+=`const p${s} = that.pushers[${s}];
`,t+=`p${s}();
`;const i=new Function("that",`${e}

            return function unrolledPushAll() {
                ${t}
                that.vertexCount++;
            };
        `);this.pushAll=i(this)}pushAll(){this.size>1e5?this._unrollPushAll():this.pushAll=()=>{for(let t=0;t<this.pushers.length;t++)this.pushers[t]();this.vertexCount++},this.pushAll()}updateFromDatum(e){for(let t=0;t<this.dataUpdaters.length;t++)this.dataUpdaters[t](e)}pushFromDatum(e){this.updateFromDatum(e),this.pushAll()}}const oe=5,We=127;function ot(n){const e=[];for(let p=0;p<=We;p++)e.push(void 0);const t=new Map;for(const p of n.chars)p.id<=We?e[p.id]=p:t.set(p.id,p);const i=8722;t.has(i)||t.set(i,e["-".charCodeAt(0)]);function s(p){return(p<=We?e[p]:t.get(p))||e[63]}function o(p){return s(p.charCodeAt(0))}const r=n.common.base,a=o("x"),l=o("X"),c=o("q"),f=a.height-oe*2,d=l.height-oe*2,h=c.height-a.height+c.yoffset-a.yoffset;function u(p,m=1){let y=0;for(let g=0;g<p.length;g++)y+=s(p.charCodeAt(g)).xadvance;return y/r*m}return{measureWidth:u,getCharByCode:s,getChar:o,xHeight:f,capHeight:d,descent:h,common:n.common}}function lo(n,e=0,t=1){return Math.max(e,Math.min(t,n))}const co=2**31-1;function fo(n,e){const t=new Int32Array(n);t.fill(co);const i=new Int32Array(n),s=e[0],r=(e[1]-e[0])/n,a=d=>lo(Math.floor((d-s)/r),0,n-1),l=(d,h,u,p)=>{const m=a(d),y=a(h);for(let g=m;g<=y;g++)t[g]>u&&(t[g]=u),i[g]<p&&(i[g]=p)},c=(d,h)=>[t[a(d)],i[a(h)]],f=()=>{for(let d=1;d<i.length;d++)i[d]<i[d-1]&&(i[d]=i[d-1]);for(let d=i.length-1;d>0;d--)i[d-1]>i[d]&&(i[d-1]=i[d]);return c};return l.getIndex=f,l}class we{constructor({encoders:e,numVertices:t=void 0,attributes:i=[],buildXIndex:s=!1}){this.encoders=e,this._buildXIndex=s,this.variableEncoders=Object.fromEntries(Object.entries(e).filter(([o,r])=>i.includes(o)&&r&&r.scale&&!r.constant)),this.allocatedVertices=t,this.variableBuilder=new ao(t);for(const[o,r]of Object.entries(this.variableEncoders)){const a=r.accessor,l=[0,0],c=r.scale.fp64,f=r.indexer,d=f?h=>f(a(h)):c?h=>it(a(h),l):a;this.variableBuilder.addConverter(o,{f:d,numComponents:c?2:1,arrayReference:c?l:void 0})}this.lastOffset=0,this.rangeMap=new mt([],JSON.stringify)}registerBatch(e){var o;const t=this.lastOffset,i=this.variableBuilder.vertexCount,s=i-t;s&&this.rangeMap.set(e,{offset:t,count:s,xIndex:(o=this.xIndexer)==null?void 0:o.getIndex()}),this.lastOffset=i}addBatches(e){for(const[t,i]of e)this.addBatch(t,i)}addBatch(e,t,i=0,s=t.length){for(let o=i;o<s;o++)this.variableBuilder.pushFromDatum(t[o]);this.registerBatch(e)}prepareXIndexer(e){if(!this._buildXIndex)return;const t=this.variableEncoders.x,i=this.variableEncoders.x2;if(t&&i){const s=t.accessor,o=i.accessor;this.xIndexer=fo(50,[s(e[0]),o(F(e))]);let r=this.variableBuilder.vertexCount;this.addToXIndex=a=>{let l=this.variableBuilder.vertexCount;this.xIndexer(s(a),o(a),r,l),r=l}}else this.xIndexer=void 0,this.addToXIndex=s=>{}}addToXIndex(e){}toArrays(){return{arrays:this.variableBuilder.arrays,vertexCount:this.variableBuilder.vertexCount,allocatedVertices:this.allocatedVertices,rangeMap:this.rangeMap}}}class ho extends we{constructor({encoders:e,attributes:t,tessellationThreshold:i=1/0,visibleRange:s=[-1/0,1/0],numItems:o,buildXIndex:r=!1}){super({encoders:e,attributes:t,numVertices:i==1/0?o*6:void 0,buildXIndex:r});this.visibleRange=s,this.tessellationThreshold=i||1/0,this.updateFrac=this.variableBuilder.createUpdater("frac",2)}addBatch(e,t,i=0,s=t.length){if(s<=i)return;const o=this.encoders,[r,a]=this.visibleRange,l=h=>h.accessor||(u=>0),c=l(o.x),f=l(o.x2);this.prepareXIndexer(t);const d=[0,0];this.updateFrac(d);for(let h=i;h<s;h++){const u=t[h];let p=c(u),m=f(u);if(p>m&&([p,m]=[m,p]),m<r||p>a)continue;p<r&&(p=r),m>a&&(m=a),this.variableBuilder.updateFromDatum(u),d[0]=0,d[1]=0;const y=1;this.variableBuilder.pushAll();for(let g=0;g<=y;g++)d[0]=g/y,d[1]=0,this.variableBuilder.pushAll(),d[1]=1,this.variableBuilder.pushAll();this.variableBuilder.pushAll(),this.addToXIndex(u)}this.registerBatch(e)}}class po extends we{constructor({encoders:e,attributes:t,tessellationThreshold:i=1/0,visibleRange:s=[-1/0,1/0],numItems:o,buildXIndex:r}){super({encoders:e,attributes:t,numVertices:i==1/0?o*6:void 0,buildXIndex:r});this.visibleRange=s,this.tessellationThreshold=i||1/0,this.updateSide=this.variableBuilder.createUpdater("side",1),this.updatePos=this.variableBuilder.createUpdater("pos",1)}addBatch(e,t,i=0,s=t.length){this.prepareXIndexer(t);for(let o=i;o<s;o++){const r=t[o];this.variableBuilder.updateFromDatum(r),this.updateSide(-.5),this.updatePos(0),this.variableBuilder.pushAll();const a=1;for(let l=0;l<=a;l++)this.updatePos(l/a),this.updateSide(-.5),this.variableBuilder.pushAll(),this.updateSide(.5),this.variableBuilder.pushAll();this.variableBuilder.pushAll(),this.addToXIndex(r)}this.registerBatch(e)}}class uo extends we{constructor({encoders:e,attributes:t,numItems:i=void 0}){super({encoders:e,attributes:t,numVertices:i})}}class mo extends we{constructor({encoders:e,attributes:t,numItems:i=void 0}){super({encoders:e,attributes:t,numVertices:i})}toArrays(){const e=this.variableBuilder.arrays;for(let t of Object.values(e))t.divisor=1;return super.toArrays()}}class go extends we{constructor({encoders:e,attributes:t,fontMetrics:i,properties:s,numCharacters:o=void 0,buildXIndex:r=!1}){super({encoders:e,attributes:t,numVertices:o*6,buildXIndex:r});this.metadata=i,this.metrics=i,this.properties=s;const l=e.text.channelDef;this.numberFormat=!R(l)&&l.format?k(l.format):c=>c,this.updateVertexCoord=this.variableBuilder.createUpdater("vertexCoord",2),this.updateTextureCoord=this.variableBuilder.createUpdater("textureCoord",2),this.updateWidth=this.variableBuilder.createUpdater("width",1)}addBatch(e,t,i=0,s=t.length){var u;const o=this.properties.align||"left",r=(u=this.properties.logoLetters)!=null?u:!1,a=this.metadata.common.base,l=this.metadata.common.scaleH;let c=-oe;switch(this.properties.baseline){case"top":c+=this.metrics.capHeight;break;case"middle":c+=this.metrics.capHeight/2;break;case"bottom":c-=this.metrics.descent;break}const f=this.encoders.text.accessor||this.encoders.text,d=[0,0];this.updateVertexCoord(d);const h=[0,0];this.updateTextureCoord(h),this.prepareXIndexer(t);for(let p=i;p<s;p++){const m=t[p],y=this.numberFormat(f(m)),g=I(y)?y:y===null?"":""+y;if(g.length==0)continue;this.variableBuilder.updateFromDatum(m);const w=r?g.length:this.metrics.measureWidth(g);this.updateWidth(w);let x=o=="right"?-w:o=="center"?-w/2:0;if(!r){const V=this.metrics.getCharByCode(g.charCodeAt(0));x-=(V.width-V.xadvance)/a/2}let S=-.5,E=1,G=1;for(let V=0;V<g.length;V++){const b=this.metrics.getCharByCode(g.charCodeAt(V)),Z=r?1:b.xadvance/a;if(b.id==32){x+=Z;continue}r?(G=(b.width+oe*2)/b.width,x=-G/2,E=(b.height+oe*2)/b.height,S=-.5-oe/b.height):(E=b.height/a,S=-(b.height+b.yoffset+c)/a,G=b.width/a);const te=b.x,ie=b.y;d[0]=x,d[1]=S+E,h[0]=te/l,h[1]=ie/l,this.variableBuilder.pushAll(),d[0]=x+G,d[1]=S+E,h[0]=(te+b.width)/l,h[1]=ie/l,this.variableBuilder.pushAll(),d[0]=x,d[1]=S,h[0]=te/l,h[1]=(ie+b.height)/l,this.variableBuilder.pushAll(),d[0]=x+G,d[1]=S+E,h[0]=(te+b.width)/l,h[1]=ie/l,this.variableBuilder.pushAll(),d[0]=x,d[1]=S,h[0]=te/l,h[1]=(ie+b.height)/l,this.variableBuilder.pushAll(),d[0]=x+G,d[1]=S,h[0]=(te+b.width)/l,h[1]=(ie+b.height)/l,this.variableBuilder.pushAll(),x+=Z}this.addToXIndex(t)}this.registerBatch(e)}}var yo=`// Adapted from luma.gl - https://github.com/uber/luma.gl

// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

uniform float ONE;

/*
About LUMA_FP64_CODE_ELIMINATION_WORKAROUND

The purpose of this workaround is to prevent shader compilers from
optimizing away necessary arithmetic operations by swapping their sequences
or transform the equation to some 'equivalent' from.

The method is to multiply an artifical variable, ONE, which will be known to
the compiler to be 1 only at runtime. The whole expression is then represented
as a polynomial with respective to ONE. In the coefficients of all terms, only one a
and one b should appear

err = (a + b) * ONE^6 - a * ONE^5 - (a + b) * ONE^4 + a * ONE^3 - b - (a + b) * ONE^2 + a * ONE
*/

// Divide float number to high and low floats to extend fraction bits
vec2 split(float a) {
  const float SPLIT = 4097.0;
  float t = a * SPLIT;
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float a_hi = t * ONE - (t - a);
  float a_lo = a * ONE - a_hi;
#else
  float a_hi = t - (t - a);
  float a_lo = a - a_hi;
#endif
  return vec2(a_hi, a_lo);
}

// Divide float number again when high float uses too many fraction bits
vec2 split2(vec2 a) {
  vec2 b = split(a.x);
  b.y += a.y;
  return b;
}

// Special sum operation when a > b
vec2 quickTwoSum(float a, float b) {
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float sum = (a + b) * ONE;
  float err = b - (sum - a) * ONE;
#else
  float sum = a + b;
  float err = b - (sum - a);
#endif
  return vec2(sum, err);
}

// General sum operation
vec2 twoSum(float a, float b) {
  float s = (a + b);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float v = (s * ONE - a) * ONE;
  float err = (a - (s - v) * ONE) * ONE * ONE * ONE + (b - v);
#else
  float v = s - a;
  float err = (a - (s - v)) + (b - v);
#endif
  return vec2(s, err);
}

vec2 twoSub(float a, float b) {
  float s = (a - b);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float v = (s * ONE - a) * ONE;
  float err = (a - (s - v) * ONE) * ONE * ONE * ONE - (b + v);
#else
  float v = s - a;
  float err = (a - (s - v)) - (b + v);
#endif
  return vec2(s, err);
}

vec2 twoSqr(float a) {
  float prod = a * a;
  vec2 a_fp64 = split(a);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float err = ((a_fp64.x * a_fp64.x - prod) * ONE + 2.0 * a_fp64.x *
    a_fp64.y * ONE * ONE) + a_fp64.y * a_fp64.y * ONE * ONE * ONE;
#else
  float err = ((a_fp64.x * a_fp64.x - prod) + 2.0 * a_fp64.x * a_fp64.y) + a_fp64.y * a_fp64.y;
#endif
  return vec2(prod, err);
}

vec2 twoProd(float a, float b) {
  float prod = a * b;
  vec2 a_fp64 = split(a);
  vec2 b_fp64 = split(b);
  float err = ((a_fp64.x * b_fp64.x - prod) + a_fp64.x * b_fp64.y +
    a_fp64.y * b_fp64.x) + a_fp64.y * b_fp64.y;
  return vec2(prod, err);
}

vec2 sum_fp64(vec2 a, vec2 b) {
  vec2 s, t;
  s = twoSum(a.x, b.x);
  t = twoSum(a.y, b.y);
  s.y += t.x;
  s = quickTwoSum(s.x, s.y);
  s.y += t.y;
  s = quickTwoSum(s.x, s.y);
  return s;
}

vec2 sub_fp64(vec2 a, vec2 b) {
  vec2 s, t;
  s = twoSub(a.x, b.x);
  t = twoSub(a.y, b.y);
  s.y += t.x;
  s = quickTwoSum(s.x, s.y);
  s.y += t.y;
  s = quickTwoSum(s.x, s.y);
  return s;
}

vec2 mul_fp64(vec2 a, vec2 b) {
  vec2 prod = twoProd(a.x, b.x);
  // y component is for the error
  prod.y += a.x * b.y;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  prod.y += a.y * b.x;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  return prod;
}

vec2 div_fp64(vec2 a, vec2 b) {
  float xn = 1.0 / b.x;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  vec2 yn = mul_fp64(a, vec2(xn, 0));
#else
  vec2 yn = a * xn;
#endif
  float diff = (sub_fp64(a, mul_fp64(b, yn))).x;
  vec2 prod = twoProd(xn, diff);
  return sum_fp64(yn, prod);
}

vec2 sqrt_fp64(vec2 a) {
  if (a.x == 0.0 && a.y == 0.0) return vec2(0.0, 0.0);
  if (a.x < 0.0) return vec2(0.0 / 0.0, 0.0 / 0.0);

  float x = 1.0 / sqrt(a.x);
  float yn = a.x * x;
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  vec2 yn_sqr = twoSqr(yn) * ONE;
#else
  vec2 yn_sqr = twoSqr(yn);
#endif
  float diff = sub_fp64(a, yn_sqr).x;
  vec2 prod = twoProd(x * 0.5, diff);
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  return sum_fp64(split(yn), prod);
#else
  return sum_fp64(vec2(yn, 0.0), prod);
#endif
}`,Vt=`#define PI 3.141593

/** Offset in "unit" units */
uniform vec2 uViewOffset;

uniform vec2 uViewScale;

/** Size of the logical viewport in pixels, i.e., the view */
uniform vec2 uViewportSize;

uniform lowp float uDevicePixelRatio;

// TODO: Views with opacity less than 1.0 should be rendered into a texture
// that is rendered with the specified opacity.
uniform lowp float uViewOpacity;

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

float linearstep(float edge0, float edge1, float x) {
    return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

// Fragment shader stuff ////////////////////////////////////////////////////////

// TODO: include the following only in fragment shaders

/**
 * Specialized linearstep for doing antialiasing
 */
float distanceToRatio(float d) {
	return clamp(d * uDevicePixelRatio + 0.5, 0.0, 1.0);
}

vec4 distanceToColor(float d, vec4 fill, vec4 stroke, float halfStrokeWidth) {
    if (halfStrokeWidth > 0.0) {
        // Distance to stroke's edge. Negative inside the stroke.
        float sd = abs(d) - halfStrokeWidth;
        return mix(
            stroke,
            d <= 0.0 ? fill : vec4(0.0),
            distanceToRatio(sd));
    } else {
        return fill * distanceToRatio(-d);
    }
}
`,bo=`// Utils ------------

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

float scaleBand(float value, vec2 domainExtent, vec2 range,
                float paddingInner, float paddingOuter,
                float align, float band) {

    // TODO: reverse
    float start = range[0];
    float stop = range[1];

    float n = domainExtent[1] - domainExtent[0];

    paddingInner = int(n) > 1 ? paddingInner : 0.0;

    // Adapted from: https://github.com/d3/d3-scale/blob/master/src/band.js
    float step = (stop - start) / max(1.0, n - paddingInner + paddingOuter * 2.0);
    start += (stop - start - step * (n - paddingInner)) * align;
    float bandwidth = step * (1.0 - paddingInner);

    return start + (value - domainExtent[0]) * step + bandwidth * band;
}
`,vo=`float scaleIdentityFp64(vec2 value) {
    return value[0];
}

float scaleLinearFp64(vec2 value, vec4 domain, vec2 range) {
    vec2 domainSpan = sub_fp64(domain.zw, domain.xy);
    float rangeSpan = range[1] - range[0];

    float unitValue = div_fp64(sub_fp64(value, domain.xy), domainSpan).x;
    return unitValue * rangeSpan + range[0];
}

float scaleBandFp64(vec2 value, vec4 domainExtent, vec2 range,
                float paddingInner, float paddingOuter,
                float align, float band) {

    // TODO: reverse
    float start = range[0];
    float stop = range[1];

    vec2 domainSpan = sub_fp64(domainExtent.zw, domainExtent.xy);
    float n = domainSpan.x;

    // Based on: https://github.com/d3/d3-scale/blob/master/src/band.js
    float step = (stop - start) / max(1.0, n - paddingInner + paddingOuter * 2.0);
    start += (stop - start - step * (n - paddingInner)) * align;
    float bandwidth = step * (1.0 - paddingInner);

    return start + sub_fp64(value, domainExtent.xy).x * step + bandwidth * band;
}
`,xo=`
/**
 * Describes where a sample facet should be shown. Interpolating between the
 * current and target positions/heights allows for transitioning between facet
 * configurations.
 */
struct SampleFacetPosition {
    float pos;
    float height;
    float targetPos;
    float targetHeight;
};

/**
 * Trasition fraction [0, 1] between the current and target configurations.
 */
uniform float uTransitionOffset;


// ----------------------------------------------------------------------------

#if !defined(SAMPLE_FACET_UNIFORM) && !defined(SAMPLE_FACET_TEXTURE)

SampleFacetPosition getSampleFacetPos() {
    return SampleFacetPosition(0.0, 1.0, 0.0, 1.0);
}

#elif defined(SAMPLE_FACET_UNIFORM)

/**
 * Location and height of the band on the Y axis on a normalized [0, 1] scale.
 * Elements: curr pos, curr height, target pos, target height
 */
uniform vec4 uSampleFacet;

SampleFacetPosition getSampleFacetPos() {
    return SampleFacetPosition(
        1.0 - uSampleFacet.x - uSampleFacet.y,
        uSampleFacet.y,
        1.0 - uSampleFacet.z - uSampleFacet.w,
        uSampleFacet.w
    );
}

#elif defined(SAMPLE_FACET_TEXTURE)

uniform sampler2D uSampleFacetTexture;

SampleFacetPosition getSampleFacetPos() {
    vec4 texel = texelFetch(uSampleFacetTexture, ivec2(int(attr_facetIndex), 0), 0);
    return SampleFacetPosition(
        1.0 - texel.r - texel.g,
        texel.g,
        1.0 - texel.r - texel.g,
        texel.g);
}

#endif

// ----------------------------------------------------------------------------

bool isFacetedSamples(SampleFacetPosition facetPos) {
    return facetPos != SampleFacetPosition(0.0, 1.0, 0.0, 1.0);
}

bool isFacetedSamples() {
    return isFacetedSamples(getSampleFacetPos());
}

bool isInTransit() {
    return uTransitionOffset > 0.0;
}

float getTransitionFraction(float xPos) {
    return smoothstep(0.0, 0.7 + uTransitionOffset, (xPos - uTransitionOffset) * 2.0);
}

vec2 applySampleFacet(vec2 pos) {
    SampleFacetPosition facetPos = getSampleFacetPos();

    if (!isFacetedSamples(facetPos)) {
        return pos;
    } else if (isInTransit()) {
        vec2 interpolated = mix(
            vec2(facetPos.pos, facetPos.height),
            vec2(facetPos.targetPos, facetPos.targetHeight),
            getTransitionFraction(pos.x));
        return vec2(pos.x, interpolated[0] + pos.y * interpolated[1]);
    } else {
        return vec2(pos.x, facetPos.pos + pos.y * facetPos.height);
    }
}

float getSampleFacetHeight(vec2 pos) {
    SampleFacetPosition facetPos = getSampleFacetPos();

    if (!isFacetedSamples(facetPos)) {
        return 1.0;
    } else if (isInTransit()) {
        return mix(
            facetPos.height,
            facetPos.targetHeight,
            getTransitionFraction(pos.x));
    } else {
        return facetPos.height;
    }
}
`,wo=`/*
 * Based on concepts presented at:
 * https://webglfundamentals.org/webgl/lessons/webgl-picking.html
 * https://deck.gl/docs/developer-guide/custom-layers/picking
 */

uniform bool uPickingEnabled;

flat out highp vec4 vPickingColor;

/**
 * Passes the unique id to the fragment shader as a color if picking is enabled.
 * Returns true if picking is enabled.
 */
bool setupPicking() {
    if (uPickingEnabled) {
#ifdef uniqueId_DEFINED
        int id = int(getScaled_uniqueId());
        // TODO: Take the sign bit into account
        vPickingColor = vec4(
            ivec4(id >> 0, id >> 8, id >> 16, 0xFF) & 0xFF
        ) / float(0xFF);
#else
        vPickingColor = vec4(1.0);
#endif
        return true;
    }
    return false;
}
`,So=`uniform bool uPickingEnabled;

flat in highp vec4 vPickingColor;
`;const Ee=Symbol("cacheMap");function re(n,e,t){let i=ue(n).get(e);return i===void 0&&(i=t(e),ue(n).set(e,i)),i}function Ii(n,e){ue(n).delete(e)}function Ie(n,e){const t=ue(n);for(const i of t.keys())i.startsWith(e)&&t.delete(i);ue(n).delete(e)}function Pi(n){n[Ee]=new Map}function ue(n){return n[Ee]||Pi(n),n[Ee]}function _o(n,e,t,i){const s=I(n)?n:n.name,o=!I(n)&&n.extent||[0,1];if(t===void 0&&!I(n)&&(t=n.count),s){const r=ai(s);if(Y(r)){const a=ki(r,{extent:o,count:t});return je(e,{minMag:e.LINEAR,format:e.RGB,height:1,wrap:e.CLAMP_TO_EDGE},a,i)}else{if(j(r))return Ti(r,e);throw new Error("Unknown scheme: "+s)}}}function Do(n,e="rgb",t,i){const s=gt(n,I(e)?e:e.type,I(e)?void 0:e.gamma),o=ki(s);return je(t,{minMag:t.LINEAR,format:t.RGB,height:1,wrap:t.CLAMP_TO_EDGE},o,i)}function Co(n,e,t,i){const s=Math.max(n.length,t||0),o=new Float32Array(s);for(let r=0;r<s;r++)o[r]=n[r%n.length];return je(e,{minMag:e.NEAREST,format:e.RED,internalFormat:e.R32F,height:1},o,i)}function Ti(n,e,t,i){const s=Oi(n,t);return je(e,{minMag:e.NEAREST,format:e.RGB,height:1},s,i)}function ki(n,{extent:e=[0,1],reverse:t=!1,count:i=256}={}){const s=e[0],o=F(e)-s,r=ke(i).map(a=>a/(i-1)).map(a=>s+a/o).map(n);return t&&r.reverse(),Oi(r)}function Oi(n,e){const t=Math.max(n.length,e||0),i=new Uint8Array(t*3);for(let s=0;s<t;s++){const o=ri(n[s%n.length]).rgb();i[s*3+0]=o.r,i[s*3+1]=o.g,i[s*3+2]=o.b}return i}class Eo{constructor(e,t){this._container=e,this._sizeSource=t,this._shaderCache=new Map,this._listeners=[],this.rangeTextures=new WeakMap;const i=document.createElement("canvas");e.appendChild(i);const s=Rn(i,{antialias:!0,depth:!1,premultipliedAlpha:!0});if(!s)throw new Error("Unable to initialize WebGL. Your browser or machine may not support it.");if(!$n(s))throw new Error("Your web browser does not support WebGL 2.0. Chrome, Firefox, and Safari Tech Preview should work.");zn(s),s.blendFunc(s.ONE,s.ONE_MINUS_SRC_ALPHA),this._shaderDefines=Xs(s),this.canvas=i,this.gl=s,this._pickingAttachmentOptions=[{format:s.RGBA,type:s.UNSIGNED_BYTE,minMag:s.LINEAR,wrap:s.CLAMP_TO_EDGE}],this._pickingBufferInfo=Mn(s,this._pickingAttachmentOptions),s.bindFramebuffer(s.FRAMEBUFFER,null),this.adjustGl(),this._resizeObserver=new ResizeObserver(o=>{this.invalidateSize(),this._emit("resize")}),this._resizeObserver.observe(this._container),this._updateDpr()}invalidateSize(){this._logicalCanvasSize=void 0,this._updateDpr(),this.adjustGl()}_updateDpr(){this.dpr=window.devicePixelRatio}compileShader(e,t){const i="#version 300 es",s="precision mediump float;";j(t)&&(t=t.join(`

`));const o=this.gl,r=t.replaceAll(/ {2,}|^\s*\/\/.*$/gm,"");let a=this._shaderCache.get(r);if(!a){const l=[i,s,t].join(`

`);a=o.createShader(e),o.shaderSource(a,l),o.compileShader(a),this._shaderCache.set(r,a)}return a}adjustGl(){const e=this.getLogicalCanvasSize();this.canvas.style.width=`${e.width}px`,this.canvas.style.height=`${e.height}px`;const t=this.getPhysicalCanvasSize(e);this.canvas.width=t.width,this.canvas.height=t.height,Ln(this.gl,this._pickingBufferInfo,this._pickingAttachmentOptions)}finalize(){this._resizeObserver.unobserve(this._container),this.canvas.remove()}getPhysicalCanvasSize(e){return e=e||this.getLogicalCanvasSize(),{width:e.width*this.dpr,height:e.height*this.dpr}}getLogicalCanvasSize(){var o,r,a,l;if(this._logicalCanvasSize)return this._logicalCanvasSize;const e=(r=(o=this._sizeSource)==null?void 0:o.call(this))!=null?r:{width:void 0,height:void 0},t=window.getComputedStyle(this._container,null),i=(a=e.width)!=null?a:this._container.clientWidth-parseFloat(t.paddingLeft)-parseFloat(t.paddingRight),s=(l=e.height)!=null?l:this._container.clientHeight-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom);return this._logicalCanvasSize={width:i,height:s},this._logicalCanvasSize}addEventListener(e,t){this._listeners.push({type:e,listener:t})}_emit(e){for(const t of this._listeners)t.type===e&&t.listener()}readPickingPixel(e,t){const i=this.gl;e*=this.dpr,t*=this.dpr;const s=this.getPhysicalCanvasSize().height,o=new Uint8Array(4);return i.bindFramebuffer(i.FRAMEBUFFER,this._pickingBufferInfo.framebuffer),i.readPixels(e,s-t-1,1,1,i.RGBA,i.UNSIGNED_BYTE,o),i.bindFramebuffer(i.FRAMEBUFFER,null),o}clearAll(){const e=this.gl,{width:t,height:i}=this.getPhysicalCanvasSize();e.viewport(0,0,t,i),e.disable(e.SCISSOR_TEST),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT)}createRangeTexture(e,t=!1){const i=this.rangeTextures.get(e);if(!t&&i)return;function s(r,a){return ee(a.type)?a.domain().length:a.type=="threshold"?a.domain().length+1:a.type=="quantize"||a.type=="quantile"?r!=null?r:4:r}const o=e.channel;if(K(o)){const r=e.getScaleProps(),a=e.getScale();let l;if(r.scheme){let c=I(r.scheme)?void 0:r.scheme.count;c=s(c,a),l=_o(r.scheme,this.gl,c,i)}else{const c=a.range();Me(a.type)?l=Do(c,r.interpolate,this.gl,i):l=Ti(c,this.gl,a.domain().length,i)}this.rangeTextures.set(e,l)}else{const r=e.getScale();if(r.type==="ordinal"||se(r.type)){const a=qe(o)?Di(o):c=>c,l=e.getScale().range();this.rangeTextures.set(e,Co(l.map(a),this.gl,r.domain().length,i))}}}}function Io(n,e="",t=0){const i=/ERROR:\s*\d+:(\d+)/gi,s=[...e.matchAll(i)],o=new Map(s.map((r,a)=>{const l=parseInt(r[1]),c=s[a+1],f=c?c.index:e.length,d=e.substring(r.index,f);return[l-1,d]}));return n.split(`
`).map((r,a)=>{const l=o.get(a);return`${a+1+t}: ${r}${l?`

^^^ ${l}`:""}`}).join(`
`)}function Po(n,e,t){const i=n.createProgram();n.attachShader(i,e),n.attachShader(i,t),n.linkProgram(i);function s(){let o,r;if(!n.getProgramParameter(i,n.LINK_STATUS)){o=n.getProgramInfoLog(i);for(const l of[e,t])n.getShaderParameter(l,n.COMPILE_STATUS)||(o=n.getShaderInfoLog(l),r=Io(n.getShaderSource(l),o,0)+`
Error compiling: ${o}`,n.deleteShader(l));n.deleteProgram(i)}if(o)return{message:o,detail:r}}return{program:i,getProgramErrors:s}}function je(n,e,t,i){return i?Nn(n,i,t,e):i=Oe(n,T(v({},e),{src:t})),i}function To(...n){const e={get(t,i,s){for(const o of n){const a=o()[i];if(a!==void 0)return a}},has(t,i,s){for(const o of n){const r=o();if(i in r)return!0}return!1}};return new Proxy({},e)}function ko(n){return I(n)||O(n)||ze(n)}const Oo="SAMPLE_FACET_UNIFORM",Bt="SAMPLE_FACET_TEXTURE";class Se{constructor(e){this.unitView=e,this.encoders=void 0,this.bufferInfo=void 0,this.programInfo=void 0,this.vertexArrayInfo=void 0,this.domainUniformInfo=void 0,this.defaultProperties={get clip(){return["x","y"].map(t=>e.getScaleResolution(t)).some(t=>{var i;return(i=t==null?void 0:t.isZoomable())!=null?i:!1})},xOffset:0,yOffset:0,minBufferSize:0},this.properties=To(typeof this.unitView.spec.mark=="object"?()=>this.unitView.spec.mark:()=>({}),()=>this.defaultProperties)}get opaque(){return!1}getAttributes(){throw new Error("Not implemented!")}getSupportedChannels(){return["sample","facetIndex","x","y","color","opacity","search","uniqueId"]}getDefaultEncoding(){const e={sample:void 0,uniqueId:void 0};return this.isPickingParticipant()&&(e.uniqueId={field:"_uniqueId"}),e}fixEncoding(e){return e}get encoding(){return re(this,"encoding",()=>{const e=this.getDefaultEncoding(),t=this.unitView.getEncoding(),i=r=>{const a=this.properties[r];return ko(a)&&{value:a}},s=Object.fromEntries(this.getSupportedChannels().map(r=>[r,i(r)]).filter(r=>r[1].value!==void 0)),o=this.fixEncoding(v(v(v({},e),s),t));for(const r of Object.keys(o))this.getSupportedChannels().includes(r)||delete o[r];return o})}getContext(){return this.unitView.context}getType(){return this.unitView.getMarkType()}initializeData(){}initializeEncoders(){this.encoders=Ns(this)}async initializeGraphics(){}updateGraphicsData(){}getSampleFacetMode(){if(this.encoders.facetIndex)return Bt;if(this.unitView.getFacetAccessor())return Oo}createAndLinkShaders(e,t,i=[]){const s=this.getAttributes();i.push("// view: "+this.unitView.getPathString()),this.domainUniforms=[];let o=[];const r=this.getSampleFacetMode();r&&i.push(`#define ${r}`);for(const d of s){let h;if(d in this.encoding)h=d;else continue;const u=this.encoding[h];if(!!u)if(R(u))o.push(no(h,u.value));else{const p=A(u)&&u.resolutionChannel||h,m=this.unitView.getScaleResolution(p).getScale(),y=so(h,m,u);o.push(y.glsl),y.domainUniform&&this.domainUniforms.push(y.domainUniform)}}const a=this.domainUniforms.length?`layout(std140) uniform Domains {
`+this.domainUniforms.map(d=>`    ${d}
`).join("")+`};

`:"",l=[...i,Vt,bo,a,...o,xo,wo,e];l.some(d=>/[Ff]p64/.test(d))&&(l.unshift(vo),l.unshift(yo));const c=[...i,Vt,So,t],f=this.gl;this.programStatus=Po(f,this.glHelper.compileShader(f.VERTEX_SHADER,l),this.glHelper.compileShader(f.FRAGMENT_SHADER,c))}finalizeGraphicsInitialization(){const e=this.programStatus.getProgramErrors();if(e){e.detail&&console.warn(e.detail);const t=new Error("Cannot create shader program: "+e.message);throw t.view=this.unitView,t}this.programInfo=Vn(this.gl,this.programStatus.program),delete this.programStatus,this.domainUniforms.length&&(this.domainUniformInfo=Bn(this.gl,this.programInfo,"Domains")),this.gl.useProgram(this.programInfo.program),this._setDatums()}_setDatums(){for(const[e,t]of Object.entries(this.encoding))if(ve(t)){const i=this.encoders[e],s=i.indexer?i.indexer(t.datum):i.scale.fp64?it(+t.datum):+t.datum;P(this.programInfo,{[_t+e]:s})}}deleteGraphicsData(){if(this.bufferInfo){const e=this.gl;for(let t=0;t<8;t++)e.disableVertexAttribArray(t);Object.values(this.bufferInfo.attribs).forEach(t=>this.gl.deleteBuffer(t.buffer)),this.bufferInfo.indices&&this.gl.deleteBuffer(this.bufferInfo.indices),this.bufferInfo=void 0}}updateBufferInfo(e){if(this.gl.bindVertexArray(null),this.bufferInfo&&e.vertexCount<=this.bufferInfo.allocatedVertices)for(const[t,i]of Object.entries(e.arrays))i.data&&qn(this.gl,this.bufferInfo.attribs[t],i.data,0);else this.deleteGraphicsData(),this.bufferInfo=jn(this.gl,e.arrays,{numElements:e.vertexCount}),this.bufferInfo.allocatedVertices=e.allocatedVertices,this.vertexArrayInfo=void 0}get glHelper(){return this.getContext().glHelper}get gl(){return this.glHelper.gl}onBeforeSampleAnimation(){}onAfterSampleAnimation(){}isReady(){return this.bufferInfo&&this.programInfo}isPickingParticipant(){if(this.properties.tooltip===null)return!1;for(const e of this.unitView.getAncestors())if(!e.isPickingSupported())return!1;return!0}prepareRender(e){var s;const t=this.glHelper,i=this.gl;if(this.vertexArrayInfo||(this.vertexArrayInfo=Un(this.gl,this.programInfo,this.bufferInfo)),i.useProgram(this.programInfo.program),this.domainUniformInfo){for(const[o,r]of Object.entries(this.domainUniformInfo.setters)){const a=o.substring(Ci.length),l=this.encoding[a],c=A(l)&&l.resolutionChannel||a,f=this.unitView.getScaleResolution(c);if(f){const d=f.getScale(),h=ee(d.type)?[0,d.domain().length]:d.domain();r(d.fp64?h.map(u=>it(u)).flat():h)}}Gn(i,this.programInfo,this.domainUniformInfo)}for(const[o,r]of Object.entries(this.encoding))if(A(r)){const a=A(r)&&r.resolutionChannel||o,l=this.unitView.getScaleResolution(a),c=t.rangeTextures.get(l);c&&P(this.programInfo,{[nt+o]:c})}if(this.getSampleFacetMode()==Bt){let o;for(const r of this.unitView.getAncestors())if(o=r.getSampleFacetTexture(),o)break;P(this.programInfo,{uSampleFacetTexture:o})}P(this.programInfo,{ONE:1,uDevicePixelRatio:this.glHelper.dpr,uViewOpacity:this.unitView.getEffectiveOpacity(),uPickingEnabled:((s=e.picking)!=null?s:!1)&&this.isPickingParticipant()}),P(this.programInfo,{uSampleFacet:[0,1,0,1],uTransitionOffset:0}),this.opaque||e.picking?i.disable(i.BLEND):i.enable(i.BLEND)}prepareSampleFacetRendering(e){const t=e.sampleFacetRenderingOptions,i=this.programInfo.uniformSetters.uSampleFacet;if(t&&i){const s=t.locSize?t.locSize.location:0,o=t.locSize?t.locSize.size:1;if(s>1||s+o<0)return!1;const r=t.targetLocSize?t.targetLocSize.location:s,a=t.targetLocSize?t.targetLocSize.size:o;this.gl.uniform4f(i.location,s,o,r,a)}return!0}render(e){}createRenderCallback(e,t,i){var r;const s=this;let o;if(this.properties.buildIndex){const a=(r=this.unitView.getScaleResolution("x"))==null?void 0:r.getScale();o=l=>{if(a&&l.xIndex){const c=a.domain(),f=l.xIndex(c[0],c[1]),d=f[0],h=f[1]-d;h>0&&e(d,h)}else e(l.offset,l.count)}}else o=a=>e(a.offset,a.count);if(this.properties.dynamicData)return function(){const l=i().get(t.facetId);l&&l.count&&s.prepareSampleFacetRendering(t)&&o(l)};{const a=i().get(t.facetId);if(a&&a.count)return function(){s.prepareSampleFacetRendering(t)&&o(a)}}}setViewport(e,t){const i=this.glHelper.dpr,s=this.gl,o=this.properties,r=this.glHelper.getLogicalCanvasSize(),a=.5,l=(o.xOffset||0)+a,c=(o.yOffset||0)+a;let f,d=e;if(o.clip||t){let h=0,u=0,p;t?(d=o.clip?e.intersect(t):t,p=[e.width/d.width,e.height/d.height],u=Math.max(0,e.y2-t.y2),h=Math.max(0,e.x2-t.x2)):p=[1,1];const m=[e.x,r.height-d.y2,Math.max(0,d.width),Math.max(0,d.height)].map(x=>x*i),y=m.map(x=>Math.floor(x)),[g,w]=m.map((x,S)=>x-y[S]);s.viewport(...y),s.scissor(...y),s.enable(s.SCISSOR_TEST),f={uViewOffset:[(l+h+g)/d.width,-(c+u-w)/d.height],uViewScale:p}}else s.viewport(0,0,r.width*i,r.height*i),s.disable(s.SCISSOR_TEST),f={uViewOffset:[(e.x+l)/r.width,(r.height-e.y-c-e.height)/r.height],uViewScale:[e.width/r.width,e.height/r.height]};return P(this.programInfo,f),P(this.programInfo,{uViewportSize:[e.width,e.height]}),d.height>0&&d.width>0}findDatumAt(e,t){}}function rt(n,e){var o;const t=js(e);let i=n[e]&&v({},n[e]),s=n[t]&&v({},n[t]);if(!(R(i)||R(s))){if(i){if(!A(n[e]))return;if(s){if(i.type!="quantitative"){const r=(1-(i.band||1))/2;i.band=r,s.band=-r}}else if(i.type=="quantitative")s={datum:0};else{s=v({},i);const r=(1-((o=i.band)!=null?o:1))/2;i.band=0+r,s.band=1-r}}else i={value:0},s={value:1};n[e]=i,n[t]=s}}function Ai(n,e){n.stroke||(e?n.stroke={value:null}:n.stroke=v({resolutionChannel:"color"},n.color)),R(n.stroke)&&n.stroke.value===null&&(n.strokeWidth={value:0}),n.strokeOpacity||(n.strokeOpacity=v({resolutionChannel:"opacity"},n.opacity))}function Fi(n,e){R(n.fill)&&n.fill.value===null?n.fillOpacity={value:0}:n.fill||(n.fill=v({resolutionChannel:"color"},n.color),!e&&!n.fillOpacity&&(n.fillOpacity={value:0})),n.fillOpacity||(e?n.fillOpacity=v({resolutionChannel:"opacity"},n.opacity):n.fillOpacity={value:0})}class Ao extends Se{constructor(e){super(e);Object.defineProperties(this.defaultProperties,Object.getOwnPropertyDescriptors({x2:void 0,y2:void 0,filled:!0,color:"#4c78a8",opacity:1,strokeWidth:3,cornerRadius:0,minWidth:.5,minHeight:.5,minOpacity:1,tessellationZoomThreshold:10,tessellationTiles:35}))}getAttributes(){return["uniqueId","facetIndex","x","x2","y","y2","fill","stroke","fillOpacity","strokeOpacity","strokeWidth"]}getSupportedChannels(){return[...super.getSupportedChannels(),"x2","y2","fill","stroke","fillOpacity","strokeOpacity","strokeWidth"]}get opaque(){return re(this,"opaque",()=>!this._isRoundedCorners()&&!this._isStroked()&&R(this.encoding.fillOpacity)&&this.encoding.fillOpacity.value==1&&this.properties.minOpacity==1)&&this.unitView.getEffectiveOpacity()==1}fixEncoding(e){return rt(e,"x"),rt(e,"y"),Ai(e,this.properties.filled),Fi(e,this.properties.filled),delete e.color,delete e.opacity,e}onBeforeSampleAnimation(){}onAfterSampleAnimation(){}_isRoundedCorners(){return["","TopLeft","TopRight","BottomLeft","BottomRight"].map(e=>"cornerRadius"+e).some(e=>this.properties[e]>0)}_isStroked(){const e=this.encoding.strokeWidth;return!(R(e)&&!e.value)}async initializeGraphics(){await super.initializeGraphics();const e=[];this._isRoundedCorners()&&e.push("ROUNDED_CORNERS"),this._isStroked()&&e.push("STROKED"),this.createAndLinkShaders(Ws,Hs,e.map(t=>"#define "+t))}updateGraphicsData(){const e=this.unitView.getCollector(),t=e.getItemCount(),i=new ho({encoders:this.encoders,attributes:this.getAttributes(),numItems:t,buildXIndex:this.properties.buildIndex});i.addBatches(e.facetBatches);const s=i.toArrays();this.rangeMap=s.rangeMap,this.updateBufferInfo(s)}prepareRender(e){var i,s,o,r;super.prepareRender(e);const t=this.properties;P(this.programInfo,{uMinSize:[t.minWidth,t.minHeight],uMinOpacity:t.minOpacity,uCornerRadii:[(i=t.cornerRadiusTopRight)!=null?i:t.cornerRadius,(s=t.cornerRadiusBottomRight)!=null?s:t.cornerRadius,(o=t.cornerRadiusTopLeft)!=null?o:t.cornerRadius,(r=t.cornerRadiusBottomLeft)!=null?r:t.cornerRadius]}),ge(this.gl,this.programInfo,this.vertexArrayInfo)}render(e){const t=this.gl;return this.createRenderCallback((i,s)=>{ye(t,this.vertexArrayInfo,t.TRIANGLE_STRIP,s,i)},e,()=>this.rangeMap)}findDatumAt(e,t){e=L(e);const i=this.encoders,s=this.unitView.getCollector().facetBatches.get(e),o=i.x.accessor,r=i.x2.accessor;if(s)return s.find(a=>t>=o(a)&&t<r(a))}}var Fo=`precision mediump float;

/**
 * The stroke should only grow inwards, e.g, the diameter/outline is not affected by the stroke width.
 * Thus, a point that has a zero size has no visible stroke. This allows strokes to be used with
 * geometric zoom, etc.
 */
uniform bool uInwardStroke;

/** Maximum size of the largest point as the fraction of the height of the (faceted) view */
uniform lowp float uMaxRelativePointDiameter;

/** Scale factor for geometric zoom */
uniform float uScaleFactor;

/** The size of the largest point in the data */
uniform float uMaxPointSize;

uniform float uZoomLevel;
uniform float uSemanticThreshold;

flat out float vRadius;
flat out float vRadiusWithPadding;
flat out lowp vec4 vFillColor;
flat out lowp vec4 vStrokeColor;
flat out lowp float vShape;
flat out lowp float vHalfStrokeWidth;
flat out mat2 vRotationMatrix;


float computeSemanticThresholdFactor() {
    // TODO: add smooth transition
    return getScaled_semanticScore() >= uSemanticThreshold ? 1.0 : 0.0;
}

/**
 * Computes a scaling factor for the points in a sample-faceted view.
 */
float getDownscaleFactor(vec2 pos) {
    if (!isFacetedSamples()) {
        return 1.0;
    }

    float sampleFacetHeight = getSampleFacetHeight(pos);
    float maxPointDiameter = sqrt(uMaxPointSize);

    float factor = sampleFacetHeight *
        uViewportSize.y *
        uMaxRelativePointDiameter;

    return clamp(0.0, maxPointDiameter, factor) / maxPointDiameter;
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

    float semanticThresholdFactor = computeSemanticThresholdFactor();
    if (semanticThresholdFactor <= 0.0) {
        gl_PointSize = 0.0;
        // Exit early. MAY prevent some unnecessary calculations.
        return;
    }

    float size = getScaled_size();
    vec2 pos = vec2(getScaled_x(), getScaled_y()) + getDxDy();

    gl_Position = unitToNdc(applySampleFacet(pos));

    float strokeWidth = getScaled_strokeWidth();

    float diameter = sqrt(size) *
        uScaleFactor *
        semanticThresholdFactor *
        getDownscaleFactor(pos);

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
	float strokeOpa = getScaled_strokeOpacity() * opacity;

    vShape = getScaled_shape();

	// Circle doesn't have sharp corners. Do some special optimizations to minimize the point size.
	bool circle = vShape == 0.0;

	float angleInDegrees = getScaled_angle();
	float angle = -angleInDegrees * PI / 180.0;
    float sinTheta = sin(angle);
    float cosTheta = cos(angle);
    vRotationMatrix = mat2(cosTheta, sinTheta, -sinTheta, cosTheta);
	float roomForRotation = circle ? 1.0 : sin(mod(angle, PI / 2.0) + PI / 4.0) / sin(PI / 4.0);

	float aaPadding = 1.0 / uDevicePixelRatio;
	float rotationPadding = (diameter * roomForRotation) - diameter;
	// sqrt(3.0) ensures that the angles of equilateral triangles have enough room
	float strokePadding = uInwardStroke ? 0.0 : strokeWidth * (circle ? 1.0 : sqrt(3.0));
	float padding = rotationPadding + strokePadding + aaPadding;
    gl_PointSize = (diameter + padding) * uDevicePixelRatio;

	vRadius = diameter / 2.0;
	vRadiusWithPadding = vRadius + padding / 2.0;

    vHalfStrokeWidth = strokeWidth / 2.0;

    vFillColor = vec4(getScaled_fill() * fillOpa, fillOpa);
    vStrokeColor = vec4(getScaled_stroke() * strokeOpa, strokeOpa);

    setupPicking();
}
`,Ro=`const lowp vec4 white = vec4(1.0);
const lowp vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

uniform bool uInwardStroke;
uniform float uGradientStrength;

flat in float vRadius;
flat in float vRadiusWithPadding;

flat in lowp vec4 vFillColor;
flat in lowp vec4 vStrokeColor;
flat in lowp float vShape;
flat in lowp float vHalfStrokeWidth;

flat in mat2 vRotationMatrix;

out lowp vec4 fragColor;

const float CIRCLE = 0.0;
const float SQUARE = 1.0;
const float TRIANGLE_UP = 2.0;
const float CROSS = 3.0;
const float DIAMOND = 4.0;
const float TRIANGLE_DOWN = 5.0;
const float TRIANGLE_RIGHT = 6.0;
const float TRIANGLE_LEFT = 7.0;


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

float equilateralTriangle(vec2 p, float r, bool flip, bool swap) {
    if (swap) {
        p.xy = p.yx;
    }
    if (flip) {
        p.y = -p.y;
    }

    float k = sqrt(3.0);
    float kr = k * r;
    //p.y -= kr * 2.0 / 3.0;
    p.y -= kr / 2.0;
    return max((abs(p.x) * k + p.y) / 2.0, -p.y - kr);
}

float crossShape(vec2 p, float r) {
    p = abs(p);

	vec2 b = vec2(0.4, 1.0) * r;
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

	/** Normalized point coord */
    vec2 p = vRotationMatrix * (2.0 * gl_PointCoord - 1.0) * vRadiusWithPadding;
	float r = vRadius;

    // We could also use textures here. Could even be faster, because we have plenty of branching here.
    if (vShape == CIRCLE) {
        d = circle(p, r);

    } else if (vShape == SQUARE) {
        d = square(p, r);

    } else if (vShape == TRIANGLE_UP) {
        d = equilateralTriangle(p, r, true, false);

    } else if (vShape == CROSS) {
        d = crossShape(p, r);

    } else if (vShape == DIAMOND) {
        d = diamond(p, r);

    } else if (vShape == TRIANGLE_DOWN) {
        d = equilateralTriangle(p, r, false, false);

    } else if (vShape == TRIANGLE_RIGHT) {
        d = equilateralTriangle(p, r, false, true);

    } else if (vShape == TRIANGLE_LEFT) {
        d = equilateralTriangle(p, r, true, true);

    } else {
        d = 0.0;
    }

	if (!uPickingEnabled) {
		lowp vec4 fillColor = mix(vFillColor, white, -d * uGradientStrength / vRadius);

		fragColor = distanceToColor(
			d + (uInwardStroke ? vHalfStrokeWidth : 0.0),
			fillColor,
			vStrokeColor,
			vHalfStrokeWidth);

	} else if (d - vHalfStrokeWidth <= 0.0) {
        fragColor = vPickingColor;

	} else {
		discard;
    }
}

`;const U=1<<0,X=1<<1,$o={};class C{get behavior(){return 0}constructor(){this.children=[],this.parent=void 0,this.completed=!1}reset(){this.completed=!1;for(const e of this.children)e.reset()}initialize(){}_updatePropagator(){this._propagate=Function("children",ke(this.children.length).map(e=>`const child${e} = children[${e}];`).join(`
`)+`return function propagate(datum) {${ke(this.children.length).map(e=>`child${e}.handle(datum);`).join(`
`)}}`)(this.children)}setParent(e){this.parent=e}addChild(e){if(e.parent)throw new Error("Cannot add the child! It already has a parent.");return this.children.push(e),e.setParent(this),this._updatePropagator(),this}adopt(e){e.parent&&e.parent.removeChild(e),this.addChild(e)}adoptChildrenOf(e){for(const t of e.children)this.adopt(t)}insertAsParent(e){if(this.isRoot())throw new Error("Cannot insert a new parent for a root node!");e.parent=this.parent,this.parent.children[this.parent.children.indexOf(this)]=e,this.parent._updatePropagator(),this.parent=void 0,e.addChild(this)}removeChild(e){const t=this.children.indexOf(e);if(t>-1)this.children.splice(t,1),e.parent=void 0,this._updatePropagator();else throw new Error("Trying to remove an unknown child node!")}excise(){if(this.isRoot())throw new Error("Cannot excise root node!");if(this.isTerminal())this.parent.removeChild(this);else if(this.children.length==1){const e=this.children[0];e.setParent(this.parent),this.parent.children[this.parent.children.indexOf(this)]=e,this.parent._updatePropagator(),this.setParent(void 0),this.children.length=0}else throw new Error("Cannot excise a node that has multiple children!")}isRoot(){return!this.parent}isBranching(){return this.children.length>1}isTerminal(){return this.children.length==0}visit(e){e(this);for(const t of this.children)t.visit(e);e.afterChildren&&e.afterChildren(this)}subtreeToString(e=0){var i;const t=this.children.map(s=>s.subtreeToString(e+1)).join("");return" ".repeat(e*2)+"* "+((i=/^class ([A-Za-z0-9_]+)/.exec(""+this.constructor))==null?void 0:i[1])+`
`+t}getGlobalObject(){return this.parent?this.parent.getGlobalObject():$o}handle(e){this._propagate(e)}complete(){this.completed=!0;for(const e of this.children)e.complete()}beginBatch(e){for(const t of this.children)t.beginBatch(e)}_propagate(e){}}function Ri(n){return n.type=="file"}function zo(n){return n.type=="facet"}class $i extends C{constructor(e){super();this.k=e.size||500,this.reset()}reset(){super.reset(),this.reservoir=[],this.W=void 0,this.ingester=this._initialIngester}_initialIngester(e){this.reservoir.push(e),this.reservoir.length==this.k&&(this.W=Math.exp(Math.log(Math.random())/this.k),this.i=this.k,this.next=this.i,this.ingester=this._finalIngester,this._setNextStop())}_finalIngester(e){++this.i==this.next&&(this.reservoir[Math.floor(Math.random()*this.k)]=e,this.W*=Math.exp(Math.log(Math.random())/this.k),this._setNextStop())}_setNextStop(){this.next+=Math.floor(Math.log(Math.random())/Math.log(1-this.W))+1}handle(e){this.ingester(e)}complete(){for(const e of this.reservoir)this._propagate(e);super.complete()}}function Mo(n,e,t){const i=new $i({type:"sample",size:n});for(const s of e)i.handle(t(s));return i.complete(),i.reservoir}const Lo={};class No extends Se{constructor(e){super(e);Object.defineProperties(this.defaultProperties,Object.getOwnPropertyDescriptors({x:.5,y:.5,color:"#4c78a8",filled:!0,opacity:1,size:100,semanticScore:0,shape:"circle",strokeWidth:2,fillGradientStrength:0,dx:0,dy:0,angle:0,sampleFacetPadding:.1,semanticZoomFraction:.02}))}getAttributes(){return["inwardStroke","uniqueId","facetIndex","x","y","size","semanticScore","shape","strokeWidth","gradientStrength","dx","dy","fill","stroke","fillOpacity","strokeOpacity","angle"]}getSupportedChannels(){return[...super.getSupportedChannels(),"size","semanticScore","shape","strokeWidth","dx","dy","fill","stroke","fillOpacity","strokeOpacity","angle"]}getDefaultEncoding(){return v(v({},super.getDefaultEncoding()),Lo)}fixEncoding(e){return Ai(e,this.properties.filled),Fi(e,this.properties.filled),delete e.color,delete e.opacity,e}initializeData(){super.initializeData();const e=this.unitView.getAccessor("semanticScore");e&&(this.sampledSemanticScores=Float32Array.from(Mo(1e4,this.unitView.getCollector().getData(),e)),this.sampledSemanticScores.sort((t,i)=>t-i))}async initializeGraphics(){await super.initializeGraphics(),this.createAndLinkShaders(Fo,Ro)}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);const e=this.properties;P(this.programInfo,{uInwardStroke:e.inwardStroke,uGradientStrength:e.fillGradientStrength,uMaxRelativePointDiameter:1-2*e.sampleFacetPadding})}updateGraphicsData(){const e=this.unitView.getCollector(),t=e.getItemCount(),i=new uo({encoders:this.encoders,attributes:this.getAttributes(),numItems:Math.max(t,this.properties.minBufferSize||0)});i.addBatches(e.facetBatches);const s=i.toArrays();this.rangeMap=s.rangeMap,this.updateBufferInfo(s)}_getGeometricScaleFactor(){const e=Math.pow(2,this.properties.geometricZoomBound||0);return Math.pow(Math.min(1,this.unitView.getZoomLevel()/e),1/3)}_getMaxPointSize(){const e=this.encoders.size;return e.constant?e(null):e.scale.range().reduce((t,i)=>Math.max(t,i))}getSemanticThreshold(){if(this.sampledSemanticScores){const e=Math.max(0,1-this.properties.semanticZoomFraction*this.unitView.getZoomLevel());if(e<=0)return-1/0;if(e>=1)return 1/0;{const t=this.sampledSemanticScores;return Wn(t,e)}}else return-1}prepareRender(e){super.prepareRender(e),P(this.programInfo,{uMaxPointSize:this._getMaxPointSize(),uScaleFactor:this._getGeometricScaleFactor(),uSemanticThreshold:this.getSemanticThreshold()}),ge(this.gl,this.programInfo,this.vertexArrayInfo);const t=this.encoders.x;if(t&&!t.constant){const i=li(t.accessor).left,s=this.unitView.getScaleResolution("x").getScale().domain(),o=yt(s,null,1.01);this._findIndices=r=>{const a=this.unitView.getCollector().facetBatches.get(r);return[i(a,o[0]),i(a,o[o.length-1])]}}}render(e){const t=this.gl;return this.createRenderCallback((i,s)=>{const[o,r]=this._findIndices?this._findIndices(e.facetId):[0,s],a=r-o;a&&ye(t,this.vertexArrayInfo,t.POINTS,a,i+o)},e,()=>this.rangeMap)}}var Vo=`// Line caps
const int BUTT = 0;
const int SQUARE = 1;
const int ROUND = 2;

/** Position along the rule */
in float pos;

/** Which side of the stroke: -0.5 or 0.5 */
in float side;

/** Minimum rule length in pixels */
uniform float uMinLength;

uniform float uDashTextureSize;
uniform lowp int uStrokeCap;

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

    vec2 a = applySampleFacet(vec2(getScaled_x(), getScaled_y()));
    vec2 b = applySampleFacet(vec2(getScaled_x2(), getScaled_y2()));

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
`,Bo=`// Line ending
const int BUTT = 0;
const int SQUARE = 1;
const int ROUND = 2;

uniform sampler2D uDashTexture;
uniform float uDashTextureSize;
uniform float uStrokeDashOffset;
uniform lowp int uStrokeCap;

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
`;class qo extends Se{constructor(e){super(e);this.dashTextureSize=0,Object.defineProperties(this.defaultProperties,Object.getOwnPropertyDescriptors({x2:void 0,y2:void 0,size:1,color:"black",opacity:1,minLength:0,strokeDash:null,strokeDashOffset:0,strokeCap:"butt"}))}getAttributes(){return["uniqueId","facetIndex","x","x2","y","y2","size","color","opacity"]}getSupportedChannels(){return[...super.getSupportedChannels(),"x2","y2","size"]}fixEncoding(e){if(!(e.x&&e.y&&e.x2&&e.y2))if(e.x&&e.x2&&!e.y)e.y={value:.5},e.y2=e.y;else if(e.y&&e.y2&&!e.x)e.x={value:.5},e.x2=e.x;else if(e.x&&!e.y)e.y={value:0},e.y2={value:1},e.x2=e.x;else if(e.y&&!e.x)e.x={value:0},e.x2={value:1},e.y2=e.y;else if(e.x&&e.y&&e.y2)e.x2=e.x;else if(e.y&&e.x&&e.x2)e.y2=e.y;else if(e.y&&e.x)if(!e.x2&&A(e.y)&&e.y.type=="quantitative")e.x2=e.x,e.y2={datum:0};else if(!e.y2&&A(e.x)&&e.x.type=="quantitative")e.y2=e.y,e.x2={datum:0};else throw new Error("A bug!");else throw new Error("Invalid x and y encodings for rule mark: "+JSON.stringify(e));return e}async initializeGraphics(){if(await super.initializeGraphics(),this.properties.strokeDash){const e=this.gl,t=jo(this.properties.strokeDash);this.dashTexture=Oe(e,{mag:e.NEAREST,min:e.NEAREST,internalFormat:e.R8,format:e.RED,src:t,height:1}),this.dashTextureSize=t.length}this.createAndLinkShaders(Vo,Bo)}updateGraphicsData(){const e=this.unitView.getCollector(),t=e.getItemCount(),i=new po({encoders:this.encoders,attributes:this.getAttributes(),numItems:Math.max(t,this.properties.minBufferSize||0),buildXIndex:this.properties.buildIndex});i.addBatches(e.facetBatches);const s=i.toArrays();this.rangeMap=s.rangeMap,this.updateBufferInfo(s)}prepareRender(e){super.prepareRender(e),P(this.programInfo,{uMinLength:this.properties.minLength,uDashTextureSize:this.dashTextureSize,uStrokeCap:["butt","square","round"].indexOf(this.properties.strokeCap)}),this.dashTexture&&P(this.programInfo,{uDashTexture:this.dashTexture,uStrokeDashOffset:this.properties.strokeDashOffset}),ge(this.gl,this.programInfo,this.vertexArrayInfo)}render(e){const t=this.gl;return this.createRenderCallback((i,s)=>ye(t,this.vertexArrayInfo,t.TRIANGLE_STRIP,s,i),e,()=>this.rangeMap)}}function jo(n){if(n.length==0||n.length%2||n.findIndex(o=>Math.round(o)!=o||o<1||o>1e3)>=0)throw new Error("Invalid stroke dash pattern: "+JSON.stringify(n));const e=n.reduce((o,r)=>o+r),t=new Uint8Array(e);let i=!0,s=0;for(let o of n){for(;o;)t[s++]=i&&255||0,o--;i=!i}return t}var Uo=`uniform float uSagittaScaleFactor;

/** Make very small arcs visible */
uniform float uMinSagittaLength;

in vec2 strip;

out vec4 vColor;

/** Stroke width */
out float vSize;

/** The distance from the line center to the direction of normal in pixels */
out float vNormalLengthInPixels;

void main(void) {
    float pixelSize = 1.0 / uDevicePixelRatio;
    float opacity = getScaled_opacity() * uViewOpacity;

    vec2 a = vec2(getScaled_x(), getScaled_y()) * uViewportSize;
    vec2 b = vec2(getScaled_x2(), getScaled_y2()) * uViewportSize;
    
    vec2 chordVector = b - a;
    vec2 unitChordVector = normalize(chordVector);
    vec2 chordNormal = vec2(-unitChordVector.y, unitChordVector.x);

    float sagitta = max(
        length(chordVector) / 2.0 * uSagittaScaleFactor,
        uMinSagittaLength
    );

    bool compress = false;
    if (compress) {
        // Work in progres...
        float maxSagittaLen = length(chordNormal * uViewportSize);
        float maxChordLen = length(unitChordVector * uViewportSize);

        float threshold = maxSagittaLen * 0.5;
        if (sagitta > threshold) {
            float m = (maxSagittaLen - threshold) / (maxChordLen - threshold);
            sagitta = (sagitta - threshold) * m + threshold;
        }
    }

    vec2 controlOffset = chordNormal * sagitta / 0.75;

    vec2 p1 = a;
    vec2 p2 = a + controlOffset;
    vec2 p3 = b + controlOffset;
    vec2 p4 = b;

    // Make segments shorter near the endpoints to make the tightly bent attachment points smoother
    float t = smoothstep(0.0, 1.0, strip.x);

    // https://stackoverflow.com/a/31317254/1547896
    vec2 C1 = p4 - 3.0 * p3 + 3.0 * p2 - p1;
    vec2 C2 = 3.0 * p3 - 6.0 * p2 + 3.0 * p1;
    vec2 C3 = 3.0 * p2 - 3.0 * p1;
    vec2 C4 = p1;

    vec2 p;
    // Skip computation at endpoints to maintain precision
    if (t == 0.0) {
        p = p1;
    } else if (t == 1.0) {
        p = p4;
    } else {
        p = C1*t*t*t + C2*t*t + C3*t + C4;
    }

    vec2 tangent = normalize(3.0*C1*t*t + 2.0*C2*t + C3);
    vec2 normal = vec2(-tangent.y, tangent.x);

    //p = applySampleFacet(p);

#ifdef size2_DEFINED
    float mixedSize = mix(getScaled_size(), getScaled_size2(), t);
#else
    float mixedSize = getScaled_size();
#endif

    // Avoid artifacts in very thin lines by clamping the size and adjusting opacity respectively
    if (mixedSize < pixelSize) {
        opacity *= mixedSize / pixelSize;
        mixedSize = pixelSize;
    }

    // Add an extra pixel to stroke width to accommodate edge antialiasing
    float paddedSize = mixedSize + pixelSize;

    vNormalLengthInPixels = strip.y * paddedSize;
    
    // Extrude
    p += normal * vNormalLengthInPixels;

    gl_Position = pixelsToNdc(p);

#ifdef color2_DEFINED
    // Yuck, RGB interpolation in gamma space!
    // TODO: linear space: https://unlimited3d.wordpress.com/2020/01/08/srgb-color-space-in-opengl/
    vec3 color = mix(getScaled_color(), getScaled_color2(), t);
#else 
    vec3 color = getScaled_color();
#endif

    vColor = vec4(color * opacity, opacity);

    vSize = paddedSize;

    setupPicking();
}
`,Go=`in lowp vec4 vColor;
in float vSize;
in float vNormalLengthInPixels;

out lowp vec4 fragColor;

void main(void) {
    float dpr = uDevicePixelRatio;

    float distance = abs(vNormalLengthInPixels);
    float opacity = clamp(((vSize / 2.0 - distance) * dpr), 0.0, 1.0);

    fragColor = vColor * opacity;

    if (uPickingEnabled) {
        fragColor = vPickingColor;
    }
}
`;class Wo extends Se{constructor(e){super(e);Object.defineProperties(this.defaultProperties,Object.getOwnPropertyDescriptors({x:0,x2:void 0,y:0,y2:void 0,size:1,color:"black",opacity:1,segments:101,sagittaScaleFactor:1,minSagittaLength:1.5}))}getAttributes(){return["uniqueId","facetIndex","x","x2","y","y2","size","height","color","opacity"]}getSupportedChannels(){return[...super.getSupportedChannels(),"x2","y2","size"]}fixEncoding(e){return e.x||(e.x2=e.x),e.y2||(e.y2=e.y),e}async initializeGraphics(){await super.initializeGraphics(),this.createAndLinkShaders(Uo,Go)}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);const e=this.properties;P(this.programInfo,{uSagittaScaleFactor:e.sagittaScaleFactor,uMinSagittaLength:e.minSagittaLength})}updateGraphicsData(){const e=this.unitView.getCollector(),t=e.getItemCount(),i=new mo({encoders:this.encoders,attributes:this.getAttributes(),numItems:t});i.addBatches(e.facetBatches);const s=i.toArrays();s.arrays.strip={data:Ho(this.properties.segments),numComponents:2},this.rangeMap=s.rangeMap,this.arrays=Object.fromEntries(Object.entries(s.arrays).map(([o,r])=>[o,T(v({},r),{data:void 0})])),this.updateBufferInfo(s)}render(e){const t=this.gl;return this.createRenderCallback((i,s)=>{this.gl.bindVertexArray(this.vertexArrayInfo.vertexArrayObject);for(const o of Object.entries(this.bufferInfo.attribs)){const[r,a]=o;a.buffer&&this.arrays[r].numComponents&&(a.offset=i*this.arrays[r].numComponents*4)}ge(t,this.programInfo,this.bufferInfo),ye(t,this.bufferInfo,t.TRIANGLE_STRIP,(this.properties.segments+1)*2,0,s)},e,()=>this.rangeMap)}}function Ho(n){let e=0;const t=[];for(;e<=n;e++)t.push(e/n,.5),t.push(e/n,-.5);return t}var Xo=`uniform float uSdfNumerator;

uniform vec2 uD; // dx & dy

in mediump vec2 vertexCoord;
in lowp vec2 textureCoord;

uniform vec4 uViewportEdgeFadeWidth;
uniform vec4 uViewportEdgeFadeDistance;
    
uniform bool uSqueeze;
uniform bool uLogoLetter;

// Width of the text (all letters)
in float width;

// x: -1, 0, 1 = left, center, right
// y: -1, 0, 1 = top, middle, bottom 
uniform ivec2 uAlign;

#ifdef x2_DEFINED
uniform float uPaddingX;
uniform bool uFlushX;
#endif

#ifdef y2_DEFINED
uniform float uPaddingY;
uniform bool uFlushY;
#endif

out vec2 vTexCoord;
flat out vec4 vColor;
flat out float vSlope;
out float vEdgeFadeOpacity;

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
    float x = getScaled_x();
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
    float x2 = getScaled_x2();

    if (uLogoLetter) {
        size.x = (x2 - x) * uViewportSize.x;
        x += (x2 - x) / 2.0;

    } else {
        float x2 = getScaled_x2();
        RangeResult result = positionInsideRange(
            min(x, x2), max(x, x2),
            size.x * scale * flushSize.x / uViewportSize.x, uPaddingX / uViewportSize.x,
            align.x, uFlushX);
        
        x = result.pos;
        scale *= result.scale;
    }
#endif

    // Position of the text origo 
    vec2 pos = applySampleFacet(vec2(x, y));

#ifdef y2_DEFINED
    float y2 = getScaled_y2();
    vec2 pos2 = applySampleFacet(vec2(x, y2));

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
    vSlope = max(1.0, min(size.x, size.y) / uSdfNumerator);

    vColor = vec4(getScaled_color() * opacity, opacity);

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
`,Zo=`uniform sampler2D uTexture;

in vec2 vTexCoord;
in float vEdgeFadeOpacity;
flat in vec4 vColor;
flat in float vSlope;

out lowp vec4 fragColor;

float median(float r, float g, float b) {
    return max(min(r, g), min(max(r, g), b));
}

void main() {
    // TODO: Really small text should fall back to normal (non-SDF) texture that can be mip-mapped.
    // Currently small text has severe aliasing artifacts.

    vec3 c = texture(uTexture, vTexCoord).rgb;

    float sigDist = 1.0 - median(c.r, c.g, c.b);
    float opa = clamp((sigDist - 0.5) * vSlope + 0.5, 0.0, 1.0);

    // Raise to the power of 2.2 to do some cheap gamma correction
    opa *= pow(clamp(vEdgeFadeOpacity, 0.0, 1.0), 2.2);

    fragColor = vColor * opa;

    if (uPickingEnabled) {
        fragColor = vPickingColor;
    }
}
`;const Jo={left:-1,center:0,right:1},Yo={top:-1,middle:0,bottom:1,alphabetic:1};class Ko extends Se{constructor(e){super(e);Object.defineProperties(this.defaultProperties,Object.getOwnPropertyDescriptors({x:.5,y:.5,x2:void 0,y2:void 0,text:"",size:11,color:"black",opacity:1,font:void 0,fontStyle:void 0,fontWeight:void 0,align:"center",baseline:"middle",dx:0,dy:0,angle:0,fitToBand:!1,squeeze:!0,paddingX:0,paddingY:0,flushX:!0,flushY:!0,logoLetters:!1,viewportEdgeFadeWidthTop:0,viewportEdgeFadeWidthRight:0,viewportEdgeFadeWidthBottom:0,viewportEdgeFadeWidthLeft:0,viewportEdgeFadeDistanceTop:-1/0,viewportEdgeFadeDistanceRight:-1/0,viewportEdgeFadeDistanceBottom:-1/0,viewportEdgeFadeDistanceLeft:-1/0})),this.font=this.properties.font?e.context.fontManager.getFont(this.properties.font,this.properties.fontStyle,this.properties.fontWeight):e.context.fontManager.getDefaultFont()}getAttributes(){return["uniqueId","facetIndex","x","x2","y","y2","color","size","opacity","angle"]}getSupportedChannels(){return[...super.getSupportedChannels(),"x2","y2","size","text","angle"]}fixEncoding(e){for(const t of xe)this.properties.fitToBand&&rt(e,t);return e}async initializeGraphics(){await super.initializeGraphics(),this.createAndLinkShaders(Xo,Zo)}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);const e=this.properties;P(this.programInfo,{uPaddingX:e.paddingX,uPaddingY:e.paddingY,uFlushX:!!e.flushX,uFlushY:!!e.flushY,uAlign:[Jo[e.align],Yo[e.baseline]],uD:[e.dx,-e.dy],uLogoLetter:!!e.logoLetters,uSqueeze:!!e.squeeze,uViewportEdgeFadeWidth:[e.viewportEdgeFadeWidthTop,e.viewportEdgeFadeWidthRight,e.viewportEdgeFadeWidthBottom,e.viewportEdgeFadeWidthLeft],uViewportEdgeFadeDistance:[e.viewportEdgeFadeDistanceTop,e.viewportEdgeFadeDistanceRight,e.viewportEdgeFadeDistanceBottom,e.viewportEdgeFadeDistanceLeft]})}updateGraphicsData(){const e=this.unitView.getCollector(),t=e.getData(),i=this.encoding,s=this.encoders.text.accessor||this.encoders.text;let o=0;const r=i.text.format?k(i.text.format):c=>c;for(const c of t){const f=r(s(c)),d=I(f)?f:f===null?"":""+f;o+=d&&d.length||0}const a=new go({encoders:this.encoders,attributes:this.getAttributes(),properties:this.properties,fontMetrics:this.font.metrics,numCharacters:Math.max(o,this.properties.minBufferSize||0),buildXIndex:this.properties.buildIndex});a.addBatches(e.facetBatches);const l=a.toArrays();this.rangeMap=l.rangeMap,this.updateBufferInfo(l)}prepareRender(e){super.prepareRender(e);let t=.35;this.properties.logoLetters&&(t/=2),P(this.programInfo,{uTexture:this.font.texture,uSdfNumerator:this.font.metrics.common.base/(this.glHelper.dpr/t)}),ge(this.gl,this.programInfo,this.vertexArrayInfo)}render(e){const t=this.gl;return this.createRenderCallback((i,s)=>ye(t,this.vertexArrayInfo,t.TRIANGLES,s,i),e,()=>this.rangeMap)}}function Qo(n,e,{spacing:t,devicePixelRatio:i,offset:s,reverse:o}={}){t=t||0,s=s||0;let r=0,a=0;for(const p of n)r+=de(p.px)+(Pe(p)?0:t),a+=de(p.grow);r-=t;const l=Math.max(0,e-r),c=i!==void 0?p=>Math.round(p*i)/i:p=>p,f=[],d=[],h=p=>{const m=f.length;if(!m)return;const y=(p?t:0)*(o?-1:1);u-=y;for(let g=0;g<m;g++)d.push({location:u+(g+1)/(m+1)*y,size:0});u+=y,f.length=0};let u=o?Math.max(e,r):0+s;if(n.length==1&&Pe(n[0]))return[{location:u,size:0}];for(let p=0;p<n.length;p++){const m=n[p];if(Pe(m))f.push(m);else{h(d.length>0);const y=de(m.px)+(a?de(m.grow)/a*l:0);o&&(u-=y),d.push({location:c(u),size:c(y)}),o?u-=t:u+=y+t}}return u+=o?t:-t,h(!1),d}function er(n,{spacing:e}={spacing:0}){let t=0;for(const i of n)t+=de(i.px)+(Pe(i)?0:e);return Math.max(0,t-e)}class W{constructor(e,t){this.width=e,this.height=t}addPadding(e){return new W({px:(this.width.px||0)+e.width,grow:this.width.grow},{px:(this.height.px||0)+e.height,grow:this.height.grow})}}const qt=Object.freeze({px:0,grow:0}),zi=new W(qt,qt);function Pe(n){return!n.px&&!n.grow}function de(n){return n||0}function tr(n){return n&&(O(n.px)||O(n.grow))}function at(n){if(Li(n))throw new Error("parseSizeDef does not accept step-based sizes.");if(tr(n))return n;if(O(n))return{px:n,grow:0};if(n==="container")return{px:0,grow:1};if(!n)return{px:0,grow:1};throw new Error(`Invalid sizeDef: ${n}`)}class ${constructor(e,t,i,s){this.top=e||0,this.right=t||0,this.bottom=i||0,this.left=s||0}get width(){return this.left+this.right}get height(){return this.top+this.bottom}expand(e){return e<=0?this:new $(this.top+e,this.right+e,this.bottom+e,this.left+e)}add(e){return new $(this.top+e.top,this.right+e.right,this.bottom+e.bottom,this.left+e.left)}static createFromConfig(e){return typeof e=="number"?this.createUniformPadding(e):e?this.createFromRecord(e):lt}static createFromRecord(e){return new $(e.top,e.right,e.bottom,e.left)}static zero(){return lt}static createUniformPadding(e){return new $(e,e,e,e)}}const lt=$.createUniformPadding(0);Object.freeze(lt);const ir=/^([A-Za-z]+:)?\/\//;function nr(n,e){if(e&&ir.test(e))return e;const t=n();return t&&e?t.endsWith("/")?t+e:t+"/"+e:t!=null?t:e}const Re="VISIT_SKIP",me="VISIT_STOP",jt=n=>n;class Mi{constructor(e,t,i,s){this.context=t,this.parent=i,this.name=e.name||s,this.spec=e,this.resolutions={scale:{},axis:{}},this._broadcastHandlers={},this._capturingInteractionEventListeners={},this._nonCapturingInteractionEventListeners={},Pi(this),this.opacityFunction=jt}getPadding(){return this._cache("size/padding",()=>$.createFromConfig(this.spec.padding))}getEffectivePadding(){return this.getPadding()}getSize(){return this._cache("size/size",()=>this.isVisible()?this.getSizeFromSpec().addPadding(this.getPadding()):zi)}getSizeFromSpec(){const e=t=>{var s,o;let i=this.spec[t];if(Li(i)){const r=i.step,a=(s=this.getScaleResolution(t=="width"?"x":"y"))==null?void 0:s.getScale();if(a){let l=0;if(ee(a.type))l=a.domain().length;else if(["locus","index"].includes(a.type)){const f=a.domain();l=F(f)-f[0]}else throw new Error(`Cannot use step-based size with "${a.type}" scale!`);const c=a;return l=ci(l,c.paddingInner(),c.paddingOuter()),{px:l*r,grow:0}}else throw new Error("Cannot use 'step' size with missing scale!")}else return(o=i&&at(i))!=null?o:{px:0,grow:1}};return this._cache("size/sizeFromSpec",()=>new W(e("width"),e("height")))}isVisible(){return this.context.isViewVisible(this)}isVisibleInSpec(){var e;return(e=this.spec.visible)!=null?e:!0}getEffectiveOpacity(){var e,t;return this.opacityFunction((t=(e=this.parent)==null?void 0:e.getEffectiveOpacity())!=null?t:1)}getPathString(){return[...this.getAncestors()].map(e=>e.name).reverse().join("/")}*getAncestors(){let e=this;do yield e,e=e.parent;while(e)}handleBroadcast(e){for(const t of this._broadcastHandlers[e.type]||[])t(e)}_addBroadcastHandler(e,t){let i=this._broadcastHandlers[e];i||(i=[],this._broadcastHandlers[e]=i),i.push(t)}handleInteractionEvent(e,t,i){const s=i?this._capturingInteractionEventListeners:this._nonCapturingInteractionEventListeners;for(const o of s[t.type]||[])o(e,t)}addInteractionEventListener(e,t,i){const s=i?this._capturingInteractionEventListeners:this._nonCapturingInteractionEventListeners;let o=s[e];o||(o=[],s[e]=o),o.push(t)}visit(e){try{const t=e(this);if(e.postOrder&&e.postOrder(this),t!==me)return t}catch(t){throw t.view=this,t}}onScalesResolved(){(!this.opacityFunction||this.opacityFunction===jt)&&(this.opacityFunction=or(this))}onBeforeRender(){}render(e,t,i={}){}getEncoding(e){const t=this.parent?this.parent.getEncoding(this):{},i=this.spec.encoding||{},s=v(v({},t),i);for(const[o,r]of Object.entries(s))r===null&&delete s[o];return s}getFacetAccessor(e){if(this.parent)return this.parent.getFacetAccessor(this)}getFacetFields(e){var i;const t=this.getEncoding().sample;return be(t)?[t.field]:(i=this.parent)==null?void 0:i.getFacetFields(this)}getSampleFacetTexture(){}_getResolution(e,t){e=ae(e);let i=this;do{const s=i.resolutions[t][e];if(s)return s;i=i.parent}while(i)}getScaleResolution(e){return this._getResolution(e,"scale")}getAxisResolution(e){return this._getResolution(e,"axis")}getBaseUrl(){return nr(()=>{var e;return(e=this.parent)==null?void 0:e.getBaseUrl()},this.spec.baseUrl)}getDynamicDataSource(){throw new Error("The view does not provide dynamic data!")}isPickingSupported(){return!0}_cache(e,t){return re(this,e,t)}_invalidateCacheByPrefix(e,t="self"){switch(t){case"self":Ie(this,e);break;case"ancestors":for(const i of this.getAncestors())Ie(i,e);break;case"progeny":this.visit(i=>Ie(i,e));break}}invalidateSizeCache(){this._invalidateCacheByPrefix("size/","ancestors")}}function sr(n){return"unitsPerPixel"in n}function or(n){const e=n.spec.opacity;if(e!==void 0){if(O(e))return t=>t*e;if(sr(e)){const t=o=>{var a;const r=(a=n.getScaleResolution(o))==null?void 0:a.getScale();if(["linear","index","locus"].includes(r==null?void 0:r.type))return r},i=e.channel?t(e.channel):t("x")||t("y");if(!i)throw new Error("Cannot find a resolved quantitative scale for dynamic opacity!");const s=Hn().domain(e.unitsPerPixel).range(e.values).clamp(!0);return o=>{const a=Ae(i.domain())/1e3;return s(a)*o}}}return t=>t}const Li=n=>!!(n==null?void 0:n.step);class q extends Mi{constructor(e,t,i,s){super(e,t,i,s);this.spec=e}*[Symbol.iterator](){}replaceChild(e,t){throw new Error("Not implemented")}visit(e){let t;try{t=e(this)}catch(i){throw i.view=this,i}if(t===me)return t;if(t!==Re){e.beforeChildren&&e.beforeChildren(this);for(const i of this){const s=i.visit(e);if(s===me)return s}e.afterChildren&&e.afterChildren(this),e.postOrder&&e.postOrder(this)}}findDescendantByPath(e){for(const t of this)if(t.name===e[0]){if(e.length==1)return t;if(t instanceof q)return t.findDescendantByPath(e.slice(1))}}findChildByName(e){for(const t of this)if(t.name===e)return t}getConfiguredResolution(e,t){var i,s;return(s=(i=this.spec.resolve)==null?void 0:i[t])==null?void 0:s[e]}getDefaultResolution(e,t){return"shared"}getConfiguredOrDefaultResolution(e,t){var i,s;return(s=(i=this.getConfiguredResolution(e,t))!=null?i:this.getConfiguredResolution("default",t))!=null?s:this.getDefaultResolution(e,t)}}function $e(n,e,t){if(t=t||[],n.some(r=>r===null)){if(n.every(r=>r===null))return null;throw console.warn(n),new Error("Cannot merge objects with nulls!")}const i={},s=(r,a)=>r===a||ne(r)&&ne(a)||ne(r)&&a===!0||r===!0&&H(a),o=r=>{for(let a in r){const l=r[a];if(!t.includes(a)&&l!==void 0)if(i[a]!==void 0&&!s(i[a],l))console.warn(`Conflicting property ${a} of ${e}: (${JSON.stringify(i[a])} and ${JSON.stringify(r[a])}). Using ${JSON.stringify(i[a])}.`);else{const c=i[a];if(ne(c))ne(l)&&(i[a]=$e([c,l],a));else if(ne(l)){if(!(c===!0||c===void 0))throw new Error("Bug in merge! Target is: "+c);i[a]=$e([{},l],a)}else i[a]=l}}};for(const r of n)o(r);return i}function ne(n){return H(n)&&!Array.isArray(n)}/*!
 * Adapted from vega-encode:
 * https://github.com/vega/vega/blob/master/packages/vega-encode/src/ticks.js
 *
 * Copyright (c) 2015-2018, University of Washington Interactive Data Lab
 * All rights reserved.
 *
 * BSD-3-Clause License: https://github.com/vega/vega-lite/blob/master/LICENSE
 */function Ni(n,e,t){return O(e)&&t!=null&&(e=Math.min(e,~~(Ae(n.domain())/t)||1)),H(e)&&(e=e.interval),e}function Vi(n,e,t){var i=n.range(),s=Math.floor(i[0]),o=Math.ceil(he(i));if(s>o&&(i=o,o=s,s=i),e=e.filter(function(a){return a=n(a),s<=a&&a<=o}),t>0&&e.length>1){for(var r=[e[0],he(e)];e.length>t&&e.length>=3;)e=e.filter(function(a,l){return!(l%2)});e.length<3&&(e=r)}return e}function rr(n,e){return n.bins?Vi(n,ar(n.bins,e)):n.ticks?n.ticks(e):n.domain()}function ar(n,e){var t=n.length,i=~~(t/(e||t));return i<2?n.slice():n.filter(function(s,o){return!(o%i)})}function lr(n,e,t){var i=n.tickFormat?n.tickFormat(e,t):t?k(t):String;if(di(n.type)){var s=dr(t);i=n.bins?s:cr(i,s)}return i}function cr(n,e){return function(t){return n(t)?e(t):""}}function dr(n){var e=Xn(n||",");if(e.precision==null){switch(e.precision=12,e.type){case"%":e.precision-=2;break;case"e":e.precision-=1;break}return fr(k(e),k(".1f")(1)[1])}else return k(e)}function fr(n,e){return function(t){var i=n(t),s=i.indexOf(e),o,r;if(s<0)return i;for(o=hr(i,s),r=o<i.length?i.slice(o):"";--o>s;)if(i[o]!=="0"){++o;break}return i.slice(0,o)+r}}function hr(n,e){var t=n.lastIndexOf("e"),i;if(t>0)return t;for(t=n.length;--t>e;)if(i=n.charCodeAt(t),i>=48&&i<=57)return t+1}/*!
 * Adapted from vega-encode:
 * https://github.com/vega/vega/blob/master/packages/vega-encode/src/Scale.js
 *
 * Copyright (c) 2015-2018, University of Washington Interactive Data Lab
 * All rights reserved.
 *
 * BSD-3-Clause License: https://github.com/vega/vega-lite/blob/master/LICENSE
 */const pr="locus",ur="index";var mr=5;function gr(n){const e=n.type;return!n.bins&&(e===Qe||e===fi||e===hi)}function Bi(n){return M(n)&&![Ce,ur,pr].includes(n)}function qi(n){return n||{warn:(e,...t)=>console.warn(e,...t)}}var yr=Zn(["set","modified","clear","type","scheme","schemeExtent","schemeCount","domain","domainMin","domainMid","domainMax","domainRaw","domainImplicit","nice","zero","bins","range","rangeStep","round","reverse","interpolate","interpolateGamma","zoom","fp64","name"]);function ji(n,e,t){t=qi(t);for(const i in n)if(!yr[i]){if(i==="padding"&&Bi(e.type))continue;Y(e[i])?e[i](n[i]):t.warn("Unsupported scale property: "+i)}Cr(e,n,Dr(e,n,wr(e,n,t)))}function br(n,e){const t=vr(n),i=Le(t);if(!i)throw new Error("Unknown scale type: "+t);const s=i();return ji(n,s,e),s}function vr(n){var e=n.type,t="",i;return e===Ce?Ce+"-"+Qe:(xr(n)&&(i=n.rawDomain?n.rawDomain.length:n.domain?n.domain.length+ +(n.domainMid!=null):0,t=i===2?Ce+"-":i===3?hs+"-":""),(t+e||Qe).toLowerCase())}function xr(n){const e=n.type;return M(e)&&e!==Jn&&e!==Yn&&(n.scheme||n.range&&n.range.length&&n.range.every(I))}function wr(n,e,t){if(!n.domain)return 0;t=qi(t);var i=Sr(n,e.domainRaw,t);if(i>-1)return i;var s=e.domain,o=n.type,r=e.zero||e.zero===void 0&&gr(n),a,l;return s?(Bi(o)&&e.padding&&s[0]!==he(s)&&(s=_r(o,s,e.range,e.padding,e.exponent,e.constant)),(r||e.domainMin!=null||e.domainMax!=null||e.domainMid!=null)&&(a=(s=s.slice()).length-1||1,r&&(s[0]>0&&(s[0]=0),s[a]<0&&(s[a]=0)),e.domainMin!=null&&(s[0]=e.domainMin),e.domainMax!=null&&(s[a]=e.domainMax),e.domainMid!=null&&(l=e.domainMid,(l<s[0]||l>s[a])&&t.warn("Scale domainMid exceeds domain min or max.",l),s.splice(a,0,l))),n.domain(Ui(o,s,t)),o===pi&&n.unknown(e.domainImplicit?Kn:void 0),e.nice&&n.nice&&n.nice(e.nice!==!0&&Ni(n,e.nice)||null),s.length):0}function Sr(n,e,t){return e?(n.domain(Ui(n.type,e,t)),e.length):-1}function _r(n,e,t,i,s,o){var r=Math.abs(he(t)-t[0]),a=r/(r-2*i),l=n===Qn?ui(e,null,a):n===hi?et(e,null,a,.5):n===fi?et(e,null,a,s||1):n===es?ts(e,null,a,o||1):yt(e,null,a);return e=e.slice(),e[0]=l[0],e[e.length-1]=l[1],e}function Ui(n,e,t){if(di(n)){var i=Math.abs(e.reduce(function(s,o){return s+(o<0?-1:o>0?1:0)},0));i!==e.length&&t.warn("Log scale domain includes zero: "+is(e))}return e}function Dr(n,e,t){let i=e.bins;if(i&&!j(i)){const s=(i.start==null||i.stop==null)&&n.domain(),o=i.start==null?s[0]:i.start,r=i.stop==null?he(s):i.stop,a=i.step;a||Ne("Scale bins parameter missing step property."),i=ke(o,r+a,a)}return i?n.bins=i:n.bins&&delete n.bins,n.type===mi&&(i?!e.domain&&!e.domainRaw&&(n.domain(i),t=i.length):n.bins=n.domain()),t}function Cr(n,e,t){var i=n.type,s=e.round||!1,o=e.range;if(e.rangeStep!=null)o=Er(i,e,t);else if(e.scheme&&(o=Ir(i,e,t),Y(o))){if(n.interpolator)return n.interpolator(o);Ne(`Scale type ${i} does not support interpolating color schemes.`)}if(o&&Me(i))return n.interpolator(gt(ct(o,e.reverse),e.interpolate,e.interpolateGamma));o&&e.interpolate&&n.interpolate?n.interpolate(os(e.interpolate,e.interpolateGamma)):Y(n.round)?n.round(s):Y(n.rangeRound)&&n.interpolate(s?rs:as),o&&n.range(ct(o,e.reverse))}function Er(n,e,t){n!==ls&&n!==Ft&&Ne("Only band and point scales support rangeStep.");var i=(e.paddingOuter!=null?e.paddingOuter:e.padding)||0,s=n===Ft?1:(e.paddingInner!=null?e.paddingInner:e.padding)||0;return[0,e.rangeStep*ci(t,s,i)]}function Ir(n,e,t){var i=e.schemeExtent,s,o;return j(e.scheme)?o=gt(e.scheme,e.interpolate,e.interpolateGamma):(s=e.scheme.toLowerCase(),o=ai(s),o||Ne(`Unrecognized scheme name: ${e.scheme}`)),t=n===cs?t+1:n===mi?t-1:n===ds||n===fs?+e.schemeCount||mr:t,Me(n)?Ut(o,i,e.reverse):Y(o)?ss(Ut(o,i),t):n===pi?o:o.slice(0,t)}function Ut(n,e,t){return Y(n)&&(e||t)?ns(n,ct(e||[0,1],t)):n}function ct(n,e){return e?n.slice().reverse():n}const Gt=k(",d");function Pr(n,e){return n.chrom+":"+Gt(Math.floor(n.pos+1))+"-"+(n.chrom!=e.chrom?e.chrom+":":"")+Gt(Math.ceil(e.pos))}const Tr="https://genomespy.app/data/genomes/";class kr{constructor(e){if(this.config=e,!this.config.contigs&&typeof this.config.name!="string")throw new Error("No name has been defined for the genome assembly!");this.chromosomes=[],this.cumulativeChromPositions=new Map,this.chromosomesByName=new Map,this.startByIndex=[],this.totalSize=0,this.config.contigs&&this.setChromSizes(this.config.contigs)}get name(){return this.config.name}async load(e){if(!this.config.contigs){this.config.baseUrl?this.baseUrl=/^http(s)?/.test(this.config.baseUrl)?this.config.baseUrl:e+"/"+this.config.baseUrl:this.baseUrl=Tr;try{this.setChromSizes(Or(await Ve({baseURL:this.baseUrl}).load(`${this.config.name}/${this.name}.chrom.sizes`)))}catch(t){throw new Error(`Could not load chrom sizes: ${t.message}`)}}}setChromSizes(e){let t=0;this.startByIndex=[0];for(let i=0;i<e.length;i++){this.startByIndex.push(t);const s=e[i].size,o=T(v({},e[i]),{continuousStart:t,continuousEnd:t+s,continuousInterval:[t,t+s],index:i,number:i+1,odd:!(i&1)});this.chromosomes.push(o);const r=o.name.replace(/^chr/i,"");for(const a of["chr"+r,"CHR"+r,"Chr"+r,o.number,""+o.number,r,o.name])this.cumulativeChromPositions.set(a,t),this.chromosomesByName.set(a,o);t+=o.size}this.totalSize=t}getExtent(){return[0,this.totalSize]}toContinuous(e,t){let i=this.cumulativeChromPositions.get(e);if(i===void 0)throw new Error("Unknown chromosome/contig: "+e);return i+ +t}toChromosome(e){if(e>=this.totalSize)return;e=Math.floor(e);const t=us(this.startByIndex,e)-1;if(t>0&&t<=this.chromosomes.length)return this.chromosomes[t-1]}toChromosomal(e){const t=this.toChromosome(e);if(!!t)return{chrom:t.name,pos:Math.floor(e)-t.continuousStart}}getChromosome(e){return this.chromosomesByName.get(e)}formatInterval(e){return Pr(...this.toChromosomalInterval(e))}toChromosomalInterval(e){const t=this.toChromosomal(e[0]+.5),i=this.toChromosomal(e[1]-.5);return i.pos+=1,[t,i]}toContinuousInterval(e){var s,o,r;let[t,i]=e;return i||(i=t),[this.toContinuous(t.chrom,(s=t.pos)!=null?s:0),this.toContinuous(i.chrom,(r=i.pos)!=null?r:(o=this.chromosomesByName.get(i.chrom))==null?void 0:o.size)]}parseInterval(e){const t=e.match(/^(chr[0-9A-Z]+)(?::([0-9,]+)(?:-(?:(chr[0-9A-Z]+):)?([0-9,]+))?)?$/);if(t){const i=t[1];if(t.slice(2).every(a=>a===void 0)){const a=this.getChromosome(i);return a?[a.continuousStart,a.continuousEnd]:void 0}const s=t[3]||i,o=parseInt(t[2].replace(/,/g,"")),r=t[4]!==void 0?parseInt(t[4].replace(/,/g,"")):o;return[this.toContinuous(i,o-1),this.toContinuous(s,r)]}}}function Or(n){return ps(n).filter(e=>/^chr[0-9A-Z]+$/.test(e[0])).map(([e,t])=>({name:e,size:parseInt(t)}))}function Gi(n){return H(n)&&"chrom"in n}function Ar(n){return n.every(Gi)}class _e extends Array{constructor(){super();this.type=void 0}extend(e){return this}extendAll(e){if(e instanceof _e&&e.type!=this.type)throw new Error(`Cannot combine different types of domains: ${this.type} and ${e.type}`);for(const t of e)this.extend(t);return this}extendAllWithAccessor(e,t){for(const i of e)this.extend(t(i));return this}}class He extends _e{constructor(){super();this.type="quantitative"}extend(e){return e==null||Number.isNaN(e)?this:(e=+e,this.length?e<this[0]?this[0]=e:e>this[1]&&(this[1]=e):(this.push(e),this.push(e)),this)}}class Wi extends _e{constructor(){super();this.type="ordinal",this.uniqueValues=new Set}extend(e){return e==null||Number.isNaN(e)?this:(this.uniqueValues.has(e)||(this.uniqueValues.add(e),this.push(e)),this)}}class Hi extends Wi{constructor(){super();this.type="nominal"}}class Fr extends _e{constructor(e){super();let t=0;for(let i=1;i<e.length;i++)t+=Math.sign(e[i]-e[i-1]);if(Math.abs(t)!=e.length-1)throw new Error("Piecewise domain must be strictly increasing or decreasing: "+JSON.stringify(e));e.forEach(i=>this.push(i))}extend(e){if(this.includes(e))return this;throw new Error("Piecewise domains are immutable and cannot be unioned!")}}const Wt={quantitative:He,index:He,locus:He,nominal:Hi,ordinal:Wi};function Ht(n,e){if(n=="quantitative"&&Rr(e)){const t=new Fr(e);return t.type=n,t}else if(Wt[n]){const t=new Wt[n];return t.type=n,e&&t.extendAll(e),t}throw new Error("Unknown type: "+n)}function Rr(n){return n&&n.length>0&&n.length!=2&&n.every(e=>typeof e=="number")}const Xt="quantitative",Xi="ordinal",Zi="nominal",dt="locus",$r="index";class zr{constructor(e){this.channel=e,this.members=[],this.type=null,this._zoomExtent=void 0,this._domainListeners=new Set,this.name=void 0,this._scale=void 0}addEventListener(e,t){if(e!="domain")throw new Error("Unsupported event type: "+e);this._domainListeners.add(t)}removeEventListener(e,t){if(e!="domain")throw new Error("Unsupported event type: "+e);this._domainListeners.delete(t)}_notifyDomainListeners(){for(const e of this._domainListeners.values())e({type:"domain",scaleResolution:this})}pushUnitView(e,t){var r;const i=tt(e,t),s=i.type,o=(r=i==null?void 0:i.scale)==null?void 0:r.name;if(o){if(this.name!==void 0&&o!=this.name)throw new Error(`Shared scales have conflicting names: "${o}" vs. "${this.name}"!`);this.name=o}if(!this.type)this.type=s;else if(s!==this.type&&!fe(t))throw new Error(`Can not use shared scale for different data types: ${this.type} vs. ${s}. Use "resolve: independent" for channel ${this.channel}`);this.members.push({view:e,channel:t})}isExplicitDomain(){return!!this.getConfiguredDomain()}_getMergedScaleProps(){return re(this,"mergedScaleProps",()=>{const e=this.members.map(t=>tt(t.view,t.channel).scale).filter(t=>t!==void 0);return $e(e,"scale",["domain"])})}getScaleProps(){return re(this,"scaleProps",()=>{var s,o;const e=this._getMergedScaleProps();if(e===null||e.type=="null")return{type:"null"};const t=v(v({},this._getDefaultScaleProperties(this.type)),e);t.type||(t.type=Mr(this.channel,this.type));const i=this.getInitialDomain();return i&&i.length>0?t.domain=i:ee(t.type)&&(t.domain=new Hi),!t.domain&&t.domainMid!==void 0&&(t.domain=[(s=t.domainMin)!=null?s:0,(o=t.domainMax)!=null?o:1]),t.type==dt&&!("fp64"in t)&&(t.fp64=!0),this.channel=="y"&&ee(t.type)&&t.reverse==null&&(t.reverse=!0),t.range&&t.scheme&&delete t.scheme,!("zoom"in t)&&["index","locus"].includes(t.type)&&(t.zoom=!0),Lr(t,this.channel),t})}getInitialDomain(){var e;return(e=this.getConfiguredDomain())!=null?e:this.type==dt?this.getGenome().getExtent():this.getDataDomain()}getConfiguredDomain(){return this._reduceDomains(e=>fe(e.channel)?void 0:e.view.getConfiguredDomain(e.channel))}getDataDomain(){return this._reduceDomains(e=>fe(e.channel)?void 0:e.view.extractDataDomain(e.channel))}reconfigure(){if(this._scale&&this._scale.type!="null"){Ii(this,"scaleProps");const e=this.getScaleProps();ji(e,this._scale),M(this._scale.type)&&(this._zoomExtent=this._getZoomExtent())}}getScale(){if(this._scale)return this._scale;const e=this.getScaleProps(),t=br(e);return this._scale=t,Fs(t)&&t.genome(this.getGenome()),t.fp64=!!e.fp64,M(t.type)&&(this._zoomExtent=this._getZoomExtent()),t}getDomain(){return this.getScale().domain()}getComplexDomain(){var e,t;return(t=(e=this.getGenome())==null?void 0:e.toChromosomalInterval(this.getDomain()))!=null?t:this.getDomain()}isZoomed(){return this.isZoomable()&&vi(this.getInitialDomain(),this.getDomain())}isZoomable(){if(!wi(this.channel))return!1;const e=this.getScale().type;return["linear","locus","index","log","pow","sqrt"].includes(e)?!!this.getScaleProps().zoom:!1}zoom(e,t,i){if(!this.isZoomable())return!1;const s=this.getScale(),o=s.domain();let r=[...o];const a=s.invert(t);switch(this.getScaleProps().reverse&&(i=-i),s.type){case"linear":case"index":case"locus":r=ys(r,i||0),r=yt(r,a,e);break;case"log":r=gs(r,i||0),r=ui(r,a,e);break;case"pow":case"sqrt":{const l=s;r=ms(r,i||0,l.exponent()),r=et(r,a,e,l.exponent());break}default:throw new Error("Zooming is not implemented for: "+s.type)}return this._zoomExtent&&(r=bs(r,this._zoomExtent[0],this._zoomExtent[1])),[0,1].some(l=>r[l]!=o[l])?(s.domain(r),this._notifyDomainListeners(),!0):!1}async zoomTo(e,t=!1){var a;if(ze(t)&&(t=t?700:0),!this.isZoomable())throw new Error("Not a zoomable scale!");const i=this.fromComplexInterval(e),s=(a=this.members[0])==null?void 0:a.view.context.animator,o=this.getScale(),r=o.domain();if(t>0&&r.length==2){const l=r[1]-r[0],c=r[0]+l/2,f=i[1]-i[0],d=i[0]+f/2,h=vs([c,0,l],[d,0,f]).rho(.7);await s.transition({duration:t/1e3*h.duration,easingFunction:xs,onUpdate:u=>{const[p,,m]=h(u);o.domain([p-m/2,p+m/2]),this._notifyDomainListeners()}}),o.domain(i),this._notifyDomainListeners()}else o.domain(i),s==null||s.requestRender(),this._notifyDomainListeners()}getZoomLevel(){return this.isZoomable()?Ae(this._zoomExtent)/Ae(this.getScale().domain()):1}_getZoomExtent(){const e=this.getScaleProps(),t=e.zoom;if(Nr(t)&&j(t.extent))return this.fromComplexInterval(t.extent);if(t)return e.type=="locus"?this.getGenome().getExtent():this._scale.domain()}_getDefaultScaleProperties(e){const t=this.channel,i={};return this.isExplicitDomain()&&(i.zero=!1),pe(t)?i.nice=!this.isExplicitDomain():K(t)?i.scheme=e==Zi?"tableau10":e==Xi?"blues":"viridis":qe(t)?i.range=_i(t):t=="size"?i.range=[0,400]:t=="angle"&&(i.range=[0,360]),i}getGenome(){var t;if(this.type!=="locus")return;const e=(t=this.members[0].view.context.genomeStore)==null?void 0:t.getGenome();if(!e)throw new Error("No genome has been defined!");return e}invertToComplex(e){const t=this.getScale();if("invert"in t){const i=t.invert(e);return this.toComplex(i)}else throw new Error("The scale does not support inverting!")}toComplex(e){const t=this.getGenome();return t?t.toChromosomal(e):e}fromComplex(e){return Gi(e)?this.getGenome().toContinuous(e.chrom,e.pos):e}fromComplexInterval(e){return this.type==="locus"&&Ar(e)?this.getGenome().toContinuousInterval(e):e}_getViewPaths(){return this.members.map(e=>e.view.getPathString()).join(", ")}_reduceDomains(e){const t=this.members.map(e).filter(i=>!!i);if(t.length)return t.reduce((i,s)=>i.extendAll(s))}}function Mr(n,e){if(e==$r||e==dt){if(wi(n))return e;throw new Error(`${n} does not support ${e} data type. Only positional channels do.`)}const t={x:["band","band","linear"],y:["band","band","linear"],size:[void 0,"point","linear"],opacity:[void 0,"point","linear"],fillOpacity:[void 0,"point","linear"],strokeOpacity:[void 0,"point","linear"],color:["ordinal","ordinal","linear"],fill:["ordinal","ordinal","linear"],stroke:["ordinal","ordinal","linear"],strokeWidth:[void 0,void 0,"linear"],shape:["ordinal","ordinal",void 0],dx:[void 0,void 0,"null"],dy:[void 0,void 0,"null"],angle:[void 0,void 0,"linear"]},s=["uniqueId","facetIndex","semanticScore","search","text","sample"].includes(n)?"null":t[n]?t[n][[Zi,Xi,Xt].indexOf(e)]:e==Xt?"linear":"ordinal";if(s===void 0)throw new Error(`Channel "${n}" is not compatible with "${e}" data type. Use of a proper scale may be needed.`);return s}function Lr(n,e){pe(e)&&n.type!=="ordinal"&&(n.range=[0,1]),e=="opacity"&&M(n.type)&&(n.clamp=!0)}function Nr(n){return H(n)}function Xe(...n){for(const e of n)if(e!==void 0)return e}class Vr{constructor(e){this.channel=e,this.members=[]}get scaleResolution(){var e;return(e=F(this.members))==null?void 0:e.view.getScaleResolution(this.channel)}pushUnitView(e,t){const i=e.getScaleResolution(this.channel);if(!i)throw new Error("Cannot find a scale resolution!");if(this.scaleResolution&&i!==this.scaleResolution)throw new Error("Shared axes must have a shared scale!");this.members.push({view:e,channel:t})}getAxisProps(){return re(this,"axisProps",()=>{const e=this.members.map(t=>{const i=t.view.mark.encoding[t.channel];return"axis"in i&&i.axis});return e.length>0&&e.some(t=>t===null)?null:$e(e.filter(t=>t!==void 0),"axis",["title"])})}getTitle(){const e=o=>{var a;const r=tt(o.view,o.channel);if(!R(r))return{member:o,explicitTitle:Xe((a=r.axis)==null?void 0:a.title,r.title),implicitTitle:Xe(be(r)?r.field:void 0,wt(r)?r.expr:void 0)}},t=this.members.map(e),i=t.filter(o=>{var r;if(fe(o.member.channel)&&!o.explicitTitle){const a=ae(o.member.channel);return((r=t.find(l=>l.member.view==o.member.view&&l.member.channel==a))==null?void 0:r.explicitTitle)===void 0}return!0}),s=new Set(i.map(o=>Xe(o.explicitTitle,o.implicitTitle)).filter(I));return s.size?[...s].join(", "):null}}class Ji extends Mi{constructor(e,t,i,s){super(e,t,i,s);this.spec=e}}class Dt extends q{constructor(e,t,i,s){super(e,t,i,s);this.spec=e,this.children=(e.layer||[]).map((o,r)=>{if(Et(o)||Ct(o))return t.createView(o,this,"layer"+r);throw new Error("LayerView accepts only unit or layer specs as children!")})}*[Symbol.iterator](){for(const e of this.children)yield e}render(e,t,i={}){if(!!this.isVisible()){t=t.shrink(this.getPadding()),e.pushView(this,t);for(const s of this.children)s.render(e,t,i);e.popView(this)}}}function B(n){return()=>n}class z{static create(e,t,i,s){return new z(B(e),B(t),B(i),B(s))}_offset(e,t){const i=this["_"+e];if(t===0)return i;switch(typeof t){case"number":return()=>i()+t;case"function":return()=>i()+t();default:throw new Error("Not a number of function")}}_passThrough(e){return this._offset(e,0)}constructor(e,t,i,s){this._x=e,this._y=t,this._width=i,this._height=s}get x(){return this._x()}get y(){return this._y()}get width(){return this._width()}get height(){return this._height()}get x2(){return this._x()+this._width()}get y2(){return this._y()+this._height()}equals(e){return e?this===e||this.x===e.x&&this.y===e.y&&this.width===e.width&&this.height===e.height:!1}modify(e){if(!Object.keys(e).length)return this;const t=i=>{const s=e[i];return typeof s=="number"?B(s):typeof s=="function"?s:this._passThrough(i)};return new z(t("x"),t("y"),t("width"),t("height"))}translate(e,t){return e===0&&t===0?this:new z(this._offset("x",e),this._offset("y",t),this._passThrough("width"),this._passThrough("height"))}translateBy(e){return this.translate(e.x,e.y)}expand(e,t=1){return e.left==0&&e.top==0&&e.right==0&&e.bottom==0?this:new z(e.left?this._offset("x",-e.left*t):this._passThrough("x"),e.top?this._offset("y",-e.top*t):this._passThrough("y"),e.width?this._offset("width",e.width*t):this._passThrough("width"),e.height?this._offset("height",e.height*t):this._passThrough("height"))}shrink(e){return this.expand(e,-1)}intersect(e){return this===e?this:new z(()=>Math.max(this.x,e.x),()=>Math.max(this.y,e.y),()=>Math.min(this.x2,e.x2)-Math.max(this.x,e.x),()=>Math.min(this.y2,e.y2)-Math.max(this.y,e.y))}isDefined(){return this.width>=0&&this.height>=0}flatten(){return new z(B(this.x),B(this.y),B(this.width),B(this.height))}containsPoint(e,t){return e>=this.x&&e<this.x2&&t>=this.y&&t<this.y2}normalizePoint(e,t){return{x:(e-this.x)/this.width,y:(t-this.y)/this.height}}}class Ze extends q{constructor(e,t,i,s){super(e,t,i,s);this.spec=e,"spacing"in this.spec||(this.spec.spacing=10),this.mainDimension=ft(e)?"width":"height",this.secondaryDimension=this.mainDimension=="width"?"height":"width";const o=ft(e)?e.hconcat:Ki(e)?e.vconcat:e.concat;this.children=o.map((r,a)=>t.createView(r,this,"concat"+a))}getEffectivePadding(){return this._cache("size/effectivePadding",()=>{const e=this.children.filter(o=>o.isVisible());if(!e.length)return this.getPadding();const t=e.map(o=>o.getEffectivePadding()).map(o=>this.mainDimension=="height"?[o.left,o.right]:[o.top,o.bottom]),i=Zt(t),s=this.mainDimension=="height"?new $(e[0].getEffectivePadding().top,i[1],F(e).getEffectivePadding().bottom,i[0]):new $(i[0],e[0].getEffectivePadding().left,i[1],F(e).getEffectivePadding().right);return this.getPadding().add(s)})}getSize(){return this._cache("size",()=>{let e;if(this.spec[this.mainDimension])e=at(this.spec[this.mainDimension]);else{const i=this.children.filter(s=>s.isVisible()).map(s=>s.getSize()[this.mainDimension]);e={grow:i.map(s=>+s.grow).reduce((s,o)=>s+o,0),px:er(i,{spacing:this.spec.spacing})}}const t=this.spec[this.secondaryDimension]&&at(this.spec[this.secondaryDimension])||{grow:1};return(this.mainDimension=="height"?new W(t,e):new W(e,t)).addPadding(this.getPadding())})}render(e,t,i={}){if(!this.isVisible())return;t=t.shrink(this.getPadding()),e.pushView(this,t);const s=this.children.filter(c=>c.isVisible()),o=s.map(c=>c.getSize()[this.mainDimension]),r=Qo(o,t[this.mainDimension],{spacing:this.spec.spacing,devicePixelRatio:this.context.glHelper.dpr}),a=s.map(c=>c.getEffectivePadding()).map(c=>this.mainDimension=="height"?[c.left,c.right]:[c.top,c.bottom]),l=Zt(a);for(let c=0;c<s.length;c++){const f=s[c],d=r[c],h=l[0]-a[c][0],u=l[1]-a[c][1],p=t[this.secondaryDimension]-h-u,m=this.mainDimension=="height"?new z(()=>t.x+h,()=>t.y+d.location,()=>p,()=>d.size):new z(()=>t.x+d.location,()=>t.y+h,()=>d.size,()=>p);f.render(e,m,i)}e.popView(this)}*[Symbol.iterator](){for(const e of this.children)yield e}replaceChild(e,t){const i=this.children.indexOf(e);if(i>=0)this.children[i]=t;else throw new Error("Not my child view!")}addChildBySpec(e){const t=this.children.length,i=this.context.createView(e,this,"concat"+t);return this.children.push(i),i}addChild(e){const t=this.children.length;return e.name||(e.name="concat"+t),e.parent=this,this.children.push(e),e}getDefaultResolution(e,t){return"independent"}}function Zt(n){return[0,1].map(e=>n.map(t=>t[e]).reduce((t,i)=>Math.max(t,i),0))}class Br{constructor(){this.types=[];const e=t=>(i,s,o,r)=>{var a;return new t(i,s,o,(a=i.name)!=null?a:r)};this.addViewType(qr,e(Ji)),this.addViewType(Et,e(Dt)),this.addViewType(Ct,e(N)),this.addViewType(Ki,e(Ze)),this.addViewType(ft,e(Ze)),this.addViewType(jr,e(Ze))}addViewType(e,t){this.types.push({specGuard:e,factory:t})}createView(e,t,i,s){const o=this.types.find(r=>r.specGuard(e));if(o)return o.factory(e,t,i,s!=null?s:"unnamed");throw new Error("Invalid spec, cannot figure out the view type from the properties: "+JSON.stringify([...Object.keys(e)]))}isViewSpec(e){const t=this.types.filter(i=>i.specGuard(e));if(t.length>1)throw new Error("Ambiguous spec. Cannot create a view!");return t.length==1}}function Ct(n){return"mark"in n&&(I(n.mark)||H(n.mark))}function Et(n){return"layer"in n&&H(n.layer)}function Yi(n){return n&&(Ct(n)||Et(n))&&"aggregateSamples"in n}function qr(n){return"import"in n}function Ki(n){return"vconcat"in n&&j(n.vconcat)}function ft(n){return"hconcat"in n&&j(n.hconcat)}function jr(n){return"concat"in n&&j(n.concat)}const Ur={point:No,rect:Ao,rule:qo,link:Wo,text:Ko};class N extends q{constructor(e,t,i,s){super(e,t,i,s);this.spec=e;const o=Ur[this.getMarkType()];if(o)this.mark=new o(this);else throw new Error(`No such mark: ${this.getMarkType()}`);this.sampleAggregateViews=[],this._initializeAggregateViews(),this.coords=void 0}*[Symbol.iterator](){for(const e of this.sampleAggregateViews)yield e}replaceChild(e,t){const i=this.sampleAggregateViews.indexOf(e);if(i>=0)this.sampleAggregateViews[i]=t;else throw new Error("Not my child view!")}render(e,t,i={}){!this.isVisible()||(t=t.shrink(this.getPadding()),this.coords=t,e.pushView(this,t),e.renderMark(this.mark,i),e.popView(this))}getMarkType(){return typeof this.spec.mark=="object"?this.spec.mark.type:this.spec.mark}resolve(e){var i;const t=this.mark.encoding;for(const[s,o]of Object.entries(t)){if(!A(o))continue;let r=ae((i=o.resolutionChannel)!=null?i:s);if(e=="axis"&&!pe(r))continue;let a=this;for(;a.parent instanceof q&&["shared","excluded"].includes(a.parent.getConfiguredOrDefaultResolution(r,e))&&a.getConfiguredOrDefaultResolution(r,e)!="excluded";)a=a.parent;a.resolutions[e][r]||(a.resolutions[e][r]=e=="scale"?new zr(r):new Vr(r)),pe(s)?a.resolutions[e][r].pushUnitView(this,s):e=="scale"&&a.resolutions[e][r].pushUnitView(this,s)}}getAccessor(e){return this._cache("accessor/"+e,()=>{const t=this.mark.encoding;if(t&&t[e])return this.context.accessorFactory.createAccessor(t[e])})}getFacetAccessor(e){const t=this.getAccessor("sample");return t||super.getFacetAccessor(this)}getCollector(){return this.context.dataFlow.findCollectorByKey(this)}_validateDomainQuery(e){if(fe(e))throw new Error(`getDomain(${e}), must only be called for primary channels!`);const t=this.mark.encoding[e];if(!A(t))throw new Error("The channel has no scale, cannot get domain!");return t}getConfiguredDomain(e){var s,o;const t=this._validateDomainQuery(e),i=t&&t.scale&&t.scale.domain;if(i){const r=this.getScaleResolution((s=t.resolutionChannel)!=null?s:e);return Ht((o=t.type)!=null?o:"nominal",r.fromComplexInterval(i))}}extractDataDomain(e){var a;const i=(a=this._validateDomainQuery(e).type)!=null?a:"nominal",s=l=>{let c;const f=this.mark.encoding[l];if(f){const d=this.context.accessorFactory.createAccessor(f);if(d)if(c=Ht(i),d.constant)c.extend(d({}));else{const h=this.getCollector();(h==null?void 0:h.completed)&&h.visitData(u=>c.extend(d(u)))}}return c};let o=s(e);const r=St[e];if(r){const l=s(r);l&&o.extendAll(l)}return o}getZoomLevel(){const e=t=>{var i,s;return(s=(i=this.getScaleResolution(t))==null?void 0:i.getZoomLevel())!=null?s:1};return xe.map(e).reduce((t,i)=>t*i,1)}_initializeAggregateViews(){var e,t;if(Yi(this.spec))for(const i of this.spec.aggregateSamples){const s=(e=i.transform)!=null?e:[];s.length&&F(s).type!="collect"&&s.push({type:"collect"}),s.push({type:"mergeFacets"}),i.transform=s,i.encoding=T(v({},(t=i.encoding)!=null?t:{}),{sample:null});const o=this.context.createView(i,this,"summaryView");o.getFacetFields=r=>{},this.sampleAggregateViews.push(o)}}getDefaultResolution(e,t){return e=="x"?"shared":"independent"}}function Gr(n,e,t){return t=(t-n)/(e-n),t=Math.max(0,Math.min(1,t)),t*t*(3-2*t)}class le extends C{get identifier(){}handle(e){throw new Error("Source does not handle incoming data!")}async load(){}}function Qi(n){var t,i;const e=v({},n.format);if((t=e.type)!=null||(e.type=Zr(n)&&Wr(n.url)),(i=e.parse)!=null||(e.parse="auto"),!e.type)throw new Error("Format for the data source was not defined and it could not be inferred: "+JSON.stringify(n));return e}function Wr(n){var e;if(Array.isArray(n)&&(n=n[0]),n)return(e=n.match(/\.(csv|tsv|json)/))==null?void 0:e[1]}const Ue=n=>typeof n!="object"?Hr:Xr,Hr=n=>({data:n}),Xr=n=>n;function Zr(n){return"url"in n}function Jr(n){return"dynamicCallbackSource"in n}class Jt extends le{constructor(e){super();this.callback=e}loadSynchronously(){if(!this.callback)return;const e=this.callback();if(!e||typeof e[Symbol.iterator]!="function")throw new Error("Dynamic data callback didn't return iterable data!");this.reset(),this.beginBatch({type:"file"});let t;for(const i of e)t||(t=Ue(i)),this._propagate(t(i));this.complete()}async load(){this.loadSynchronously()}}const en="chromosome_ticks_and_labels",tn={x:"width",y:"height"};function ht(n){return n=="x"?"y":"x"}const Yr={x:["bottom","top"],y:["left","right"]},nn=Object.fromEntries(Object.entries(Yr).map(([n,e])=>e.map(t=>[t,n])).flat(1));function Q(n){return nn[n]}class Yt extends Dt{constructor(e,t,i,s){const o=t=="locus",r=v(v(v({},o?ea:sn),Qr(t,e)),e);super(o?ta(r):on(r),i,s,`axis_${e.orient}`);if(this.axisProps=r,this.axisUpdateRequested=!0,this._addBroadcastHandler("layout",()=>{this.axisUpdateRequested=!0}),this.previousScaleDomain=[],this.axisLength=void 0,this.ticks=[],this.tickSource=new Jt(()=>this.ticks),o){const a=Q(this.axisProps.orient),l=this.getScaleResolution(a).getGenome();this.findChildByName(en).getDynamicDataSource=()=>new Jt(()=>l.chromosomes)}}getOrient(){return this.axisProps.orient}getSize(){const e={px:this.getPerpendicularSize()},t={grow:1};return nn[this.axisProps.orient]=="x"?new W(t,e):new W(e,t)}getPerpendicularSize(){return It(this.axisProps)}getDynamicDataSource(){return this.tickSource}_updateAxisData(){const e=Q(this.axisProps.orient),t=this.getScaleResolution(e).getScale(),i=t.domain();if(vi(i,this.previousScaleDomain)&&!this.axisUpdateRequested)return;this.previousScaleDomain=i;const s=this.ticks,o=Kr(this.axisProps,t,this.axisLength,s);o!==s&&(this.ticks=o,this.tickSource.loadSynchronously()),this.axisUpdateRequested=!1}onBeforeRender(){super.onBeforeRender(),this._updateAxisData()}render(e,t,i={}){!this.isVisible()||(this.axisLength=t[tn[Q(this.getOrient())]],super.render(e,t,i))}isPickingSupported(){return!1}}function It(n){const e=Q(n.orient);let t=n.ticks&&n.tickSize||0;return n.labels&&(t+=n.labelPadding,e=="x"?t+=n.labelFontSize:t+=30),n.title&&(t+=n.titlePadding+n.titleFontSize),t=Math.min(n.maxExtent||1/0,Math.max(n.minExtent||0,t)),t}function Kr(n,e,t,i=[]){const s=a=>25+60*Gr(100,700,a);let o=O(n.tickCount)?n.tickCount:Math.round(t/s(t));o=Ni(e,o,n.tickMinStep);const r=n.values?Vi(e,n.values,o):rr(e,o);if($s(r,i,a=>a,a=>a.value))return i;{const a=lr(e,o,n.format);return r.map(l=>({value:l,label:a(l)}))}}const sn={values:null,minExtent:20,maxExtent:1/0,offset:0,domain:!0,domainWidth:1,domainColor:"gray",domainDash:null,domainDashOffset:0,domainCap:"square",ticks:!0,tickSize:5,tickWidth:1,tickColor:"gray",tickDash:null,tickDashOffset:0,tickCap:"square",tickCount:null,tickMinStep:null,labels:!0,labelAlign:"center",labelBaseline:"middle",labelPadding:4,labelFontSize:10,labelLimit:180,labelColor:"black",format:null,titleColor:"black",titleFont:"sans-serif",titleFontSize:10,titlePadding:3};function Qr(n,e){var a;const t=e.orient,i=n=="nominal"||n=="ordinal";let s="center",o="middle",r=(a=e.labelAngle)!=null?a:(t=="top"||t=="bottom")&&i?-90:0;switch(t){case"left":s="right";break;case"right":s="left";break;case"top":case"bottom":Math.abs(r)>30?(s=r>0==(t=="bottom")?"left":"right",o="middle"):o=t=="top"?"alphabetic":"top";break}return{labelAlign:s,labelAngle:r,labelBaseline:o}}function on(n){const e=T(v({},n),{extent:It(n)}),t=Q(e.orient),i=ht(t),s=e.orient=="bottom"||e.orient=="right"?1:-1,o=e.orient=="bottom"||e.orient=="left"?1:0,r=()=>({name:"domain",data:{values:[0]},mark:{type:"rule",clip:!1,strokeDash:e.domainDash,strokeCap:e.domainCap,color:e.domainColor,[i]:o,size:e.domainWidth}}),a=()=>({name:"labels",mark:{type:"text",clip:!1,align:e.labelAlign,angle:e.labelAngle,baseline:e.labelBaseline,[i+"Offset"]:(e.tickSize+e.labelPadding)*s,[i]:o,size:e.labelFontSize,color:e.labelColor,minBufferSize:1500,dynamicData:!0},encoding:{[t]:{field:"value",type:"quantitative"},text:{field:"label"}}}),l=()=>({name:"ticks",mark:{type:"rule",clip:!1,strokeDash:e.tickDash,strokeCap:e.tickCap,color:e.tickColor,size:e.tickWidth,minBufferSize:300,dynamicData:!0},encoding:{[i]:{value:o},[i+"2"]:{value:o-e.tickSize/e.extent*(o?1:-1)}}}),c=()=>({name:"title",data:{values:[0]},mark:{type:"text",clip:!1,align:"center",baseline:e.orient=="bottom"?"bottom":"top",angle:[0,90,0,-90][["top","right","bottom","left"].indexOf(e.orient)],text:e.title,color:e.titleColor,[t]:.5,[i]:1-o}}),f=()=>{const h={name:"ticks_and_labels",encoding:{[t]:{field:"value",type:"quantitative"}},layer:[]};return e.ticks&&h.layer.push(l()),e.labels&&h.layer.push(a()),h},d={[tn[ht(Q(e.orient))]]:e.extent,data:{dynamicCallbackSource:!0},layer:[]};return e.domain&&d.layer.push(r()),(e.ticks||e.labels)&&d.layer.push(f()),e.title&&d.layer.push(c()),d}const ea=T(v({},sn),{chromTicks:!0,chromTickSize:18,chromTickWidth:1,chromTickColor:"#989898",chromTickDash:[4,2],chromTickDashOffset:1,chromLabels:!0,chromLabelFontSize:13,chromLabelFontWeight:"normal",chromLabelFontStyle:"normal",chromLabelColor:"black",chromLabelAlign:"left",chromLabelPadding:7});function ta(n){const e=T(v({},n),{extent:It(n)}),t=Q(e.orient),i=ht(t),s=e.orient=="bottom"||e.orient=="left"?1:0,o=()=>({name:"chromosome_ticks",mark:{type:"rule",strokeDash:n.chromTickDash,strokeDashOffset:n.chromTickDashOffset,[i]:s,[i+"2"]:s-e.chromTickSize/e.extent*(s?1:-1),color:n.chromTickColor,size:e.chromTickWidth,dynamicData:!0}}),r=()=>{let c;switch(e.orient){case"top":c={y:0,angle:0,paddingX:4,dy:-e.chromLabelPadding,viewportEdgeFadeWidthLeft:20,viewportEdgeFadeWidthRight:20,viewportEdgeFadeDistanceRight:-10,viewportEdgeFadeDistanceLeft:-20};break;case"bottom":c={y:1,angle:0,paddingX:4,dy:e.chromLabelPadding+e.chromLabelFontSize*.73,viewportEdgeFadeWidthLeft:20,viewportEdgeFadeWidthRight:20,viewportEdgeFadeDistanceRight:-10,viewportEdgeFadeDistanceLeft:-20};break;case"left":c={x:1,angle:-90,paddingY:4,dy:-e.chromLabelPadding,viewportEdgeFadeWidthBottom:20,viewportEdgeFadeWidthTop:20,viewportEdgeFadeDistanceBottom:-20,viewportEdgeFadeDistanceTop:-10};break;case"right":c={x:0,angle:90,align:"right",paddingY:4,dy:-e.chromLabelPadding};break;default:c={}}return{name:"chromosome_labels",mark:v({type:"text",size:e.chromLabelFontSize,font:e.chromLabelFont,fontWeight:e.chromLabelFontWeight,fontStyle:e.chromLabelFontStyle,color:e.chromLabelColor,align:n.chromLabelAlign,baseline:"alphabetic",clip:!1,dynamicData:!0},c),encoding:{[t+"2"]:{field:"continuousEnd",type:"locus"},text:{field:"name"}}}};let a;switch(e.orient){case"bottom":case"top":a={};break;case"left":a={labelAngle:-90,labelAlign:"center",labelPadding:6};break;case"right":a={labelAngle:90,labelAlign:"center",labelPadding:6};break;default:a={}}const l=on(v(v({},n),a));if(n.chromTicks||n.chromLabels){const c={name:en,data:{dynamicCallbackSource:!0},encoding:{[t]:{field:"continuousStart",type:"locus",band:0}},layer:[]};if(n.chromTicks&&c.layer.push(o()),n.chromLabels){c.layer.push(r());let f;l.layer.filter(d=>d.name=="ticks_and_labels").forEach(d=>d.layer.filter(h=>h.name=="labels").forEach(h=>{f=h.mark})),f&&(e.orient=="top"||e.orient=="bottom"?(f.viewportEdgeFadeWidthLeft=30,f.viewportEdgeFadeDistanceLeft=40):(f.viewportEdgeFadeWidthBottom=30,f.viewportEdgeFadeDistanceBottom=40))}l.layer.push(c)}return l}const ia={x:["bottom","top"],y:["left","right"]};class na extends q{constructor(e,t){super({},e,t,"decorator");this.child=void 0,this.backgroundView=void 0,this.axisViews={top:void 0,right:void 0,bottom:void 0,left:void 0},["mousedown","wheel"].forEach(i=>this.addInteractionEventListener(i,this.handleMouseEvent.bind(this)))}initialize(){var t;Object.entries(ia).forEach(([i,s])=>this._initializeAxes(i,s)),this._invalidateCacheByPrefix("size/","ancestors");const e=(t=this.child.spec)==null?void 0:t.view;((e==null?void 0:e.fill)||(e==null?void 0:e.stroke))&&(this.backgroundView=new N(sa(e),this.context,this,"background"))}getEncoding(e){return Object.values(this.axisViews).find(t=>e===t)||e==this.backgroundView?{}:super.getEncoding()}getFacetAccessor(e){if(e==this.child&&this.parent)return this.parent.getFacetAccessor(this)}*[Symbol.iterator](){yield this.child,this.backgroundView&&(yield this.backgroundView);for(const e of Object.values(this.axisViews))e&&(yield e)}_getAxisExtents(){return this._cache("size/axisExtents",()=>{const e={};for(const t of Object.values(this.axisViews))t&&(e[t.getOrient()]=t.getPerpendicularSize());return $.createFromRecord(e)})}_getAxisOffsets(){return this._cache("size/axisOffsets",()=>{const e={};for(const t of Object.values(this.axisViews))t&&(e[t.getOrient()]=t.axisProps.offset);return $.createFromRecord(e)})}getEffectivePadding(){return this._cache("size/effectivePadding",()=>this.getPadding().add(this._getAxisExtents()))}getSize(){return this._cache("size/size",()=>this.child.isVisible()?this.getSizeFromSpec().addPadding(this.getPadding()).addPadding(this.getAxisSizes()):zi)}getAxisSizes(){return this._cache("size/axisSizes",()=>this._getAxisExtents().add(this._getAxisOffsets()))}render(e,t,i={}){if(!this.isVisible()||!this.child.isVisible())return;t=t.shrink(this.getPadding()),e.pushView(this,t);const s=this._getAxisExtents(),o=t.shrink(s.add(this._getAxisOffsets()));this._childCoords=o,this.backgroundView&&this.backgroundView.render(e,o,i),this.child.render(e,o,i);const r=this._cache("axisViewEntries",()=>Object.entries(this.axisViews).filter(a=>!!a[1]));for(const[a,l]of r){const c=l.axisProps;let f;a=="bottom"?f=o.translate(0,o.height+c.offset).modify({height:s.bottom}):a=="top"?f=o.translate(0,-s.top-c.offset).modify({height:s.top}):a=="left"?f=o.translate(-s.left-c.offset,0).modify({width:s.left}):a=="right"&&(f=o.translate(o.width+c.offset,0).modify({width:s.right})),l.render(e,f)}e.popView(this)}_getResolutionParticipants(){return[...this.getAncestors(),...Ya(this.child)]}_initializeAxes(e,t){const i=this._getResolutionParticipants().map(s=>s.resolutions.axis[e]).filter(s=>s);for(const s of i){const o=s.getAxisProps();if(o&&o.orient){if(!t.includes(o.orient))throw new Error(`Invalid axis orientation for '${e}' channel: ${o.orient}`);if(this.axisViews[o.orient])throw new Error(`The slot for ${o.orient} axis is already reserved!`);this.axisViews[o.orient]=new Yt(T(v({},o),{title:s.getTitle()}),s.scaleResolution.type,this.context,this)}}e:for(const s of i){const o=s.getAxisProps();if(o&&!o.orient){for(const r of t)if(!this.axisViews[r]){o.orient=r,this.axisViews[r]=new Yt(T(v({},o),{title:s.getTitle()}),s.scaleResolution.type,this.context,this);continue e}throw new Error("No room for axes. All slots are already reserved.")}}}handleMouseEvent(e,t){if(!!this.isZoomable()){if(t.type=="wheel"){t.uiEvent.preventDefault();const i=t.uiEvent,s=i.deltaMode?120:1;let{x:o,y:r}=t.point;const a=this.context.getCurrentHover();if(a){const l=e.shrink(this.getEffectivePadding()),c=a.mark.encoders;c.x&&!c.x2&&(o=+c.x(a.datum)*l.width+l.x),c.y&&!c.y2&&(r=(1-+c.y(a.datum))*l.height+l.y)}Math.abs(i.deltaX)<Math.abs(i.deltaY)?this._handleZoom(e,{x:o,y:r,xDelta:0,yDelta:0,zDelta:i.deltaY*s/300}):this._handleZoom(e,{x:o,y:r,xDelta:-i.deltaX*s,yDelta:0,zDelta:0})}else if(t.type=="mousedown"&&t.uiEvent.button===0){const i=t.uiEvent;i.preventDefault();let s=i;const o=a=>{this._handleZoom(e,{x:s.clientX,y:s.clientY,xDelta:a.clientX-s.clientX,yDelta:a.clientY-s.clientY,zDelta:0}),s=a},r=a=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",r)};document.addEventListener("mouseup",r,!1),document.addEventListener("mousemove",o,!1)}}}isZoomable(){return this._cache("zoomable",()=>Object.values(this._getZoomableResolutions()).some(e=>e.size))}_getZoomableResolutions(){return this._cache("zoomableResolutions",()=>{const e={x:new Set,y:new Set};return this.child.visit(t=>{for(const[i,s]of Object.entries(e)){const o=t.getScaleResolution(i);o&&o.isZoomable()&&s.add(o)}}),e})}_handleZoom(e,t){for(const[i,s]of Object.entries(this._getZoomableResolutions())){if(s.size<=0)continue;const o=this._getAxisExtents(),r=e.shrink(o.add(this._getAxisOffsets())),a=r.normalizePoint(t.x,t.y),l=r.normalizePoint(t.x+t.xDelta,t.y+t.yDelta),c={x:l.x-a.x,y:l.y-a.y};for(const f of s)f.zoom(2**t.zDelta,i=="y"?1-a[i]:a[i],i=="x"?c.x:-c.y)}this.context.animator.requestRender()}}function sa(n){return{configurableVisibility:!1,data:{values:[{}]},mark:T(v({fill:null,strokeWidth:1},n),{type:"rect",clip:!1,tooltip:null})}}function*Pt(n,e=[]){for(const[t,i]of n.entries())if(i instanceof Map)for(const s of Pt(i,[...e,t]))yield s;else yield[[...e,t],i]}class Tt extends C{constructor(e){super();this.params=e!=null?e:{type:"collect"},this.observers=[],this.facetBatches=void 0,this._init()}_init(){this._data=[],this.facetBatches=new mt([],JSON.stringify),this.facetBatches.set(void 0,this._data)}reset(){super.reset(),this._init()}handle(e){this._data.push(e)}beginBatch(e){zo(e)&&(this._data=[],this.facetBatches.set(L(e.facetId),this._data))}complete(){var s,o;const e=(s=this.params)==null?void 0:s.sort,t=e?gi(e.field,e.order):void 0,i=r=>{t&&r.sort(t)};if((o=this.params.groupby)==null?void 0:o.length){if(this.facetBatches.size>1)throw new Error("TODO: Support faceted data!");const r=this.params.groupby.map(l=>_(l)),a=Be(this._data,...r);this.facetBatches.clear();for(const[l,c]of Pt(a))this.facetBatches.set(l,c)}for(const r of this.facetBatches.values())i(r);if(this.children.length)for(const[r,a]of this.facetBatches.entries()){if(r){const l={type:"facet",facetId:r};for(const c of this.children)c.beginBatch(l)}for(const l of a)this._propagate(l)}super.complete();for(const r of this.observers)r(this)}getData(){switch(this._checkStatus(),this.facetBatches.size){case 0:return[];case 1:return[...this.facetBatches.values()][0];default:{const e=this.facetBatches;return{[Symbol.iterator]:function*(){for(const i of e.values())for(let s=0;s<i.length;s++)yield i[s]}}}}}visitData(e){this._checkStatus();for(const t of this.facetBatches.values())for(let i=0;i<t.length;i++)e(t[i])}getItemCount(){let e=0;for(const t of this.facetBatches.values())e+=t.length;return e}_checkStatus(){if(!this.completed)throw new Error("Data propagation is not completed! No data are available.")}}class oa extends C{get behavior(){return U}constructor(e){super();this.params=e,this.startAccessor=_(e.start),this.endAccessor=_(e.end),this.chromAccessor=e.chrom?_(e.chrom):t=>{},this.weightAccessor=e.weight?_(e.weight):t=>1,this.as={coverage:e.as||"coverage",start:e.asStart||e.start,end:e.asEnd||e.end,chrom:e.asChrom||e.chrom},this.createSegment=new Function("start","end","coverage","chrom","return {"+Object.entries(this.as).filter(([t,i])=>i).map(([t,i])=>`${JSON.stringify(i)}: ${t}`).join(", ")+"};"),this.ends=new Fe}reset(){super.reset(),this.initialize()}initialize(){const e=this.as.coverage,t=this.as.end,i=this.as.chrom,s=this.startAccessor,o=this.endAccessor,r=this.chromAccessor,a=this.weightAccessor;let l,c,f,d=0,h;const u=this.ends;u.clear();const p=(y,g,w)=>{if(y==g)return;let x=!1;l&&(l[e]===w?(l[t]=g,x=!0):l[e]!=0&&this._propagate(l)),x||(l=this.createSegment(y,g,w,f))},m=()=>{let y;for(;(y=u.peekValue())!==void 0;)p(h,y,d),h=y,d-=u.pop();h=void 0,l&&(this._propagate(l),l=void 0)};this.handle=y=>{const g=s(y);let w;for(;(w=u.peekValue())!==void 0&&w<g;)p(h,w,d),h=w,d-=u.pop();if(i){let S=r(y);S!==c&&(m(),f=S,c=f)}h!==void 0&&p(h,g,d),h=g;const x=a(y);d+=x,u.push(x,o(y))},this.complete=()=>{m(),super.complete()}}}function ra(n,e,t=0,i=n.length){const s=new Fe,o=i-t;let r;for(r=0;r<e&&r<o;r++)s.push(r,n[t+r]);for(;r<o;r++){const c=n[t+r];c>=s.peekValue()&&(s.push(r,c),s.pop())}const a=[];let l;for(;(l=s.pop())!==void 0;)a.push(t+l);return a.reverse()}class aa{constructor(e,t=-1/0,i=1/0){this.maxSize=e,this.lowerLimit=t,this.upperLimit=i;const s=this.maxSize*2+1;this.lowerLimits=new Float64Array(s),this.upperLimits=new Float64Array(s),this.lowerChildren=new Int32Array(s),this.upperChildren=new Int32Array(s),this.reset()}reset(){this.lowerLimits.fill(0),this.upperLimits.fill(0),this.lowerChildren.fill(0),this.upperChildren.fill(0),this.n=1,this.lowerLimits[0]=this.lowerLimit,this.upperLimits[0]=this.upperLimit}_findSlot(e,t,i=0){if(e>=this.lowerLimits[i]&&t<=this.upperLimits[i]){const s=this.lowerChildren[i];if(s){const o=this._findSlot(e,t,s);return o>=0?o:this._findSlot(e,t,this.upperChildren[i])}else return i}else return-1}reserve(e,t){if(t-e<=0)throw new Error("Cannot reserve an empty or negative-size slot!");if(this.n+1>this.lowerLimits.length)return!1;const i=this._findSlot(e,t);if(i<0)return!1;const s=this.n++,o=this.n++;return this.lowerLimits[s]=this.lowerLimits[i],this.upperLimits[s]=e,this.lowerLimits[o]=t,this.upperLimits[o]=this.upperLimits[i],this.lowerChildren[i]=s,this.upperChildren[i]=o,!0}}class la extends C{constructor(e,t){super();var s,o;if(this.params=e,this._data=[],this.channel=(s=e.channel)!=null?s:"x",!["x","y"].includes(this.channel))throw new Error("Invalid channel: "+this.channel);this.posAccessor=_(this.params.pos),this.posBisector=li(this.posAccessor),this.scoreAccessor=_(this.params.score),this.widthAccessor=_(this.params.width),this.laneAccessor=this.params.lane?_(this.params.lane):r=>0,this.padding=(o=this.params.padding)!=null?o:0,this.reservationMaps=new Map,this.resolution=t.getScaleResolution(this.channel);const i=()=>this._filterAndPropagate();this.schedule=()=>t.context.animator.requestTransition(i),this.resolution.addEventListener("domain",r=>this.schedule()),t._addBroadcastHandler("layoutComputed",()=>this.schedule())}complete(){const e=this.posAccessor;this._data.sort((t,i)=>e(t)-e(i)),this._scores=this._data.map(this.scoreAccessor);for(const t of new Set(this._data.map(this.laneAccessor)))this.reservationMaps.set(t,new aa(200));this.schedule(),super.complete()}_filterAndPropagate(){var r;super.reset();const e=this.resolution.getScale(),t=(r=this.resolution.members[0].view.coords)==null?void 0:r[this.channel=="x"?"width":"height"];if(!t)return;for(const a of this.reservationMaps.values())a.reset();const i=e.domain(),s=70,o=ra(this._scores,s,this.posBisector.left(this._data,i[0]),this.posBisector.right(this._data,i[1]));for(const a of o){const l=this._data[a],c=e(this.posAccessor(l))*t,f=this.widthAccessor(l)/2+this.padding;this.reservationMaps.get(this.laneAccessor(l)).reserve(c-f,c+f)&&this._propagate(l)}super.complete()}reset(){super.reset(),this._data=[],this.groups=new Map}handle(e){this._data.push(e)}}class ca extends C{constructor(e){super();this.params=e,this.predicate=void 0}initialize(){this.predicate=xt(this.params.expr,this.getGlobalObject())}handle(e){this.predicate(e)&&this._propagate(e)}}const da="0".charCodeAt(0);function*fa(n,e=","){const t=e.charCodeAt(0);let i=0;for(let s=0;s<n.length;s++){const o=n.charCodeAt(s);o==t?(yield i,i=0):i=i*10+o-da}yield i}class ha extends C{get behavior(){return U}constructor(e){super();var r,a;const t=_((r=e.exons)!=null?r:"exons"),i=_((a=e.start)!=null?a:"start"),[s,o]=e.as||["exonStart","exonEnd"];this.handle=l=>{let c=i(l),f=c,d=!0;const h=t(l);for(const u of fa(h)){if(d)f=c+u;else{c=f+u;const p=Object.assign({},l);p[s]=f,p[o]=c,this._propagate(p)}d=!d}}}}class pa extends C{get behavior(){return U}constructor(e){super();const t=L(e.field).map(o=>_(o)),i=L(e.separator),s=L(e.as||e.field);if(t.length!==i.length||t.length!==s.length)throw new Error(`Lengths of "separator" (${i.length}), "fields" (${t.length}), and "as" (${s.length}) do not match!`);this.handle=o=>{if(t.some(l=>!l(o)))return;const r=t.map((l,c)=>l(o).split(i[c]));ua(r,o);const a=r[0].length;for(let l=0;l<a;l++){const c=Object.assign({},o);for(let f=0;f<t.length;f++)c[s[f]]=r[f][l];this._propagate(c)}}}}function ua(n,e){const t=n.map(i=>i.length);if(!t.every(i=>i==t[0]))throw new Error("Mismatching number of elements in the fields to be split: "+JSON.stringify(e))}class ma extends C{get behavior(){return X}constructor(e){super();this.params=e,this.as=e.as,this.fn=void 0}initialize(){this.fn=xt(this.params.expr,this.getGlobalObject())}handle(e){e[this.as]=this.fn(e),this._propagate(e)}}class rn extends C{get behavior(){return X}constructor(e,t){super();var p;const i=(p=e.channel)!=null?p:"x";if(!["x","y"].includes(i))throw new Error("Invalid channel: "+i);const s=t.getScaleResolution(i).getGenome();if(!s)throw new Error("LinearizeGenomicCoordinate transform requires a locus scale!");const o=_(e.chrom),r=L(e.pos).map(m=>_(m)),a=L(e.as);if(r.length!=a.length)throw new Error('The number of "pos" and "as" elements must be equal!');const l=L(e.offset);let c;if(l.length==0)c=new Array(r.length).fill(0);else if(l.length==1)c=new Array(r.length).fill(l[0]);else if(l.length==r.length)c=l;else throw new Error(`Invalid "offset" parameter: ${JSON.stringify(e.offset)}!`);const f=new Function("datum","chromOffset","posAccessors",a.map((m,y)=>`datum[${JSON.stringify(m)}] = chromOffset + +posAccessors[${y}](datum) - ${c[y]};`).join(`
`));let d,h=0;const u=m=>{if(m!==d){if(h=s.cumulativeChromPositions.get(m),h===void 0)throw new Error("Unknown chromosome/contig: "+m);d=m}return h};this.handle=m=>{f(m,u(o(m)),r),this._propagate(m)}}}const ga=["Lato-Regular.png"],ya=[{id:87,width:53,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:43.491,chnl:15,x:0,y:0,page:0},{id:124,width:17,height:50,xoffset:0,yoffset:-32.193000000000005,xadvance:10.521,chnl:15,x:0,y:42,page:0},{id:40,width:20,height:49,xoffset:0,yoffset:-32.571000000000005,xadvance:11.214,chnl:15,x:0,y:94,page:0},{id:41,width:19,height:49,xoffset:0,yoffset:-32.571000000000005,xadvance:11.214,chnl:15,x:0,y:145,page:0},{id:36,width:32,height:49,xoffset:0,yoffset:-34.419000000000004,xadvance:24.360000000000003,chnl:15,x:0,y:196,page:0},{id:125,width:21,height:48,xoffset:0,yoffset:-32.193000000000005,xadvance:12.642000000000001,chnl:15,x:0,y:247,page:0},{id:91,width:22,height:48,xoffset:0,yoffset:-32.193000000000005,xadvance:12.852,chnl:15,x:0,y:297,page:0},{id:93,width:19,height:48,xoffset:0,yoffset:-32.193000000000005,xadvance:12.852,chnl:15,x:0,y:347,page:0},{id:123,width:21,height:48,xoffset:0,yoffset:-32.193000000000005,xadvance:12.642000000000001,chnl:15,x:0,y:397,page:0},{id:106,width:19,height:48,xoffset:0,yoffset:-30.639000000000003,xadvance:10.08,chnl:15,x:0,y:447,page:0},{id:81,width:43,height:47,xoffset:0,yoffset:-30.429000000000002,xadvance:33.621,chnl:15,x:21,y:447,page:0},{id:77,width:45,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:38.997,chnl:15,x:66,y:447,page:0},{id:64,width:43,height:44,xoffset:0,yoffset:-28.539,xadvance:35.133,chnl:15,x:23,y:397,page:0},{id:92,width:28,height:43,xoffset:0,yoffset:-30.933000000000003,xadvance:18.984,chnl:15,x:68,y:397,page:0},{id:47,width:28,height:43,xoffset:0,yoffset:-30.933000000000003,xadvance:18.984,chnl:15,x:98,y:397,page:0},{id:109,width:42,height:32,xoffset:0,yoffset:-21.609,xadvance:34.545,chnl:15,x:113,y:447,page:0},{id:119,width:42,height:31,xoffset:0,yoffset:-21.315,xadvance:32.991,chnl:15,x:157,y:447,page:0},{id:42,width:25,height:42,xoffset:0,yoffset:-31.626,xadvance:17.85,chnl:15,x:128,y:397,page:0},{id:37,width:42,height:41,xoffset:0,yoffset:-30.387,xadvance:33.663000000000004,chnl:15,x:155,y:397,page:0},{id:79,width:42,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:33.621,chnl:15,x:199,y:397,page:0},{id:102,width:24,height:41,xoffset:0,yoffset:-30.534000000000002,xadvance:14.721,chnl:15,x:243,y:397,page:0},{id:100,width:31,height:41,xoffset:0,yoffset:-30.933000000000003,xadvance:23.520000000000003,chnl:15,x:269,y:397,page:0},{id:98,width:32,height:41,xoffset:0,yoffset:-30.933000000000003,xadvance:23.520000000000003,chnl:15,x:302,y:397,page:0},{id:56,width:32,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:24.360000000000003,chnl:15,x:336,y:397,page:0},{id:38,width:40,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:29.904000000000003,chnl:15,x:370,y:397,page:0},{id:108,width:17,height:41,xoffset:0,yoffset:-30.933000000000003,xadvance:9.912,chnl:15,x:412,y:397,page:0},{id:107,width:31,height:41,xoffset:0,yoffset:-30.933000000000003,xadvance:21.336000000000002,chnl:15,x:431,y:397,page:0},{id:48,width:33,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:24.360000000000003,chnl:15,x:464,y:397,page:0},{id:71,width:38,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:30.681,chnl:15,x:21,y:347,page:0},{id:83,width:31,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:22.785,chnl:15,x:61,y:347,page:0},{id:63,width:27,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:18.795,chnl:15,x:94,y:347,page:0},{id:105,width:18,height:41,xoffset:0,yoffset:-30.639000000000003,xadvance:10.08,chnl:15,x:123,y:347,page:0},{id:51,width:32,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:24.360000000000003,chnl:15,x:143,y:347,page:0},{id:104,width:31,height:41,xoffset:0,yoffset:-30.933000000000003,xadvance:23.436,chnl:15,x:177,y:347,page:0},{id:67,width:37,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:28.056,chnl:15,x:210,y:347,page:0},{id:88,width:37,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:27.258000000000003,chnl:15,x:249,y:347,page:0},{id:68,width:40,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:31.941000000000003,chnl:15,x:288,y:347,page:0},{id:70,width:32,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:23.751,chnl:15,x:330,y:347,page:0},{id:34,width:23,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:15.561000000000002,chnl:15,x:364,y:347,page:0},{id:72,width:38,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:32.067,chnl:15,x:389,y:347,page:0},{id:73,width:18,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:11.760000000000002,chnl:15,x:429,y:347,page:0},{id:74,width:24,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:17.745,chnl:15,x:449,y:347,page:0},{id:75,width:38,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:27.825000000000003,chnl:15,x:24,y:297,page:0},{id:76,width:31,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:21.567,chnl:15,x:475,y:347,page:0},{id:66,width:35,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:27.153000000000002,chnl:15,x:64,y:297,page:0},{id:78,width:38,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:32.067,chnl:15,x:101,y:297,page:0},{id:33,width:18,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:11.298,chnl:15,x:141,y:297,page:0},{id:80,width:34,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:25.221,chnl:15,x:161,y:297,page:0},{id:65,width:38,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:28.434,chnl:15,x:197,y:297,page:0},{id:82,width:36,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:26.313000000000002,chnl:15,x:237,y:297,page:0},{id:35,width:33,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.360000000000003,chnl:15,x:275,y:297,page:0},{id:84,width:34,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.801000000000002,chnl:15,x:310,y:297,page:0},{id:85,width:37,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:30.891000000000002,chnl:15,x:346,y:297,page:0},{id:86,width:38,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:28.434,chnl:15,x:385,y:297,page:0},{id:39,width:16,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:8.568000000000001,chnl:15,x:425,y:297,page:0},{id:69,width:32,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.255000000000003,chnl:15,x:443,y:297,page:0},{id:89,width:36,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:26.208000000000002,chnl:15,x:23,y:247,page:0},{id:90,width:34,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:25.284000000000002,chnl:15,x:477,y:297,page:0},{id:49,width:31,height:40,xoffset:0,yoffset:-30.156000000000002,xadvance:24.360000000000003,chnl:15,x:61,y:247,page:0},{id:50,width:32,height:40,xoffset:0,yoffset:-30.429000000000002,xadvance:24.360000000000003,chnl:15,x:94,y:247,page:0},{id:57,width:32,height:40,xoffset:0,yoffset:-30.429000000000002,xadvance:24.360000000000003,chnl:15,x:128,y:247,page:0},{id:94,width:32,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.360000000000003,chnl:15,x:162,y:247,page:0},{id:96,width:21,height:40,xoffset:0,yoffset:-30.429000000000002,xadvance:16.8,chnl:15,x:196,y:247,page:0},{id:55,width:33,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.360000000000003,chnl:15,x:219,y:247,page:0},{id:54,width:33,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.360000000000003,chnl:15,x:254,y:247,page:0},{id:53,width:32,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.360000000000003,chnl:15,x:289,y:247,page:0},{id:52,width:33,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.360000000000003,chnl:15,x:323,y:247,page:0},{id:103,width:31,height:39,xoffset:0,yoffset:-21.630000000000003,xadvance:21.84,chnl:15,x:358,y:247,page:0},{id:112,width:32,height:39,xoffset:0,yoffset:-21.651,xadvance:23.541,chnl:15,x:391,y:247,page:0},{id:113,width:31,height:39,xoffset:0,yoffset:-21.651,xadvance:23.520000000000003,chnl:15,x:425,y:247,page:0},{id:116,width:25,height:39,xoffset:0,yoffset:-28.182000000000002,xadvance:15.057,chnl:15,x:458,y:247,page:0},{id:121,width:31,height:38,xoffset:0,yoffset:-21.273,xadvance:21.651,chnl:15,x:34,y:196,page:0},{id:59,width:18,height:36,xoffset:0,yoffset:-20.706,xadvance:10.983,chnl:15,x:485,y:247,page:0},{id:43,width:32,height:34,xoffset:0,yoffset:-24.486,xadvance:24.360000000000003,chnl:15,x:67,y:196,page:0},{id:60,width:30,height:33,xoffset:0,yoffset:-23.331000000000003,xadvance:24.360000000000003,chnl:15,x:101,y:196,page:0},{id:62,width:31,height:33,xoffset:0,yoffset:-23.331000000000003,xadvance:24.360000000000003,chnl:15,x:133,y:196,page:0},{id:117,width:30,height:32,xoffset:0,yoffset:-21.273,xadvance:23.415000000000003,chnl:15,x:166,y:196,page:0},{id:99,width:29,height:32,xoffset:0,yoffset:-21.609,xadvance:20.055,chnl:15,x:198,y:196,page:0},{id:110,width:31,height:32,xoffset:0,yoffset:-21.609,xadvance:23.436,chnl:15,x:229,y:196,page:0},{id:111,width:32,height:32,xoffset:0,yoffset:-21.609,xadvance:23.814,chnl:15,x:262,y:196,page:0},{id:126,width:32,height:26,xoffset:0,yoffset:-16.128,xadvance:24.360000000000003,chnl:15,x:201,y:447,page:0},{id:101,width:31,height:32,xoffset:0,yoffset:-21.609,xadvance:22.176000000000002,chnl:15,x:296,y:196,page:0},{id:114,width:25,height:32,xoffset:0,yoffset:-21.651,xadvance:15.288,chnl:15,x:329,y:196,page:0},{id:115,width:27,height:32,xoffset:0,yoffset:-21.609,xadvance:18.186,chnl:15,x:356,y:196,page:0},{id:97,width:28,height:32,xoffset:0,yoffset:-21.651,xadvance:20.874000000000002,chnl:15,x:385,y:196,page:0},{id:118,width:31,height:31,xoffset:0,yoffset:-21.273,xadvance:21.672,chnl:15,x:415,y:196,page:0},{id:61,width:31,height:29,xoffset:0,yoffset:-19.089000000000002,xadvance:24.360000000000003,chnl:15,x:448,y:196,page:0},{id:120,width:30,height:31,xoffset:0,yoffset:-21.273,xadvance:20.916,chnl:15,x:21,y:145,page:0},{id:58,width:18,height:31,xoffset:0,yoffset:-20.706,xadvance:10.5,chnl:15,x:53,y:145,page:0},{id:122,width:28,height:31,xoffset:0,yoffset:-21.273,xadvance:18.984,chnl:15,x:73,y:145,page:0},{id:95,width:28,height:16,xoffset:0,yoffset:0,xadvance:19.278000000000002,chnl:15,x:235,y:447,page:0},{id:45,width:23,height:24,xoffset:0,yoffset:-14.175,xadvance:15.603000000000002,chnl:15,x:481,y:196,page:0},{id:44,width:17,height:21,xoffset:0,yoffset:-4.956,xadvance:9.534,chnl:15,x:103,y:145,page:0},{id:46,width:18,height:15,xoffset:0,yoffset:-4.956,xadvance:9.912,chnl:15,x:0,y:497,page:0},{id:32,width:0,height:0,xoffset:0,yoffset:0,xadvance:10.752,chnl:15,x:20,y:497,page:0}],ba={face:"Lato Regular",size:42,bold:0,italic:0,charset:[" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~"],unicode:1,stretchH:100,smooth:1,aa:1,padding:[0,0,0,0],spacing:[2,2]},va={lineHeight:50.400000000000006,base:41.454,scaleW:512,scaleH:512,pages:1,packed:0,alphaChnl:0,redChnl:0,greenChnl:0,blueChnl:0},xa=[];var an={pages:ga,chars:ya,info:ba,common:va,kernings:xa};class wa extends C{get behavior(){return X}constructor(e){super();const t=ot(an),i=_(e.field),s=e.as,o=e.fontSize;this.handle=r=>{const a=i(r);a!==void 0?r[s]=t.measureWidth(a,o):r[s]=0,this._propagate(r)}}}const Sa=65536;class _a extends C{get behavior(){return X}constructor(e){super();this.params=e}reset(){this.initialize()}initialize(){const e=this.params,t=e.as||"lane",i=O(e.spacing)?e.spacing:1,s=_(e.start),o=_(e.end);if(!e.preference!=!e.preferredOrder)throw new Error('Must specify both "preference" and "preferredOrder"');if(e.preference){const r=new Float64Array(Sa),a=_(e.preference),l=e.preferredOrder;let c=1/0;this.handle=f=>{const d=s(f);d<c&&r.fill(-1/0),c=d;const h=l.indexOf(a(f));let u=-1;if(h>=0&&r[h]<d)u=h;else{const p=s(f);for(u=0;u<r.length&&!(r[u]<p);u++);if(u>=r.length)throw new Error("Out of lanes!")}r[u]=o(f)+i,f[t]=u,this._propagate(f)}}else{const r=new Fe,a=new Fe;let l=-1/0,c=0;this.handle=f=>{const d=s(f);for(;r.length&&(r.peekValue()<=d||d<l);){const u=r.pop();a.push(u,u)}l=d;let h=a.pop();h===void 0&&(h=c++),f[t]=h,this._propagate(f),r.push(h,o(f)+i)}}}}class Da extends C{get behavior(){return U}constructor(e){super();if(e.as&&e.as.length!=e.fields.length)throw new Error('"fields" and "as" have unequal lengths!');const t=e.fields.map(s=>_(s)),i=e.as?e.as:t.map(ws);this.handle=s=>{const o={};for(let r=0;r<t.length;r++)o[i[r]]=t[r](s);this._propagate(o)}}}class Ca extends C{get behavior(){return X}constructor(e){super();const t=new RegExp(e.regex),i=typeof e.as=="string"?[e.as]:e.as,s=_(e.field);this.handle=o=>{const r=s(o);if(I(r)){const a=r.match(t);if(a){if(a.length-1!=i.length)throw new Error('The number of RegEx groups and the length of "as" do not match!');for(let l=0;l<i.length;l++)o[i[l]]=a[l+1]}else if(e.skipInvalidInput)for(let l=0;l<i.length;l++)o[i[l]]=void 0;else throw new Error(`"${r}" does not match the given regex: ${t.toString()}`)}else if(!e.skipInvalidInput)throw new Error(`Trying to match a non-string field. Encountered type: ${typeof r}, field content: "${r}".`);this._propagate(o)}}}class Ea extends C{get behavior(){return U}constructor(e){super();const t=L(e.columnRegex).map(h=>new RegExp(h)),i=L(e.asValue);if(t.length!=i.length)throw new Error('Lengths of "columnRegex" and "as" are not equal!');const s=e.skipRegex?new RegExp(e.skipRegex):void 0,o=e.asKey||"sample";let r,a,l;const c=h=>{var y;const u=Object.keys(h),p=new Map;for(const[g,w]of t.entries())for(const x of u){const S=(y=w.exec(x))==null?void 0:y[1];if(S!==void 0){let E=p.get(S);E||(E=[],p.set(S,E)),E[g]=x}}r=[...p.entries()],a=u.filter(g=>!t.some(w=>w.test(g))&&!(s&&s.test(g)));const m=[...a.map(g=>JSON.stringify(g)+": datum["+JSON.stringify(g)+"]"),JSON.stringify(o)+": sampleId",...i.map(g=>JSON.stringify(g)+": null")];l=new Function("datum","sampleId",`return {
`+m.join(`,
`)+`
};`)},f=h=>{r||c(h);for(const[u,p]of r){const m=l(h,u);for(let y=0;y<p.length;y++)m[i[y]]=h[p[y]];this._propagate(m)}},d=h=>{c(h),f(h),this.handle=f};this.handle=d,this.beginBatch=h=>{Ri(h)&&(this.handle=d),super.beginBatch(h)}}}class Ia extends C{get behavior(){return X}constructor(e){super();this.params=e,this.buffer=[]}reset(){this.buffer=[]}handle(e){this.buffer.push(e)}complete(){var f;const e=this.params,t=e.as||["y0","y1"],i=e.sort?gi(e.sort.field,e.sort.order):void 0,s=e.field?_(e.field):()=>1,o=e.groupby.map(d=>_(d)),r=Ss(this.buffer,d=>o.map(h=>h(d)).join()).map(d=>d[1]);let a=d=>!0;if(e.baseField){const d=_(e.baseField);a=h=>d(h)!==null}let l,c;switch(e.offset){case"normalize":l=(d,h)=>d/h,c=(d,h)=>De(d,h);break;case"center":l=(d,h)=>d-h/2,c=(d,h)=>De(d,h);break;case"information":{const d=Math.log2((f=e.cardinality)!=null?f:4);l=(h,u)=>h/u,c=(h,u)=>{const m=De(h,x=>+!a(x)),y=De(h,u),g=y-m;let w=0;for(let x=0;x<h.length;x++){const S=h[x];if(a(S)){const E=u(S)/g;w-=E*Math.log2(E)}}return g/(d-(w+0))*(g/y)}}break;default:l=(d,h)=>d,c=(d,h)=>1}for(const d of r){i&&d.sort(i);const h=c(d,s);let u=0;for(const p of d){const m=u+s(p);a(p)&&(p[t[0]]=l(u,h),p[t[1]]=l(m,h),this._propagate(p),u=m)}}super.complete()}}class Pa extends C{get behavior(){return U}constructor(e){super();var o,r;const t=_((o=e.field)!=null?o:"sequence"),[i,s]=(r=e.as)!=null?r:["pos","sequence"];this.handle=a=>{const l=Object.assign({},a,{[s]:"",[i]:0}),c=t(a);for(let f=0;f<c.length;f++){const d=Object.assign({},l);d[i]=f,d[s]=c.charAt(f),this._propagate(d)}}}}class Ta extends C{get behavior(){return U}constructor(e){super();this.params=e,this.buffer=[]}reset(){this.buffer=[]}handle(e){this.buffer.push(e)}complete(){const t=this.params.groupby,i=t.map(o=>_(o)),s=Be(this.buffer,...i);for(const[o,r]of Pt(s)){const a={count:r.length};for(let l=0;l<t.length;l++)a[t[l]]=o[l];this._propagate(a)}super.complete()}}const ka="_uniqueId",Kt=1e4,Qt=[null];class ln extends C{get behavior(){return X}constructor(e){super();var t;this.params=e,this.as=(t=e.as)!=null?t:ka,this._blocks=[],this._usedBlocks=0,this._id=-1}initialize(){}reset(){super.reset(),this._usedBlocks=0,this._id=-1}handle(e){e[this.as]=this._nextId(),this._propagate(e)}_nextId(){return++this._id%Kt==0&&(this._id=this._getBlock()*Kt),this._id}_getBlock(){return this._usedBlocks<this._blocks.length?this._blocks[this._usedBlocks++]:this._reserveBlock()}_reserveBlock(){const e=Qt.length;return Qt[e]=this,this._blocks.push(e),this._usedBlocks++,e}}const Oa={aggregate:Ta,collect:Tt,coverage:oa,filterScoredLabels:la,filter:ca,flattenCompressedExons:ha,flattenDelimited:pa,flattenSequence:Pa,formula:ma,identifier:ln,linearizeGenomicCoordinate:rn,measureText:wa,pileup:_a,project:Da,regexExtract:Ca,regexFold:Ea,sample:$i,stack:Ia};function Aa(n,e){const t=Oa[n.type];if(t)return new t(n,e);throw new Error("Unknown transform: "+n.type)}function Fa(n){return"values"in n}class Ra extends le{constructor(e){super();var t;if(this.params=e,typeof e.values=="string"&&!((t=e==null?void 0:e.format)==null?void 0:t.type))throw new Error("Data format type (csv, dsv, ...) must be specified if a string is provided!")}loadSynchronously(){const e=this.params.values;let t=[],i=s=>s;if(Array.isArray(e))e.length>0&&(t=e,i=Ue(e[0]));else if(typeof e=="object")t=[e];else if(typeof e=="string")t=bt(e,Qi(this.params));else throw new Error('"values" in data configuration is not an array, object, or a string!');this.reset(),this.beginBatch({type:"file"});for(const s of t)this._propagate(i(s));this.complete()}async load(){this.loadSynchronously()}}function $a(n){return"url"in n}class za extends le{constructor(e,t){super();this.params=e,this.baseUrl=t}get identifier(){return JSON.stringify({params:this.params,baseUrl:this.baseUrl})}async load(){const e=this.params.url,t=Array.isArray(e)?e:[e],i=async o=>Ve({baseURL:this.baseUrl}).load(o).catch(r=>{throw new Error(`Cannot fetch: ${this.baseUrl}${o}: ${r.message}`)}),s=(o,r)=>{try{const a=bt(o,Qi(this.params));this.beginBatch({type:"file",url:r});for(const l of a)this._propagate(l)}catch(a){throw new Error(`Cannot parse: ${r}: ${a.message}`)}};this.reset(),await Promise.all(t.map(o=>i(o).then(s))),this.complete()}}function Ma(n){return"sequence"in n}class La extends le{constructor(e){super();if(this.sequence=e.sequence,!("start"in this.sequence))throw new Error("'start' is missing from sequence parameters!");if(!("stop"in this.sequence))throw new Error("'stop' is missing from sequence parameters!")}loadSynchronously(){const e=this.sequence.as||"data",t=this.sequence.step||1,i=this.sequence.stop;this.reset(),this.beginBatch({type:"file"});for(let s=this.sequence.start;s<i;s+=t)this._propagate({[e]:s});this.complete()}async load(){this.loadSynchronously()}}function Na(n){return"dynamicSource"in n}class Va extends le{publishData(e){this.reset(),this.beginBatch({type:"file"});let t;for(const i of e)t||(t=Ue(i)),this._propagate(t(i));this.complete()}async load(){}}function Ba(n,e){if(Fa(n))return new Ra(n);if($a(n))return new za(n,e);if(Ma(n))return new La(n);if(Na(n))return new Va;throw new Error("Cannot figure out the data source type: "+JSON.stringify(n))}function qa(n){const e=Object.keys(n).filter(i=>typeof i=="string"),t=new Function("source","return { "+e.map(i=>JSON.stringify(i)).map(i=>`${i}: source[${i}]`).join(`,
`)+" };");return t.properties=e,t}class cn extends C{get behavior(){return U}constructor(){super();const e=t=>{const i=qa(t);this.handle=s=>this._propagate(i(s)),this.handle(t)};this.handle=e,this.beginBatch=t=>{Ri(t)&&(this.handle=e),super.beginBatch(t)}}}class dn{constructor(){this._dataSourcesByHost=new Map,this._collectorsByHost=new Map,this._observers=new Map}get dataSources(){return[...new Set(this._dataSourcesByHost.values()).values()]}get collectors(){return[...this._collectorsByHost.values()]}addObserver(e,t){let i=this._observers.get(t);i||(i=[],this._observers.set(t,i)),i.push(e)}_relayObserverCallback(e,t){const i=this._observers.get(t);if(i)for(const s of i)s(e)}addDataSource(e,t){this._dataSourcesByHost.set(t,e)}findDataSourceByKey(e){return this._dataSourcesByHost.get(e)}addCollector(e,t){this._collectorsByHost.set(t,e),e.observers.push(i=>this._relayObserverCallback(i,t))}findCollectorByKey(e){return this._collectorsByHost.get(e)}initialize(){for(const e of this.dataSources)e.visit(t=>t.initialize())}}function ja(n){return"name"in n}class Ua extends le{constructor(e,t){super();this.getNamedData=t,this.params=e}get identifier(){return this.params.name}_getValues(){const e=this.getNamedData(this.params.name);if(e)return e;throw new Error("Cannot find named data: "+this.params.name)}loadSynchronously(){const e=this._getValues();let t=i=>i;if(Array.isArray(e))e.length>0&&(t=Ue(e[0]));else throw new Error(`Named data "${this.params.name}" is not an array!`);this.reset(),this.beginBatch({type:"file"});for(const i of e)this._propagate(t(i));this.complete()}async load(){this.loadSynchronously()}}function Ga(n,e){const t=[];let i;const s=e!=null?e:new dn,o=[];function r(f,d=()=>{}){if(!i)throw d()||new Error("Cannot append data flow node, no parent exist!");return i.addChild(f),i=f,f}function a(f,d){return r(f,()=>new Error(`Cannot append a transform because no (inherited) data are available! ${d?JSON.stringify(d):""}`))}function l(f,d){for(const h of f){let u;try{u=Aa(h,d)}catch(p){throw console.warn(p),new Error(`Cannot initialize "${h.type}" transform: ${p}`)}u.behavior&X&&a(new cn),a(u)}}const c=f=>{if(t.push(i),f.spec.data){const d=Jr(f.spec.data)?f.getDynamicDataSource():ja(f.spec.data)?new Ua(f.spec.data,f.context.getNamedData):Ba(f.spec.data,f.getBaseUrl());i=d,s.addDataSource(d,f)}if(f.spec.transform&&l(f.spec.transform,f),f instanceof N){if(!i)throw new Error("A unit view has no (inherited) data source");const d=Wa(f);if(d){o.push(d.rewrite);for(const u of d.transforms)a(u)}f.mark.isPickingParticipant()&&a(new ln({type:"identifier"}));const h=new Tt({type:"collect",groupby:f.getFacetFields(),sort:Ha(f,d==null?void 0:d.rewrittenEncoding)});r(h),s.addCollector(h,f)}Yi(f.spec)};return c.postOrder=f=>{i=t.pop()},n.visit(c),o.forEach(f=>f()),s}function Wa(n){var o,r,a,l;const e=[],t={},i=[];for(const[c,f]of Object.entries(n.getEncoding())){const d=c;pe(d)&&xi(f)&&i.push({channel:d,chromPosDef:f})}const s=Be(i,c=>ae(c.channel),c=>c.chromPosDef.chrom);for(const[c,f]of s.entries())for(const[d,h]of f.entries()){const u=[],p=[],m=[];for(const{channel:y,chromPosDef:g}of h){const w=E=>E.replace(/[^A-Za-z0-9_]/g,""),x=["_linearized_",w(g.chrom),"_",w(g.pos)].join(""),S=T(v({},(a=(r=(o=n.spec.encoding)==null?void 0:o[y])!=null?r:n.getEncoding()[y])!=null?a:{}),{field:x});delete S.chrom,delete S.pos,!S.type&&g.type&&(S.type=g.type),t[y]=S,u.push(g.pos),m.push((l=g.offset)!=null?l:0),p.push(x)}e.push(new rn({type:"linearizeGenomicCoordinate",channel:c,chrom:d,pos:u,offset:m,as:p},n))}return e.length?{transforms:e,rewrittenEncoding:t,rewrite:()=>{n.spec.encoding=v(v({},n.spec.encoding),t),Ii(n.mark,"encoding")}}:void 0}function Ha(n,e){var i;const t=v(v({},n.getEncoding()),e).x;if(A(t)&&((i=n.getScaleResolution("x"))==null?void 0:i.isZoomable())){if(be(t))return{field:t.field};if(!ve(t))throw new Error("A zoomable x channel must be mapped to a field.")}}function fn(n,e=void 0){if(n.parent!==e)return!1;for(const t of n.children)if(!fn(t,n))return!1;return!0}function pt(n,e=!1){if(n instanceof Tt&&(e=!0),n instanceof cn)if(e)e=!1;else{const t=n.children[0];n.excise(),t&&pt(t,e);return}n.behavior&U&&(e=!1);for(let t=0,i=n.children.length;t<i;t++)pt(n.children[t],e||t<i-1)}function Xa(n){const e=[...n._dataSourcesByHost.entries()],t=new Map;for(const i of e){const s=i[1];s.identifier&&!t.has(s.identifier)&&t.set(s.identifier,s)}n._dataSourcesByHost.clear();for(let[i,s]of e){const o=t.get(s.identifier);o&&(o.adoptChildrenOf(s),s=o),n.addDataSource(s,i)}}function Za(n){if(pt(n),!fn(n))throw new Error("Encountered a bug! There's a problem in the data flow structure.")}function Ja(n){for(const e of n.dataSources)Za(e);Xa(n)}function Ya(n){const e=[];return n.visit(t=>{e.push(t)}),e}function Ka(n){n.visit(t=>{t instanceof N&&t.resolve("scale")});const e=new Set;n.visit(t=>{for(const i of Object.values(t.resolutions.scale)){const s=i.name;if(s&&e.has(s))throw new Error(`The same scale name "${s}" occurs in multiple scale resolutions!`);e.add(s)}}),n.visit(t=>{t instanceof N&&t.resolve("axis")}),n.visit(t=>t.onScalesResolved())}function Qa(n){for(const e of xe){const t=n.getScaleResolution(e);t&&!t.name&&t.isZoomable()&&(t.name=`${e}_at_root`)}}function el(n){let e=n;const t=i=>i&&!R(i);return n.visit(i=>{if(i instanceof Dt||i instanceof N){const s=i.getEncoding();if(i instanceof N&&!t(s.x)&&!t(s.y))return Re;const o=i.parent,r=new na(i.context,o);if(i.parent=r,r.child=i,r.name=i.name+"_decorator",o)if(o instanceof q)o.replaceChild(i,r);else{let a;if(n.visit(il((l,c)=>{if(l===i)return a=F(c),me})),a instanceof q)a.replaceChild(i,r);else throw new Error("Cannot find parent while decorating: "+i.getPathString())}return r.resolutions=i.resolutions,i.resolutions={scale:{},axis:{}},r.spec.height=i.spec.height,i.spec.height="container",r.spec.width=i.spec.width,i.spec.width="container",r.spec.padding=i.spec.padding,i.spec.padding=void 0,i===n&&(e=r),r.initialize(),Re}}),e}async function tl(n,e,t){var r;if(!n.import.url)throw new Error("Cannot import, not an import spec: "+JSON.stringify(n));const i=Ve({baseURL:e}),s=n.import.url,o=JSON.parse(await i.load(s).catch(a=>{throw new Error(`Could not load imported view spec: ${s} 
Reason: ${a.message}`)}));if(t.isViewSpec(o))return o.baseUrl=(r=s.match(/^[^?#]*\//))==null?void 0:r[0],o;throw new Error(`The imported spec "${s}" is not a view spec: ${JSON.stringify(n)}`)}async function hn(n){const e=[];n.visit(t=>{if(t instanceof Ji)return e.push(t),Re});for(const t of e){const i=t.context,s=await tl(t.spec,t.getBaseUrl(),i),o=i.createView(s,t.parent,t.name);t.parent.replaceChild(t,o),await hn(o)}}function il(n){const e=[],t=i=>n(i,e);return t.beforeChildren=i=>{e.push(i)},t.afterChildren=i=>{e.pop()},t}class kt{constructor(e){this.globalOptions=e}pushView(e,t){}popView(e){}renderMark(e,t){}}class ei extends kt{constructor(e,t){super(e);this.webGLHelper=t,this.buffer=[],this.coords=void 0,this.views=new Set}pushView(e,t){this.views.add(e),this.coords=t}renderMark(e,t){if(this.globalOptions.picking&&!e.isPickingParticipant())return;const i=e.render(t);i&&this.buffer.push({mark:e,callback:i,coords:this.coords,clipRect:t.clipRect})}renderDeferred(){if(this.batch||this._buildBatch(),this.batch.length==0)return;const e=this.webGLHelper.gl,t=this.globalOptions.picking;e.bindFramebuffer(e.FRAMEBUFFER,t?this.webGLHelper._pickingBufferInfo.framebuffer:null),this.webGLHelper.clearAll();for(const i of this.views)i.onBeforeRender();for(const i of this.batch)i();t&&e.bindFramebuffer(e.FRAMEBUFFER,null)}_buildBatch(){this.batch=[];let e=!0,t=!0;const i=r=>()=>{e&&r()},s=r=>()=>{e&&t&&r()},o=Be(this.buffer,r=>r.mark);for(const[r,a]of o.entries()){if(!r.isReady())continue;this.batch.push(()=>{e=r.unitView.getEffectiveOpacity()>0}),this.batch.push(i(()=>r.prepareRender(this.globalOptions)));let l;for(const c of a){const f=c.coords;f.equals(l)||this.batch.push(i(()=>{t=r.setViewport(f,c.clipRect)})),this.batch.push(s(c.callback)),l=c.coords}}}}class nl extends kt{constructor(e){super(e);this.root=void 0,this.stack=[],this.lastAddition=void 0}pushView(e,t){const i=new sl(e,t);this.root?F(this.stack).addChild(i):this.root=i,this.stack.push(i)}popView(e){this.stack.pop()}getLayout(){return this.root}}class sl{constructor(e,t){this.view=e,this.coords=t,this.children=[]}addChild(e){const t=F(this.children);t&&e.view===t.view&&e.coords.equals(t.coords)||this.children.push(e)}dispatchInteractionEvent(e){if(this.coords.containsPoint(e.point.x,e.point.y)){if(this.view.handleInteractionEvent(this.coords,e,!0),e.stopped)return;if(this.children.length==0)e.target=this.view;else for(const t of this.children){if(t.dispatchInteractionEvent(e),e.target)break;if(e.stopped)return}this.view.handleInteractionEvent(this.coords,e,!1)}}}class ol extends kt{constructor(...e){super({});this.contexts=e}pushView(e,t){for(const i of this.contexts)i.pushView(e,t)}popView(e){for(const t of this.contexts)t.popView(e)}renderMark(e,t){for(const i of this.contexts)i.renderMark(e,t)}}class rl{constructor(e,t){this.point=e,this.uiEvent=t,this.stopped=!1,this.target=void 0}stopPropagation(){this.stopped=!0}get type(){return this.uiEvent.type}}class al{constructor(e,t){this.x=e,this.y=t}equals(e){return e?e===this||e.x===this.x&&e.y===this.y:!1}}const ll=n=>new Promise(e=>setTimeout(e,n));function cl(n){const e=n.requestAnimationFrame||window.requestAnimationFrame,t=n.signal,i=()=>new Promise((s,o)=>{if(t==null?void 0:t.aborted)return o("aborted");const r=performance.now(),a=r+(n.duration||1e3),l=typeof n.from=="number"?n.from:0,c=typeof n.to=="number"?n.to:1,f=n.easingFunction||(m=>m),d=m=>(m-r)/(a-r),h=m=>m*(c-l)+l,u=m=>Math.max(0,Math.min(1,m)),p=m=>{(t==null?void 0:t.aborted)?o("aborted"):(n.onUpdate(h(f(u(d(m))))),m<a?e(p):(n.onUpdate(h(f(1))),s()))};e(p)});return n.delay?(t==null?void 0:t.aborted)?Promise.reject("aborted"):ll(n.delay).then(i):i()}class dl{constructor(e){this._renderCallback=e,this._renderRequested=!1,this._warn=!1,this.transitions=[]}requestTransition(e){this.cancelTransition(e),this.transitions.push(e),this.requestRender()}cancelTransition(e){const t=this.transitions.indexOf(e);t>=0&&this.transitions.splice(t,1)}requestRender(){this._renderRequested?this._warn&&console.warn("Render already requested!"):(this._renderRequested=!0,window.requestAnimationFrame(e=>{this._renderRequested=!1;const t=this.transitions;this.transitions=[];let i;for(;i=t.shift();)i(e);this._renderCallback(e)}))}transition(e){return cl(v({requestAnimationFrame:t=>this.requestTransition(t)},e))}}function pn(){const n=e=>e;return n.invert=e=>e,n.copy=pn,n.invertRange=()=>{},n}class fl{constructor(e){this.genomes=new Map,this.genomeSpy=e}async initialize(e){const t=new kr(e);return this.genomes.set(t.name,t),Promise.all([...this.genomes.values()].map(i=>i.load(this.genomeSpy.spec.baseUrl)))}getGenome(e){if(!this.genomes.size)throw new Error("No genomes have been configured!");if(e){const t=this.genomes.get(e);if(!t)throw new Error(`No genome with the name ${e} has been configured!`);return t}else{if(this.genomes.size>1)throw new Error("Cannot pick a default genome! More than one have been configured!");return this.genomes.values().next().value}}}var hl="assets/Lato-Regular.e459d1f9.png";const pl={thin:100,light:300,regular:400,normal:400,medium:500,bold:700,black:900};class ul{constructor(e){this._webGLHelper=e,this.fontRepository="https://raw.githubusercontent.com/etiennepinchon/aframe-fonts/master/fonts/",this._fonts=new mt([],JSON.stringify),this._metadataPromises=new Map,this._fontPromises=new Map,this._promises=[],this._defaultFontEntry={metrics:ot(an),texture:this._createTextureNow(hl)}}async waitUntilReady(){await Promise.all(this._promises)}getFont(e,t="normal",i="regular"){if(I(i)&&(i=pl[i.toLowerCase()],!i))throw new Error("Unknown font weight: "+i);const s={family:e,style:t,weight:i};let o=this._fonts.get(s);return o||(o={metrics:void 0,texture:void 0},this._fonts.set(s,o),this._promises.push(this._loadFontEntry(o,s))),o}async _loadFontEntry(e,t){try{const i=await this._loadMetadata(t.family),s=gl(i,t),o=this.fontRepository+ti(t.family)+"/"+s.replace(/\.\w+/,""),r=this._createTexture(o+".png"),a=this._loadFont(o+".json");e.texture=await r,e.metrics=await a}catch(i){console.log("Cannot load font. Using default.",i),e.metrics=this._defaultFontEntry.metrics,e.texture=this._defaultFontEntry.texture}}_loadFont(e){let t=this._fontPromises.get(e);return t||(t=fetch(e).then(i=>{if(!i.ok)throw new Error("Could not load font: "+i.status);return i}).then(i=>i.json()).then(i=>ot(i)),this._fontPromises.set(e,t)),t}_loadMetadata(e){const t=ti(e);let i=this._metadataPromises.get(t);return i||(i=fetch(this.fontRepository+t+"/METADATA.pb").then(s=>{if(!s.ok)throw new Error("Could not load font metadata: "+s.status);return s}).then(s=>s.text()).then(s=>ml(s)).catch(s=>{console.warn(s)}),this._metadataPromises.set(t,i)),i}getDefaultFont(){return this._defaultFontEntry}_createTexture(e){const t=this._webGLHelper.gl;return new Promise((i,s)=>{Oe(t,{src:e,min:t.LINEAR},(o,r,a)=>{o?s(o):i(r)})})}_createTextureNow(e){const t=this._webGLHelper.gl;let i;const s=new Promise((o,r)=>{i=Oe(t,{src:e,min:t.LINEAR},(a,l,c)=>{a?r(a):o(l)})});return this._promises.push(s),i}}function ti(n){return n.toLowerCase().replaceAll(/[^\w]/g,"")}function ml(n){const e=n.split(`
`),t=[];let i;for(const s of e)if(s.startsWith("fonts {")&&(i={name:void 0,style:void 0,weight:void 0,filename:void 0,post_script_name:void 0,full_name:void 0,copyright:void 0}),s.startsWith("}")&&(t.push(i),i=void 0),i){let o=s.match(/^\s*([A-Za-z_]+):[ ]?"(.*)"$/);if(o){const r=o[1];i[r]=o[2]}if(o=s.match(/^\s*([A-Za-z_]+):[ ]?(\d+)$/),o){const r=o[1];i[r]=+o[2]}}return t}function gl(n,e){let t,i=Number.POSITIVE_INFINITY;for(const s of n)if(e.family.localeCompare(s.name,void 0,{sensitivity:"accent"})==0&&e.style==s.style){const o=Math.abs(e.weight-s.weight);o<i&&(i=o,t=s)}return t==null?void 0:t.filename}function yl(n,e){const t=[];let i;for(const s of n.split(`
`))if(s.startsWith(">"))i={identifier:s.match(/>(\S+)/)[1],sequence:""},t.push(i);else if(i)i.sequence+=s.trim();else throw new Error("Invalid fasta file!");return t}class bl{constructor(e,t){this.animator=e,this.disabled=!!t,this.damping=.015,this.acceleration=.3,this.accelerationThreshold=100,this.lowerLimit=.5,this.loop=!1,this.momentum=0,this.timestamp=0,this.callback=null,this._transitionCallback=this.animate.bind(this),this.clear()}clear(){this.momentum=0,this.timestamp=null,this.loop=null,this.callback=null}cancel(){this.loop&&(this.animator.cancelTransition(this._transitionCallback),this.clear())}setMomentum(e,t){if(this.disabled){t(e);return}e*this.momentum<0?this.momentum=0:Math.abs(e)>this.accelerationThreshold?this.momentum=_s([this.momentum,e],this.acceleration):this.momentum=e,this.callback=t,this.loop||this.animate()}animate(e){this.callback(this.momentum);const t=e-this.timestamp||0;this.timestamp=e;const i=Math.abs(this.momentum);this.momentum=Math.sign(this.momentum)*Math.max(0,i-((i*this.damping)**1.5+.04)*t),Math.abs(this.momentum)>this.lowerLimit?(this.loop=!0,this.animator.requestTransition(this._transitionCallback)):this.clear()}}function vl(n){const e={},t=["string","number","boolean"],i=["wheelDelta","wheelDeltaX","wheelDeltaY"];for(const s in n){const o=s;!i.includes(s)&&t.includes(typeof n[o])&&(e[o]=n[o])}return e}function un(n,e,t=!0){let i,s=r=>{};return function(...a){return new Promise((l,c)=>{const f=()=>{clearTimeout(i),s=d=>{},l(n(...a))};t&&s("debounced"),clearTimeout(i),s=c,i=setTimeout(f,e)})}}const ii=new Map;async function xl(n,e,t){var o;const i=n.symbol;let s=(o=ii.get(i))!=null?o:await _l(n.symbol);return s?(ii.set(i,s),D`
            <div class="title">
                <strong>${s.name}</strong>
                ${s.description}
            </div>
            <p class="summary">${s.summary}</p>
            <p class="source">Source: NCBI RefSeq Gene</p>
        `):null}async function wl(n){console.log("Searching: "+n);const e={mode:"cors"},i=(await fetch(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=gene&term=${n}[GENE]&sort=relevance&retmode=json`,e).then(s=>s.json())).esearchresult.idlist[0];return i?(await fetch(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=gene&id=${i}&retmode=json`,e).then(r=>r.json())).result[i]:null}const Sl=un(wl,500);function _l(n){return Sl(n)}const Dl=k(".4~r"),Cl=k(".4~e");function El(n){return n===null?D` <span class="na">NA</span> `:I(n)?n.substring(0,30):Number.isInteger(n)?""+n:O(n)?Math.abs(n)>Math.pow(10,8)||Math.abs(n)<Math.pow(10,-8)?Cl(n):Dl(n):ze(n)?n?"True":"False":"?"+typeof n+" "+n}async function Il(n,e,t){const i=(r,a)=>{var l;for(const[c,f]of Object.entries(e.encoders))if((l=f==null?void 0:f.accessor)==null?void 0:l.fields.includes(r))switch(c){case"color":case"fill":case"stroke":return D`
                            <span
                                class="color-legend"
                                style=${`background-color: ${f(a)}`}
                            ></span>
                        `}return""},s=D`
        <table class="attributes">
            ${Object.entries(n).filter(([r,a])=>!r.startsWith("_")).map(([r,a])=>D`
                        <tr>
                            <th>${r}</th>
                            <td>
                                ${El(a)} ${i(r,n)}
                            </td>
                        </tr>
                    `)}
        </table>
    `,o=e.unitView.spec.title?D`
              <div class="title">
                  <strong>${e.unitView.spec.title}</strong>
              </div>
          `:"";return D`${o}${s}`}Le("index",vt,["continuous"]);Le("locus",As,["continuous"]);Le("null",pn,[]);Ds("fasta",yl);class Pl{constructor(e,t,i={}){var s;this.container=e,this.spec=t,this.accessorFactory=new Us,this.viewFactory=new Br,this.namedDataProviders=[],this.animator=new dl(()=>this.renderAll()),this.genomeStore=void 0,this.viewVisibilityPredicate=o=>o.isVisibleInSpec(),this._renderingContext=void 0,this._pickingContext=void 0,this._dirtyPickingBuffer=!1,this._currentHover=void 0,this._wheelInertia=new bl(this.animator),this._keyboardListeners=new Map,this._eventListeners=new Map,this.tooltipHandlers=v({default:Il,refseqgene:xl},(s=i.tooltipHandlers)!=null?s:{}),this.viewRoot=void 0}registerNamedDataProvider(e){this.namedDataProviders.unshift(e)}getNamedData(e){for(const t of this.namedDataProviders){const i=t(e);if(i)return i}}broadcast(e,t){const i={type:e,payload:t};this.viewRoot.visit(s=>s.handleBroadcast(i))}_prepareContainer(){this.container.classList.add("genome-spy"),this.container.classList.add("loading"),this._glHelper=new Eo(this.container,()=>{if(this.viewRoot){const e=this.viewRoot.getSize(),t=i=>i.grow>0?void 0:i.px;return{width:t(e.width),height:t(e.height)}}}),this.loadingMessageElement=document.createElement("div"),this.loadingMessageElement.className="loading-message",this.loadingMessageElement.innerHTML='<div class="message">Loading<span class="ellipsis">...</span></div>',this.container.appendChild(this.loadingMessageElement),this.tooltip=new zs(this.container),this.loadingMessageElement.querySelector(".message").addEventListener("transitionend",()=>{this.loadingMessageElement.style.display="none"})}destroy(){this.container.classList.remove("genome-spy"),this.container.classList.remove("loading");for(const[e,t]of this._keyboardListeners)for(const i of t)document.removeEventListener(e,i);for(this._glHelper.finalize();this.container.firstChild;)this.container.firstChild.remove()}async _prepareViewsAndData(){this.spec.genome&&(this.genomeStore=new fl(this),await this.genomeStore.initialize(this.spec.genome));const e=this,t={dataFlow:new dn,accessorFactory:this.accessorFactory,glHelper:this._glHelper,animator:this.animator,genomeStore:this.genomeStore,fontManager:new ul(this._glHelper),requestLayoutReflow:()=>{},updateTooltip:this.updateTooltip.bind(this),getNamedData:this.getNamedData.bind(this),getCurrentHover:()=>this._currentHover,addKeyboardListener:(a,l)=>{document.addEventListener(a,l);let c=this._keyboardListeners.get(a);c||(c=[],this._keyboardListeners.set(a,c)),c.push(l)},isViewVisible:e.viewVisibilityPredicate,isViewSpec:a=>e.viewFactory.isViewSpec(a),createView:function(a,l,c){return e.viewFactory.createView(a,t,l,c)}},i=this.spec;i.datasets&&this.registerNamedDataProvider(a=>i.datasets[a]),this.viewRoot=t.createView(i,null,"viewRoot"),await hn(this.viewRoot),Ka(this.viewRoot),Qa(this.viewRoot),this.viewRoot=el(this.viewRoot),this._glHelper.invalidateSize();const s=[];this.viewRoot.visit(a=>{a instanceof N&&s.push(a)});const o=Ga(this.viewRoot,t.dataFlow);Ja(o),this.broadcast("dataFlowBuilt",o),o.dataSources.forEach(a=>console.log(a.subtreeToString())),s.forEach(a=>a.mark.initializeEncoders());const r=Promise.all(s.map(a=>a.mark.initializeGraphics()));for(const a of s)o.addObserver(l=>{a.mark.initializeData(),a.mark.updateGraphicsData()},a);await t.fontManager.waitUntilReady(),o.initialize(),await Promise.all(o.dataSources.map(a=>a.load())),this.viewRoot.visit(a=>{for(const l of Object.values(a.resolutions.scale))l.reconfigure()}),this.broadcast("dataLoaded"),await r,this.viewRoot.visit(a=>{for(const l of Object.values(a.resolutions.scale))this._glHelper.createRangeTexture(l)});for(const a of s)a.mark.finalizeGraphicsInitialization();t.requestLayoutReflow=this.computeLayout.bind(this),this.viewRoot.visit(a=>Ie(a,"size")),this._glHelper.invalidateSize()}async launch(){try{return this._prepareContainer(),await this._prepareViewsAndData(),this.registerMouseEvents(),this.computeLayout(),this.animator.requestRender(),this._glHelper.addEventListener("resize",()=>{this.computeLayout(),this.renderAll()}),!0}catch(e){const t=`${e.view?`At "${e.view.getPathString()}": `:""}${e.toString()}`;return console.error(e.stack),Tl(this.container,t),!1}finally{this.container.classList.remove("loading"),window.setTimeout(()=>{this.loadingMessageElement.style.display="none"},2e3)}}registerMouseEvents(){const e=this._glHelper.canvas,t=i=>{var s;if(this.layout&&i instanceof MouseEvent){i.type=="mousemove"&&(this.tooltip.handleMouseMove(i),this._tooltipUpdateRequested=!1,i.buttons==0&&this.renderPickingFramebuffer());const o=e.getBoundingClientRect(),r=new al(i.clientX-o.left-e.clientLeft,i.clientY-o.top-e.clientTop),a=l=>{this.layout.dispatchInteractionEvent(new rl(r,l)),this._tooltipUpdateRequested||this.tooltip.clear()};if(i.type!="wheel"&&this._wheelInertia.cancel(),i.type=="mousemove")this._handlePicking(r.x,r.y);else if(i.type=="mousedown"||i.type=="mouseup")this.renderPickingFramebuffer();else if(i.type=="wheel"){this._tooltipUpdateRequested=!1;const l=i;if(Math.abs(l.deltaX)>Math.abs(l.deltaY))this._currentHover=null,this._wheelInertia.cancel();else{const c=vl(l);this._wheelInertia.setMomentum(l.deltaY*(l.deltaMode?80:1),f=>{const d=new WheelEvent("wheel",T(v({},c),{deltaMode:0,deltaX:0,deltaY:f}));a(d)}),l.preventDefault();return}}if(i.type=="click"){const l=this._currentHover?{type:i.type,viewPath:[...this._currentHover.mark.unitView.getAncestors()].map(c=>c.name).reverse(),datum:this._currentHover.datum}:{type:i.type,viewPath:null,datum:null};(s=this._eventListeners.get("click"))==null||s.forEach(c=>c(l))}a(i)}};["mousedown","mouseup","wheel","click","mousemove","gesturechange","contextmenu"].forEach(i=>e.addEventListener(i,t)),e.addEventListener("mousedown",()=>{document.addEventListener("mouseup",()=>this.tooltip.popEnabledState(),{once:!0}),this.tooltip.pushEnabledState(!1)}),e.addEventListener("dragstart",i=>i.stopPropagation())}_handlePicking(e,t){var o;const i=this._glHelper.readPickingPixel(e,t),s=i[0]|i[1]<<8|i[2]<<16;if(s==0){this._currentHover=null;return}if(s!==((o=this._currentHover)==null?void 0:o.uniqueId)&&(this._currentHover=null),this._currentHover||this.viewRoot.visit(r=>{if(r instanceof N){if(r.mark.isPickingParticipant()){const a=r.mark.encoders.uniqueId.accessor;r.getCollector().visitData(l=>{a(l)==s&&(this._currentHover={mark:r.mark,datum:l,uniqueId:s})})}if(this._currentHover)return me}}),this._currentHover){const r=this._currentHover.mark;this.updateTooltip(this._currentHover.datum,async a=>{var c;if(!r.isPickingParticipant())return;const l=r.properties.tooltip;if(l!==null){const f=(c=l==null?void 0:l.handler)!=null?c:"default",d=this.tooltipHandlers[f];if(!d)throw new Error("No such tooltip handler: "+f);return d(a,r,l==null?void 0:l.params)}})}}updateTooltip(e,t){if(!this._tooltipUpdateRequested||!e)this.tooltip.updateWithDatum(e,t),this._tooltipUpdateRequested=!0;else throw new Error("Tooltip has already been updated! Duplicate event handler?")}computeLayout(){const e=this.viewRoot;if(!e)return;this.broadcast("layout");const t=this._glHelper.getLogicalCanvasSize();if(isNaN(t.width)||isNaN(t.height)){console.log(`NaN in canvas size: ${t.width}x${t.height}. Skipping computeLayout().`);return}this._renderingContext=new ei({picking:!1},this._glHelper),this._pickingContext=new ei({picking:!0},this._glHelper);const i=new nl({});e.render(new ol(this._renderingContext,this._pickingContext,i),z.create(0,0,t.width,t.height)),this.layout=i.getLayout(),this.broadcast("layoutComputed")}renderAll(){var e;(e=this._renderingContext)==null||e.renderDeferred(),this._dirtyPickingBuffer=!0}renderPickingFramebuffer(){!this._dirtyPickingBuffer||(this._pickingContext.renderDeferred(),this._dirtyPickingBuffer=!1)}getSearchableViews(){const e=[];return this.viewRoot.visit(t=>{t instanceof N&&t.getAccessor("search")&&e.push(t)}),e}getNamedScaleResolutions(){const e=new Map;return this.viewRoot.visit(t=>{for(const i of Object.values(t.resolutions.scale))i.name&&e.set(i.name,i)}),e}}function Tl(n,e){const t=document.createElement("div");t.className="message-box";const i=document.createElement("div");i.textContent=e,t.appendChild(i),n.appendChild(t)}var kl="assets/bowtie.663e9fd6.svg";async function Ol(n,e,t={}){var o,r,a;let i;if(I(n)){if(i=document.querySelector(n),!i)throw new Error(`No such element: ${n}`)}else if(n instanceof HTMLElement)i=n;else throw new Error(`Invalid element: ${n}`);let s;try{const l=H(e)?e:await Fl(e);if((o=l.baseUrl)!=null||(l.baseUrl=""),(r=l.width)!=null||(l.width="container"),(a=l.padding)!=null||(l.padding=10),i==document.body){const c=document.createElement("div");c.style.position="fixed",c.style.inset="0",c.style.overflow="hidden",i.appendChild(c),i=c}s=new Pl(i,l,t),Al(s,t),await s.launch()}catch(l){i.innerText=l.toString(),console.error(l)}return{finalize(){for(s.destroy();i.firstChild;)i.firstChild.remove()},addEventListener(l,c){const f=s._eventListeners;let d=f.get(l);d||(d=new Set,f.set(l,d)),d.add(c)},removeEventListener(l,c){var d;(d=s._eventListeners.get(l))==null||d.delete(c)},getScaleResolutionByName(l){return s.getNamedScaleResolutions().get(l)}}}function Al(n,e){e.namedDataProvider&&n.registerNamedDataProvider(e.namedDataProvider)}async function Fl(n){let e;try{e=JSON.parse(await Ve().load(n))}catch(t){throw new Error(`Could not load or parse configuration: ${n}, reason: ${t.message}`)}if(!e.baseUrl){const t=n.match(/^[^?#]*\//);e.baseUrl=t&&t[0]||"./"}return e}var Rl='export default "data:text/plain;base64,ewogICJkYXRhIjogewogICAgInNlcXVlbmNlIjogeyAic3RhcnQiOiAwLCAic3RvcCI6IDYwLCAiYXMiOiAieCIgfQogIH0sCiAgInRyYW5zZm9ybSI6IFsKICAgIHsKICAgICAgInR5cGUiOiAiZm9ybXVsYSIsCiAgICAgICJleHByIjogInNpbigoZGF0dW0ueCAtIDMwKSAvIDQpICsgKGRhdHVtLnggLSAzMCkgLyAzMCIsCiAgICAgICJhcyI6ICJ5IgogICAgfQogIF0sCiAgIm1hcmsiOiAicmVjdCIsCiAgImVuY29kaW5nIjogewogICAgIngiOiB7ICJmaWVsZCI6ICJ4IiwgInR5cGUiOiAiaW5kZXgiLCAiYmFuZCI6IDAuOSB9LAogICAgInkiOiB7ICJmaWVsZCI6ICJ5IiwgInR5cGUiOiAicXVhbnRpdGF0aXZlIiB9LAogICAgInkyIjogeyAiZGF0dW0iOiAwIH0sCiAgICAiY29sb3IiOiB7CiAgICAgICJmaWVsZCI6ICJ5IiwKICAgICAgInR5cGUiOiAicXVhbnRpdGF0aXZlIiwKICAgICAgInNjYWxlIjogewogICAgICAgICJ0eXBlIjogInRocmVzaG9sZCIsCiAgICAgICAgImRvbWFpbiI6IFswXSwKICAgICAgICAicmFuZ2UiOiBbIiNlZDU1M2IiLCAiIzIwNjM5YiJdCiAgICAgIH0KICAgIH0KICB9Cn0K"';const $l="#/definitions/RootSpec",zl="http://json-schema.org/draft-07/schema#",Ml={AggregateParams:{additionalProperties:!1,properties:{groupby:{description:"Which fields to use for grouping. Missing `groupby` results in a single group that includes all the data items.",items:{$ref:"#/definitions/Field"},type:"array"},type:{const:"aggregate",description:"The type of the transform to be applied",type:"string"}},required:["type"],type:"object"},Align:{enum:["left","center","right"],type:"string"},Axis:{additionalProperties:!1,properties:{domain:{description:"A boolean flag indicating if the domain (the axis baseline) should be included as part of the axis.\n\n__Default value:__ `true`",type:"boolean"},domainCap:{description:'The stroke cap for the domain line\'s ending style. One of `"butt"`, `"round"` or `"square"`.\n\n__Default value:__ `"butt"`',enum:["butt","round","square"],type:"string"},domainColor:{description:'Color of axis domain line.\n\n__Default value:__ `"gray"`.',type:"string"},domainDash:{description:"An array of alternating [stroke, space] lengths for dashed domain lines.",items:{type:"number"},type:"array"},domainDashOffset:{description:"The pixel offset at which to start drawing with the domain dash array.",type:"number"},domainWidth:{description:"Stroke width of axis domain line\n\n__Default value:__ `1`",type:"number"},format:{description:"The format specifier pattern for axis labels. Must be a legal [d3-format](https://github.com/d3/d3-format#locale_format) specifier.",type:"string"},labelAlign:{$ref:"#/definitions/Align",description:"Horizontal text alignment of axis tick labels, overriding the default setting for the current axis orientation."},labelAngle:{description:"The rotation angle of the axis labels.\n\n__Default value:__ `-90` for nominal and ordinal fields; `0` otherwise.",maximum:360,minimum:-360,type:"number"},labelBaseline:{$ref:"#/definitions/Baseline",description:'Vertical text baseline of axis tick labels, overriding the default setting for the current axis orientation. One of `"alphabetic"` (default), `"top"`, `"middle"`, `"bottom"`.'},labelColor:{description:"The color of the tick label, can be in hex color code or regular color name.",type:"string"},labelFont:{description:"The font of the tick label.",type:"string"},labelFontSize:{description:"The font size of the label, in pixels.",minimum:0,type:"number"},labelFontStyle:{description:"Font style of the title.",type:"string"},labelFontWeight:{description:"Font weight of axis tick labels.",type:"string"},labelLimit:{description:"Maximum allowed pixel width of axis tick labels.\n\n__Default value:__ `180`",type:"number"},labelPadding:{description:"The padding, in pixels, between axis and text labels.\n\n__Default value:__ `2`",type:"number"},labels:{description:"A boolean flag indicating if labels should be included as part of the axis.\n\n__Default value:__ `true`.",type:"boolean"},maxExtent:{description:"The maximum extent in pixels that axis ticks and labels should use. This determines a maximum offset value for axis titles.\n\n__Default value:__ `undefined`.",type:"number"},minExtent:{description:"The minimum extent in pixels that axis ticks and labels should use. This determines a minimum offset value for axis titles.\n\n__Default value:__ `30` for y-axis; `undefined` for x-axis.",type:"number"},offset:{description:"The orthogonal offset in pixels by which to displace the axis from its position along the edge of the chart.",type:"number"},orient:{$ref:"#/definitions/AxisOrient",description:'The orientation of the axis. One of `"top"`, `"bottom"`, `"left"` or `"right"`. The orientation can be used to further specialize the axis type (e.g., a y axis oriented for the right edge of the chart).\n\n__Default value:__ `"bottom"` for x-axes and `"left"` for y-axes.'},tickCap:{description:'The stroke cap for the tick lines\' ending style. One of `"butt"`, `"round"` or `"square"`.\n\n__Default value:__ `"butt"`',enum:["butt","round","square"],type:"string"},tickColor:{description:`The color of the axis's tick.

__Default value:__ \`"gray"\``,type:"string"},tickCount:{description:'A desired number of ticks, for axes visualizing quantitative scales. The resulting number may be different so that values are "nice" (multiples of `2`, `5`, `10`) and lie within the underlying scale\'s range.',minimum:0,type:"number"},tickDash:{description:"An array of alternating [stroke, space] lengths for dashed tick mark lines.",items:{type:"number"},type:"array"},tickDashOffset:{description:"The pixel offset at which to start drawing with the tick mark dash array.",type:"number"},tickMinStep:{description:"The minimum desired step between axis ticks, in terms of scale domain values. For example, a value of `1` indicates that ticks should not be less than 1 unit apart. If `tickMinStep` is specified, the `tickCount` value will be adjusted, if necessary, to enforce the minimum step value.",type:"number"},tickSize:{description:"The size in pixels of axis ticks.\n\n__Default value:__ `5`",minimum:0,type:"number"},tickWidth:{description:"The width, in pixels, of ticks.\n\n__Default value:__ `1`",minimum:0,type:"number"},ticks:{description:"Boolean value that determines whether the axis should include ticks.\n\n__Default value:__ `true`",type:"boolean"},title:{description:"A title for the axis (none by default).",type:"string"},titleColor:{description:"Color of the title, can be in hex color code or regular color name.",type:"string"},titleFont:{description:'Font of the title. (e.g., `"Helvetica Neue"`).',type:"string"},titleFontSize:{description:"Font size of the title.",minimum:0,type:"number"},titleFontStyle:{description:"Font style of the title.",type:"string"},titleFontWeight:{description:'Font weight of the title. This can be either a string (e.g `"bold"`, `"normal"`) or a number (`100`, `200`, `300`, ..., `900` where `"normal"` = `400` and `"bold"` = `700`).',type:"string"},titleOpacity:{description:"Opacity of the axis title.",type:"number"},titlePadding:{description:"The padding, in pixels, between title and axis.",type:"number"},values:{description:"Explicitly set the visible axis tick and label values.",items:{},type:"array"}},type:"object"},AxisOrient:{enum:["top","bottom","left","right"],type:"string"},Baseline:{enum:["top","middle","bottom","alphabetic"],type:"string"},Channel:{anyOf:[{$ref:"#/definitions/PositionalChannel"},{const:"color",type:"string"},{const:"fill",type:"string"},{const:"stroke",type:"string"},{const:"opacity",type:"string"},{const:"fillOpacity",type:"string"},{const:"strokeOpacity",type:"string"},{const:"strokeWidth",type:"string"},{const:"size",type:"string"},{const:"shape",type:"string"},{const:"text",type:"string"},{const:"angle",type:"string"},{const:"sample",type:"string"},{const:"uniqueId",type:"string"},{const:"search",type:"string"},{const:"facetIndex",type:"string"},{const:"semanticScore",type:"string"},{const:"dx",type:"string"},{const:"dy",type:"string"}]},ChromPosDef:{additionalProperties:!1,properties:{axis:{anyOf:[{$ref:"#/definitions/Axis"},{type:"null"}],description:"An object defining properties of axis's gridlines, ticks and labels. If `null`, the axis for the encoding channel will be removed.\n\n__Default value:__ If undefined, default [axis properties](https://vega.github.io/vega-lite/docs/axis.html) are applied.\n\n__See also:__ [`axis`](https://vega.github.io/vega-lite/docs/axis.html) documentation."},band:{description:"Relative position on band scale. For example, the marks will be positioned at the beginning of the band if set to `0`, and at the middle of the band if set to `0.5`.",maximum:1,minimum:0,type:"number"},chrom:{$ref:"#/definitions/FieldName",description:"The field having the chromosome or contig."},offset:{description:"An offset or offsets that allow for adjusting the numbering base. The offset is subtracted from the positions.\n\nGenomeSpy uses internally zero-based indexing with half-open intervals. UCSC-based formats (BED, etc.) generally use this scheme. However, for example, VCF files use one-based indexing and must be adjusted by setting the offset to `1`.\n\n**Default:** `0`",type:"number"},pos:{$ref:"#/definitions/FieldName",description:"The field having an intra-chromosomal position."},resolutionChannel:{$ref:"#/definitions/Channel",description:"An alternative channel for scale resolution.\n\nThis is mainly for internal use and allows using `color` channel to resolve `fill` and `stroke` channels under certain circumstances."},scale:{anyOf:[{$ref:"#/definitions/Scale"},{type:"null"}],description:`An object defining properties of the channel's scale, which is the function that transforms values in the data domain (numbers, dates, strings, etc) to visual values (pixels, colors, sizes) of the encoding channels.

If \`null\`, the scale will be [disabled and the data value will be directly encoded](https://vega.github.io/vega-lite/docs/scale.html#disable).

__Default value:__ If undefined, default [scale properties](https://vega.github.io/vega-lite/docs/scale.html) are applied.

__See also:__ [\`scale\`](https://vega.github.io/vega-lite/docs/scale.html) documentation.`},title:{description:"A title for the field. If `null`, the title will be removed.",type:["string","null"]},type:{const:"locus",type:"string"}},required:["chrom","type"],type:"object"},ChromosomalLocus:{additionalProperties:!1,properties:{chrom:{description:'The name of the chromosome. For example: `"chr1"`, `"CHR1"`, or `"1"`.',type:"string"},pos:{description:"The zero-based position inside the chromosome or contig.",type:"number"}},required:["chrom"],type:"object"},CollectParams:{additionalProperties:!1,properties:{groupby:{description:"Arranges the data into consecutive batches based on the groups. This is mainly intended for internal use so that faceted data can be handled as batches.",items:{$ref:"#/definitions/Field"},type:"array"},sort:{$ref:"#/definitions/CompareParams",description:"The sort order."},type:{const:"collect",description:"The type of the transform to be applied",type:"string"}},required:["type"],type:"object"},"ColorDef<string>":{$ref:"#/definitions/MarkPropDef%3Cstring%2C(string%7Cnull)%3E"},CompareParams:{additionalProperties:!1,properties:{field:{anyOf:[{items:{$ref:"#/definitions/Field"},type:"array"},{$ref:"#/definitions/Field"}],description:"The field(s) to sort by"},order:{anyOf:[{items:{$ref:"#/definitions/SortOrder"},type:"array"},{$ref:"#/definitions/SortOrder"}],description:'The order(s) to use: `"ascending"` (default), `"descending"`.'}},required:["field"],type:"object"},ComplexDomain:{description:"A complex domain that needs to be converted into a scalar domain before it is assigned to a scale.",items:{$ref:"#/definitions/ChromosomalLocus"},type:"array"},ConcatSpec:{additionalProperties:!1,properties:{baseUrl:{type:"string"},concat:{items:{anyOf:[{$ref:"#/definitions/ViewSpec"},{$ref:"#/definitions/ImportSpec"}]},type:"array"},configurableVisibility:{description:"Is the visibility configurable interactively from the App. Configurability requires that the view has an explicitly specified name that is *unique* in within the view specification.\n\n**Default:** `false` for children of `layer`, `true` for others.",type:"boolean"},data:{$ref:"#/definitions/Data"},description:{anyOf:[{type:"string"},{items:{type:"string"},type:"array"}],description:"A description of the view. Multiple lines can be provided as an array."},encoding:{$ref:"#/definitions/Encoding"},height:{anyOf:[{$ref:"#/definitions/SizeDef"},{type:"number"},{$ref:"#/definitions/Step"},{const:"container",type:"string"}]},name:{type:"string"},opacity:{$ref:"#/definitions/ViewOpacityDef",description:"Opacity of the view and all its children.\n\n**Default:* `1.0`"},padding:{$ref:"#/definitions/PaddingConfig",description:"Padding in pixels.\n\n**Default:* `0`"},resolve:{additionalProperties:!1,properties:{axis:{additionalProperties:{$ref:"#/definitions/ResolutionBehavior"},properties:{default:{$ref:"#/definitions/ResolutionBehavior"}},type:"object"},scale:{additionalProperties:{$ref:"#/definitions/ResolutionBehavior"},properties:{default:{$ref:"#/definitions/ResolutionBehavior"}},type:"object"}},type:"object"},spacing:{type:"number"},title:{type:"string"},transform:{items:{$ref:"#/definitions/TransformParams"},type:"array"},visible:{description:"Visibility of the view. An invisible view is removed from the layout and not rendered.\n\n**Default:** `true`",type:"boolean"},width:{anyOf:[{$ref:"#/definitions/SizeDef"},{type:"number"},{$ref:"#/definitions/Step"},{const:"container",type:"string"}]}},required:["concat"],type:"object"},Contig:{additionalProperties:!1,properties:{name:{type:"string"},size:{type:"number"}},required:["name","size"],type:"object"},CoverageParams:{additionalProperties:!1,properties:{as:{description:"The output field for the computed coverage.",type:"string"},asChrom:{description:"The output field for the chromosome.\n\n**Default:** Same as `chrom`",type:"string"},asEnd:{description:"The output field for the end coordinate.\n\n**Default:** Same as `end`",type:"string"},asStart:{description:"The output field for the start coordinate.\n\n**Default:** Same as `start`",type:"string"},chrom:{$ref:"#/definitions/Field",description:"An optional chromosome field that is passed through. TODO: groupby"},end:{$ref:"#/definitions/Field",description:"The field representing the end coordinate of the segment (exclusive)."},start:{$ref:"#/definitions/Field",description:"The field representing the start coordinate of the segment (inclusive)."},type:{const:"coverage",description:"The type of the transform to be applied",type:"string"},weight:{$ref:"#/definitions/Field",description:"A field representing an optional weight for the segment. Can be used with copy ratios, for example."}},required:["end","start","type"],type:"object"},CsvDataFormat:{additionalProperties:!1,properties:{parse:{anyOf:[{$ref:"#/definitions/Parse"},{type:"null"}],description:'If set to `null`, disable type inference based on the spec and only use type inference based on the data. Alternatively, a parsing directive object can be provided for explicit data types. Each property of the object corresponds to a field name, and the value to the desired data type (one of `"number"`, `"boolean"`, `"date"`, or null (do not parse the field)). For example, `"parse": {"modified_on": "date"}` parses the `modified_on` field in each input record a Date value.\n\nFor `"date"`, we parse data based using Javascript\'s [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse). For Specific date formats can be provided (e.g., `{foo: "date:\'%m%d%Y\'"}`), using the [d3-time-format syntax](https://github.com/d3/d3-time-format#locale_format). UTC date format parsing is supported similarly (e.g., `{foo: "utc:\'%m%d%Y\'"}`). See more about [UTC time](https://vega.github.io/vega-lite/docs/timeunit.html#utc)'},type:{description:'Type of input data: `"json"`, `"csv"`, `"tsv"`, `"dsv"`.\n\n__Default value:__  The default format type is determined by the extension of the file URL. If no extension is detected, `"json"` will be used by default.',enum:["csv","tsv"],type:"string"}},type:"object"},Data:{anyOf:[{$ref:"#/definitions/DataSource"},{$ref:"#/definitions/Generator"}]},DataFormat:{anyOf:[{$ref:"#/definitions/CsvDataFormat"},{$ref:"#/definitions/DsvDataFormat"},{$ref:"#/definitions/JsonDataFormat"},{$ref:"#/definitions/OtherDataFormat"}]},DataSource:{anyOf:[{$ref:"#/definitions/UrlData"},{$ref:"#/definitions/InlineData"},{$ref:"#/definitions/NamedData"},{$ref:"#/definitions/DynamicCallbackData"},{$ref:"#/definitions/DynamicData"}]},DsvDataFormat:{additionalProperties:!1,properties:{delimiter:{description:"The delimiter between records. The delimiter must be a single character (i.e., a single 16-bit code unit); so, ASCII delimiters are fine, but emoji delimiters are not.",maxLength:1,minLength:1,type:"string"},parse:{anyOf:[{$ref:"#/definitions/Parse"},{type:"null"}],description:'If set to `null`, disable type inference based on the spec and only use type inference based on the data. Alternatively, a parsing directive object can be provided for explicit data types. Each property of the object corresponds to a field name, and the value to the desired data type (one of `"number"`, `"boolean"`, `"date"`, or null (do not parse the field)). For example, `"parse": {"modified_on": "date"}` parses the `modified_on` field in each input record a Date value.\n\nFor `"date"`, we parse data based using Javascript\'s [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse). For Specific date formats can be provided (e.g., `{foo: "date:\'%m%d%Y\'"}`), using the [d3-time-format syntax](https://github.com/d3/d3-time-format#locale_format). UTC date format parsing is supported similarly (e.g., `{foo: "utc:\'%m%d%Y\'"}`). See more about [UTC time](https://vega.github.io/vega-lite/docs/timeunit.html#utc)'},type:{const:"dsv",description:'Type of input data: `"json"`, `"csv"`, `"tsv"`, `"dsv"`.\n\n__Default value:__  The default format type is determined by the extension of the file URL. If no extension is detected, `"json"` will be used by default.',type:"string"}},required:["delimiter"],type:"object"},DynamicCallbackData:{additionalProperties:!1,properties:{dynamicCallbackSource:{description:"The View class has `getDynamicData()` methods that provides the data. This is intended for internal use.",type:"boolean"},format:{$ref:"#/definitions/DataFormat",description:"An object that specifies the format for parsing the data."},name:{description:"Provide a placeholder name and bind data at runtime.",type:"string"}},required:["dynamicCallbackSource"],type:"object"},DynamicData:{additionalProperties:!1,properties:{dynamicSource:{description:"For internal use.",type:"boolean"},format:{$ref:"#/definitions/DataFormat",description:"An object that specifies the format for parsing the data."},name:{description:"Provide a placeholder name and bind data at runtime.",type:"string"}},required:["dynamicSource"],type:"object"},DynamicOpacity:{additionalProperties:!1,description:"DynamicOpacity specifies a zoom-dependent behavior for view opacity. The opacity is interpolated between the specified stops.",properties:{channel:{$ref:"#/definitions/PrimaryPositionalChannel"},unitsPerPixel:{description:"Stops expressed as units (base pairs, for example) per pixel.",items:{type:"number"},type:"array"},values:{description:"Opacity values that match the given stops.",items:{type:"number"},type:"array"}},required:["unitsPerPixel","values"],type:"object"},Encoding:{additionalProperties:!1,properties:{angle:{$ref:"#/definitions/NumericMarkPropDef%3Cstring%3E",description:"Rotation angle of point and text marks."},color:{$ref:"#/definitions/ColorDef%3Cstring%3E",description:"Color of the marks \u2013 either fill or stroke color based on  the `filled` property of mark definition.\n\n_Note:_ 1) For fine-grained control over both fill and stroke colors of the marks, please use the `fill` and `stroke` channels. The `fill` or `stroke` encodings have higher precedence than `color`, thus may override the `color` encoding if conflicting encodings are specified. 2) See the scale documentation for more information about customizing [color scheme](https://vega.github.io/vega-lite/docs/scale.html#scheme)."},dx:{$ref:"#/definitions/NumericMarkPropDef%3Cstring%3E"},dy:{$ref:"#/definitions/NumericMarkPropDef%3Cstring%3E"},facetIndex:{$ref:"#/definitions/FieldDefWithoutScale%3Cstring%3E",description:"For internal use"},fill:{$ref:"#/definitions/ColorDef%3Cstring%3E",description:"Fill color of the marks.\n\n_Note:_ The `fill` encoding has higher precedence than `color`, thus may override the `color` encoding if conflicting encodings are specified."},fillOpacity:{$ref:"#/definitions/NumericMarkPropDef%3Cstring%3E",description:"Fill opacity of the marks."},opacity:{$ref:"#/definitions/NumericMarkPropDef%3Cstring%3E",description:"Opacity of the marks."},sample:{$ref:"#/definitions/FieldDefWithoutScale%3Cstring%3E",description:"Facet identifier for interactive filtering, sorting, and grouping in the App."},search:{$ref:"#/definitions/FieldDefWithoutScale%3Cstring%3E"},semanticScore:{$ref:"#/definitions/FieldDefWithoutScale%3Cstring%3E"},shape:{$ref:"#/definitions/ShapeDef%3Cstring%3E",description:'Shape of the mark.\n\nFor `point` marks the supported values include:\n- plotting shapes: `"circle"`, `"square"`, `"cross"`, `"diamond"`, `"triangle-up"`, `"triangle-down"`, `"triangle-right"`, or `"triangle-left"`.\n- centered directional shape `"triangle"`'},size:{$ref:"#/definitions/NumericMarkPropDef%3Cstring%3E",description:'Size of the mark.\n- For `"point"` \u2013 the symbol size, or pixel area of the mark.\n- For `"text"` \u2013 the text\'s font size.'},stroke:{$ref:"#/definitions/ColorDef%3Cstring%3E",description:"Stroke color of the marks.\n\n_Note:_ The `stroke` encoding has higher precedence than `color`, thus may override the `color` encoding if conflicting encodings are specified."},strokeOpacity:{$ref:"#/definitions/NumericMarkPropDef%3Cstring%3E",description:"Stroke opacity of the marks."},strokeWidth:{$ref:"#/definitions/NumericMarkPropDef%3Cstring%3E",description:"Stroke width of the marks."},text:{$ref:"#/definitions/TextDef%3Cstring%3E",description:"Text of the `text` mark."},uniqueId:{$ref:"#/definitions/FieldDefWithoutScale%3Cstring%3E",description:"For internal use"},x:{$ref:"#/definitions/PositionDef%3Cstring%3E",description:"X coordinates of the marks.\n\nThe `value` of this channel can be a number between zero and one."},x2:{$ref:"#/definitions/Position2Def%3Cstring%3E",description:"X2 coordinates of the marks.\n\nThe `value` of this channel can be a number between zero and one."},y:{$ref:"#/definitions/PositionDef%3Cstring%3E",description:"Y coordinates of the marks.\n\nThe `value` of this channel can be a number between zero and one."},y2:{$ref:"#/definitions/Position2Def%3Cstring%3E",description:"Y2 coordinates of the marks.\n\nThe `value` of this channel can be a number between zero and one."}},type:"object"},Field:{description:"The name of the field or a JavaScript expression for accessing nested properties. Dots and brackets in the field name must be escaped.",type:"string"},"FieldDefWithoutScale<string>":{additionalProperties:!1,properties:{field:{description:'__Required.__ A string defining the name of the field from which to pull a data value or an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.\n\n__See also:__ [`field`](https://vega.github.io/vega-lite/docs/field.html) documentation.\n\n__Notes:__ 1)  Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `"field": "foo.bar"` and `"field": "foo[\'bar\']"`). If field names contain dots or brackets but are not nested, you can use `\\\\` to escape dots and brackets (e.g., `"a\\\\.b"` and `"a\\\\[0\\\\]"`). See more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html). 2) `field` is not required if `aggregate` is `count`.',type:"string"},title:{description:"A title for the field. If `null`, the title will be removed.",type:["string","null"]}},type:"object"},FieldName:{type:"string"},FilterParams:{additionalProperties:!1,properties:{expr:{description:"An expression string. The data object is removed if the expression evaluates to false.",type:"string"},type:{const:"filter",description:"The type of the transform to be applied",type:"string"}},required:["expr","type"],type:"object"},FilterScoredLabelsParams:{additionalProperties:!1,properties:{channel:{description:'**Default:** `"x"`',enum:["x","y"],type:"string"},lane:{$ref:"#/definitions/Field",description:"An optional field representing element's lane, e.g., if transcripts are shown using a piled up layout."},padding:{description:"Padding (in pixels) around the element.\n\n**Default:** `0`",type:"number"},pos:{$ref:"#/definitions/Field",description:"The field representing element's position on the domain."},score:{$ref:"#/definitions/Field",description:"The field representing the score used for prioritization."},type:{const:"filterScoredLabels",description:"The type of the transform to be applied",type:"string"},width:{$ref:"#/definitions/Field",description:"The field representing element's width in pixels"}},required:["pos","score","type","width"],type:"object"},FlattenCompressedExonsParams:{additionalProperties:!1,properties:{as:{description:'Field names for the flattened exons.\n\n**Default:** `["exonStart", "exonEnd"]`',items:{type:"string"},maxItems:2,minItems:2,type:"array"},exons:{$ref:"#/definitions/Field",description:'The field containing the exons.\n\n**Default:** `"exons"`'},start:{$ref:"#/definitions/Field",description:'Start coordinate of the gene body.\n\n**Default:** `"start"`'},type:{const:"flattenCompressedExons",description:"The type of the transform to be applied",type:"string"}},required:["type"],type:"object"},FlattenDelimitedParams:{additionalProperties:!1,properties:{as:{anyOf:[{items:{type:"string"},type:"array"},{type:"string"}],description:`The output field name(s) for the flattened field.

**Default:** the input fields.`},field:{anyOf:[{items:{$ref:"#/definitions/Field"},type:"array"},{$ref:"#/definitions/Field"}],description:"The field(s) to split and flatten"},separator:{anyOf:[{items:{type:"string"},type:"array"},{type:"string"}],description:"Separator(s) used on the field(s) TODO: Rename to delimiter"},type:{const:"flattenDelimited",description:"The type of the transform to be applied",type:"string"}},required:["field","separator","type"],type:"object"},FlattenSequenceParams:{additionalProperties:!1,properties:{as:{description:'Name of the fields where the zero-based index number and flattened sequence letter are written to.\n\n**Default:** `["pos", "sequence"]`',items:{type:"string"},maxItems:2,minItems:2,type:"array"},field:{$ref:"#/definitions/Field",description:'The field to flatten.\n\n**Default:** `"sequence"`'},type:{const:"flattenSequence",description:"The type of the transform to be applied",type:"string"}},required:["type"],type:"object"},FontStyle:{enum:["normal","italic"],type:"string"},FontWeight:{anyOf:[{type:"number"},{const:"thin",type:"string"},{const:"light",type:"string"},{const:"regular",type:"string"},{const:"normal",type:"string"},{const:"medium",type:"string"},{const:"bold",type:"string"},{const:"black",type:"string"}]},FormulaParams:{additionalProperties:!1,properties:{as:{description:"The (new) field where the computed value is written to",type:"string"},expr:{description:"An expression string",type:"string"},type:{const:"formula",description:"The type of the transform to be applied",type:"string"}},required:["as","expr","type"],type:"object"},Generator:{$ref:"#/definitions/SequenceGenerator"},GenomeConfig:{additionalProperties:!1,properties:{baseUrl:{description:'Base url of data files: chromsizes, cytobands, and gene annotations.\n\n**Default:** `"https://genomespy.app/data/genomes/"`',type:"string"},contigs:{description:"As an alternative for chromSizes, the contigs can be provided inline.",items:{$ref:"#/definitions/Contig"},type:"array"},name:{description:"Name of the genome assembly, e.g., `hg19` or `hg38`.",type:"string"}},required:["name"],type:"object"},HConcatSpec:{additionalProperties:!1,properties:{baseUrl:{type:"string"},configurableVisibility:{description:"Is the visibility configurable interactively from the App. Configurability requires that the view has an explicitly specified name that is *unique* in within the view specification.\n\n**Default:** `false` for children of `layer`, `true` for others.",type:"boolean"},data:{$ref:"#/definitions/Data"},description:{anyOf:[{type:"string"},{items:{type:"string"},type:"array"}],description:"A description of the view. Multiple lines can be provided as an array."},encoding:{$ref:"#/definitions/Encoding"},hconcat:{items:{anyOf:[{$ref:"#/definitions/ViewSpec"},{$ref:"#/definitions/ImportSpec"}]},type:"array"},height:{anyOf:[{$ref:"#/definitions/SizeDef"},{type:"number"},{$ref:"#/definitions/Step"},{const:"container",type:"string"}]},name:{type:"string"},opacity:{$ref:"#/definitions/ViewOpacityDef",description:"Opacity of the view and all its children.\n\n**Default:* `1.0`"},padding:{$ref:"#/definitions/PaddingConfig",description:"Padding in pixels.\n\n**Default:* `0`"},resolve:{additionalProperties:!1,properties:{axis:{additionalProperties:{$ref:"#/definitions/ResolutionBehavior"},properties:{default:{$ref:"#/definitions/ResolutionBehavior"}},type:"object"},scale:{additionalProperties:{$ref:"#/definitions/ResolutionBehavior"},properties:{default:{$ref:"#/definitions/ResolutionBehavior"}},type:"object"}},type:"object"},spacing:{type:"number"},title:{type:"string"},transform:{items:{$ref:"#/definitions/TransformParams"},type:"array"},visible:{description:"Visibility of the view. An invisible view is removed from the layout and not rendered.\n\n**Default:** `true`",type:"boolean"},width:{anyOf:[{$ref:"#/definitions/SizeDef"},{type:"number"},{$ref:"#/definitions/Step"},{const:"container",type:"string"}]}},required:["hconcat"],type:"object"},HandledTooltip:{additionalProperties:!1,properties:{handler:{type:"string"},params:{type:"object"}},required:["handler"],type:"object"},IdentifierParams:{additionalProperties:!1,properties:{as:{description:'**Default:** `"_uniqueId"`',type:"string"},type:{const:"identifier",description:"The type of the transform to be applied",type:"string"}},required:["type"],type:"object"},ImportConfig:{additionalProperties:!1,properties:{name:{type:"string"},params:{type:"object"},url:{type:"string"}},type:"object"},ImportSpec:{additionalProperties:!1,properties:{import:{$ref:"#/definitions/ImportConfig"}},required:["import"],type:"object"},InlineData:{additionalProperties:!1,properties:{format:{$ref:"#/definitions/DataFormat",description:"An object that specifies the format for parsing the data."},name:{description:"Provide a placeholder name and bind data at runtime.",type:"string"},values:{$ref:"#/definitions/InlineDataset",description:"The full data set, included inline. This can be an array of objects or primitive values, an object, or a string. Arrays of primitive values are ingested as objects with a `data` property. Strings are parsed according to the specified format type."}},required:["values"],type:"object"},InlineDataset:{anyOf:[{items:{type:"number"},type:"array"},{items:{type:"string"},type:"array"},{items:{type:"boolean"},type:"array"},{items:{type:"object"},type:"array"},{type:"string"},{type:"object"}]},JsonDataFormat:{additionalProperties:!1,properties:{parse:{anyOf:[{$ref:"#/definitions/Parse"},{type:"null"}],description:'If set to `null`, disable type inference based on the spec and only use type inference based on the data. Alternatively, a parsing directive object can be provided for explicit data types. Each property of the object corresponds to a field name, and the value to the desired data type (one of `"number"`, `"boolean"`, `"date"`, or null (do not parse the field)). For example, `"parse": {"modified_on": "date"}` parses the `modified_on` field in each input record a Date value.\n\nFor `"date"`, we parse data based using Javascript\'s [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse). For Specific date formats can be provided (e.g., `{foo: "date:\'%m%d%Y\'"}`), using the [d3-time-format syntax](https://github.com/d3/d3-time-format#locale_format). UTC date format parsing is supported similarly (e.g., `{foo: "utc:\'%m%d%Y\'"}`). See more about [UTC time](https://vega.github.io/vega-lite/docs/timeunit.html#utc)'},property:{description:'The JSON property containing the desired data. This parameter can be used when the loaded JSON file may have surrounding structure or meta-data. For example `"property": "values.features"` is equivalent to retrieving `json.values.features` from the loaded JSON object.',type:"string"},type:{const:"json",description:'Type of input data: `"json"`, `"csv"`, `"tsv"`, `"dsv"`.\n\n__Default value:__  The default format type is determined by the extension of the file URL. If no extension is detected, `"json"` will be used by default.',type:"string"}},type:"object"},LayerSpec:{additionalProperties:!1,properties:{aggregateSamples:{items:{anyOf:[{$ref:"#/definitions/UnitSpec"},{$ref:"#/definitions/LayerSpec"}]},type:"array"},baseUrl:{type:"string"},configurableVisibility:{description:"Is the visibility configurable interactively from the App. Configurability requires that the view has an explicitly specified name that is *unique* in within the view specification.\n\n**Default:** `false` for children of `layer`, `true` for others.",type:"boolean"},data:{$ref:"#/definitions/Data"},description:{anyOf:[{type:"string"},{items:{type:"string"},type:"array"}],description:"A description of the view. Multiple lines can be provided as an array."},encoding:{$ref:"#/definitions/Encoding"},height:{anyOf:[{$ref:"#/definitions/SizeDef"},{type:"number"},{$ref:"#/definitions/Step"},{const:"container",type:"string"}]},layer:{items:{anyOf:[{$ref:"#/definitions/LayerSpec"},{$ref:"#/definitions/UnitSpec"}]},type:"array"},name:{type:"string"},opacity:{$ref:"#/definitions/ViewOpacityDef",description:"Opacity of the view and all its children.\n\n**Default:* `1.0`"},padding:{$ref:"#/definitions/PaddingConfig",description:"Padding in pixels.\n\n**Default:* `0`"},resolve:{additionalProperties:!1,properties:{axis:{additionalProperties:{$ref:"#/definitions/ResolutionBehavior"},properties:{default:{$ref:"#/definitions/ResolutionBehavior"}},type:"object"},scale:{additionalProperties:{$ref:"#/definitions/ResolutionBehavior"},properties:{default:{$ref:"#/definitions/ResolutionBehavior"}},type:"object"}},type:"object"},title:{type:"string"},transform:{items:{$ref:"#/definitions/TransformParams"},type:"array"},view:{$ref:"#/definitions/ViewConfig"},visible:{description:"Visibility of the view. An invisible view is removed from the layout and not rendered.\n\n**Default:** `true`",type:"boolean"},width:{anyOf:[{$ref:"#/definitions/SizeDef"},{type:"number"},{$ref:"#/definitions/Step"},{const:"container",type:"string"}]}},required:["layer"],type:"object"},LinearizeGenomicCoordinateParams:{additionalProperties:!1,properties:{as:{anyOf:[{type:"string"},{items:{type:"string"},type:"array"}],description:"The output field or fields for linearized coordinates."},channel:{description:'Get the genome assembly from the scale of the channel.\n\n**Default:** `"x"`',enum:["x","y"],type:"string"},chrom:{$ref:"#/definitions/Field",description:"The chromosome/contig field"},offset:{anyOf:[{type:"number"},{items:{type:"number"},type:"array"}],description:"An offset or offsets that allow for adjusting the numbering base. The offset is subtracted from the positions.\n\nGenomeSpy uses internally zero-based indexing with half-open intervals. UCSC-based formats (BED, etc.) generally use this scheme. However, for example, VCF files use one-based indexing and must be adjusted by setting the offset to `1`.\n\n**Default:** `0`"},pos:{anyOf:[{$ref:"#/definitions/Field"},{items:{$ref:"#/definitions/Field"},type:"array"}],description:"The field or fields that contain intra-chromosomal positions"},type:{const:"linearizeGenomicCoordinate",description:"The type of the transform to be applied",type:"string"}},required:["as","chrom","pos","type"],type:"object"},MarkConfigAndType:{additionalProperties:!1,properties:{align:{$ref:"#/definitions/Align",description:'The horizontal alignment of the text. One of `"left"`, `"center"`, or `"right"`.\n\n**Default value:** `"left"`'},angle:{description:"The rotation angle in degrees.\n\n**Default value:** `0`",type:"number"},baseline:{$ref:"#/definitions/Baseline",description:'The vertical alignment of the text.  One of `"top"`, `"middle"`, `"bottom"`.\n\n**Default value:** `"bottom"`'},buildIndex:{description:`Builds and index for efficient rendering of subsets of the data. The data must be sorted by the x coordinate.

TODO: This should be enabled automatically if the data are sorted.`,type:"boolean"},clip:{description:"If true, the mark is clipped to the UnitView's rectangle. By default, clipping is enabled for marks that have zoomable positional scales.",type:"boolean"},color:{type:"string"},color2:{description:"TODO",type:"string"},cornerRadius:{description:"Radius of the rounded corners.\n\n**Default value:** `0`",type:"number"},cornerRadiusBottomLeft:{description:"Radius of the bottom left rounded corner. Has higher precedence than `cornerRadius`.\n\n**Default value:** (None)",type:"number"},cornerRadiusBottomRight:{description:"Radius of the bottom right rounded corner. Has higher precedence than `cornerRadius`.\n\n**Default value:** (None)",type:"number"},cornerRadiusTopLeft:{description:"Radius of the top left rounded corner. Has higher precedence than `cornerRadius`.\n\n**Default value:** (None)",type:"number"},cornerRadiusTopRight:{description:"Radius of the top right rounded corner. Has higher precedence than `cornerRadius`.\n\n**Default value:** (None)",type:"number"},dx:{description:"The horizontal offset between the text and its anchor point, in pixels. Applied after the rotation by `angle`.",type:"number"},dy:{description:"The vertical offset between the text and its anchor point, in pixels. Applied after the rotation by `angle`.",type:"number"},dynamicData:{type:"boolean"},fill:{type:"string"},fillGradientStrength:{description:"Gradient strength controls the amount of the gradient eye-candy effect in the fill color. Valid values are between 0 and 1.\n\n**Default value:** `0`",type:"number"},fillOpacity:{type:"number"},filled:{description:"Whether the `color` represents the `fill` color (`true`) or the `stroke` color (`false`).",type:"boolean"},fitToBand:{description:'If true, sets the secondary positional channel that allows the text to be squeezed (see the `squeeze` property). Can be used when: 1) `"band"`, `"index"`, or `"locus"` scale is being used and 2) only the primary positional channel is specified.\n\n**Default value:** `false`',type:"boolean"},flushX:{description:"If true, the text is kept inside the viewport when the range of `x` and `x2` intersect the viewport.",type:"boolean"},flushY:{description:"If true, the text is kept inside the viewport when the range of `y` and `y2` intersect the viewport.",type:"boolean"},font:{description:'The font typeface. GenomeSpy uses [SDF](https://github.com/Chlumsky/msdfgen) versions of [Google Fonts](https://fonts.google.com/). Check their availability at the [A-Frame Fonts](https://github.com/etiennepinchon/aframe-fonts/tree/master/fonts) repository. System fonts are **not** supported.\n\n**Default value:** `"Lato"`',type:"string"},fontStyle:{$ref:"#/definitions/FontStyle",description:'The font style. Valid values: `"normal"` and `"italic"`.\n\n**Default value:** `"normal"`'},fontWeight:{$ref:"#/definitions/FontWeight",description:'The font weight. The following strings and numbers are valid values: `"thin"` (`100`), `"light"` (`300`), `"regular"` (`400`), `"normal"` (`400`), `"medium"` (`500`), `"bold"` (`700`), `"black"` (`900`)\n\n**Default value:** `"regular"`'},geometricZoomBound:{description:"Enables geometric zooming. The value is the base two logarithmic zoom level where the maximum point size is reached.\n\n**Default value:** `0`",type:"number"},inwardStroke:{description:"Should the stroke only grow inwards, e.g, the diameter/outline is not affected by the stroke width. Thus, a point that has a zero size has no visible stroke. This allows strokes to be used with geometric zoom, etc.\n\n**Default value:** `false`",type:"boolean"},logoLetters:{description:"Stretch letters so that they can be used with [sequence logos](https://en.wikipedia.org/wiki/Sequence_logo), etc...",type:"boolean"},minBufferSize:{description:"Minimum size for WebGL buffers (number of data items). Allows for using `bufferSubData()` to update graphics.\n\nThis property is intended for internal use.",type:"number"},minHeight:{description:"The minimum height of a rectangle in pixels. The property clamps rectangles' heights.\n\n**Default value:** `0`",type:"number"},minLength:{description:"The minimum length of the rule in pixels. Use this property to ensure that very short ranged rules remain visible even when the user zooms out.\n\n**Default value:** `0`",type:"number"},minOpacity:{description:"Clamps the minimum size-dependent opacity. The property does not affect the `opacity` channel. Valid values are between `0` and `1`.\n\nWhen a rectangle would be smaller than what is specified in `minHeight` and `minWidth`, it is faded out proportionally. Example: a rectangle would be rendered as one pixel wide, but `minWidth` clamps it to five pixels. The rectangle is actually rendered as five pixels wide, but its opacity is multiplied by 0.2. With this setting, you can limit the factor to, for example, 0.5 to keep the rectangles more clearly visible.\n\n**Default value:** `0`",type:"number"},minSagittaLength:{description:"Minimum length of the arc's sagitta. Makes very short links more clearly visible.\n\n**Default value:** `1.5`",type:"number"},minWidth:{description:`The minimum width of a rectangle in pixels. The property clamps rectangles' widths when the viewport is zoomed out.

This property also reduces flickering of very narrow rectangles when zooming. The value should generally be at least one.

**Default value:** \`1\``,type:"number"},opacity:{type:"number"},paddingX:{description:"The horizontal padding, in pixels, when the `x2` channel is used for ranged text.\n\n**Default value:** `0`",type:"number"},paddingY:{description:"The vertical padding, in pixels, when the `y2` channel is used for ranged text.\n\n**Default value:** `0`",type:"number"},sagittaScaleFactor:{description:"Scaling factor of the arc's sagitta. The default value `1.0` produces roughly circular arcs.\n\n**Default value:** `1.0`",type:"number"},sampleFacetPadding:{description:"Padding between sample facet's upper/lower edge and the maximum point size. This property controls how tightly points are squeezed when facet's height is smaller than the maximum point size. The unit is a proportion of facet's height. The value must be between `0` and `0.5`. This property has no effect when sample faceting is not used.\n\n**Default value:** `0.1`",type:"number"},segments:{description:"The number of segments in the b\xE9zier curve. Affects the rendering quality and performance. Use a higher value for a smoother curve.\n\n**Default value:* `101`",type:"number"},semanticZoomFraction:{description:"TODO\n\n**Default value:** `0.02`",type:"number"},shape:{description:'One of `"circle"`, `"square"`, `"cross"`, `"diamond"`, `"triangle-up"`, `"triangle-down"`, `"triangle-right"`, or `"triangle-left"`.\n\n**Default value:** `"circle"`',type:"string"},size:{description:"The font size in pixels.\n\n**Default value:** `11`",type:"number"},size2:{description:"TODO",type:"number"},squeeze:{description:"If the `squeeze` property is true and secondary positional channels (`x2` and/or `y2`) are used, the text is scaled to fit mark's width and/or height.\n\n**Default value:** `true`",type:"boolean"},stroke:{type:"string"},strokeCap:{description:'The style of stroke ends. Available choices: `"butt"`, `"round`", and `"square"`.\n\n**Default value:** `"butt"`',enum:["butt","square","round"],type:"string"},strokeDash:{description:"An array of of alternating stroke and gap lengths or `null` for solid strokes.\n\n**Default value:** `null`",items:{type:"number"},type:"array"},strokeDashOffset:{description:"An offset for the stroke dash pattern.\n\n**Default value:** `0`",type:"number"},strokeOpacity:{type:"number"},strokeWidth:{description:"The stroke width in pixels.",type:"number"},text:{$ref:"#/definitions/Scalar",description:'The text to display. The format of numeric data can be customized by setting a [format specifier](https://github.com/d3/d3-format#locale_format) to channel definition\'s `format` property.\n\n**Default value:** `""`'},tooltip:{$ref:"#/definitions/Tooltip",description:"TODO"},type:{$ref:"#/definitions/MarkType"},viewportEdgeFadeDistanceBottom:{type:"number"},viewportEdgeFadeDistanceLeft:{type:"number"},viewportEdgeFadeDistanceRight:{type:"number"},viewportEdgeFadeDistanceTop:{type:"number"},viewportEdgeFadeWidthBottom:{type:"number"},viewportEdgeFadeWidthLeft:{type:"number"},viewportEdgeFadeWidthRight:{type:"number"},viewportEdgeFadeWidthTop:{type:"number"},x:{type:"number"},x2:{type:"number"},xOffset:{description:"Offsets of the `x` and `x2` coordinates in pixels. The offset is applied after the viewport scaling and translation.\n\n**Default value:** `0`",type:"number"},y:{type:"number"},y2:{type:"number"},yOffset:{description:"Offsets of the `y` and `y2` coordinates in pixels. The offset is applied after the viewport scaling and translation.\n\n**Default value:** `0`",type:"number"}},required:["type"],type:"object"},"MarkPropDatumDef<Type>":{additionalProperties:!1,properties:{datum:{$ref:"#/definitions/Scalar",description:"A constant value in data domain."},resolutionChannel:{$ref:"#/definitions/Channel",description:"An alternative channel for scale resolution.\n\nThis is mainly for internal use and allows using `color` channel to resolve `fill` and `stroke` channels under certain circumstances."},scale:{anyOf:[{$ref:"#/definitions/Scale"},{type:"null"}],description:`An object defining properties of the channel's scale, which is the function that transforms values in the data domain (numbers, dates, strings, etc) to visual values (pixels, colors, sizes) of the encoding channels.

If \`null\`, the scale will be [disabled and the data value will be directly encoded](https://vega.github.io/vega-lite/docs/scale.html#disable).

__Default value:__ If undefined, default [scale properties](https://vega.github.io/vega-lite/docs/scale.html) are applied.

__See also:__ [\`scale\`](https://vega.github.io/vega-lite/docs/scale.html) documentation.`},title:{description:"A title for the field. If `null`, the title will be removed.",type:["string","null"]},type:{$ref:"#/definitions/Type"}},required:["type"],type:"object"},"MarkPropDatumDef<TypeForShape>":{additionalProperties:!1,properties:{datum:{$ref:"#/definitions/Scalar",description:"A constant value in data domain."},resolutionChannel:{$ref:"#/definitions/Channel",description:"An alternative channel for scale resolution.\n\nThis is mainly for internal use and allows using `color` channel to resolve `fill` and `stroke` channels under certain circumstances."},scale:{anyOf:[{$ref:"#/definitions/Scale"},{type:"null"}],description:`An object defining properties of the channel's scale, which is the function that transforms values in the data domain (numbers, dates, strings, etc) to visual values (pixels, colors, sizes) of the encoding channels.

If \`null\`, the scale will be [disabled and the data value will be directly encoded](https://vega.github.io/vega-lite/docs/scale.html#disable).

__Default value:__ If undefined, default [scale properties](https://vega.github.io/vega-lite/docs/scale.html) are applied.

__See also:__ [\`scale\`](https://vega.github.io/vega-lite/docs/scale.html) documentation.`},title:{description:"A title for the field. If `null`, the title will be removed.",type:["string","null"]},type:{$ref:"#/definitions/TypeForShape"}},required:["type"],type:"object"},"MarkPropDef<string,(string|null),TypeForShape>":{anyOf:[{$ref:"#/definitions/MarkPropFieldOrDatumOrExprDef%3Cstring%2CTypeForShape%3E"},{$ref:"#/definitions/ValueDef%3C(string%7Cnull)%3E"}]},"MarkPropDef<string,(string|null)>":{anyOf:[{$ref:"#/definitions/MarkPropFieldOrDatumOrExprDef%3Cstring%2CType%3E"},{$ref:"#/definitions/ValueDef%3C(string%7Cnull)%3E"}]},"MarkPropDef<string,number>":{anyOf:[{$ref:"#/definitions/MarkPropFieldOrDatumOrExprDef%3Cstring%2CType%3E"},{$ref:"#/definitions/ValueDef%3Cnumber%3E"}]},MarkPropExprDef:{additionalProperties:!1,properties:{expr:{description:"An expression. Properties of the data can be accessed through the `datum` object.",type:"string"},resolutionChannel:{$ref:"#/definitions/Channel",description:"An alternative channel for scale resolution.\n\nThis is mainly for internal use and allows using `color` channel to resolve `fill` and `stroke` channels under certain circumstances."},scale:{anyOf:[{$ref:"#/definitions/Scale"},{type:"null"}],description:`An object defining properties of the channel's scale, which is the function that transforms values in the data domain (numbers, dates, strings, etc) to visual values (pixels, colors, sizes) of the encoding channels.

If \`null\`, the scale will be [disabled and the data value will be directly encoded](https://vega.github.io/vega-lite/docs/scale.html#disable).

__Default value:__ If undefined, default [scale properties](https://vega.github.io/vega-lite/docs/scale.html) are applied.

__See also:__ [\`scale\`](https://vega.github.io/vega-lite/docs/scale.html) documentation.`},type:{$ref:"#/definitions/Type"}},required:["expr","type"],type:"object"},"MarkPropFieldDef<string,Type>":{additionalProperties:!1,description:"Field definition of a mark property, which can contain a legend.",properties:{field:{description:'__Required.__ A string defining the name of the field from which to pull a data value or an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.\n\n__See also:__ [`field`](https://vega.github.io/vega-lite/docs/field.html) documentation.\n\n__Notes:__ 1)  Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `"field": "foo.bar"` and `"field": "foo[\'bar\']"`). If field names contain dots or brackets but are not nested, you can use `\\\\` to escape dots and brackets (e.g., `"a\\\\.b"` and `"a\\\\[0\\\\]"`). See more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html). 2) `field` is not required if `aggregate` is `count`.',type:"string"},resolutionChannel:{$ref:"#/definitions/Channel",description:"An alternative channel for scale resolution.\n\nThis is mainly for internal use and allows using `color` channel to resolve `fill` and `stroke` channels under certain circumstances."},scale:{anyOf:[{$ref:"#/definitions/Scale"},{type:"null"}],description:`An object defining properties of the channel's scale, which is the function that transforms values in the data domain (numbers, dates, strings, etc) to visual values (pixels, colors, sizes) of the encoding channels.

If \`null\`, the scale will be [disabled and the data value will be directly encoded](https://vega.github.io/vega-lite/docs/scale.html#disable).

__Default value:__ If undefined, default [scale properties](https://vega.github.io/vega-lite/docs/scale.html) are applied.

__See also:__ [\`scale\`](https://vega.github.io/vega-lite/docs/scale.html) documentation.`},title:{description:"A title for the field. If `null`, the title will be removed.",type:["string","null"]},type:{$ref:"#/definitions/Type"}},required:["type"],type:"object"},"MarkPropFieldDef<string,TypeForShape>":{additionalProperties:!1,description:"Field definition of a mark property, which can contain a legend.",properties:{field:{description:'__Required.__ A string defining the name of the field from which to pull a data value or an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.\n\n__See also:__ [`field`](https://vega.github.io/vega-lite/docs/field.html) documentation.\n\n__Notes:__ 1)  Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `"field": "foo.bar"` and `"field": "foo[\'bar\']"`). If field names contain dots or brackets but are not nested, you can use `\\\\` to escape dots and brackets (e.g., `"a\\\\.b"` and `"a\\\\[0\\\\]"`). See more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html). 2) `field` is not required if `aggregate` is `count`.',type:"string"},resolutionChannel:{$ref:"#/definitions/Channel",description:"An alternative channel for scale resolution.\n\nThis is mainly for internal use and allows using `color` channel to resolve `fill` and `stroke` channels under certain circumstances."},scale:{anyOf:[{$ref:"#/definitions/Scale"},{type:"null"}],description:`An object defining properties of the channel's scale, which is the function that transforms values in the data domain (numbers, dates, strings, etc) to visual values (pixels, colors, sizes) of the encoding channels.

If \`null\`, the scale will be [disabled and the data value will be directly encoded](https://vega.github.io/vega-lite/docs/scale.html#disable).

__Default value:__ If undefined, default [scale properties](https://vega.github.io/vega-lite/docs/scale.html) are applied.

__See also:__ [\`scale\`](https://vega.github.io/vega-lite/docs/scale.html) documentation.`},title:{description:"A title for the field. If `null`, the title will be removed.",type:["string","null"]},type:{$ref:"#/definitions/TypeForShape"}},required:["type"],type:"object"},"MarkPropFieldOrDatumOrExprDef<string,Type>":{anyOf:[{$ref:"#/definitions/MarkPropFieldDef%3Cstring%2CType%3E"},{$ref:"#/definitions/MarkPropDatumDef%3CType%3E"},{$ref:"#/definitions/MarkPropExprDef"}]},"MarkPropFieldOrDatumOrExprDef<string,TypeForShape>":{anyOf:[{$ref:"#/definitions/MarkPropFieldDef%3Cstring%2CTypeForShape%3E"},{$ref:"#/definitions/MarkPropDatumDef%3CTypeForShape%3E"},{$ref:"#/definitions/MarkPropExprDef"}]},MarkType:{enum:["rect","point","rule","text","link"],type:"string"},MeasureTextParams:{additionalProperties:!1,properties:{as:{type:"string"},field:{$ref:"#/definitions/Field"},fontSize:{type:"number"},type:{const:"measureText",description:"The type of the transform to be applied",type:"string"}},required:["as","field","fontSize","type"],type:"object"},MergeFacetsParams:{additionalProperties:!1,properties:{type:{const:"mergeFacets",description:"The type of the transform to be applied",type:"string"}},required:["type"],type:"object"},NamedData:{additionalProperties:!1,properties:{format:{$ref:"#/definitions/DataFormat",description:"An object that specifies the format for parsing the data."},name:{description:"Provide a placeholder name and bind data at runtime.",type:"string"}},required:["name"],type:"object"},NumericDomain:{items:{type:"number"},type:"array"},"NumericMarkPropDef<string>":{$ref:"#/definitions/MarkPropDef%3Cstring%2Cnumber%3E"},NumericValueDef:{$ref:"#/definitions/ValueDef%3Cnumber%3E"},OtherDataFormat:{additionalProperties:!1,description:'Other data format, such as `"fasta"`',properties:{type:{type:"string"}},required:["type"],type:"object"},PaddingConfig:{anyOf:[{$ref:"#/definitions/Paddings"},{type:"number"}]},Paddings:{additionalProperties:!1,properties:{bottom:{type:"number"},left:{type:"number"},right:{type:"number"},top:{type:"number"}},type:"object"},Parse:{additionalProperties:{$ref:"#/definitions/ParseValue"},type:"object"},ParseValue:{anyOf:[{type:"null"},{type:"string"},{const:"string",type:"string"},{const:"boolean",type:"string"},{const:"date",type:"string"},{const:"number",type:"string"}]},PileupParams:{additionalProperties:!1,properties:{as:{description:'The output field name for the computed lane.\n\n**Default:** `"lane"`.',type:"string"},end:{$ref:"#/definitions/Field",description:"The field representing the end coordinate of the segment (exclusive)."},preference:{$ref:"#/definitions/Field",description:"An optional field indicating the preferred lane. Use together with the `preferredOrder` property."},preferredOrder:{anyOf:[{items:{type:"string"},type:"array"},{items:{type:"number"},type:"array"},{items:{type:"boolean"},type:"array"}],description:"The order of the lane preferences. The first element contains the value that should place the segment on the first lane and so forth. If the preferred lane is occupied, the first available lane is taken."},spacing:{description:"The spacing between adjacent segments on the same lane in coordinate units.\n\n**Default:** `1`.",type:"number"},start:{$ref:"#/definitions/Field",description:"The field representing the start coordinate of the segment (inclusive)."},type:{const:"pileup",description:"The type of the transform to be applied",type:"string"}},required:["end","start","type"],type:"object"},"Position2Def<string>":{anyOf:[{additionalProperties:!1,properties:{band:{description:"Relative position on band scale. For example, the marks will be positioned at the beginning of the band if set to `0`, and at the middle of the band if set to `0.5`.",maximum:1,minimum:0,type:"number"},field:{description:'__Required.__ A string defining the name of the field from which to pull a data value or an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.\n\n__See also:__ [`field`](https://vega.github.io/vega-lite/docs/field.html) documentation.\n\n__Notes:__ 1)  Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `"field": "foo.bar"` and `"field": "foo[\'bar\']"`). If field names contain dots or brackets but are not nested, you can use `\\\\` to escape dots and brackets (e.g., `"a\\\\.b"` and `"a\\\\[0\\\\]"`). See more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html). 2) `field` is not required if `aggregate` is `count`.',type:"string"},title:{description:"A title for the field. If `null`, the title will be removed.",type:["string","null"]}},type:"object"},{$ref:"#/definitions/SecondaryChromPosDef"},{additionalProperties:!1,properties:{band:{description:"Relative position on band scale. For example, the marks will be positioned at the beginning of the band if set to `0`, and at the middle of the band if set to `0.5`.",maximum:1,minimum:0,type:"number"},datum:{$ref:"#/definitions/Scalar",description:"A constant value in data domain."},title:{description:"A title for the field. If `null`, the title will be removed.",type:["string","null"]}},type:"object"},{additionalProperties:!1,properties:{band:{description:"Relative position on band scale. For example, the marks will be positioned at the beginning of the band if set to `0`, and at the middle of the band if set to `0.5`.",maximum:1,minimum:0,type:"number"},expr:{description:"An expression. Properties of the data can be accessed through the `datum` object.",type:"string"}},required:["expr"],type:"object"},{$ref:"#/definitions/PositionValueDef"}]},PositionDatumDef:{additionalProperties:!1,properties:{axis:{anyOf:[{$ref:"#/definitions/Axis"},{type:"null"}],description:"An object defining properties of axis's gridlines, ticks and labels. If `null`, the axis for the encoding channel will be removed.\n\n__Default value:__ If undefined, default [axis properties](https://vega.github.io/vega-lite/docs/axis.html) are applied.\n\n__See also:__ [`axis`](https://vega.github.io/vega-lite/docs/axis.html) documentation."},band:{description:"Relative position on band scale. For example, the marks will be positioned at the beginning of the band if set to `0`, and at the middle of the band if set to `0.5`.",maximum:1,minimum:0,type:"number"},datum:{$ref:"#/definitions/Scalar",description:"A constant value in data domain."},resolutionChannel:{$ref:"#/definitions/Channel",description:"An alternative channel for scale resolution.\n\nThis is mainly for internal use and allows using `color` channel to resolve `fill` and `stroke` channels under certain circumstances."},scale:{anyOf:[{$ref:"#/definitions/Scale"},{type:"null"}],description:`An object defining properties of the channel's scale, which is the function that transforms values in the data domain (numbers, dates, strings, etc) to visual values (pixels, colors, sizes) of the encoding channels.

If \`null\`, the scale will be [disabled and the data value will be directly encoded](https://vega.github.io/vega-lite/docs/scale.html#disable).

__Default value:__ If undefined, default [scale properties](https://vega.github.io/vega-lite/docs/scale.html) are applied.

__See also:__ [\`scale\`](https://vega.github.io/vega-lite/docs/scale.html) documentation.`},title:{description:"A title for the field. If `null`, the title will be removed.",type:["string","null"]},type:{$ref:"#/definitions/Type"}},required:["type"],type:"object"},"PositionDef<string>":{anyOf:[{$ref:"#/definitions/PositionFieldDef%3Cstring%3E"},{$ref:"#/definitions/ChromPosDef"},{$ref:"#/definitions/PositionDatumDef"},{$ref:"#/definitions/PositionExprDef"},{$ref:"#/definitions/PositionValueDef"}]},PositionExprDef:{additionalProperties:!1,properties:{axis:{anyOf:[{$ref:"#/definitions/Axis"},{type:"null"}],description:"An object defining properties of axis's gridlines, ticks and labels. If `null`, the axis for the encoding channel will be removed.\n\n__Default value:__ If undefined, default [axis properties](https://vega.github.io/vega-lite/docs/axis.html) are applied.\n\n__See also:__ [`axis`](https://vega.github.io/vega-lite/docs/axis.html) documentation."},band:{description:"Relative position on band scale. For example, the marks will be positioned at the beginning of the band if set to `0`, and at the middle of the band if set to `0.5`.",maximum:1,minimum:0,type:"number"},expr:{description:"An expression. Properties of the data can be accessed through the `datum` object.",type:"string"},type:{$ref:"#/definitions/Type"}},required:["expr","type"],type:"object"},"PositionFieldDef<string>":{additionalProperties:!1,properties:{axis:{anyOf:[{$ref:"#/definitions/Axis"},{type:"null"}],description:"An object defining properties of axis's gridlines, ticks and labels. If `null`, the axis for the encoding channel will be removed.\n\n__Default value:__ If undefined, default [axis properties](https://vega.github.io/vega-lite/docs/axis.html) are applied.\n\n__See also:__ [`axis`](https://vega.github.io/vega-lite/docs/axis.html) documentation."},band:{description:"Relative position on band scale. For example, the marks will be positioned at the beginning of the band if set to `0`, and at the middle of the band if set to `0.5`.",maximum:1,minimum:0,type:"number"},field:{description:'__Required.__ A string defining the name of the field from which to pull a data value or an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.\n\n__See also:__ [`field`](https://vega.github.io/vega-lite/docs/field.html) documentation.\n\n__Notes:__ 1)  Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `"field": "foo.bar"` and `"field": "foo[\'bar\']"`). If field names contain dots or brackets but are not nested, you can use `\\\\` to escape dots and brackets (e.g., `"a\\\\.b"` and `"a\\\\[0\\\\]"`). See more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html). 2) `field` is not required if `aggregate` is `count`.',type:"string"},resolutionChannel:{$ref:"#/definitions/Channel",description:"An alternative channel for scale resolution.\n\nThis is mainly for internal use and allows using `color` channel to resolve `fill` and `stroke` channels under certain circumstances."},scale:{anyOf:[{$ref:"#/definitions/Scale"},{type:"null"}],description:`An object defining properties of the channel's scale, which is the function that transforms values in the data domain (numbers, dates, strings, etc) to visual values (pixels, colors, sizes) of the encoding channels.

If \`null\`, the scale will be [disabled and the data value will be directly encoded](https://vega.github.io/vega-lite/docs/scale.html#disable).

__Default value:__ If undefined, default [scale properties](https://vega.github.io/vega-lite/docs/scale.html) are applied.

__See also:__ [\`scale\`](https://vega.github.io/vega-lite/docs/scale.html) documentation.`},title:{description:"A title for the field. If `null`, the title will be removed.",type:["string","null"]},type:{$ref:"#/definitions/Type"}},required:["type"],type:"object"},PositionValueDef:{$ref:"#/definitions/NumericValueDef"},PositionalChannel:{anyOf:[{$ref:"#/definitions/PrimaryPositionalChannel"},{$ref:"#/definitions/SecondaryPositionalChannel"}]},PrimaryPositionalChannel:{enum:["x","y"],type:"string"},ProjectParams:{additionalProperties:!1,properties:{as:{description:"New names for the projected fields. If omitted, the names of the source fields are used.",items:{type:"string"},type:"array"},fields:{description:"The fields to be projected.",items:{$ref:"#/definitions/Field"},type:"array"},type:{const:"project",description:"The type of the transform to be applied",type:"string"}},required:["fields","type"],type:"object"},RegexExtractParams:{additionalProperties:!1,properties:{as:{anyOf:[{type:"string"},{items:{type:"string"},type:"array"}],description:"The new field or an array of fields where the extracted values are written."},field:{$ref:"#/definitions/Field",description:"The source field"},regex:{description:'A valid JavaScript regular expression with at least one group. For example: `"^Sample(\\\\d+)$"`.\n\nRead more at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions',type:"string"},skipInvalidInput:{description:"Do not complain about invalid input. Just skip it and leave the new fields undefined on the affected datum.\n\n**Default:** `false`",type:"boolean"},type:{const:"regexExtract",description:"The type of the transform to be applied",type:"string"}},required:["as","field","regex","type"],type:"object"},RegexFoldParams:{additionalProperties:!1,properties:{asKey:{description:'**Default:** `"sample"`',type:"string"},asValue:{anyOf:[{items:{type:"string"},type:"array"},{type:"string"}],description:"A new column name for the extracted values."},columnRegex:{anyOf:[{items:{type:"string"},type:"array"},{type:"string"}],description:"A regular expression that matches to column names. The regex must have one capturing group that is used for extracting the key (e.g., a sample id) from the column name."},skipRegex:{description:"An optional regex that matches to fields that should not be included in the new folded data objects.",type:"string"},type:{const:"regexFold",description:"The type of the transform to be applied",type:"string"}},required:["asValue","columnRegex","type"],type:"object"},ResolutionBehavior:{description:'`"independent"` and `"shared"` behave similarly to Vega-Lite. `"excluded"` behaves like `"shared"`, but is not pulled towards the root.',enum:["independent","shared","excluded"],type:"string"},RootSpec:{anyOf:[{additionalProperties:!1,properties:{$schema:{type:"string"},aggregateSamples:{items:{anyOf:[{$ref:"#/definitions/UnitSpec"},{$ref:"#/definitions/LayerSpec"}]},type:"array"},baseUrl:{type:"string"},configurableVisibility:{description:"Is the visibility configurable interactively from the App. Configurability requires that the view has an explicitly specified name that is *unique* in within the view specification.\n\n**Default:** `false` for children of `layer`, `true` for others.",type:"boolean"},data:{$ref:"#/definitions/Data"},datasets:{additionalProperties:{items:{},type:"array"},description:"https://vega.github.io/vega-lite/docs/data.html#datasets",type:"object"},description:{anyOf:[{type:"string"},{items:{type:"string"},type:"array"}],description:"A description of the view. Multiple lines can be provided as an array."},encoding:{$ref:"#/definitions/Encoding"},genome:{$ref:"#/definitions/GenomeConfig"},height:{anyOf:[{$ref:"#/definitions/SizeDef"},{type:"number"},{$ref:"#/definitions/Step"},{const:"container",type:"string"}]},mark:{anyOf:[{$ref:"#/definitions/MarkType"},{$ref:"#/definitions/MarkConfigAndType"}]},name:{type:"string"},opacity:{$ref:"#/definitions/ViewOpacityDef",description:"Opacity of the view and all its children.\n\n**Default:* `1.0`"},padding:{$ref:"#/definitions/PaddingConfig",description:"Padding in pixels.\n\n**Default:* `0`"},resolve:{additionalProperties:!1,properties:{axis:{additionalProperties:{$ref:"#/definitions/ResolutionBehavior"},properties:{default:{$ref:"#/definitions/ResolutionBehavior"}},type:"object"},scale:{additionalProperties:{$ref:"#/definitions/ResolutionBehavior"},properties:{default:{$ref:"#/definitions/ResolutionBehavior"}},type:"object"}},type:"object"},title:{type:"string"},transform:{items:{$ref:"#/definitions/TransformParams"},type:"array"},view:{$ref:"#/definitions/ViewConfig"},visible:{description:"Visibility of the view. An invisible view is removed from the layout and not rendered.\n\n**Default:** `true`",type:"boolean"},width:{anyOf:[{$ref:"#/definitions/SizeDef"},{type:"number"},{$ref:"#/definitions/Step"},{const:"container",type:"string"}]}},required:["mark"],type:"object"},{additionalProperties:!1,properties:{$schema:{type:"string"},aggregateSamples:{items:{anyOf:[{$ref:"#/definitions/UnitSpec"},{$ref:"#/definitions/LayerSpec"}]},type:"array"},baseUrl:{type:"string"},configurableVisibility:{description:"Is the visibility configurable interactively from the App. Configurability requires that the view has an explicitly specified name that is *unique* in within the view specification.\n\n**Default:** `false` for children of `layer`, `true` for others.",type:"boolean"},data:{$ref:"#/definitions/Data"},datasets:{additionalProperties:{items:{},type:"array"},description:"https://vega.github.io/vega-lite/docs/data.html#datasets",type:"object"},description:{anyOf:[{type:"string"},{items:{type:"string"},type:"array"}],description:"A description of the view. Multiple lines can be provided as an array."},encoding:{$ref:"#/definitions/Encoding"},genome:{$ref:"#/definitions/GenomeConfig"},height:{anyOf:[{$ref:"#/definitions/SizeDef"},{type:"number"},{$ref:"#/definitions/Step"},{const:"container",type:"string"}]},layer:{items:{anyOf:[{$ref:"#/definitions/LayerSpec"},{$ref:"#/definitions/UnitSpec"}]},type:"array"},name:{type:"string"},opacity:{$ref:"#/definitions/ViewOpacityDef",description:"Opacity of the view and all its children.\n\n**Default:* `1.0`"},padding:{$ref:"#/definitions/PaddingConfig",description:"Padding in pixels.\n\n**Default:* `0`"},resolve:{additionalProperties:!1,properties:{axis:{additionalProperties:{$ref:"#/definitions/ResolutionBehavior"},properties:{default:{$ref:"#/definitions/ResolutionBehavior"}},type:"object"},scale:{additionalProperties:{$ref:"#/definitions/ResolutionBehavior"},properties:{default:{$ref:"#/definitions/ResolutionBehavior"}},type:"object"}},type:"object"},title:{type:"string"},transform:{items:{$ref:"#/definitions/TransformParams"},type:"array"},view:{$ref:"#/definitions/ViewConfig"},visible:{description:"Visibility of the view. An invisible view is removed from the layout and not rendered.\n\n**Default:** `true`",type:"boolean"},width:{anyOf:[{$ref:"#/definitions/SizeDef"},{type:"number"},{$ref:"#/definitions/Step"},{const:"container",type:"string"}]}},required:["layer"],type:"object"},{additionalProperties:!1,properties:{$schema:{type:"string"},baseUrl:{type:"string"},configurableVisibility:{description:"Is the visibility configurable interactively from the App. Configurability requires that the view has an explicitly specified name that is *unique* in within the view specification.\n\n**Default:** `false` for children of `layer`, `true` for others.",type:"boolean"},data:{$ref:"#/definitions/Data"},datasets:{additionalProperties:{items:{},type:"array"},description:"https://vega.github.io/vega-lite/docs/data.html#datasets",type:"object"},description:{anyOf:[{type:"string"},{items:{type:"string"},type:"array"}],description:"A description of the view. Multiple lines can be provided as an array."},encoding:{$ref:"#/definitions/Encoding"},genome:{$ref:"#/definitions/GenomeConfig"},height:{anyOf:[{$ref:"#/definitions/SizeDef"},{type:"number"},{$ref:"#/definitions/Step"},{const:"container",type:"string"}]},name:{type:"string"},opacity:{$ref:"#/definitions/ViewOpacityDef",description:"Opacity of the view and all its children.\n\n**Default:* `1.0`"},padding:{$ref:"#/definitions/PaddingConfig",description:"Padding in pixels.\n\n**Default:* `0`"},resolve:{additionalProperties:!1,properties:{axis:{additionalProperties:{$ref:"#/definitions/ResolutionBehavior"},properties:{default:{$ref:"#/definitions/ResolutionBehavior"}},type:"object"},scale:{additionalProperties:{$ref:"#/definitions/ResolutionBehavior"},properties:{default:{$ref:"#/definitions/ResolutionBehavior"}},type:"object"}},type:"object"},samples:{$ref:"#/definitions/SampleDef"},spec:{anyOf:[{$ref:"#/definitions/LayerSpec"},{$ref:"#/definitions/UnitSpec"}]},stickySummaries:{type:"boolean"},title:{type:"string"},transform:{items:{$ref:"#/definitions/TransformParams"},type:"array"},visible:{description:"Visibility of the view. An invisible view is removed from the layout and not rendered.\n\n**Default:** `true`",type:"boolean"},width:{anyOf:[{$ref:"#/definitions/SizeDef"},{type:"number"},{$ref:"#/definitions/Step"},{const:"container",type:"string"}]}},required:["samples","spec"],type:"object"},{additionalProperties:!1,properties:{$schema:{type:"string"},baseUrl:{type:"string"},configurableVisibility:{description:"Is the visibility configurable interactively from the App. Configurability requires that the view has an explicitly specified name that is *unique* in within the view specification.\n\n**Default:** `false` for children of `layer`, `true` for others.",type:"boolean"},data:{$ref:"#/definitions/Data"},datasets:{additionalProperties:{items:{},type:"array"},description:"https://vega.github.io/vega-lite/docs/data.html#datasets",type:"object"},description:{anyOf:[{type:"string"},{items:{type:"string"},type:"array"}],description:"A description of the view. Multiple lines can be provided as an array."},encoding:{$ref:"#/definitions/Encoding"},genome:{$ref:"#/definitions/GenomeConfig"},height:{anyOf:[{$ref:"#/definitions/SizeDef"},{type:"number"},{$ref:"#/definitions/Step"},{const:"container",type:"string"}]},name:{type:"string"},opacity:{$ref:"#/definitions/ViewOpacityDef",description:"Opacity of the view and all its children.\n\n**Default:* `1.0`"},padding:{$ref:"#/definitions/PaddingConfig",description:"Padding in pixels.\n\n**Default:* `0`"},resolve:{additionalProperties:!1,properties:{axis:{additionalProperties:{$ref:"#/definitions/ResolutionBehavior"},properties:{default:{$ref:"#/definitions/ResolutionBehavior"}},type:"object"},scale:{additionalProperties:{$ref:"#/definitions/ResolutionBehavior"},properties:{default:{$ref:"#/definitions/ResolutionBehavior"}},type:"object"}},type:"object"},spacing:{type:"number"},title:{type:"string"},transform:{items:{$ref:"#/definitions/TransformParams"},type:"array"},vconcat:{items:{anyOf:[{$ref:"#/definitions/ViewSpec"},{$ref:"#/definitions/ImportSpec"}]},type:"array"},visible:{description:"Visibility of the view. An invisible view is removed from the layout and not rendered.\n\n**Default:** `true`",type:"boolean"},width:{anyOf:[{$ref:"#/definitions/SizeDef"},{type:"number"},{$ref:"#/definitions/Step"},{const:"container",type:"string"}]}},required:["vconcat"],type:"object"},{additionalProperties:!1,properties:{$schema:{type:"string"},baseUrl:{type:"string"},configurableVisibility:{description:"Is the visibility configurable interactively from the App. Configurability requires that the view has an explicitly specified name that is *unique* in within the view specification.\n\n**Default:** `false` for children of `layer`, `true` for others.",type:"boolean"},data:{$ref:"#/definitions/Data"},datasets:{additionalProperties:{items:{},type:"array"},description:"https://vega.github.io/vega-lite/docs/data.html#datasets",type:"object"},description:{anyOf:[{type:"string"},{items:{type:"string"},type:"array"}],description:"A description of the view. Multiple lines can be provided as an array."},encoding:{$ref:"#/definitions/Encoding"},genome:{$ref:"#/definitions/GenomeConfig"},hconcat:{items:{anyOf:[{$ref:"#/definitions/ViewSpec"},{$ref:"#/definitions/ImportSpec"}]},type:"array"},height:{anyOf:[{$ref:"#/definitions/SizeDef"},{type:"number"},{$ref:"#/definitions/Step"},{const:"container",type:"string"}]},name:{type:"string"},opacity:{$ref:"#/definitions/ViewOpacityDef",description:"Opacity of the view and all its children.\n\n**Default:* `1.0`"},padding:{$ref:"#/definitions/PaddingConfig",description:"Padding in pixels.\n\n**Default:* `0`"},resolve:{additionalProperties:!1,properties:{axis:{additionalProperties:{$ref:"#/definitions/ResolutionBehavior"},properties:{default:{$ref:"#/definitions/ResolutionBehavior"}},type:"object"},scale:{additionalProperties:{$ref:"#/definitions/ResolutionBehavior"},properties:{default:{$ref:"#/definitions/ResolutionBehavior"}},type:"object"}},type:"object"},spacing:{type:"number"},title:{type:"string"},transform:{items:{$ref:"#/definitions/TransformParams"},type:"array"},visible:{description:"Visibility of the view. An invisible view is removed from the layout and not rendered.\n\n**Default:** `true`",type:"boolean"},width:{anyOf:[{$ref:"#/definitions/SizeDef"},{type:"number"},{$ref:"#/definitions/Step"},{const:"container",type:"string"}]}},required:["hconcat"],type:"object"},{additionalProperties:!1,properties:{$schema:{type:"string"},baseUrl:{type:"string"},concat:{items:{anyOf:[{$ref:"#/definitions/ViewSpec"},{$ref:"#/definitions/ImportSpec"}]},type:"array"},configurableVisibility:{description:"Is the visibility configurable interactively from the App. Configurability requires that the view has an explicitly specified name that is *unique* in within the view specification.\n\n**Default:** `false` for children of `layer`, `true` for others.",type:"boolean"},data:{$ref:"#/definitions/Data"},datasets:{additionalProperties:{items:{},type:"array"},description:"https://vega.github.io/vega-lite/docs/data.html#datasets",type:"object"},description:{anyOf:[{type:"string"},{items:{type:"string"},type:"array"}],description:"A description of the view. Multiple lines can be provided as an array."},encoding:{$ref:"#/definitions/Encoding"},genome:{$ref:"#/definitions/GenomeConfig"},height:{anyOf:[{$ref:"#/definitions/SizeDef"},{type:"number"},{$ref:"#/definitions/Step"},{const:"container",type:"string"}]},name:{type:"string"},opacity:{$ref:"#/definitions/ViewOpacityDef",description:"Opacity of the view and all its children.\n\n**Default:* `1.0`"},padding:{$ref:"#/definitions/PaddingConfig",description:"Padding in pixels.\n\n**Default:* `0`"},resolve:{additionalProperties:!1,properties:{axis:{additionalProperties:{$ref:"#/definitions/ResolutionBehavior"},properties:{default:{$ref:"#/definitions/ResolutionBehavior"}},type:"object"},scale:{additionalProperties:{$ref:"#/definitions/ResolutionBehavior"},properties:{default:{$ref:"#/definitions/ResolutionBehavior"}},type:"object"}},type:"object"},spacing:{type:"number"},title:{type:"string"},transform:{items:{$ref:"#/definitions/TransformParams"},type:"array"},visible:{description:"Visibility of the view. An invisible view is removed from the layout and not rendered.\n\n**Default:** `true`",type:"boolean"},width:{anyOf:[{$ref:"#/definitions/SizeDef"},{type:"number"},{$ref:"#/definitions/Step"},{const:"container",type:"string"}]}},required:["concat"],type:"object"}]},SampleAttributeDef:{additionalProperties:!1,properties:{barScale:{$ref:"#/definitions/Scale"},scale:{$ref:"#/definitions/Scale",description:"Color scale (primary)"},type:{$ref:"#/definitions/Type"},visible:{type:"boolean"},width:{type:"number"}},required:["type"],type:"object"},SampleDef:{additionalProperties:!1,properties:{attributes:{additionalProperties:{$ref:"#/definitions/SampleAttributeDef"},type:"object"},data:{$ref:"#/definitions/Data"}},type:"object"},SampleParams:{additionalProperties:!1,properties:{size:{description:"The maximum sample size.\n\n**Default:** `500`",type:"number"},type:{const:"sample",description:"The type of the transform to be applied",type:"string"}},required:["type"],type:"object"},SampleSpec:{additionalProperties:!1,properties:{baseUrl:{type:"string"},configurableVisibility:{description:"Is the visibility configurable interactively from the App. Configurability requires that the view has an explicitly specified name that is *unique* in within the view specification.\n\n**Default:** `false` for children of `layer`, `true` for others.",type:"boolean"},data:{$ref:"#/definitions/Data"},description:{anyOf:[{type:"string"},{items:{type:"string"},type:"array"}],description:"A description of the view. Multiple lines can be provided as an array."},encoding:{$ref:"#/definitions/Encoding"},height:{anyOf:[{$ref:"#/definitions/SizeDef"},{type:"number"},{$ref:"#/definitions/Step"},{const:"container",type:"string"}]},name:{type:"string"},opacity:{$ref:"#/definitions/ViewOpacityDef",description:"Opacity of the view and all its children.\n\n**Default:* `1.0`"},padding:{$ref:"#/definitions/PaddingConfig",description:"Padding in pixels.\n\n**Default:* `0`"},resolve:{additionalProperties:!1,properties:{axis:{additionalProperties:{$ref:"#/definitions/ResolutionBehavior"},properties:{default:{$ref:"#/definitions/ResolutionBehavior"}},type:"object"},scale:{additionalProperties:{$ref:"#/definitions/ResolutionBehavior"},properties:{default:{$ref:"#/definitions/ResolutionBehavior"}},type:"object"}},type:"object"},samples:{$ref:"#/definitions/SampleDef"},spec:{anyOf:[{$ref:"#/definitions/LayerSpec"},{$ref:"#/definitions/UnitSpec"}]},stickySummaries:{type:"boolean"},title:{type:"string"},transform:{items:{$ref:"#/definitions/TransformParams"},type:"array"},visible:{description:"Visibility of the view. An invisible view is removed from the layout and not rendered.\n\n**Default:** `true`",type:"boolean"},width:{anyOf:[{$ref:"#/definitions/SizeDef"},{type:"number"},{$ref:"#/definitions/Step"},{const:"container",type:"string"}]}},required:["samples","spec"],type:"object"},Scalar:{type:["string","number","boolean"]},ScalarDomain:{anyOf:[{$ref:"#/definitions/NumericDomain"},{items:{type:"string"},type:"array"},{items:{type:"boolean"},type:"array"}]},Scale:{additionalProperties:!1,properties:{align:{description:"The alignment of the steps within the scale range.\n\nThis value must lie in the range `[0,1]`. A value of `0.5` indicates that the steps should be centered within the range. A value of `0` or `1` may be used to shift the bands to one side, say to position them adjacent to an axis.\n\n__Default value:__ `0.5`",type:"number"},base:{description:"The logarithm base of the `log` scale (default `10`).",type:"number"},bins:{description:"An array of bin boundaries over the scale domain. If provided, axes and legends will use the bin boundaries to inform the choice of tick marks and text labels.",items:{type:"number"},type:"array"},clamp:{description:"If `true`, values that exceed the data domain are clamped to either the minimum or maximum range value\n\n__Default value:__ derived from the [scale config](https://vega.github.io/vega-lite/docs/config.html#scale-config)'s `clamp` (`true` by default).",type:"boolean"},constant:{description:"A constant determining the slope of the symlog function around zero. Only used for `symlog` scales.\n\n__Default value:__ `1`",type:"number"},domain:{anyOf:[{$ref:"#/definitions/ScalarDomain"},{$ref:"#/definitions/ComplexDomain"}],description:"Customized domain values.\n\nFor _quantitative_ fields, `domain` can take the form of a two-element array with minimum and maximum values.  [Piecewise scales](https://vega.github.io/vega-lite/docs/scale.html#piecewise) can be created by providing a `domain` with more than two entries.\n\nFor _temporal_ fields, `domain` can be a two-element array minimum and maximum values, in the form of either timestamps or the [DateTime definition objects](https://vega.github.io/vega-lite/docs/types.html#datetime).\n\nFor _ordinal_ and _nominal_ fields, `domain` can be an array that lists valid input values."},domainMax:{description:"Sets the maximum value in the scale domain, overriding the `domain` property. This property is only intended for use with scales having continuous domains.",type:"number"},domainMid:{description:"Inserts a single mid-point value into a two-element domain. The mid-point value must lie between the domain minimum and maximum values. This property can be useful for setting a midpoint for [diverging color scales](https://vega.github.io/vega-lite/docs/scale.html#piecewise). The domainMid property is only intended for use with scales supporting continuous, piecewise domains.",type:"number"},domainMin:{description:"Sets the minimum value in the scale domain, overriding the domain property. This property is only intended for use with scales having continuous domains.",type:"number"},exponent:{description:"The exponent of the `pow` scale.",type:"number"},fp64:{description:'Use emulated 64bit floating points on the GPU to increase precision.\n\nEmulation has a performance cost when compared to the native 32bit processing, but the effect is negligible in the most cases.\n\n__Default value:__ `true` for `"locus"` scale, `false` for others.',type:"boolean"},interpolate:{anyOf:[{$ref:"#/definitions/ScaleInterpolate"},{$ref:"#/definitions/ScaleInterpolateParams"}],description:"The interpolation method for range values. By default, a general interpolator for numbers, dates, strings and colors (in HCL space) is used. For color ranges, this property allows interpolation in alternative color spaces. Legal values include `rgb`, `hsl`, `hsl-long`, `lab`, `hcl`, `hcl-long`, `cubehelix` and `cubehelix-long` ('-long' variants use longer paths in polar coordinate spaces). If object-valued, this property accepts an object with a string-valued _type_ property and an optional numeric _gamma_ property applicable to rgb and cubehelix interpolators. For more, see the [d3-interpolate documentation](https://github.com/d3/d3-interpolate).\n\n__Default value:__ `hcl`"},name:{description:"The name of the scale. Names are optional but allow the scales to be referenced and found with the API.",type:"string"},nice:{anyOf:[{type:"boolean"},{type:"number"},{additionalProperties:!1,properties:{interval:{type:"string"},step:{type:"number"}},required:["interval","step"],type:"object"}],description:"Extending the domain so that it starts and ends on nice round values. This method typically modifies the scale\u2019s domain, and may only extend the bounds to the nearest round value. Nicing is useful if the domain is computed from data and may be irregular. For example, for a domain of _[0.201479\u2026, 0.996679\u2026]_, a nice domain might be _[0.2, 1.0]_.\n\nFor quantitative scales such as linear, `nice` can be either a boolean flag or a number. If `nice` is a number, it will represent a desired tick count. This allows greater control over the step size used to extend the bounds, guaranteeing that the returned ticks will exactly cover the domain.\n\n__Default value:__ `true` for unbinned _quantitative_ fields; `false` otherwise."},padding:{description:"For _[continuous](https://vega.github.io/vega-lite/docs/scale.html#continuous)_ scales, expands the scale domain to accommodate the specified number of pixels on each of the scale range. The scale range must represent pixels for this parameter to function as intended. Padding adjustment is performed\xA0prior\xA0to all other adjustments, including the effects of the\xA0`zero`,\xA0`nice`,\xA0`domainMin`, and\xA0`domainMax`\xA0properties.\n\nFor _[band](https://vega.github.io/vega-lite/docs/scale.html#band)_ scales, shortcut for setting `paddingInner` and `paddingOuter` to the same value.\n\nFor _[point](https://vega.github.io/vega-lite/docs/scale.html#point)_ scales, alias for `paddingOuter`.\n\n__Default value:__ For _continuous_ scales, derived from the [scale config](https://vega.github.io/vega-lite/docs/scale.html#config)'s `continuousPadding`. For _band and point_ scales, see `paddingInner` and `paddingOuter`.  By default, Vega-Lite sets padding such that _width/height = number of unique values * step_.",minimum:0,type:"number"},paddingInner:{description:`The inner padding (spacing) within each band step of band scales, as a fraction of the step size. This value must lie in the range [0,1].

For point scale, this property is invalid as point scales do not have internal band widths (only step sizes between bands).

__Default value:__ derived from the [scale config](https://vega.github.io/vega-lite/docs/scale.html#config)'s \`bandPaddingInner\`.`,maximum:1,minimum:0,type:"number"},paddingOuter:{description:"The outer padding (spacing) at the ends of the range of band and point scales, as a fraction of the step size. This value must lie in the range [0,1].\n\n__Default value:__ derived from the [scale config](https://vega.github.io/vega-lite/docs/scale.html#config)'s `bandPaddingOuter` for band scales and `pointPadding` for point scales. By default, Vega-Lite sets outer padding such that _width/height = number of unique values * step_.",maximum:1,minimum:0,type:"number"},range:{anyOf:[{items:{type:"number"},type:"array"},{items:{type:"string"},type:"array"},{type:"string"}],description:'The range of the scale. One of:\n\n- A string indicating a [pre-defined named scale range](https://vega.github.io/vega-lite/docs/scale.html#range-config) (e.g., example, `"symbol"`, or `"diverging"`).\n\n- For [continuous scales](https://vega.github.io/vega-lite/docs/scale.html#continuous), two-element array indicating  minimum and maximum values, or an array with more than two entries for specifying a [piecewise scale](https://vega.github.io/vega-lite/docs/scale.html#piecewise).\n\n- For [discrete](https://vega.github.io/vega-lite/docs/scale.html#discrete) and [discretizing](https://vega.github.io/vega-lite/docs/scale.html#discretizing) scales, an array of desired output values.\n\n__Notes:__\n\n1) For color scales you can also specify a color [`scheme`](https://vega.github.io/vega-lite/docs/scale.html#scheme) instead of `range`.\n\n2) Any directly specified `range` for `x` and `y` channels will be ignored. Range can be customized via the view\'s corresponding [size](https://vega.github.io/vega-lite/docs/size.html) (`width` and `height`).'},reverse:{description:"If true, reverses the order of the scale range.\n\n__Default value:__ `false`.",type:"boolean"},round:{description:"If `true`, rounds numeric output values to integers. This can be helpful for snapping to the pixel grid.\n\n__Default value:__ `false`.",type:"boolean"},scheme:{anyOf:[{type:"string"},{$ref:"#/definitions/SchemeParams"}],description:'A string indicating a color [scheme](https://vega.github.io/vega-lite/docs/scale.html#scheme) name (e.g., `"category10"` or `"blues"`) or a [scheme parameter object](https://vega.github.io/vega-lite/docs/scale.html#scheme-params).\n\nDiscrete color schemes may be used with [discrete](https://vega.github.io/vega-lite/docs/scale.html#discrete) or [discretizing](https://vega.github.io/vega-lite/docs/scale.html#discretizing) scales. Continuous color schemes are intended for use with color scales.\n\nFor the full list of supported schemes, please refer to the [Vega Scheme](https://vega.github.io/vega/docs/schemes/#reference) reference.'},type:{$ref:"#/definitions/ScaleType",description:'The type of scale.  Vega-Lite supports the following categories of scale types:\n\n1) [**Continuous Scales**](https://vega.github.io/vega-lite/docs/scale.html#continuous) -- mapping continuous domains to continuous output ranges ([`"linear"`](https://vega.github.io/vega-lite/docs/scale.html#linear), [`"pow"`](https://vega.github.io/vega-lite/docs/scale.html#pow), [`"sqrt"`](https://vega.github.io/vega-lite/docs/scale.html#sqrt), [`"symlog"`](https://vega.github.io/vega-lite/docs/scale.html#symlog), [`"log"`](https://vega.github.io/vega-lite/docs/scale.html#log), [`"time"`](https://vega.github.io/vega-lite/docs/scale.html#time), [`"utc"`](https://vega.github.io/vega-lite/docs/scale.html#utc).\n\n2) [**Discrete Scales**](https://vega.github.io/vega-lite/docs/scale.html#discrete) -- mapping discrete domains to discrete ([`"ordinal"`](https://vega.github.io/vega-lite/docs/scale.html#ordinal)) or continuous ([`"band"`](https://vega.github.io/vega-lite/docs/scale.html#band) and [`"point"`](https://vega.github.io/vega-lite/docs/scale.html#point)) output ranges.\n\n3) [**Discretizing Scales**](https://vega.github.io/vega-lite/docs/scale.html#discretizing) -- mapping continuous domains to discrete output ranges [`"bin-ordinal"`](https://vega.github.io/vega-lite/docs/scale.html#bin-ordinal), [`"quantile"`](https://vega.github.io/vega-lite/docs/scale.html#quantile), [`"quantize"`](https://vega.github.io/vega-lite/docs/scale.html#quantize) and [`"threshold"`](https://vega.github.io/vega-lite/docs/scale.html#threshold).\n\n__Default value:__ please see the [scale type table](https://vega.github.io/vega-lite/docs/scale.html#type).'},zero:{description:"If `true`, ensures that a zero baseline value is included in the scale domain.\n\n__Default value:__ `true` for x and y channels if the quantitative field is not binned and no custom `domain` is provided; `false` otherwise.\n\n__Note:__ Log, time, and utc scales do not support `zero`.",type:"boolean"},zoom:{anyOf:[{type:"boolean"},{$ref:"#/definitions/ZoomParams"}],description:"If `true` and the scale is used on a positional channel, it can bee zoomed and translated interactively."}},type:"object"},ScaleInterpolate:{enum:["rgb","lab","hcl","hsl","hsl-long","hcl-long","cubehelix","cubehelix-long"],type:"string"},ScaleInterpolateParams:{additionalProperties:!1,properties:{gamma:{type:"number"},type:{enum:["rgb","cubehelix","cubehelix-long"],type:"string"}},required:["type"],type:"object"},ScaleType:{enum:["null","linear","log","pow","sqrt","symlog","identity","sequential","quantize","threshold","ordinal","point","band","index","locus"],type:"string"},SchemeParams:{additionalProperties:!1,properties:{count:{description:'The number of colors to use in the scheme. This can be useful for scale types such as `"quantize"`, which use the length of the scale range to determine the number of discrete bins for the scale domain.',type:"number"},extent:{description:"The extent of the color range to use. For example `[0.2, 1]` will rescale the color scheme such that color values in the range _[0, 0.2)_ are excluded from the scheme.",items:{type:"number"},type:"array"},name:{description:'A color scheme name for ordinal scales (e.g., `"category10"` or `"blues"`).\n\nFor the full list of supported schemes, please refer to the [Vega Scheme](https://vega.github.io/vega/docs/schemes/#reference) reference.',type:"string"}},required:["name"],type:"object"},SecondaryChromPosDef:{additionalProperties:!1,properties:{axis:{anyOf:[{$ref:"#/definitions/Axis"},{type:"null"}],description:"An object defining properties of axis's gridlines, ticks and labels. If `null`, the axis for the encoding channel will be removed.\n\n__Default value:__ If undefined, default [axis properties](https://vega.github.io/vega-lite/docs/axis.html) are applied.\n\n__See also:__ [`axis`](https://vega.github.io/vega-lite/docs/axis.html) documentation."},band:{description:"Relative position on band scale. For example, the marks will be positioned at the beginning of the band if set to `0`, and at the middle of the band if set to `0.5`.",maximum:1,minimum:0,type:"number"},chrom:{$ref:"#/definitions/FieldName",description:"The field having the chromosome or contig."},offset:{description:"An offset or offsets that allow for adjusting the numbering base. The offset is subtracted from the positions.\n\nGenomeSpy uses internally zero-based indexing with half-open intervals. UCSC-based formats (BED, etc.) generally use this scheme. However, for example, VCF files use one-based indexing and must be adjusted by setting the offset to `1`.\n\n**Default:** `0`",type:"number"},pos:{$ref:"#/definitions/FieldName",description:"The field having an intra-chromosomal position."},title:{description:"A title for the field. If `null`, the title will be removed.",type:["string","null"]}},required:["chrom"],type:"object"},SecondaryPositionalChannel:{enum:["x2","y2"],type:"string"},SequenceGenerator:{additionalProperties:!1,properties:{name:{description:"Provide a placeholder name and bind data at runtime.",type:"string"},sequence:{$ref:"#/definitions/SequenceParams",description:"Generate a sequence of numbers."}},required:["sequence"],type:"object"},SequenceParams:{additionalProperties:!1,properties:{as:{$ref:"#/definitions/FieldName",description:'The name of the generated sequence field.\n\n__Default value:__ `"data"`'},start:{description:"The starting value of the sequence (inclusive).",type:"number"},step:{description:"The step value between sequence entries.\n\n__Default value:__ `1`",type:"number"},stop:{description:"The ending value of the sequence (exclusive).",type:"number"}},required:["start","stop"],type:"object"},"ShapeDef<string>":{$ref:"#/definitions/MarkPropDef%3Cstring%2C(string%7Cnull)%2CTypeForShape%3E"},SizeDef:{additionalProperties:!1,properties:{grow:{description:"Share of the remaining space",type:"number"},px:{description:"Size in pixels",type:"number"}},type:"object"},SortOrder:{enum:["ascending","descending"],type:"string"},StackParams:{additionalProperties:!1,properties:{as:{description:'Fields to write the stacked values.\n\n**Default:** `["y0", "y1"]`',items:{type:"string"},type:"array"},baseField:{$ref:"#/definitions/Field",description:'The field that contains the base or amino acid. Used for information content calculation when the offset is `"information"`. The data items that have `null` in the baseField are considered gaps and they are taken into account when scaling the the locus\' information content.'},cardinality:{description:'Cardinality, e.g., the number if distinct bases or amino acids. Used for information content calculation when the offset is `"information"`.\n\n**Default:** `4`;',type:"number"},field:{$ref:"#/definitions/Field",description:"The field to stack. If no field is defined, a constant value of one is assumed."},groupby:{description:"The fields to be used for forming groups for different stacks.",items:{$ref:"#/definitions/Field"},type:"array"},offset:{description:'How to offset the values in a stack. `"zero"` (default) starts stacking at 0. `"center"` centers the values around zero. `"normalize"` computes intra-stack percentages and normalizes the values to the range of `[0, 1]`. `"information"` computes a layout for a sequence logo. The total height of the stack reflects the group\'s information content.',enum:["zero","center","normalize","information"],type:"string"},sort:{$ref:"#/definitions/CompareParams",description:"The sort order of data in each stack."},type:{const:"stack",description:"The type of the transform to be applied",type:"string"}},required:["as","groupby","type"],type:"object"},Step:{additionalProperties:!1,properties:{step:{type:"number"}},required:["step"],type:"object"},StringDatumDef:{additionalProperties:!1,properties:{datum:{$ref:"#/definitions/Scalar",description:"A constant value in data domain."},format:{description:`When used with the default \`"number"\` format type, the text formatting pattern for labels of guides (axes, legends, headers) and text marks.

- If the format type is \`"number"\` (e.g., for quantitative fields), this is D3's [number format pattern](https://github.com/d3/d3-format#locale_format).

See the [format documentation](https://vega.github.io/vega-lite/docs/format.html) for more examples.`,type:"string"},title:{description:"A title for the field. If `null`, the title will be removed.",type:["string","null"]}},type:"object"},"StringFieldDef<string>":{additionalProperties:!1,properties:{field:{description:'__Required.__ A string defining the name of the field from which to pull a data value or an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.\n\n__See also:__ [`field`](https://vega.github.io/vega-lite/docs/field.html) documentation.\n\n__Notes:__ 1)  Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `"field": "foo.bar"` and `"field": "foo[\'bar\']"`). If field names contain dots or brackets but are not nested, you can use `\\\\` to escape dots and brackets (e.g., `"a\\\\.b"` and `"a\\\\[0\\\\]"`). See more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html). 2) `field` is not required if `aggregate` is `count`.',type:"string"},format:{description:`When used with the default \`"number"\` format type, the text formatting pattern for labels of guides (axes, legends, headers) and text marks.

- If the format type is \`"number"\` (e.g., for quantitative fields), this is D3's [number format pattern](https://github.com/d3/d3-format#locale_format).

See the [format documentation](https://vega.github.io/vega-lite/docs/format.html) for more examples.`,type:"string"},title:{description:"A title for the field. If `null`, the title will be removed.",type:["string","null"]}},type:"object"},"TextDef<string>":{anyOf:[{$ref:"#/definitions/StringFieldDef%3Cstring%3E"},{$ref:"#/definitions/StringDatumDef"}]},Tooltip:{anyOf:[{$ref:"#/definitions/HandledTooltip"},{type:"null"}]},TransformParams:{anyOf:[{$ref:"#/definitions/AggregateParams"},{$ref:"#/definitions/CollectParams"},{$ref:"#/definitions/CoverageParams"},{$ref:"#/definitions/FlattenDelimitedParams"},{$ref:"#/definitions/FormulaParams"},{$ref:"#/definitions/FilterParams"},{$ref:"#/definitions/FilterScoredLabelsParams"},{$ref:"#/definitions/FlattenCompressedExonsParams"},{$ref:"#/definitions/FlattenSequenceParams"},{$ref:"#/definitions/IdentifierParams"},{$ref:"#/definitions/LinearizeGenomicCoordinateParams"},{$ref:"#/definitions/MeasureTextParams"},{$ref:"#/definitions/MergeFacetsParams"},{$ref:"#/definitions/PileupParams"},{$ref:"#/definitions/ProjectParams"},{$ref:"#/definitions/RegexExtractParams"},{$ref:"#/definitions/RegexFoldParams"},{$ref:"#/definitions/SampleParams"},{$ref:"#/definitions/StackParams"}]},Type:{enum:["quantitative","ordinal","nominal","index","locus"],type:"string"},TypeForShape:{enum:["ordinal","nominal"],type:"string"},UnitSpec:{additionalProperties:!1,properties:{aggregateSamples:{items:{anyOf:[{$ref:"#/definitions/UnitSpec"},{$ref:"#/definitions/LayerSpec"}]},type:"array"},baseUrl:{type:"string"},configurableVisibility:{description:"Is the visibility configurable interactively from the App. Configurability requires that the view has an explicitly specified name that is *unique* in within the view specification.\n\n**Default:** `false` for children of `layer`, `true` for others.",type:"boolean"},data:{$ref:"#/definitions/Data"},description:{anyOf:[{type:"string"},{items:{type:"string"},type:"array"}],description:"A description of the view. Multiple lines can be provided as an array."},encoding:{$ref:"#/definitions/Encoding"},height:{anyOf:[{$ref:"#/definitions/SizeDef"},{type:"number"},{$ref:"#/definitions/Step"},{const:"container",type:"string"}]},mark:{anyOf:[{$ref:"#/definitions/MarkType"},{$ref:"#/definitions/MarkConfigAndType"}]},name:{type:"string"},opacity:{$ref:"#/definitions/ViewOpacityDef",description:"Opacity of the view and all its children.\n\n**Default:* `1.0`"},padding:{$ref:"#/definitions/PaddingConfig",description:"Padding in pixels.\n\n**Default:* `0`"},resolve:{additionalProperties:!1,properties:{axis:{additionalProperties:{$ref:"#/definitions/ResolutionBehavior"},properties:{default:{$ref:"#/definitions/ResolutionBehavior"}},type:"object"},scale:{additionalProperties:{$ref:"#/definitions/ResolutionBehavior"},properties:{default:{$ref:"#/definitions/ResolutionBehavior"}},type:"object"}},type:"object"},title:{type:"string"},transform:{items:{$ref:"#/definitions/TransformParams"},type:"array"},view:{$ref:"#/definitions/ViewConfig"},visible:{description:"Visibility of the view. An invisible view is removed from the layout and not rendered.\n\n**Default:** `true`",type:"boolean"},width:{anyOf:[{$ref:"#/definitions/SizeDef"},{type:"number"},{$ref:"#/definitions/Step"},{const:"container",type:"string"}]}},required:["mark"],type:"object"},UrlData:{additionalProperties:!1,properties:{format:{$ref:"#/definitions/DataFormat",description:"An object that specifies the format for parsing the data."},name:{description:"Provide a placeholder name and bind data at runtime.",type:"string"},url:{anyOf:[{type:"string"},{items:{type:"string"},type:"array"}],description:"An URL or an array of URLs from which to load the data set. Use the `format.type` property to ensure the loaded data is correctly parsed."}},required:["url"],type:"object"},VConcatSpec:{additionalProperties:!1,properties:{baseUrl:{type:"string"},configurableVisibility:{description:"Is the visibility configurable interactively from the App. Configurability requires that the view has an explicitly specified name that is *unique* in within the view specification.\n\n**Default:** `false` for children of `layer`, `true` for others.",type:"boolean"},data:{$ref:"#/definitions/Data"},description:{anyOf:[{type:"string"},{items:{type:"string"},type:"array"}],description:"A description of the view. Multiple lines can be provided as an array."},encoding:{$ref:"#/definitions/Encoding"},height:{anyOf:[{$ref:"#/definitions/SizeDef"},{type:"number"},{$ref:"#/definitions/Step"},{const:"container",type:"string"}]},name:{type:"string"},opacity:{$ref:"#/definitions/ViewOpacityDef",description:"Opacity of the view and all its children.\n\n**Default:* `1.0`"},padding:{$ref:"#/definitions/PaddingConfig",description:"Padding in pixels.\n\n**Default:* `0`"},resolve:{additionalProperties:!1,properties:{axis:{additionalProperties:{$ref:"#/definitions/ResolutionBehavior"},properties:{default:{$ref:"#/definitions/ResolutionBehavior"}},type:"object"},scale:{additionalProperties:{$ref:"#/definitions/ResolutionBehavior"},properties:{default:{$ref:"#/definitions/ResolutionBehavior"}},type:"object"}},type:"object"},spacing:{type:"number"},title:{type:"string"},transform:{items:{$ref:"#/definitions/TransformParams"},type:"array"},vconcat:{items:{anyOf:[{$ref:"#/definitions/ViewSpec"},{$ref:"#/definitions/ImportSpec"}]},type:"array"},visible:{description:"Visibility of the view. An invisible view is removed from the layout and not rendered.\n\n**Default:** `true`",type:"boolean"},width:{anyOf:[{$ref:"#/definitions/SizeDef"},{type:"number"},{$ref:"#/definitions/Step"},{const:"container",type:"string"}]}},required:["vconcat"],type:"object"},"ValueDef<(string|null)>":{additionalProperties:!1,properties:{value:{description:'A constant value in visual domain (e.g., `"red"` / `"#0099ff"`, values between `0` to `1` for opacity).',type:["string","null"]}},required:["value"],type:"object"},"ValueDef<number>":{additionalProperties:!1,properties:{value:{description:'A constant value in visual domain (e.g., `"red"` / `"#0099ff"`, values between `0` to `1` for opacity).',type:"number"}},required:["value"],type:"object"},ViewConfig:{additionalProperties:!1,properties:{cornerRadius:{description:"Radius of the rounded corners.\n\n**Default value:** `0`",type:"number"},cornerRadiusBottomLeft:{description:"Radius of the bottom left rounded corner. Has higher precedence than `cornerRadius`.\n\n**Default value:** (None)",type:"number"},cornerRadiusBottomRight:{description:"Radius of the bottom right rounded corner. Has higher precedence than `cornerRadius`.\n\n**Default value:** (None)",type:"number"},cornerRadiusTopLeft:{description:"Radius of the top left rounded corner. Has higher precedence than `cornerRadius`.\n\n**Default value:** (None)",type:"number"},cornerRadiusTopRight:{description:"Radius of the top right rounded corner. Has higher precedence than `cornerRadius`.\n\n**Default value:** (None)",type:"number"},fill:{type:"string"},fillOpacity:{type:"number"},minHeight:{description:"The minimum height of a rectangle in pixels. The property clamps rectangles' heights.\n\n**Default value:** `0`",type:"number"},minOpacity:{description:"Clamps the minimum size-dependent opacity. The property does not affect the `opacity` channel. Valid values are between `0` and `1`.\n\nWhen a rectangle would be smaller than what is specified in `minHeight` and `minWidth`, it is faded out proportionally. Example: a rectangle would be rendered as one pixel wide, but `minWidth` clamps it to five pixels. The rectangle is actually rendered as five pixels wide, but its opacity is multiplied by 0.2. With this setting, you can limit the factor to, for example, 0.5 to keep the rectangles more clearly visible.\n\n**Default value:** `0`",type:"number"},minWidth:{description:`The minimum width of a rectangle in pixels. The property clamps rectangles' widths when the viewport is zoomed out.

This property also reduces flickering of very narrow rectangles when zooming. The value should generally be at least one.

**Default value:** \`1\``,type:"number"},stroke:{type:"string"},strokeOpacity:{type:"number"},strokeWidth:{type:"number"},x2:{type:"number"},y2:{type:"number"}},type:"object"},ViewOpacityDef:{anyOf:[{type:"number"},{$ref:"#/definitions/DynamicOpacity"}]},ViewSpec:{anyOf:[{$ref:"#/definitions/UnitSpec"},{$ref:"#/definitions/LayerSpec"},{$ref:"#/definitions/SampleSpec"},{$ref:"#/definitions/VConcatSpec"},{$ref:"#/definitions/HConcatSpec"},{$ref:"#/definitions/ConcatSpec"}]},ZoomParams:{additionalProperties:!1,properties:{extent:{anyOf:[{$ref:"#/definitions/ScalarDomain"},{$ref:"#/definitions/ComplexDomain"}],description:"The boundaries that limit the zoom and pan interactions."}},type:"object"}};var ni={$ref:$l,$schema:zl,definitions:Ml};const Ll="@genome-spy/playground",Nl="0.19.0",Vl="A playground for testing GenomeSpy visualizations",Bl={dev:"vite",build:"vite build",serve:"vite preview"},ql="Kari Lavikka",jl="BSD-2-Clause",Ul={"@fortawesome/fontawesome-free":"^5.14.0","@fortawesome/fontawesome-svg-core":"^1.2.30","@fortawesome/free-solid-svg-icons":"^5.14.0","@genome-spy/core":"^0.19.0",lit:"^2.0.2","monaco-editor":"^0.30.1","vega-loader":"^4.4.0"};var si={name:Ll,private:!0,version:Nl,description:Vl,scripts:Bl,author:ql,license:jl,dependencies:Ul};self.MonacoEnvironment={getWorker(n,e){if(e==="json")return new Cs;throw new Error("Unsupported language: "+e)}};class Gl extends yi{constructor(){super();ce(this,"_editor");ce(this,"_initialValue")}set value(e){this._editor?this._editor.setValue(e):this._initialValue=e}get value(){var e,t;return(t=(e=this._editor)==null?void 0:e.getValue())!=null?t:this._initialValue}createRenderRoot(){return this}disconnectedCallback(){var e,t,i;(e=this._editor)==null||e.dispose(),(i=(t=this._editor)==null?void 0:t.getModel())==null||i.dispose()}render(){return Es}firstUpdated(){this._editor=Is.create(this,{value:this._initialValue,language:"json",minimap:{enabled:!1}}),this._editor.getModel().onDidChangeContent(()=>{this.dispatchEvent(new CustomEvent("change",{detail:{}}))}),new ResizeObserver(t=>{this._editor.layout()}).observe(this)}}customElements.define("code-editor",Gl);class Wl extends yi{constructor(){super();ce(this,"_currentTab");ce(this,"files")}createRenderRoot(){return this}render(){return D`
            <ul class="tabs">
                ${Object.keys(this.files).map(e=>D`
                            <li
                                data-name=${e}
                                class=${e==this._currentTab?"selected":""}
                            >
                                <a
                                    href="#"
                                    @click=${t=>this._changeTab(t)}
                                    >${e}</a
                                >
                            </li>
                        `)}
                <li class=${this._currentTab===void 0?"selected":""}>
                    <a
                        href="#"
                        @click=${e=>this._changeTab(e)}
                        >Add new files</a
                    >
                </li>
                <li style="flex-grow: 1"></li>
            </ul>

            <div class="tab-pages">
                ${Object.keys(this.files).map(e=>D`
                        <div
                            class=${e==this._currentTab?"selected":""}
                        >
                            ${Xl(this.files[e].data)}
                        </div>
                    `)}

                <div class=${this._currentTab===void 0?"selected":""}>
                    ${Hl(e=>this._handleFiles(e))}
                </div>
            </div>
        `}async _handleFiles(e){const i=e.target.files;for(const s of i){const o=await Zl(s),r=bt(o,{type:Jl(o,s.name),parse:"auto"});this.files[s.name]={metadata:s,data:r},this._currentTab=s.name}this.requestUpdate(),this.dispatchEvent(new CustomEvent("upload",{detail:{}}))}_changeTab(e){const i=e.target.parentElement.dataset.name;this._currentTab=i,e.preventDefault(),this.requestUpdate()}}customElements.define("file-pane",Wl);function Hl(n){return D` <form class="upload-form">
        <input
            type="file"
            multiple
            accept=".csv,.tsv,.txt,.json"
            id="fileInput"
            @change=${n}
            style="display:none"
        />
        <div id="upload-button-wrapper">
            <button
                class="btn"
                @click=${e=>{document.getElementById("fileInput").click(),e.preventDefault(),e.stopPropagation()}}
            >
                Choose files
            </button>
        </div>

        <p>
            The added file becomes a named datasource, which can be accessed as
            follows:
        </p>

        <pre>
"data": {
    "name": "filename.csv"
}
</pre
        >

        <p>
            N.B. All data processing takes place in your web browser. Nothing is
            uploaded anywhere.
        </p>
    </form>`}function Xl(n){const e=Object.keys(n[0]),t=n.slice(0,30),i=e.map(a=>"text-align: "+(typeof n[0][a]=="number"?"right":"left")),s=a=>D`
        <tr>
            ${e.map((l,c)=>D`<td style=${i[c]}>${a[l]}</td> `)}
        </tr>
    `,o=()=>D`
        <tr>
            ${e.map((a,l)=>D`<td style=${i[l]}>...</td> `)}
        </tr>
    `;return D`
        <table class="data-sample-table">
            <thead>
                ${(()=>D`
        <tr>
            ${e.map((a,l)=>D`<th style=${i[l]}>${a}</th> `)}
        </tr>
    `)()}
            </thead>
            <tbody>
                ${t.map(s)}
                ${t.length<n.length?o():""}
            </tbody>
        </table>
    `}function Zl(n){return new Promise((e,t)=>{let i=new FileReader;i.onload=()=>e(i.result),i.onerror=t,i.readAsText(n)})}function Jl(n,e){return/\.json$/.test(e)?"json":n.indexOf("	")>=0?"tsv":"csv"}function mn(n){if(typeof n=="object"&&n!==null){n.description&&(n.markdownDescription=n.description);for(const e in n)n.hasOwnProperty(e)&&(n[e]=mn(n[e]))}return n}Ql();const gn="playgroundSpec",yn=bi(),bn=bi(),vn={};let Je,Yl=window.localStorage.getItem(gn)||Rl,oi="";const Te=["stacked","parallel","full"];let ut=Te[0];function Kl(){ut=Te[(Te.indexOf(ut)+1)%Te.length],xn(),window.dispatchEvent(new Event("resize"))}function Ql(){mn(ni),Ps.json.jsonDefaults.setDiagnosticsOptions({validate:!0,schemas:[{uri:"http://myserver/foo-schema.json",fileMatch:["*"],schema:ni}]})}function ec(n){var e;return(e=vn[n])==null?void 0:e.data}async function Ot(n=!1){var t;const e=(t=bn.value)==null?void 0:t.value;window.localStorage.setItem(gn,e);try{const i=JSON.parse(e),s=JSON.stringify(i);if(s===oi&&!n)return;oi=s,Je&&Je.finalize(),Je=await Ol(yn.value,i,{namedDataProvider:ec})}catch(i){console.log(i)}}const tc=()=>D`
    <div class="toolbar">
        <img
            title="GenomeSpy"
            alt="GenomeSpy"
            src="${kl}"
            class="genome-spy-icon"
        />
        <span class="title">
            <span>GenomeSpy Playground</span>
        </span>
        <button @click=${Kl}>
            ${Rt(Ts).node[0]}
            <span>Toggle layout</span>
        </button>
        <span class="spacer"></span>
        <a
            class="version"
            href="https://github.com/genome-spy/genome-spy/releases/tag/v${si.version}"
            >v${si.version}</a
        >
        <a href="https://genomespy.app/docs/" target="_blank"
            >${Rt(ks).node[0]} <span>Docs</span></a
        >
    </div>
`,ic=un(()=>Ot(),500,!1),nc=()=>D`
    <section id="playground-layout" class="${ut}">
        ${tc()}
        <section id="editor-pane">
            <code-editor
                ${$t(bn)}
                @change=${ic}
                .value=${Yl}
            ></code-editor>
        </section>
        <section id="genome-spy-pane">
            <div ${$t(yn)}></div>
        </section>
        <section id="file-pane">
            <file-pane @upload=${Ot} .files=${vn}></file-pane>
        </section>
    </section>
`;function xn(){Ke(nc(),document.body)}xn();Ot();
