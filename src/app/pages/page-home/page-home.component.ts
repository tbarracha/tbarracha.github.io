import { Component } from '@angular/core';
import { HeaderComponent } from "../../core/components/header/header.component";
import { Technologies, Technology } from '../../features/technologies/models/technologies';
import { TechDisplayComponent } from "../../features/technologies/tech-display/tech-display.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-home',
  imports: [CommonModule, HeaderComponent, TechDisplayComponent],
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
  ]
}
