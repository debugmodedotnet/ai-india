import { AfterViewInit, Component, inject } from '@angular/core';
import { VenueComponent } from "../venue/venue.component";
import { PricingComponent } from "../pricing/pricing.component";
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SponsorsComponent } from "../sponsors/sponsors.component";
import { HeroAltComponent } from '../hero-alt/hero-alt.component';
import { StatsStickyComponent } from '../stats-sticky/stats-sticky.component';
import { ConferenceInfoComponent } from '../conference-info/conference-info.component';
import { SessionPostersComponent } from '../session-posters/session-posters.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [VenueComponent, PricingComponent, SponsorsComponent, HeroAltComponent, StatsStickyComponent, ConferenceInfoComponent, SessionPostersComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewInit {

  private viewportScroller = inject(ViewportScroller);
  private route = inject(ActivatedRoute);

  ngAfterViewInit() {
    this.route.fragment.subscribe((fragment: string | null) => {
      if (fragment) {
        setTimeout(() => {
          const yOffset = 88;
          const anchorPos = this.viewportScroller.getScrollPosition();
          const element = document.getElementById(fragment);
          if (element) {
            const elementPos = element.offsetTop - yOffset;
            this.viewportScroller.scrollToPosition([anchorPos[0], elementPos]);
          }
        }, 0);
      } else {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }


}
