var vi=Object.defineProperty,wi=Object.defineProperties;var bi=Object.getOwnPropertyDescriptors;var Tt=Object.getOwnPropertySymbols;var Si=Object.prototype.hasOwnProperty,Ei=Object.prototype.propertyIsEnumerable;var qe=(i,e,t)=>e in i?vi(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,v=(i,e)=>{for(var t in e||(e={}))Si.call(e,t)&&qe(i,t,e[t]);if(Tt)for(var t of Tt(e))Ei.call(e,t)&&qe(i,t,e[t]);return i},D=(i,e)=>wi(i,bi(e));var ce=(i,e,t)=>(qe(i,typeof e!="symbol"?e+"":e,t),t);import{e as _i,t as Ci,a as We,f as A,w as je,p as _,c as Ii,b as ki,i as K,d as Oi,g as Di,h as Ai,j as Ti,k,l as _e,m as Ce,n as L,o as T,q as ie,r as Rt,s as $,I as Xe,u as Pt,v as Y,x as Ze,y as Ie,z as Ri,A as Pi,B as zi,C as Fi,D as Li,E as Ni,F as ke,G as Mi,H as Vi,J as O,K as Bi,L as $i,M as Ui,N as Hi,O as he,P as de,Q as Gi,R as zt,S as Ke,T as Ft,U as qi,V as Oe,W,X as fe,Y as Lt,Z as Wi,_ as ji,$ as De,a0 as Ae,a1 as Ye,a2 as Xi,a3 as Zi,a4 as Nt,a5 as Mt,a6 as Vt,a7 as Ki,a8 as Yi,a9 as Bt,aa as Je,ab as Ji,ac as Qi,ad as es,ae as Te,af as $t,ag as ts,ah as ns,ai as is,aj as ss,ak as os,al as rs,am as Ut,an as as,ao as ls,ap as cs,aq as hs,ar as Re,as as ds,at as fs,au as us,av as ps,aw as ms,ax as gs,ay as ys,az as xs,aA as Ht,aB as Pe,aC as ze,aD as vs,aE as ws,aF as Fe,aG as Qe,aH as bs,aI as Ss,aJ as Es,aK as Gt,aL as _s,aM as Cs,aN as qt,aO as Is,aP as ks,aQ as Wt,aR as jt}from"./vendor.53361075.js";const Os=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}};Os();const Xt=1;function et(){let i=[0,1],e=[0,1],t=1,n=1,s=0,o=0,r=.5,a=0;const c=d=>(d-i[0])/t*n+e[0];return c.invert=d=>(d-e[0])/n*t+i[0],c.domain=function(d){if(arguments.length){if(i=_i(d),t=i[1]-i[0],t<Xt){t=Xt;const h=(i[0]+i[1])/2;i[0]=h-t/2,i[1]=h+t/2}return c}else return i},c.range=function(d){return arguments.length?(e=[...d],n=e[1]-e[0],c):e},c.numberingOffset=function(d){return arguments.length?(a=d,c):a},c.padding=function(d){return arguments.length?(o=d,s=Math.min(1,d),c):s},c.paddingInner=function(d){return arguments.length?(s=Math.min(1,d),c):s},c.paddingOuter=function(d){return arguments.length?(o=d,c):o},c.align=function(d){return arguments.length?(r=Math.max(0,Math.min(1,d)),c):r},c.step=()=>n/t,c.bandwidth=()=>c.step(),c.ticks=d=>{const h=c.align(),f=c.numberingOffset();return Ci(i[0]-h+f,i[1]-h+f,Math.min(d,Math.ceil(t))).filter(Number.isInteger).map(p=>p-a)},c.tickFormat=(d,h)=>{if(h)throw new Error("Index scale's tickFormat does not support a specifier!");const p=We(i[0],i[1],Math.min(d,Math.ceil(t)))<1e5?A(","):A(".3s");return u=>p(u+a)},c.copy=()=>et().domain(i).range(e).paddingInner(s).paddingOuter(o).numberingOffset(a),c}function Ds(){const i=et().numberingOffset(1);let e;i.genome=function(n){return arguments.length?(e=n,i):e},i.ticks=n=>{if(!e)return[];const s=i.domain(),o=i.numberingOffset(),[r,a]=[Math.max(s[0],0),Math.min(s[1],e.totalSize-1)].map(d=>e.toChromosome(d)),l=Math.max(1,We(s[0],s[1],n)),c=[];for(let d=r.index;d<=a.index;d++){const h=e.chromosomes[d],f=Math.max(h.continuousStart+l,s[0]-(s[0]-h.continuousStart)%l),p=Math.min(h.continuousEnd-l/4,s[1]+1);for(let u=f;u<=p;u+=l){const m=u-o;m>=s[0]&&m<s[1]&&c.push(m)}}return c},i.tickFormat=(n,s)=>{if(!e)return;if(s)throw new Error("Locus scale's tickFormat does not support a specifier!");const o=i.domain(),r=o[1]-o[0],a=i.numberingOffset(),c=We(o[0],o[1],Math.min(n,Math.ceil(r)))<1e6?A(","):A(".3s"),d=h=>h-e.toChromosome(h).continuousStart;return h=>c(d(h)+a)};const t=i.copy;return i.copy=()=>t().genome(e),i}function As(i){return i.type=="locus"}function Ts(i,e){var t=i.getBoundingClientRect();return[e.clientX-t.left-i.clientLeft,e.clientY-t.top-i.clientTop]}function Zt(i,e){return i.length==e.length&&i.every((t,n)=>i[n]===e[n])}function Rs(i,e,t,n){return i.length==e.length&&i.every((s,o)=>t(i[o])===n(e[o]))}function N(i){return Array.isArray(i)?i:typeof i!="undefined"?[i]:[]}function z(i){return i[i.length-1]}class Ps{constructor(e){this.container=e,this.element=document.createElement("div"),this.element.className="tooltip",this._visible=!0,this.container.appendChild(this.element),this._previousTooltipDatum=void 0,this.enabledStack=[!0],this._penaltyUntil=0,this._lastCoords=void 0,this._previousMove=0,this.clear()}set visible(e){e!=this._visible&&(this.element.style.display=e?null:"none",this._visible=e)}get visible(){return this._visible}get enabled(){var e;return(e=z(this.enabledStack))!=null?e:!0}pushEnabledState(e){this.enabledStack.push(e),e||(this.visible=!1)}popEnabledState(){this.enabledStack.pop()}handleMouseMove(e){this.mouseCoords=Ts(this.container,e);const t=performance.now();!this.visible&&!this._isPenalty()&&t-this._previousMove>500&&(this._penaltyUntil=t+70),this._lastCoords&&zs(this.mouseCoords,this._lastCoords)>20&&(this._penaltyUntil=t+400),this._lastCoords=this.mouseCoords,this.visible&&this.updatePlacement(),this._previousMove=t}updatePlacement(){const e=20,[t,n]=this.mouseCoords;let s=t+e;s>this.container.clientWidth-this.element.offsetWidth&&(s=t-e-this.element.offsetWidth),this.element.style.left=s+"px",this.element.style.top=Math.min(n+e,this.container.clientHeight-this.element.offsetHeight)+"px"}setContent(e){if(!e||!this.enabled||this._isPenalty()){this.visible&&(je("",this.element),this.visible=!1),this._previousTooltipDatum=void 0;return}je(e,this.element),this.visible=!0,this.updatePlacement()}clear(){this._previousTooltipDatum=void 0,this.setContent(void 0)}updateWithDatum(e,t){e!==this._previousTooltipDatum&&(this._previousTooltipDatum=e,t||(t=n=>Promise.resolve(_` ${JSON.stringify(n)} `)),t(e).then(n=>this.setContent(n)).catch(n=>{if(n!=="debounced")throw n}))}_isPenalty(){return this._penaltyUntil&&this._penaltyUntil>performance.now()}}function zs(i,e){let t=0;for(let n=0;n<i.length;n++)t+=(i[n]-e[n])**2;return Math.sqrt(t)}function tt(i,e={}){const t=Ii({forbidden:[],allowed:["datum"],globalvar:"global",fieldvar:"datum"});try{const n=ki(i),s=t(n),o=Function("datum","global",`"use strict"; return (${s.code});`),r=a=>o(a,e);return r.fields=s.fields,r}catch(n){throw new Error(`Invalid expression: ${i}, ${n.message}`)}}function Fs(){let i=0;const e=new Map,t=n=>{let s=e.get(n);return s===void 0&&(s=i++,e.set(n,s)),s};return t.addAll=n=>{for(const s of n)t(s)},t.invert=n=>{for(const s of e.entries())if(s[1]==n)return s[0]},t.domain=()=>[...e.keys()],t}function Ls(i,e){const t={};e||(e=i.encoding);for(const[n,s]of Object.entries(e)){if(!s)continue;const o=i.unitView.getScaleResolution(P(s)&&s.resolutionChannel||n);t[n]=Ns(e[n],o==null?void 0:o.getScale(),i.unitView.getAccessor(n),n)}return t}function Ns(i,e,t,n){let s;if(R(i)){const o=i.value;s=r=>o,s.constant=!0,s.constantValue=!0,s.accessor=void 0}else if(t)if(n=="text")s=o=>{},s.accessor=t,s.constant=t.constant;else{if(!e)throw new Error(`Missing scale! "${n}": ${JSON.stringify(i)}`);if(s=o=>e(t(o)),K(e.type)){const o=Fs();o.addAll(e.domain()),s.indexer=o}s.constant=t.constant,s.accessor=t,s.scale=e}else throw new Error(`Missing value or accessor (field, expr, datum) on channel "${n}": ${JSON.stringify(i)}`);return s.invert=e?o=>e.invert(o):o=>{throw new Error("No scale available, cannot invert: "+JSON.stringify(i))},s.channelDef=i,s.applyMetadata=o=>{for(const r in s)r in s&&(o[r]=s[r]);return o},s}function R(i){return i&&"value"in i}function ue(i){return i&&"field"in i}function pe(i){return i&&"datum"in i}function P(i){return ue(i)||pe(i)||it(i)||Kt(i)}function nt(i,e){const t=i.mark.encoding[e];if(P(t))return t;throw new Error("Not a channel def with scale!")}function Kt(i){return i&&"chrom"in i}function it(i){return i&&"expr"in i}const me=["x","y"],Ms=["x2","y2"],Vs=[...me,...Ms];function Yt(i){return me.includes(i)}function ge(i){return Vs.includes(i)}const st={x:"x2",y:"y2"},Jt=Object.fromEntries(Object.entries(st).map(i=>[i[1],i[0]]));function ye(i){return i in Jt}function Bs(i){const e=st[i];if(e)return e;throw new Error(`${i} has no secondary channel!`)}function se(i){var e;return(e=Jt[i])!=null?e:i}function J(i){return["color","fill","stroke"].includes(se(i))}function Le(i){return["shape","squeeze"].includes(i)}function Qt(i){switch(i){case"shape":return["circle","square","triangle-up","cross","diamond","triangle-down","triangle-right","triangle-left"]}}function en(i){if(!Le(i))throw new Error("Not a discrete channel: "+i);const e=new Map(Qt(i).map((t,n)=>[t,n]));return t=>{const n=e.get(t);if(n!==void 0)return n;throw new Error(`Invalid value for "${i}" channel: ${t}`)}}function E(i,e=i){if(/^[A-Za-z0-9_]+$/.test(i)){const t=new Function("datum",`return datum[${JSON.stringify(i)}]`);return Oi(t,[i],e)}else return Di(i)}class $s{constructor(){this.accessorCreators=[],this.register(e=>{if(ue(e))try{const t=E(e.field);return t.constant=!1,t.fields=Ai(t),t}catch(t){throw new Error(`Invalid field definition: ${t.message}`)}}),this.register(e=>it(e)?Us(e.expr):void 0),this.register(e=>{if(pe(e)){const n=Ti(e.datum);return n.constant=!0,n.fields=[],n}})}register(e){this.accessorCreators.push(e)}createAccessor(e){for(const t of this.accessorCreators){const n=t(e);if(n)return n}}}function Us(i){const e=tt(i);return e.constant=e.fields.length==0,e}var Hs=`/**
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
`,Gs=`#if defined(ROUNDED_CORNERS) || defined(STROKED)
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
`;function ot(i,e=[],t=0){const n=Math.fround(i);return e[t]=n,e[t+1]=isFinite(n)?i-n:0,e}function qs(i){switch(Ks(i).gpuVendor.toLowerCase()){case"nvidia":return`  #define NVIDIA_GPU
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
  `}}const Ws=7936,js=7937,Xs=7938,Zs=35724;function Ks(i){const e=i.getExtension("WEBGL_debug_renderer_info"),t=i.getParameter(e&&e.UNMASKED_VENDOR_WEBGL||Ws),n=i.getParameter(e&&e.UNMASKED_RENDERER_WEBGL||js);return{gpuVendor:Ys(t,n),vendor:t,renderer:n,version:i.getParameter(Xs),shadingLanguageVersion:i.getParameter(Zs)}}function Ys(i,e){return i.match(/NVIDIA/i)||e.match(/NVIDIA/i)?"NVIDIA":i.match(/INTEL/i)||e.match(/INTEL/i)?"INTEL":i.match(/AMD/i)||e.match(/AMD/i)||i.match(/ATI/i)||e.match(/ATI/i)?"AMD":"UNKNOWN GPU"}const rt="attr_",tn="uDomain_",Js="range_",nn="scale_",sn="getScaled_",at="uRangeTexture_",on=3402823466e29;function Qs(i){const e=i.match(/^(?:(\w+)-)?(\w+)$/);if(!e)throw new Error("Not a scale type: "+i);return{family:e[1]||"continuous",transform:e[2]}}function eo(i,e){let t;if(Le(i))t=Q(en(i)(e));else if(k(e))if(J(i))t=no(e);else throw new Error(`String values are not supported on the "${i}" channel: ${e}`);else if(_e(e))t=Q(e?1:0);else if(e===null)if(J(i))t=Q([0,0,0]);else throw new Error(`null value is not supported on the "${i}" chanel.`);else t=Q(e);return`
#define ${i}_DEFINED
${t.type} ${sn}${i}() {
    // Constant value
    return ${t};
}`}function to(i,e,t){var B;if(R(t))throw new Error(`Cannot create scale for "value": ${JSON.stringify(t)}`);const n=se(i),s=rt+i,o=tn+n,r=Js+n,a=!!e.fp64,l=a?"vec2":"float",c=e.domain?e.domain().length:void 0;let d;const h=[];h.push(""),h.push("/".repeat(70)),h.push(`// Channel: ${i}`),h.push(""),h.push(`#define ${i}_DEFINED`),a&&h.push(`#define ${i}_FP64`);const{transform:f}=Qs(e.type),p=(x,...Z)=>io.apply(null,[x+(a?"Fp64":""),"value",...Z]);let u;switch(f){case"linear":u=p("scaleLinear","domain",r);break;case"log":u=p("scaleLog","domain",r,e.base());break;case"symlog":u=p("scaleSymlog","domain",r,e.constant());break;case"pow":case"sqrt":u=p("scalePow","domain",r,e.exponent());break;case"index":case"locus":case"point":case"band":u=p("scaleBand","domain",r,e.paddingInner(),e.paddingOuter(),e.align(),(B=t.band)!=null?B:.5);break;case"ordinal":case"null":case"identity":u=p("scaleIdentity");break;case"threshold":break;default:throw new Error(`Unsupported scale type: ${e.type}! ${i}: ${JSON.stringify(t)}`)}const m=Ce(e.type)||L(e.type)&&J(i)?[0,1]:e.range?e.range():void 0;if(m&&i==n&&m.length&&m.every(T)){const x=rn(m);h.push(`const ${x.type} ${r} = ${x};`)}const y=J(i)?"vec3":"float";let g;if(J(i)){const x=at+n;if(i==n&&h.push(`uniform sampler2D ${x};`),L(e.type))g=`getInterpolatedColor(${x}, transformed)`;else if(K(e.type)||ie(e.type))g=`getDiscreteColor(${x}, int(transformed))`;else throw new Error("Problem with color scale!")}else if(e.type==="ordinal"||ie(e.type)){const x=at+n;i==n&&h.push(`uniform sampler2D ${x};`),g=`getDiscreteColor(${x}, int(transformed)).r`}pe(t)?h.push(`uniform highp ${l} ${s};`):h.push(`in highp ${l} ${s};`);const b=[],w=L(e.type)&&c>2,S=ie(e.type)||w;if(b.push("int slot = 0;"),S){const x=o;b.push(w?`while (slot < ${x}.length() - 2 && value >= ${x}[slot + 1]) { slot++; }`:`while (slot < ${x}.length() && value >= ${x}[slot]) { slot++; }`)}const I=L(e.type)||ie(e.type)||["band","point"].includes(e.type);if(u){const x=o;if(I){const Z=a?"vec4":"vec2";b.push(`${Z} domain = ${Z}(${x}[slot], ${x}[slot + 1]);`)}b.push(`float transformed = ${u};`),w&&b.push(`transformed = (float(slot) + transformed) / (float(${x}.length()) - 1.0);`)}else b.push("float transformed = float(slot);");"clamp"in e&&e.clamp()&&b.push(`transformed = clampToRange(transformed, ${rn(m)});`),b.push(`return ${g!=null?g:"transformed"};`),h.push(`
${y} ${nn}${i}(${l} value) {
${b.map(x=>`    ${x}
`).join("")}
}`),h.push(`
${y} ${sn}${i}() {
    return ${nn}${i}(${s});
}`);const q=h.join(`
`);if(I&&i==n){const x=L(e.type)||ie(e.type)?c:2;d=`${a?"vec2":"float"} ${o}[${x}];`}return{glsl:q,domainUniform:d}}function lt(i){if(!T(i))throw new Error(`Not a number: ${i}`);if(i==1/0)return""+on;if(i==-1/0)return""+-on;{let e=`${i}`;return/^(-)?\d+$/.test(e)&&(e+=".0"),e}}function Q(i){typeof i=="number"&&(i=[i]);const e=i.length;if(e<1||e>4)throw new Error("Invalid number of components: "+e);let t,n;return e>1?(t=`vec${e}`,n=`${t}(${i.map(lt).join(", ")})`):(t="float",n=lt(i[0])),Object.assign(n,{type:t,numComponents:e})}function no(i){const e=Rt(i).rgb();return Q([e.r,e.g,e.b].map(t=>t/255))}function rn(i){return Q([i[0],z(i)])}function io(i,...e){const t=[];for(const n of e)T(n)?t.push(lt(n)):$(n)?t.push(Q(n)):t.push(n);return`${i}(${t.join(", ")})`}class so{constructor(e){this.size=e,this.arrays={},this.pushers=[],this.dataUpdaters=[],this.vertexCount=0}addConverter(e,t){const n=this.createUpdater(rt+e,t.numComponents||1,t.arrayReference),s=t.f;this.dataUpdaters.push(t.arrayReference?o=>n(s(o)):o=>n(s(o)))}createUpdater(e,t,n){if(!T(this.size))throw new Error("The number of vertices must be defined!");let s,o,r=0;const a=new Float32Array(this.size*t);if(this.arrays[e]={data:a,numComponents:t},t==1){let l=0;const c=d=>{l=+d};s=()=>{a[r++]=l},o=c}else{let l=n!=null?n:[0];const c=n?d=>{}:d=>{l=d};switch(t){case 1:break;case 2:s=()=>{a[r++]=l[0],a[r++]=l[1]},o=c;break;case 3:s=()=>{a[r++]=l[0],a[r++]=l[1],a[r++]=l[2]},o=c;break;case 4:s=()=>{a[r++]=l[0],a[r++]=l[1],a[r++]=l[2],a[r++]=l[3]},o=c;break;default:throw new Error("Invalid numComponents: "+t)}}return this.pushers.push(s),o}_unrollPushAll(){let e="",t="";for(let s=0;s<this.pushers.length;s++)e+=`const p${s} = that.pushers[${s}];
`,t+=`p${s}();
`;const n=new Function("that",`${e}

            return function unrolledPushAll() {
                ${t}
                that.vertexCount++;
            };
        `);this.pushAll=n(this)}pushAll(){this.size>1e5?this._unrollPushAll():this.pushAll=()=>{for(let t=0;t<this.pushers.length;t++)this.pushers[t]();this.vertexCount++},this.pushAll()}updateFromDatum(e){for(let t=0;t<this.dataUpdaters.length;t++)this.dataUpdaters[t](e)}pushFromDatum(e){this.updateFromDatum(e),this.pushAll()}}const oe=5,ct=127;function ht(i){const e=[];for(let u=0;u<=ct;u++)e.push(void 0);const t=new Map;for(const u of i.chars)u.id<=ct?e[u.id]=u:t.set(u.id,u);const n=8722;t.has(n)||t.set(n,e["-".charCodeAt(0)]);function s(u){return(u<=ct?e[u]:t.get(u))||e[63]}function o(u){return s(u.charCodeAt(0))}const r=i.common.base,a=o("x"),l=o("X"),c=o("q"),d=a.height-oe*2,h=l.height-oe*2,f=c.height-a.height+c.yoffset-a.yoffset;function p(u,m=1){let y=0;for(let g=0;g<u.length;g++)y+=s(u.charCodeAt(g)).xadvance;return y/r*m}return{measureWidth:p,getCharByCode:s,getChar:o,xHeight:d,capHeight:h,descent:f,common:i.common}}function oo(i,e=0,t=1){return Math.max(e,Math.min(t,i))}const ro=2**31-1;function ao(i,e){const t=new Int32Array(i);t.fill(ro);const n=new Int32Array(i),s=e[0],r=(e[1]-e[0])/i,a=h=>oo(Math.floor((h-s)/r),0,i-1),l=(h,f,p,u)=>{const m=a(h),y=a(f);for(let g=m;g<=y;g++)t[g]>p&&(t[g]=p),n[g]<u&&(n[g]=u)},c=(h,f)=>[t[a(h)],n[a(f)]],d=()=>{for(let h=1;h<n.length;h++)n[h]<n[h-1]&&(n[h]=n[h-1]);for(let h=n.length-1;h>0;h--)n[h-1]>n[h]&&(n[h-1]=n[h]);return c};return l.getIndex=d,l}class xe{constructor({encoders:e,numVertices:t=void 0,attributes:n=[],buildXIndex:s=!1}){this.encoders=e,this._buildXIndex=s,this.variableEncoders=Object.fromEntries(Object.entries(e).filter(([o,r])=>n.includes(o)&&r&&r.scale&&!r.constant)),this.allocatedVertices=t,this.variableBuilder=new so(t);for(const[o,r]of Object.entries(this.variableEncoders)){const a=r.accessor,l=[0,0],c=r.scale.fp64,d=r.indexer,h=d?f=>d(a(f)):c?f=>ot(a(f),l):a;this.variableBuilder.addConverter(o,{f:h,numComponents:c?2:1,arrayReference:c?l:void 0})}this.lastOffset=0,this.rangeMap=new Xe([],JSON.stringify)}registerBatch(e){var o;const t=this.lastOffset,n=this.variableBuilder.vertexCount,s=n-t;s&&this.rangeMap.set(e,{offset:t,count:s,xIndex:(o=this.xIndexer)==null?void 0:o.getIndex()}),this.lastOffset=n}addBatches(e){for(const[t,n]of e)this.addBatch(t,n)}addBatch(e,t,n=0,s=t.length){for(let o=n;o<s;o++)this.variableBuilder.pushFromDatum(t[o]);this.registerBatch(e)}prepareXIndexer(e){if(!this._buildXIndex)return;const t=this.variableEncoders.x,n=this.variableEncoders.x2;if(t&&n){const s=t.accessor,o=n.accessor;this.xIndexer=ao(50,[s(e[0]),o(z(e))]);let r=this.variableBuilder.vertexCount;this.addToXIndex=a=>{let l=this.variableBuilder.vertexCount;this.xIndexer(s(a),o(a),r,l),r=l}}else this.xIndexer=void 0,this.addToXIndex=s=>{}}addToXIndex(e){}toArrays(){return{arrays:this.variableBuilder.arrays,vertexCount:this.variableBuilder.vertexCount,allocatedVertices:this.allocatedVertices,rangeMap:this.rangeMap}}}class lo extends xe{constructor({encoders:e,attributes:t,tessellationThreshold:n=1/0,visibleRange:s=[-1/0,1/0],numItems:o,buildXIndex:r=!1}){super({encoders:e,attributes:t,numVertices:n==1/0?o*6:void 0,buildXIndex:r});this.visibleRange=s,this.tessellationThreshold=n||1/0,this.updateFrac=this.variableBuilder.createUpdater("frac",2)}addBatch(e,t,n=0,s=t.length){if(s<=n)return;const o=this.encoders,[r,a]=this.visibleRange,l=f=>f.accessor||(p=>0),c=l(o.x),d=l(o.x2);this.prepareXIndexer(t);const h=[0,0];this.updateFrac(h);for(let f=n;f<s;f++){const p=t[f];let u=c(p),m=d(p);if(u>m&&([u,m]=[m,u]),m<r||u>a)continue;u<r&&(u=r),m>a&&(m=a),this.variableBuilder.updateFromDatum(p),h[0]=0,h[1]=0;const y=1;this.variableBuilder.pushAll();for(let g=0;g<=y;g++)h[0]=g/y,h[1]=0,this.variableBuilder.pushAll(),h[1]=1,this.variableBuilder.pushAll();this.variableBuilder.pushAll(),this.addToXIndex(p)}this.registerBatch(e)}}class co extends xe{constructor({encoders:e,attributes:t,tessellationThreshold:n=1/0,visibleRange:s=[-1/0,1/0],numItems:o,buildXIndex:r}){super({encoders:e,attributes:t,numVertices:n==1/0?o*6:void 0,buildXIndex:r});this.visibleRange=s,this.tessellationThreshold=n||1/0,this.updateSide=this.variableBuilder.createUpdater("side",1),this.updatePos=this.variableBuilder.createUpdater("pos",1)}addBatch(e,t,n=0,s=t.length){this.prepareXIndexer(t);for(let o=n;o<s;o++){const r=t[o];this.variableBuilder.updateFromDatum(r),this.updateSide(-.5),this.updatePos(0),this.variableBuilder.pushAll();const a=1;for(let l=0;l<=a;l++)this.updatePos(l/a),this.updateSide(-.5),this.variableBuilder.pushAll(),this.updateSide(.5),this.variableBuilder.pushAll();this.variableBuilder.pushAll(),this.addToXIndex(r)}this.registerBatch(e)}}class ho extends xe{constructor({encoders:e,attributes:t,numItems:n=void 0}){super({encoders:e,attributes:t,numVertices:n})}}class fo extends xe{constructor({encoders:e,attributes:t,numItems:n=void 0}){super({encoders:e,attributes:t,numVertices:n})}toArrays(){const e=this.variableBuilder.arrays;for(let t of Object.values(e))t.divisor=1;return super.toArrays()}}class uo extends xe{constructor({encoders:e,attributes:t,fontMetrics:n,properties:s,numCharacters:o=void 0,buildXIndex:r=!1}){super({encoders:e,attributes:t,numVertices:o*6,buildXIndex:r});this.metadata=n,this.metrics=n,this.properties=s;const l=e.text.channelDef;this.numberFormat=!R(l)&&l.format?A(l.format):c=>c,this.updateVertexCoord=this.variableBuilder.createUpdater("vertexCoord",2),this.updateTextureCoord=this.variableBuilder.createUpdater("textureCoord",2),this.updateWidth=this.variableBuilder.createUpdater("width",1)}addBatch(e,t,n=0,s=t.length){var p;const o=this.properties.align||"left",r=(p=this.properties.logoLetters)!=null?p:!1,a=this.metadata.common.base,l=this.metadata.common.scaleH;let c=-oe;switch(this.properties.baseline){case"top":c+=this.metrics.capHeight;break;case"middle":c+=this.metrics.capHeight/2;break;case"bottom":c-=this.metrics.descent;break}const d=this.encoders.text.accessor||this.encoders.text,h=[0,0];this.updateVertexCoord(h);const f=[0,0];this.updateTextureCoord(f),this.prepareXIndexer(t);for(let u=n;u<s;u++){const m=t[u],y=this.numberFormat(d(m)),g=k(y)?y:y===null?"":""+y;if(g.length==0)continue;this.variableBuilder.updateFromDatum(m);const b=r?g.length:this.metrics.measureWidth(g);this.updateWidth(b);let w=o=="right"?-b:o=="center"?-b/2:0;if(!r){const B=this.metrics.getCharByCode(g.charCodeAt(0));w-=(B.width-B.xadvance)/a/2}let S=-.5,I=1,q=1;for(let B=0;B<g.length;B++){const x=this.metrics.getCharByCode(g.charCodeAt(B)),Z=r?1:x.xadvance/a;if(x.id==32){w+=Z;continue}r?(q=(x.width+oe*2)/x.width,w=-q/2,I=(x.height+oe*2)/x.height,S=-.5-oe/x.height):(I=x.height/a,S=-(x.height+x.yoffset+c)/a,q=x.width/a);const te=x.x,ne=x.y;h[0]=w,h[1]=S+I,f[0]=te/l,f[1]=ne/l,this.variableBuilder.pushAll(),h[0]=w+q,h[1]=S+I,f[0]=(te+x.width)/l,f[1]=ne/l,this.variableBuilder.pushAll(),h[0]=w,h[1]=S,f[0]=te/l,f[1]=(ne+x.height)/l,this.variableBuilder.pushAll(),h[0]=w+q,h[1]=S+I,f[0]=(te+x.width)/l,f[1]=ne/l,this.variableBuilder.pushAll(),h[0]=w,h[1]=S,f[0]=te/l,f[1]=(ne+x.height)/l,this.variableBuilder.pushAll(),h[0]=w+q,h[1]=S,f[0]=(te+x.width)/l,f[1]=(ne+x.height)/l,this.variableBuilder.pushAll(),w+=Z}this.addToXIndex(t)}this.registerBatch(e)}}var po=`// Adapted from luma.gl - https://github.com/uber/luma.gl

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
}`,an=`#define PI 3.141593

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
`,mo=`// Utils ------------

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
`,go=`float scaleIdentityFp64(vec2 value) {
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
`,yo=`
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
`,xo=`/*
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
`,vo=`uniform bool uPickingEnabled;

flat in highp vec4 vPickingColor;
`;const Ne=Symbol("cacheMap");function re(i,e,t){let n=ve(i).get(e);return n===void 0&&(n=t(e),ve(i).set(e,n)),n}function ln(i,e){ve(i).delete(e)}function Me(i,e){const t=ve(i);for(const n of t.keys())n.startsWith(e)&&t.delete(n);ve(i).delete(e)}function cn(i){i[Ne]=new Map}function ve(i){return i[Ne]||cn(i),i[Ne]}function wo(i,e,t,n){const s=k(i)?i:i.name,o=!k(i)&&i.extent||[0,1];if(t===void 0&&!k(i)&&(t=i.count),s){const r=Pt(s);if(Y(r)){const a=dn(r,{extent:o,count:t});return Ve(e,{minMag:e.LINEAR,format:e.RGB,height:1,wrap:e.CLAMP_TO_EDGE},a,n)}else{if($(r))return hn(r,e);throw new Error("Unknown scheme: "+s)}}}function bo(i,e="rgb",t,n){const s=Ze(i,k(e)?e:e.type,k(e)?void 0:e.gamma),o=dn(s);return Ve(t,{minMag:t.LINEAR,format:t.RGB,height:1,wrap:t.CLAMP_TO_EDGE},o,n)}function So(i,e,t,n){const s=Math.max(i.length,t||0),o=new Float32Array(s);for(let r=0;r<s;r++)o[r]=i[r%i.length];return Ve(e,{minMag:e.NEAREST,format:e.RED,internalFormat:e.R32F,height:1},o,n)}function hn(i,e,t,n){const s=fn(i,t);return Ve(e,{minMag:e.NEAREST,format:e.RGB,height:1},s,n)}function dn(i,{extent:e=[0,1],reverse:t=!1,count:n=256}={}){const s=e[0],o=z(e)-s,r=Ie(n).map(a=>a/(n-1)).map(a=>s+a/o).map(i);return t&&r.reverse(),fn(r)}function fn(i,e){const t=Math.max(i.length,e||0),n=new Uint8Array(t*3);for(let s=0;s<t;s++){const o=Rt(i[s%i.length]).rgb();n[s*3+0]=o.r,n[s*3+1]=o.g,n[s*3+2]=o.b}return n}class Eo{constructor(e,t){this._container=e,this._sizeSource=t,this._shaderCache=new Map,this._listeners=[],this.rangeTextures=new WeakMap;const n=document.createElement("canvas");e.appendChild(n);const s=Ri(n,{antialias:!0,depth:!1,premultipliedAlpha:!0});if(!s)throw new Error("Unable to initialize WebGL. Your browser or machine may not support it.");if(!Pi(s))throw new Error("Your web browser does not support WebGL 2.0. Chrome, Firefox, and Safari Tech Preview should work.");zi(s),s.blendFunc(s.ONE,s.ONE_MINUS_SRC_ALPHA),this._shaderDefines=qs(s),this.canvas=n,this.gl=s,this._pickingAttachmentOptions=[{format:s.RGBA,type:s.UNSIGNED_BYTE,minMag:s.LINEAR,wrap:s.CLAMP_TO_EDGE}],this._pickingBufferInfo=Fi(s,this._pickingAttachmentOptions),s.bindFramebuffer(s.FRAMEBUFFER,null),this.adjustGl(),this._resizeObserver=new ResizeObserver(o=>{this.invalidateSize(),this._emit("resize")}),this._resizeObserver.observe(this._container),this._updateDpr()}invalidateSize(){this._logicalCanvasSize=void 0,this._updateDpr(),this.adjustGl()}_updateDpr(){this.dpr=window.devicePixelRatio}compileShader(e,t){const n="#version 300 es",s="precision mediump float;";$(t)&&(t=t.join(`

`));const o=this.gl,r=t.replaceAll(/ {2,}|^\s*\/\/.*$/gm,"");let a=this._shaderCache.get(r);if(!a){const l=[n,s,t].join(`

`);a=o.createShader(e),o.shaderSource(a,l),o.compileShader(a),this._shaderCache.set(r,a)}return a}adjustGl(){const e=this.getLogicalCanvasSize();this.canvas.style.width=`${e.width}px`,this.canvas.style.height=`${e.height}px`;const t=this.getPhysicalCanvasSize(e);this.canvas.width=t.width,this.canvas.height=t.height,Li(this.gl,this._pickingBufferInfo,this._pickingAttachmentOptions)}finalize(){this._resizeObserver.unobserve(this._container),this.canvas.remove()}getPhysicalCanvasSize(e){return e=e||this.getLogicalCanvasSize(),{width:e.width*this.dpr,height:e.height*this.dpr}}getLogicalCanvasSize(){var o,r,a,l;if(this._logicalCanvasSize)return this._logicalCanvasSize;const e=(r=(o=this._sizeSource)==null?void 0:o.call(this))!=null?r:{width:void 0,height:void 0},t=window.getComputedStyle(this._container,null),n=(a=e.width)!=null?a:this._container.clientWidth-parseFloat(t.paddingLeft)-parseFloat(t.paddingRight),s=(l=e.height)!=null?l:this._container.clientHeight-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom);return this._logicalCanvasSize={width:n,height:s},this._logicalCanvasSize}addEventListener(e,t){this._listeners.push({type:e,listener:t})}_emit(e){for(const t of this._listeners)t.type===e&&t.listener()}readPickingPixel(e,t){const n=this.gl;e*=this.dpr,t*=this.dpr;const s=this.getPhysicalCanvasSize().height,o=new Uint8Array(4);return n.bindFramebuffer(n.FRAMEBUFFER,this._pickingBufferInfo.framebuffer),n.readPixels(e,s-t-1,1,1,n.RGBA,n.UNSIGNED_BYTE,o),n.bindFramebuffer(n.FRAMEBUFFER,null),o}clearAll(){const e=this.gl,{width:t,height:n}=this.getPhysicalCanvasSize();e.viewport(0,0,t,n),e.disable(e.SCISSOR_TEST),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT)}createRangeTexture(e,t=!1){const n=this.rangeTextures.get(e);if(!t&&n)return;function s(r,a){return K(a.type)?a.domain().length:a.type=="threshold"?a.domain().length+1:a.type=="quantize"||a.type=="quantile"?r!=null?r:4:r}const o=e.channel;if(J(o)){const r=e.getScaleProps(),a=e.getScale();let l;if(r.scheme){let c=k(r.scheme)?void 0:r.scheme.count;c=s(c,a),l=wo(r.scheme,this.gl,c,n)}else{const c=a.range();Ce(a.type)?l=bo(c,r.interpolate,this.gl,n):l=hn(c,this.gl,a.domain().length,n)}this.rangeTextures.set(e,l)}else{const r=e.getScale();if(r.type==="ordinal"||ie(r.type)){const a=Le(o)?en(o):c=>c,l=e.getScale().range();this.rangeTextures.set(e,So(l.map(a),this.gl,r.domain().length,n))}}}}function _o(i,e="",t=0){const n=/ERROR:\s*\d+:(\d+)/gi,s=[...e.matchAll(n)],o=new Map(s.map((r,a)=>{const l=parseInt(r[1]),c=s[a+1],d=c?c.index:e.length,h=e.substring(r.index,d);return[l-1,h]}));return i.split(`
`).map((r,a)=>{const l=o.get(a);return`${a+1+t}: ${r}${l?`

^^^ ${l}`:""}`}).join(`
`)}function Co(i,e,t){const n=i.createProgram();i.attachShader(n,e),i.attachShader(n,t),i.linkProgram(n);function s(){let o,r;if(!i.getProgramParameter(n,i.LINK_STATUS)){o=i.getProgramInfoLog(n);for(const l of[e,t])i.getShaderParameter(l,i.COMPILE_STATUS)||(o=i.getShaderInfoLog(l),r=_o(i.getShaderSource(l),o,0)+`
Error compiling: ${o}`,i.deleteShader(l));i.deleteProgram(n)}if(o)return{message:o,detail:r}}return{program:n,getProgramErrors:s}}function Ve(i,e,t,n){return n?Ni(i,n,t,e):n=ke(i,D(v({},e),{src:t})),n}function Io(...i){const e={get(t,n,s){for(const o of i){const a=o()[n];if(a!==void 0)return a}},has(t,n,s){for(const o of i){const r=o();if(n in r)return!0}return!1}};return new Proxy({},e)}function ko(i){return k(i)||T(i)||_e(i)}const Oo="SAMPLE_FACET_UNIFORM",un="SAMPLE_FACET_TEXTURE";class we{constructor(e){this.unitView=e,this.encoders=void 0,this.bufferInfo=void 0,this.programInfo=void 0,this.vertexArrayInfo=void 0,this.domainUniformInfo=void 0,this.defaultProperties={get clip(){return["x","y"].map(t=>e.getScaleResolution(t)).some(t=>{var n;return(n=t==null?void 0:t.isZoomable())!=null?n:!1})},xOffset:0,yOffset:0,minBufferSize:0},this.properties=Io(typeof this.unitView.spec.mark=="object"?()=>this.unitView.spec.mark:()=>({}),()=>this.defaultProperties)}get opaque(){return!1}getAttributes(){throw new Error("Not implemented!")}getSupportedChannels(){return["sample","facetIndex","x","y","color","opacity","search","uniqueId"]}getDefaultEncoding(){const e={sample:void 0,uniqueId:void 0};return this.isPickingParticipant()&&(e.uniqueId={field:"_uniqueId"}),e}fixEncoding(e){return e}get encoding(){return re(this,"encoding",()=>{const e=this.getDefaultEncoding(),t=this.unitView.getEncoding(),n=r=>{const a=this.properties[r];return ko(a)&&{value:a}},s=Object.fromEntries(this.getSupportedChannels().map(r=>[r,n(r)]).filter(r=>r[1].value!==void 0)),o=this.fixEncoding(v(v(v({},e),s),t));for(const r of Object.keys(o))this.getSupportedChannels().includes(r)||delete o[r];return o})}getContext(){return this.unitView.context}getType(){return this.unitView.getMarkType()}initializeData(){}initializeEncoders(){this.encoders=Ls(this)}async initializeGraphics(){}updateGraphicsData(){}getSampleFacetMode(){if(this.encoders.facetIndex)return un;if(this.unitView.getFacetAccessor())return Oo}createAndLinkShaders(e,t,n=[]){const s=this.getAttributes();n.push("// view: "+this.unitView.getPathString()),this.domainUniforms=[];let o=[];const r=this.getSampleFacetMode();r&&n.push(`#define ${r}`);for(const h of s){let f;if(h in this.encoding)f=h;else continue;const p=this.encoding[f];if(!!p)if(R(p))o.push(eo(f,p.value));else{const u=P(p)&&p.resolutionChannel||f,m=this.unitView.getScaleResolution(u).getScale(),y=to(f,m,p);o.push(y.glsl),y.domainUniform&&this.domainUniforms.push(y.domainUniform)}}const a=this.domainUniforms.length?`layout(std140) uniform Domains {
`+this.domainUniforms.map(h=>`    ${h}
`).join("")+`};

`:"",l=[...n,an,mo,a,...o,yo,xo,e];l.some(h=>/[Ff]p64/.test(h))&&(l.unshift(go),l.unshift(po));const c=[...n,an,vo,t],d=this.gl;this.programStatus=Co(d,this.glHelper.compileShader(d.VERTEX_SHADER,l),this.glHelper.compileShader(d.FRAGMENT_SHADER,c))}finalizeGraphicsInitialization(){const e=this.programStatus.getProgramErrors();if(e){e.detail&&console.warn(e.detail);const t=new Error("Cannot create shader program: "+e.message);throw t.view=this.unitView,t}this.programInfo=Mi(this.gl,this.programStatus.program),delete this.programStatus,this.domainUniforms.length&&(this.domainUniformInfo=Vi(this.gl,this.programInfo,"Domains")),this.gl.useProgram(this.programInfo.program),this._setDatums()}_setDatums(){for(const[e,t]of Object.entries(this.encoding))if(pe(t)){const n=this.encoders[e],s=n.indexer?n.indexer(t.datum):n.scale.fp64?ot(+t.datum):+t.datum;O(this.programInfo,{[rt+e]:s})}}deleteGraphicsData(){if(this.bufferInfo){const e=this.gl;for(let t=0;t<8;t++)e.disableVertexAttribArray(t);Object.values(this.bufferInfo.attribs).forEach(t=>this.gl.deleteBuffer(t.buffer)),this.bufferInfo.indices&&this.gl.deleteBuffer(this.bufferInfo.indices),this.bufferInfo=void 0}}updateBufferInfo(e){if(this.gl.bindVertexArray(null),this.bufferInfo&&e.vertexCount<=this.bufferInfo.allocatedVertices)for(const[t,n]of Object.entries(e.arrays))n.data&&Bi(this.gl,this.bufferInfo.attribs[t],n.data,0);else this.deleteGraphicsData(),this.bufferInfo=$i(this.gl,e.arrays,{numElements:e.vertexCount}),this.bufferInfo.allocatedVertices=e.allocatedVertices,this.vertexArrayInfo=void 0}get glHelper(){return this.getContext().glHelper}get gl(){return this.glHelper.gl}onBeforeSampleAnimation(){}onAfterSampleAnimation(){}isReady(){return this.bufferInfo&&this.programInfo}isPickingParticipant(){if(this.properties.tooltip===null)return!1;for(const e of this.unitView.getAncestors())if(!e.isPickingSupported())return!1;return!0}prepareRender(e){var s;const t=this.glHelper,n=this.gl;if(this.vertexArrayInfo||(this.vertexArrayInfo=Ui(this.gl,this.programInfo,this.bufferInfo)),n.useProgram(this.programInfo.program),this.domainUniformInfo){for(const[o,r]of Object.entries(this.domainUniformInfo.setters)){const a=o.substring(tn.length),l=this.encoding[a],c=P(l)&&l.resolutionChannel||a,d=this.unitView.getScaleResolution(c);if(d){const h=d.getScale(),f=K(h.type)?[0,h.domain().length]:h.domain();r(h.fp64?f.map(p=>ot(p)).flat():f)}}Hi(n,this.programInfo,this.domainUniformInfo)}for(const[o,r]of Object.entries(this.encoding))if(P(r)){const a=P(r)&&r.resolutionChannel||o,l=this.unitView.getScaleResolution(a),c=t.rangeTextures.get(l);c&&O(this.programInfo,{[at+o]:c})}if(this.getSampleFacetMode()==un){let o;for(const r of this.unitView.getAncestors())if(o=r.getSampleFacetTexture(),o)break;O(this.programInfo,{uSampleFacetTexture:o})}O(this.programInfo,{ONE:1,uDevicePixelRatio:this.glHelper.dpr,uViewOpacity:this.unitView.getEffectiveOpacity(),uPickingEnabled:((s=e.picking)!=null?s:!1)&&this.isPickingParticipant()}),O(this.programInfo,{uSampleFacet:[0,1,0,1],uTransitionOffset:0}),this.opaque||e.picking?n.disable(n.BLEND):n.enable(n.BLEND)}prepareSampleFacetRendering(e){const t=e.sampleFacetRenderingOptions,n=this.programInfo.uniformSetters.uSampleFacet;if(t&&n){const s=t.locSize?t.locSize.location:0,o=t.locSize?t.locSize.size:1;if(s>1||s+o<0)return!1;const r=t.targetLocSize?t.targetLocSize.location:s,a=t.targetLocSize?t.targetLocSize.size:o;this.gl.uniform4f(n.location,s,o,r,a)}return!0}render(e){}createRenderCallback(e,t,n){var r;const s=this;let o;if(this.properties.buildIndex){const a=(r=this.unitView.getScaleResolution("x"))==null?void 0:r.getScale();o=l=>{if(a&&l.xIndex){const c=a.domain(),d=l.xIndex(c[0],c[1]),h=d[0],f=d[1]-h;f>0&&e(h,f)}else e(l.offset,l.count)}}else o=a=>e(a.offset,a.count);if(this.properties.dynamicData)return function(){const l=n().get(t.facetId);l&&l.count&&s.prepareSampleFacetRendering(t)&&o(l)};{const a=n().get(t.facetId);if(a&&a.count)return function(){s.prepareSampleFacetRendering(t)&&o(a)}}}setViewport(e,t){const n=this.glHelper.dpr,s=this.gl,o=this.properties,r=this.glHelper.getLogicalCanvasSize(),a=.5,l=(o.xOffset||0)+a,c=(o.yOffset||0)+a;let d,h=e;if(o.clip||t){let f=0,p=0,u;t?(h=o.clip?e.intersect(t):t,u=[e.width/h.width,e.height/h.height],p=Math.max(0,e.y2-t.y2),f=Math.max(0,e.x2-t.x2)):u=[1,1];const m=[e.x,r.height-h.y2,Math.max(0,h.width),Math.max(0,h.height)].map(w=>w*n),y=m.map(w=>Math.floor(w)),[g,b]=m.map((w,S)=>w-y[S]);s.viewport(...y),s.scissor(...y),s.enable(s.SCISSOR_TEST),d={uViewOffset:[(l+f+g)/h.width,-(c+p-b)/h.height],uViewScale:u}}else s.viewport(0,0,r.width*n,r.height*n),s.disable(s.SCISSOR_TEST),d={uViewOffset:[(e.x+l)/r.width,(r.height-e.y-c-e.height)/r.height],uViewScale:[e.width/r.width,e.height/r.height]};return O(this.programInfo,d),O(this.programInfo,{uViewportSize:[e.width,e.height]}),h.height>0&&h.width>0}findDatumAt(e,t){}}function dt(i,e){var o;const t=Bs(e);let n=i[e]&&v({},i[e]),s=i[t]&&v({},i[t]);if(!(R(n)||R(s))){if(n){if(!P(i[e]))return;if(s){if(n.type!="quantitative"){const r=(1-(n.band||1))/2;n.band=r,s.band=-r}}else if(n.type=="quantitative")s={datum:0};else{s=v({},n);const r=(1-((o=n.band)!=null?o:1))/2;n.band=0+r,s.band=1-r}}else n={value:0},s={value:1};i[e]=n,i[t]=s}}function pn(i,e){i.stroke||(e?i.stroke={value:null}:i.stroke=v({resolutionChannel:"color"},i.color)),R(i.stroke)&&i.stroke.value===null&&(i.strokeWidth={value:0}),i.strokeOpacity||(i.strokeOpacity=v({resolutionChannel:"opacity"},i.opacity))}function mn(i,e){R(i.fill)&&i.fill.value===null?i.fillOpacity={value:0}:i.fill||(i.fill=v({resolutionChannel:"color"},i.color),!e&&!i.fillOpacity&&(i.fillOpacity={value:0})),i.fillOpacity||(e?i.fillOpacity=v({resolutionChannel:"opacity"},i.opacity):i.fillOpacity={value:0})}class Do extends we{constructor(e){super(e);Object.defineProperties(this.defaultProperties,Object.getOwnPropertyDescriptors({x2:void 0,y2:void 0,filled:!0,color:"#4c78a8",opacity:1,strokeWidth:3,cornerRadius:0,minWidth:.5,minHeight:.5,minOpacity:1,tessellationZoomThreshold:10,tessellationTiles:35}))}getAttributes(){return["uniqueId","facetIndex","x","x2","y","y2","fill","stroke","fillOpacity","strokeOpacity","strokeWidth"]}getSupportedChannels(){return[...super.getSupportedChannels(),"x2","y2","fill","stroke","fillOpacity","strokeOpacity","strokeWidth"]}get opaque(){return re(this,"opaque",()=>!this._isRoundedCorners()&&!this._isStroked()&&R(this.encoding.fillOpacity)&&this.encoding.fillOpacity.value==1&&this.properties.minOpacity==1)&&this.unitView.getEffectiveOpacity()==1}fixEncoding(e){return dt(e,"x"),dt(e,"y"),pn(e,this.properties.filled),mn(e,this.properties.filled),delete e.color,delete e.opacity,e}onBeforeSampleAnimation(){}onAfterSampleAnimation(){}_isRoundedCorners(){return["","TopLeft","TopRight","BottomLeft","BottomRight"].map(e=>"cornerRadius"+e).some(e=>this.properties[e]>0)}_isStroked(){const e=this.encoding.strokeWidth;return!(R(e)&&!e.value)}async initializeGraphics(){await super.initializeGraphics();const e=[];this._isRoundedCorners()&&e.push("ROUNDED_CORNERS"),this._isStroked()&&e.push("STROKED"),this.createAndLinkShaders(Hs,Gs,e.map(t=>"#define "+t))}updateGraphicsData(){const e=this.unitView.getCollector(),t=e.getItemCount(),n=new lo({encoders:this.encoders,attributes:this.getAttributes(),numItems:t,buildXIndex:this.properties.buildIndex});n.addBatches(e.facetBatches);const s=n.toArrays();this.rangeMap=s.rangeMap,this.updateBufferInfo(s)}prepareRender(e){var n,s,o,r;super.prepareRender(e);const t=this.properties;O(this.programInfo,{uMinSize:[t.minWidth,t.minHeight],uMinOpacity:t.minOpacity,uCornerRadii:[(n=t.cornerRadiusTopRight)!=null?n:t.cornerRadius,(s=t.cornerRadiusBottomRight)!=null?s:t.cornerRadius,(o=t.cornerRadiusTopLeft)!=null?o:t.cornerRadius,(r=t.cornerRadiusBottomLeft)!=null?r:t.cornerRadius]}),he(this.gl,this.programInfo,this.vertexArrayInfo)}render(e){const t=this.gl;return this.createRenderCallback((n,s)=>{de(t,this.vertexArrayInfo,t.TRIANGLE_STRIP,s,n)},e,()=>this.rangeMap)}findDatumAt(e,t){e=N(e);const n=this.encoders,s=this.unitView.getCollector().facetBatches.get(e),o=n.x.accessor,r=n.x2.accessor;if(s)return s.find(a=>t>=o(a)&&t<r(a))}}var Ao=`precision mediump float;

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
`,To=`const lowp vec4 white = vec4(1.0);
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

`;const U=1<<0,j=1<<1,Ro={};class C{get behavior(){return 0}constructor(){this.children=[],this.parent=void 0,this.completed=!1}reset(){this.completed=!1;for(const e of this.children)e.reset()}initialize(){}_updatePropagator(){this._propagate=Function("children",Ie(this.children.length).map(e=>`const child${e} = children[${e}];`).join(`
`)+`return function propagate(datum) {${Ie(this.children.length).map(e=>`child${e}.handle(datum);`).join(`
`)}}`)(this.children)}setParent(e){this.parent=e}addChild(e){if(e.parent)throw new Error("Cannot add the child! It already has a parent.");return this.children.push(e),e.setParent(this),this._updatePropagator(),this}adopt(e){e.parent&&e.parent.removeChild(e),this.addChild(e)}adoptChildrenOf(e){for(const t of e.children)this.adopt(t)}insertAsParent(e){if(this.isRoot())throw new Error("Cannot insert a new parent for a root node!");e.parent=this.parent,this.parent.children[this.parent.children.indexOf(this)]=e,this.parent._updatePropagator(),this.parent=void 0,e.addChild(this)}removeChild(e){const t=this.children.indexOf(e);if(t>-1)this.children.splice(t,1),e.parent=void 0,this._updatePropagator();else throw new Error("Trying to remove an unknown child node!")}excise(){if(this.isRoot())throw new Error("Cannot excise root node!");if(this.isTerminal())this.parent.removeChild(this);else if(this.children.length==1){const e=this.children[0];e.setParent(this.parent),this.parent.children[this.parent.children.indexOf(this)]=e,this.parent._updatePropagator(),this.setParent(void 0),this.children.length=0}else throw new Error("Cannot excise a node that has multiple children!")}isRoot(){return!this.parent}isBranching(){return this.children.length>1}isTerminal(){return this.children.length==0}visit(e){e(this);for(const t of this.children)t.visit(e);e.afterChildren&&e.afterChildren(this)}subtreeToString(e=0){var n;const t=this.children.map(s=>s.subtreeToString(e+1)).join("");return" ".repeat(e*2)+"* "+((n=/^class ([A-Za-z0-9_]+)/.exec(""+this.constructor))==null?void 0:n[1])+`
`+t}getGlobalObject(){return this.parent?this.parent.getGlobalObject():Ro}handle(e){this._propagate(e)}complete(){this.completed=!0;for(const e of this.children)e.complete()}beginBatch(e){for(const t of this.children)t.beginBatch(e)}_propagate(e){}}function gn(i){return i.type=="file"}function Po(i){return i.type=="facet"}class yn extends C{constructor(e){super();this.k=e.size||500,this.reset()}reset(){super.reset(),this.reservoir=[],this.W=void 0,this.ingester=this._initialIngester}_initialIngester(e){this.reservoir.push(e),this.reservoir.length==this.k&&(this.W=Math.exp(Math.log(Math.random())/this.k),this.i=this.k,this.next=this.i,this.ingester=this._finalIngester,this._setNextStop())}_finalIngester(e){++this.i==this.next&&(this.reservoir[Math.floor(Math.random()*this.k)]=e,this.W*=Math.exp(Math.log(Math.random())/this.k),this._setNextStop())}_setNextStop(){this.next+=Math.floor(Math.log(Math.random())/Math.log(1-this.W))+1}handle(e){this.ingester(e)}complete(){for(const e of this.reservoir)this._propagate(e);super.complete()}}function zo(i,e,t){const n=new yn({type:"sample",size:i});for(const s of e)n.handle(t(s));return n.complete(),n.reservoir}const Fo={};class Lo extends we{constructor(e){super(e);Object.defineProperties(this.defaultProperties,Object.getOwnPropertyDescriptors({x:.5,y:.5,color:"#4c78a8",filled:!0,opacity:1,size:100,semanticScore:0,shape:"circle",strokeWidth:2,fillGradientStrength:0,dx:0,dy:0,angle:0,sampleFacetPadding:.1,semanticZoomFraction:.02}))}getAttributes(){return["inwardStroke","uniqueId","facetIndex","x","y","size","semanticScore","shape","strokeWidth","gradientStrength","dx","dy","fill","stroke","fillOpacity","strokeOpacity","angle"]}getSupportedChannels(){return[...super.getSupportedChannels(),"size","semanticScore","shape","strokeWidth","dx","dy","fill","stroke","fillOpacity","strokeOpacity","angle"]}getDefaultEncoding(){return v(v({},super.getDefaultEncoding()),Fo)}fixEncoding(e){return pn(e,this.properties.filled),mn(e,this.properties.filled),delete e.color,delete e.opacity,e}initializeData(){super.initializeData();const e=this.unitView.getAccessor("semanticScore");e&&(this.sampledSemanticScores=Float32Array.from(zo(1e4,this.unitView.getCollector().getData(),e)),this.sampledSemanticScores.sort((t,n)=>t-n))}async initializeGraphics(){await super.initializeGraphics(),this.createAndLinkShaders(Ao,To)}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);const e=this.properties;O(this.programInfo,{uInwardStroke:e.inwardStroke,uGradientStrength:e.fillGradientStrength,uMaxRelativePointDiameter:1-2*e.sampleFacetPadding})}updateGraphicsData(){const e=this.unitView.getCollector(),t=e.getItemCount(),n=new ho({encoders:this.encoders,attributes:this.getAttributes(),numItems:Math.max(t,this.properties.minBufferSize||0)});n.addBatches(e.facetBatches);const s=n.toArrays();this.rangeMap=s.rangeMap,this.updateBufferInfo(s)}_getGeometricScaleFactor(){const e=Math.pow(2,this.properties.geometricZoomBound||0);return Math.pow(Math.min(1,this.unitView.getZoomLevel()/e),1/3)}_getMaxPointSize(){const e=this.encoders.size;return e.constant?e(null):e.scale.range().reduce((t,n)=>Math.max(t,n))}getSemanticThreshold(){if(this.sampledSemanticScores){const e=Math.max(0,1-this.properties.semanticZoomFraction*this.unitView.getZoomLevel());if(e<=0)return-1/0;if(e>=1)return 1/0;{const t=this.sampledSemanticScores;return Gi(t,e)}}else return-1}prepareRender(e){super.prepareRender(e),O(this.programInfo,{uMaxPointSize:this._getMaxPointSize(),uScaleFactor:this._getGeometricScaleFactor(),uSemanticThreshold:this.getSemanticThreshold()}),he(this.gl,this.programInfo,this.vertexArrayInfo);const t=this.encoders.x;if(t&&!t.constant){const n=zt(t.accessor).left,s=this.unitView.getScaleResolution("x").getScale().domain(),o=Ke(s,null,1.01);this._findIndices=r=>{const a=this.unitView.getCollector().facetBatches.get(r);return[n(a,o[0]),n(a,o[o.length-1])]}}}render(e){const t=this.gl;return this.createRenderCallback((n,s)=>{const[o,r]=this._findIndices?this._findIndices(e.facetId):[0,s],a=r-o;a&&de(t,this.vertexArrayInfo,t.POINTS,a,n+o)},e,()=>this.rangeMap)}}var No=`// Line caps
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
`,Mo=`// Line ending
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
`;class Vo extends we{constructor(e){super(e);this.dashTextureSize=0,Object.defineProperties(this.defaultProperties,Object.getOwnPropertyDescriptors({x2:void 0,y2:void 0,size:1,color:"black",opacity:1,minLength:0,strokeDash:null,strokeDashOffset:0,strokeCap:"butt"}))}getAttributes(){return["uniqueId","facetIndex","x","x2","y","y2","size","color","opacity"]}getSupportedChannels(){return[...super.getSupportedChannels(),"x2","y2","size"]}fixEncoding(e){if(!(e.x&&e.y&&e.x2&&e.y2))if(e.x&&e.x2&&!e.y)e.y={value:.5},e.y2=e.y;else if(e.y&&e.y2&&!e.x)e.x={value:.5},e.x2=e.x;else if(e.x&&!e.y)e.y={value:0},e.y2={value:1},e.x2=e.x;else if(e.y&&!e.x)e.x={value:0},e.x2={value:1},e.y2=e.y;else if(e.x&&e.y&&e.y2)e.x2=e.x;else if(e.y&&e.x&&e.x2)e.y2=e.y;else if(e.y&&e.x)if(!e.x2&&P(e.y)&&e.y.type=="quantitative")e.x2=e.x,e.y2={datum:0};else if(!e.y2&&P(e.x)&&e.x.type=="quantitative")e.y2=e.y,e.x2={datum:0};else throw new Error("A bug!");else throw new Error("Invalid x and y encodings for rule mark: "+JSON.stringify(e));return e}async initializeGraphics(){if(await super.initializeGraphics(),this.properties.strokeDash){const e=this.gl,t=Bo(this.properties.strokeDash);this.dashTexture=ke(e,{mag:e.NEAREST,min:e.NEAREST,internalFormat:e.R8,format:e.RED,src:t,height:1}),this.dashTextureSize=t.length}this.createAndLinkShaders(No,Mo)}updateGraphicsData(){const e=this.unitView.getCollector(),t=e.getItemCount(),n=new co({encoders:this.encoders,attributes:this.getAttributes(),numItems:Math.max(t,this.properties.minBufferSize||0),buildXIndex:this.properties.buildIndex});n.addBatches(e.facetBatches);const s=n.toArrays();this.rangeMap=s.rangeMap,this.updateBufferInfo(s)}prepareRender(e){super.prepareRender(e),O(this.programInfo,{uMinLength:this.properties.minLength,uDashTextureSize:this.dashTextureSize,uStrokeCap:["butt","square","round"].indexOf(this.properties.strokeCap)}),this.dashTexture&&O(this.programInfo,{uDashTexture:this.dashTexture,uStrokeDashOffset:this.properties.strokeDashOffset}),he(this.gl,this.programInfo,this.vertexArrayInfo)}render(e){const t=this.gl;return this.createRenderCallback((n,s)=>de(t,this.vertexArrayInfo,t.TRIANGLE_STRIP,s,n),e,()=>this.rangeMap)}}function Bo(i){if(i.length==0||i.length%2||i.findIndex(o=>Math.round(o)!=o||o<1||o>1e3)>=0)throw new Error("Invalid stroke dash pattern: "+JSON.stringify(i));const e=i.reduce((o,r)=>o+r),t=new Uint8Array(e);let n=!0,s=0;for(let o of i){for(;o;)t[s++]=n&&255||0,o--;n=!n}return t}var $o=`uniform float uSagittaScaleFactor;

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
`,Uo=`in lowp vec4 vColor;
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
`;class Ho extends we{constructor(e){super(e);Object.defineProperties(this.defaultProperties,Object.getOwnPropertyDescriptors({x:0,x2:void 0,y:0,y2:void 0,size:1,color:"black",opacity:1,segments:101,sagittaScaleFactor:1,minSagittaLength:1.5}))}getAttributes(){return["uniqueId","facetIndex","x","x2","y","y2","size","height","color","opacity"]}getSupportedChannels(){return[...super.getSupportedChannels(),"x2","y2","size"]}fixEncoding(e){return e.x||(e.x2=e.x),e.y2||(e.y2=e.y),e}async initializeGraphics(){await super.initializeGraphics(),this.createAndLinkShaders($o,Uo)}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);const e=this.properties;O(this.programInfo,{uSagittaScaleFactor:e.sagittaScaleFactor,uMinSagittaLength:e.minSagittaLength})}updateGraphicsData(){const e=this.unitView.getCollector(),t=e.getItemCount(),n=new fo({encoders:this.encoders,attributes:this.getAttributes(),numItems:t});n.addBatches(e.facetBatches);const s=n.toArrays();s.arrays.strip={data:Go(this.properties.segments),numComponents:2},this.rangeMap=s.rangeMap,this.arrays=Object.fromEntries(Object.entries(s.arrays).map(([o,r])=>[o,D(v({},r),{data:void 0})])),this.updateBufferInfo(s)}render(e){const t=this.gl;return this.createRenderCallback((n,s)=>{this.gl.bindVertexArray(this.vertexArrayInfo.vertexArrayObject);for(const o of Object.entries(this.bufferInfo.attribs)){const[r,a]=o;a.buffer&&this.arrays[r].numComponents&&(a.offset=n*this.arrays[r].numComponents*4)}he(t,this.programInfo,this.bufferInfo),de(t,this.bufferInfo,t.TRIANGLE_STRIP,(this.properties.segments+1)*2,0,s)},e,()=>this.rangeMap)}}function Go(i){let e=0;const t=[];for(;e<=i;e++)t.push(e/i,.5),t.push(e/i,-.5);return t}var qo=`uniform float uSdfNumerator;

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
`,Wo=`uniform sampler2D uTexture;

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
`;const jo={left:-1,center:0,right:1},Xo={top:-1,middle:0,bottom:1,alphabetic:1};class Zo extends we{constructor(e){super(e);Object.defineProperties(this.defaultProperties,Object.getOwnPropertyDescriptors({x:.5,y:.5,x2:void 0,y2:void 0,text:"",size:11,color:"black",opacity:1,font:void 0,fontStyle:void 0,fontWeight:void 0,align:"center",baseline:"middle",dx:0,dy:0,angle:0,fitToBand:!1,squeeze:!0,paddingX:0,paddingY:0,flushX:!0,flushY:!0,logoLetters:!1,viewportEdgeFadeWidthTop:0,viewportEdgeFadeWidthRight:0,viewportEdgeFadeWidthBottom:0,viewportEdgeFadeWidthLeft:0,viewportEdgeFadeDistanceTop:-1/0,viewportEdgeFadeDistanceRight:-1/0,viewportEdgeFadeDistanceBottom:-1/0,viewportEdgeFadeDistanceLeft:-1/0})),this.font=this.properties.font?e.context.fontManager.getFont(this.properties.font,this.properties.fontStyle,this.properties.fontWeight):e.context.fontManager.getDefaultFont()}getAttributes(){return["uniqueId","facetIndex","x","x2","y","y2","color","size","opacity","angle"]}getSupportedChannels(){return[...super.getSupportedChannels(),"x2","y2","size","text","angle"]}fixEncoding(e){for(const t of me)this.properties.fitToBand&&dt(e,t);return e}async initializeGraphics(){await super.initializeGraphics(),this.createAndLinkShaders(qo,Wo)}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);const e=this.properties;O(this.programInfo,{uPaddingX:e.paddingX,uPaddingY:e.paddingY,uFlushX:!!e.flushX,uFlushY:!!e.flushY,uAlign:[jo[e.align],Xo[e.baseline]],uD:[e.dx,-e.dy],uLogoLetter:!!e.logoLetters,uSqueeze:!!e.squeeze,uViewportEdgeFadeWidth:[e.viewportEdgeFadeWidthTop,e.viewportEdgeFadeWidthRight,e.viewportEdgeFadeWidthBottom,e.viewportEdgeFadeWidthLeft],uViewportEdgeFadeDistance:[e.viewportEdgeFadeDistanceTop,e.viewportEdgeFadeDistanceRight,e.viewportEdgeFadeDistanceBottom,e.viewportEdgeFadeDistanceLeft]})}updateGraphicsData(){const e=this.unitView.getCollector(),t=e.getData(),n=this.encoding,s=this.encoders.text.accessor||this.encoders.text;let o=0;const r=n.text.format?A(n.text.format):c=>c;for(const c of t){const d=r(s(c)),h=k(d)?d:d===null?"":""+d;o+=h&&h.length||0}const a=new uo({encoders:this.encoders,attributes:this.getAttributes(),properties:this.properties,fontMetrics:this.font.metrics,numCharacters:Math.max(o,this.properties.minBufferSize||0),buildXIndex:this.properties.buildIndex});a.addBatches(e.facetBatches);const l=a.toArrays();this.rangeMap=l.rangeMap,this.updateBufferInfo(l)}prepareRender(e){super.prepareRender(e);let t=.35;this.properties.logoLetters&&(t/=2),O(this.programInfo,{uTexture:this.font.texture,uSdfNumerator:this.font.metrics.common.base/(this.glHelper.dpr/t)}),he(this.gl,this.programInfo,this.vertexArrayInfo)}render(e){const t=this.gl;return this.createRenderCallback((n,s)=>de(t,this.vertexArrayInfo,t.TRIANGLES,s,n),e,()=>this.rangeMap)}}function Ko(i,e,{spacing:t,devicePixelRatio:n,offset:s,reverse:o}={}){t=t||0,s=s||0;let r=0,a=0;for(const u of i)r+=be(u.px)+(Be(u)?0:t),a+=be(u.grow);r-=t;const l=Math.max(0,e-r),c=n!==void 0?u=>Math.round(u*n)/n:u=>u,d=[],h=[],f=u=>{const m=d.length;if(!m)return;const y=(u?t:0)*(o?-1:1);p-=y;for(let g=0;g<m;g++)h.push({location:p+(g+1)/(m+1)*y,size:0});p+=y,d.length=0};let p=o?Math.max(e,r):0+s;if(i.length==1&&Be(i[0]))return[{location:p,size:0}];for(let u=0;u<i.length;u++){const m=i[u];if(Be(m))d.push(m);else{f(h.length>0);const y=be(m.px)+(a?be(m.grow)/a*l:0);o&&(p-=y),h.push({location:c(p),size:c(y)}),o?p-=t:p+=y+t}}return p+=o?t:-t,f(!1),h}function Yo(i,{spacing:e}={spacing:0}){let t=0;for(const n of i)t+=be(n.px)+(Be(n)?0:e);return Math.max(0,t-e)}class X{constructor(e,t){this.width=e,this.height=t}addPadding(e){return new X({px:(this.width.px||0)+e.width,grow:this.width.grow},{px:(this.height.px||0)+e.height,grow:this.height.grow})}}const xn=Object.freeze({px:0,grow:0}),vn=new X(xn,xn);function Be(i){return!i.px&&!i.grow}function be(i){return i||0}function Jo(i){return i&&(T(i.px)||T(i.grow))}function ft(i){if(Sn(i))throw new Error("parseSizeDef does not accept step-based sizes.");if(Jo(i))return i;if(T(i))return{px:i,grow:0};if(i==="container")return{px:0,grow:1};if(!i)return{px:0,grow:1};throw new Error(`Invalid sizeDef: ${i}`)}class F{constructor(e,t,n,s){this.top=e||0,this.right=t||0,this.bottom=n||0,this.left=s||0}get width(){return this.left+this.right}get height(){return this.top+this.bottom}expand(e){return e<=0?this:new F(this.top+e,this.right+e,this.bottom+e,this.left+e)}add(e){return new F(this.top+e.top,this.right+e.right,this.bottom+e.bottom,this.left+e.left)}static createFromConfig(e){return typeof e=="number"?this.createUniformPadding(e):e?this.createFromRecord(e):ut}static createFromRecord(e){return new F(e.top,e.right,e.bottom,e.left)}static zero(){return ut}static createUniformPadding(e){return new F(e,e,e,e)}}const ut=F.createUniformPadding(0);Object.freeze(ut);const Qo=/^([A-Za-z]+:)?\/\//;function er(i,e){if(e&&Qo.test(e))return e;const t=i();return t&&e?t.endsWith("/")?t+e:t+"/"+e:t!=null?t:e}const $e="VISIT_SKIP",Se="VISIT_STOP",wn=i=>i;class bn{constructor(e,t,n,s){this.context=t,this.parent=n,this.name=e.name||s,this.spec=e,this.resolutions={scale:{},axis:{}},this._broadcastHandlers={},this._capturingInteractionEventListeners={},this._nonCapturingInteractionEventListeners={},cn(this),this.opacityFunction=wn}getPadding(){return this._cache("size/padding",()=>F.createFromConfig(this.spec.padding))}getEffectivePadding(){return this.getPadding()}getSize(){return this._cache("size/size",()=>this.isVisible()?this.getSizeFromSpec().addPadding(this.getPadding()):vn)}getSizeFromSpec(){const e=t=>{var s,o;let n=this.spec[t];if(Sn(n)){const r=n.step,a=(s=this.getScaleResolution(t=="width"?"x":"y"))==null?void 0:s.getScale();if(a){let l=0;if(K(a.type))l=a.domain().length;else if(["locus","index"].includes(a.type)){const d=a.domain();l=z(d)-d[0]}else throw new Error(`Cannot use step-based size with "${a.type}" scale!`);const c=a;return l=Ft(l,c.paddingInner(),c.paddingOuter()),{px:l*r,grow:0}}else throw new Error("Cannot use 'step' size with missing scale!")}else return(o=n&&ft(n))!=null?o:{px:0,grow:1}};return this._cache("size/sizeFromSpec",()=>new X(e("width"),e("height")))}isVisible(){return this.context.isViewVisible(this)}isVisibleInSpec(){var e;return(e=this.spec.visible)!=null?e:!0}getEffectiveOpacity(){var e,t;return this.opacityFunction((t=(e=this.parent)==null?void 0:e.getEffectiveOpacity())!=null?t:1)}getPathString(){return[...this.getAncestors()].map(e=>e.name).reverse().join("/")}*getAncestors(){let e=this;do yield e,e=e.parent;while(e)}handleBroadcast(e){for(const t of this._broadcastHandlers[e.type]||[])t(e)}_addBroadcastHandler(e,t){let n=this._broadcastHandlers[e];n||(n=[],this._broadcastHandlers[e]=n),n.push(t)}handleInteractionEvent(e,t,n){const s=n?this._capturingInteractionEventListeners:this._nonCapturingInteractionEventListeners;for(const o of s[t.type]||[])o(e,t)}addInteractionEventListener(e,t,n){const s=n?this._capturingInteractionEventListeners:this._nonCapturingInteractionEventListeners;let o=s[e];o||(o=[],s[e]=o),o.push(t)}visit(e){try{const t=e(this);if(e.postOrder&&e.postOrder(this),t!==Se)return t}catch(t){throw t.view=this,t}}onScalesResolved(){(!this.opacityFunction||this.opacityFunction===wn)&&(this.opacityFunction=nr(this))}onBeforeRender(){}render(e,t,n={}){}getEncoding(e){const t=this.parent?this.parent.getEncoding(this):{},n=this.spec.encoding||{},s=v(v({},t),n);for(const[o,r]of Object.entries(s))r===null&&delete s[o];return s}getFacetAccessor(e){if(this.parent)return this.parent.getFacetAccessor(this)}getFacetFields(e){var n;const t=this.getEncoding().sample;return ue(t)?[t.field]:(n=this.parent)==null?void 0:n.getFacetFields(this)}getSampleFacetTexture(){}_getResolution(e,t){e=se(e);let n=this;do{const s=n.resolutions[t][e];if(s)return s;n=n.parent}while(n)}getScaleResolution(e){return this._getResolution(e,"scale")}getAxisResolution(e){return this._getResolution(e,"axis")}getBaseUrl(){return er(()=>{var e;return(e=this.parent)==null?void 0:e.getBaseUrl()},this.spec.baseUrl)}getDynamicDataSource(){throw new Error("The view does not provide dynamic data!")}isPickingSupported(){return!0}_cache(e,t){return re(this,e,t)}_invalidateCacheByPrefix(e,t="self"){switch(t){case"self":Me(this,e);break;case"ancestors":for(const n of this.getAncestors())Me(n,e);break;case"progeny":this.visit(n=>Me(n,e));break}}invalidateSizeCache(){this._invalidateCacheByPrefix("size/","ancestors")}}function tr(i){return"unitsPerPixel"in i}function nr(i){const e=i.spec.opacity;if(e!==void 0){if(T(e))return t=>t*e;if(tr(e)){const t=o=>{var a;const r=(a=i.getScaleResolution(o))==null?void 0:a.getScale();if(["linear","index","locus"].includes(r==null?void 0:r.type))return r},n=e.channel?t(e.channel):t("x")||t("y");if(!n)throw new Error("Cannot find a resolved quantitative scale for dynamic opacity!");const s=qi().domain(e.unitsPerPixel).range(e.values).clamp(!0);return o=>{const r=1e3,a=Oe(n.domain())/r;return s(a)*o}}}return t=>t}const Sn=i=>!!(i==null?void 0:i.step);class H extends bn{constructor(e,t,n,s){super(e,t,n,s);this.spec=e}*[Symbol.iterator](){}replaceChild(e,t){throw new Error("Not implemented")}visit(e){let t;try{t=e(this)}catch(n){throw n.view=this,n}if(t===Se)return t;if(t!==$e){e.beforeChildren&&e.beforeChildren(this);for(const n of this){const s=n.visit(e);if(s===Se)return s}e.afterChildren&&e.afterChildren(this),e.postOrder&&e.postOrder(this)}}findDescendantByPath(e){for(const t of this)if(t.name===e[0]){if(e.length==1)return t;if(t instanceof H)return t.findDescendantByPath(e.slice(1))}}findChildByName(e){for(const t of this)if(t.name===e)return t}getConfiguredResolution(e,t){var n,s;return(s=(n=this.spec.resolve)==null?void 0:n[t])==null?void 0:s[e]}getDefaultResolution(e,t){return"shared"}getConfiguredOrDefaultResolution(e,t){var n,s;return(s=(n=this.getConfiguredResolution(e,t))!=null?n:this.getConfiguredResolution("default",t))!=null?s:this.getDefaultResolution(e,t)}}function Ue(i,e,t){if(t=t||[],i.some(r=>r===null)){if(i.every(r=>r===null))return null;throw console.warn(i),new Error("Cannot merge objects with nulls!")}const n={},s=(r,a)=>r===a||ae(r)&&ae(a)||ae(r)&&a===!0||r===!0&&W(a),o=r=>{for(let a in r){const l=r[a];if(!t.includes(a)&&l!==void 0)if(n[a]!==void 0&&!s(n[a],l))console.warn(`Conflicting property ${a} of ${e}: (${JSON.stringify(n[a])} and ${JSON.stringify(r[a])}). Using ${JSON.stringify(n[a])}.`);else{const c=n[a];if(ae(c))ae(l)&&(n[a]=Ue([c,l],a));else if(ae(l)){if(!(c===!0||c===void 0))throw new Error("Bug in merge! Target is: "+c);n[a]=Ue([{},l],a)}else n[a]=l}}};for(const r of i)o(r);return n}function ae(i){return W(i)&&!Array.isArray(i)}/*!
 * Adapted from vega-encode:
 * https://github.com/vega/vega/blob/master/packages/vega-encode/src/ticks.js
 *
 * Copyright (c) 2015-2018, University of Washington Interactive Data Lab
 * All rights reserved.
 *
 * BSD-3-Clause License: https://github.com/vega/vega-lite/blob/master/LICENSE
 */function En(i,e,t){return T(e)&&t!=null&&(e=Math.min(e,~~(Oe(i.domain())/t)||1)),W(e)&&(e=e.interval),e}function _n(i,e,t){var n=i.range(),s=Math.floor(n[0]),o=Math.ceil(fe(n));if(s>o&&(n=o,o=s,s=n),e=e.filter(function(a){return a=i(a),s<=a&&a<=o}),t>0&&e.length>1){for(var r=[e[0],fe(e)];e.length>t&&e.length>=3;)e=e.filter(function(a,l){return!(l%2)});e.length<3&&(e=r)}return e}function ir(i,e){return i.bins?_n(i,sr(i.bins,e)):i.ticks?i.ticks(e):i.domain()}function sr(i,e){var t=i.length,n=~~(t/(e||t));return n<2?i.slice():i.filter(function(s,o){return!(o%n)})}function or(i,e,t){var n=i.tickFormat?i.tickFormat(e,t):t?A(t):String;if(Lt(i.type)){var s=ar(t);n=i.bins?s:rr(n,s)}return n}function rr(i,e){return function(t){return i(t)?e(t):""}}function ar(i){var e=Wi(i||",");if(e.precision==null){switch(e.precision=12,e.type){case"%":e.precision-=2;break;case"e":e.precision-=1;break}return lr(A(e),A(".1f")(1)[1])}else return A(e)}function lr(i,e){return function(t){var n=i(t),s=n.indexOf(e),o,r;if(s<0)return n;for(o=cr(n,s),r=o<n.length?n.slice(o):"";--o>s;)if(n[o]!=="0"){++o;break}return n.slice(0,o)+r}}function cr(i,e){var t=i.lastIndexOf("e"),n;if(t>0)return t;for(t=i.length;--t>e;)if(n=i.charCodeAt(t),n>=48&&n<=57)return t+1}/*!
 * Adapted from vega-encode:
 * https://github.com/vega/vega/blob/master/packages/vega-encode/src/Scale.js
 *
 * Copyright (c) 2015-2018, University of Washington Interactive Data Lab
 * All rights reserved.
 *
 * BSD-3-Clause License: https://github.com/vega/vega-lite/blob/master/LICENSE
 */const hr="locus",dr="index";var fr=5;function ur(i){const e=i.type;return!i.bins&&(e===Ye||e===Nt||e===Mt)}function Cn(i){return L(i)&&![Ae,dr,hr].includes(i)}function In(i){return i||{warn:(e,...t)=>console.warn(e,...t)}}var pr=ji(["set","modified","clear","type","scheme","schemeExtent","schemeCount","domain","domainMin","domainMid","domainMax","domainRaw","domainImplicit","nice","zero","bins","range","rangeStep","round","reverse","interpolate","interpolateGamma","zoom","fp64","name"]);function kn(i,e,t){t=In(t);for(const n in i)if(!pr[n]){if(n==="padding"&&Cn(e.type))continue;Y(e[n])?e[n](i[n]):t.warn("Unsupported scale property: "+n)}Sr(e,i,br(e,i,xr(e,i,t)))}function mr(i,e){const t=gr(i),n=De(t);if(!n)throw new Error("Unknown scale type: "+t);const s=n();return kn(i,s,e),s}function gr(i){var e=i.type,t="",n;return e===Ae?Ae+"-"+Ye:(yr(i)&&(n=i.rawDomain?i.rawDomain.length:i.domain?i.domain.length+ +(i.domainMid!=null):0,t=n===2?Ae+"-":n===3?hs+"-":""),(t+e||Ye).toLowerCase())}function yr(i){const e=i.type;return L(e)&&e!==Xi&&e!==Zi&&(i.scheme||i.range&&i.range.length&&i.range.every(k))}function xr(i,e,t){if(!i.domain)return 0;t=In(t);var n=vr(i,e.domainRaw,t);if(n>-1)return n;var s=e.domain,o=i.type,r=e.zero||e.zero===void 0&&ur(i),a,l;return s?(Cn(o)&&e.padding&&s[0]!==fe(s)&&(s=wr(o,s,e.range,e.padding,e.exponent,e.constant)),(r||e.domainMin!=null||e.domainMax!=null||e.domainMid!=null)&&(a=(s=s.slice()).length-1||1,r&&(s[0]>0&&(s[0]=0),s[a]<0&&(s[a]=0)),e.domainMin!=null&&(s[0]=e.domainMin),e.domainMax!=null&&(s[a]=e.domainMax),e.domainMid!=null&&(l=e.domainMid,(l<s[0]||l>s[a])&&t.warn("Scale domainMid exceeds domain min or max.",l),s.splice(a,0,l))),i.domain(On(o,s,t)),o===Vt&&i.unknown(e.domainImplicit?Ki:void 0),e.nice&&i.nice&&i.nice(e.nice!==!0&&En(i,e.nice)||null),s.length):0}function vr(i,e,t){return e?(i.domain(On(i.type,e,t)),e.length):-1}function wr(i,e,t,n,s,o){var r=Math.abs(fe(t)-t[0]),a=r/(r-2*n),l=i===Yi?Bt(e,null,a):i===Mt?Je(e,null,a,.5):i===Nt?Je(e,null,a,s||1):i===Ji?Qi(e,null,a,o||1):Ke(e,null,a);return e=e.slice(),e[0]=l[0],e[e.length-1]=l[1],e}function On(i,e,t){if(Lt(i)){var n=Math.abs(e.reduce(function(s,o){return s+(o<0?-1:o>0?1:0)},0));n!==e.length&&t.warn("Log scale domain includes zero: "+es(e))}return e}function br(i,e,t){let n=e.bins;if(n&&!$(n)){const s=(n.start==null||n.stop==null)&&i.domain(),o=n.start==null?s[0]:n.start,r=n.stop==null?fe(s):n.stop,a=n.step;a||Te("Scale bins parameter missing step property."),n=Ie(o,r+a,a)}return n?i.bins=n:i.bins&&delete i.bins,i.type===$t&&(n?!e.domain&&!e.domainRaw&&(i.domain(n),t=n.length):i.bins=i.domain()),t}function Sr(i,e,t){var n=i.type,s=e.round||!1,o=e.range;if(e.rangeStep!=null)o=Er(n,e,t);else if(e.scheme&&(o=_r(n,e,t),Y(o))){if(i.interpolator)return i.interpolator(o);Te(`Scale type ${n} does not support interpolating color schemes.`)}if(o&&Ce(n))return i.interpolator(Ze(pt(o,e.reverse),e.interpolate,e.interpolateGamma));o&&e.interpolate&&i.interpolate?i.interpolate(is(e.interpolate,e.interpolateGamma)):Y(i.round)?i.round(s):Y(i.rangeRound)&&i.interpolate(s?ss:os),o&&i.range(pt(o,e.reverse))}function Er(i,e,t){i!==rs&&i!==Ut&&Te("Only band and point scales support rangeStep.");var n=(e.paddingOuter!=null?e.paddingOuter:e.padding)||0,s=i===Ut?1:(e.paddingInner!=null?e.paddingInner:e.padding)||0;return[0,e.rangeStep*Ft(t,s,n)]}function _r(i,e,t){var n=e.schemeExtent,s,o;return $(e.scheme)?o=Ze(e.scheme,e.interpolate,e.interpolateGamma):(s=e.scheme.toLowerCase(),o=Pt(s),o||Te(`Unrecognized scheme name: ${e.scheme}`)),t=i===as?t+1:i===$t?t-1:i===ls||i===cs?+e.schemeCount||fr:t,Ce(i)?Dn(o,n,e.reverse):Y(o)?ns(Dn(o,n),t):i===Vt?o:o.slice(0,t)}function Dn(i,e,t){return Y(i)&&(e||t)?ts(i,pt(e||[0,1],t)):i}function pt(i,e){return e?i.slice().reverse():i}const An=A(",d");function Cr(i,e){return i.chrom+":"+An(Math.floor(i.pos+1))+"-"+(i.chrom!=e.chrom?e.chrom+":":"")+An(Math.ceil(e.pos))}const Ir="https://genomespy.app/data/genomes/";class kr{constructor(e){if(this.config=e,!this.config.contigs&&typeof this.config.name!="string")throw new Error("No name has been defined for the genome assembly!");this.chromosomes=[],this.cumulativeChromPositions=new Map,this.chromosomesByName=new Map,this.startByIndex=[],this.totalSize=0,this.config.contigs&&this.setChromSizes(this.config.contigs)}get name(){return this.config.name}async load(e){if(!this.config.contigs){this.config.baseUrl?this.baseUrl=/^http(s)?/.test(this.config.baseUrl)?this.config.baseUrl:e+"/"+this.config.baseUrl:this.baseUrl=Ir;try{this.setChromSizes(Or(await Re({baseURL:this.baseUrl}).load(`${this.config.name}/${this.name}.chrom.sizes`)))}catch(t){throw new Error(`Could not load chrom sizes: ${t.message}`)}}}setChromSizes(e){let t=0;this.startByIndex=[0];for(let n=0;n<e.length;n++){this.startByIndex.push(t);const s=e[n].size,o=D(v({},e[n]),{continuousStart:t,continuousEnd:t+s,continuousInterval:[t,t+s],index:n,number:n+1,odd:!(n&1)});this.chromosomes.push(o);const r=o.name.replace(/^chr/i,"");for(const a of["chr"+r,"CHR"+r,"Chr"+r,o.number,""+o.number,r,o.name])this.cumulativeChromPositions.set(a,t),this.chromosomesByName.set(a,o);t+=o.size}this.totalSize=t}getExtent(){return[0,this.totalSize]}toContinuous(e,t){let n=this.cumulativeChromPositions.get(e);if(n===void 0)throw new Error("Unknown chromosome/contig: "+e);return n+ +t}toChromosome(e){if(e>=this.totalSize)return;e=Math.floor(e);const t=fs(this.startByIndex,e)-1;if(t>0&&t<=this.chromosomes.length)return this.chromosomes[t-1]}toChromosomal(e){const t=this.toChromosome(e);if(!!t)return{chrom:t.name,pos:Math.floor(e)-t.continuousStart}}getChromosome(e){return this.chromosomesByName.get(e)}formatInterval(e){return Cr(...this.toChromosomalInterval(e))}toChromosomalInterval(e){const t=this.toChromosomal(e[0]+.5),n=this.toChromosomal(e[1]-.5);return n.pos+=1,[t,n]}toContinuousInterval(e){var s,o,r;let[t,n]=e;return n||(n=t),[this.toContinuous(t.chrom,(s=t.pos)!=null?s:0),this.toContinuous(n.chrom,(r=n.pos)!=null?r:(o=this.chromosomesByName.get(n.chrom))==null?void 0:o.size)]}parseInterval(e){const t=e.match(/^(chr[0-9A-Z]+):([0-9,]+)-(?:(chr[0-9A-Z]+):)?([0-9,]+)$/);if(t){const n=t[1],s=t[3]||n,o=parseInt(t[2].replace(/,/g,"")),r=parseInt(t[4].replace(/,/g,""));return[this.toContinuous(n,o-1),this.toContinuous(s,r)]}}}function Or(i){return ds(i).filter(e=>/^chr[0-9A-Z]+$/.test(e[0])).map(([e,t])=>({name:e,size:parseInt(t)}))}function Tn(i){return W(i)&&"chrom"in i}function Dr(i){return i.every(Tn)}class Ee extends Array{constructor(){super();this.type=void 0}extend(e){return this}extendAll(e){if(e instanceof Ee&&e.type!=this.type)throw new Error(`Cannot combine different types of domains: ${this.type} and ${e.type}`);for(const t of e)this.extend(t);return this}extendAllWithAccessor(e,t){for(const n of e)this.extend(t(n));return this}}class mt extends Ee{constructor(){super();this.type="quantitative"}extend(e){return e==null||Number.isNaN(e)?this:(e=+e,this.length?e<this[0]?this[0]=e:e>this[1]&&(this[1]=e):(this.push(e),this.push(e)),this)}}class Rn extends Ee{constructor(){super();this.type="ordinal",this.uniqueValues=new Set}extend(e){return e==null||Number.isNaN(e)?this:(this.uniqueValues.has(e)||(this.uniqueValues.add(e),this.push(e)),this)}}class Pn extends Rn{constructor(){super();this.type="nominal"}}class Ar extends Ee{constructor(e){super();let t=0;for(let n=1;n<e.length;n++)t+=Math.sign(e[n]-e[n-1]);if(Math.abs(t)!=e.length-1)throw new Error("Piecewise domain must be strictly increasing or decreasing: "+JSON.stringify(e));e.forEach(n=>this.push(n))}extend(e){if(this.includes(e))return this;throw new Error("Piecewise domains are immutable and cannot be unioned!")}}const zn={quantitative:mt,index:mt,locus:mt,nominal:Pn,ordinal:Rn};function Fn(i,e){if(i=="quantitative"&&Tr(e)){const t=new Ar(e);return t.type=i,t}else if(zn[i]){const t=new zn[i];return t.type=i,e&&t.extendAll(e),t}throw new Error("Unknown type: "+i)}function Tr(i){return i&&i.length>0&&i.length!=2&&i.every(e=>typeof e=="number")}const Ln="quantitative",Nn="ordinal",Mn="nominal",gt="locus",Rr="index";class Pr{constructor(e){this.channel=e,this.members=[],this.type=null,this._zoomExtent=void 0,this._domainListeners=new Set,this.name=void 0,this._scale=void 0}addEventListener(e,t){if(e!="domain")throw new Error("Unsupported event type: "+e);this._domainListeners.add(t)}removeEventListener(e,t){if(e!="domain")throw new Error("Unsupported event type: "+e);this._domainListeners.delete(t)}_notifyDomainListeners(){for(const e of this._domainListeners.values())e({type:"domain",scaleResolution:this})}pushUnitView(e,t){var r;const n=nt(e,t),s=n.type,o=(r=n==null?void 0:n.scale)==null?void 0:r.name;if(o){if(this.name!==void 0&&o!=this.name)throw new Error(`Shared scales have conflicting names: "${o}" vs. "${this.name}"!`);this.name=o}if(!this.type)this.type=s;else if(s!==this.type&&!ye(t))throw new Error(`Can not use shared scale for different data types: ${this.type} vs. ${s}. Use "resolve: independent" for channel ${this.channel}`);this.members.push({view:e,channel:t})}isExplicitDomain(){return!!this.getConfiguredDomain()}_getMergedScaleProps(){return re(this,"mergedScaleProps",()=>{const e=this.members.map(t=>nt(t.view,t.channel).scale).filter(t=>t!==void 0);return Ue(e,"scale",["domain"])})}getScaleProps(){return re(this,"scaleProps",()=>{var s,o;const e=this._getMergedScaleProps();if(e===null||e.type=="null")return{type:"null"};const t=v(v({},this._getDefaultScaleProperties(this.type)),e);t.type||(t.type=zr(this.channel,this.type));const n=this.getInitialDomain();return n&&n.length>0?t.domain=n:K(t.type)&&(t.domain=new Pn),!t.domain&&t.domainMid!==void 0&&(t.domain=[(s=t.domainMin)!=null?s:0,(o=t.domainMax)!=null?o:1]),t.type==gt&&!("fp64"in t)&&(t.fp64=!0),this.channel=="y"&&K(t.type)&&t.reverse==null&&(t.reverse=!0),t.range&&t.scheme&&delete t.scheme,!("zoom"in t)&&["index","locus"].includes(t.type)&&(t.zoom=!0),Fr(t,this.channel),t})}getInitialDomain(){var e;return(e=this.getConfiguredDomain())!=null?e:this.type==gt?this.getGenome().getExtent():this.getDataDomain()}getConfiguredDomain(){return this._reduceDomains(e=>ye(e.channel)?void 0:e.view.getConfiguredDomain(e.channel))}getDataDomain(){return this._reduceDomains(e=>ye(e.channel)?void 0:e.view.extractDataDomain(e.channel))}reconfigure(){if(this._scale&&this._scale.type!="null"){ln(this,"scaleProps");const e=this.getScaleProps();kn(e,this._scale),L(this._scale.type)&&(this._zoomExtent=this._getZoomExtent())}}getScale(){if(this._scale)return this._scale;const e=this.getScaleProps(),t=mr(e);return this._scale=t,As(t)&&t.genome(this.getGenome()),t.fp64=!!e.fp64,L(t.type)&&(this._zoomExtent=this._getZoomExtent()),t}getDomain(){return this.getScale().domain()}getComplexDomain(){var e,t;return(t=(e=this.getGenome())==null?void 0:e.toChromosomalInterval(this.getDomain()))!=null?t:this.getDomain()}isZoomed(){return this.isZoomable()&&Zt(this.getInitialDomain(),this.getDomain())}isZoomable(){if(!Yt(this.channel))return!1;const e=this.getScale().type;return["linear","locus","index","log","pow","sqrt"].includes(e)?!!this.getScaleProps().zoom:!1}zoom(e,t,n){if(!this.isZoomable())return!1;const s=this.getScale(),o=s.domain();let r=[...o];const a=s.invert(t);switch(this.getScaleProps().reverse&&(n=-n),s.type){case"linear":case"index":case"locus":r=ms(r,n||0),r=Ke(r,a,e);break;case"log":r=ps(r,n||0),r=Bt(r,a,e);break;case"pow":case"sqrt":{const l=s;r=us(r,n||0,l.exponent()),r=Je(r,a,e,l.exponent());break}default:throw new Error("Zooming is not implemented for: "+s.type)}return this._zoomExtent&&(r=gs(r,this._zoomExtent[0],this._zoomExtent[1])),[0,1].some(l=>r[l]!=o[l])?(s.domain(r),this._notifyDomainListeners(),!0):!1}async zoomTo(e,t=!1){var a;if(_e(t)&&(t=t?700:0),!this.isZoomable())throw new Error("Not a zoomable scale!");const n=this.fromComplexInterval(e),s=(a=this.members[0])==null?void 0:a.view.context.animator,o=this.getScale(),r=o.domain();if(t>0&&r.length==2){const l=r[1]-r[0],c=r[0]+l/2,d=n[1]-n[0],h=n[0]+d/2,f=ys([c,0,l],[h,0,d]).rho(.7);await s.transition({duration:t/1e3*f.duration,easingFunction:xs,onUpdate:p=>{const[u,,m]=f(p);o.domain([u-m/2,u+m/2]),this._notifyDomainListeners()}}),o.domain(n),this._notifyDomainListeners()}else o.domain(n),s==null||s.requestRender(),this._notifyDomainListeners()}getZoomLevel(){return this.isZoomable()?Oe(this._zoomExtent)/Oe(this.getScale().domain()):1}_getZoomExtent(){const e=this.getScaleProps(),t=e.zoom;if(Lr(t)&&$(t.extent))return this.fromComplexInterval(t.extent);if(t)return e.type=="locus"?this.getGenome().getExtent():this._scale.domain()}_getDefaultScaleProperties(e){const t=this.channel,n={};return this.isExplicitDomain()&&(n.zero=!1),ge(t)?n.nice=!this.isExplicitDomain():J(t)?n.scheme=e==Mn?"tableau10":e==Nn?"blues":"viridis":Le(t)?n.range=Qt(t):t=="size"?n.range=[0,400]:t=="angle"&&(n.range=[0,360]),n}getGenome(){var t;if(this.type!=="locus")return;const e=(t=this.members[0].view.context.genomeStore)==null?void 0:t.getGenome();if(!e)throw new Error("No genome has been defined!");return e}invertToComplex(e){const t=this.getScale();if("invert"in t){const n=t.invert(e);return this.toComplex(n)}else throw new Error("The scale does not support inverting!")}toComplex(e){const t=this.getGenome();return t?t.toChromosomal(e):e}fromComplex(e){return Tn(e)?this.getGenome().toContinuous(e.chrom,e.pos):e}fromComplexInterval(e){return this.type==="locus"&&Dr(e)?this.getGenome().toContinuousInterval(e):e}_getViewPaths(){return this.members.map(e=>e.view.getPathString()).join(", ")}_reduceDomains(e){const t=this.members.map(e).filter(n=>!!n);if(t.length)return t.reduce((n,s)=>n.extendAll(s))}}function zr(i,e){if(e==Rr||e==gt){if(Yt(i))return e;throw new Error(`${i} does not support ${e} data type. Only positional channels do.`)}const t={x:["band","band","linear"],y:["band","band","linear"],size:[void 0,"point","linear"],opacity:[void 0,"point","linear"],fillOpacity:[void 0,"point","linear"],strokeOpacity:[void 0,"point","linear"],color:["ordinal","ordinal","linear"],fill:["ordinal","ordinal","linear"],stroke:["ordinal","ordinal","linear"],strokeWidth:[void 0,void 0,"linear"],shape:["ordinal","ordinal",void 0],dx:[void 0,void 0,"null"],dy:[void 0,void 0,"null"],angle:[void 0,void 0,"linear"]},s=["uniqueId","facetIndex","semanticScore","search","text","sample"].includes(i)?"null":t[i]?t[i][[Mn,Nn,Ln].indexOf(e)]:e==Ln?"linear":"ordinal";if(s===void 0)throw new Error(`Channel "${i}" is not compatible with "${e}" data type. Use of a proper scale may be needed.`);return s}function Fr(i,e){ge(e)&&i.type!=="ordinal"&&(i.range=[0,1]),e=="opacity"&&L(i.type)&&(i.clamp=!0)}function Lr(i){return W(i)}function yt(...i){for(const e of i)if(e!==void 0)return e}class Nr{constructor(e){this.channel=e,this.members=[]}get scaleResolution(){var e;return(e=z(this.members))==null?void 0:e.view.getScaleResolution(this.channel)}pushUnitView(e,t){const n=e.getScaleResolution(this.channel);if(!n)throw new Error("Cannot find a scale resolution!");if(this.scaleResolution&&n!==this.scaleResolution)throw new Error("Shared axes must have a shared scale!");this.members.push({view:e,channel:t})}getAxisProps(){return re(this,"axisProps",()=>{const e=this.members.map(t=>{const n=t.view.mark.encoding[t.channel];return"axis"in n&&n.axis});return e.length>0&&e.some(t=>t===null)?null:Ue(e.filter(t=>t!==void 0),"axis",["title"])})}getTitle(){const e=o=>{var a;const r=nt(o.view,o.channel);if(!R(r))return{member:o,explicitTitle:yt((a=r.axis)==null?void 0:a.title,r.title),implicitTitle:yt(ue(r)?r.field:void 0,it(r)?r.expr:void 0)}},t=this.members.map(e),n=t.filter(o=>{var r;if(ye(o.member.channel)&&!o.explicitTitle){const a=se(o.member.channel);return((r=t.find(l=>l.member.view==o.member.view&&l.member.channel==a))==null?void 0:r.explicitTitle)===void 0}return!0}),s=new Set(n.map(o=>yt(o.explicitTitle,o.implicitTitle)).filter(k));return s.size?[...s].join(", "):null}}class Vn extends bn{constructor(e,t,n,s){super(e,t,n,s);this.spec=e}}class xt extends H{constructor(e,t,n,s){super(e,t,n,s);this.spec=e,this.children=(e.layer||[]).map((o,r)=>{if(bt(o)||wt(o))return t.createView(o,this,"layer"+r);throw new Error("LayerView accepts only unit or layer specs as children!")})}*[Symbol.iterator](){for(const e of this.children)yield e}render(e,t,n={}){if(!!this.isVisible()){t=t.shrink(this.getPadding()),e.pushView(this,t);for(const s of this.children)s.render(e,t,n);e.popView(this)}}}function G(i){return()=>i}class M{static create(e,t,n,s){return new M(G(e),G(t),G(n),G(s))}_offset(e,t){const n=this["_"+e];if(t===0)return n;switch(typeof t){case"number":return()=>n()+t;case"function":return()=>n()+t();default:throw new Error("Not a number of function")}}_passThrough(e){return this._offset(e,0)}constructor(e,t,n,s){this._x=e,this._y=t,this._width=n,this._height=s}get x(){return this._x()}get y(){return this._y()}get width(){return this._width()}get height(){return this._height()}get x2(){return this._x()+this._width()}get y2(){return this._y()+this._height()}equals(e){return e?this===e||this.x===e.x&&this.y===e.y&&this.width===e.width&&this.height===e.height:!1}modify(e){if(!Object.keys(e).length)return this;const t=n=>{const s=e[n];return typeof s=="number"?G(s):typeof s=="function"?s:this._passThrough(n)};return new M(t("x"),t("y"),t("width"),t("height"))}translate(e,t){return e===0&&t===0?this:new M(this._offset("x",e),this._offset("y",t),this._passThrough("width"),this._passThrough("height"))}translateBy(e){return this.translate(e.x,e.y)}expand(e,t=1){return e.left==0&&e.top==0&&e.right==0&&e.bottom==0?this:new M(e.left?this._offset("x",-e.left*t):this._passThrough("x"),e.top?this._offset("y",-e.top*t):this._passThrough("y"),e.width?this._offset("width",e.width*t):this._passThrough("width"),e.height?this._offset("height",e.height*t):this._passThrough("height"))}shrink(e){return this.expand(e,-1)}intersect(e){return this===e?this:new M(()=>Math.max(this.x,e.x),()=>Math.max(this.y,e.y),()=>Math.min(this.x2,e.x2)-Math.max(this.x,e.x),()=>Math.min(this.y2,e.y2)-Math.max(this.y,e.y))}isDefined(){return this.width>=0&&this.height>=0}flatten(){return new M(G(this.x),G(this.y),G(this.width),G(this.height))}containsPoint(e,t){return e>=this.x&&e<this.x2&&t>=this.y&&t<this.y2}normalizePoint(e,t){return{x:(e-this.x)/this.width,y:(t-this.y)/this.height}}}class vt extends H{constructor(e,t,n,s){super(e,t,n,s);this.spec=e,"spacing"in this.spec||(this.spec.spacing=10),this.mainDimension=St(e)?"width":"height",this.secondaryDimension=this.mainDimension=="width"?"height":"width";const o=St(e)?e.hconcat:Un(e)?e.vconcat:e.concat;this.children=o.map((r,a)=>t.createView(r,this,"concat"+a))}getEffectivePadding(){return this._cache("size/effectivePadding",()=>{const e=this.children.filter(o=>o.isVisible());if(!e.length)return this.getPadding();const t=e.map(o=>o.getEffectivePadding()).map(o=>this.mainDimension=="height"?[o.left,o.right]:[o.top,o.bottom]),n=Bn(t),s=this.mainDimension=="height"?new F(e[0].getEffectivePadding().top,n[1],z(e).getEffectivePadding().bottom,n[0]):new F(n[0],e[0].getEffectivePadding().left,n[1],z(e).getEffectivePadding().right);return this.getPadding().add(s)})}getSize(){return this._cache("size",()=>{let e;if(this.spec[this.mainDimension])e=ft(this.spec[this.mainDimension]);else{const n=this.children.filter(s=>s.isVisible()).map(s=>s.getSize()[this.mainDimension]);e={grow:n.map(s=>+s.grow).reduce((s,o)=>s+o,0),px:Yo(n,{spacing:this.spec.spacing})}}const t=this.spec[this.secondaryDimension]&&ft(this.spec[this.secondaryDimension])||{grow:1};return(this.mainDimension=="height"?new X(t,e):new X(e,t)).addPadding(this.getPadding())})}render(e,t,n={}){if(!this.isVisible())return;t=t.shrink(this.getPadding()),e.pushView(this,t);const s=this.children.filter(c=>c.isVisible()),o=s.map(c=>c.getSize()[this.mainDimension]),r=Ko(o,t[this.mainDimension],{spacing:this.spec.spacing,devicePixelRatio:this.context.glHelper.dpr}),a=s.map(c=>c.getEffectivePadding()).map(c=>this.mainDimension=="height"?[c.left,c.right]:[c.top,c.bottom]),l=Bn(a);for(let c=0;c<s.length;c++){const d=s[c],h=r[c],f=l[0]-a[c][0],p=l[1]-a[c][1],u=t[this.secondaryDimension]-f-p,m=this.mainDimension=="height"?new M(()=>t.x+f,()=>t.y+h.location,()=>u,()=>h.size):new M(()=>t.x+h.location,()=>t.y+f,()=>h.size,()=>u);d.render(e,m,n)}e.popView(this)}*[Symbol.iterator](){for(const e of this.children)yield e}replaceChild(e,t){const n=this.children.indexOf(e);if(n>=0)this.children[n]=t;else throw new Error("Not my child view!")}addChildBySpec(e){const t=this.children.length,n=this.context.createView(e,this,"concat"+t);return this.children.push(n),n}addChild(e){const t=this.children.length;return e.name||(e.name="concat"+t),e.parent=this,this.children.push(e),e}getDefaultResolution(e,t){return"independent"}}function Bn(i){return[0,1].map(e=>i.map(t=>t[e]).reduce((t,n)=>Math.max(t,n),0))}class Mr{constructor(){this.types=[];const e=t=>(n,s,o,r)=>{var a;return new t(n,s,o,(a=n.name)!=null?a:r)};this.addViewType(Vr,e(Vn)),this.addViewType(bt,e(xt)),this.addViewType(wt,e(V)),this.addViewType(Un,e(vt)),this.addViewType(St,e(vt)),this.addViewType(Br,e(vt))}addViewType(e,t){this.types.push({specGuard:e,factory:t})}createView(e,t,n,s){const o=this.types.find(r=>r.specGuard(e));if(o)return o.factory(e,t,n,s!=null?s:"unnamed");throw new Error("Invalid spec, cannot figure out the view type from the properties: "+JSON.stringify([...Object.keys(e)]))}isViewSpec(e){const t=this.types.filter(n=>n.specGuard(e));if(t.length>1)throw new Error("Ambiguous spec. Cannot create a view!");return t.length==1}}function wt(i){return"mark"in i&&(k(i.mark)||W(i.mark))}function bt(i){return"layer"in i&&W(i.layer)}function $n(i){return i&&(wt(i)||bt(i))&&"aggregateSamples"in i}function Vr(i){return"import"in i}function Un(i){return"vconcat"in i&&$(i.vconcat)}function St(i){return"hconcat"in i&&$(i.hconcat)}function Br(i){return"concat"in i&&$(i.concat)}const $r={point:Lo,rect:Do,rule:Vo,link:Ho,text:Zo};class V extends H{constructor(e,t,n,s){super(e,t,n,s);this.spec=e;const o=$r[this.getMarkType()];if(o)this.mark=new o(this);else throw new Error(`No such mark: ${this.getMarkType()}`);this.sampleAggregateViews=[],this._initializeAggregateViews(),this.coords=void 0}*[Symbol.iterator](){for(const e of this.sampleAggregateViews)yield e}replaceChild(e,t){const n=this.sampleAggregateViews.indexOf(e);if(n>=0)this.sampleAggregateViews[n]=t;else throw new Error("Not my child view!")}render(e,t,n={}){!this.isVisible()||(t=t.shrink(this.getPadding()),this.coords=t,e.pushView(this,t),e.renderMark(this.mark,n),e.popView(this))}getMarkType(){return typeof this.spec.mark=="object"?this.spec.mark.type:this.spec.mark}resolve(e){var n;const t=this.mark.encoding;for(const[s,o]of Object.entries(t)){if(!P(o))continue;let r=se((n=o.resolutionChannel)!=null?n:s);if(e=="axis"&&!ge(r))continue;let a=this;for(;a.parent instanceof H&&["shared","excluded"].includes(a.parent.getConfiguredOrDefaultResolution(r,e))&&a.getConfiguredOrDefaultResolution(r,e)!="excluded";)a=a.parent;a.resolutions[e][r]||(a.resolutions[e][r]=e=="scale"?new Pr(r):new Nr(r)),ge(s)?a.resolutions[e][r].pushUnitView(this,s):e=="scale"&&a.resolutions[e][r].pushUnitView(this,s)}}getAccessor(e){return this._cache("accessor/"+e,()=>{const t=this.mark.encoding;if(t&&t[e])return this.context.accessorFactory.createAccessor(t[e])})}getFacetAccessor(e){const t=this.getAccessor("sample");return t||super.getFacetAccessor(this)}getCollector(){return this.context.dataFlow.findCollectorByKey(this)}_validateDomainQuery(e){if(ye(e))throw new Error(`getDomain(${e}), must only be called for primary channels!`);const t=this.mark.encoding[e];if(!P(t))throw new Error("The channel has no scale, cannot get domain!");return t}getConfiguredDomain(e){var s,o;const t=this._validateDomainQuery(e),n=t&&t.scale&&t.scale.domain;if(n){const r=this.getScaleResolution((s=t.resolutionChannel)!=null?s:e);return Fn((o=t.type)!=null?o:"nominal",r.fromComplexInterval(n))}}extractDataDomain(e){var a;const n=(a=this._validateDomainQuery(e).type)!=null?a:"nominal",s=l=>{let c;const d=this.mark.encoding[l];if(d){const h=this.context.accessorFactory.createAccessor(d);if(h)if(c=Fn(n),h.constant)c.extend(h({}));else{const f=this.getCollector();(f==null?void 0:f.completed)&&f.visitData(p=>c.extend(h(p)))}}return c};let o=s(e);const r=st[e];if(r){const l=s(r);l&&o.extendAll(l)}return o}getZoomLevel(){const e=t=>{var n,s;return(s=(n=this.getScaleResolution(t))==null?void 0:n.getZoomLevel())!=null?s:1};return me.map(e).reduce((t,n)=>t*n,1)}_initializeAggregateViews(){var e,t;if($n(this.spec))for(const n of this.spec.aggregateSamples){n.transform=[...(e=n.transform)!=null?e:[],{type:"mergeFacets"}],n.encoding=D(v({},(t=n.encoding)!=null?t:{}),{sample:null});const s=this.context.createView(n,this,"summaryView");s.getFacetFields=o=>{},this.sampleAggregateViews.push(s)}}getDefaultResolution(e,t){return e=="x"?"shared":"independent"}}function Ur(i,e,t){return t=(t-i)/(e-i),t=Math.max(0,Math.min(1,t)),t*t*(3-2*t)}class le extends C{get identifier(){}handle(e){throw new Error("Source does not handle incoming data!")}async load(){}}function Hn(i){var t,n;const e=v({},i.format);if((t=e.type)!=null||(e.type=Wr(i)&&Hr(i.url)),(n=e.parse)!=null||(e.parse="auto"),!e.type)throw new Error("Format for the data source was not defined and it could not be inferred: "+JSON.stringify(i));return e}function Hr(i){var e;if(Array.isArray(i)&&(i=i[0]),i)return(e=i.match(/\.(csv|tsv|json)/))==null?void 0:e[1]}const He=i=>typeof i!="object"?Gr:qr,Gr=i=>({data:i}),qr=i=>i;function Wr(i){return"url"in i}function jr(i){return"dynamicCallbackSource"in i}class Gn extends le{constructor(e){super();this.callback=e}loadSynchronously(){if(!this.callback)return;const e=this.callback();if(!e||typeof e[Symbol.iterator]!="function")throw new Error("Dynamic data callback didn't return iterable data!");this.reset(),this.beginBatch({type:"file"});let t;for(const n of e)t||(t=He(n)),this._propagate(t(n));this.complete()}async load(){this.loadSynchronously()}}const qn="chromosome_ticks_and_labels",Wn={x:"width",y:"height"};function Et(i){return i=="x"?"y":"x"}const Xr={x:["bottom","top"],y:["left","right"]},jn=Object.fromEntries(Object.entries(Xr).map(([i,e])=>e.map(t=>[t,i])).flat(1));function ee(i){return jn[i]}class Xn extends xt{constructor(e,t,n,s){const o=t=="locus",r=v(v(v({},o?Yr:Zn),Kr(t,e)),e);super(o?Jr(r):Kn(r),n,s,`axis_${e.orient}`);if(this.axisProps=r,this.axisUpdateRequested=!0,this._addBroadcastHandler("layout",()=>{this.axisUpdateRequested=!0}),this.previousScaleDomain=[],this.axisLength=void 0,this.ticks=[],this.tickSource=new Gn(()=>this.ticks),o){const a=ee(this.axisProps.orient),l=this.getScaleResolution(a).getGenome();this.findChildByName(qn).getDynamicDataSource=()=>new Gn(()=>l.chromosomes)}}getOrient(){return this.axisProps.orient}getSize(){const e={px:this.getPerpendicularSize()},t={grow:1};return jn[this.axisProps.orient]=="x"?new X(t,e):new X(e,t)}getPerpendicularSize(){return _t(this.axisProps)}getDynamicDataSource(){return this.tickSource}_updateAxisData(){const e=ee(this.axisProps.orient),t=this.getScaleResolution(e).getScale(),n=t.domain();if(Zt(n,this.previousScaleDomain)&&!this.axisUpdateRequested)return;this.previousScaleDomain=n;const s=this.ticks,o=Zr(this.axisProps,t,this.axisLength,s);o!==s&&(this.ticks=o,this.tickSource.loadSynchronously()),this.axisUpdateRequested=!1}onBeforeRender(){super.onBeforeRender(),this._updateAxisData()}render(e,t,n={}){!this.isVisible()||(this.axisLength=t[Wn[ee(this.getOrient())]],super.render(e,t,n))}isPickingSupported(){return!1}}function _t(i){const e=ee(i.orient);let t=i.ticks&&i.tickSize||0;return i.labels&&(t+=i.labelPadding,e=="x"?t+=i.labelFontSize:t+=30),i.title&&(t+=i.titlePadding+i.titleFontSize),t=Math.min(i.maxExtent||1/0,Math.max(i.minExtent||0,t)),t}function Zr(i,e,t,n=[]){const s=a=>25+60*Ur(100,700,a);let o=T(i.tickCount)?i.tickCount:Math.round(t/s(t));o=En(e,o,i.tickMinStep);const r=i.values?_n(e,i.values,o):ir(e,o);if(Rs(r,n,a=>a,a=>a.value))return n;{const a=or(e,o,i.format);return r.map(l=>({value:l,label:a(l)}))}}const Zn={values:null,minExtent:20,maxExtent:1/0,offset:0,domain:!0,domainWidth:1,domainColor:"gray",domainDash:null,domainDashOffset:0,domainCap:"square",ticks:!0,tickSize:5,tickWidth:1,tickColor:"gray",tickDash:null,tickDashOffset:0,tickCap:"square",tickCount:null,tickMinStep:null,labels:!0,labelAlign:"center",labelBaseline:"middle",labelPadding:4,labelFontSize:10,labelLimit:180,labelColor:"black",format:null,titleColor:"black",titleFont:"sans-serif",titleFontSize:10,titlePadding:3};function Kr(i,e){var a;const t=e.orient,n=i=="nominal"||i=="ordinal";let s="center",o="middle",r=(a=e.labelAngle)!=null?a:(t=="top"||t=="bottom")&&n?-90:0;switch(t){case"left":s="right";break;case"right":s="left";break;case"top":case"bottom":Math.abs(r)>30?(s=r>0==(t=="bottom")?"left":"right",o="middle"):o=t=="top"?"alphabetic":"top";break}return{labelAlign:s,labelAngle:r,labelBaseline:o}}function Kn(i){const e=D(v({},i),{extent:_t(i)}),t=ee(e.orient),n=Et(t),s=e.orient=="bottom"||e.orient=="right"?1:-1,o=e.orient=="bottom"||e.orient=="left"?1:0,r=()=>({name:"domain",data:{values:[0]},mark:{type:"rule",clip:!1,strokeDash:e.domainDash,strokeCap:e.domainCap,color:e.domainColor,[n]:o,size:e.domainWidth}}),a=()=>({name:"labels",mark:{type:"text",clip:!1,align:e.labelAlign,angle:e.labelAngle,baseline:e.labelBaseline,[n+"Offset"]:(e.tickSize+e.labelPadding)*s,[n]:o,size:e.labelFontSize,color:e.labelColor,minBufferSize:1500,dynamicData:!0},encoding:{[t]:{field:"value",type:"quantitative"},text:{field:"label"}}}),l=()=>({name:"ticks",mark:{type:"rule",clip:!1,strokeDash:e.tickDash,strokeCap:e.tickCap,color:e.tickColor,size:e.tickWidth,minBufferSize:300,dynamicData:!0},encoding:{[n]:{value:o},[n+"2"]:{value:o-e.tickSize/e.extent*(o?1:-1)}}}),c=()=>({name:"title",data:{values:[0]},mark:{type:"text",clip:!1,align:"center",baseline:e.orient=="bottom"?"bottom":"top",angle:[0,90,0,-90][["top","right","bottom","left"].indexOf(e.orient)],text:e.title,color:e.titleColor,[t]:.5,[n]:1-o}}),d=()=>{const f={name:"ticks_and_labels",encoding:{[t]:{field:"value",type:"quantitative"}},layer:[]};return e.ticks&&f.layer.push(l()),e.labels&&f.layer.push(a()),f},h={[Wn[Et(ee(e.orient))]]:e.extent,data:{dynamicCallbackSource:!0},layer:[]};return e.domain&&h.layer.push(r()),(e.ticks||e.labels)&&h.layer.push(d()),e.title&&h.layer.push(c()),h}const Yr=D(v({},Zn),{chromTicks:!0,chromTickSize:18,chromTickWidth:1,chromTickColor:"#989898",chromTickDash:[4,2],chromTickDashOffset:1,chromLabels:!0,chromLabelFontSize:13,chromLabelFontWeight:"normal",chromLabelFontStyle:"normal",chromLabelColor:"black",chromLabelAlign:"left",chromLabelPadding:7});function Jr(i){const e=D(v({},i),{extent:_t(i)}),t=ee(e.orient),n=Et(t),s=e.orient=="bottom"||e.orient=="left"?1:0,o=()=>({name:"chromosome_ticks",mark:{type:"rule",strokeDash:i.chromTickDash,strokeDashOffset:i.chromTickDashOffset,[n]:s,[n+"2"]:s-e.chromTickSize/e.extent*(s?1:-1),color:i.chromTickColor,size:e.chromTickWidth,dynamicData:!0}}),r=()=>{let c;switch(e.orient){case"top":c={y:0,angle:0,paddingX:4,dy:-e.chromLabelPadding,viewportEdgeFadeWidthLeft:20,viewportEdgeFadeWidthRight:20,viewportEdgeFadeDistanceRight:-10,viewportEdgeFadeDistanceLeft:-20};break;case"bottom":c={y:1,angle:0,paddingX:4,dy:e.chromLabelPadding+e.chromLabelFontSize*.73,viewportEdgeFadeWidthLeft:20,viewportEdgeFadeWidthRight:20,viewportEdgeFadeDistanceRight:-10,viewportEdgeFadeDistanceLeft:-20};break;case"left":c={x:1,angle:-90,paddingY:4,dy:-e.chromLabelPadding,viewportEdgeFadeWidthBottom:20,viewportEdgeFadeWidthTop:20,viewportEdgeFadeDistanceBottom:-20,viewportEdgeFadeDistanceTop:-10};break;case"right":c={x:0,angle:90,align:"right",paddingY:4,dy:-e.chromLabelPadding};break;default:c={}}return{name:"chromosome_labels",mark:v({type:"text",size:e.chromLabelFontSize,font:e.chromLabelFont,fontWeight:e.chromLabelFontWeight,fontStyle:e.chromLabelFontStyle,color:e.chromLabelColor,align:i.chromLabelAlign,baseline:"alphabetic",clip:!1,dynamicData:!0},c),encoding:{[t+"2"]:{field:"continuousEnd",type:"locus"},text:{field:"name"}}}};let a;switch(e.orient){case"bottom":case"top":a={};break;case"left":a={labelAngle:-90,labelAlign:"center",labelPadding:6};break;case"right":a={labelAngle:90,labelAlign:"center",labelPadding:6};break;default:a={}}const l=Kn(v(v({},i),a));if(i.chromTicks||i.chromLabels){const c={name:qn,data:{dynamicCallbackSource:!0},encoding:{[t]:{field:"continuousStart",type:"locus",band:0}},layer:[]};if(i.chromTicks&&c.layer.push(o()),i.chromLabels){c.layer.push(r());let d;l.layer.filter(h=>h.name=="ticks_and_labels").forEach(h=>h.layer.filter(f=>f.name=="labels").forEach(f=>{d=f.mark})),d&&(e.orient=="top"||e.orient=="bottom"?(d.viewportEdgeFadeWidthLeft=30,d.viewportEdgeFadeDistanceLeft=40):(d.viewportEdgeFadeWidthBottom=30,d.viewportEdgeFadeDistanceBottom=40))}l.layer.push(c)}return l}const Qr={x:["bottom","top"],y:["left","right"]};class ea extends H{constructor(e,t){super({},e,t,"decorator");this.child=void 0,this.backgroundView=void 0,this.axisViews={top:void 0,right:void 0,bottom:void 0,left:void 0},["mousedown","wheel"].forEach(n=>this.addInteractionEventListener(n,this.handleMouseEvent.bind(this)))}initialize(){var t;Object.entries(Qr).forEach(([n,s])=>this._initializeAxes(n,s)),this._invalidateCacheByPrefix("size/","ancestors");const e=(t=this.child.spec)==null?void 0:t.view;((e==null?void 0:e.fill)||(e==null?void 0:e.stroke))&&(this.backgroundView=new V(ta(e),this.context,this,"background"))}getEncoding(e){return Object.values(this.axisViews).find(t=>e===t)||e==this.backgroundView?{}:super.getEncoding()}getFacetAccessor(e){if(e==this.child&&this.parent)return this.parent.getFacetAccessor(this)}*[Symbol.iterator](){yield this.child,this.backgroundView&&(yield this.backgroundView);for(const e of Object.values(this.axisViews))e&&(yield e)}_getAxisExtents(){return this._cache("size/axisExtents",()=>{const e={};for(const t of Object.values(this.axisViews))t&&(e[t.getOrient()]=t.getPerpendicularSize());return F.createFromRecord(e)})}_getAxisOffsets(){return this._cache("size/axisOffsets",()=>{const e={};for(const t of Object.values(this.axisViews))t&&(e[t.getOrient()]=t.axisProps.offset);return F.createFromRecord(e)})}getEffectivePadding(){return this._cache("size/effectivePadding",()=>this.getPadding().add(this._getAxisExtents()))}getSize(){return this._cache("size/size",()=>this.child.isVisible()?this.getSizeFromSpec().addPadding(this.getPadding()).addPadding(this.getAxisSizes()):vn)}getAxisSizes(){return this._cache("size/axisSizes",()=>this._getAxisExtents().add(this._getAxisOffsets()))}render(e,t,n={}){if(!this.isVisible()||!this.child.isVisible())return;t=t.shrink(this.getPadding()),e.pushView(this,t);const s=this._getAxisExtents(),o=t.shrink(s.add(this._getAxisOffsets()));this._childCoords=o,this.backgroundView&&this.backgroundView.render(e,o,n),this.child.render(e,o,n);const r=this._cache("axisViewEntries",()=>Object.entries(this.axisViews).filter(a=>!!a[1]));for(const[a,l]of r){const c=l.axisProps;let d;a=="bottom"?d=o.translate(0,o.height+c.offset).modify({height:s.bottom}):a=="top"?d=o.translate(0,-s.top-c.offset).modify({height:s.top}):a=="left"?d=o.translate(-s.left-c.offset,0).modify({width:s.left}):a=="right"&&(d=o.translate(o.width+c.offset,0).modify({width:s.right})),l.render(e,d)}e.popView(this)}_getResolutionParticipants(){return[...this.getAncestors(),...Xa(this.child)]}_initializeAxes(e,t){const n=this._getResolutionParticipants().map(s=>s.resolutions.axis[e]).filter(s=>s);for(const s of n){const o=s.getAxisProps();if(o&&o.orient){if(!t.includes(o.orient))throw new Error(`Invalid axis orientation for '${e}' channel: ${o.orient}`);if(this.axisViews[o.orient])throw new Error(`The slot for ${o.orient} axis is already reserved!`);this.axisViews[o.orient]=new Xn(D(v({},o),{title:s.getTitle()}),s.scaleResolution.type,this.context,this)}}e:for(const s of n){const o=s.getAxisProps();if(o&&!o.orient){for(const r of t)if(!this.axisViews[r]){o.orient=r,this.axisViews[r]=new Xn(D(v({},o),{title:s.getTitle()}),s.scaleResolution.type,this.context,this);continue e}throw new Error("No room for axes. All slots are already reserved.")}}}handleMouseEvent(e,t){if(!!this.isZoomable()){if(t.type=="wheel"){t.uiEvent.preventDefault();const n=t.uiEvent,s=n.deltaMode?120:1;let{x:o,y:r}=t.point;const a=this.context.getCurrentHover();if(a){const l=e.shrink(this.getEffectivePadding()),c=a.mark.encoders;c.x&&!c.x2&&(o=+c.x(a.datum)*l.width+l.x),c.y&&!c.y2&&(r=(1-+c.y(a.datum))*l.height+l.y)}Math.abs(n.deltaX)<Math.abs(n.deltaY)?this._handleZoom(e,{x:o,y:r,xDelta:0,yDelta:0,zDelta:n.deltaY*s/300}):this._handleZoom(e,{x:o,y:r,xDelta:-n.deltaX*s,yDelta:0,zDelta:0})}else if(t.type=="mousedown"&&t.uiEvent.button===0){const n=t.uiEvent;n.preventDefault();let s=n;const o=a=>{this._handleZoom(e,{x:s.clientX,y:s.clientY,xDelta:a.clientX-s.clientX,yDelta:a.clientY-s.clientY,zDelta:0}),s=a},r=a=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",r)};document.addEventListener("mouseup",r,!1),document.addEventListener("mousemove",o,!1)}}}isZoomable(){return this._cache("zoomable",()=>Object.values(this._getZoomableResolutions()).some(e=>e.size))}_getZoomableResolutions(){return this._cache("zoomableResolutions",()=>{const e={x:new Set,y:new Set};return this.child.visit(t=>{for(const[n,s]of Object.entries(e)){const o=t.getScaleResolution(n);o&&o.isZoomable()&&s.add(o)}}),e})}_handleZoom(e,t){for(const[n,s]of Object.entries(this._getZoomableResolutions())){if(s.size<=0)continue;const o=this._getAxisExtents(),r=e.shrink(o.add(this._getAxisOffsets())),a=r.normalizePoint(t.x,t.y),l=r.normalizePoint(t.x+t.xDelta,t.y+t.yDelta),c={x:l.x-a.x,y:l.y-a.y};for(const d of s)d.zoom(2**t.zDelta,n=="y"?1-a[n]:a[n],n=="x"?c.x:-c.y)}this.context.animator.requestRender()}}function ta(i){return{configurableVisibility:!1,data:{values:[{}]},mark:D(v({fill:null,strokeWidth:1},i),{type:"rect",clip:!1,tooltip:null})}}function*Ct(i,e=[]){for(const[t,n]of i.entries())if(n instanceof Map)for(const s of Ct(n,[...e,t]))yield s;else yield[[...e,t],n]}class Yn extends C{constructor(e){super();this.params=e!=null?e:{type:"collect"},this.observers=[],this.facetBatches=void 0,this._init()}_init(){this._data=[],this.facetBatches=new Xe([],JSON.stringify),this.facetBatches.set(void 0,this._data)}reset(){super.reset(),this._init()}handle(e){this._data.push(e)}beginBatch(e){Po(e)&&(this._data=[],this.facetBatches.set(N(e.facetId),this._data))}complete(){var s,o;const e=(s=this.params)==null?void 0:s.sort,t=e?Ht(e.field,e.order):void 0,n=r=>{t&&r.sort(t)};if((o=this.params.groupby)==null?void 0:o.length){if(this.facetBatches.size>1)throw new Error("TODO: Support faceted data!");const r=this.params.groupby.map(l=>E(l)),a=Pe(this._data,...r);this.facetBatches.clear();for(const[l,c]of Ct(a))this.facetBatches.set(l,c)}for(const r of this.facetBatches.values())n(r);if(this.children.length)for(const r of this.facetBatches.values())for(const a of r)this._propagate(a);super.complete();for(const r of this.observers)r(this)}getData(){switch(this._checkStatus(),this.facetBatches.size){case 0:return[];case 1:return[...this.facetBatches.values()][0];default:{const e=this.facetBatches;return{[Symbol.iterator]:function*(){for(const n of e.values())for(let s=0;s<n.length;s++)yield n[s]}}}}}visitData(e){this._checkStatus();for(const t of this.facetBatches.values())for(let n=0;n<t.length;n++)e(t[n])}getItemCount(){let e=0;for(const t of this.facetBatches.values())e+=t.length;return e}_checkStatus(){if(!this.completed)throw new Error("Data propagation is not completed! No data are available.")}}class na extends C{get behavior(){return U}constructor(e){super();this.params=e,this.startAccessor=E(e.start),this.endAccessor=E(e.end),this.chromAccessor=e.chrom?E(e.chrom):t=>{},this.weightAccessor=e.weight?E(e.weight):t=>1,this.as={coverage:e.as||"coverage",start:e.asStart||e.start,end:e.asEnd||e.end,chrom:e.asChrom||e.chrom},this.createSegment=new Function("start","end","coverage","chrom","return {"+Object.entries(this.as).filter(([t,n])=>n).map(([t,n])=>`${JSON.stringify(n)}: ${t}`).join(", ")+"};"),this.ends=new ze}reset(){super.reset(),this.initialize()}initialize(){const e=this.as.coverage,t=this.as.end,n=this.as.chrom,s=this.startAccessor,o=this.endAccessor,r=this.chromAccessor,a=this.weightAccessor;let l,c,d,h=0,f;const p=this.ends;p.clear();const u=(y,g,b)=>{if(y==g)return;let w=!1;l&&(l[e]===b?(l[t]=g,w=!0):l[e]!=0&&this._propagate(l)),w||(l=this.createSegment(y,g,b,d))},m=()=>{let y;for(;(y=p.peekValue())!==void 0;)u(f,y,h),f=y,h-=p.pop();f=void 0,l&&(this._propagate(l),l=void 0)};this.handle=y=>{const g=s(y);let b;for(;(b=p.peekValue())!==void 0&&b<g;)u(f,b,h),f=b,h-=p.pop();if(n){let S=r(y);S!==c&&(m(),d=S,c=d)}f!==void 0&&u(f,g,h),f=g;const w=a(y);h+=w,p.push(w,o(y))},this.complete=()=>{m(),super.complete()}}}function ia(i,e,t=0,n=i.length){const s=new ze,o=n-t;let r;for(r=0;r<e&&r<o;r++)s.push(r,i[t+r]);for(;r<o;r++){const c=i[t+r];c>=s.peekValue()&&(s.push(r,c),s.pop())}const a=[];let l;for(;(l=s.pop())!==void 0;)a.push(t+l);return a.reverse()}class sa{constructor(e,t=-1/0,n=1/0){this.maxSize=e,this.lowerLimit=t,this.upperLimit=n;const s=this.maxSize*2+1;this.lowerLimits=new Float64Array(s),this.upperLimits=new Float64Array(s),this.lowerChildren=new Int32Array(s),this.upperChildren=new Int32Array(s),this.reset()}reset(){this.lowerLimits.fill(0),this.upperLimits.fill(0),this.lowerChildren.fill(0),this.upperChildren.fill(0),this.n=1,this.lowerLimits[0]=this.lowerLimit,this.upperLimits[0]=this.upperLimit}_findSlot(e,t,n=0){if(e>=this.lowerLimits[n]&&t<=this.upperLimits[n]){const s=this.lowerChildren[n];if(s){const o=this._findSlot(e,t,s);return o>=0?o:this._findSlot(e,t,this.upperChildren[n])}else return n}else return-1}reserve(e,t){if(t-e<=0)throw new Error("Cannot reserve an empty or negative-size slot!");if(this.n+1>this.lowerLimits.length)return!1;const n=this._findSlot(e,t);if(n<0)return!1;const s=this.n++,o=this.n++;return this.lowerLimits[s]=this.lowerLimits[n],this.upperLimits[s]=e,this.lowerLimits[o]=t,this.upperLimits[o]=this.upperLimits[n],this.lowerChildren[n]=s,this.upperChildren[n]=o,!0}}class oa extends C{constructor(e,t){super();var s,o;if(this.params=e,this._data=[],this.channel=(s=e.channel)!=null?s:"x",!["x","y"].includes(this.channel))throw new Error("Invalid channel: "+this.channel);this.posAccessor=E(this.params.pos),this.posBisector=zt(this.posAccessor),this.scoreAccessor=E(this.params.score),this.widthAccessor=E(this.params.width),this.laneAccessor=this.params.lane?E(this.params.lane):r=>0,this.padding=(o=this.params.padding)!=null?o:0,this.reservationMaps=new Map,this.resolution=t.getScaleResolution(this.channel);const n=()=>this._filterAndPropagate();this.schedule=()=>t.context.animator.requestTransition(n),this.resolution.addEventListener("domain",r=>this.schedule()),t._addBroadcastHandler("layoutComputed",()=>this.schedule())}complete(){const e=this.posAccessor;this._data.sort((t,n)=>e(t)-e(n)),this._scores=this._data.map(this.scoreAccessor);for(const t of new Set(this._data.map(this.laneAccessor)))this.reservationMaps.set(t,new sa(200));this.schedule(),super.complete()}_filterAndPropagate(){var r;super.reset();const e=this.resolution.getScale(),t=(r=this.resolution.members[0].view.coords)==null?void 0:r[this.channel=="x"?"width":"height"];if(!t)return;for(const a of this.reservationMaps.values())a.reset();const n=e.domain(),s=70,o=ia(this._scores,s,this.posBisector.left(this._data,n[0]),this.posBisector.right(this._data,n[1]));for(const a of o){const l=this._data[a],c=e(this.posAccessor(l))*t,d=this.widthAccessor(l)/2+this.padding;this.reservationMaps.get(this.laneAccessor(l)).reserve(c-d,c+d)&&this._propagate(l)}super.complete()}reset(){super.reset(),this._data=[],this.groups=new Map}handle(e){this._data.push(e)}}class ra extends C{constructor(e){super();this.params=e,this.predicate=void 0}initialize(){this.predicate=tt(this.params.expr,this.getGlobalObject())}handle(e){this.predicate(e)&&this._propagate(e)}}const aa="0".charCodeAt(0);function*la(i,e=","){const t=e.charCodeAt(0);let n=0;for(let s=0;s<i.length;s++){const o=i.charCodeAt(s);o==t?(yield n,n=0):n=n*10+o-aa}yield n}class ca extends C{get behavior(){return U}constructor(e){super();var r,a;const t=E((r=e.exons)!=null?r:"exons"),n=E((a=e.start)!=null?a:"start"),[s,o]=e.as||["exonStart","exonEnd"];this.handle=l=>{let c=n(l),d=c,h=!0;const f=t(l);for(const p of la(f)){if(h)d=c+p;else{c=d+p;const u=Object.assign({},l);u[s]=d,u[o]=c,this._propagate(u)}h=!h}}}}class ha extends C{get behavior(){return U}constructor(e){super();const t=N(e.field).map(o=>E(o)),n=N(e.separator),s=N(e.as||e.field);if(t.length!==n.length||t.length!==s.length)throw new Error(`Lengths of "separator" (${n.length}), "fields" (${t.length}), and "as" (${s.length}) do not match!`);this.handle=o=>{if(t.some(l=>!l(o)))return;const r=t.map((l,c)=>l(o).split(n[c]));da(r,o);const a=r[0].length;for(let l=0;l<a;l++){const c=Object.assign({},o);for(let d=0;d<t.length;d++)c[s[d]]=r[d][l];this._propagate(c)}}}}function da(i,e){const t=i.map(n=>n.length);if(!t.every(n=>n==t[0]))throw new Error("Mismatching number of elements in the fields to be split: "+JSON.stringify(e))}class fa extends C{get behavior(){return j}constructor(e){super();this.params=e,this.as=e.as,this.fn=void 0}initialize(){this.fn=tt(this.params.expr,this.getGlobalObject())}handle(e){e[this.as]=this.fn(e),this._propagate(e)}}class Jn extends C{get behavior(){return j}constructor(e,t){super();var u;const n=(u=e.channel)!=null?u:"x";if(!["x","y"].includes(n))throw new Error("Invalid channel: "+n);const s=t.getScaleResolution(n).getGenome();if(!s)throw new Error("LinearizeGenomicCoordinate transform requires a locus scale!");const o=E(e.chrom),r=N(e.pos).map(m=>E(m)),a=N(e.as);if(r.length!=a.length)throw new Error('The number of "pos" and "as" elements must be equal!');const l=N(e.offset);let c;if(l.length==0)c=new Array(r.length).fill(0);else if(l.length==1)c=new Array(r.length).fill(l[0]);else if(l.length==r.length)c=l;else throw new Error(`Invalid "offset" parameter: ${JSON.stringify(e.offset)}!`);const d=new Function("datum","chromOffset","posAccessors",a.map((m,y)=>`datum[${JSON.stringify(m)}] = chromOffset + +posAccessors[${y}](datum) - ${c[y]};`).join(`
`));let h,f=0;const p=m=>{if(m!==h){if(f=s.cumulativeChromPositions.get(m),f===void 0)throw new Error("Unknown chromosome/contig: "+m);h=m}return f};this.handle=m=>{d(m,p(o(m)),r),this._propagate(m)}}}const ua=["Lato-Regular.png"],pa=[{id:87,width:53,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:43.491,chnl:15,x:0,y:0,page:0},{id:124,width:17,height:50,xoffset:0,yoffset:-32.193000000000005,xadvance:10.521,chnl:15,x:0,y:42,page:0},{id:40,width:20,height:49,xoffset:0,yoffset:-32.571000000000005,xadvance:11.214,chnl:15,x:0,y:94,page:0},{id:41,width:19,height:49,xoffset:0,yoffset:-32.571000000000005,xadvance:11.214,chnl:15,x:0,y:145,page:0},{id:36,width:32,height:49,xoffset:0,yoffset:-34.419000000000004,xadvance:24.360000000000003,chnl:15,x:0,y:196,page:0},{id:125,width:21,height:48,xoffset:0,yoffset:-32.193000000000005,xadvance:12.642000000000001,chnl:15,x:0,y:247,page:0},{id:91,width:22,height:48,xoffset:0,yoffset:-32.193000000000005,xadvance:12.852,chnl:15,x:0,y:297,page:0},{id:93,width:19,height:48,xoffset:0,yoffset:-32.193000000000005,xadvance:12.852,chnl:15,x:0,y:347,page:0},{id:123,width:21,height:48,xoffset:0,yoffset:-32.193000000000005,xadvance:12.642000000000001,chnl:15,x:0,y:397,page:0},{id:106,width:19,height:48,xoffset:0,yoffset:-30.639000000000003,xadvance:10.08,chnl:15,x:0,y:447,page:0},{id:81,width:43,height:47,xoffset:0,yoffset:-30.429000000000002,xadvance:33.621,chnl:15,x:21,y:447,page:0},{id:77,width:45,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:38.997,chnl:15,x:66,y:447,page:0},{id:64,width:43,height:44,xoffset:0,yoffset:-28.539,xadvance:35.133,chnl:15,x:23,y:397,page:0},{id:92,width:28,height:43,xoffset:0,yoffset:-30.933000000000003,xadvance:18.984,chnl:15,x:68,y:397,page:0},{id:47,width:28,height:43,xoffset:0,yoffset:-30.933000000000003,xadvance:18.984,chnl:15,x:98,y:397,page:0},{id:109,width:42,height:32,xoffset:0,yoffset:-21.609,xadvance:34.545,chnl:15,x:113,y:447,page:0},{id:119,width:42,height:31,xoffset:0,yoffset:-21.315,xadvance:32.991,chnl:15,x:157,y:447,page:0},{id:42,width:25,height:42,xoffset:0,yoffset:-31.626,xadvance:17.85,chnl:15,x:128,y:397,page:0},{id:37,width:42,height:41,xoffset:0,yoffset:-30.387,xadvance:33.663000000000004,chnl:15,x:155,y:397,page:0},{id:79,width:42,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:33.621,chnl:15,x:199,y:397,page:0},{id:102,width:24,height:41,xoffset:0,yoffset:-30.534000000000002,xadvance:14.721,chnl:15,x:243,y:397,page:0},{id:100,width:31,height:41,xoffset:0,yoffset:-30.933000000000003,xadvance:23.520000000000003,chnl:15,x:269,y:397,page:0},{id:98,width:32,height:41,xoffset:0,yoffset:-30.933000000000003,xadvance:23.520000000000003,chnl:15,x:302,y:397,page:0},{id:56,width:32,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:24.360000000000003,chnl:15,x:336,y:397,page:0},{id:38,width:40,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:29.904000000000003,chnl:15,x:370,y:397,page:0},{id:108,width:17,height:41,xoffset:0,yoffset:-30.933000000000003,xadvance:9.912,chnl:15,x:412,y:397,page:0},{id:107,width:31,height:41,xoffset:0,yoffset:-30.933000000000003,xadvance:21.336000000000002,chnl:15,x:431,y:397,page:0},{id:48,width:33,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:24.360000000000003,chnl:15,x:464,y:397,page:0},{id:71,width:38,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:30.681,chnl:15,x:21,y:347,page:0},{id:83,width:31,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:22.785,chnl:15,x:61,y:347,page:0},{id:63,width:27,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:18.795,chnl:15,x:94,y:347,page:0},{id:105,width:18,height:41,xoffset:0,yoffset:-30.639000000000003,xadvance:10.08,chnl:15,x:123,y:347,page:0},{id:51,width:32,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:24.360000000000003,chnl:15,x:143,y:347,page:0},{id:104,width:31,height:41,xoffset:0,yoffset:-30.933000000000003,xadvance:23.436,chnl:15,x:177,y:347,page:0},{id:67,width:37,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:28.056,chnl:15,x:210,y:347,page:0},{id:88,width:37,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:27.258000000000003,chnl:15,x:249,y:347,page:0},{id:68,width:40,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:31.941000000000003,chnl:15,x:288,y:347,page:0},{id:70,width:32,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:23.751,chnl:15,x:330,y:347,page:0},{id:34,width:23,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:15.561000000000002,chnl:15,x:364,y:347,page:0},{id:72,width:38,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:32.067,chnl:15,x:389,y:347,page:0},{id:73,width:18,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:11.760000000000002,chnl:15,x:429,y:347,page:0},{id:74,width:24,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:17.745,chnl:15,x:449,y:347,page:0},{id:75,width:38,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:27.825000000000003,chnl:15,x:24,y:297,page:0},{id:76,width:31,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:21.567,chnl:15,x:475,y:347,page:0},{id:66,width:35,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:27.153000000000002,chnl:15,x:64,y:297,page:0},{id:78,width:38,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:32.067,chnl:15,x:101,y:297,page:0},{id:33,width:18,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:11.298,chnl:15,x:141,y:297,page:0},{id:80,width:34,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:25.221,chnl:15,x:161,y:297,page:0},{id:65,width:38,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:28.434,chnl:15,x:197,y:297,page:0},{id:82,width:36,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:26.313000000000002,chnl:15,x:237,y:297,page:0},{id:35,width:33,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.360000000000003,chnl:15,x:275,y:297,page:0},{id:84,width:34,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.801000000000002,chnl:15,x:310,y:297,page:0},{id:85,width:37,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:30.891000000000002,chnl:15,x:346,y:297,page:0},{id:86,width:38,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:28.434,chnl:15,x:385,y:297,page:0},{id:39,width:16,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:8.568000000000001,chnl:15,x:425,y:297,page:0},{id:69,width:32,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.255000000000003,chnl:15,x:443,y:297,page:0},{id:89,width:36,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:26.208000000000002,chnl:15,x:23,y:247,page:0},{id:90,width:34,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:25.284000000000002,chnl:15,x:477,y:297,page:0},{id:49,width:31,height:40,xoffset:0,yoffset:-30.156000000000002,xadvance:24.360000000000003,chnl:15,x:61,y:247,page:0},{id:50,width:32,height:40,xoffset:0,yoffset:-30.429000000000002,xadvance:24.360000000000003,chnl:15,x:94,y:247,page:0},{id:57,width:32,height:40,xoffset:0,yoffset:-30.429000000000002,xadvance:24.360000000000003,chnl:15,x:128,y:247,page:0},{id:94,width:32,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.360000000000003,chnl:15,x:162,y:247,page:0},{id:96,width:21,height:40,xoffset:0,yoffset:-30.429000000000002,xadvance:16.8,chnl:15,x:196,y:247,page:0},{id:55,width:33,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.360000000000003,chnl:15,x:219,y:247,page:0},{id:54,width:33,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.360000000000003,chnl:15,x:254,y:247,page:0},{id:53,width:32,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.360000000000003,chnl:15,x:289,y:247,page:0},{id:52,width:33,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.360000000000003,chnl:15,x:323,y:247,page:0},{id:103,width:31,height:39,xoffset:0,yoffset:-21.630000000000003,xadvance:21.84,chnl:15,x:358,y:247,page:0},{id:112,width:32,height:39,xoffset:0,yoffset:-21.651,xadvance:23.541,chnl:15,x:391,y:247,page:0},{id:113,width:31,height:39,xoffset:0,yoffset:-21.651,xadvance:23.520000000000003,chnl:15,x:425,y:247,page:0},{id:116,width:25,height:39,xoffset:0,yoffset:-28.182000000000002,xadvance:15.057,chnl:15,x:458,y:247,page:0},{id:121,width:31,height:38,xoffset:0,yoffset:-21.273,xadvance:21.651,chnl:15,x:34,y:196,page:0},{id:59,width:18,height:36,xoffset:0,yoffset:-20.706,xadvance:10.983,chnl:15,x:485,y:247,page:0},{id:43,width:32,height:34,xoffset:0,yoffset:-24.486,xadvance:24.360000000000003,chnl:15,x:67,y:196,page:0},{id:60,width:30,height:33,xoffset:0,yoffset:-23.331000000000003,xadvance:24.360000000000003,chnl:15,x:101,y:196,page:0},{id:62,width:31,height:33,xoffset:0,yoffset:-23.331000000000003,xadvance:24.360000000000003,chnl:15,x:133,y:196,page:0},{id:117,width:30,height:32,xoffset:0,yoffset:-21.273,xadvance:23.415000000000003,chnl:15,x:166,y:196,page:0},{id:99,width:29,height:32,xoffset:0,yoffset:-21.609,xadvance:20.055,chnl:15,x:198,y:196,page:0},{id:110,width:31,height:32,xoffset:0,yoffset:-21.609,xadvance:23.436,chnl:15,x:229,y:196,page:0},{id:111,width:32,height:32,xoffset:0,yoffset:-21.609,xadvance:23.814,chnl:15,x:262,y:196,page:0},{id:126,width:32,height:26,xoffset:0,yoffset:-16.128,xadvance:24.360000000000003,chnl:15,x:201,y:447,page:0},{id:101,width:31,height:32,xoffset:0,yoffset:-21.609,xadvance:22.176000000000002,chnl:15,x:296,y:196,page:0},{id:114,width:25,height:32,xoffset:0,yoffset:-21.651,xadvance:15.288,chnl:15,x:329,y:196,page:0},{id:115,width:27,height:32,xoffset:0,yoffset:-21.609,xadvance:18.186,chnl:15,x:356,y:196,page:0},{id:97,width:28,height:32,xoffset:0,yoffset:-21.651,xadvance:20.874000000000002,chnl:15,x:385,y:196,page:0},{id:118,width:31,height:31,xoffset:0,yoffset:-21.273,xadvance:21.672,chnl:15,x:415,y:196,page:0},{id:61,width:31,height:29,xoffset:0,yoffset:-19.089000000000002,xadvance:24.360000000000003,chnl:15,x:448,y:196,page:0},{id:120,width:30,height:31,xoffset:0,yoffset:-21.273,xadvance:20.916,chnl:15,x:21,y:145,page:0},{id:58,width:18,height:31,xoffset:0,yoffset:-20.706,xadvance:10.5,chnl:15,x:53,y:145,page:0},{id:122,width:28,height:31,xoffset:0,yoffset:-21.273,xadvance:18.984,chnl:15,x:73,y:145,page:0},{id:95,width:28,height:16,xoffset:0,yoffset:0,xadvance:19.278000000000002,chnl:15,x:235,y:447,page:0},{id:45,width:23,height:24,xoffset:0,yoffset:-14.175,xadvance:15.603000000000002,chnl:15,x:481,y:196,page:0},{id:44,width:17,height:21,xoffset:0,yoffset:-4.956,xadvance:9.534,chnl:15,x:103,y:145,page:0},{id:46,width:18,height:15,xoffset:0,yoffset:-4.956,xadvance:9.912,chnl:15,x:0,y:497,page:0},{id:32,width:0,height:0,xoffset:0,yoffset:0,xadvance:10.752,chnl:15,x:20,y:497,page:0}],ma={face:"Lato Regular",size:42,bold:0,italic:0,charset:[" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~"],unicode:1,stretchH:100,smooth:1,aa:1,padding:[0,0,0,0],spacing:[2,2]},ga={lineHeight:50.400000000000006,base:41.454,scaleW:512,scaleH:512,pages:1,packed:0,alphaChnl:0,redChnl:0,greenChnl:0,blueChnl:0},ya=[];var Qn={pages:ua,chars:pa,info:ma,common:ga,kernings:ya};class xa extends C{get behavior(){return j}constructor(e){super();const t=ht(Qn),n=E(e.field),s=e.as,o=e.fontSize;this.handle=r=>{const a=n(r);a!==void 0?r[s]=t.measureWidth(a,o):r[s]=0,this._propagate(r)}}}const va=65536;class wa extends C{get behavior(){return j}constructor(e){super();this.params=e}reset(){this.initialize()}initialize(){const e=this.params,t=e.as||"lane",n=T(e.spacing)?e.spacing:1,s=E(e.start),o=E(e.end);if(!e.preference!=!e.preferredOrder)throw new Error('Must specify both "preference" and "preferredOrder"');if(e.preference){const r=new Float64Array(va),a=E(e.preference),l=e.preferredOrder;let c=1/0;this.handle=d=>{const h=s(d);h<c&&r.fill(-1/0),c=h;const f=l.indexOf(a(d));let p=-1;if(f>=0&&r[f]<h)p=f;else{const u=s(d);for(p=0;p<r.length&&!(r[p]<u);p++);if(p>=r.length)throw new Error("Out of lanes!")}r[p]=o(d)+n,d[t]=p,this._propagate(d)}}else{const r=new ze,a=new ze;let l=-1/0,c=0;this.handle=d=>{const h=s(d);for(;r.length&&(r.peekValue()<=h||h<l);){const p=r.pop();a.push(p,p)}l=h;let f=a.pop();f===void 0&&(f=c++),d[t]=f,this._propagate(d),r.push(f,o(d)+n)}}}}class ba extends C{get behavior(){return U}constructor(e){super();if(e.as&&e.as.length!=e.fields.length)throw new Error('"fields" and "as" have unequal lengths!');const t=e.fields.map(s=>E(s)),n=e.as?e.as:t.map(vs);this.handle=s=>{const o={};for(let r=0;r<t.length;r++)o[n[r]]=t[r](s);this._propagate(o)}}}class Sa extends C{get behavior(){return j}constructor(e){super();const t=new RegExp(e.regex),n=typeof e.as=="string"?[e.as]:e.as,s=E(e.field);this.handle=o=>{const r=s(o);if(k(r)){const a=r.match(t);if(a){if(a.length-1!=n.length)throw new Error('The number of RegEx groups and the length of "as" do not match!');for(let l=0;l<n.length;l++)o[n[l]]=a[l+1]}else if(e.skipInvalidInput)for(let l=0;l<n.length;l++)o[n[l]]=void 0;else throw new Error(`"${r}" does not match the given regex: ${t.toString()}`)}else if(!e.skipInvalidInput)throw new Error(`Trying to match a non-string field. Encountered type: ${typeof r}, field content: "${r}".`);this._propagate(o)}}}class Ea extends C{get behavior(){return U}constructor(e){super();const t=N(e.columnRegex).map(f=>new RegExp(f)),n=N(e.asValue);if(t.length!=n.length)throw new Error('Lengths of "columnRegex" and "as" are not equal!');const s=e.skipRegex?new RegExp(e.skipRegex):void 0,o=e.asKey||"sample";let r,a,l;const c=f=>{var y;const p=Object.keys(f),u=new Map;for(const[g,b]of t.entries())for(const w of p){const S=(y=b.exec(w))==null?void 0:y[1];if(S!==void 0){let I=u.get(S);I||(I=[],u.set(S,I)),I[g]=w}}r=[...u.entries()],a=p.filter(g=>!t.some(b=>b.test(g))&&!(s&&s.test(g)));const m=[...a.map(g=>JSON.stringify(g)+": datum["+JSON.stringify(g)+"]"),JSON.stringify(o)+": sampleId",...n.map(g=>JSON.stringify(g)+": null")];l=new Function("datum","sampleId",`return {
`+m.join(`,
`)+`
};`)},d=f=>{r||c(f);for(const[p,u]of r){const m=l(f,p);for(let y=0;y<u.length;y++)m[n[y]]=f[u[y]];this._propagate(m)}},h=f=>{c(f),d(f),this.handle=d};this.handle=h,this.beginBatch=f=>{gn(f)&&(this.handle=h),super.beginBatch(f)}}}class _a extends C{get behavior(){return j}constructor(e){super();this.params=e,this.buffer=[]}reset(){this.buffer=[]}handle(e){this.buffer.push(e)}complete(){var d;const e=this.params,t=e.as||["y0","y1"],n=e.sort?Ht(e.sort.field,e.sort.order):void 0,s=e.field?E(e.field):()=>1,o=e.groupby.map(h=>E(h)),r=ws(this.buffer,h=>o.map(f=>f(h)).join()).map(h=>h[1]);let a=h=>!0;if(e.baseField){const h=E(e.baseField);a=f=>h(f)!==null}let l,c;switch(e.offset){case"normalize":l=(h,f)=>h/f,c=(h,f)=>Fe(h,f);break;case"center":l=(h,f)=>h-f/2,c=(h,f)=>Fe(h,f);break;case"information":{const h=Math.log2((d=e.cardinality)!=null?d:4);l=(f,p)=>f/p,c=(f,p)=>{const u=0,m=Fe(f,w=>+!a(w)),y=Fe(f,p),g=y-m;let b=0;for(let w=0;w<f.length;w++){const S=f[w];if(a(S)){const I=p(S)/g;b-=I*Math.log2(I)}}return g/(h-(b+u))*(g/y)}}break;default:l=(h,f)=>h,c=(h,f)=>1}for(const h of r){n&&h.sort(n);const f=c(h,s);let p=0;for(const u of h){const m=p+s(u);a(u)&&(u[t[0]]=l(p,f),u[t[1]]=l(m,f),this._propagate(u),p=m)}}super.complete()}}class Ca extends C{get behavior(){return U}constructor(e){super();var o,r;const t=E((o=e.field)!=null?o:"sequence"),[n,s]=(r=e.as)!=null?r:["pos","sequence"];this.handle=a=>{const l=Object.assign({},a,{[s]:"",[n]:0}),c=t(a);for(let d=0;d<c.length;d++){const h=Object.assign({},l);h[n]=d,h[s]=c.charAt(d),this._propagate(h)}}}}class Ia extends C{get behavior(){return U}constructor(e){super();this.params=e,this.buffer=[]}reset(){this.buffer=[]}handle(e){this.buffer.push(e)}complete(){const t=this.params.groupby,n=t.map(o=>E(o)),s=Pe(this.buffer,...n);for(const[o,r]of Ct(s)){const a={count:r.length};for(let l=0;l<t.length;l++)a[t[l]]=o[l];this._propagate(a)}super.complete()}}const ka="_uniqueId",ei=1e4,ti=[null];class ni extends C{get behavior(){return j}constructor(e){super();var t;this.params=e,this.as=(t=e.as)!=null?t:ka,this._blocks=[],this._usedBlocks=0,this._id=-1}initialize(){}reset(){super.reset(),this._usedBlocks=0,this._id=-1}handle(e){e[this.as]=this._nextId(),this._propagate(e)}_nextId(){return++this._id%ei==0&&(this._id=this._getBlock()*ei),this._id}_getBlock(){return this._usedBlocks<this._blocks.length?this._blocks[this._usedBlocks++]:this._reserveBlock()}_reserveBlock(){const e=ti.length;return ti[e]=this,this._blocks.push(e),this._usedBlocks++,e}}const Oa={aggregate:Ia,collect:Yn,coverage:na,filterScoredLabels:oa,filter:ra,flattenCompressedExons:ca,flattenDelimited:ha,flattenSequence:Ca,formula:fa,identifier:ni,linearizeGenomicCoordinate:Jn,measureText:xa,pileup:wa,project:ba,regexExtract:Sa,regexFold:Ea,sample:yn,stack:_a};function Da(i,e){const t=Oa[i.type];if(t)return new t(i,e);throw new Error("Unknown transform: "+i.type)}function Aa(i){return"values"in i}class Ta extends le{constructor(e){super();var t;if(this.params=e,typeof e.values=="string"&&!((t=e==null?void 0:e.format)==null?void 0:t.type))throw new Error("Data format type (csv, dsv, ...) must be specified if a string is provided!")}loadSynchronously(){const e=this.params.values;let t=[],n=s=>s;if(Array.isArray(e))e.length>0&&(t=e,n=He(e[0]));else if(typeof e=="object")t=[e];else if(typeof e=="string")t=Qe(e,Hn(this.params));else throw new Error('"values" in data configuration is not an array, object, or a string!');this.reset(),this.beginBatch({type:"file"});for(const s of t)this._propagate(n(s));this.complete()}async load(){this.loadSynchronously()}}function Ra(i){return"url"in i}class Pa extends le{constructor(e,t){super();this.params=e,this.baseUrl=t}get identifier(){return JSON.stringify({params:this.params,baseUrl:this.baseUrl})}async load(){const e=this.params.url,t=Array.isArray(e)?e:[e],n=async o=>Re({baseURL:this.baseUrl}).load(o).catch(r=>{throw new Error(`Cannot fetch: ${this.baseUrl}${o}: ${r.message}`)}),s=(o,r)=>{try{const a=Qe(o,Hn(this.params));this.beginBatch({type:"file",url:r});for(const l of a)this._propagate(l)}catch(a){throw new Error(`Cannot parse: ${r}: ${a.message}`)}};this.reset(),await Promise.all(t.map(o=>n(o).then(s))),this.complete()}}function za(i){return"sequence"in i}class Fa extends le{constructor(e){super();if(this.sequence=e.sequence,!("start"in this.sequence))throw new Error("'start' is missing from sequence parameters!");if(!("stop"in this.sequence))throw new Error("'stop' is missing from sequence parameters!")}loadSynchronously(){const e=this.sequence.as||"data",t=this.sequence.step||1,n=this.sequence.stop;this.reset(),this.beginBatch({type:"file"});for(let s=this.sequence.start;s<n;s+=t)this._propagate({[e]:s});this.complete()}async load(){this.loadSynchronously()}}function La(i){return"dynamicSource"in i}class Na extends le{publishData(e){this.reset(),this.beginBatch({type:"file"});let t;for(const n of e)t||(t=He(n)),this._propagate(t(n));this.complete()}async load(){}}function Ma(i,e){if(Aa(i))return new Ta(i);if(Ra(i))return new Pa(i,e);if(za(i))return new Fa(i);if(La(i))return new Na;throw new Error("Cannot figure out the data source type: "+JSON.stringify(i))}function Va(i){const e=Object.keys(i).filter(n=>typeof n=="string"),t=new Function("source","return { "+e.map(n=>JSON.stringify(n)).map(n=>`${n}: source[${n}]`).join(`,
`)+" };");return t.properties=e,t}class ii extends C{get behavior(){return U}constructor(){super();const e=t=>{const n=Va(t);this.handle=s=>this._propagate(n(s)),this.handle(t)};this.handle=e,this.beginBatch=t=>{gn(t)&&(this.handle=e),super.beginBatch(t)}}}class si{constructor(){this._dataSourcesByHost=new Map,this._collectorsByHost=new Map,this._observers=new Map}get dataSources(){return[...new Set(this._dataSourcesByHost.values()).values()]}get collectors(){return[...this._collectorsByHost.values()]}addObserver(e,t){let n=this._observers.get(t);n||(n=[],this._observers.set(t,n)),n.push(e)}_relayObserverCallback(e,t){const n=this._observers.get(t);if(n)for(const s of n)s(e)}addDataSource(e,t){this._dataSourcesByHost.set(t,e)}findDataSourceByKey(e){return this._dataSourcesByHost.get(e)}addCollector(e,t){this._collectorsByHost.set(t,e),e.observers.push(n=>this._relayObserverCallback(n,t))}findCollectorByKey(e){return this._collectorsByHost.get(e)}initialize(){for(const e of this.dataSources)e.visit(t=>t.initialize())}}function Ba(i){return"name"in i}class $a extends le{constructor(e,t){super();this.getNamedData=t,this.params=e}get identifier(){return this.params.name}_getValues(){const e=this.getNamedData(this.params.name);if(e)return e;throw new Error("Cannot find named data: "+this.params.name)}loadSynchronously(){const e=this._getValues();let t=n=>n;if(Array.isArray(e))e.length>0&&(t=He(e[0]));else throw new Error(`Named data "${this.params.name}" is not an array!`);this.reset(),this.beginBatch({type:"file"});for(const n of e)this._propagate(t(n));this.complete()}async load(){this.loadSynchronously()}}function Ua(i,e){const t=[];let n;const s=e!=null?e:new si,o=[];function r(d,h=()=>{}){if(!n)throw h()||new Error("Cannot append data flow node, no parent exist!");return n.addChild(d),n=d,d}function a(d,h){return r(d,()=>new Error(`Cannot append a transform because no (inherited) data are available! ${h?JSON.stringify(h):""}`))}function l(d,h){for(const f of d){let p;try{p=Da(f,h)}catch(u){throw console.warn(u),new Error(`Cannot initialize "${f.type}" transform: ${u}`)}p.behavior&j&&a(new ii),a(p)}}const c=d=>{if(t.push(n),d.spec.data){const h=jr(d.spec.data)?d.getDynamicDataSource():Ba(d.spec.data)?new $a(d.spec.data,d.context.getNamedData):Ma(d.spec.data,d.getBaseUrl());n=h,s.addDataSource(h,d)}if(d.spec.transform&&l(d.spec.transform,d),d instanceof V){if(!n)throw new Error("A unit view has no (inherited) data source");const h=Ha(d);if(h){o.push(h.rewrite);for(const p of h.transforms)a(p)}d.mark.isPickingParticipant()&&a(new ni({type:"identifier"}));const f=new Yn({type:"collect",groupby:d.getFacetFields(),sort:Ga(d,h==null?void 0:h.rewrittenEncoding)});r(f),s.addCollector(f,d)}$n(d.spec)};return c.postOrder=d=>{n=t.pop()},i.visit(c),o.forEach(d=>d()),s}function Ha(i){var o,r,a,l;const e=[],t={},n=[];for(const[c,d]of Object.entries(i.getEncoding())){const h=c;ge(h)&&Kt(d)&&n.push({channel:h,chromPosDef:d})}const s=Pe(n,c=>se(c.channel),c=>c.chromPosDef.chrom);for(const[c,d]of s.entries())for(const[h,f]of d.entries()){const p=[],u=[],m=[];for(const{channel:y,chromPosDef:g}of f){const b=I=>I.replace(/[^A-Za-z0-9_]/g,""),w=["_linearized_",b(g.chrom),"_",b(g.pos)].join(""),S=D(v({},(a=(r=(o=i.spec.encoding)==null?void 0:o[y])!=null?r:i.getEncoding()[y])!=null?a:{}),{field:w});delete S.chrom,delete S.pos,!S.type&&g.type&&(S.type=g.type),t[y]=S,p.push(g.pos),m.push((l=g.offset)!=null?l:0),u.push(w)}e.push(new Jn({type:"linearizeGenomicCoordinate",channel:c,chrom:h,pos:p,offset:m,as:u},i))}return e.length?{transforms:e,rewrittenEncoding:t,rewrite:()=>{i.spec.encoding=v(v({},i.spec.encoding),t),ln(i.mark,"encoding")}}:void 0}function Ga(i,e){var n;const t=v(v({},i.getEncoding()),e).x;if(P(t)&&((n=i.getScaleResolution("x"))==null?void 0:n.isZoomable())){if(ue(t))return{field:t.field};if(!pe(t))throw new Error("A zoomable x channel must be mapped to a field.")}}function oi(i,e=void 0){if(i.parent!==e)return!1;for(const t of i.children)if(!oi(t,i))return!1;return!0}function It(i,e=!1){if(i instanceof ii)if(e)e=!1;else{const t=i.children[0];i.excise(),t&&It(t,e);return}i.behavior&U&&(e=!1);for(let t=0,n=i.children.length;t<n;t++)It(i.children[t],e||t<n-1)}function qa(i){const e=[...i._dataSourcesByHost.entries()],t=new Map;for(const n of e){const s=n[1];s.identifier&&!t.has(s.identifier)&&t.set(s.identifier,s)}i._dataSourcesByHost.clear();for(let[n,s]of e){const o=t.get(s.identifier);o&&(o.adoptChildrenOf(s),s=o),i.addDataSource(s,n)}}function Wa(i){if(It(i),!oi(i))throw new Error("Encountered a bug! There's a problem in the data flow structure.")}function ja(i){for(const e of i.dataSources)Wa(e);qa(i)}function Xa(i){const e=[];return i.visit(t=>{e.push(t)}),e}function Za(i){i.visit(t=>{t instanceof V&&t.resolve("scale")});const e=new Set;i.visit(t=>{for(const n of Object.values(t.resolutions.scale)){const s=n.name;if(s&&e.has(s))throw new Error(`The same scale name "${s}" occurs in multiple scale resolutions!`);e.add(s)}}),i.visit(t=>{t instanceof V&&t.resolve("axis")}),i.visit(t=>t.onScalesResolved())}function Ka(i){for(const e of me){const t=i.getScaleResolution(e);t&&!t.name&&t.isZoomable()&&(t.name=`${e}_at_root`)}}function Ya(i){let e=i;const t=n=>n&&!R(n);return i.visit(n=>{if(n instanceof xt||n instanceof V){const s=n.getEncoding();if(n instanceof V&&!t(s.x)&&!t(s.y))return $e;const o=n.parent,r=new ea(n.context,o);if(n.parent=r,r.child=n,r.name=n.name+"_decorator",o)if(o instanceof H)o.replaceChild(n,r);else{let a;if(i.visit(Qa((l,c)=>{if(l===n)return a=z(c),Se})),a instanceof H)a.replaceChild(n,r);else throw new Error("Cannot find parent while decorating: "+n.getPathString())}return r.resolutions=n.resolutions,n.resolutions={scale:{},axis:{}},r.spec.height=n.spec.height,n.spec.height="container",r.spec.width=n.spec.width,n.spec.width="container",r.spec.padding=n.spec.padding,n.spec.padding=void 0,n===i&&(e=r),r.initialize(),$e}}),e}async function Ja(i,e,t){var r;if(!i.import.url)throw new Error("Cannot import, not an import spec: "+JSON.stringify(i));const n=Re({baseURL:e}),s=i.import.url,o=JSON.parse(await n.load(s).catch(a=>{throw new Error(`Could not load imported view spec: ${s} 
Reason: ${a.message}`)}));if(t.isViewSpec(o))return o.baseUrl=(r=s.match(/^[^?#]*\//))==null?void 0:r[0],o;throw new Error(`The imported spec "${s}" is not a view spec: ${JSON.stringify(i)}`)}async function ri(i){const e=[];i.visit(t=>{if(t instanceof Vn)return e.push(t),$e});for(const t of e){const n=t.context,s=await Ja(t.spec,t.getBaseUrl(),n),o=n.createView(s,t.parent,t.name);t.parent.replaceChild(t,o),await ri(o)}}function Qa(i){const e=[],t=n=>i(n,e);return t.beforeChildren=n=>{e.push(n)},t.afterChildren=n=>{e.pop()},t}class kt{constructor(e){this.globalOptions=e}pushView(e,t){}popView(e){}renderMark(e,t){}}class ai extends kt{constructor(e,t){super(e);this.webGLHelper=t,this.buffer=[],this.coords=void 0,this.views=new Set}pushView(e,t){this.views.add(e),this.coords=t}renderMark(e,t){if(this.globalOptions.picking&&!e.isPickingParticipant())return;const n=e.render(t);n&&this.buffer.push({mark:e,callback:n,coords:this.coords,clipRect:t.clipRect})}renderDeferred(){if(this.batch||this._buildBatch(),this.batch.length==0)return;const e=this.webGLHelper.gl,t=this.globalOptions.picking;e.bindFramebuffer(e.FRAMEBUFFER,t?this.webGLHelper._pickingBufferInfo.framebuffer:null),this.webGLHelper.clearAll();for(const n of this.views)n.onBeforeRender();for(const n of this.batch)n();t&&e.bindFramebuffer(e.FRAMEBUFFER,null)}_buildBatch(){this.batch=[];let e=!0,t=!0;const n=r=>()=>{e&&r()},s=r=>()=>{e&&t&&r()},o=Pe(this.buffer,r=>r.mark);for(const[r,a]of o.entries()){if(!r.isReady())continue;this.batch.push(()=>{e=r.unitView.getEffectiveOpacity()>0}),this.batch.push(n(()=>r.prepareRender(this.globalOptions)));let l;for(const c of a){const d=c.coords;d.equals(l)||this.batch.push(n(()=>{t=r.setViewport(d,c.clipRect)})),this.batch.push(s(c.callback)),l=c.coords}}}}class el extends kt{constructor(e){super(e);this.root=void 0,this.stack=[],this.lastAddition=void 0}pushView(e,t){const n=new tl(e,t);this.root?z(this.stack).addChild(n):this.root=n,this.stack.push(n)}popView(e){this.stack.pop()}getLayout(){return this.root}}class tl{constructor(e,t){this.view=e,this.coords=t,this.children=[]}addChild(e){const t=z(this.children);t&&e.view===t.view&&e.coords.equals(t.coords)||this.children.push(e)}dispatchInteractionEvent(e){if(this.coords.containsPoint(e.point.x,e.point.y)){if(this.view.handleInteractionEvent(this.coords,e,!0),e.stopped)return;if(this.children.length==0)e.target=this.view;else for(const t of this.children){if(t.dispatchInteractionEvent(e),e.target)break;if(e.stopped)return}this.view.handleInteractionEvent(this.coords,e,!1)}}}class nl extends kt{constructor(...e){super({});this.contexts=e}pushView(e,t){for(const n of this.contexts)n.pushView(e,t)}popView(e){for(const t of this.contexts)t.popView(e)}renderMark(e,t){for(const n of this.contexts)n.renderMark(e,t)}}class il{constructor(e,t){this.point=e,this.uiEvent=t,this.stopped=!1,this.target=void 0}stopPropagation(){this.stopped=!0}get type(){return this.uiEvent.type}}class sl{constructor(e,t){this.x=e,this.y=t}equals(e){return e?e===this||e.x===this.x&&e.y===this.y:!1}}const ol=i=>new Promise(e=>setTimeout(e,i));function rl(i){const e=i.requestAnimationFrame||window.requestAnimationFrame,t=i.signal,n=()=>new Promise((s,o)=>{if(t==null?void 0:t.aborted)return o("aborted");const r=performance.now(),a=r+(i.duration||1e3),l=typeof i.from=="number"?i.from:0,c=typeof i.to=="number"?i.to:1,d=i.easingFunction||(m=>m),h=m=>(m-r)/(a-r),f=m=>m*(c-l)+l,p=m=>Math.max(0,Math.min(1,m)),u=m=>{(t==null?void 0:t.aborted)?o("aborted"):(i.onUpdate(f(d(p(h(m))))),m<a?e(u):(i.onUpdate(f(d(1))),s()))};e(u)});return i.delay?(t==null?void 0:t.aborted)?Promise.reject("aborted"):ol(i.delay).then(n):n()}class al{constructor(e){this._renderCallback=e,this._renderRequested=!1,this._warn=!1,this.transitions=[]}requestTransition(e){this.cancelTransition(e),this.transitions.push(e),this.requestRender()}cancelTransition(e){const t=this.transitions.indexOf(e);t>=0&&this.transitions.splice(t,1)}requestRender(){this._renderRequested?this._warn&&console.warn("Render already requested!"):(this._renderRequested=!0,window.requestAnimationFrame(e=>{this._renderRequested=!1;const t=this.transitions;this.transitions=[];let n;for(;n=t.shift();)n(e);this._renderCallback(e)}))}transition(e){return rl(v({requestAnimationFrame:t=>this.requestTransition(t)},e))}}function li(){const i=e=>e;return i.invert=e=>e,i.copy=li,i.invertRange=()=>{},i}class ll{constructor(e){this.genomes=new Map,this.genomeSpy=e}async initialize(e){const t=new kr(e);return this.genomes.set(t.name,t),Promise.all([...this.genomes.values()].map(n=>n.load(this.genomeSpy.spec.baseUrl)))}getGenome(e){if(!this.genomes.size)throw new Error("No genomes have been configured!");if(e){const t=this.genomes.get(e);if(!t)throw new Error(`No genome with the name ${e} has been configured!`);return t}else{if(this.genomes.size>1)throw new Error("Cannot pick a default genome! More than one have been configured!");return this.genomes.values().next().value}}}var cl="assets/Lato-Regular.e459d1f9.png";const hl={thin:100,light:300,regular:400,normal:400,medium:500,bold:700,black:900};class dl{constructor(e){this._webGLHelper=e,this.fontRepository="https://raw.githubusercontent.com/etiennepinchon/aframe-fonts/master/fonts/",this._fonts=new Xe([],JSON.stringify),this._metadataPromises=new Map,this._fontPromises=new Map,this._promises=[],this._defaultFontEntry={metrics:ht(Qn),texture:this._createTextureNow(cl)}}async waitUntilReady(){await Promise.all(this._promises)}getFont(e,t="normal",n="regular"){if(k(n)&&(n=hl[n.toLowerCase()],!n))throw new Error("Unknown font weight: "+n);const s={family:e,style:t,weight:n};let o=this._fonts.get(s);return o||(o={metrics:void 0,texture:void 0},this._fonts.set(s,o),this._promises.push(this._loadFontEntry(o,s))),o}async _loadFontEntry(e,t){try{const n=await this._loadMetadata(t.family),s=ul(n,t),o=this.fontRepository+ci(t.family)+"/"+s.replace(/\.\w+/,""),r=this._createTexture(o+".png"),a=this._loadFont(o+".json");e.texture=await r,e.metrics=await a}catch(n){console.log("Cannot load font. Using default.",n),e.metrics=this._defaultFontEntry.metrics,e.texture=this._defaultFontEntry.texture}}_loadFont(e){let t=this._fontPromises.get(e);return t||(t=fetch(e).then(n=>{if(!n.ok)throw new Error("Could not load font: "+n.status);return n}).then(n=>n.json()).then(n=>ht(n)),this._fontPromises.set(e,t)),t}_loadMetadata(e){const t=ci(e);let n=this._metadataPromises.get(t);return n||(n=fetch(this.fontRepository+t+"/METADATA.pb").then(s=>{if(!s.ok)throw new Error("Could not load font metadata: "+s.status);return s}).then(s=>s.text()).then(s=>fl(s)).catch(s=>{console.warn(s)}),this._metadataPromises.set(t,n)),n}getDefaultFont(){return this._defaultFontEntry}_createTexture(e){const t=this._webGLHelper.gl;return new Promise((n,s)=>{ke(t,{src:e,min:t.LINEAR},(o,r,a)=>{o?s(o):n(r)})})}_createTextureNow(e){const t=this._webGLHelper.gl;let n;const s=new Promise((o,r)=>{n=ke(t,{src:e,min:t.LINEAR},(a,l,c)=>{a?r(a):o(l)})});return this._promises.push(s),n}}function ci(i){return i.toLowerCase().replaceAll(/[^\w]/g,"")}function fl(i){const e=i.split(`
`),t=[];let n;for(const s of e)if(s.startsWith("fonts {")&&(n={name:void 0,style:void 0,weight:void 0,filename:void 0,post_script_name:void 0,full_name:void 0,copyright:void 0}),s.startsWith("}")&&(t.push(n),n=void 0),n){let o=s.match(/^\s*([A-Za-z_]+):[ ]?"(.*)"$/);if(o){const r=o[1];n[r]=o[2]}if(o=s.match(/^\s*([A-Za-z_]+):[ ]?(\d+)$/),o){const r=o[1];n[r]=+o[2]}}return t}function ul(i,e){let t,n=Number.POSITIVE_INFINITY;for(const s of i)if(e.family.localeCompare(s.name,void 0,{sensitivity:"accent"})==0&&e.style==s.style){const o=Math.abs(e.weight-s.weight);o<n&&(n=o,t=s)}return t==null?void 0:t.filename}function pl(i,e){const t=[];let n;for(const s of i.split(`
`))if(s.startsWith(">"))n={identifier:s.match(/>(\S+)/)[1],sequence:""},t.push(n);else if(n)n.sequence+=s.trim();else throw new Error("Invalid fasta file!");return t}class ml{constructor(e,t){this.animator=e,this.disabled=!!t,this.damping=.015,this.acceleration=.3,this.accelerationThreshold=100,this.lowerLimit=.5,this.loop=!1,this.momentum=0,this.timestamp=0,this.callback=null,this._transitionCallback=this.animate.bind(this),this.clear()}clear(){this.momentum=0,this.timestamp=null,this.loop=null,this.callback=null}cancel(){this.loop&&(this.animator.cancelTransition(this._transitionCallback),this.clear())}setMomentum(e,t){if(this.disabled){t(e);return}e*this.momentum<0?this.momentum=0:Math.abs(e)>this.accelerationThreshold?this.momentum=bs([this.momentum,e],this.acceleration):this.momentum=e,this.callback=t,this.loop||this.animate()}animate(e){this.callback(this.momentum);const t=e-this.timestamp||0;this.timestamp=e;const n=Math.abs(this.momentum);this.momentum=Math.sign(this.momentum)*Math.max(0,n-((n*this.damping)**1.5+.04)*t),Math.abs(this.momentum)>this.lowerLimit?(this.loop=!0,this.animator.requestTransition(this._transitionCallback)):this.clear()}}function gl(i){const e={},t=["string","number","boolean"],n=["wheelDelta","wheelDeltaX","wheelDeltaY"];for(const s in i){const o=s;!n.includes(s)&&t.includes(typeof i[o])&&(e[o]=i[o])}return e}function hi(i,e,t=!0){let n,s=r=>{};return function(...a){return new Promise((l,c)=>{const d=()=>{clearTimeout(n),s=h=>{},l(i(...a))};t&&s("debounced"),clearTimeout(n),s=c,n=setTimeout(d,e)})}}const di=new Map;async function yl(i,e,t){var o;const n=i.symbol;let s=(o=di.get(n))!=null?o:await wl(i.symbol);return s?(di.set(n,s),_`
            <div class="title">
                <strong>${s.name}</strong>
                ${s.description}
            </div>
            <p class="summary">${s.summary}</p>
            <p class="source">Source: NCBI RefSeq Gene</p>
        `):null}async function xl(i){console.log("Searching: "+i);const e={mode:"cors"},n=(await fetch(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=gene&term=${i}[GENE]&sort=relevance&retmode=json`,e).then(s=>s.json())).esearchresult.idlist[0];return n?(await fetch(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=gene&id=${n}&retmode=json`,e).then(r=>r.json())).result[n]:null}const vl=hi(xl,500);function wl(i){return vl(i)}const bl=A(".4~r"),Sl=A(".4~e");function El(i){return i===null?_` <span class="na">NA</span> `:k(i)?i.substring(0,30):Number.isInteger(i)?""+i:T(i)?Math.abs(i)>Math.pow(10,8)||Math.abs(i)<Math.pow(10,-8)?Sl(i):bl(i):_e(i)?i?"True":"False":"?"+typeof i+" "+i}async function _l(i,e,t){const n=(r,a)=>{var l;for(const[c,d]of Object.entries(e.encoders))if((l=d==null?void 0:d.accessor)==null?void 0:l.fields.includes(r))switch(c){case"color":case"fill":case"stroke":return _`
                            <span
                                class="color-legend"
                                style=${`background-color: ${d(a)}`}
                            ></span>
                        `}return""},s=_`
        <table class="attributes">
            ${Object.entries(i).filter(([r,a])=>!r.startsWith("_")).map(([r,a])=>_`
                        <tr>
                            <th>${r}</th>
                            <td>
                                ${El(a)} ${n(r,i)}
                            </td>
                        </tr>
                    `)}
        </table>
    `,o=e.unitView.spec.title?_`
              <div class="title">
                  <strong>${e.unitView.spec.title}</strong>
              </div>
          `:"";return _`${o}${s}`}De("index",et,["continuous"]);De("locus",Ds,["continuous"]);De("null",li,[]);Ss("fasta",pl);class Cl{constructor(e,t,n={}){var s;this.container=e,this.spec=t,this.accessorFactory=new $s,this.viewFactory=new Mr,this.namedDataProviders=[],this.animator=new al(()=>this.renderAll()),this.genomeStore=void 0,this.viewVisibilityPredicate=o=>o.isVisibleInSpec(),this._renderingContext=void 0,this._pickingContext=void 0,this._dirtyPickingBuffer=!1,this._currentHover=void 0,this._wheelInertia=new ml(this.animator),this._keyboardListeners=new Map,this._eventListeners=new Map,this.tooltipHandlers=v({default:_l,refseqgene:yl},(s=n.tooltipHandlers)!=null?s:{}),this.viewRoot=void 0}registerNamedDataProvider(e){this.namedDataProviders.unshift(e)}getNamedData(e){for(const t of this.namedDataProviders){const n=t(e);if(n)return n}}broadcast(e,t){const n={type:e,payload:t};this.viewRoot.visit(s=>s.handleBroadcast(n))}_prepareContainer(){this.container.classList.add("genome-spy"),this.container.classList.add("loading"),this._glHelper=new Eo(this.container,()=>{if(this.viewRoot){const e=this.viewRoot.getSize(),t=n=>n.grow>0?void 0:n.px;return{width:t(e.width),height:t(e.height)}}}),this.loadingMessageElement=document.createElement("div"),this.loadingMessageElement.className="loading-message",this.loadingMessageElement.innerHTML='<div class="message">Loading<span class="ellipsis">...</span></div>',this.container.appendChild(this.loadingMessageElement),this.tooltip=new Ps(this.container),this.loadingMessageElement.querySelector(".message").addEventListener("transitionend",()=>{this.loadingMessageElement.style.display="none"})}destroy(){this.container.classList.remove("genome-spy"),this.container.classList.remove("loading");for(const[e,t]of this._keyboardListeners)for(const n of t)document.removeEventListener(e,n);for(this._glHelper.finalize();this.container.firstChild;)this.container.firstChild.remove()}async _prepareViewsAndData(){this.spec.genome&&(this.genomeStore=new ll(this),await this.genomeStore.initialize(this.spec.genome));const e=this,t={dataFlow:new si,accessorFactory:this.accessorFactory,glHelper:this._glHelper,animator:this.animator,genomeStore:this.genomeStore,fontManager:new dl(this._glHelper),requestLayoutReflow:()=>{},updateTooltip:this.updateTooltip.bind(this),getNamedData:this.getNamedData.bind(this),getCurrentHover:()=>this._currentHover,addKeyboardListener:(a,l)=>{document.addEventListener(a,l);let c=this._keyboardListeners.get(a);c||(c=[],this._keyboardListeners.set(a,c)),c.push(l)},isViewVisible:e.viewVisibilityPredicate,isViewSpec:a=>e.viewFactory.isViewSpec(a),createView:function(a,l,c){return e.viewFactory.createView(a,t,l,c)}},n=this.spec;n.datasets&&this.registerNamedDataProvider(a=>n.datasets[a]),this.viewRoot=t.createView(n,null,"viewRoot"),await ri(this.viewRoot),Za(this.viewRoot),Ka(this.viewRoot),this.viewRoot=Ya(this.viewRoot),this._glHelper.invalidateSize();const s=[];this.viewRoot.visit(a=>{a instanceof V&&s.push(a)});const o=Ua(this.viewRoot,t.dataFlow);ja(o),this.broadcast("dataFlowBuilt",o),o.dataSources.forEach(a=>console.log(a.subtreeToString())),s.forEach(a=>a.mark.initializeEncoders());const r=Promise.all(s.map(a=>a.mark.initializeGraphics()));for(const a of s)o.addObserver(l=>{a.mark.initializeData(),a.mark.updateGraphicsData()},a);await t.fontManager.waitUntilReady(),o.initialize(),await Promise.all(o.dataSources.map(a=>a.load())),this.viewRoot.visit(a=>{for(const l of Object.values(a.resolutions.scale))l.reconfigure()}),this.broadcast("dataLoaded"),await r,this.viewRoot.visit(a=>{for(const l of Object.values(a.resolutions.scale))this._glHelper.createRangeTexture(l)});for(const a of s)a.mark.finalizeGraphicsInitialization();t.requestLayoutReflow=this.computeLayout.bind(this),this.viewRoot.visit(a=>Me(a,"size")),this._glHelper.invalidateSize()}async launch(){try{return this._prepareContainer(),await this._prepareViewsAndData(),this.registerMouseEvents(),this.computeLayout(),this.animator.requestRender(),this._glHelper.addEventListener("resize",()=>{this.computeLayout(),this.renderAll()}),!0}catch(e){const t=`${e.view?`At "${e.view.getPathString()}": `:""}${e.toString()}`;return console.error(e.stack),Il(this.container,t),!1}finally{this.container.classList.remove("loading"),window.setTimeout(()=>{this.loadingMessageElement.style.display="none"},2e3)}}registerMouseEvents(){const e=this._glHelper.canvas,t=n=>{var s;if(this.layout&&n instanceof MouseEvent){n.type=="mousemove"&&(this.tooltip.handleMouseMove(n),this._tooltipUpdateRequested=!1,n.buttons==0&&this.renderPickingFramebuffer());const o=e.getBoundingClientRect(),r=new sl(n.clientX-o.left-e.clientLeft,n.clientY-o.top-e.clientTop),a=l=>{this.layout.dispatchInteractionEvent(new il(r,l)),this._tooltipUpdateRequested||this.tooltip.clear()};if(n.type!="wheel"&&this._wheelInertia.cancel(),n.type=="mousemove")this._handlePicking(r.x,r.y);else if(n.type=="mousedown"||n.type=="mouseup")this.renderPickingFramebuffer();else if(n.type=="wheel"){this._tooltipUpdateRequested=!1;const l=n;if(Math.abs(l.deltaX)>Math.abs(l.deltaY))this._currentHover=null,this._wheelInertia.cancel();else{const c=gl(l);this._wheelInertia.setMomentum(l.deltaY*(l.deltaMode?80:1),d=>{const h=new WheelEvent("wheel",D(v({},c),{deltaMode:0,deltaX:0,deltaY:d}));a(h)}),l.preventDefault();return}}if(n.type=="click"){const l=this._currentHover?{type:n.type,viewPath:[...this._currentHover.mark.unitView.getAncestors()].map(c=>c.name).reverse(),datum:this._currentHover.datum}:{type:n.type,viewPath:null,datum:null};(s=this._eventListeners.get("click"))==null||s.forEach(c=>c(l))}a(n)}};["mousedown","mouseup","wheel","click","mousemove","gesturechange","contextmenu"].forEach(n=>e.addEventListener(n,t)),e.addEventListener("mousedown",()=>{document.addEventListener("mouseup",()=>this.tooltip.popEnabledState(),{once:!0}),this.tooltip.pushEnabledState(!1)}),e.addEventListener("dragstart",n=>n.stopPropagation())}_handlePicking(e,t){var o;const n=this._glHelper.readPickingPixel(e,t),s=n[0]|n[1]<<8|n[2]<<16;if(s==0){this._currentHover=null;return}if(s!==((o=this._currentHover)==null?void 0:o.uniqueId)&&(this._currentHover=null),this._currentHover||this.viewRoot.visit(r=>{if(r instanceof V){if(r.mark.isPickingParticipant()){const a=r.mark.encoders.uniqueId.accessor;r.getCollector().visitData(l=>{a(l)==s&&(this._currentHover={mark:r.mark,datum:l,uniqueId:s})})}if(this._currentHover)return Se}}),this._currentHover){const r=this._currentHover.mark;this.updateTooltip(this._currentHover.datum,async a=>{var c;if(!r.isPickingParticipant())return;const l=r.properties.tooltip;if(l!==null){const d=(c=l==null?void 0:l.handler)!=null?c:"default",h=this.tooltipHandlers[d];if(!h)throw new Error("No such tooltip handler: "+d);return h(a,r,l==null?void 0:l.params)}})}}updateTooltip(e,t){if(!this._tooltipUpdateRequested||!e)this.tooltip.updateWithDatum(e,t),this._tooltipUpdateRequested=!0;else throw new Error("Tooltip has already been updated! Duplicate event handler?")}computeLayout(){const e=this.viewRoot;if(!e)return;this.broadcast("layout");const t=this._glHelper.getLogicalCanvasSize();if(isNaN(t.width)||isNaN(t.height)){console.log(`NaN in canvas size: ${t.width}x${t.height}. Skipping computeLayout().`);return}this._renderingContext=new ai({picking:!1},this._glHelper),this._pickingContext=new ai({picking:!0},this._glHelper);const n=new el({});e.render(new nl(this._renderingContext,this._pickingContext,n),M.create(0,0,t.width,t.height)),this.layout=n.getLayout(),this.broadcast("layoutComputed")}renderAll(){var e;(e=this._renderingContext)==null||e.renderDeferred(),this._dirtyPickingBuffer=!0}renderPickingFramebuffer(){!this._dirtyPickingBuffer||(this._pickingContext.renderDeferred(),this._dirtyPickingBuffer=!1)}getSearchableViews(){const e=[];return this.viewRoot.visit(t=>{t instanceof V&&t.getAccessor("search")&&e.push(t)}),e}getNamedScaleResolutions(){const e=new Map;return this.viewRoot.visit(t=>{for(const n of Object.values(t.resolutions.scale))n.name&&e.set(n.name,n)}),e}}function Il(i,e){const t=document.createElement("div");t.className="message-box";const n=document.createElement("div");n.textContent=e,t.appendChild(n),i.appendChild(t)}var kl="assets/bowtie.663e9fd6.svg";async function Ol(i,e,t={}){var o,r,a;let n;if(k(i)){if(n=document.querySelector(i),!n)throw new Error(`No such element: ${i}`)}else if(i instanceof HTMLElement)n=i;else throw new Error(`Invalid element: ${i}`);let s;try{const l=W(e)?e:await Al(e);if((o=l.baseUrl)!=null||(l.baseUrl=""),(r=l.width)!=null||(l.width="container"),(a=l.padding)!=null||(l.padding=10),n==document.body){const c=document.createElement("div");c.style.position="fixed",c.style.inset="0",c.style.overflow="hidden",n.appendChild(c),n=c}s=new Cl(n,l,t),Dl(s,t),await s.launch()}catch(l){n.innerText=l.toString(),console.error(l)}return{finalize(){for(s.destroy();n.firstChild;)n.firstChild.remove()},addEventListener(l,c){const d=s._eventListeners;let h=d.get(l);h||(h=new Set,d.set(l,h)),h.add(c)},removeEventListener(l,c){var h;(h=s._eventListeners.get(l))==null||h.delete(c)},getScaleResolutionByName(l){return s.getNamedScaleResolutions().get(l)}}}function Dl(i,e){e.namedDataProvider&&i.registerNamedDataProvider(e.namedDataProvider)}async function Al(i){let e;try{e=JSON.parse(await Re().load(i))}catch(t){throw new Error(`Could not load or parse configuration: ${i}, reason: ${t.message}`)}if(!e.baseUrl){const t=i.match(/^[^?#]*\//);e.baseUrl=t&&t[0]||"./"}return e}var Tl=`{
  "data": {
    "sequence": { "start": 0, "stop": 60, "as": "x" }
  },
  "transform": [
    {
      "type": "formula",
      "expr": "sin((datum.x - 30) / 4) + (datum.x - 30) / 30",
      "as": "y"
    }
  ],
  "mark": "rect",
  "encoding": {
    "x": { "field": "x", "type": "index", "band": 0.9 },
    "y": { "field": "y", "type": "quantitative" },
    "y2": { "datum": 0 },
    "color": {
      "field": "y",
      "type": "quantitative",
      "scale": {
        "type": "threshold",
        "domain": [0],
        "range": ["#ed553b", "#20639b"]
      }
    }
  }
}
`;const Rl="@genome-spy/playground",Pl="0.17.0",zl="A playground for testing GenomeSpy visualizations",Fl={dev:"vite",build:"vite build",serve:"vite preview"},Ll="Kari Lavikka",Nl="BSD-2-Clause",Ml={"@fortawesome/fontawesome-free":"^5.14.0","@fortawesome/fontawesome-svg-core":"^1.2.30","@fortawesome/free-solid-svg-icons":"^5.14.0","@genome-spy/core":"^0.17.0",lit:"^2.0.2","monaco-editor":"^0.30.1","vega-loader":"^4.4.0"};var fi={name:Rl,private:!0,version:Pl,description:zl,scripts:Fl,author:Ll,license:Nl,dependencies:Ml};self.MonacoEnvironment={getWorker(i,e){if(e==="json")return new Es;throw new Error("Unsupported language: "+e)}};class Vl extends Gt{constructor(){super();ce(this,"_editor");ce(this,"_initialValue")}set value(e){this._editor?this._editor.setValue(e):this._initialValue=e}get value(){var e,t;return(t=(e=this._editor)==null?void 0:e.getValue())!=null?t:this._initialValue}createRenderRoot(){return this}disconnectedCallback(){var e,t,n;(e=this._editor)==null||e.dispose(),(n=(t=this._editor)==null?void 0:t.getModel())==null||n.dispose()}render(){return _s}firstUpdated(){this._editor=Cs.create(this,{value:this._initialValue,language:"json",minimap:{enabled:!1}}),this._editor.getModel().onDidChangeContent(()=>{this.dispatchEvent(new CustomEvent("change",{detail:{}}))}),new ResizeObserver(t=>{this._editor.layout()}).observe(this)}}customElements.define("code-editor",Vl);class Bl extends Gt{constructor(){super();ce(this,"_currentTab");ce(this,"files")}createRenderRoot(){return this}render(){return _`
            <ul class="tabs">
                ${Object.keys(this.files).map(e=>_`
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
                ${Object.keys(this.files).map(e=>_`
                        <div
                            class=${e==this._currentTab?"selected":""}
                        >
                            ${Ul(this.files[e].data)}
                        </div>
                    `)}

                <div class=${this._currentTab===void 0?"selected":""}>
                    ${$l(e=>this._handleFiles(e))}
                </div>
            </div>
        `}async _handleFiles(e){const n=e.target.files;for(const s of n){const o=await Hl(s),r=Qe(o,{type:Gl(o,s.name),parse:"auto"});this.files[s.name]={metadata:s,data:r},this._currentTab=s.name}this.requestUpdate(),this.dispatchEvent(new CustomEvent("upload",{detail:{}}))}_changeTab(e){const n=e.target.parentElement.dataset.name;this._currentTab=n,e.preventDefault(),this.requestUpdate()}}customElements.define("file-pane",Bl);function $l(i){return _` <form class="upload-form">
        <input
            type="file"
            multiple
            accept=".csv,.tsv,.txt,.json"
            id="fileInput"
            @change=${i}
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
    </form>`}function Ul(i){const e=Object.keys(i[0]),t=i.slice(0,30),n=e.map(a=>"text-align: "+(typeof i[0][a]=="number"?"right":"left")),s=a=>_`
        <tr>
            ${e.map((l,c)=>_`<td style=${n[c]}>${a[l]}</td> `)}
        </tr>
    `,o=()=>_`
        <tr>
            ${e.map((a,l)=>_`<td style=${n[l]}>...</td> `)}
        </tr>
    `;return _`
        <table class="data-sample-table">
            <thead>
                ${(()=>_`
        <tr>
            ${e.map((a,l)=>_`<th style=${n[l]}>${a}</th> `)}
        </tr>
    `)()}
            </thead>
            <tbody>
                ${t.map(s)}
                ${t.length<i.length?o():""}
            </tbody>
        </table>
    `}function Hl(i){return new Promise((e,t)=>{let n=new FileReader;n.onload=()=>e(n.result),n.onerror=t,n.readAsText(i)})}function Gl(i,e){return/\.json$/.test(e)?"json":i.indexOf("	")>=0?"tsv":"csv"}const ui="playgroundSpec",pi=jt(),mi=jt(),gi={};let Ot,ql=window.localStorage.getItem(ui)||Tl,yi="";const Ge=["stacked","parallel","full"];let Dt=Ge[0];function Wl(){Dt=Ge[(Ge.indexOf(Dt)+1)%Ge.length],xi(),window.dispatchEvent(new Event("resize"))}function jl(i){var e;return(e=gi[i])==null?void 0:e.data}async function At(i=!1){var t;const e=(t=mi.value)==null?void 0:t.value;window.localStorage.setItem(ui,e);try{const n=JSON.parse(e),s=JSON.stringify(n);if(s===yi&&!i)return;yi=s,Ot&&Ot.finalize(),Ot=await Ol(pi.value,n,{namedDataProvider:jl})}catch(n){console.log(n)}}const Xl=()=>_`
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
        <button @click=${Wl}>
            ${qt(Is).node[0]}
            <span>Toggle layout</span>
        </button>
        <span class="spacer"></span>
        <a
            class="version"
            href="https://github.com/genome-spy/genome-spy/releases/tag/v${fi.version}"
            >v${fi.version}</a
        >
        <a href="https://genomespy.app/docs/" target="_blank"
            >${qt(ks).node[0]} <span>Docs</span></a
        >
    </div>
`,Zl=hi(()=>At(),500,!1),Kl=()=>_`
    <section id="playground-layout" class="${Dt}">
        ${Xl()}
        <section id="editor-pane">
            <code-editor
                ${Wt(mi)}
                @change=${Zl}
                .value=${ql}
            ></code-editor>
        </section>
        <section id="genome-spy-pane">
            <div ${Wt(pi)}></div>
        </section>
        <section id="file-pane">
            <file-pane @upload=${At} .files=${gi}></file-pane>
        </section>
    </section>
`;function xi(){je(Kl(),document.body)}xi();At();
