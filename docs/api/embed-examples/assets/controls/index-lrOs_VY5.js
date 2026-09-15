/* empty css               */import"../registerWebGL-mk-X5Shx.js";import{t as e}from"../minimal-B_EdizBf.js";import{n as t,t as n}from"../src-DhuivFd9.js";import"../registerSvg-CbfmPnr1.js";var r=`
    :host {
        position: absolute;
        top: 8px;
        right: 8px;
        z-index: 1;
        max-width: calc(100% - 16px);
        color: var(--gs-controls-color, #333);
        font: 12px system-ui, sans-serif;
        pointer-events: none;
    }
    :host([data-placement="top"]) {
        top: auto;
        bottom: 100%;
    }
    :host([data-placement="bottom"]) {
        top: 100%;
    }
    :host([data-placement="top"]) .buttons {
        padding-bottom: 4px;
    }
    :host([data-placement="bottom"]) .buttons {
        padding-top: 4px;
    }
    .buttons {
        display: flex;
        justify-content: flex-end;
        gap: 3px;
        opacity: 0;
        transition: opacity 250ms ease;
    }
    :host([data-container-active]) .buttons {
        opacity: var(--gs-controls-hover-opacity, 0.3);
        pointer-events: auto;
    }
    :host(:hover) .buttons,
    :host(:focus-within) .buttons,
    :host([data-visibility="always"]) .buttons {
        opacity: 1;
        pointer-events: auto;
    }
    @media (hover: none) {
        :host([data-visibility]) .buttons {
            opacity: 1;
            pointer-events: auto;
        }
    }
    @media (prefers-reduced-motion: reduce) {
        .buttons {
            transition: none;
        }
    }
    button, a {
        display: inline-flex;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        gap: 4px;
        min-width: 32px;
        min-height: 32px;
        padding: 5px 7px;
        border: 0;
        border-radius: 4px;
        background: var(--gs-controls-background, #fff);
        color: inherit;
        font: inherit;
        text-decoration: none;
        cursor: pointer;
    }
    button:hover, a:hover {
        outline: 1px solid #999;
    }
    button:focus-visible, a:focus-visible {
        outline: 2px solid currentColor;
        outline-offset: 2px;
    }
    button:disabled {
        opacity: 0.6;
        cursor: wait;
    }
    .icon {
        display: inline-flex;
        flex-shrink: 0;
    }
    .icon, .icon > *, svg, img {
        width: 16px;
        height: 16px;
    }
    p {
        position: absolute;
        top: 100%;
        right: 0;
        pointer-events: auto;
        width: max-content;
        max-width: min(320px, calc(100vw - 16px));
        box-sizing: border-box;
        padding: 8px;
        margin: 4px 0 0;
        border: 1px solid #bbb;
        border-radius: 4px;
        background: var(--gs-controls-background, #fff);
        white-space: pre-line;
        overflow-wrap: anywhere;
    }
    :host([data-placement="bottom"]) p {
        top: auto;
        bottom: 100%;
        margin: 0 0 4px;
    }
`;function i(e,t){let n=Object.keys(t).map(t=>({name:t,value:e.style.getPropertyValue(t),priority:e.style.getPropertyPriority(t)}));for(let[n,r]of Object.entries(t))e.style.setProperty(n,r,`important`);return()=>{for(let{name:t,value:r,priority:i}of n)e.style.setProperty(t,r,i)}}function a(e={}){return c(`PNG`,e.filename??`genomespy`,t=>t.imageExport.raster(e.exportOptions))}function o(e={}){return c(`SVG`,e.filename??`genomespy`,t=>t.imageExport.svg(e.exportOptions))}var s=new WeakMap;function c(e,n,r){return{mount(i){s.has(i)||s.set(i,new Set);let a=s.get(i),o=t({label:e,title:`Download `+e,async onClick(){a.forEach(e=>e.disabled=!0),i.showStatus(`Preparing `+e+`…`);try{let t=await r(i.api);i.signal.aborted||(l(i.container.ownerDocument,t.blob,`${n}.${e.toLowerCase()}`),i.showStatus(t.warnings?.join(`
`)??``))}finally{a.forEach(e=>e.disabled=!1)}}}).mount(i);return a.add(o.element),{element:o.element,dispose(){a.delete(o.element),o.dispose()}}}}}function l(e,t,n){let r=URL.createObjectURL(t),i=e.createElement(`a`);i.href=r,i.download=n,e.body.append(i);try{i.click()}finally{i.remove(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}}function u(){return{mount:d}}function d(e){let{container:t,reportError:n}=e,r=t.ownerDocument;if(t==r.body||t==r.documentElement)throw Error(`Full-window controls require a dedicated visualization container.`);let a=r.createElement(`button`);a.type=`button`;let o=r.createElementNS(`http://www.w3.org/2000/svg`,`svg`);o.setAttribute(`viewBox`,`0 0 20 20`),o.setAttribute(`aria-hidden`,`true`),o.setAttribute(`fill`,`none`),o.setAttribute(`stroke`,`currentColor`),o.setAttribute(`stroke-width`,`1.5`);let s=r.createElementNS(o.namespaceURI,`path`);o.append(s),a.append(o);let c=r.createElement(`dialog`);c.setAttribute(`aria-label`,`Full-window visualization`),c.style.cssText=`position:fixed;inset:0;width:100%;height:100%;max-width:none;max-height:none;margin:0;padding:0;border:0;box-sizing:border-box;overflow:auto;background:white;color:inherit;`;let l=r.createComment(`GenomeSpy full-window container`),u;function d(){let e=!!u;a.title=e?`Restore visualization size`:`Expand to full window`,a.setAttribute(`aria-label`,a.title),a.setAttribute(`aria-pressed`,String(e)),s.setAttribute(`d`,e?`M2 7h5V2m6 0v5h5M2 13h5v5m6 0v-5h5`:`M7 2H2v5m11-5h5v5M2 13v5h5m6 0h5v-5`)}function f(){u&&(c.close(),l.replaceWith(t),u(),u=void 0,c.remove(),d(),a.focus({preventScroll:!0}))}function p(){let n=[];for(let e=t.parentElement;e;e=e.parentElement)n.push({element:e,left:e.scrollLeft,top:e.scrollTop});let o=i(t,{position:`relative`,top:`auto`,right:`auto`,bottom:`auto`,left:`auto`,width:`100%`,height:`100%`,"min-width":`0`,"min-height":`0`,"max-width":`none`,"max-height":`none`,"margin-top":`0`,"margin-right":`0`,"margin-bottom":`0`,"margin-left":`0`,"box-sizing":`border-box`}),s=i(r.documentElement,{"overflow-x":`hidden`,"overflow-y":`hidden`}),p=e.overridePlacement(`inside`);u=()=>{p(),o(),s();for(let{element:e,left:t,top:r}of n)e.scrollLeft=t,e.scrollTop=r},t.before(l),c.append(t),r.body.append(c);try{c.showModal()}catch(e){throw f(),e}d(),a.focus({preventScroll:!0})}let m=new AbortController;return a.addEventListener(`click`,()=>{try{u?f():p()}catch(e){n(e)}},{signal:m.signal}),c.addEventListener(`cancel`,e=>{e.preventDefault(),f()},{signal:m.signal}),c.addEventListener(`close`,()=>{c.open||f()},{signal:m.signal}),d(),{element:a,dispose(){f(),m.abort()}}}function f(){return{mount({container:e}){let t=e.ownerDocument,n=t.createElement(`a`);n.href=`https://genomespy.app/`,n.target=`_blank`,n.rel=`noopener noreferrer`,n.style.padding=`5px`,n.title=`About GenomeSpy`,n.setAttribute(`aria-label`,n.title);let r=t.createElement(`img`);return r.src=new URL(`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20style='fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5'%20viewBox='0%200%2064%2064'%3e%3cpath%20d='M208.6%20548.2s11.2%2046.2%2031.2%2071c20%2024.9%2079.3%2061.6%2079.3%2061.6S385.6%20623%20438%20498.3c0%200%2018.1%201%2036-11.9%2017.7-12.7%2016.3-7.9%2021-24.8%200%200%2057%206.3%20131-9.7%2041.7-9.1%2084.3-26.3%20121.5-58.8%200%200-25.4-32.9-58-101.7-12.4-26.1-41.9-34.3-98.7-88L438.1%20391.2%20208.6%20548.2Z'%20style='fill-opacity:.11'%20transform='matrix(.10221%20.00684%20-.00671%20.10035%20-8%20-13.2)'/%3e%3cg%20transform='rotate(-35.4%2034.2%2080.8)%20scale(.10057)'%3e%3cpath%20d='M561.6%20349.2s-45.3-77.9-232.8-97.2c0%200-26.5%2073.2-21.1%20116%205.3%2043-4.7%2088.1%2021.4%20133.2%200%200%20114%205.5%20225.5-72.7l74.6%203.6S673.8%20534.4%20857%20554.4c0%200%2029.7-62.6%2022.2-137-8-78.7-7.5-124-7.5-124s-96.2-9.5-236.3%2068.4l-73.8-12.6Z'%20style='fill:%237fbbdd'/%3e%3cclipPath%20id='a'%3e%3cpath%20d='M561.6%20349.2s-45.3-77.9-232.8-97.2c0%200-26.5%2073.2-21.1%20116%205.3%2043-4.7%2088.1%2021.4%20133.2%200%200%20114%205.5%20225.5-72.7l74.6%203.6S673.8%20534.4%20857%20554.4c0%200%2029.7-62.6%2022.2-137-8-78.7-7.5-124-7.5-124s-96.2-9.5-236.3%2068.4l-73.8-12.6Z'/%3e%3c/clipPath%3e%3cg%20clip-path='url(%23a)'%3e%3cpath%20d='M386.9%20397.2c-15.6-13.6-51.8-22.4-96.3-16.7-44.5%205.8-93.8%2021.8-111.8%2031.6-10.6%205.7-27.3%2017.3-28.1%2027.2-1.2%2014.2%202.9%2037.8%2015%2052%206%207.2%2014.2%2012.1%2028.1%2014.1%2017.9%202.6%2059-24.8%2081.6-36.2%2024-12%2038.6-14.6%2063-22.2%200%200-47%2031.6-68.2%2047.4-30.6%2022.9-51.6%2028-57.3%2045.5-3.1%209.4-.7%2027.9%207.5%2037.6%209%2011%2012.8%2017.6%2034.2%2020.1%2012.7%201.5%2022%201.2%2059.8-28.6%2021.7-17.2%2055.9-59.2%2067-74.4%2016.2-22%2023.8-43.1%2021.3-59.6-3.7-23.6-8.4-31.3-15.8-37.8Z'%20style='fill:%23fff'%20transform='scale(.88664)%20rotate(31.2%20485%20792.2)'/%3e%3cpath%20d='M484.7%20379c-5.4-11.1-17.6-28.5-.8-53.8a739%20739%200%200%201%2044.2-60.6c13.2-16.3%2046.7-46.2%2059.6-52%2013-6%2033.3-8.7%2044.2.2%2011%209.1%2016.5%2020.6%2023%2032.7%207.4%2013.8%2012.4%2029.3%201.6%2042.8-15.4%2019.2-34.3%2017-61.6%2031.5-27.7%2014.8-42.3%2023.1-55.7%2035.9%200%200%2052.2-21.6%2082-31.2%2029.8-9.7%2059.8-20%2074.8-8.5s14.6%2015.5%2018.4%2031.2c4.7%2019.4-7.2%2038-20.1%2048.6-13%2010.7-34.3%2016-57.4%2021-30.5%206.8-96.6%2015.1-124%202.6-27.5-12.6-24.4-32.8-28.2-40.5Z'%20style='fill:%23fff'%20transform='scale(.87906)%20rotate(31.2%20487.2%20893.5)'/%3e%3c/g%3e%3cpath%20d='M561.6%20349.2s-45.3-77.9-232.8-97.2c0%200-26.5%2073.2-21.1%20116%205.3%2043-4.7%2088.1%2021.4%20133.2%200%200%20114%205.5%20225.5-72.7l74.6%203.6S673.8%20534.4%20857%20554.4c0%200%2029.7-62.6%2022.2-137-8-78.7-7.5-124-7.5-124s-96.2-9.5-236.3%2068.4l-73.8-12.6Z'%20style='fill:none;stroke:%23000;stroke-width:16.57px'/%3e%3c/g%3e%3cg%20transform='rotate(-4.2%20-78%20211)%20scale(.10057)'%3e%3cpath%20d='M385%20385.5s45.8-37.6%2065-35.4c21.7%202.5%2040.5%2057.6%2040.2%2074.3-.3%2016.7-47.3%2045.5-67.7%2041.8%200%200%203-24-10.4-52.9-13.4-28.8-27.2-27.8-27.2-27.8Z'%20style='fill:%237fbbdd'/%3e%3cclipPath%20id='b'%3e%3cpath%20d='M385%20385.5s45.8-37.6%2065-35.4c21.7%202.5%2040.5%2057.6%2040.2%2074.3-.3%2016.7-47.3%2045.5-67.7%2041.8%200%200%203-24-10.4-52.9-13.4-28.8-27.2-27.8-27.2-27.8Z'/%3e%3c/clipPath%3e%3cg%20clip-path='url(%23b)'%3e%3cpath%20d='M413.3%20402.7c17.5%2018.9%2010%2045.7%2028.4%2043.4%2021.7-2.7%2030.9-15.7%2031.6-32.7.7-17-1-19.5-7.1-38-6.1-18.7-18.2-23.2-43.4-18.2-20.8%204.1-17.8%203-24%2010-6.4%207-14.5%2026-14.5%2026s8.4-12.7%2029%209.5Z'%20style='fill:%23fff'%20transform='matrix(.90907%200%200%20.85852%2037%2052.2)'/%3e%3c/g%3e%3cpath%20d='M385%20385.5s45.8-37.6%2065-35.4c21.7%202.5%2040.5%2057.6%2040.2%2074.3-.3%2016.7-47.3%2045.5-67.7%2041.8%200%200%203-24-10.4-52.9-13.4-28.8-27.2-27.8-27.2-27.8Z'%20style='fill:none;stroke:%23000;stroke-width:16.57px'/%3e%3c/g%3e%3c/svg%3e`,``+import.meta.url).href,r.alt=``,r.style.width=r.style.height=`20px`,n.append(r),{element:n,dispose(){n.remove()}}}}}function p(e,t,n){if(!e.isConnected)throw Error(`The controls container must be connected to the document.`);if(!Array.isArray(n?.controls))throw Error(`An explicit controls array is required.`);let a=e.ownerDocument,o=n.placement??`inside`;m(o);let s=n.visibility??(o==`inside`?`hover`:`always`);if(s!=`hover`&&s!=`always`)throw Error(`Unknown controls visibility: `+s);let c=a.createElement(`div`);c.dataset.visibility=s,c.dataset.placement=o;let l=c.attachShadow({mode:`open`}),u=a.createElement(`style`);u.textContent=r;let d=a.createElement(`div`);d.className=`buttons`,d.setAttribute(`role`,`group`),d.setAttribute(`aria-label`,`Visualization controls`);let f=a.createElement(`p`);f.setAttribute(`role`,`status`),f.hidden=!0,l.append(u,d,f);let p=new AbortController,{signal:h}=p;function g(){h.aborted||c.toggleAttribute(`data-container-active`,e.matches(`:hover, :focus-within`))}for(let t of[`pointerenter`,`pointerleave`,`focusin`,`focusout`])e.addEventListener(t,()=>a.defaultView.requestAnimationFrame(g),{signal:p.signal});d.addEventListener(`click`,e=>{e.detail>0&&queueMicrotask(()=>{let e=l.activeElement;e instanceof HTMLElement&&e.blur()})},{signal:p.signal});function _(e){h.aborted||(f.textContent=e,f.hidden=!e)}function v(e){h.aborted||(_(`Unable to complete action: `+(e instanceof Error?e.message:String(e))),n.onError?.(e))}let y=i(e,a.defaultView.getComputedStyle(e).position==`static`?{position:`relative`}:{}),b=[],x={container:e,api:t,signal:h,showStatus:_,reportError:v,overridePlacement(e){m(e);let t=c.dataset.placement;return c.dataset.placement=e,()=>{c.dataset.placement=t}}};function S(){if(h.aborted)return;p.abort();let e=[];for(let t of b.toReversed())try{t.dispose()}catch(t){e.push(t)}if(c.remove(),y(),e.length)throw AggregateError(e,`Unable to dispose controls.`)}try{for(let e of n.controls){let t=e.mount(x);b.push(t),d.append(t.element)}e.append(c),g()}catch(e){throw S(),e}return{element:c,dispose:S}}function m(e){if(e!=`inside`&&e!=`top`&&e!=`bottom`)throw Error(`Unknown controls placement: `+e)}var h=document.getElementById(`plot`),g=document.getElementById(`clear-selection-icon`).content.firstElementChild,_=document.getElementById(`reset`),v=document.getElementById(`placement`),y=document.getElementById(`visibility`),b={width:`container`,height:`container`,data:{values:Array.from({length:80},(e,t)=>({x:t,y:Math.sin(t/7)+Math.cos(t/3)/3}))},params:[{name:`brush`,select:{type:`interval`,encodings:[`x`,`y`]}}],mark:{type:`point`,size:80},encoding:{x:{field:`x`,type:`quantitative`,scale:{zoom:!0}},y:{field:`y`,type:`quantitative`},color:{condition:{param:`brush`,value:`#bd4b32`},value:`#427b9f`}}},x=await e(h,structuredClone(b)),S=C();function C(){return p(h,x,{controls:[a({filename:`genomespy-controls-example`,exportOptions:{pixelRatio:2}}),o({filename:`genomespy-controls-example`}),t({label:`Clear selection`,title:`Clear the selected region`,icon:g,onClick:({api:e})=>e.getParam(`brush`).setValue({type:`interval`,intervals:{}})}),n(),u(),f()],placement:v.value,visibility:y.value=="default"?void 0:y.value})}function w(){S.dispose(),S=C()}async function T(){_.disabled=v.disabled=y.disabled=!0;try{S.dispose(),x.finalize(),x=await e(h,structuredClone(b)),S=C()}finally{_.disabled=v.disabled=y.disabled=!1}}v.addEventListener(`change`,w),y.addEventListener(`change`,w),_.addEventListener(`click`,T);