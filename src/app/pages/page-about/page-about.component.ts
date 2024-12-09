import { Component } from '@angular/core';
import { HeaderComponent } from "../../core/components/header/header.component";
import { TechDisplayComponent } from "../../features/technologies/tech-display/tech-display.component";
import { CommonModule } from '@angular/common';
import { Technology, Technologies } from '../../core/models/technologies';
import { GradientTitleComponent } from "../../core/components/gradient-title/gradient-title.component";
import { Experience, ExperiencesEducation, ExperiencesWork } from '../../core/models/experiences';

@Component({
  selector: 'app-page-about',
  imports: [CommonModule, HeaderComponent, TechDisplayComponent, GradientTitleComponent],
  templateUrl: './page-about.component.html',
  styleUrl: './page-about.component.scss'
})
export class PageAboutComponent {
  
  public techFront: Technology[] = [
    Technologies.Angular,
    Technologies.Typescript,
    Technologies.TailwindCss
  ];

  public techBack: Technology[] = [
    Technologies.DotNetCore,
    Technologies.Python,
    Technologies.PostgreSQL
  ];
  
  public techMisc: Technology[] = [
    Technologies.Unity,
    Technologies.Docker,
    Technologies.Git
  ];

  experiencesWork: Experience[] = ExperiencesWork.getAll();
  experiencesEducation: Experience[] = ExperiencesEducation.getAll();
}
