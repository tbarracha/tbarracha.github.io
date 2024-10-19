import { Component, Input } from '@angular/core';
import { Project } from '../../../models/models';
import { ProjectService } from '../../../services/project-service/project.service';
import { EventService } from '../../../services/event-service/event.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project!: Project;

  constructor(
    readonly eventService: EventService,
    readonly projectService: ProjectService
  ) { 
    
  }

  
}
