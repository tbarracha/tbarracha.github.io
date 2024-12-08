import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gradient-button',
  imports: [],
  templateUrl: './gradient-button.component.html',
  styleUrl: './gradient-button.component.scss'
})
export class GradientButtonComponent {
  @Input() text: string = '';
  @Input() isSelected: boolean = false;

  onClick() {
    console.log('Button clicked:', this.text);
  }
}
