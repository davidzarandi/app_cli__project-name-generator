export const PREFIX = {
  APPLICATION: "app",
  LIBRARY: "lib",
  WORKSHOP: "wshp",
  PROOF_OF_CONCEPT: "poc",
  TEMPLATE: "tmpl",
  LARGE_LANGUAGE_MODEL: "llm",
} as const;

export const APPLICATION_TYPE = {
  WEB: "web",
  CLI: "cli",
} as const;

export type Prefix = typeof PREFIX;
export type ApplicationType = typeof APPLICATION_TYPE;

export type ProjectName =
  | `${Prefix[Exclude<keyof Prefix, "APPLICATION">]}__${string}`
  | `${Prefix["APPLICATION"]}_${ApplicationType[keyof ApplicationType]}__${string}`;

type _tests = [
  Expect<
    Equal<
      ProjectName,
      | `app_cli__${string}`
      | `app_web__${string}`
      | `lib__${string}`
      | `poc__${string}`
      | `tmpl__${string}`
      | `wshp__${string}`
      | `llm__${string}`
    >
  >,
];
