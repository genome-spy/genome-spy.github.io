//#region ../core/src/view/renderingContext/viewRenderingContext.js
var e = class {
	constructor(e) {
		this.globalOptions = e;
	}
	beginSampleFacetBatch() {}
	endSampleFacetBatch() {}
	pushView(e, t) {}
	popView(e) {}
	renderMark(e, t) {}
	getDevicePixelRatio() {
		return 1;
	}
};
//#endregion
//#region ../core/src/view/layout/layoutResult.js
function t(e, t, { devicePixelRatio: n = 1, renderingOptions: i = {} } = {}) {
	let a = new r(n);
	return e.arrange(a, t, i), a.complete();
}
var n = class {
	#e;
	constructor(e) {
		this.#e = e;
	}
	collectRenderCommands(e) {
		for (let t of this.#e) switch (t.type) {
			case "beginSampleFacetBatch":
				e.beginSampleFacetBatch();
				break;
			case "endSampleFacetBatch":
				e.endSampleFacetBatch();
				break;
			case "pushView":
				e.pushView(t.view, t.coords);
				break;
			case "popView":
				e.popView(t.view);
				break;
			case "renderMark":
				e.renderMark(t.mark, t.options);
				break;
			default: throw Error("Unknown layout command");
		}
	}
}, r = class extends e {
	#e = [];
	#t = [];
	#n = 0;
	#r;
	constructor(e) {
		super({}), this.#r = e;
	}
	getDevicePixelRatio() {
		return this.#r;
	}
	beginSampleFacetBatch() {
		this.#n++, this.#e.push({ type: "beginSampleFacetBatch" });
	}
	endSampleFacetBatch() {
		if (this.#n == 0) throw Error("Unbalanced sample facet batch scope");
		this.#n--, this.#e.push({ type: "endSampleFacetBatch" });
	}
	pushView(e, t) {
		this.#t.push(e), this.#e.push({
			type: "pushView",
			view: e,
			coords: t
		});
	}
	popView(e) {
		if (this.#t.pop() !== e) throw Error("Unbalanced view scope");
		this.#e.push({
			type: "popView",
			view: e
		});
	}
	renderMark(e, t) {
		if (this.#t.length == 0) throw Error("A mark must be inside a view scope");
		this.#e.push({
			type: "renderMark",
			mark: e,
			options: i(t)
		});
	}
	complete() {
		if (this.#t.length > 0) throw Error("Unclosed view scope");
		if (this.#n > 0) throw Error("Unclosed sample facet batch scope");
		return new n(this.#e);
	}
};
function i(e) {
	let t = { ...e };
	return e.sampleFacetRenderingOptions && (t.sampleFacetRenderingOptions = { ...e.sampleFacetRenderingOptions }), e.placement && (t.placement = { ...e.placement }), e.clip && (t.clip = { ...e.clip }), t;
}
//#endregion
export { e as n, t };
