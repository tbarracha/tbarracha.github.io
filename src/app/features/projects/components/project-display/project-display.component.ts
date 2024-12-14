import { Component, Inject, Input, OnInit } from '@angular/core';
import { Project } from '../../../../core/models/project';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ProjectService } from '../../service/project.service';
import { IconService } from '../../../../core/services/icon.service';

@Component({
  selector: 'app-project-display',
  imports: [CommonModule],
  templateUrl: './project-display.component.html',
  styleUrl: './project-display.component.scss',
})
export class ProjectDisplayComponent implements OnInit {
  @Input() project!: Project;
  iconService: IconService;

  currentImageIndex = 0;

  constructor(
    private sanitizer: DomSanitizer,
    private projectService: ProjectService,
    @Inject(IconService) iconService: IconService
  ) {
    this.iconService = iconService;
  }

  ngOnInit() {
    if (this.project.images && this.project.images.length > 0) {
      this.currentImageIndex = 0;
    }
  }

  previousImage(): void {
    if (this.project.images && this.project.images.length > 1) {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.project.images.length) % this.project.images.length;
    }
  }

  nextImage(): void {
    if (this.project.images && this.project.images.length > 1) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.project.images.length;
    }
  }

  selectProject(): void {
    this.projectService.selectProject(this.project);
  }

  sanitizeIcon(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }
}
