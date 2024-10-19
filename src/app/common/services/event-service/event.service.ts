import { EventEmitter, Injectable } from '@angular/core';
import { ProjectType } from '../../models/enums';
import { Project } from '../../models/models';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public readonly themeChangedEvent = new EventEmitter();
  
  public readonly selectedProjectTypeEvent = new EventEmitter<ProjectType>();
  public readonly selectedProjectEvent = new EventEmitter<Project>();
  public readonly selectNextProjectEvent = new EventEmitter<{leftOrRight: string, project: Project}>();

  constructor() { }
}
