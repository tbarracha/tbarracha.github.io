import { Component, Input } from '@angular/core';
import { Project } from '../../models/models';
import { ProjectService } from '../../services/project-service/project.service';

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
    readonly projectService: ProjectService
  ) { 
    
  }
}
