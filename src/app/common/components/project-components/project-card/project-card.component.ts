import { Component, Input, AfterViewInit, ElementRef, Renderer2, SimpleChanges } from '@angular/core';
import { Project } from '../../../models/models';
import { EventService } from '../../../services/event-service/event.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project!: Project;
  @Input() index!: number; // Pass index from project-list for delay calculation

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    readonly eventService: EventService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    this.animateCard(this.index);
  }

  animateCard(index: number) {
    const delay = index * 75;
    const cardElement = this.el.nativeElement;

    // Initial styles before animation
    this.renderer.setStyle(cardElement, 'opacity', '0');
    this.renderer.setStyle(cardElement, 'transform', 'translateY(1rem)');

    // Apply animation after delay
    setTimeout(() => {
      this.renderer.setStyle(cardElement, 'transition', 'all 0.5s ease-in-out');
      this.renderer.setStyle(cardElement, 'opacity', '1');
      this.renderer.setStyle(cardElement, 'transform', 'translateY(0)');
    }, delay);
  }
}
