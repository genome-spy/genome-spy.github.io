/* empty css               */import"../registerWebGL-CwSZKT-a.js";import{a as e,n as t}from"../lit-BJ21N-0y.js";import{t as n}from"../minimal-BWNT1VN9.js";var r={height:50,assembly:`hg38`,data:{values:[{chrom:`chr3`,pos:134567890},{chrom:`chr4`,pos:123456789},{chrom:`chr9`,pos:34567890}]},mark:`point`,encoding:{x:{chrom:`chrom`,pos:`pos`,type:`locus`,scale:{name:`genomeScale`,domain:[{chrom:`chr3`},{chrom:`chr9`}]}},size:{value:200}}},i=document.getElementById(`container`),a=document.getElementById(`dashboard`);function o(n){e(t`
            <p>Current domain: ${JSON.stringify(n.getDomain())}</p>
            <p>
                Current domain (complex):
                ${JSON.stringify(n.getComplexDomain())}
            </p>
            <p>
                Zoom to:
                <button
                    @click=${()=>n.zoomTo([{chrom:`chr4`},{chrom:`chr4`}])}
                >
                    chr4
                </button>
                <button
                    @click=${()=>n.zoomTo([{chrom:`chr8`},{chrom:`chr10`}])}
                >
                    chr8-chr10
                </button>

                <button
                    @click=${()=>n.zoomTo([{chrom:`chr1`},{chrom:`chrM`}],!0)}
                >
                    Whole genome (smoothly)
                </button>

                <button
                    @click=${()=>n.zoomTo([4e8,5e8])}
                >
                    [400_000_000, 500_000_000]
                </button>
            </p>
        `,a)}var s=(await n(i,r)).getScaleResolutionByName(`genomeScale`);if(!s)throw Error(`Missing named scale: genomeScale`);o(s),s.addEventListener(`domain`,e=>o(e.scaleResolution));