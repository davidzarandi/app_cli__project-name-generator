import * as assert from "node:assert";
import { describe, it } from "node:test";
import { generateProjectName } from "./generator";

describe("Name Generator", () => {
  it("should generate valid web application project name", () => {
    const webAppName = generateProjectName({
      projectType: "app_web",
      name: "my-web-application",
    });
    assert.strictEqual(webAppName, "app_web__my-web-application");
  });

  it("should generate valid cli application project name", () => {
    const cliAppName = generateProjectName({
      projectType: "app_cli",
      name: "my-cli-application",
    });
    assert.strictEqual(cliAppName, "app_cli__my-cli-application");
  });

  it("should generate valid library project name", () => {
    const libraryName = generateProjectName({
      projectType: "lib",
      name: "my-library",
    });
    assert.strictEqual(libraryName, "lib__my-library");
  });

  it("should generate valid workshop project name", () => {
    const workshopName = generateProjectName({
      projectType: "wksh",
      name: "my-workshop",
    });
    assert.strictEqual(workshopName, "wshp__my-workshop");
  });

  it("should generate valid proof of concept project name", () => {
    const proofOfConceptName = generateProjectName({
      projectType: "poc",
      name: "my-proof-of-concept",
    });
    assert.strictEqual(proofOfConceptName, "poc__my-proof-of-concept");
  });

  it("should generate valid large language model project name", () => {
    const proofOfConceptName = generateProjectName({
      projectType: "llm",
      name: "my-large-language-model",
    });
    assert.strictEqual(proofOfConceptName, "llm__my-large-language-model");
  });
});
