import { Component, inject } from '@angular/core';
import { ProjectDisplayComponent } from "../project-display/project-display.component";
import { FeaturedProjects, Projects } from '../../../../core/models/projects';
import { Project } from '../../../../core/models/project';
import { ProjectService } from '../../service/project.service';
import { ProjectModalComponent } from "../project-modal/project-modal.component";

@Component({
  selector: 'app-project-list',
  imports: [ProjectDisplayComponent, ProjectModalComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
  projectService: ProjectService = inject(ProjectService);
  projects: Project[] = FeaturedProjects;

  selectedProject?: Project;

  ngAfterViewInit() {
    this.projectService.onProjectTypeSelected.subscribe((type: string) => {
      this.projects = this.projectService.selectedProjectList;
    });

    this.projectService.onProjectSelected.subscribe((project: Project) => {
      this.selectProject(project);
    });

    this.projectService.onProjectClose.subscribe(() => {
      this.closeModal();
    });
  }

  ngOnDestory() {
    this.projectService.onProjectTypeSelected.unsubscribe();
  }

  selectProject(project: Project): void {
    this.selectedProject = project;
  }
  
  closeModal(): void {
    this.selectedProject = undefined;
  }
}
