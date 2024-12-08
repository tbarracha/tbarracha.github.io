import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Technology } from '../models/technologies';

@Component({
  selector: 'app-tech-display',
  templateUrl: './tech-display.component.html',
  styleUrls: ['./tech-display.component.scss'],
})
export class TechDisplayComponent {
  @Input() technology!: Technology;
  @Input() size: 'small' | 'medium' | 'large' = 'medium'; // Default size

  constructor(private sanitizer: DomSanitizer) {}

  getSanitizedIcon(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.technology.icon || '');
  }

  getIconSizeClasses(): string {
    switch (this.size) {
      case 'small':
        return 'h-8 w-8';
      case 'large':
        return 'h-16 w-16';
      case 'medium':
      default:
        return 'h-12 w-12';
    }
  }

  getHeaderTextSizeClasses(): string {
    switch (this.size) {
      case 'small':
        return 'text-sm';
      case 'large':
        return 'text-2xl';
      case 'medium':
      default:
        return 'text-lg';
    }
  }

  getParagraphTextSizeClasses(): string {
    switch (this.size) {
      case 'small':
        return 'text-xs';
      case 'large':
        return 'text-lg';
      case 'medium':
      default:
        return 'text-sm';
    }
  }
}
