import { Injectable } from '@angular/core';
import { ProjectType } from '../../models/enums';
import { EventService } from '../event-service/event.service';
import { Project } from '../../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

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
  }


}
