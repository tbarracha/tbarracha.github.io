import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { SectionTitleComponent } from '../../common/components/section-title/section-title.component';
import { ProjectTypeSelectorComponent } from "../../common/components/project-components/project-type-selector/project-type-selector.component";
import { NgClass } from '@angular/common';
import { ProjectListComponent } from '../../common/components/project-components/project-list/project-list.component';
import { ProjectModalComponent } from '../../common/components/project-components/project-modal/project-modal.component';
import { HeaderComponent } from '../../common/components/header/header.component';

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [SectionTitleComponent, ProjectTypeSelectorComponent, ProjectListComponent, NgClass, ProjectModalComponent, HeaderComponent],
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements AfterViewInit {
  @ViewChild('innerStickyProjectTypeSelector', { static: false }) innerStickyProjectTypeSelector!: ProjectTypeSelectorComponent;
  @ViewChild('outerStickyProjectTypeSelector', { static: false }) outerStickyProjectTypeSelector!: ProjectTypeSelectorComponent;
  isSticky: boolean = false;
  initialPosition: number = 0;
  stickyHeaderHeight: number = 0;

  // Listen for scroll events on the window
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkStickyStatus();
  }

  ngAfterViewInit() {
    if (this.innerStickyProjectTypeSelector?.elementRef?.nativeElement === undefined) {
      console.log("Native element not found");
      return;
    }

    // Get the initial position of the element from the top of the document
    this.initialPosition = this.innerStickyProjectTypeSelector.elementRef.nativeElement.getBoundingClientRect().top + window.scrollY;
    this.stickyHeaderHeight = this.innerStickyProjectTypeSelector.elementRef.nativeElement.offsetHeight;

    // Initial check for sticky status
    this.checkStickyStatus();
  }

  // Manual check for sticky status based on scroll position
  checkStickyStatus() {
    const scrollY = window.scrollY;

    // Check if the current scroll position has passed the initial top position of the element
    if (scrollY >= this.initialPosition - this.innerStickyProjectTypeSelector.elementRef.nativeElement.offsetHeight - 4) {
      if (!this.isSticky) {
        this.isSticky = true; // Set sticky state
      }
    } else {
      if (this.isSticky) {
        this.isSticky = false; // Unset sticky state
      }
    }
  }
}
