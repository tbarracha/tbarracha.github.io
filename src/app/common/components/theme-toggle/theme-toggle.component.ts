import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme-service/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss'
})
export class ThemeToggleComponent {
  constructor(readonly themeService: ThemeService) {

  }
}
