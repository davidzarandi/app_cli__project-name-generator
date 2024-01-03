export const PROJECT_TYPE = {
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

export type ProjectType = typeof PROJECT_TYPE;
export type ApplicationType = typeof APPLICATION_TYPE;

export type ProjectName =
  | `${ProjectType[Exclude<keyof ProjectType, "APPLICATION">]}__${string}`
  | `${ProjectType["APPLICATION"]}_${ApplicationType[keyof ApplicationType]}__${string}`;

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
