import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Icons } from '../models/icons';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  icons = Icons;

  constructor(private sanitizer: DomSanitizer) {
    Icons.initialize(this.sanitizer);
  }

  getSanitizedIcon(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }

  getSanitizedGradientIcon(icon: string): SafeHtml {
    // Add gradient classes to the <svg> tag
    const gradientIcon = icon.replace(
      '<svg ',
      `<svg class="bg-main-gradient bg-clip-text text-transparent" `
    );
    return this.sanitizer.bypassSecurityTrustHtml(gradientIcon);
  }
}
