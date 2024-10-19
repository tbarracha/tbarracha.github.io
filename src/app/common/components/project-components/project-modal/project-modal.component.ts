import { Component, Renderer2 } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import { EventService } from '../../../services/event-service/event.service';
import { ProjectService } from '../../../services/project-service/project.service';
import { Project } from '../../../models/models';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent {
  isOpen = false; // Controls whether modal is in the DOM
  isAnimating = false; // Controls the slide animation state
  currentProject!: Project;
  selectedImage: string = '';

  constructor(
    private renderer: Renderer2,
    readonly eventService: EventService,
    readonly projectService: ProjectService
  ) {
    eventService.selectedProjectEvent.subscribe((project) => this.projectSelected(project));
  }

  projectSelected(project: Project) {
    this.currentProject = project;
    this.selectedImage = project.images[0];

    if (!this.isOpen) {
      this.openModal();
    }
  }

  openModal() {
    this.isOpen = true; // Modal becomes visible

    // Add padding to the body to account for the scrollbar
    this.addScrollbarPadding();

    setTimeout(() => {
      this.isAnimating = true; // Trigger the animation after a slight delay
    }, 10); // Delay ensures the transition is triggered
    this.renderer.addClass(document.body, 'overflow-hidden'); // Disable page scroll
  }

  closeModal() {
    this.isAnimating = false; // Start closing animation

    setTimeout(() => {
      this.isOpen = false; // Remove modal after animation completes
      this.renderer.removeClass(document.body, 'overflow-hidden'); // Re-enable page scroll
      this.removeScrollbarPadding(); // Remove the padding
    }, 500); // Match duration of your CSS transition (500ms)
  }

  // Function to calculate and add padding equal to the scrollbar width
  private addScrollbarPadding() {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    this.renderer.setStyle(document.body, 'padding-right', `${scrollbarWidth}px`);
    //this.renderer.setStyle(document.body, 'transition', 'padding-right 500ms ease'); // Smooth transition
  }

  // Function to remove the padding
  private removeScrollbarPadding() {
    this.renderer.setStyle(document.body, 'padding-right', '0px');
    //this.renderer.setStyle(document.body, 'transition', 'padding-right 500ms ease');
  }

  selectImage(image: string) {
    this.selectedImage = image;
  }
  
  navigateProject(direction: string, currentProject: Project) {
    this.eventService.selectNextProjectEvent.emit({ leftOrRight: direction, project: currentProject });
  }
}
