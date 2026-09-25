/* empty css               */import"../registerWebGL-9ng7Vq5S.js";import{a as e,n as t}from"../lit-BJ21N-0y.js";import{t as n}from"../minimal-DO8T04Jf.js";var r=document.getElementById(`container`),i=document.getElementById(`dashboard`),a=document.getElementById(`track-controls`),o={signal:0,variants:0},s=[p(),m()],c=await n(r,{vconcat:[{name:`tracks`,spacing:5,resolve:{axis:{x:`shared`},scale:{color:`shared`},legend:{color:`shared`}},vconcat:s}],config:{view:{stroke:`lightgray`},style:{"overlay-title":{offset:-5,dx:5}}}}),l=c.views.get({scope:[],view:`tracks`}),u=s.map(e=>({title:f(e.title),handle:c.views.get({scope:[],view:e.name})})),d=`Ready`;c.views.subscribeToLayout(v),v();function f(e){return typeof e==`string`?e:typeof e?.text==`string`?e.text:``}function p(){return{name:`signal`,title:{text:`Signal track `+ ++o.signal,style:`overlay-title`},height:80,data:{values:y()},mark:`rect`,encoding:{x:{field:`pos`,type:`index`},y:{field:`value`,type:`quantitative`},color:{value:`steelblue`}}}}function m(){return{name:`variants`,title:{text:`Variants track `+ ++o.variants,style:`overlay-title`},height:36,data:{values:b()},mark:{type:`point`,size:120},encoding:{x:{field:`pos`,type:`index`},color:{field:`type`,type:`nominal`}}}}async function h(e){let t=e===`signal`?p():m(),n=f(t.title),r=e+`-`+o[e];try{let e=await c.views.insert(l,t,{scope:r});u.push({title:n,handle:e}),d=`Added `+n}catch(e){d=e instanceof Error?e.message:`Track insert failed`}v()}async function g(e){try{await c.views.remove(e.handle),u.splice(u.indexOf(e),1),d=`Removed `+e.title}catch(e){d=e instanceof Error?e.message:`Track removal failed`}v()}async function _(e,t){let n=u.indexOf(e),r=n+t;try{await c.views.move(e.handle,{index:r}),u.splice(n,1),u.splice(r,0,e),d=`Moved `+e.title}catch(e){d=e instanceof Error?e.message:`Track move failed`}v()}function v(){e(t`
            <p>
                <button @click=${()=>h(`signal`)}>Add signal</button>
                <button @click=${()=>h(`variants`)}>
                    Add variants
                </button>
            </p>
            <p>Status: ${d}</p>
        `,i),e(t`
            ${u.map((e,n)=>{let r=c.views.getLayoutBounds(e.handle);return r?t`
                    <div class="track-controls" style=${`left: `+(r.x+r.width-4)+`px; top: `+(r.y+4)+`px`}>
                        <button
                            title=${`Move `+e.title+` up`}
                            ?disabled=${n===0}
                            @click=${()=>_(e,-1)}
                        >
                            Up
                        </button>
                        <button
                            title=${`Move `+e.title+` down`}
                            ?disabled=${n===u.length-1}
                            @click=${()=>_(e,1)}
                        >
                            Down
                        </button>
                        <button
                            title=${`Remove `+e.title}
                            @click=${()=>g(e)}
                        >
                            Remove
                        </button>
                    </div>
                `:``})}
        `,a)}function y(){return Array.from({length:64},(e,t)=>({pos:t,value:Math.random()}))}function b(){let e=[`SNV`,`DEL`,`DUP`];return Array.from({length:12},()=>({pos:Math.floor(Math.random()*64),type:e[Math.floor(Math.random()*e.length)]})).sort((e,t)=>e.pos-t.pos)}