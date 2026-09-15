/* empty css               */import"../registerWebGL-mk-X5Shx.js";import{a as e,n as t}from"../lit-BJ21N-0y.js";import{t as n}from"../selection-BMUmVvvK.js";import{t as r}from"../minimal-B_EdizBf.js";var i={width:300,height:300,params:[{name:`threshold`,value:4},{name:`doubleThreshold`,expr:`threshold * 2`},{name:`brush`,select:{type:`interval`,encodings:[`x`,`y`]}}],layer:[{data:{values:[{sample:`A`,x:1,y:2},{sample:`B`,x:2,y:5},{sample:`C`,x:3,y:7},{sample:`D`,x:4,y:3},{sample:`E`,x:5,y:9}]},transform:[{type:`filter`,expr:`datum.y >= threshold`}],name:`scatter`,width:300,height:220,mark:{type:`point`,size:120},encoding:{x:{field:`x`,type:`quantitative`},y:{field:`y`,type:`quantitative`},color:{condition:{param:`brush`,field:`sample`,type:`nominal`},value:`lightgray`}}},{data:{values:[{}]},name:`thresholdLine`,mark:{type:`rule`},encoding:{y:{datum:{expr:`threshold`},type:`quantitative`}}}]},a=document.getElementById(`container`),o=document.getElementById(`dashboard`),s=await r(a,i),c=s.getParam(`threshold`),l=s.getParam(`brush`),u=s.getParam(`doubleThreshold`);c.subscribe(d),l.subscribe(d),u.subscribe(d),d();function d(){e(t`
            <p>
                threshold: <code>${JSON.stringify(c.getValue())}</code>
            </p>
            <p>
                doubleThreshold:
                <code>${JSON.stringify(u.getValue())}</code>
            </p>
            <p>brush: <code>${JSON.stringify(l.getValue())}</code></p>
            <p>
                <button
                    @click=${()=>l.setValue(n({x:[1.5,4.5],y:[3,8]}))}
                >
                    Set brush
                </button>
                <button
                    @click=${()=>l.setValue(n({x:null,y:null}))}
                >
                    Clear brush
                </button>
            </p>
            <p>
                <button
                    @click=${()=>c.setValue(c.getValue()-1)}
                >
                    Decrease threshold
                </button>
                <button
                    @click=${()=>c.setValue(c.getValue()+1)}
                >
                    Increase threshold
                </button>
            </p>
        `,o)}