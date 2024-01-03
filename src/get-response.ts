import { readLine } from "./read-line";

type Prompt = {
  messages: Array<string>;
  validator: (answer: string) => boolean;
};

export async function getResponse<T extends string>(prompt: Prompt) {
  prompt.messages.forEach((message) => process.stdout.write(message));
  const answer = await readLine();

  if (!prompt.validator(answer)) {
    return getResponse(prompt);
  }

  return answer as T;
}
