import { html, css, LitElement } from "../lit-all.min.js";
import { embed } from "./dist/bundle/index.es.js";

/** @type {import("./scriptEntry.js").ScriptEntry[]} */
const script = normalizeScriptEntries([
  { duration: 2000 },
  { locus: "chr8", duration: 2000 },
  { duration: 2000 },
  { locus: "chr8:74,284,626-79,532,307", duration: 2000 },
  { duration: 1500 },
  { locus: "chr8:76,671,541-76,877,292", duration: 1000 },
  { duration: 1500 },
  { locus: "chr8:76,778,415-76,778,459", duration: 3000 },
  { duration: 2500 },
  { locus: "chr8:76,778,188-76,778,233", duration: 2000 },
  { duration: 2500 },
  { locus: "chr1:1-chrM:16,569", duration: 2000 },
  { duration: 2000 },
  { locus: "chr17", duration: 1000 },
  { duration: 2000 },
  { locus: "chr17:7,665,066-7,691,622", duration: 3500 },
  { duration: 2000 },
  { locus: "chr17:7,673,804-7,673,867", duration: 2000 },
  { duration: 2000 },
  { locus: "chr1:1-chrM:16,569", duration: 5000 },
  { duration: 2000 },
]);

class GenomeSpyShowcase extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  #isInViewport = false;
  #isUserPaused = false;
  #playbackWait = null;
  #resumePlayback = null;
  #intersectionObserver = null;

  constructor() {
    super();
  }

  render() {
    return html`<div class="container"></div>`;
  }

  firstUpdated() {
    this.#setupPlaybackControls();
    this.#init();
  }

  disconnectedCallback() {
    this.#releasePlaybackWait();
    this.#intersectionObserver?.disconnect();
    super.disconnectedCallback();
  }

  async #init() {
    const specURL = new URL("spec/spec.json", import.meta.url);

    /** @type {import("./dist/src/types/embedApi.js").EmbedFunction} */
    const typedEmbed = embed;

    const api = await typedEmbed(
      this.shadowRoot.querySelector(".container"),
      specURL.toString(),
      {},
    );

    const xResolution = await api.getScaleResolutionByName("x");

    while (true) {
      for (const entry of script) {
        if ("loci" in entry) {
          await this.#waitForPlayback();
          await xResolution.zoomTo(entry.loci, entry.duration);
        } else if ("duration" in entry) {
          await new Promise((resolve) => setTimeout(resolve, entry.duration));
        }
      }
    }
  }

  #setupPlaybackControls() {
    this.#intersectionObserver = new IntersectionObserver(([entry]) => {
      this.#isInViewport = entry.isIntersecting;
      this.#syncPlaybackWait();
    });
    this.#intersectionObserver.observe(this);

    const pausePlayback = () => {
      this.#isUserPaused = true;
      this.#syncPlaybackWait();
    };
    const resumePlayback = () => {
      this.#isUserPaused = false;
      this.#syncPlaybackWait();
    };

    this.addEventListener("mousedown", pausePlayback);
    this.addEventListener("wheel", pausePlayback, { passive: true });
    this.addEventListener("mouseleave", resumePlayback);
  }

  #canPlay() {
    return this.#isInViewport && !this.#isUserPaused;
  }

  #syncPlaybackWait() {
    if (this.#canPlay()) {
      this.#releasePlaybackWait();
      return;
    }

    if (!this.#playbackWait) {
      this.#playbackWait = new Promise((resolve) => {
        this.#resumePlayback = resolve;
      });
    }
  }

  #releasePlaybackWait() {
    if (this.#resumePlayback) {
      this.#resumePlayback();
      this.#resumePlayback = null;
    }
    this.#playbackWait = null;
  }

  async #waitForPlayback() {
    while (!this.#canPlay()) {
      this.#syncPlaybackWait();
      await this.#playbackWait;
    }
  }
}

customElements.define("genome-spy-showcase", GenomeSpyShowcase);

/**
 *
 * @param {string} str
 * @returns {import("./scriptEntry.js").ChromPos[]}
 */
function parseInterval(str) {
  const matches = str.match(
    /^(chr[0-9A-Z]+)(?::([0-9,]+)(?:-(?:(chr[0-9A-Z]+):)?([0-9,]+))?)?$/,
  );

  if (matches) {
    const startChr = matches[1];
    const endChr = matches[3] ?? startChr;

    if (!matches[2]) {
      return [{ chrom: startChr }];
    }

    const startIndex = parseInt(matches[2].replace(/,/g, ""));
    const endIndex =
      matches[4] !== undefined
        ? parseInt(matches[4].replace(/,/g, ""))
        : startIndex;

    return [
      { chrom: startChr, pos: startIndex - 1 },
      { chrom: endChr, pos: endIndex },
    ];
  }
}

/**
 * @param {import("./scriptEntry.js").ScriptEntry[]} scriptEntry
 */
function normalizeScriptEntries(entries) {
  // run parseInterval for each StringLocus
  return entries.map((entry) => {
    if ("locus" in entry) {
      const loci = parseInterval(entry.locus);
      return { ...entry, loci };
    }
    return entry;
  });
}
