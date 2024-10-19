import { Component } from '@angular/core';
import { ProjectService } from '../../../services/project-service/project.service';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { NgStyle } from '@angular/common';
import { EventService } from '../../../services/event-service/event.service';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectCardComponent, NgStyle],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {

  constructor(
    readonly eventService: EventService,
    readonly projectService: ProjectService,
  ) {
    
  }
}
