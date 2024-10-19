import { Injectable } from '@angular/core';
import { EventService } from '../event-service/event.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor(private eventService: EventService) {
    this.updateTheme(this.isDarkMode);
  }

  get isDarkMode(): boolean {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme !== null && savedTheme === 'true';
  }

  toggleTheme(): void {
    const isDark = !this.isDarkMode;
    localStorage.setItem('darkMode', isDark.toString());
    this.updateTheme(isDark);
    
    this.eventService.themeChangedEvent.emit();
  }

  private updateTheme(isDark: boolean): void {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
