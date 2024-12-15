import { NgIf, NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IconService } from '../../core/services/icon.service';
import { EventService } from '../../core/services/event.service';

@Component({
  selector: 'app-contact-card',
  imports: [NgIf, NgStyle],
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {
  public showContactCard = false;

  public rotateX = 0; // Rotation on X-axis
  public rotateY = 0; // Rotation on Y-axis

  iconService: IconService = inject(IconService);
  eventService: EventService = inject(EventService);

  constructor() {
    this.eventService.onContactCardToggle.subscribe((show: boolean) => {
      this.showContactCard = show;
    });
  }

  onMouseMove(event: MouseEvent): void {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate rotation based on mouse position
    this.rotateX = (centerY - event.clientY) / 25;
    this.rotateY = (event.clientX - centerX) / 25;
  }

  closeCard(): void {
    // Optionally reset rotation when closed
    this.rotateX = 0;
    this.rotateY = 0;
    this.showContactCard = false;
  }
}
