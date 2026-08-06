import { Z as e, gt as t, ht as n, t as r, xt as i, yt as a } from "./src-BiBK3iof.js";
import { n as o, t as s } from "./ref-CTBfqPSy.js";
//#region index.js
function c() {
	let e = document.querySelector("meta[name='base_url']").getAttribute("content");
	return e || console.error("No <meta name=\"base_url\" ...> found!"), e;
}
function l(e) {
	return /^(?:[a-z]+:|\/)/i.test(e) ? e : c() + "/" + e;
}
async function u(e, t, n, i, a) {
	let o = l("example-specs/");
	try {
		if (t.baseUrl = t.baseUrl || (n ? l(n) : o), i === "core") return await r(e, t);
		if (i === "app") {
			let { appStyles: n, embed: r } = await import("./appEmbedRuntime-BK4KXH4b.js");
			return await a(n), await r(e, t, { embedMode: "embedded" });
		} else throw Error(`Unknown GenomeSpy embed runtime: ${i}`);
	} catch (t) {
		let n = document.createElement("pre");
		n.textContent = t.toString(), e.appendChild(n);
	}
}
var d = "genome-spy-app-embed-styles";
function f(e) {
	if (!document.getElementById(d)) {
		let t = document.createElement("style");
		t.id = d, t.textContent = e, document.head.appendChild(t);
	}
}
var p = class extends n {
	static get styles() {
		return i`
            .embed-links {
                margin: 0.3em 0 0.6em;
                text-align: center;
                font-size: 80%;

                a {
                    color: var(--md-typeset-a-color);
                    text-decoration: none;
                }

                a:hover {
                    color: var(--md-accent-fg-color);
                }
            }

            .genome-spy-app {
                box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
                border-radius: 3px;
                overflow: hidden;
            }
        `;
	}
	static get properties() {
		return {
			height: { type: String },
			specHidden: { type: Boolean },
			baseUrl: {
				type: String,
				attribute: "base-url"
			},
			playgroundUrl: {
				type: String,
				attribute: "playground-url"
			},
			runtime: { type: String }
		};
	}
	constructor() {
		super(), this.height = 300, this.specHidden = !1, this.baseUrl = void 0, this.playgroundUrl = void 0, this.runtime = "core", this.embedRef = s(), this.appStyles = "", this.embedResult = void 0, this.observer = void 0, this.disconnected = !1, this.#e = !1;
	}
	render() {
		let n = this.specHidden || this.#e, r = this.playgroundUrl || n, i = this.specHidden ? "Show specification" : "Hide specification";
		return a`
            ${this.appStyles ? a`<style>
                          ${this.appStyles}
                      </style>` : t}
            <div
                class="embed-container"
                style=${e({ height: this.height + "px" })}
                ${o(this.embedRef)}
            ></div>
            ${r ? a`
                          <div class="embed-links">
                              ${n ? a`
                                        <a
                                            href="#"
                                            @click=${(e) => {
			this.#e = !0, this.specHidden = !this.specHidden, e.preventDefault();
		}}
                                            >${i}</a
                                        >
                                    ` : t}
                              ${this.playgroundUrl && n ? a` - ` : t}
                              ${this.playgroundUrl ? a`
                                        <a href=${this.playgroundUrl}
                                            >Edit this example in Playground</a
                                        >
                                    ` : t}
                          </div>
                      ` : t}

            <div
                class="embed-spec"
                style=${e({ display: this.specHidden ? "none" : "block" })}
            >
                <slot></slot>
            </div>
        `;
	}
	#e;
	firstUpdated() {
		let e = this.shadowRoot.querySelector("slot").assignedNodes().filter((e) => e instanceof HTMLElement)[0]?.textContent;
		e && (this.observer = new IntersectionObserver((t) => {
			t.forEach((t) => {
				if (t.isIntersecting) {
					let n = t.target;
					this.embedToDoc(n, JSON.parse(e)), this.observer.unobserve(n);
				}
			});
		}), setTimeout(() => {
			this.disconnected || this.observer.observe(this.embedRef.value);
		}, 80));
	}
	async embedToDoc(e, t) {
		let n = await u(e, t, this.baseUrl, this.runtime, (e) => this.#t(e));
		n && (this.disconnected ? n.finalize() : this.embedResult = n);
	}
	async #t(e) {
		f(e), this.appStyles = e, this.requestUpdate(), await this.updateComplete;
	}
	disconnectedCallback() {
		this.disconnected = !0, this.observer?.disconnect(), this.embedResult?.finalize(), this.embedResult = void 0, super.disconnectedCallback();
	}
};
customElements.define("genome-spy-doc-embed", p);
//#endregion
export { p as GenomeSpyDocEmbed };
