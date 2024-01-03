import { readLine } from "../read-line";

export const askForProjectName = async () => {
  [
    "Project name can only contain ASCII letters, digits, and the dash character\n",
    "What should the project name be? (e.g.: project-name): ",
  ].forEach((message) => {
    process.stdout.write(message);
  });

  const isProjectName = (answer: string): answer is string => {
    return /^[a-zA-Z0-9-]+$/.test(answer);
  };

  const answer = await readLine();

  if (!isProjectName(answer)) {
    throw new Error("Invalid project name!");
  }

  return answer;
};
