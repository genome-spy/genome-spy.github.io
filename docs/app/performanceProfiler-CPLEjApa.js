//#region ../core/src/debug/performanceProfiler.js
var e = Symbol.for("genome-spy.performance-profiler");
function t() {
	return globalThis[e];
}
function n(e, n) {
	let r = t();
	if (!r?.enabled) return n();
	let i = performance.now();
	try {
		return n();
	} finally {
		r.addPhase(e, performance.now() - i);
	}
}
function r(e, n) {
	t()?.addCount(e, n);
}
//#endregion
export { t as n, n as r, r as t };
