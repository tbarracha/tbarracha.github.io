import { ProjectType, Technology } from "./enums";

export interface TechnologyObj {
    id: Technology;
    name: string;
    icon: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
  gitHubLink: string;
  projectTypes: ProjectType[];
  technologies: Technology[];
}