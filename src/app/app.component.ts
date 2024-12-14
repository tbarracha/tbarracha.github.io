import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconService } from './core/services/icon.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tiago Barracha';

  initService: IconService = Inject(IconService);
}
