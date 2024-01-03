import { askForProjectType } from "./questions/project-type";
import { PROJECT_TYPE } from "./naming-definitions";
import { askForApplicationType } from "./questions/application-type";
import { askForProjectName } from "./questions/project-name";

(async () => {
  let generatedName = "";

  generatedName += await askForProjectType();
  if (generatedName === PROJECT_TYPE.APPLICATION) {
    generatedName += `_${await askForApplicationType()}`;
  }
  generatedName += `__${await askForProjectName()}`;

  process.stdout.write(`\nGenerated name: ${generatedName}`);
  process.exit();
})().catch((error: Error) => {
  process.stderr.write(error.message);
  process.exit(1);
});
