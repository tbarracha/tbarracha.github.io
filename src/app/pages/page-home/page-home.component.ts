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
  stickyThreshold: number = 10;

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

  checkStickyStatus() {
    if (!this.innerStickyProjectTypeSelector || !this.outerStickyProjectTypeSelector) {
      console.log("Sticky project type selectors not found");
      return;
    }
  
    const innerNativeElement = this.innerStickyProjectTypeSelector.elementRef.nativeElement;
    const outerNativeElement = this.outerStickyProjectTypeSelector.elementRef.nativeElement;

    const innerRect = innerNativeElement.getBoundingClientRect();
    const outerRect = outerNativeElement.getBoundingClientRect();
  
    // Check if the innerStickyProjectTypeSelector is completely out of view (below the viewport)
    if (innerRect.top <= innerNativeElement.offsetHeight + this.stickyThreshold) {
      // If the innerSticky is out of sight or the outer is below the inner
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
