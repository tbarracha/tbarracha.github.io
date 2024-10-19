import { Component, ElementRef } from '@angular/core';
import { ProjectType } from '../../models/enums';
import { EventService } from '../../services/event-service/event.service';
import { ProjectService } from '../../services/project-service/project.service';

@Component({
  selector: 'app-project-type-selector',
  standalone: true,
  imports: [],
  templateUrl: './project-type-selector.component.html',
  styleUrl: './project-type-selector.component.scss'
})
export class ProjectTypeSelectorComponent {
  projectTypes: ProjectType[] = Object.values(ProjectType);

  constructor(
    private readonly eventService: EventService,
    readonly projectService: ProjectService,
    public elementRef: ElementRef
  ) { }

  selectProjectType(projectType: ProjectType) {
    this.eventService.selectedProjectTypeEvent.emit(projectType);
    console.log("Changed project type to: " + projectType);
  }
}
