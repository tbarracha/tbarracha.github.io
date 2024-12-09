import { Component, inject } from '@angular/core';
import { ProjectDisplayComponent } from "../project-display/project-display.component";
import { FeaturedProjects, Projects } from '../../../../core/models/projects';
import { Project } from '../../../../core/models/project';
import { ProjectService } from '../../service/project.service';

@Component({
  selector: 'app-project-list',
  imports: [ProjectDisplayComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
  projectService: ProjectService = inject(ProjectService);
  projects: Project[] = FeaturedProjects;

  ngAfterViewInit() {
    this.projectService.onProjectTypeSelected.subscribe((type: string) => {
      this.projects = this.projectService.getProjectsByType(type);
    });
  }

  ngOnDestory() {
    this.projectService.onProjectTypeSelected.unsubscribe();
  }
}
