import { Component, inject } from '@angular/core';
import { IconService } from '../../core/services/icon.service';
import { EventService } from '../../core/services/event.service';

@Component({
  selector: 'app-contact-card',
  imports: [],
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {
  public showContactCard = false;

  iconService: IconService = inject(IconService);
  eventService: EventService = inject(EventService);

  constructor() {
    this.eventService.onContactCardToggle.subscribe((show: boolean) => {
      this.showContactCard = show;
    });
  }

  closeCard(): void {
    this.showContactCard = false;
  }
}
