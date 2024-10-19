import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../common/components/section-title/section-title.component';
import { ProjectTypeSelectorComponent } from "../../common/components/project-type-selector/project-type-selector.component";
import { ProjectListComponent } from "../../common/components/project-list/project-list.component";

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [SectionTitleComponent, ProjectTypeSelectorComponent, ProjectListComponent],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.scss'
})
export class PageHomeComponent {

}
