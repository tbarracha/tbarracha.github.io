import { PositionInList, ProjectType, Technology } from "./enums";

export interface Project {
  id: string;
  name: string;
  description: string;
  images: string[];
  link: string;
  gitHubLink: string;
  projectTypes: ProjectType[];
  technologies: Technology[];
  positionInList: PositionInList;
}