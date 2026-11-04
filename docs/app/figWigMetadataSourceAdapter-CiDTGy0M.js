import { r as e } from "./url-DeOdSRrv.js";
import { FigWig as t } from "./dist-EgmwUdmE.js";
import { t as n } from "./tableMetadataSourceAdapter-CLdM_pCo.js";
//#region ../app/src/sampleView/metadata/adapters/figWigMetadataSourceAdapter.js
var r = class extends n {
	#e;
	constructor(t, n = {}) {
		super(t, {
			...n,
			sampleIdField: "name",
			excludedColumns: [
				"dtype",
				"group",
				"sample"
			]
		});
		let r = t.backend;
		this.#e = e(n.baseUrl, r.url);
	}
	async loadRows(e) {
		let n = new t({ url: this.#e });
		try {
			return (await n.getTracks({ signal: e })).map((e) => {
				let t = {
					...e.metadata,
					name: e.name
				};
				return delete t.dtype, delete t.group, t;
			});
		} finally {
			await n.close();
		}
	}
};
//#endregion
export { r as default };
