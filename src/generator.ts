import { ProjectName, ProjectType } from "./naming-definitions";

type GenerateNameFunctionParam = {
  projectType: ValueOf<ProjectType>;
  name: string;
};

export function generateProjectName(
  params: GenerateNameFunctionParam,
): ProjectName {
  return `${params.projectType}__${params.name.toLowerCase()}`;
}
