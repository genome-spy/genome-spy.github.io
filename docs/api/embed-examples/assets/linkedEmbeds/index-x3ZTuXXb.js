/* empty css               */import"../registerWebGL-mk-X5Shx.js";import{a as e,n as t}from"../lit-BJ21N-0y.js";import{t as n}from"../minimal-B_EdizBf.js";var r={height:60,view:{stroke:`lightgray`},assembly:`hg38`,data:{values:[{chrom:`chr3`,pos:134567890,sample:`A`},{chrom:`chr4`,pos:123456789,sample:`B`},{chrom:`chr7`,pos:76543210,sample:`C`},{chrom:`chr9`,pos:34567890,sample:`D`}]},mark:`point`,encoding:{x:{chrom:`chrom`,pos:`pos`,type:`locus`,scale:{name:`genomeScale`,domain:[{chrom:`chr3`},{chrom:`chr9`}],zoom:!0}},size:{value:180},color:{field:`sample`,type:`nominal`}}},i={height:60,assembly:`hg38`,view:{stroke:`lightgray`},data:{values:[{chrom:`chr3`,start:12e7,end:16e7,value:.4},{chrom:`chr4`,start:9e7,end:14e7,value:.8},{chrom:`chr6`,start:3e7,end:9e7,value:.2},{chrom:`chr8`,start:6e7,end:13e7,value:.6}]},mark:`rect`,encoding:{x:{chrom:`chrom`,pos:`start`,type:`locus`,scale:{name:`genomeScale`,domain:[{chrom:`chr3`},{chrom:`chr9`}],zoom:!0}},x2:{chrom:`chrom`,pos:`end`},color:{field:`value`,type:`quantitative`,scale:{domain:[0,1],scheme:`blues`}}}},a=document.getElementById(`container-a`),o=document.getElementById(`container-b`),s=document.getElementById(`dashboard`),[c,l]=await Promise.all([n(a,r),n(o,i)]),u=new class{#e=new Set;#t;#n=!1;constructor(e){this.#t=e}register(e){let t=e.getScaleResolutionByName(this.#t);if(!t)throw Error(`Missing named scale: `+this.#t);let n=e=>this.#r(e.scaleResolution);return this.#e.add(t),t.addEventListener(`domain`,n),()=>{t.removeEventListener(`domain`,n),this.#e.delete(t)}}#r(e){if(this.#n)return;let t=e.getComplexDomain();this.#n=!0;try{this.#e.values().filter(t=>t!==e).forEach(e=>void e.zoomTo(t,{renderImmediately:!0}))}finally{this.#n=!1,p()}}}(`genomeScale`);u.register(c),u.register(l);var d=c.getScaleResolutionByName(`genomeScale`),f=l.getScaleResolutionByName(`genomeScale`);if(!d||!f)throw Error(`Missing named scale: genomeScale`);p();function p(){e(t`
            <p>
                Embed A domain:
                <code>${JSON.stringify(d.getComplexDomain())}</code>
            </p>
            <p>
                Embed B domain:
                <code>${JSON.stringify(f.getComplexDomain())}</code>
            </p>
            <p>
                Zoom to:
                <button
                    @click=${()=>d.zoomTo([{chrom:`chr4`},{chrom:`chr4`}])}
                >
                    chr4
                </button>
                <button
                    @click=${()=>d.zoomTo([{chrom:`chr1`},{chrom:`chrM`}])}
                >
                    Whole genome
                </button>
            </p>
        `,s)}