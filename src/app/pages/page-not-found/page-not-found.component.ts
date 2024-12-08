import { Component } from '@angular/core';
import { HeaderComponent } from "../../core/components/header/header.component";
import { GradientButtonComponent } from "../../core/components/gradient-button/gradient-button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  imports: [HeaderComponent, GradientButtonComponent],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {
  constructor(private router: Router) {}

  goHome(): void {
    this.router.navigate(['/']);
  }
}
