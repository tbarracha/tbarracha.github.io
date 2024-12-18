import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseProjectComponent } from '../baseProjectComponent';
import { ProjectService } from '../../service/project.service';
import { GradientButtonComponent } from "../../../../core/components/gradient-button/gradient-button.component";
import { ProjectType } from '../../../../core/models/project';

@Component({
  selector: 'app-project-type-selector',
  imports: [CommonModule, GradientButtonComponent],
  templateUrl: './project-type-selector.component.html',
  styleUrl: './project-type-selector.component.scss'
})
export class ProjectTypeSelectorComponent {
  projectService: ProjectService = inject(ProjectService);
  selectedProjectType: string = this.projectService.selectedProjectType;

  projectTypes : string[] = [
    ProjectType.Featured,
    ProjectType.All,
    ProjectType.Web,
    ProjectType.App,
    ProjectType.Mobile,
    ProjectType.Game,
    ProjectType.Other,
  ];

  constructor() {
    this.projectService.onProjectTypeSelected.subscribe((projectType: string) => {
      this.onClick(projectType);
    });
  }

  ngAfterViewInit() {
    console.log('Project types:', this.projectTypes);
  }

  onClick(projectType: string) {
    if (projectType === this.selectedProjectType) {
      return;
    }

    this.selectedProjectType = projectType;
    this.projectService.selectProjectType(projectType);
  }
}
