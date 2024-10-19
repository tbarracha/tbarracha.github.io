import { Injectable } from '@angular/core';
import { PositionInList, ProjectType } from '../../models/enums';
import { EventService } from '../event-service/event.service';
import { Project } from '../../models/models';
import { projects } from '../../models/globals';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectList = projects;
  filteredProjects: Project[] = [];

  selectedProjectType: ProjectType = ProjectType.All;
  selectedProject!: Project;
  
  constructor(
    private readonly eventService: EventService
  ) {
    eventService.selectedProjectTypeEvent.subscribe((projectType: ProjectType) => {
      this.selectedProjectType = projectType;
    });

    eventService.selectedProjectEvent.subscribe((project: Project) => {
      this.selectedProject = project;
    });

    eventService.selectedProjectTypeEvent.subscribe(() => this.filterProjects());

    eventService.selectNextProjectEvent.subscribe((data) => {
      const currentIndex = this.filteredProjects.indexOf(data.project);
      const nextIndex = data.leftOrRight === 'left' ? currentIndex - 1 : currentIndex + 1;
      const nextProject = this.filteredProjects[nextIndex];

      if (nextProject) {
        this.eventService.selectedProjectEvent.emit(nextProject);
      }
    });

    this.filterProjects();

    setTimeout(() => {
      eventService.selectedProjectTypeEvent.emit(ProjectType.All);
    }, 100);
  }

  filterProjects() {
    this.projectList.forEach((project) => {project.positionInList = PositionInList.Middle;});
    this.filteredProjects = this.projectList.filter((project) => this.isProjectOfCurrentType(project));

    if (this.filteredProjects.length <= 0) {
      return
    }
    
    this.filteredProjects[0].positionInList = PositionInList.First;
    this.filteredProjects[this.filteredProjects.length - 1].positionInList = PositionInList.Last;
}

  isProjectOfCurrentType(project: Project): boolean {
    const selectedType = this.selectedProjectType;
  
    if (selectedType === ProjectType.All) {
      return true;
    }
  
    return project.projectTypes.includes(selectedType);
  }
}
