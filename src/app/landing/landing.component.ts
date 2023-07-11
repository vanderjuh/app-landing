import { Component, OnInit } from '@angular/core';

import { lastValueFrom } from 'rxjs';

import { AreaOfActivityResponse } from '../shared/classes/area-of-activity-response.class';
import { LandingResponse } from '../shared/classes/landing-response.class';
import { LandingApiService } from '../shared/services/api/landing-api/landing-api.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  response!: LandingResponse;
  selectedActivity?: AreaOfActivityResponse;

  constructor(private landingApiService: LandingApiService) { }

  async ngOnInit(): Promise<void> {
    this.onScroll();
    this.response = await lastValueFrom(this.landingApiService.get());
    if (this.response.areasOfActivity?.length) {
      this.selectedActivity = this.response.areasOfActivity[0];
    }
  }

  onScroll() {
    document.addEventListener('scroll', (event) => {
      const isOnTop = ((document.body.scrollTop + document.documentElement.scrollTop) === 0);
      if (isOnTop) {
        document.querySelector('menu')?.classList.remove('top-menu-scrolled')
      } else {
        document.querySelector('menu')?.classList.add('top-menu-scrolled')
      }
    });
  }

  onSelectedActivity(activity: AreaOfActivityResponse): void {
    this.selectedActivity = activity;
  }
}
