import { Component, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";
import { NgIf } from '@angular/common';
import { EventService } from '../../services/event-service/event.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, ThemeToggleComponent, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(
    public elementRef: ElementRef,
    readonly eventService: EventService
  ) { }

  openMobileMenu() {
    this.eventService.onMobileMenuClickedEvent.emit(true);
  }
}
