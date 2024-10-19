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

  ngOnInit() {
    console.log("Project card initialized for project:", this.project.name);
  }

  setAnimationDelay(index: number) {    
    this.delay = (index + 1) * 0.15;
  }

  onAnimationDone() {
    console.log("Animation completed for project:", this.project.name);
  }

  playAnimation() {
    this.isVisible = true;
    this.cd.detectChanges();
  }
}
