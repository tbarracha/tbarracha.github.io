import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  AfterViewInit,
  OnChanges,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-gradient-button',
  templateUrl: './gradient-button.component.html',
  styleUrls: ['./gradient-button.component.scss'],
})
export class GradientButtonComponent implements AfterViewInit, OnChanges {
  @Input() text!: string;
  @Input() isSelected: boolean = false;

  @ViewChild('shadowDiv', { static: false }) shadowDiv!: ElementRef<HTMLDivElement>;
  @ViewChild('shadowDivContent', { static: false }) shadowDivContent!: ElementRef<HTMLDivElement>;

  calculatedWidth: number = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    // Delay calculation to the next cycle to avoid ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => this.calculateWidth());
  }

  ngOnChanges(): void {
    this.calculateWidth();
  }

  calculateWidth(): void {
    if (this.shadowDiv && this.shadowDivContent) {
      const shadowDivElement = this.shadowDiv.nativeElement;
      const shadowDivContentElement = this.shadowDivContent.nativeElement;

      const computedStyle = getComputedStyle(shadowDivContentElement);

      // Calculate padding of the child (shadowDivContent)
      const paddingLeft = parseFloat(computedStyle.paddingLeft || '0');
      const paddingRight = parseFloat(computedStyle.paddingRight || '0');
      const totalPadding = (paddingLeft + paddingRight) * 0.25;

      // Set the calculated width by considering the content width plus padding
      this.calculatedWidth = shadowDivElement.offsetWidth - totalPadding;

      // Mark for check to update the view
      this.cdr.detectChanges();
    }
  }

  onClick(): void {
    console.log('Button clicked:', this.text);
  }
}
