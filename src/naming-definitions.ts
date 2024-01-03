export const PROJECT_TYPE = {
  APPLICATION_CLI: "app_cli",
  APPLICATION_WEB: "app_web",
  LIBRARY: "lib",
  WORKSHOP: "wksh",
  PROOF_OF_CONCEPT: "poc",
  TEMPLATE: "tmpl",
  LARGE_LANGUAGE_MODEL: "llm",
} as const;

export type ProjectType = typeof PROJECT_TYPE;
export type ProjectName = `${ProjectType[keyof ProjectType]}__${string}`;

type _tests = [
  Expect<
    Equal<
      ProjectName,
      | `app_cli__${string}`
      | `app_web__${string}`
      | `lib__${string}`
      | `poc__${string}`
      | `tmpl__${string}`
      | `wksh__${string}`
      | `llm__${string}`
    >
  >,
];
