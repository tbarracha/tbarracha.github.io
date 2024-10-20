import { Component } from '@angular/core';
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";
import { EventService } from '../../services/event-service/event.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [ThemeToggleComponent, NgIf],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss'
})
export class MobileMenuComponent {
  isMobileMenuOpen = false;

  constructor(
    readonly eventService: EventService
  ) {
    eventService.onMobileMenuClickedEvent.subscribe((isOpen: boolean) => {
      this.isMobileMenuOpen = isOpen;
      console.log("Mobile menu toggled:", isOpen);
    });
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.eventService.onMobileMenuClickedEvent.emit(false);
  }
}
