export type Locus = { chrom: string; pos?: number };
export type Duration = { duration?: number };
export type Loci = { loci: Locus[] };
export type StringLocus = { locus: string };
export type ScriptEntry = Duration & (Loci[] | StringLocus | {});
