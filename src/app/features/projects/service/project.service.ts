import { EventEmitter, Injectable } from '@angular/core';
import { ProjectType, Project } from '../../../core/models/project';
import { FeaturedProjects, Projects } from '../../../core/models/projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  selectedProjectType: string = ProjectType.Featured;
  selectedProjectCategory: string = 'work';

  selectedProject: Project | null = null;
  projects: Project[] = FeaturedProjects;

  private projectImagesCache: Map<string, string[]> = new Map();

  onProjectTypeSelected: EventEmitter<string> = new EventEmitter<string>();
  onProjectSelected: EventEmitter<Project> = new EventEmitter<Project>();

  constructor() {
    // Initialize the cache
    this.cacheProjectImages();
  }

  selectProjectType(projectType: string) {
    this.selectedProjectType = projectType;
    this.projects = this.getProjectsByType(projectType);
    this.onProjectTypeSelected.emit(projectType);
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

  getProjectsByType(projectType: string): Project[] {
    if (projectType === ProjectType.Featured) {
      return FeaturedProjects;
    }

    const projects: Project[] = this.getAllProjects();

    if (projectType === ProjectType.All) {
      return projects;
    }

    return projects.filter(
      (project: Project) =>
        Array.isArray(project.types) && project.types.includes(projectType)
    );
  }

  private async fetchProjectImages(project: Project): Promise<string[]> {
    if (!project.imgFolder) {
      return [];
    }

    const folderPath = project.imgFolder;
    try {
      const response = await fetch(folderPath);
      console.log(`Fetching images from folder: ${folderPath}`);
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
      
      console.log(`Fetched images for ${project.name}:`, links);
      return links;
    } catch (error) {
      console.error(`Error fetching images from ${folderPath}:`, error);
      return [];
    }
  }

  private async cacheProjectImages() {
    const allProjects = Projects.getAll<Project>();
    for (const project of allProjects) {
      const images = await this.fetchProjectImages(project);
      this.projectImagesCache.set(project.name, images);
    }
    console.log('Project images cache:', this.projectImagesCache);
  }

  getCachedProjectImages(project: Project): string[] {
    return this.projectImagesCache.get(project.name) || [];
  }
}
