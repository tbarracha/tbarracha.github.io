import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Project } from '../../../models/models';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { EventService } from '../../../services/event-service/event.service';
import { VisibleState } from '../../../models/enums';

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  animations: [
    trigger('cardAnimation', [
      state(VisibleState.Hidden, style({
        opacity: 0,
        transform: 'translateY(20px)'  // Start from below and hidden
      })),
      state(VisibleState.Showing, style({
        opacity: 1,
        transform: 'translateY(0)'  // Fully visible and in place
      })),
      transition(`${VisibleState.Hidden} => ${VisibleState.Showing}`, [
        animate('{{delay}}s ease-out')  // Use delay parameter for stagger effect
      ])
    ])
  ]
})
export class ProjectCardComponent {
  @Input() project!: Project;
  @Input() index!: number;

  isVisible = false;
  delay = 0;

  constructor(
    readonly eventService: EventService,
    private cd: ChangeDetectorRef
  ) { 
  }

  setAnimationDelay(index: number) {
    const baseDelay = (index + 1) * 0.15;
    this.delay = Math.min(baseDelay, 1.5);
  }

  playAnimation() {
    this.isVisible = true;
    this.cd.detectChanges();
  }

  getTypesAndTechnologies(): string[] {
    const types = Array.isArray(this.project.projectTypes) ? this.project.projectTypes.map(type => type.toString()) : [];
    const technologies = Array.isArray(this.project.technologies) ? this.project.technologies.map(tech => tech.toString()) : [];
    
    return [...types, ...technologies];  // Returns an array of strings
  }
}
