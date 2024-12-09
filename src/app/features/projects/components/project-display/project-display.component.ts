import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../../core/models/project';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ProjectService } from '../../service/project.service';

@Component({
  selector: 'app-project-display',
  imports: [CommonModule],
  templateUrl: './project-display.component.html',
  styleUrl: './project-display.component.scss',
})
export class ProjectDisplayComponent implements OnInit {
  @Input() project!: Project;

  images: string[] = [];

  constructor(private sanitizer: DomSanitizer, private projectService: ProjectService) {}

  ngOnInit() {
    this.images = this.projectService.getCachedProjectImages(this.project);
    console.log('Images:', this.images);
  }

  sanitizeIcon(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }
}
