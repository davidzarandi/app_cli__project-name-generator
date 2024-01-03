import { PROJECT_TYPE, ProjectType } from "../naming-definitions";
import { readLine } from "../read-line";

export const askForProjectType = async () => {
  [
    ...Object.entries(PROJECT_TYPE).map(([key, value]) => {
      return `- (${value}) ${key.replaceAll("_", " ").toLowerCase()}\n`;
    }),
    "What type of project name would you like generate? (e.g.: app): ",
  ].forEach((message) => {
    process.stdout.write(message);
  });

  const isProjectType = (answer: string): answer is ValueOf<ProjectType> => {
    return Object.values(PROJECT_TYPE).includes(answer as ValueOf<ProjectType>);
  };

  const answer = await readLine();

  if (!isProjectType(answer)) {
    throw new Error("Invalid project type!");
  }

  return answer;
};
