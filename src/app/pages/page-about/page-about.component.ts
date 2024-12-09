import { Component } from '@angular/core';
import { HeaderComponent } from "../../core/components/header/header.component";
import { TechDisplayComponent } from "../../features/technologies/tech-display/tech-display.component";
import { CommonModule } from '@angular/common';
import { Technology, Technologies } from '../../features/technologies/models/technologies';

@Component({
  selector: 'app-page-about',
  imports: [CommonModule, HeaderComponent, TechDisplayComponent],
  templateUrl: './page-about.component.html',
  styleUrl: './page-about.component.scss'
})
export class PageAboutComponent {
  
  public technologiesMain: Technology[] = [
    Technologies.Angular,
    Technologies.Typescript,
    Technologies.DotNetCore,
    Technologies.Python
  ];

  public technologiesSecondary: Technology[] = [
    Technologies.TailwindCss,
    Technologies.PostgreSQL,
    Technologies.Unity,
    Technologies.Docker
  ];
}
