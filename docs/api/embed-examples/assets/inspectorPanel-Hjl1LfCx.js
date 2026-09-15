import{i as e,n as t,o as n,t as r}from"./lit-BJ21N-0y.js";function i(e){let t=Object.entries(e);return t.length?t.map(([e,t])=>e+`: `+t).join(`, `):`-`}function a(e){return e.disposed?`disposed`:e.initialized?e.completed?`done`:`active`:`new`}function o(e){return e===void 0?`-`:typeof e==`string`?e:JSON.stringify(e)}var s=n`
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
`,c=class extends r{static properties={snapshot:{attribute:!1},selectedFlowNodeId:{attribute:!1}};static styles=s;constructor(){super(),this.snapshot={dataflow:{sourceIds:[],nodes:[],collectorCount:0}},this.selectedFlowNodeId=void 0}render(){if(this.snapshot.dataflow.sourceIds.length===0)return t`
                <div class="single-panel">
                    <p class="empty">No dataflow has been built yet.</p>
                </div>
            `;let e=this.selectedFlowNodeId?this.#n(this.selectedFlowNodeId):this.#n(this.snapshot.dataflow.sourceIds[0]);return t`
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
        `}#e(n,r){let i=n.id===this.selectedFlowNodeId,a=n.disposed||!n.initialized;return t`
            <button
                class=${[`node`,i?`selected`:``,a?`warning`:``].join(` `)}
                style=${`padding-left: ${.65+r*1.1}rem`}
                @click=${()=>this.#r(n.id)}
                @mouseenter=${()=>this.#a(n.viewId)}
                @mouseleave=${()=>this.#a(void 0)}
            >
                <span class="node-main">
                    ${n.childIds.length>0?`v`:`-`} ${n.label}
                    ${n.completed?t`<span class="badge">done</span>`:e}
                    ${n.disposed?t`<span class="badge">disposed</span>`:e}
                    ${n.initialized?e:t`<span class="badge">new</span>`}
                </span>
                <span class="node-meta">out ${n.count}</span>
            </button>
            ${n.childIds.map(e=>this.#e(this.#n(e),r+1))}
        `}#t(e){return t`
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
                    ${e.viewId?t`<span
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
            ${e.params?t`<pre>${o(e.params)}</pre>`:t`<p class="empty">No flow node parameters.</p>`}

            <h3>First Datum</h3>
            ${e.first?t`<pre class="flow-first">${o(e.first)}</pre>`:t`<p class="empty">
                      ${e.count>0?`No datum preview is available.`:`No data was propagated.`}
                  </p>`}
        `}#n(e){let t=this.snapshot.dataflow.nodes.find(t=>t.id===e);if(!t)throw Error(`Unknown inspector flow node: `+e);return t}#r(e){this.selectedFlowNodeId=e,this.dispatchEvent(new CustomEvent(`select-flow-node`,{detail:{flowNodeId:e},bubbles:!0,composed:!0}))}#i(e){this.dispatchEvent(new CustomEvent(`select-view`,{detail:{viewId:e},bubbles:!0,composed:!0}))}#a(e){this.dispatchEvent(new CustomEvent(`highlight-view`,{detail:{viewId:e},bubbles:!0,composed:!0}))}};customElements.define(`gs-inspector-dataflow-panel`,c);var l=class extends r{static properties={snapshot:{attribute:!1}};static styles=s;constructor(){super(),this.snapshot={params:{scopes:[]}}}render(){let e=this.snapshot.params.scopes.filter(e=>e.params.length>0);return e.length===0?t`
                <div class="single-panel">
                    <p class="empty">No params.</p>
                </div>
            `:t`
            <div class="single-panel">
                <h2>Params</h2>
                ${e.map(e=>t`
                        <h3>
                            <span
                                class="linked"
                                @click=${()=>this.#e(e.viewId)}
                                >${e.viewPath}</span
                            >
                            <span class="muted">${e.scopeId}</span>
                        </h3>
                        ${u(e.params)}
                    `)}
            </div>
        `}#e(e){this.dispatchEvent(new CustomEvent(`select-view`,{detail:{viewId:e},bubbles:!0,composed:!0}))}};function u(e){return t`
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
                ${e.map(e=>t`
                        <tr>
                            <td>${e.name}</td>
                            <td>${e.kind}</td>
                            <td>${String(e.writable)}</td>
                            <td>${o(e.value)}</td>
                            <td>
                                ${e.config?o(e.config):`-`}
                            </td>
                        </tr>
                    `)}
            </tbody>
        </table>
    `}customElements.define(`gs-inspector-params-panel`,l);var d=class extends r{static properties={session:{attribute:!1},snapshot:{state:!0},selectedViewId:{state:!0},selectedFlowNodeId:{state:!0},activePanel:{state:!0},expandedResolutionMemberIds:{state:!0}};static styles=s;constructor(){super(),this.session=void 0,this.snapshot={rootId:void 0,nodes:[],resolutions:{scales:[],axes:[],legends:[]},dataflow:{sourceIds:[],nodes:[],collectorCount:0},params:{scopes:[]},marks:{marks:[]}},this.selectedViewId=void 0,this.selectedFlowNodeId=void 0,this.activePanel=`elements`,this.expandedResolutionMemberIds=new Set}connectedCallback(){super.connectedCallback(),this.#i()}disconnectedCallback(){this.#a(),super.disconnectedCallback()}updated(e){e.has(`session`)&&(this.#a(),this.#i()),(e.has(`selectedViewId`)||e.has(`activePanel`))&&this.#o()}#e=void 0;#t=e=>{this.selectedViewId=e.detail.viewId,this.activePanel=`elements`};#n=e=>{this.selectedFlowNodeId=e.detail.flowNodeId};#r=e=>{this.session?.highlightView(e.detail.viewId)};#i(){if(!this.session||this.#e)return;let e=()=>{this.snapshot=this.session.snapshot,this.selectedViewId&&!this.snapshot.nodes.some(e=>e.id===this.selectedViewId)?this.selectedViewId=this.snapshot.rootId:this.selectedViewId??=this.snapshot.rootId,this.selectedFlowNodeId&&!this.snapshot.dataflow.nodes.some(e=>e.id===this.selectedFlowNodeId)?this.selectedFlowNodeId=this.snapshot.dataflow.sourceIds[0]:this.selectedFlowNodeId??=this.snapshot.dataflow.sourceIds[0]};this.session.addEventListener(`snapshot`,e),this.#e=()=>{this.session?.removeEventListener(`snapshot`,e),this.#e=void 0},e()}#a(){this.#e?.()}#o(){this.activePanel!==`elements`&&this.activePanel!==`resolutions`||this.renderRoot.querySelector(`.node.selected[data-view-id="${this.selectedViewId}"]`)?.scrollIntoView({block:`nearest`,inline:`nearest`})}render(){let e=this.#O(),n=this.#k();return t`
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
                ${this.#l(e,n)}
            </div>
        `}#s(){this.dispatchEvent(new CustomEvent(`close`,{bubbles:!0,composed:!0}))}#c(e,n){return t`
            <button
                class=${this.activePanel===e?`panel-tab selected`:`panel-tab`}
                @click=${()=>{this.activePanel=e}}
            >
                ${n}
            </button>
        `}#l(e,n){return this.activePanel===`dataflow`?t`
                <gs-inspector-dataflow-panel
                    .snapshot=${this.snapshot}
                    .selectedFlowNodeId=${this.selectedFlowNodeId}
                    @select-flow-node=${this.#n}
                    @select-view=${this.#t}
                    @highlight-view=${this.#r}
                ></gs-inspector-dataflow-panel>
            `:this.activePanel===`params`?t`
                <gs-inspector-params-panel
                    .snapshot=${this.snapshot}
                    @select-view=${this.#t}
                ></gs-inspector-params-panel>
            `:this.activePanel===`resolutions`?t`
                <div class="main">
                    ${this.#u(e)}
                    <div class="details">${this.#g()}</div>
                </div>
            `:t`
            <div class="main">
                ${this.#u(e)}
                <div class="details">
                    ${n?this.#f(n):t`<div class="empty">No view selected.</div>`}
                </div>
            </div>
        `}#u(e){return t`
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
                ${e?this.#d(e,0):t`<div class="empty">
                              Launch the app to inspect the hierarchy.
                          </div>`}
            </div>
        `}#d(n,r){return t`
            <button
                class=${n.id===this.selectedViewId?`node selected`:`node`}
                data-view-id=${n.id}
                style=${`padding-left: ${.65+r*1.1}rem`}
                @click=${()=>{this.selectedViewId=n.id}}
                @mouseenter=${()=>this.session?.highlightView(n.id)}
                @mouseleave=${()=>this.session?.highlightView(void 0)}
            >
                <span class="node-main">
                    ${n.childIds.length>0?`v`:`-`} ${n.name}
                    ${n.chrome?t`<span class="badge">chrome</span>`:e}
                    ${n.visible?e:t`<span class="badge">hidden</span>`}
                </span>
                <span class="node-meta"> ${n.markType??n.type} </span>
            </button>
            ${n.childIds.map(e=>this.#d(this.#A(e),r+1))}
        `}#f(e){return t`
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
                <dd>${i(e.scaleResolutionIds)}</dd>
                <dt>axis</dt>
                <dd>${i(e.axisResolutionIds)}</dd>
                <dt>legend</dt>
                <dd>${i(e.legendResolutionIds)}</dd>
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
        `}#p(n){return!n.debugErrors||n.debugErrors.length===0?e:t`
            <div class="debug-errors">
                <strong>Incomplete debug snapshot</strong>
                <ul>
                    ${n.debugErrors.map(e=>t`
                            <li>${e.field}: ${e.message}</li>
                        `)}
                </ul>
            </div>
        `}#m(e){let n=this.#N(e.id);return n.length===0?t`<p class="empty">No linked dataflow nodes.</p>`:t`
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
                    ${n.map(e=>t`
                            <tr>
                                <td>${e.label}</td>
                                <td>${e.count}</td>
                                <td>${a(e)}</td>
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
        `}#h(e){let n=Object.values(e.encodings);return n.length===0?t`<p class="empty">No encodings.</p>`:t`
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
                    ${n.map(e=>t`
                            <tr>
                                <td>${e.channel}</td>
                                <td>
                                    ${e.field??e.expr??o(e.value)}
                                </td>
                                <td>${e.type??`-`}</td>
                                <td>${e.scaleResolutionId??`-`}</td>
                                <td>${e.axisResolutionId??`-`}</td>
                                <td>${e.legendResolutionId??`-`}</td>
                            </tr>
                        `)}
                </tbody>
            </table>
        `}#g(){let{scales:e,axes:n,legends:r}=this.snapshot.resolutions;return t`
            <h3>Scales</h3>
            ${this.#v(e)}
            <h3>Axes</h3>
            ${this.#y(n)}
            <h3>Legends</h3>
            ${this.#b(r)}
        `}#_(e){let{scales:n,axes:r,legends:i}=this.snapshot.resolutions,a=new Set(Object.values(e.scaleResolutionIds)),o=new Set(Object.values(e.axisResolutionIds)),s=new Set(Object.values(e.legendResolutionIds)),c=n.filter(t=>a.has(t.id)||t.members.some(t=>t.viewId===e.id)),l=r.filter(t=>o.has(t.id)||t.members.some(t=>t.viewId===e.id)),u=i.filter(t=>s.has(t.id)||t.members.some(t=>t.viewId===e.id));return c.length===0&&l.length===0&&u.length===0?t`<p class="empty">No related resolutions.</p>`:t`
            <h4>Scales</h4>
            ${this.#v(c)}
            <h4>Axes</h4>
            ${this.#y(l)}
            <h4>Legends</h4>
            ${this.#b(u)}
        `}#v(e){return e.length===0?t`<p class="empty">No scale resolutions.</p>`:t`
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
                    ${e.map(e=>t`
                            <tr>
                                <td>${e.id}</td>
                                <td>${e.channel}</td>
                                <td>${e.name??`-`}</td>
                                <td>
                                    ${e.resolvedScaleType??e.type}
                                </td>
                                <td>
                                    ${o(e.complexDomain??e.domain)}
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
        `}#y(e){return e.length===0?t`<p class="empty">No axis resolutions.</p>`:t`
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
                    ${e.map(e=>t`
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
        `}#b(e){return e.length===0?t`<p class="empty">No legend resolutions.</p>`:t`
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
                    ${e.map(e=>t`
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
        `}#x(n,r){if(r.length===0)return t`<span class="muted">none</span>`;let i=r.slice().sort((e,t)=>Number(!!e.chrome)-Number(!!t.chrome)),a=this.expandedResolutionMemberIds.has(n),o=a?i:i.slice(0,5);return t`
            <ul class="member-list">
                ${o.map(n=>n.viewId===this.selectedViewId?t`
                              <li>
                                  <span class="current-member">
                                      ${n.viewPath}:${n.channel}
                                  </span>
                                  ${n.chrome?t`<span class="badge"
                                                >chrome</span
                                            >`:e}
                              </li>
                          `:t`
                              <li>
                                  <button
                                      class="link-button"
                                      title="Jump to member view"
                                      @click=${()=>{this.#C(n)}}
                                      @mouseenter=${()=>this.session?.highlightView(n.viewId)}
                                      @mouseleave=${()=>this.session?.highlightView(void 0)}
                                  >
                                      ${n.viewPath}:${n.channel}
                                  </button>
                                  ${n.chrome?t`<span class="badge"
                                                >chrome</span
                                            >`:e}
                              </li>
                          `)}
            </ul>
            ${r.length>o.length?t`
                          <button
                              class="inline-action"
                              @click=${()=>this.#w(n,!0)}
                          >
                              Show all ${r.length}
                          </button>
                      `:e}
            ${a&&r.length>5?t`
                          <button
                              class="inline-action"
                              @click=${()=>this.#w(n,!1)}
                          >
                              Show fewer
                          </button>
                      `:e}
        `}#S(e,n,r){return!e||!n?t`<span class="muted">-</span>`:e===this.selectedViewId?t`<span class="current-member">${n}</span>`:t`
            <button
                class="link-button"
                title=${r}
                @click=${()=>{this.#C({viewId:e})}}
                @mouseenter=${()=>this.session?.highlightView(e)}
                @mouseleave=${()=>this.session?.highlightView(void 0)}
            >
                ${n}
            </button>
        `}async#C(e){!this.#M(e.viewId)&&this.session&&(await this.session.setIncludeChrome(!0),this.snapshot=this.session.snapshot),this.#M(e.viewId)&&(this.selectedViewId=e.viewId),this.activePanel=`elements`,this.session?.highlightView(void 0),await this.updateComplete,this.#o()}#w(e,t){let n=new Set(this.expandedResolutionMemberIds);t?n.add(e):n.delete(e),this.expandedResolutionMemberIds=n}#T(e){let n=this.#F(e.id);return!n||n.params.length===0?t`<p class="empty">No local params.</p>`:u(n.params)}#E(e){let n=this.#I(e.id);return n?t`
            <dl>
                <dt>type</dt>
                <dd>${n.type}</dd>
                <dt>ready</dt>
                <dd>${String(n.ready)}</dd>
                <dt>picking</dt>
                <dd>${String(n.pickingParticipant)}</dd>
                <dt>data count</dt>
                <dd>${n.dataCount??`-`}</dd>
                <dt>vertices</dt>
                <dd>${n.vertexCount??`-`}</dd>
                <dt>allocated vertices</dt>
                <dd>${n.allocatedVertices??`-`}</dd>
                <dt>ranges</dt>
                <dd>${n.rangeCount}</dd>
                <dt>encoding channels</dt>
                <dd>${n.encodingChannels.join(`, `)||`-`}</dd>
                <dt>encoder channels</dt>
                <dd>${n.encoderChannels.join(`, `)||`-`}</dd>
                <dt>search fields</dt>
                <dd>${n.searchFields.join(`, `)||`-`}</dd>
                <dt>uniforms dirty</dt>
                <dd>${String(n.markUniformsAltered)}</dd>
            </dl>

            <h3>Mark Props</h3>
            <pre>${o(n.properties)}</pre>
        `:t`<p class="empty">No mark for this view.</p>`}async#D(){this.session&&await this.session.refresh()}#O(){return this.snapshot.rootId?this.#j(this.snapshot.rootId):void 0}#k(){return this.selectedViewId?this.#j(this.selectedViewId)??this.#O():this.#O()}#A(e){let t=this.snapshot.nodes.find(t=>t.id===e);if(!t)throw Error(`Unknown inspector node: `+e);return t}#j(e){return this.snapshot.nodes.find(t=>t.id===e)}#M(e){return this.snapshot.nodes.some(t=>t.id===e)}#N(e){return this.snapshot.dataflow.nodes.filter(t=>t.viewId===e)}#P(e){this.selectedFlowNodeId=e,this.activePanel=`dataflow`}#F(e){return this.snapshot.params.scopes.find(t=>t.viewId===e)}#I(e){return this.snapshot.marks.marks.find(t=>t.viewId===e)}};customElements.define(`gs-inspector-panel`,d);export{d as GsInspectorPanel};