const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/inspectorSession-C1X7LlJv.js","assets/inspectorSession-BvEdR_3c.js","assets/inspectorPanel-Hjl1LfCx.js","assets/lit-BJ21N-0y.js"])))=>i.map(i=>d[i]);
import{i as e}from"./registerWebGL-CwSZKT-a.js";var t={prefix:`fas`,iconName:`bug`,icon:[512,512,[],`f188`,`M256 0c53 0 96 43 96 96l0 3.6c0 15.7-12.7 28.4-28.4 28.4l-135.1 0c-15.7 0-28.4-12.7-28.4-28.4l0-3.6c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4l112 0c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5l64.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6L272 240c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 239.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64.3 0c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z`]};async function n(t,n={}){n.signal?.throwIfAborted();let[{default:r},{GsInspectorPanel:i}]=await Promise.all([e(()=>import(`./inspectorSession-C1X7LlJv.js`),__vite__mapDeps([0,1])),e(()=>import(`./inspectorPanel-Hjl1LfCx.js`),__vite__mapDeps([2,3]))]);n.signal?.throwIfAborted();let a=new r(t),o=new i;o.session=a,n.activePanel&&(o.activePanel=n.activePanel);let s=()=>{n.signal?.removeEventListener(`abort`,s),a.dispose(),o.remove()};n.signal?.addEventListener(`abort`,s,{once:!0});try{await a.refresh(),n.signal?.throwIfAborted()}catch(e){throw s(),e}return{panel:o,session:a,dispose:s}}async function r(e,t={}){let r=t.container??document.body;t.signal?.throwIfAborted();let i=r.ownerDocument.createElement(`section`);i.setAttribute(`role`,`dialog`),i.setAttribute(`aria-label`,`GenomeSpy Inspector`),i.tabIndex=-1,i.className=`gs-inspector-overlay`,Object.assign(i.style,{position:`fixed`,top:`0`,right:`0`,bottom:`0`,zIndex:`2147483647`,width:t.width??`min(46vw, 760px)`,minWidth:`320px`,maxWidth:`100vw`,boxShadow:`0 0 18px rgba(0, 0, 0, 0.35)`,resize:`horizontal`,overflow:`hidden`});let a=await n(e,{activePanel:t.activePanel,signal:t.signal});Object.assign(a.panel.style,{display:`block`,height:`100%`,minHeight:`0`});let o=!1,s=()=>{o||(o=!0,t.signal?.removeEventListener(`abort`,s),a.panel.removeEventListener(`close`,s),a.dispose(),i.remove())};try{t.signal?.throwIfAborted(),t.signal?.addEventListener(`abort`,s,{once:!0}),a.panel.addEventListener(`close`,s,{once:!0}),i.append(a.panel),r.append(i)}catch(e){throw s(),e}return{element:i,panel:a.panel,session:a.session,dispose:s}}function i(e){if(!e.label.trim())throw Error(`A button requires a non-empty accessible label.`);return{mount(t){let n=t.container.ownerDocument,r=n.createElement(`button`);if(r.type=`button`,e.icon){let t=n.createElement(`span`);t.className=`icon`,t.setAttribute(`aria-hidden`,`true`),t.inert=!0,t.append(n.importNode(e.icon,!0)),r.append(t)}else r.textContent=e.label;r.title=e.title??e.label,r.setAttribute(`aria-label`,e.label);async function i(){r.disabled=!0,t.showStatus(``);try{await e.onClick(t)}catch(e){t.reportError(e)}finally{r.disabled=!1}}return r.addEventListener(`click`,i,{signal:t.signal}),{element:r,dispose(){r.removeEventListener(`click`,i)}}}}}function a(e,t,n){return(t=l(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?o(Object(n),!0).forEach(function(t){a(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function c(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function l(e){var t=c(e,`string`);return typeof t==`symbol`?t:t+``}var u=()=>{},d={},f={},p=null,m={mark:u,measure:u};try{typeof window<`u`&&(d=window),typeof document<`u`&&(f=document),typeof MutationObserver<`u`&&(p=MutationObserver),typeof performance<`u`&&(m=performance)}catch{}var{userAgent:h=``}=d.navigator||{},g=d,_=f,v=p,y=m;g.document;var b=!!_.documentElement&&!!_.head&&typeof _.addEventListener==`function`&&typeof _.createElement==`function`,ee=~h.indexOf(`MSIE`)||~h.indexOf(`Trident/`),te=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ne=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,re={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`}},ie={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},ae=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`],x=`classic`,S=`duotone`,oe=[x,S,`sharp`,`sharp-duotone`],se={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`}},ce={"Font Awesome 6 Free":{900:`fas`,400:`far`},"Font Awesome 6 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 6 Brands":{400:`fab`,normal:`fab`},"Font Awesome 6 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 6 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 6 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`}},le=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}]]),ue={classic:{solid:`fas`,regular:`far`,light:`fal`,thin:`fat`,brands:`fab`},duotone:{solid:`fad`,regular:`fadr`,light:`fadl`,thin:`fadt`},sharp:{solid:`fass`,regular:`fasr`,light:`fasl`,thin:`fast`},"sharp-duotone":{solid:`fasds`,regular:`fasdr`,light:`fasdl`,thin:`fasdt`}},de=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],fe={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},pe=[`kit`],me={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},he=[`fak`,`fakd`],ge={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},_e={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},ve={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},ye=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`],be=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],xe={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},Se={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`}},Ce={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`]},we={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`}},Te=[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`],Ee=[`fa`,`fas`,`far`,`fal`,`fat`,`fad`,`fadr`,`fadl`,`fadt`,`fab`,`fass`,`fasr`,`fasl`,`fast`,`fasds`,`fasdr`,`fasdl`,`fasdt`,...ye,...Te],De=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`],Oe=[1,2,3,4,5,6,7,8,9,10],ke=Oe.concat([11,12,13,14,15,16,17,18,19,20]),Ae=[...Object.keys(Ce),...De,`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`border`,`fade`,`beat-fade`,`bounce`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`fw`,`inverse`,`layers-counter`,`layers-text`,`layers`,`li`,`pull-left`,`pull-right`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`stack-1x`,`stack-2x`,`stack`,`ul`,ve.GROUP,ve.SWAP_OPACITY,ve.PRIMARY,ve.SECONDARY].concat(Oe.map(e=>`${e}x`),ke.map(e=>`w-${e}`)),je={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},C=`___FONT_AWESOME___`,Me=16,Ne=`fa`,Pe=`svg-inline--fa`,w=`data-fa-i2svg`,Fe=`data-fa-pseudo-element`,Ie=`data-fa-pseudo-element-pending`,Le=`data-prefix`,Re=`data-icon`,ze=`fontawesome-i2svg`,Be=`async`,Ve=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],He=(()=>{try{return!0}catch{return!1}})();function T(e){return new Proxy(e,{get(e,t){return t in e?e[t]:e[x]}})}var Ue=s({},re);Ue[x]=s(s(s(s({},{"fa-duotone":`duotone`}),re[x]),fe.kit),fe[`kit-duotone`]);var We=T(Ue),Ge=s({},ue);Ge[x]=s(s(s(s({},{duotone:`fad`}),Ge[x]),_e.kit),_e[`kit-duotone`]);var Ke=T(Ge),qe=s({},we);qe[x]=s(s({},qe[x]),ge.kit);var Je=T(qe),Ye=s({},Se);Ye[x]=s(s({},Ye[x]),me.kit),T(Ye);var Xe=te,Ze=`fa-layers-text`,Qe=ne;T(s({},se));var $e=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],et=ie,tt=[...pe,...Ae],E=g.FontAwesomeConfig||{};function nt(e){var t=_.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function rt(e){return e===``?!0:e===`false`?!1:e===`true`||e}_&&typeof _.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-auto-a11y`,`autoA11y`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(e=>{let[t,n]=e,r=rt(nt(t));r!=null&&(E[n]=r)});var it={styleDefault:`solid`,familyDefault:x,cssPrefix:Ne,replacementClass:Pe,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};E.familyPrefix&&(E.cssPrefix=E.familyPrefix);var D=s(s({},it),E);D.autoReplaceSvg||(D.observeMutations=!1);var O={};Object.keys(it).forEach(e=>{Object.defineProperty(O,e,{enumerable:!0,set:function(t){D[e]=t,k.forEach(e=>e(O))},get:function(){return D[e]}})}),Object.defineProperty(O,"familyPrefix",{enumerable:!0,set:function(e){D.cssPrefix=e,k.forEach(e=>e(O))},get:function(){return D.cssPrefix}}),g.FontAwesomeConfig=O;var k=[];function at(e){return k.push(e),()=>{k.splice(k.indexOf(e),1)}}var A=Me,j={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ot(e){if(!e||!b)return;let t=_.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;let n=_.head.childNodes,r=null;for(let e=n.length-1;e>-1;e--){let t=n[e],i=(t.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(i)>-1&&(r=t)}return _.head.insertBefore(t,r),e}var st=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function M(){let e=12,t=``;for(;e-->0;)t+=st[Math.random()*62|0];return t}function N(e){let t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ct(e){return e.classList?N(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(e=>e)}function lt(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function ut(e){return Object.keys(e||{}).reduce((t,n)=>t+`${n}="${lt(e[n])}" `,``).trim()}function P(e){return Object.keys(e||{}).reduce((t,n)=>t+`${n}: ${e[n].trim()};`,``)}function dt(e){return e.size!==j.size||e.x!==j.x||e.y!==j.y||e.rotate!==j.rotate||e.flipX||e.flipY}function ft(e){let{transform:t,containerWidth:n,iconWidth:r}=e;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function pt(e){let{transform:t,width:n=Me,height:r=Me,startCentered:i=!1}=e,a=``;return i&&ee?a+=`translate(${t.x/A-n/2}em, ${t.y/A-r/2}em) `:i?a+=`translate(calc(-50% + ${t.x/A}em), calc(-50% + ${t.y/A}em)) `:a+=`translate(${t.x/A}em, ${t.y/A}em) `,a+=`scale(${t.size/A*(t.flipX?-1:1)}, ${t.size/A*(t.flipY?-1:1)}) `,a+=`rotate(${t.rotate}deg) `,a}var mt=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function ht(){let e=Ne,t=Pe,n=O.cssPrefix,r=O.replacementClass,i=mt;if(n!==e||r!==t){let a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var gt=!1;function _t(){O.autoAddCss&&!gt&&(ot(ht()),gt=!0)}var vt={mixout(){return{dom:{css:ht,insertCss:_t}}},hooks(){return{beforeDOMElementCreation(){_t()},beforeI2svg(){_t()}}}},F=g||{};F[C]||(F[C]={}),F[C].styles||(F[C].styles={}),F[C].hooks||(F[C].hooks={}),F[C].shims||(F[C].shims=[]);var I=F[C],yt=[],bt=function(){_.removeEventListener(`DOMContentLoaded`,bt),L=1,yt.map(e=>e())},L=!1;b&&(L=(_.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(_.readyState),L||_.addEventListener(`DOMContentLoaded`,bt));function xt(e){b&&(L?setTimeout(e,0):yt.push(e))}function R(e){let{tag:t,attributes:n={},children:r=[]}=e;return typeof e==`string`?lt(e):`<${t} ${ut(n)}>${r.map(R).join(``)}</${t}>`}function St(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ct=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},wt=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Ct(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Tt(e){let t=[],n=0,r=e.length;for(;n<r;){let i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){let r=e.charCodeAt(n++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Et(e){let t=Tt(e);return t.length===1?t[0].toString(16):null}function Dt(e,t){let n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Ot(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function kt(e,t){let{skipHooks:n=!1}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=Ot(t);typeof I.hooks.addPack==`function`&&!n?I.hooks.addPack(e,Ot(t)):I.styles[e]=s(s({},I.styles[e]||{}),r),e===`fas`&&kt(`fa`,t)}var{styles:z,shims:At}=I,jt=Object.keys(Je),Mt=jt.reduce((e,t)=>(e[t]=Object.keys(Je[t]),e),{}),Nt=null,Pt={},Ft={},It={},Lt={},Rt={};function zt(e){return~tt.indexOf(e)}function Bt(e,t){let n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!zt(i)?i:null}var Vt=()=>{let e=e=>wt(z,(t,n,r)=>(t[r]=wt(n,e,{}),t),{});Pt=e((e,t,n)=>(t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(e=>typeof e==`number`).forEach(t=>{e[t.toString(16)]=n}),e)),Ft=e((e,t,n)=>(e[n]=n,t[2]&&t[2].filter(e=>typeof e==`string`).forEach(t=>{e[t]=n}),e)),Rt=e((e,t,n)=>{let r=t[2];return e[n]=n,r.forEach(t=>{e[t]=n}),e});let t=`far`in z||O.autoFetchSvg,n=wt(At,(e,n)=>{let r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});It=n.names,Lt=n.unicodes,Nt=H(O.styleDefault,{family:O.familyDefault})};at(e=>{Nt=H(e.styleDefault,{family:O.familyDefault})}),Vt();function Ht(e,t){return(Pt[e]||{})[t]}function Ut(e,t){return(Ft[e]||{})[t]}function B(e,t){return(Rt[e]||{})[t]}function Wt(e){return It[e]||{prefix:null,iconName:null}}function Gt(e){let t=Lt[e],n=Ht(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function V(){return Nt}var Kt=()=>({prefix:null,iconName:null,rest:[]});function qt(e){let t=x,n=jt.reduce((e,t)=>(e[t]=`${O.cssPrefix}-${t}`,e),{});return oe.forEach(r=>{(e.includes(n[r])||e.some(e=>Mt[r].includes(e)))&&(t=r)}),t}function H(e){let{family:t=x}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=We[t][e];if(t===S&&!e)return`fad`;let r=Ke[t][e]||Ke[t][n],i=e in I.styles?e:null;return r||i||null}function Jt(e){let t=[],n=null;return e.forEach(e=>{let r=Bt(O.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function Yt(e){return e.sort().filter((e,t,n)=>n.indexOf(e)===t)}function U(e){let{skipLookups:t=!1}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=null,r=Ee.concat(be),i=Yt(e.filter(e=>r.includes(e))),a=Yt(e.filter(e=>!Ee.includes(e))),[o=null]=i.filter(e=>(n=e,!ae.includes(e))),c=qt(i),l=s(s({},Jt(a)),{},{prefix:H(o,{family:c})});return s(s(s({},l),$t({values:e,family:c,styles:z,config:O,canonical:l,givenPrefix:n})),Xt(t,n,l))}function Xt(e,t,n){let{prefix:r,iconName:i}=n;if(e||!r||!i)return{prefix:r,iconName:i};let a=t===`fa`?Wt(i):{},o=B(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!z.far&&z.fas&&!O.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var Zt=oe.filter(e=>e!==x||e!==S),Qt=Object.keys(we).filter(e=>e!==x).map(e=>Object.keys(we[e])).flat();function $t(e){let{values:t,family:n,canonical:r,givenPrefix:i=``,styles:a={},config:o={}}=e,s=n===S,c=t.includes(`fa-duotone`)||t.includes(`fad`),l=o.familyDefault===`duotone`,u=r.prefix===`fad`||r.prefix===`fa-duotone`;return!s&&(c||l||u)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&Zt.includes(n)&&(Object.keys(a).find(e=>Qt.includes(e))||o.autoFetchSvg)&&(r.prefix=le.get(n).defaultShortPrefixId,r.iconName=B(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||i===`fa`)&&(r.prefix=V()||`fas`),r}var en=class{constructor(){this.definitions={}}add(){let e=[...arguments].reduce(this._pullDefinitions,{});Object.keys(e).forEach(t=>{this.definitions[t]=s(s({},this.definitions[t]||{}),e[t]),kt(t,e[t]);let n=Je[x][t];n&&kt(n,e[t]),Vt()})}reset(){this.definitions={}}_pullDefinitions(e,t){let n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(t=>{let{prefix:r,iconName:i,icon:a}=n[t],o=a[2];e[r]||(e[r]={}),o.length>0&&o.forEach(t=>{typeof t==`string`&&(e[r][t]=a)}),e[r][i]=a}),e}},tn=[],W={},G={},nn=Object.keys(G);function rn(e,t){let{mixoutsTo:n}=t;return tn=e,W={},Object.keys(G).forEach(e=>{nn.indexOf(e)===-1&&delete G[e]}),tn.forEach(e=>{let t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(e=>{typeof t[e]==`function`&&(n[e]=t[e]),typeof t[e]==`object`&&Object.keys(t[e]).forEach(r=>{n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){let t=e.hooks();Object.keys(t).forEach(e=>{W[e]||(W[e]=[]),W[e].push(t[e])})}e.provides&&e.provides(G)}),n}function an(e,t){var n=[...arguments].slice(2);return(W[e]||[]).forEach(e=>{t=e.apply(null,[t,...n])}),t}function K(e){var t=[...arguments].slice(1);(W[e]||[]).forEach(e=>{e.apply(null,t)})}function q(){let e=arguments[0],t=Array.prototype.slice.call(arguments,1);return G[e]?G[e].apply(null,t):void 0}function on(e){e.prefix===`fa`&&(e.prefix=`fas`);let{iconName:t}=e,n=e.prefix||V();if(t)return t=B(n,t)||t,St(sn.definitions,n,t)||St(I.styles,n,t)}var sn=new en,J={noAuto:()=>{O.autoReplaceSvg=!1,O.observeMutations=!1,K(`noAuto`)},config:O,dom:{i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return b?(K(`beforeI2svg`,e),q(`pseudoElements2svg`,e),q(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t}=e;O.autoReplaceSvg===!1&&(O.autoReplaceSvg=!0),O.observeMutations=!0,xt(()=>{cn({autoReplaceSvgRoot:t}),K(`watch`,e)})}},parse:{icon:e=>{if(e===null)return null;if(typeof e==`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:B(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=H(e[0]);return{prefix:n,iconName:B(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${O.cssPrefix}-`)>-1||e.match(Xe))){let t=U(e.split(` `),{skipLookups:!0});return{prefix:t.prefix||V(),iconName:B(t.prefix,t.iconName)||t.iconName}}if(typeof e==`string`){let t=V();return{prefix:t,iconName:B(t,e)||e}}}},library:sn,findIconDefinition:on,toHtml:R},cn=function(){let{autoReplaceSvgRoot:e=_}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};(Object.keys(I.styles).length>0||O.autoFetchSvg)&&b&&O.autoReplaceSvg&&J.dom.i2svg({node:e})};function Y(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(e=>R(e))}}),Object.defineProperty(e,"node",{get:function(){if(!b)return;let t=_.createElement(`div`);return t.innerHTML=e.html,t.children}}),e}function ln(e){let{children:t,main:n,mask:r,attributes:i,styles:a,transform:o}=e;if(dt(o)&&n.found&&!r.found){let{width:e,height:t}=n,r={x:e/t/2,y:.5};i.style=P(s(s({},a),{},{"transform-origin":`${r.x+o.x/16}em ${r.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function un(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:a}=e,o=a===!0?`${t}-${O.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:s(s({},i),{},{id:o}),children:r}]}]}function dn(e){let{icons:{main:t,mask:n},prefix:r,iconName:i,transform:a,symbol:o,title:c,maskId:l,titleId:u,extra:d,watchable:f=!1}=e,{width:p,height:m}=n.found?n:t,h=he.includes(r),g=[O.replacementClass,i?`${O.cssPrefix}-${i}`:``].filter(e=>d.classes.indexOf(e)===-1).filter(e=>e!==``||!!e).concat(d.classes).join(` `),_={children:[],attributes:s(s({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:g,role:d.attributes.role||`img`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 ${p} ${m}`})},v=h&&!~d.classes.indexOf(`fa-fw`)?{width:`${p/m*16*.0625}em`}:{};f&&(_.attributes[w]=``),c&&(_.children.push({tag:`title`,attributes:{id:_.attributes[`aria-labelledby`]||`title-${u||M()}`},children:[c]}),delete _.attributes.title);let y=s(s({},_),{},{prefix:r,iconName:i,main:t,mask:n,maskId:l,transform:a,symbol:o,styles:s(s({},v),d.styles)}),{children:b,attributes:ee}=n.found&&t.found?q(`generateAbstractMask`,y)||{children:[],attributes:{}}:q(`generateAbstractIcon`,y)||{children:[],attributes:{}};return y.children=b,y.attributes=ee,o?un(y):ln(y)}function fn(e){let{content:t,width:n,height:r,transform:i,title:a,extra:o,watchable:c=!1}=e,l=s(s(s({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(` `)});c&&(l[w]=``);let u=s({},o.styles);dt(i)&&(u.transform=pt({transform:i,startCentered:!0,width:n,height:r}),u[`-webkit-transform`]=u.transform);let d=P(u);d.length>0&&(l.style=d);let f=[];return f.push({tag:`span`,attributes:l,children:[t]}),a&&f.push({tag:`span`,attributes:{class:`sr-only`},children:[a]}),f}function pn(e){let{content:t,title:n,extra:r}=e,i=s(s(s({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(` `)}),a=P(r.styles);a.length>0&&(i.style=a);let o=[];return o.push({tag:`span`,attributes:i,children:[t]}),n&&o.push({tag:`span`,attributes:{class:`sr-only`},children:[n]}),o}var{styles:mn}=I;function hn(e){let t=e[0],n=e[1],[r]=e.slice(4),i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${O.cssPrefix}-${et.GROUP}`},children:[{tag:`path`,attributes:{class:`${O.cssPrefix}-${et.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${O.cssPrefix}-${et.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var gn={found:!1,width:512,height:512};function _n(e,t){!He&&!O.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function vn(e,t){let n=t;return t===`fa`&&O.styleDefault!==null&&(t=V()),new Promise((r,i)=>{if(n===`fa`){let n=Wt(e)||{};e=n.iconName||e,t=n.prefix||t}if(e&&t&&mn[t]&&mn[t][e]){let n=mn[t][e];return r(hn(n))}_n(e,t),r(s(s({},gn),{},{icon:O.showMissingIcons&&e&&q(`missingIconAbstract`)||{}}))})}var yn=()=>{},bn=O.measurePerformance&&y&&y.mark&&y.measure?y:{mark:yn,measure:yn},X=`FA "6.7.2"`,xn=e=>(bn.mark(`${X} ${e} begins`),()=>Sn(e)),Sn=e=>{bn.mark(`${X} ${e} ends`),bn.measure(`${X} ${e}`,`${X} ${e} begins`,`${X} ${e} ends`)},Cn={begin:xn,end:Sn},Z=()=>{};function wn(e){return typeof(e.getAttribute?e.getAttribute(w):null)==`string`}function Tn(e){let t=e.getAttribute?e.getAttribute(Le):null,n=e.getAttribute?e.getAttribute(Re):null;return t&&n}function En(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(O.replacementClass)}function Dn(){return O.autoReplaceSvg===!0?Q.replace:Q[O.autoReplaceSvg]||Q.replace}function On(e){return _.createElementNS(`http://www.w3.org/2000/svg`,e)}function kn(e){return _.createElement(e)}function An(e){let{ceFn:t=e.tag===`svg`?On:kn}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof e==`string`)return _.createTextNode(e);let n=t(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){n.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){n.appendChild(An(e,{ceFn:t}))}),n}function jn(e){let t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var Q={replace:function(e){let t=e[0];if(t.parentNode)if(e[1].forEach(e=>{t.parentNode.insertBefore(An(e),t)}),t.getAttribute(w)===null&&O.keepOriginalSource){let e=_.createComment(jn(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(e){let t=e[0],n=e[1];if(~ct(t).indexOf(O.replacementClass))return Q.replace(e);let r=RegExp(`${O.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){let e=n[0].attributes.class.split(` `).reduce((e,t)=>(t===O.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e),{toNode:[],toSvg:[]});n[0].attributes.class=e.toSvg.join(` `),e.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,e.toNode.join(` `))}let i=n.map(e=>R(e)).join(`
`);t.setAttribute(w,``),t.innerHTML=i}};function Mn(e){e()}function Nn(e,t){let n=typeof t==`function`?t:Z;if(e.length===0)n();else{let t=Mn;O.mutateApproach===Be&&(t=g.requestAnimationFrame||Mn),t(()=>{let t=Dn(),r=Cn.begin(`mutate`);e.map(t),r(),n()})}}var Pn=!1;function Fn(){Pn=!0}function In(){Pn=!1}var $=null;function Ln(e){if(!v||!O.observeMutations)return;let{treeCallback:t=Z,nodeCallback:n=Z,pseudoElementsCallback:r=Z,observeMutationsRoot:i=_}=e;$=new v(e=>{if(Pn)return;let i=V();N(e).forEach(e=>{if(e.type===`childList`&&e.addedNodes.length>0&&!wn(e.addedNodes[0])&&(O.searchPseudoElements&&r(e.target),t(e.target)),e.type===`attributes`&&e.target.parentNode&&O.searchPseudoElements&&r(e.target.parentNode),e.type===`attributes`&&wn(e.target)&&~$e.indexOf(e.attributeName))if(e.attributeName===`class`&&Tn(e.target)){let{prefix:t,iconName:n}=U(ct(e.target));e.target.setAttribute(Le,t||i),n&&e.target.setAttribute(Re,n)}else En(e.target)&&n(e.target)})}),b&&$.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Rn(){$&&$.disconnect()}function zn(e){let t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce((e,t)=>{let n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Bn(e){let t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=U(ct(e));return i.prefix||=V(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Ut(i.prefix,e.innerText)||Ht(i.prefix,Et(e.innerText))),!i.iconName&&O.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function Vn(e){let t=N(e.attributes).reduce((e,t)=>(e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e),{}),n=e.getAttribute(`title`),r=e.getAttribute(`data-fa-title-id`);return O.autoA11y&&(n?t[`aria-labelledby`]=`${O.replacementClass}-title-${r||M()}`:(t[`aria-hidden`]=`true`,t.focusable=`false`)),t}function Hn(){return{iconName:null,title:null,titleId:null,prefix:null,transform:j,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Un(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:r,rest:i}=Bn(e),a=Vn(e),o=an(`parseNodeAttributes`,{},e),c=t.styleParser?zn(e):[];return s({iconName:n,title:e.getAttribute(`title`),titleId:e.getAttribute(`data-fa-title-id`),prefix:r,transform:j,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:a}},o)}var{styles:Wn}=I;function Gn(e){let t=O.autoReplaceSvg===`nest`?Un(e,{styleParser:!1}):Un(e);return~t.extra.classes.indexOf(Ze)?q(`generateLayersText`,e,t):q(`generateSvgReplacementMutation`,e,t)}function Kn(){return[...de,...Ee]}function qn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!b)return Promise.resolve();let n=_.documentElement.classList,r=e=>n.add(`${ze}-${e}`),i=e=>n.remove(`${ze}-${e}`),a=O.autoFetchSvg?Kn():ae.concat(Object.keys(Wn));a.includes(`fa`)||a.push(`fa`);let o=[`.${Ze}:not([${w}])`].concat(a.map(e=>`.${e}:not([${w}])`)).join(`, `);if(o.length===0)return Promise.resolve();let s=[];try{s=N(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();let c=Cn.begin(`onTree`),l=s.reduce((e,t)=>{try{let n=Gn(t);n&&e.push(n)}catch(e){He||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise((e,n)=>{Promise.all(l).then(n=>{Nn(n,()=>{r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(e=>{c(),n(e)})})}function Jn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Gn(e).then(e=>{e&&Nn([e],t)})}function Yn(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:on(t||{}),{mask:i}=n;return i&&=(i||{}).icon?i:on(i||{}),e(r,s(s({},n),{},{mask:i}))}}var Xn=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=j,symbol:r=!1,mask:i=null,maskId:a=null,title:o=null,titleId:c=null,classes:l=[],attributes:u={},styles:d={}}=t;if(!e)return;let{prefix:f,iconName:p,icon:m}=e;return Y(s({type:`icon`},e),()=>(K(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),O.autoA11y&&(o?u[`aria-labelledby`]=`${O.replacementClass}-title-${c||M()}`:(u[`aria-hidden`]=`true`,u.focusable=`false`)),dn({icons:{main:hn(m),mask:i?hn(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:p,transform:s(s({},j),n),symbol:r,title:o,maskId:a,titleId:c,extra:{attributes:u,styles:d,classes:l}})))},Zn={mixout(){return{icon:Yn(Xn)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=qn,e.nodeCallback=Jn,e}}},provides(e){e.i2svg=function(e){let{node:t=_,callback:n=()=>{}}=e;return qn(t,n)},e.generateSvgReplacementMutation=function(e,t){let{iconName:n,title:r,titleId:i,prefix:a,transform:o,symbol:s,mask:c,maskId:l,extra:u}=t;return new Promise((t,d)=>{Promise.all([vn(n,a),c.iconName?vn(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(c=>{let[d,f]=c;t([e,dn({icons:{main:d,mask:f},prefix:a,iconName:n,transform:o,symbol:s,maskId:l,title:r,titleId:i,extra:u,watchable:!0})])}).catch(d)})},e.generateAbstractIcon=function(e){let{children:t,attributes:n,main:r,transform:i,styles:a}=e,o=P(a);o.length>0&&(n.style=o);let s;return dt(i)&&(s=q(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},Qn={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=t;return Y({type:`layer`},()=>{K(`beforeDOMElementCreation`,{assembler:e,params:t});let r=[];return e(e=>{Array.isArray(e)?e.map(e=>{r=r.concat(e.abstract)}):r=r.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${O.cssPrefix}-layers`,...n].join(` `)},children:r}]})}}}},$n={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:r=[],attributes:i={},styles:a={}}=t;return Y({type:`counter`,content:e},()=>(K(`beforeDOMElementCreation`,{content:e,params:t}),pn({content:e.toString(),title:n,extra:{attributes:i,styles:a,classes:[`${O.cssPrefix}-layers-counter`,...r]}})))}}}},er={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=j,title:r=null,classes:i=[],attributes:a={},styles:o={}}=t;return Y({type:`text`,content:e},()=>(K(`beforeDOMElementCreation`,{content:e,params:t}),fn({content:e,transform:s(s({},j),n),title:r,extra:{attributes:a,styles:o,classes:[`${O.cssPrefix}-layers-text`,...i]}})))}}},provides(e){e.generateLayersText=function(e,t){let{title:n,transform:r,extra:i}=t,a=null,o=null;if(ee){let t=parseInt(getComputedStyle(e).fontSize,10),n=e.getBoundingClientRect();a=n.width/t,o=n.height/t}return O.autoA11y&&!n&&(i.attributes[`aria-hidden`]=`true`),Promise.resolve([e,fn({content:e.innerHTML,width:a,height:o,transform:r,title:n,extra:i,watchable:!0})])}}},tr=RegExp(`"`,`ug`),nr=[1105920,1112319],rr=s(s(s(s({},{FontAwesome:{normal:`fas`,400:`fas`}}),ce),je),xe),ir=Object.keys(rr).reduce((e,t)=>(e[t.toLowerCase()]=rr[t],e),{}),ar=Object.keys(ir).reduce((e,t)=>{let n=ir[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function or(e){let t=e.replace(tr,``),n=Dt(t,0),r=n>=nr[0]&&n<=nr[1],i=t.length===2&&t[0]===t[1];return{value:Et(i?t[0]:t),isSecondary:r||i}}function sr(e,t){let n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(ir[n]||{})[i]||ar[n]}function cr(e,t){let n=`${Ie}${t.replace(`:`,`-`)}`;return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();let a=N(e.children).filter(e=>e.getAttribute(Fe)===t)[0],o=g.getComputedStyle(e,t),c=o.getPropertyValue(`font-family`),l=c.match(Qe),u=o.getPropertyValue(`font-weight`),d=o.getPropertyValue(`content`);if(a&&!l)return e.removeChild(a),r();if(l&&d!==`none`&&d!==``){let d=o.getPropertyValue(`content`),f=sr(c,u),{value:p,isSecondary:m}=or(d),h=l[0].startsWith(`FontAwesome`),g=Ht(f,p),v=g;if(h){let e=Gt(p);e.iconName&&e.prefix&&(g=e.iconName,f=e.prefix)}if(g&&!m&&(!a||a.getAttribute(Le)!==f||a.getAttribute(Re)!==v)){e.setAttribute(n,v),a&&e.removeChild(a);let o=Hn(),{extra:c}=o;c.attributes[Fe]=t,vn(g,f).then(i=>{let a=dn(s(s({},o),{},{icons:{main:i,mask:Kt()},prefix:f,iconName:v,extra:c,watchable:!0})),l=_.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(l,e.firstChild):e.appendChild(l),l.outerHTML=a.map(e=>R(e)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function lr(e){return Promise.all([cr(e,`::before`),cr(e,`::after`)])}function ur(e){return e.parentNode!==document.head&&!~Ve.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Fe)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}function dr(e){if(b)return new Promise((t,n)=>{let r=N(e.querySelectorAll(`*`)).filter(ur).map(lr),i=Cn.begin(`searchPseudoElements`);Fn(),Promise.all(r).then(()=>{i(),In(),t()}).catch(()=>{i(),In(),n()})})}var fr={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=dr,e}}},provides(e){e.pseudoElements2svg=function(e){let{node:t=_}=e;O.searchPseudoElements&&dr(t)}}},pr=!1,mr={mixout(){return{dom:{unwatch(){Fn(),pr=!0}}}},hooks(){return{bootstrap(){Ln(an(`mutationObserverCallbacks`,{}))},noAuto(){Rn()},watch(e){let{observeMutationsRoot:t}=e;pr?In():Ln(an(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},hr=e=>e.toLowerCase().split(` `).reduce((e,t)=>{let n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0}),gr={mixout(){return{parse:{transform:e=>hr(e)}}},hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=hr(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(e){let{main:t,transform:n,containerWidth:r,iconWidth:i}=e,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:s({},a.outer),children:[{tag:`g`,attributes:s({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:s(s({},t.icon.attributes),a.path)}]}]}}}},_r={x:0,y:0,width:`100%`,height:`100%`};function vr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function yr(e){return e.tag===`g`?e.children:[e]}rn([vt,Zn,Qn,$n,er,fr,mr,gr,{hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-mask`),r=n?U(n.split(` `).map(e=>e.trim())):Kt();return r.prefix||=V(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides(e){e.generateAbstractMask=function(e){let{children:t,attributes:n,main:r,mask:i,maskId:a,transform:o}=e,{width:c,icon:l}=r,{width:u,icon:d}=i,f=ft({transform:o,containerWidth:u,iconWidth:c}),p={tag:`rect`,attributes:s(s({},_r),{},{fill:`white`})},m=l.children?{children:l.children.map(vr)}:{},h={tag:`g`,attributes:s({},f.inner),children:[vr(s({tag:l.tag,attributes:s(s({},l.attributes),f.path)},m))]},g={tag:`g`,attributes:s({},f.outer),children:[h]},_=`mask-${a||M()}`,v=`clip-${a||M()}`,y={tag:`mask`,attributes:s(s({},_r),{},{id:_,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[p,g]},b={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:v},children:yr(d)},y]};return t.push(b,{tag:`rect`,attributes:s({fill:`currentColor`,"clip-path":`url(#${v})`,mask:`url(#${_})`},_r)}),{children:t,attributes:n}}}},{provides(e){let t=!1;g.matchMedia&&(t=g.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){let e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:s(s({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});let i=s(s({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:s(s({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:s(s({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:s(s({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:s(s({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:s(s({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:s(s({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:s(s({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:J}),J.noAuto,J.config,J.library,J.dom,J.parse,J.findIconDefinition,J.toHtml;var br=J.icon;J.layer,J.text,J.counter;function xr(e={}){return{mount(n){let a,o=i({label:e.text??`Inspector`,title:e.title??`Inspect visualization`,icon:e.text===void 0?br(t).node[0]:void 0,async onClick(){if(a?.element.isConnected){a.element.focus({preventScroll:!0});return}if(n.showStatus(`Loading Inspector…`),a=await r(n.api.debug,{container:n.container,width:e.width,activePanel:e.activePanel,signal:n.signal}),n.signal.aborted){a.dispose(),a=void 0;return}a.panel.addEventListener(`close`,()=>{a=void 0,o.element.focus({preventScroll:!0})},{once:!0,signal:n.signal}),a.element.focus({preventScroll:!0}),n.showStatus(``)}}).mount(n);return o.element.setAttribute(`aria-haspopup`,`dialog`),{element:o.element,dispose(){o.dispose(),a?.dispose(),a=void 0}}}}}export{i as n,r,xr as t};