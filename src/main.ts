import { PROJECT_TYPE, ProjectType } from "./naming-definitions";
import { generateProjectName } from "./generator";
import { getResponse } from "./get-response";

(async () => {
  const projectType = await getResponse<ValueOf<ProjectType>>({
    messages: [
      ...Object.entries(PROJECT_TYPE).map(([key, value]) => {
        return `- (${value}) ${key.replaceAll("_", " ").toLowerCase()}\n`;
      }),
      `What type of project name would you like generate? (e.g.: ${PROJECT_TYPE.APPLICATION_CLI}): `,
    ],
    validator: (answer) =>
      Object.values(PROJECT_TYPE).includes(answer as ValueOf<ProjectType>),
  });

  const name = await getResponse({
    messages: [
      "Project name can only contain ASCII letters, digits, and the dash character\n",
      "What should the project name be? (e.g.: project-name): ",
    ],
    validator: (answer) => /^[a-zA-Z0-9-]+$/.test(answer),
  });

  process.stdout.write("Generated project name: ");
  process.stdout.write(generateProjectName({ projectType, name }));
  process.exit();
})().catch((reason: unknown) => {
  process.stderr.write("" + reason);
  process.exit(1);
});
