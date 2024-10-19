import { Component } from '@angular/core';
import { projects } from '../../models/constants';
import { ProjectService } from '../../services/project-service/project.service';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { Project } from '../../models/models';
import { ProjectType } from '../../models/enums';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
  projectList = projects;

  constructor(
    readonly projectService: ProjectService,
  ) { }

  isProjectOfCurrentType(project: Project): boolean {
    const selectedType = this.projectService.selectedProjectType;
  
    if (selectedType === ProjectType.All) {
      return true;
    }
  
    return project.projectTypes.includes(selectedType);
  }
}
