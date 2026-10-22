import { css, html, nothing, repeat, LitElement } from "../lit-all.min.js";

const FADE_DURATION = 250;

class VideoCarousel extends LitElement {
  static properties = {
    _videos: { state: true },
    _activeIndex: { state: true },
    _outgoingIndex: { state: true },
  };

  static styles = css`
    :host {
      display: block;
      margin-top: 2em;
    }

    .stage {
      position: relative;
      display: grid;
      isolation: isolate;
      box-shadow: 0 3px 14px rgb(0 0 0 / 15%);
    }

    video {
      grid-area: 1 / 1;
      display: block;
      width: 100%;
      aspect-ratio: 16 / 9;
      background: black;
      pointer-events: none;
    }

    video[hidden] {
      display: none;
    }

    video.active {
      z-index: 1;
      pointer-events: auto;
    }

    video[data-incoming] {
      opacity: 0;
    }

    @media (prefers-reduced-motion: reduce) {
      video[data-incoming] {
        opacity: 1 !important;
      }
    }

    .caption {
      margin-top: 12px;
      text-align: center;
      overflow-wrap: anywhere;
    }

    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: 0;
      border: 0;
      color: inherit;
      font: inherit;
      cursor: pointer;
    }

    button:focus-visible {
      outline: 3px solid var(--brand-color-dark, #3e8cb6);
      outline-offset: 3px;
    }

    .arrow {
      position: absolute;
      top: 50%;
      z-index: 2;
      transform: translateY(-50%);
      width: 44px;
      height: 44px;
      border: 1px solid #ccc;
      border-radius: 50%;
      background: rgb(255 255 255 / 90%);
      box-shadow: 0 1px 6px rgb(0 0 0 / 25%);
      opacity: 0;
      pointer-events: none;
    }

    .previous {
      left: 12px;
    }

    .next {
      right: 12px;
    }

    :host(:hover) .arrow,
    .carousel:not([data-pointer-focus]):has(:focus-visible) .arrow,
    .carousel[data-caption-focus] .arrow {
      opacity: 1;
      pointer-events: auto;
    }

    .arrow:hover {
      background: #e1edf4;
      border-color: var(--brand-color-dark, #3e8cb6);
    }

    .arrow:disabled {
      cursor: default;
    }

    :host(:hover) .arrow:disabled,
    .carousel:not([data-pointer-focus]):has(:focus-visible) .arrow:disabled,
    .carousel[data-caption-focus] .arrow:disabled {
      opacity: 0.4;
    }

    .arrow svg {
      width: 20px;
      height: 20px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .pills {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 4px;
      margin-top: 4px;
    }

    .pill {
      width: 44px;
      height: 44px;
      border-radius: 4px;
      background: transparent;
    }

    .pill::before {
      content: "";
      width: 20px;
      height: 6px;
      border-radius: 3px;
      background: #999;
    }

    .pill:hover::before {
      background: #666;
    }

    .pill[aria-current="true"]::before {
      width: 32px;
      background: var(--brand-color-dark, #3e8cb6);
    }
  `;

  constructor() {
    super();
    /** @type {{ src: string, description: Element }[]} */
    this._videos = [];
    this._activeIndex = 0;
    this._outgoingIndex = null;
  }

  #observer = new MutationObserver(() => this.#readVideos());
  #fadeAnimation = null;
  #fadeTimeout = null;
  #queuedIndex = null;
  #loadedVideos = new WeakSet();

  connectedCallback() {
    super.connectedCallback();
    this.#readVideos();
    this.#observer.observe(this, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["data-video-src"],
    });
  }

  #readVideos() {
    const videos = Array.from(this.children)
      .filter((element) => element.hasAttribute("data-video-src"))
      .map((description, index) => {
        description.setAttribute("slot", `description-${index}`);
        return { src: description.getAttribute("data-video-src"), description };
      });

    if (
      videos.length !== this._videos.length ||
      videos.some(
        (video, index) =>
          video.src !== this._videos[index].src ||
          video.description !== this._videos[index].description,
      )
    ) {
      this.#cancelTransition();
      this._videos = videos;
      this._activeIndex = Math.min(
        this._activeIndex,
        Math.max(0, videos.length - 1),
      );
    }
  }

  render() {
    const video = this._videos[this._activeIndex];
    if (!video) return;

    return html`
      <div
        class="carousel"
        @focusin=${this.#syncFocusVisibility}
        @focusout=${this.#syncFocusVisibility}
        @pointerdown=${this.#syncFocusVisibility}
        @keydown=${this.#syncFocusVisibility}
      >
        <div
          class="stage"
          role="group"
          aria-roledescription="slide"
          aria-label=${`${this._activeIndex + 1} of ${this._videos.length}`}
        >
          ${repeat(
            this._videos,
            (item) => item.description,
            (item, index) => html`<video
              src=${index === this._activeIndex || this.#loadedVideos.has(item.description)
                ? item.src
                : nothing}
              class=${index === this._activeIndex ? "active" : ""}
              ?hidden=${index !== this._activeIndex && index !== this._outgoingIndex}
              ?data-incoming=${index === this._activeIndex && this._outgoingIndex !== null}
              aria-label=${this.#filename(item)}
              aria-hidden=${index === this._activeIndex ? nothing : "true"}
              ?inert=${index !== this._activeIndex}
              ?autoplay=${index === this._activeIndex}
              muted
              .muted=${true}
              playsinline
              ?controls=${index === this._activeIndex}
              preload="auto"
              @loadeddata=${(event) => this.#startFade(event.currentTarget)}
              @canplay=${(event) => this.#startFade(event.currentTarget)}
              @playing=${(event) => this.#startFade(event.currentTarget)}
              @seeked=${(event) => this.#startFade(event.currentTarget)}
              @error=${(event) => this.#startFade(event.currentTarget)}
              @ended=${(event) => {
                if (event.currentTarget === this.#activeVideo()) {
                  this.#showVideo(this._activeIndex + 1);
                }
              }}
            >
              <a href=${item.src}>Watch ${this.#filename(item)}</a>
            </video>`,
          )}
          <button
            class="arrow previous"
            type="button"
            aria-label="Previous video"
            ?disabled=${this._videos.length < 2}
            @click=${() => this.#showVideo((this.#queuedIndex ?? this._activeIndex) - 1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m15 6-6 6 6 6" />
            </svg>
          </button>
          <button
            class="arrow next"
            type="button"
            aria-label="Next video"
            ?disabled=${this._videos.length < 2}
            @click=${() => this.#showVideo((this.#queuedIndex ?? this._activeIndex) + 1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9 6 6 6-6 6" />
            </svg>
          </button>
        </div>
        <div class="caption" aria-live="polite" aria-atomic="true">
          <slot name=${`description-${this._activeIndex}`}></slot>
        </div>
        <div class="pills" role="group" aria-label="Choose a video">
          ${this._videos.map(
            (item, index) => html`
              <button
                class="pill"
                type="button"
                aria-label=${`Play video ${index + 1} of ${this._videos.length}: ${this.#filename(item)}`}
                aria-current=${index === this._activeIndex ? "true" : "false"}
                @click=${() => this.#showVideo(index)}
              ></button>
            `,
          )}
        </div>
      </div>
    `;
  }

  updated(changedProperties) {
    if (!changedProperties.has("_activeIndex") && !changedProperties.has("_videos")) {
      return;
    }
    // Native controls remain available if the browser blocks autoplay.
    const video = this.#activeVideo();
    if (!video) return;
    if (changedProperties.has("_activeIndex")) video.currentTime = 0;
    video.play().catch(() => this.#startFade(video));
    if (video.readyState >= 2 && !video.seeking) {
      this.#startFade(video);
    } else if (this._outgoingIndex !== null) {
      // A stalled load must not leave the previous video covering the player.
      clearTimeout(this.#fadeTimeout);
      this.#fadeTimeout = setTimeout(() => {
        this.#fadeTimeout = null;
        this.#startFade(video);
      }, FADE_DURATION);
    }
  }

  disconnectedCallback() {
    this.#observer.disconnect();
    this.#cancelTransition();
    this.shadowRoot?.querySelectorAll("video").forEach((video) => video.pause());
    super.disconnectedCallback();
  }

  #showVideo(index) {
    if (!this._videos.length) return;
    const nextIndex = (index + this._videos.length) % this._videos.length;
    // Finish the current blend, then honor the latest navigation request.
    if (this._outgoingIndex !== null) {
      this.#queuedIndex = nextIndex;
      return;
    }
    if (nextIndex === this._activeIndex) return;

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      this._outgoingIndex = this._activeIndex;
    }
    this.#loadedVideos.add(this._videos[this._activeIndex].description);
    this.#activeVideo()?.pause();
    this._activeIndex = nextIndex;
  }

  #startFade(video) {
    if (
      !this.isConnected ||
      video !== this.#activeVideo() ||
      this._outgoingIndex === null ||
      this.#fadeAnimation
    ) {
      return;
    }

    clearTimeout(this.#fadeTimeout);
    this.#fadeTimeout = null;
    const animation = video.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: FADE_DURATION,
      easing: "ease-in-out",
      fill: "forwards",
    });
    this.#fadeAnimation = animation;
    animation.finished
      .then(async () => {
        if (this.#fadeAnimation !== animation) return;
        this.#fadeAnimation = null;
        this._outgoingIndex = null;
        // Render the final opacity before releasing the animation's fill.
        await this.updateComplete;
        animation.cancel();
        const queuedIndex = this.#queuedIndex;
        this.#queuedIndex = null;
        if (this.isConnected && queuedIndex !== null) this.#showVideo(queuedIndex);
      })
      .catch(() => {});
  }

  #cancelTransition() {
    clearTimeout(this.#fadeTimeout);
    this.#fadeTimeout = null;
    this.#fadeAnimation?.cancel();
    this.#fadeAnimation = null;
    this.#queuedIndex = null;
    this._outgoingIndex = null;
  }

  #activeVideo() {
    return this.shadowRoot?.querySelector("video.active");
  }

  #syncFocusVisibility(event) {
    const target = event.composedPath()[0];
    const keyboardFocus = event.type === "keydown" ||
      (event.type === "focusin" && target.matches(":focus-visible"));
    // Clicking an already focused button can retain :focus-visible in Chrome.
    if (event.type === "pointerdown") {
      event.currentTarget.setAttribute("data-pointer-focus", "");
    } else if (keyboardFocus) {
      event.currentTarget.removeAttribute("data-pointer-focus");
    }
    // Slotted caption links are outside the shadow tree's :has() selectors.
    event.currentTarget.toggleAttribute(
      "data-caption-focus",
      keyboardFocus && this.contains(target),
    );
  }

  /** @param {{ src: string }} video */
  #filename(video) {
    return video.src.split("/").pop();
  }
}

customElements.define("video-carousel", VideoCarousel);
