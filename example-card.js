import { html, render } from "./lit-all.min.js";

const stylesheet = html`
  <style>
    .wrapper {
      font-family: "Lato", sans-serif;
      height: 100%;
      box-shadow: 0 3px 14px rgba(0, 0, 0, 0.15);

      display: flex;
      flex-direction: column;
    }

    a {
      color: #3797ce;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    .screenshot {
      display: block;
      height: 180px;
      background-size: cover;
    }

    .description {
      flex-grow: 1;

      display: flex;
      flex-direction: column;

      padding: 10px;
      font-size: 14px;
    }

    .description-text {
      flex-grow: 1;
    }

    .spec-link {
      margin-top: 0.2em;
      text-align: right;
      font-size: 90%;
    }
  </style>
`;

class GenomeSpyExample extends HTMLElement {
  constructor() {
    super();

    const specAttr = this.getAttribute("spec");
    const linkAttr = this.getAttribute("link");

    const linkUrl = specAttr ? "examples/?spec=" + specAttr : linkAttr;

    const content = html`
      ${stylesheet}

      <div class="wrapper">
        <a
          href=${linkUrl}
          class="screenshot"
          style=${`background-image: url(${
            "example_img/" + this.getAttribute("img-src")
          })`}
        >
        </a>
          <div class="description">
            <div class="description-text">
              <slot></slot>
            </div>
            ${
              specAttr
                ? html` <div class="spec-link">
                    <a href="${"examples/" + this.getAttribute("spec")}"
                      >view spec</a
                    >
                  </div>`
                : ""
            }
          </div>
        </div>
      </div>
    `;

    this.attachShadow({ mode: "open" });

    render(content, this.shadowRoot);
  }
}

customElements.define("genome-spy-example", GenomeSpyExample);
