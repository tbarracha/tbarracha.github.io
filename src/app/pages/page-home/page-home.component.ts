import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { SectionTitleComponent } from '../../common/components/section-title/section-title.component';
import { ProjectTypeSelectorComponent } from "../../common/components/project-components/project-type-selector/project-type-selector.component";
import { NgClass, NgStyle } from '@angular/common';
import { ProjectListComponent } from '../../common/components/project-components/project-list/project-list.component';
import { ProjectModalComponent } from '../../common/components/project-components/project-modal/project-modal.component';
import { HeaderComponent } from '../../common/components/header/header.component';

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [SectionTitleComponent, ProjectTypeSelectorComponent, ProjectListComponent, NgClass, NgStyle, ProjectModalComponent, HeaderComponent],
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements AfterViewInit {
  @ViewChild('header', { static: false }) header!: HeaderComponent;
  @ViewChild('sectionTitle', { static: false }) sectionTitle!: SectionTitleComponent;
  @ViewChild('innerStickyProjectTypeSelector', { static: false }) innerStickyProjectTypeSelector!: ProjectTypeSelectorComponent;

  isSticky: boolean = false;
  initialPosition: number = 0;
  stickyHeaderHeight: number = 0;
  stickyThreshold: number = 10;
  isTitleVisible: boolean = true;
  headerOpacity: number = 1;

  constructor(public elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.observeSectionTitle();  // Start observing section title visibility

    if (this.innerStickyProjectTypeSelector?.elementRef?.nativeElement === undefined) {
      console.log("Native element not found");
      return;
    }

    // Get the initial position of the element from the top of the document
    this.initialPosition = this.innerStickyProjectTypeSelector.elementRef.nativeElement.getBoundingClientRect().top + window.scrollY;
    this.stickyHeaderHeight = this.innerStickyProjectTypeSelector.elementRef.nativeElement.offsetHeight;
  }

  // Use IntersectionObserver to detect when the section title leaves the viewport
  observeSectionTitle() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        this.isTitleVisible = entry.isIntersecting;
        if (!this.isTitleVisible) {
          this.isSticky = true;
          //console.log("Section title is out of view.");
        } else {
          this.isSticky = false;
          //console.log("Section title is in view.");
        }
      });
    }, {
      threshold: 0.01 // Trigger when 10% of the section title is out of view
    });

    if (this.sectionTitle) {
      observer.observe(this.sectionTitle.sectionTitle.nativeElement);
    }
  }

  // Listen for scroll events on the window
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.adjustHeaderOpacity();
  }

  // Adjust the header opacity based on the distance to the project type selector
  adjustHeaderOpacity() {
    const headerElement = this.header.elementRef.nativeElement; 
    const innerStickyElement = this.innerStickyProjectTypeSelector.elementRef.nativeElement;

    // Get their bounding rectangles for comparison
    const headerRect = headerElement.getBoundingClientRect();
    const innerStickyRect = innerStickyElement.getBoundingClientRect();

    // Get the current scroll position from the top of the document
    const scrollY = window.scrollY;

    // Calculate how much the innerSticky element has scrolled past the header
    const distanceFromTop = innerStickyElement.offsetTop - scrollY;

    // If the innerSticky element is more than 100px away, set full opacity
    if (distanceFromTop >= 100) {
        this.headerOpacity = 1;
    } 
    // When innerSticky is exactly aligned with the header, set opacity to 0
    else if (distanceFromTop <= 0) {
        this.headerOpacity = 0;
    } 
    // Gradually reduce opacity as the innerSticky approaches the header
    else {
        this.headerOpacity = distanceFromTop / 100;
    }

    // Apply the calculated opacity to the header element
    headerElement.style.opacity = this.headerOpacity;

    // Debugging logs to verify values
    console.log("Distance from top:", distanceFromTop);
    console.log("Header opacity:", this.headerOpacity);
  }

}
