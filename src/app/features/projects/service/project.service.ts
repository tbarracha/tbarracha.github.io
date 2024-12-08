import { Injectable } from '@angular/core';
import { Project, ProjectCategory, ProjectType } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  selectedProjectType: string = ProjectType.Featured;
  selectedProjectCategory: string = ProjectCategory.Work;

  selectedProject: Project | null = null;

  constructor() { }

  selectProjectType(projectType: string) {
    this.selectedProjectType = projectType;
  }

  selectProject(project: Project) {
    this.selectedProject = project;
  }
}
