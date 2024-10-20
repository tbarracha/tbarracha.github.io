import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { SectionTitleComponent } from '../../common/components/section-title/section-title.component';
import { ProjectTypeSelectorComponent } from "../../common/components/project-components/project-type-selector/project-type-selector.component";
import { NgClass, NgStyle } from '@angular/common';
import { ProjectListComponent } from '../../common/components/project-components/project-list/project-list.component';
import { ProjectModalComponent } from '../../common/components/project-components/project-modal/project-modal.component';
import { HeaderComponent } from '../../common/components/header/header.component';
import { MobileMenuComponent } from "../../common/components/mobile-menu/mobile-menu.component";

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [SectionTitleComponent, ProjectTypeSelectorComponent, ProjectListComponent, NgClass, NgStyle, ProjectModalComponent, HeaderComponent, MobileMenuComponent],
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements AfterViewInit {
  @ViewChild('header', { static: false }) header!: HeaderComponent;
  @ViewChild('sectionTitle', { static: false }) sectionTitle!: SectionTitleComponent;
  @ViewChild('innerStickyProjectTypeSelector', { static: false }) innerStickyProjectTypeSelector!: ProjectTypeSelectorComponent;

  initialPosition: number = 0;
  stickyHeaderHeight: number = 0;
  stickyThreshold: number = 10;
  isTitleVisible: boolean = true;
  isSubTitleVisible: boolean = true;
  headerOpacity: number = 1;
  headerOpacityClass: string = 'opacity-100';

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
        // Check if the observed element is the section title
        if (entry.target === this.sectionTitle.sectionTitle.nativeElement) {
          this.isTitleVisible = entry.isIntersecting;
        }
  
        // Check if the observed element is the section subtitle
        if (entry.target === this.sectionTitle.sectionSubTitle.nativeElement) {
          this.isSubTitleVisible = entry.isIntersecting;
        }
      });
    }, {
      threshold: 0.01 // Trigger when 1% of the element is visible
    });
  
    if (this.sectionTitle) {
      observer.observe(this.sectionTitle.sectionTitle.nativeElement);
      observer.observe(this.sectionTitle.sectionSubTitle.nativeElement);
    }
  }
  

  // Listen for scroll events on the window
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    //this.adjustHeaderOpacity();
  }

  adjustHeaderOpacity() {
    if (this.isTitleVisible) {
      return;
    }

    const headerElement = this.header.elementRef.nativeElement; 
    const innerStickyElement = this.innerStickyProjectTypeSelector.elementRef.nativeElement;

    const headerRect = headerElement.getBoundingClientRect();
    const innerStickyRect = innerStickyElement.getBoundingClientRect();

    const scrollY = window.scrollY;

    // Calculate how much the innerSticky element has scrolled past the header using the formula
    const distanceFromHeaderToInnerSticky = Math.max(innerStickyRect.top - headerRect.top - scrollY, 0);
    this.headerOpacity = Math.max(0, Math.min(1, distanceFromHeaderToInnerSticky / 100));
    this.headerOpacityClass = this.getTailwindOpacityClass(distanceFromHeaderToInnerSticky);

    // Debugging logs to verify values
    console.log("Distance from Header to InnerSticky:", distanceFromHeaderToInnerSticky);
    console.log("Header opacity:", this.headerOpacity);
  }

  getTailwindOpacityClass(distance: number): string {
    if (distance >= 100) {
      return 'opacity-100'; // Fully visible
    } else if (distance <= 0) {
      return 'opacity-0'; // Fully hidden
    } else if (distance <= 25) {
      return 'opacity-25';
    } else if (distance <= 50) {
      return 'opacity-50';
    } else {
      return 'opacity-75';
    }
  }
}
