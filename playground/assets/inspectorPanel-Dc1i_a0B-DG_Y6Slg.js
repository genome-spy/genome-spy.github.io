var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:l,defineProperty:u,getOwnPropertyDescriptor:d,getOwnPropertyNames:ee,getOwnPropertySymbols:te,getPrototypeOf:ne}=Object,f=globalThis,p=f.trustedTypes,re=p?p.emptyScript:``,ie=f.reactiveElementPolyfillSupport,m=(e,t)=>e,h={toAttribute(e,t){switch(t){case Boolean:e=e?re:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ae=(e,t)=>!l(e,t),g={attribute:!0,type:String,converter:h,reflect:!1,useDefault:!1,hasChanged:ae};Symbol.metadata??=Symbol(`metadata`),f.litPropertyMetadata??=new WeakMap;var _=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=g){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&u(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??g}static _$Ei(){if(this.hasOwnProperty(m(`elementProperties`)))return;let e=ne(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(m(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m(`properties`))){let e=this.properties,t=[...ee(e),...te(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?h:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?h:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??ae)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};_.elementStyles=[],_.shadowRootOptions={mode:`open`},_[m(`elementProperties`)]=new Map,_[m(`finalized`)]=new Map,ie?.({ReactiveElement:_}),(f.reactiveElementVersions??=[]).push(`2.1.2`);var v=globalThis,y=e=>e,b=v.trustedTypes,x=b?b.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,S=`$lit$`,C=`lit$${Math.random().toFixed(9).slice(2)}$`,w=`?`+C,oe=`<${w}>`,T=document,E=()=>T.createComment(``),D=e=>e===null||typeof e!=`object`&&typeof e!=`function`,O=Array.isArray,se=e=>O(e)||typeof e?.[Symbol.iterator]==`function`,k=`[ 	
\f\r]`,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,M=/>/g,N=RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),P=/'/g,F=/"/g,I=/^(?:script|style|textarea|title)$/i,L=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),R=Symbol.for(`lit-noChange`),z=Symbol.for(`lit-nothing`),B=new WeakMap,V=T.createTreeWalker(T,129);function H(e,t){if(!O(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return x===void 0?t:x.createHTML(t)}var ce=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=A;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===A?c[1]===`!--`?o=j:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=N):(I.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=N):o=M:o===N?c[0]===`>`?(o=i??A,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?N:c[3]===`"`?F:P):o===F||o===P?o=N:o===j||o===M?o=A:(o=N,i=void 0);let d=o===N&&e[t+1].startsWith(`/>`)?` `:``;a+=o===A?n+oe:l>=0?(r.push(s),n.slice(0,l)+S+n.slice(l)+C+d):n+C+(l===-2?t:d)}return[H(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},U=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ce(t,n);if(this.el=e.createElement(l,r),V.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=V.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(S)){let t=u[o++],n=i.getAttribute(e).split(C),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?ue:r[1]===`?`?de:r[1]===`@`?fe:K}),i.removeAttribute(e)}else e.startsWith(C)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(I.test(i.tagName)){let e=i.textContent.split(C),t=e.length-1;if(t>0){i.textContent=b?b.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],E()),V.nextNode(),c.push({type:2,index:++a});i.append(e[t],E())}}}else if(i.nodeType===8)if(i.data===w)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(C,e+1))!==-1;)c.push({type:7,index:a}),e+=C.length-1}a++}}static createElement(e,t){let n=T.createElement(`template`);return n.innerHTML=e,n}};function W(e,t,n=e,r){if(t===R)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=D(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=W(e,i._$AS(e,t.values),i,r)),t}var le=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??T).importNode(t,!0);V.currentNode=r;let i=V.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new G(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new pe(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=V.nextNode(),a++)}return V.currentNode=T,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},G=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=W(this,e,t),D(e)?e===z||e==null||e===``?(this._$AH!==z&&this._$AR(),this._$AH=z):e!==this._$AH&&e!==R&&this._(e):e._$litType$===void 0?e.nodeType===void 0?se(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==z&&D(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=U.createElement(H(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new le(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=B.get(e.strings);return t===void 0&&B.set(e.strings,t=new U(e)),t}k(t){O(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(E()),this.O(E()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=y(e).nextSibling;y(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},K=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=z}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=W(this,e,t,0),a=!D(e)||e!==this._$AH&&e!==R,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=W(this,r[n+o],t,o),s===R&&(s=this._$AH[o]),a||=!D(s)||s!==this._$AH[o],s===z?e=z:e!==z&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},ue=class extends K{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===z?void 0:e}},de=class extends K{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==z)}},fe=class extends K{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=W(this,e,t,0)??z)===R)return;let n=this._$AH,r=e===z&&n!==z||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==z&&(n===z||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},pe=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){W(this,e)}},me=v.litHtmlPolyfillSupport;me?.(U,G),(v.litHtmlVersions??=[]).push(`3.3.3`);var he=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new G(t.insertBefore(E(),e),e,void 0,n??{})}return i._$AI(e),i},q=globalThis,J=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=he(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return R}};J._$litElement$=!0,J.finalized=!0,q.litElementHydrateSupport?.({LitElement:J});var ge=q.litElementPolyfillSupport;ge?.({LitElement:J}),(q.litElementVersions??=[]).push(`4.2.2`);function Y(e){let t=Object.entries(e);return t.length?t.map(([e,t])=>e+`: `+t).join(`, `):`-`}function _e(e){return e.disposed?`disposed`:e.initialized?e.completed?`done`:`active`:`new`}function X(e){return e===void 0?`-`:typeof e==`string`?e:JSON.stringify(e)}var Z=o`
    :host {
        display: block;
        height: 100%;
        min-height: 0;
        color: #d8dee9;
        background: #20242b;
        font:
            12px/1.45 ui-monospace,
            SFMono-Regular,
            Menlo,
            Consolas,
            "Liberation Mono",
            monospace;
    }

    .shell {
        display: grid;
        grid-template-rows: auto 1fr;
        height: 100%;
        min-height: 0;
    }

    .toolbar {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.5rem 0.65rem;
        border-bottom: 1px solid #3a404a;
        background: #292e36;
    }

    .toolbar-title {
        white-space: nowrap;
    }

    .panel-tabs {
        display: flex;
        gap: 0.2rem;
    }

    button,
    label {
        font: inherit;
    }

    button {
        color: #d8dee9;
        background: #353b45;
        border: 1px solid #4a5260;
        border-radius: 4px;
        padding: 0.2rem 0.45rem;
        cursor: pointer;
    }

    button:hover {
        background: #414856;
    }

    .panel-tab {
        color: #b8c0cc;
        background: transparent;
        border-color: transparent;
    }

    .panel-tab.selected {
        color: #f4f7fb;
        background: #174f78;
        border-color: #2d6e9e;
    }

    .close-button {
        margin-left: auto;
    }

    .main {
        display: grid;
        grid-template-columns: minmax(15rem, 38%) minmax(0, 1fr);
        height: 100%;
        min-height: 0;
    }

    .single-panel {
        display: block;
        box-sizing: border-box;
        height: 100%;
        min-height: 0;
        overflow: auto;
        padding: 0.75rem;
    }

    .tree,
    .details {
        min-height: 0;
        overflow: auto;
    }

    .tree {
        border-right: 1px solid #3a404a;
        padding: 0.4rem 0;
    }

    .tree-controls {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.2rem 0.65rem 0.45rem;
        border-bottom: 1px solid #303743;
        margin-bottom: 0.3rem;
        color: #b8c0cc;
    }

    .details {
        padding: 0.75rem;
    }

    .empty {
        color: #9aa6b2;
        padding: 0.75rem;
    }

    .section-note {
        margin: -0.35rem 0 0.6rem;
        color: #9aa6b2;
    }

    .debug-errors {
        margin: 0 0 0.75rem;
        padding: 0.5rem 0.65rem;
        border: 1px solid #8f6a2f;
        border-radius: 4px;
        background: #34291c;
        color: #ffcf8a;
    }

    .debug-errors ul {
        margin: 0.35rem 0 0;
        padding-left: 1rem;
    }

    .node {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 0.45rem;
        width: 100%;
        min-width: 0;
        padding: 0.12rem 0.65rem;
        border: 0;
        border-radius: 0;
        background: transparent;
        color: inherit;
        text-align: left;
    }

    .node:hover {
        background: #303743;
    }

    .node.selected {
        background: #174f78;
    }

    .node.warning {
        color: #ffcf8a;
    }

    .node-main {
        min-width: 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .node-meta {
        color: #9aa6b2;
        white-space: nowrap;
    }

    .badge {
        display: inline-block;
        margin-left: 0.35rem;
        padding: 0 0.25rem;
        border: 1px solid #596273;
        border-radius: 3px;
        color: #b8c0cc;
    }

    h2 {
        margin: 0 0 0.6rem;
        font-size: 0.9rem;
        line-height: 1.2;
    }

    h3 {
        margin: 0 0 0.6rem;
        font-size: 1rem;
        line-height: 1.2;
    }

    h3 {
        margin-top: 1rem;
        font-size: 0.8rem;
        color: #9aa6b2;
        text-transform: uppercase;
    }

    dl {
        display: grid;
        grid-template-columns: max-content minmax(0, 1fr);
        gap: 0.25rem 0.75rem;
        margin: 0;
    }

    dt {
        color: #9aa6b2;
    }

    dd {
        margin: 0;
        min-width: 0;
        overflow-wrap: anywhere;
    }

    pre {
        margin: 0;
        padding: 0.6rem;
        overflow: auto;
        border: 1px solid #3a404a;
        border-radius: 4px;
        background: #171a20;
        color: #d8dee9;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 0.75rem;
    }

    th,
    td {
        padding: 0.25rem 0.35rem;
        border-bottom: 1px solid #303743;
        text-align: left;
        vertical-align: top;
    }

    th {
        color: #9aa6b2;
        font-weight: 600;
    }

    .linked {
        color: #8cc7ff;
        cursor: pointer;
    }

    .member-list {
        margin: 0;
        padding-left: 1rem;
    }

    .member-list li {
        margin: 0 0 0.15rem;
    }

    .link-button,
    .inline-action {
        padding: 0;
        border: 0;
        background: transparent;
        color: #8cc7ff;
    }

    .link-button {
        text-align: left;
    }

    .current-member {
        color: #d8dee9;
    }

    .current-member::after {
        color: #9aa6b2;
        content: " current";
    }

    .inline-action {
        margin-top: 0.25rem;
    }

    .link-button:hover,
    .inline-action:hover {
        background: transparent;
        text-decoration: underline;
    }

    .muted {
        color: #9aa6b2;
    }

    .flow-first {
        max-height: 22rem;
    }
`,ve=class extends J{static properties={snapshot:{attribute:!1},selectedFlowNodeId:{attribute:!1}};static styles=Z;constructor(){super(),this.snapshot={dataflow:{sourceIds:[],nodes:[],collectorCount:0}},this.selectedFlowNodeId=void 0}render(){if(this.snapshot.dataflow.sourceIds.length===0)return L`
                <div class="single-panel">
                    <p class="empty">No dataflow has been built yet.</p>
                </div>
            `;let e=this.selectedFlowNodeId?this.#n(this.selectedFlowNodeId):this.#n(this.snapshot.dataflow.sourceIds[0]);return L`
            <div class="main">
                <div class="tree">
                    <p class="empty">
                        ${this.snapshot.dataflow.sourceIds.length} sources,
                        ${this.snapshot.dataflow.collectorCount} collectors
                    </p>
                    ${this.snapshot.dataflow.sourceIds.map(e=>this.#e(this.#n(e),0))}
                </div>
                <div class="details">
                    ${this.#t(e)}
                </div>
            </div>
        `}#e(e,t){let n=e.id===this.selectedFlowNodeId,r=e.disposed||!e.initialized;return L`
            <button
                class=${[`node`,n?`selected`:``,r?`warning`:``].join(` `)}
                style=${`padding-left: ${.65+t*1.1}rem`}
                @click=${()=>this.#r(e.id)}
                @mouseenter=${()=>this.#a(e.viewId)}
                @mouseleave=${()=>this.#a(void 0)}
            >
                <span class="node-main">
                    ${e.childIds.length>0?`v`:`-`} ${e.label}
                    ${e.completed?L`<span class="badge">done</span>`:z}
                    ${e.disposed?L`<span class="badge">disposed</span>`:z}
                    ${e.initialized?z:L`<span class="badge">new</span>`}
                </span>
                <span class="node-meta">out ${e.count}</span>
            </button>
            ${e.childIds.map(e=>this.#e(this.#n(e),t+1))}
        `}#t(e){return L`
            <h2>${e.label}</h2>
            <dl>
                <dt>id</dt>
                <dd>${e.id}</dd>
                <dt>out count</dt>
                <dd>${e.count}</dd>
                <dt>children</dt>
                <dd>${e.childIds.length}</dd>
                <dt>completed</dt>
                <dd>${String(e.completed)}</dd>
                <dt>initialized</dt>
                <dd>${String(e.initialized)}</dd>
                <dt>disposed</dt>
                <dd>${String(e.disposed)}</dd>
                <dt>view</dt>
                <dd>
                    ${e.viewId?L`<span
                              class="linked"
                              @click=${()=>this.#i(e.viewId)}
                              >${e.viewPath}</span
                          >`:`-`}
                </dd>
                <dt>domain-sensitive scales</dt>
                <dd>
                    ${e.domainSensitiveScaleChannels.length?e.domainSensitiveScaleChannels.join(`, `):`-`}
                </dd>
            </dl>

            <h3>Params</h3>
            ${e.params?L`<pre>${X(e.params)}</pre>`:L`<p class="empty">No flow node parameters.</p>`}

            <h3>First Datum</h3>
            ${e.first?L`<pre class="flow-first">${X(e.first)}</pre>`:L`<p class="empty">
                      ${e.count>0?`No datum preview is available.`:`No data was propagated.`}
                  </p>`}
        `}#n(e){let t=this.snapshot.dataflow.nodes.find(t=>t.id===e);if(!t)throw Error(`Unknown inspector flow node: `+e);return t}#r(e){this.selectedFlowNodeId=e,this.dispatchEvent(new CustomEvent(`select-flow-node`,{detail:{flowNodeId:e},bubbles:!0,composed:!0}))}#i(e){this.dispatchEvent(new CustomEvent(`select-view`,{detail:{viewId:e},bubbles:!0,composed:!0}))}#a(e){this.dispatchEvent(new CustomEvent(`highlight-view`,{detail:{viewId:e},bubbles:!0,composed:!0}))}};customElements.define(`gs-inspector-dataflow-panel`,ve);var ye=class extends J{static properties={snapshot:{attribute:!1}};static styles=Z;constructor(){super(),this.snapshot={params:{scopes:[]}}}render(){let e=this.snapshot.params.scopes.filter(e=>e.params.length>0);return e.length===0?L`
                <div class="single-panel">
                    <p class="empty">No params.</p>
                </div>
            `:L`
            <div class="single-panel">
                <h2>Params</h2>
                ${e.map(e=>L`
                        <h3>
                            <span
                                class="linked"
                                @click=${()=>this.#e(e.viewId)}
                                >${e.viewPath}</span
                            >
                            <span class="muted">${e.scopeId}</span>
                        </h3>
                        ${Q(e.params)}
                    `)}
            </div>
        `}#e(e){this.dispatchEvent(new CustomEvent(`select-view`,{detail:{viewId:e},bubbles:!0,composed:!0}))}};function Q(e){return L`
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>kind</th>
                    <th>writable</th>
                    <th>value</th>
                    <th>config</th>
                </tr>
            </thead>
            <tbody>
                ${e.map(e=>L`
                        <tr>
                            <td>${e.name}</td>
                            <td>${e.kind}</td>
                            <td>${String(e.writable)}</td>
                            <td>${X(e.value)}</td>
                            <td>
                                ${e.config?X(e.config):`-`}
                            </td>
                        </tr>
                    `)}
            </tbody>
        </table>
    `}customElements.define(`gs-inspector-params-panel`,ye);var $=class extends J{static properties={session:{attribute:!1},snapshot:{state:!0},selectedViewId:{state:!0},selectedFlowNodeId:{state:!0},activePanel:{state:!0},expandedResolutionMemberIds:{state:!0}};static styles=Z;constructor(){super(),this.session=void 0,this.snapshot={rootId:void 0,nodes:[],resolutions:{scales:[],axes:[],legends:[]},dataflow:{sourceIds:[],nodes:[],collectorCount:0},params:{scopes:[]},marks:{marks:[]}},this.selectedViewId=void 0,this.selectedFlowNodeId=void 0,this.activePanel=`elements`,this.expandedResolutionMemberIds=new Set}connectedCallback(){super.connectedCallback(),this.#i()}disconnectedCallback(){this.#a(),super.disconnectedCallback()}updated(e){e.has(`session`)&&(this.#a(),this.#i()),(e.has(`selectedViewId`)||e.has(`activePanel`))&&this.#o()}#e=void 0;#t=e=>{this.selectedViewId=e.detail.viewId,this.activePanel=`elements`};#n=e=>{this.selectedFlowNodeId=e.detail.flowNodeId};#r=e=>{this.session?.highlightView(e.detail.viewId)};#i(){if(!this.session||this.#e)return;let e=()=>{this.snapshot=this.session.snapshot,this.selectedViewId&&!this.snapshot.nodes.some(e=>e.id===this.selectedViewId)?this.selectedViewId=this.snapshot.rootId:this.selectedViewId??=this.snapshot.rootId,this.selectedFlowNodeId&&!this.snapshot.dataflow.nodes.some(e=>e.id===this.selectedFlowNodeId)?this.selectedFlowNodeId=this.snapshot.dataflow.sourceIds[0]:this.selectedFlowNodeId??=this.snapshot.dataflow.sourceIds[0]};this.session.addEventListener(`snapshot`,e),this.#e=()=>{this.session?.removeEventListener(`snapshot`,e),this.#e=void 0},this.#D()}#a(){this.#e?.()}#o(){this.activePanel!==`elements`&&this.activePanel!==`resolutions`||this.renderRoot.querySelector(`.node.selected[data-view-id="${this.selectedViewId}"]`)?.scrollIntoView({block:`nearest`,inline:`nearest`})}render(){let e=this.#O(),t=this.#k();return L`
            <div class="shell">
                <div class="toolbar">
                    <strong class="toolbar-title">Inspector</strong>
                    <span class="panel-tabs">
                        ${this.#c(`elements`,`Views`)}
                        ${this.#c(`resolutions`,`Resolutions`)}
                        ${this.#c(`dataflow`,`Dataflow`)}
                        ${this.#c(`params`,`Params`)}
                    </span>
                    <button @click=${()=>this.#D()}>Refresh</button>
                    <button
                        class="close-button"
                        title="Close inspector"
                        aria-label="Close inspector"
                        @click=${()=>this.#s()}
                    >
                        x
                    </button>
                </div>
                ${this.#l(e,t)}
            </div>
        `}#s(){this.dispatchEvent(new CustomEvent(`close`,{bubbles:!0,composed:!0}))}#c(e,t){return L`
            <button
                class=${this.activePanel===e?`panel-tab selected`:`panel-tab`}
                @click=${()=>{this.activePanel=e}}
            >
                ${t}
            </button>
        `}#l(e,t){return this.activePanel===`dataflow`?L`
                <gs-inspector-dataflow-panel
                    .snapshot=${this.snapshot}
                    .selectedFlowNodeId=${this.selectedFlowNodeId}
                    @select-flow-node=${this.#n}
                    @select-view=${this.#t}
                    @highlight-view=${this.#r}
                ></gs-inspector-dataflow-panel>
            `:this.activePanel===`params`?L`
                <gs-inspector-params-panel
                    .snapshot=${this.snapshot}
                    @select-view=${this.#t}
                ></gs-inspector-params-panel>
            `:this.activePanel===`resolutions`?L`
                <div class="main">
                    ${this.#u(e)}
                    <div class="details">${this.#g()}</div>
                </div>
            `:L`
            <div class="main">
                ${this.#u(e)}
                <div class="details">
                    ${t?this.#f(t):L`<div class="empty">No view selected.</div>`}
                </div>
            </div>
        `}#u(e){return L`
            <div class="tree">
                <div class="tree-controls">
                    <label>
                        <input
                            type="checkbox"
                            .checked=${this.session?.includeChrome??!1}
                            @change=${e=>{let t=e.target;this.session?.setIncludeChrome(t.checked)}}
                        />
                        Show view chrome
                    </label>
                </div>
                ${e?this.#d(e,0):L`<div class="empty">
                          Launch the app to inspect the hierarchy.
                      </div>`}
            </div>
        `}#d(e,t){return L`
            <button
                class=${e.id===this.selectedViewId?`node selected`:`node`}
                data-view-id=${e.id}
                style=${`padding-left: ${.65+t*1.1}rem`}
                @click=${()=>{this.selectedViewId=e.id}}
                @mouseenter=${()=>this.session?.highlightView(e.id)}
                @mouseleave=${()=>this.session?.highlightView(void 0)}
            >
                <span class="node-main">
                    ${e.childIds.length>0?`v`:`-`} ${e.name}
                    ${e.chrome?L`<span class="badge">chrome</span>`:z}
                    ${e.visible?z:L`<span class="badge">hidden</span>`}
                </span>
                <span class="node-meta"> ${e.markType??e.type} </span>
            </button>
            ${e.childIds.map(e=>this.#d(this.#A(e),t+1))}
        `}#f(e){return L`
            <h2>${e.path}</h2>
            ${this.#p(e)}
            <dl>
                <dt>id</dt>
                <dd>${e.id}</dd>
                <dt>class</dt>
                <dd>${e.className}</dd>
                <dt>type</dt>
                <dd>${e.type}</dd>
                <dt>mark</dt>
                <dd>${e.markType??`-`}</dd>
                <dt>selector</dt>
                <dd>${e.selector?JSON.stringify(e.selector):`-`}</dd>
                <dt>visible</dt>
                <dd>${String(e.visible)}</dd>
                <dt>configured visible</dt>
                <dd>${String(e.configuredVisible)}</dd>
                <dt>data init</dt>
                <dd>${e.dataInitializationState}</dd>
                <dt>bounds</dt>
                <dd>${e.bounds?JSON.stringify(e.bounds):`-`}</dd>
            </dl>

            <h3>Encodings</h3>
            <p class="section-note">
                Channels defined on this view and the resolution ids they use.
            </p>
            ${this.#h(e)}

            <h3>Resolutions</h3>
            <p class="section-note">
                Direct scale, axis, and legend resolution ids registered on this
                view.
            </p>
            <dl>
                <dt>scale</dt>
                <dd>${Y(e.scaleResolutionIds)}</dd>
                <dt>axis</dt>
                <dd>${Y(e.axisResolutionIds)}</dd>
                <dt>legend</dt>
                <dd>${Y(e.legendResolutionIds)}</dd>
            </dl>

            <h3>Dataflow</h3>
            <p class="section-note">
                Flow nodes owned by this view. Use the Dataflow button to jump
                to the full flow tree.
            </p>
            ${this.#m(e)}

            <h3>Params</h3>
            <p class="section-note">Params declared in this view scope.</p>
            ${this.#T(e)}

            <h3>Mark</h3>
            <p class="section-note">
                Runtime mark state for unit views, including data and vertex
                counts.
            </p>
            ${this.#E(e)}

            <h3>Related Resolutions</h3>
            <p class="section-note">
                Resolutions that this view uses directly or participates in as a
                member. The Resolutions tab shows the global list.
            </p>
            ${this.#_(e)}

            <h3>Spec</h3>
            <p class="section-note">
                Authored or generated view spec snapshot for this runtime view.
            </p>
            <pre>${JSON.stringify(e.spec,null,2)}</pre>
        `}#p(e){return!e.debugErrors||e.debugErrors.length===0?z:L`
            <div class="debug-errors">
                <strong>Incomplete debug snapshot</strong>
                <ul>
                    ${e.debugErrors.map(e=>L`
                            <li>${e.field}: ${e.message}</li>
                        `)}
                </ul>
            </div>
        `}#m(e){let t=this.#N(e.id);return t.length===0?L`<p class="empty">No linked dataflow nodes.</p>`:L`
            <table>
                <thead>
                    <tr>
                        <th>node</th>
                        <th>out</th>
                        <th>state</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    ${t.map(e=>L`
                            <tr>
                                <td>${e.label}</td>
                                <td>${e.count}</td>
                                <td>${_e(e)}</td>
                                <td>
                                    <button
                                        @click=${()=>this.#P(e.id)}
                                    >
                                        Dataflow
                                    </button>
                                </td>
                            </tr>
                        `)}
                </tbody>
            </table>
        `}#h(e){let t=Object.values(e.encodings);return t.length===0?L`<p class="empty">No encodings.</p>`:L`
            <table>
                <thead>
                    <tr>
                        <th>channel</th>
                        <th>field / expr / value</th>
                        <th>type</th>
                        <th>scale</th>
                        <th>axis</th>
                        <th>legend</th>
                    </tr>
                </thead>
                <tbody>
                    ${t.map(e=>L`
                            <tr>
                                <td>${e.channel}</td>
                                <td>
                                    ${e.field??e.expr??X(e.value)}
                                </td>
                                <td>${e.type??`-`}</td>
                                <td>${e.scaleResolutionId??`-`}</td>
                                <td>${e.axisResolutionId??`-`}</td>
                                <td>${e.legendResolutionId??`-`}</td>
                            </tr>
                        `)}
                </tbody>
            </table>
        `}#g(){let{scales:e,axes:t,legends:n}=this.snapshot.resolutions;return L`
            <h3>Scales</h3>
            ${this.#v(e)}
            <h3>Axes</h3>
            ${this.#y(t)}
            <h3>Legends</h3>
            ${this.#b(n)}
        `}#_(e){let{scales:t,axes:n,legends:r}=this.snapshot.resolutions,i=new Set(Object.values(e.scaleResolutionIds)),a=new Set(Object.values(e.axisResolutionIds)),o=new Set(Object.values(e.legendResolutionIds)),s=t.filter(t=>i.has(t.id)||t.members.some(t=>t.viewId===e.id)),c=n.filter(t=>a.has(t.id)||t.members.some(t=>t.viewId===e.id)),l=r.filter(t=>o.has(t.id)||t.members.some(t=>t.viewId===e.id));return s.length===0&&c.length===0&&l.length===0?L`<p class="empty">No related resolutions.</p>`:L`
            <h4>Scales</h4>
            ${this.#v(s)}
            <h4>Axes</h4>
            ${this.#y(c)}
            <h4>Legends</h4>
            ${this.#b(l)}
        `}#v(e){return e.length===0?L`<p class="empty">No scale resolutions.</p>`:L`
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>channel</th>
                        <th>name</th>
                        <th>type</th>
                        <th>domain</th>
                        <th>owner</th>
                        <th>members</th>
                    </tr>
                </thead>
                <tbody>
                    ${e.map(e=>L`
                            <tr>
                                <td>${e.id}</td>
                                <td>${e.channel}</td>
                                <td>${e.name??`-`}</td>
                                <td>
                                    ${e.resolvedScaleType??e.type}
                                </td>
                                <td>
                                    ${X(e.complexDomain??e.domain)}
                                </td>
                                <td>
                                    ${this.#S(e.hostViewId,e.hostViewPath,`Jump to owner view`)}
                                </td>
                                <td>
                                    ${this.#x(e.id,e.members)}
                                </td>
                            </tr>
                        `)}
                </tbody>
            </table>
        `}#y(e){return e.length===0?L`<p class="empty">No axis resolutions.</p>`:L`
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>channel</th>
                        <th>title</th>
                        <th>scale</th>
                        <th>owner</th>
                        <th>members</th>
                    </tr>
                </thead>
                <tbody>
                    ${e.map(e=>L`
                            <tr>
                                <td>${e.id}</td>
                                <td>${e.channel}</td>
                                <td>${e.title??`-`}</td>
                                <td>${e.scaleResolutionId??`-`}</td>
                                <td>
                                    ${this.#S(e.hostViewId,e.hostViewPath,`Jump to owner view`)}
                                </td>
                                <td>
                                    ${this.#x(e.id,e.members)}
                                </td>
                            </tr>
                        `)}
                </tbody>
            </table>
        `}#b(e){return e.length===0?L`<p class="empty">No legend resolutions.</p>`:L`
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>channel</th>
                        <th>definitions</th>
                        <th>owner</th>
                        <th>members</th>
                    </tr>
                </thead>
                <tbody>
                    ${e.map(e=>L`
                            <tr>
                                <td>${e.id}</td>
                                <td>${e.channel}</td>
                                <td>${e.definitionCount}</td>
                                <td>
                                    ${this.#S(e.hostViewId,e.hostViewPath,`Jump to owner view`)}
                                </td>
                                <td>
                                    ${this.#x(e.id,e.members)}
                                </td>
                            </tr>
                        `)}
                </tbody>
            </table>
        `}#x(e,t){if(t.length===0)return L`<span class="muted">none</span>`;let n=t.slice().sort((e,t)=>Number(!!e.chrome)-Number(!!t.chrome)),r=this.expandedResolutionMemberIds.has(e),i=r?n:n.slice(0,5);return L`
            <ul class="member-list">
                ${i.map(e=>e.viewId===this.selectedViewId?L`
                              <li>
                                  <span class="current-member">
                                      ${e.viewPath}:${e.channel}
                                  </span>
                                  ${e.chrome?L`<span class="badge">chrome</span>`:z}
                              </li>
                          `:L`
                              <li>
                                  <button
                                      class="link-button"
                                      title="Jump to member view"
                                      @click=${()=>{this.#C(e)}}
                                      @mouseenter=${()=>this.session?.highlightView(e.viewId)}
                                      @mouseleave=${()=>this.session?.highlightView(void 0)}
                                  >
                                      ${e.viewPath}:${e.channel}
                                  </button>
                                  ${e.chrome?L`<span class="badge">chrome</span>`:z}
                              </li>
                          `)}
            </ul>
            ${t.length>i.length?L`
                      <button
                          class="inline-action"
                          @click=${()=>this.#w(e,!0)}
                      >
                          Show all ${t.length}
                      </button>
                  `:z}
            ${r&&t.length>5?L`
                      <button
                          class="inline-action"
                          @click=${()=>this.#w(e,!1)}
                      >
                          Show fewer
                      </button>
                  `:z}
        `}#S(e,t,n){return!e||!t?L`<span class="muted">-</span>`:e===this.selectedViewId?L`<span class="current-member">${t}</span>`:L`
            <button
                class="link-button"
                title=${n}
                @click=${()=>{this.#C({viewId:e})}}
                @mouseenter=${()=>this.session?.highlightView(e)}
                @mouseleave=${()=>this.session?.highlightView(void 0)}
            >
                ${t}
            </button>
        `}async#C(e){!this.#M(e.viewId)&&this.session&&(await this.session.setIncludeChrome(!0),this.snapshot=this.session.snapshot),this.#M(e.viewId)&&(this.selectedViewId=e.viewId),this.activePanel=`elements`,this.session?.highlightView(void 0),await this.updateComplete,this.#o()}#w(e,t){let n=new Set(this.expandedResolutionMemberIds);t?n.add(e):n.delete(e),this.expandedResolutionMemberIds=n}#T(e){let t=this.#F(e.id);return!t||t.params.length===0?L`<p class="empty">No local params.</p>`:Q(t.params)}#E(e){let t=this.#I(e.id);return t?L`
            <dl>
                <dt>type</dt>
                <dd>${t.type}</dd>
                <dt>ready</dt>
                <dd>${String(t.ready)}</dd>
                <dt>picking</dt>
                <dd>${String(t.pickingParticipant)}</dd>
                <dt>data count</dt>
                <dd>${t.dataCount??`-`}</dd>
                <dt>vertices</dt>
                <dd>${t.vertexCount??`-`}</dd>
                <dt>allocated vertices</dt>
                <dd>${t.allocatedVertices??`-`}</dd>
                <dt>ranges</dt>
                <dd>${t.rangeCount}</dd>
                <dt>encoding channels</dt>
                <dd>${t.encodingChannels.join(`, `)||`-`}</dd>
                <dt>encoder channels</dt>
                <dd>${t.encoderChannels.join(`, `)||`-`}</dd>
                <dt>search fields</dt>
                <dd>${t.searchFields.join(`, `)||`-`}</dd>
                <dt>uniforms dirty</dt>
                <dd>${String(t.markUniformsAltered)}</dd>
            </dl>

            <h3>Mark Props</h3>
            <pre>${X(t.properties)}</pre>
        `:L`<p class="empty">No mark for this view.</p>`}async#D(){this.session&&await this.session.refresh()}#O(){return this.snapshot.rootId?this.#j(this.snapshot.rootId):void 0}#k(){return this.selectedViewId?this.#j(this.selectedViewId)??this.#O():this.#O()}#A(e){let t=this.snapshot.nodes.find(t=>t.id===e);if(!t)throw Error(`Unknown inspector node: `+e);return t}#j(e){return this.snapshot.nodes.find(t=>t.id===e)}#M(e){return this.snapshot.nodes.some(t=>t.id===e)}#N(e){return this.snapshot.dataflow.nodes.filter(t=>t.viewId===e)}#P(e){this.selectedFlowNodeId=e,this.activePanel=`dataflow`}#F(e){return this.snapshot.params.scopes.find(t=>t.viewId===e)}#I(e){return this.snapshot.marks.marks.find(t=>t.viewId===e)}};customElements.define(`gs-inspector-panel`,$);export{$ as GsInspectorPanel};