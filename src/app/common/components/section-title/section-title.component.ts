import { Component, ElementRef, Input, ViewChild } from '@angular/core';

export interface SectionTitleOptions {
  title: string;
  subTitle: string;
}

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss'
})
export class SectionTitleComponent {
  @Input() sectionTitleOptions! : SectionTitleOptions;
  @ViewChild('title', { static: false }) sectionTitle!: ElementRef;
  @ViewChild('subTitle', { static: false }) sectionSubTitle!: ElementRef;

  constructor(
    public elementRef: ElementRef
  ) {
    
  }
}
