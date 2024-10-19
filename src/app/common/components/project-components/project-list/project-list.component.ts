import { Component, QueryList, ViewChildren } from '@angular/core';
import { ProjectService } from '../../../services/project-service/project.service';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { NgStyle, NgClass } from '@angular/common';
import { EventService } from '../../../services/event-service/event.service';
import { Project } from '../../../models/models';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectCardComponent, NgStyle, NgClass],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent {
  @ViewChildren(ProjectCardComponent) projectCards!: QueryList<ProjectCardComponent>;
  projectList: Project[] = [];

  constructor(
    readonly eventService: EventService,
    readonly projectService: ProjectService
  ) {
    eventService.selectedProjectTypeEvent.subscribe(() => {this.selectedTypeChanged()});
  }

  private selectedTypeChanged() {
    this.projectList = [];
    
    setTimeout(() => {
      this.projectList = this.projectService.filteredProjects;
    }, 100);
    
    setTimeout(() => {
      this.animateAllCards();
    }, 120);

    console.log("Selected project type", this.projectService.selectedProjectType);
  }

  animateAllCards() {
    this.projectCards.forEach((card, index) => {
      card.setAnimationDelay(index);
      card.playAnimation();
    });
  }
}
