import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gradient-title',
  imports: [],
  templateUrl: './gradient-title.component.html',
  styleUrl: './gradient-title.component.scss'
})
export class GradientTitleComponent {
  @Input() title: string = 'Hello World';
}
