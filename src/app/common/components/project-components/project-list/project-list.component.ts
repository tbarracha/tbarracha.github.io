import { Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { ProjectService } from '../../../services/project-service/project.service';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { NgStyle, NgClass } from '@angular/common';
import { EventService } from '../../../services/event-service/event.service';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectCardComponent, NgStyle, NgClass],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {

  @ViewChildren(ProjectCardComponent, { read: ElementRef }) projectCards!: QueryList<ElementRef>;

  constructor(
    readonly eventService: EventService,
    readonly projectService: ProjectService,
    private renderer: Renderer2
  ) {
  }

  ngAfterViewInit() {
    this.projectCards.forEach((card, index) => {
      // Apply a delay for each project card
      const delay = index * 75;
      const cardElement = card.nativeElement;

      console.log(cardElement);

      // Set the initial opacity and transform for animation
      this.renderer.setStyle(cardElement, 'opacity', '0');
      this.renderer.setStyle(cardElement, 'transform', 'translateY(1rem)');

      // Add transition and animation properties with delay
      setTimeout(() => {
        this.renderer.setStyle(cardElement, 'transition', 'all 0.5s ease-in-out');
        this.renderer.setStyle(cardElement, 'opacity', '1');
        this.renderer.setStyle(cardElement, 'transform', 'translateY(0)');
      }, delay);
    });
  }
  
  getDelayClass(index: number): string {
    const delay = index * 75;
    return `delay-${delay}`;
  }

  getProjectCardClasses(index: number): string {
    const delay = `delay-${index * 75}`;
    return `w-full aspect-[4/3] opacity-0 transform translate-y-4 transition-all ease-in-out duration-500 ${delay}`;
  }
}
