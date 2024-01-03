import { APPLICATION_TYPE, ApplicationType } from "../naming-definitions";
import { readLine } from "../read-line";

export const askForApplicationType = async () => {
  [
    ...Object.entries(APPLICATION_TYPE).map(([key, value]) => {
      return `- (${value}) ${key.replaceAll("_", " ").toLowerCase()}\n`;
    }),
    "What type of application would you like generate? (e.g.: cli): ",
  ].forEach((message) => {
    process.stdout.write(message);
  });

  const isApplicationType = (
    answer: string,
  ): answer is ValueOf<ApplicationType> => {
    return Object.values(APPLICATION_TYPE).includes(
      answer as ValueOf<ApplicationType>,
    );
  };

  const answer = await readLine();

  if (!isApplicationType(answer)) {
    throw new Error("Invalid application type!");
  }

  return answer;
};
