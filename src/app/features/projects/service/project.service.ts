import { EventEmitter, Injectable } from '@angular/core';
import { ProjectType, Project } from '../../../core/models/project';
import { FeaturedProjects, Projects } from '../../../core/models/projects';
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  selectedProjectType: string = ProjectType.Featured;
  selectedProject?: Project;

  projectList: Project[] = [];
  selectedProjectList: Project[] = [];

  private projectImagesCache: Map<string, string[]> = new Map();

  onProjectTypeSelected: EventEmitter<string> = new EventEmitter<string>();
  onProjectSelected: EventEmitter<Project> = new EventEmitter<Project>();
  onProjectClose: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
    this.initializeProjectLists();
    this.cacheProjectImages();
  }

  private initializeProjectLists() {
    this.projectList = this.getAllProjects();
    this.selectProjectType(ProjectType.Featured);
  }

  selectProjectType(projectType: string) {
    this.selectedProjectType = projectType;
    this.updateSelectedProjects();
    this.onProjectTypeSelected.emit(projectType);
  }

  updateSelectedProjects() {
    if (this.selectedProjectType === ProjectType.All) {
      // Include all projects
      this.selectedProjectList = [...this.projectList];
    } else if (this.selectedProjectType === ProjectType.Featured) {
      // Use FeaturedProjects directly
      this.selectedProjectList = [...FeaturedProjects];
    } else {
      // Filter projects by type
      this.selectedProjectList = this.projectList.filter(
        (project: Project) =>
          Array.isArray(project.types) &&
          project.types.includes(this.selectedProjectType)
      );
    }

    if (this.selectedProjectList.length === 0) {
      console.warn(`No projects found for type: ${this.selectedProjectType}`);
    }
  }

  selectProject(project: Project) {
    this.selectedProject = project;
    this.onProjectSelected.emit(project);
  }

  getAllProjects(): Project[] {
    const allProjects = Projects.getAll<Project>();
    const featuredProjectIds = FeaturedProjects.map((project) => project.name);

    return [
      ...FeaturedProjects,
      ...allProjects.filter((project) => !featuredProjectIds.includes(project.name)),
    ];
  }

  private async fetchProjectImages(project: Project): Promise<string[]> {
    if (!project.imgFolder) {
      return [];
    }

    const folderPath = project.imgFolder;
    try {
      const response = await fetch(folderPath);
      if (!response.ok) {
        console.error(`Failed to fetch image folder: ${folderPath}`);
        return [];
      }

      const text = await response.text();
      const parser = new DOMParser();
      const htmlDocument = parser.parseFromString(text, 'text/html');
      const links = Array.from(htmlDocument.querySelectorAll('a'))
        .map((link) => link.getAttribute('href'))
        .filter((href) => href && /\.(png|jpe?g|webp|gif|svg)$/i.test(href!))
        .map((file) => `${folderPath}/${file}`);

      return links;
    } catch (error) {
      console.error(`Error fetching images from ${folderPath}:`, error);
      return [];
    }
  }

  private async cacheProjectImages() {
    for (const project of this.projectList) {
      const images = await this.fetchProjectImages(project);
      this.projectImagesCache.set(project.name, images);
    }
  }

  getCachedProjectImages(project: Project): string[] {
    return this.projectImagesCache.get(project.name) || [];
  }

  getNextProject(currentProject: Project): Project | undefined {
    if (!currentProject || this.selectedProjectList.length === 0) {
      console.warn("No current project or selected project list is empty.");
      return undefined;
    }

    const currentIndex = this.selectedProjectList.findIndex(
      (project) => project.name === currentProject.name
    );

    if (currentIndex === -1) {
      console.error(`Project "${currentProject.name}" not found in the selected list.`);
      return undefined;
    }

    return this.selectedProjectList[(currentIndex + 1) % this.selectedProjectList.length];
  }

  getPreviousProject(currentProject: Project): Project | undefined {
    if (!currentProject || this.selectedProjectList.length === 0) {
      console.warn("No current project or selected project list is empty.");
      return undefined;
    }

    const currentIndex = this.selectedProjectList.findIndex(
      (project) => project.name === currentProject.name
    );

    if (currentIndex === -1) {
      console.error(`Project "${currentProject.name}" not found in the selected list.`);
      return undefined;
    }

    return this.selectedProjectList[
      (currentIndex - 1 + this.selectedProjectList.length) % this.selectedProjectList.length
    ];
  }
}
