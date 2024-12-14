import { Component } from '@angular/core';
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";
import { Router, RouterLink } from '@angular/router';
import { ProjectService } from '../../../features/projects/service/project.service';
import { ProjectType } from '../../models/project';

@Component({
  selector: 'app-header',
  imports: [RouterLink, ThemeToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private projectService: ProjectService
  ) {}

  navigateToProjects(): void {
    this.router.navigate(['/']).then(() => {
      const projectSection = document.getElementById('projects');
      if (projectSection) {
        this.projectService.selectProjectType(ProjectType.Featured);
        projectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
}
