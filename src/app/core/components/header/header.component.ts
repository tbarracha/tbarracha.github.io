import { Component } from '@angular/core';
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, ThemeToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
