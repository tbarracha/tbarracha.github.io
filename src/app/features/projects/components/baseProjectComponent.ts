import { Component } from '@angular/core';
import { ProjectService } from '../service/project.service';

@Component({
    selector: 'app-project-type-selector',
    imports: [],
    template: '',
    styles: ''
})
export class BaseProjectComponent {
    protected projectService: ProjectService;

    constructor(projectService: ProjectService) {
        this.projectService = projectService;
    }
}
