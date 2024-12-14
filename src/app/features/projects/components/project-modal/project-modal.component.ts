import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Project } from '../../../../core/models/project';
import { IconService } from '../../../../core/services/icon.service';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../service/project.service';

@Component({
  selector: 'app-project-modal',
  imports: [CommonModule],
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss'],
})
export class ProjectModalComponent {
  @Input() project?: Project;
  currentImageIndex = 0;

  @ViewChild('detailsContainer') detailsContainer!: ElementRef<HTMLDivElement>;

  constructor(
    public iconService: IconService,
    public projectService: ProjectService
  ) {
    this.projectService.onProjectSelected.subscribe((project: Project) => {
      this.openProject(project);
    });

    this.projectService.onProjectClose.subscribe(() => {
      this.closeModal();
    });
  }

  previousImage(): void {
    if (this.project?.images?.length) {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.project.images.length) % this.project.images.length;
    }
  }

  nextImage(): void {
    if (this.project?.images?.length) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.project.images.length;
    }
  }

  openProject(project: Project): void {
    this.project = project;
    this.currentImageIndex = 0; // Reset the image index for the new project
    this.resetScrollPosition(); // Reset scroll position
  }

  closeModal(): void {
    this.project = undefined;
  }

  fetchPreviousProject(): void {
    if (!this.project) {
      console.warn("No current project available to fetch previous project.");
      return;
    }
  
    const previousProject = this.projectService.getPreviousProject(this.project);
    if (previousProject) {
      this.openProject(previousProject);
    } else {
      console.warn("Previous project not found.");
    }
  }
  
  fetchNextProject(): void {
    if (!this.project) {
      console.warn("No current project available to fetch next project.");
      return;
    }
  
    const nextProject = this.projectService.getNextProject(this.project);
    if (nextProject) {
      this.openProject(nextProject);
    } else {
      console.warn("Next project not found.");
    }
  }

  private resetScrollPosition(): void {
    if (this.detailsContainer) {
      this.detailsContainer.nativeElement.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  selectImage(index: number): void {
    if (this.project?.images?.length && index >= 0 && index < this.project.images.length) {
      this.currentImageIndex = index;
    }
  }
}
