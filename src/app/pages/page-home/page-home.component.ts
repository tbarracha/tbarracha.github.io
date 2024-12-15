import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../core/components/header/header.component";
import { Technologies, Technology } from '../../core/models/technologies';
import { TechDisplayComponent } from "../../features/technologies/tech-display/tech-display.component";
import { CommonModule } from '@angular/common';
import { ProjectTypeSelectorComponent } from "../../features/projects/components/project-type-selector/project-type-selector.component";
import { Project } from '../../core/models/project';
import { Projects } from '../../core/models/projects';
import { ProjectListComponent } from "../../features/projects/components/project-list/project-list.component";
import { IconService } from '../../core/services/icon.service';

@Component({
  selector: 'app-page-home',
  imports: [CommonModule, HeaderComponent, TechDisplayComponent, ProjectTypeSelectorComponent, ProjectListComponent],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.scss'
})
export class PageHomeComponent {
  public title: string = 'Home Page';
  public description: string = 'This is the home page of the application';
  public technologies: Technology[] = [
    Technologies.Angular,
    Technologies.DotNetCore,
    Technologies.Python
  ];

  iconService: IconService = inject(IconService);
}
