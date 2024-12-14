import { Injectable } from '@angular/core';
import { IconService } from './icon.service';
import { ThemeService } from './theme.service';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class BrainService {

  constructor(
    public iconService: IconService,
    public themeService: ThemeService,
    public eventService: EventService,
  ) {

  }
}
