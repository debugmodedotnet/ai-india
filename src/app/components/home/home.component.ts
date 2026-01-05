import { AfterViewInit, Component, inject } from '@angular/core';
import { SpeakersComponent } from "../speakers/speakers.component";
import { AgendaComponent } from "../agenda/agenda.component";
import { VenueComponent } from "../venue/venue.component";
import { PricingComponent } from "../pricing/pricing.component";
import { AboutComponent } from "../about/about.component";
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SponsorsComponent } from "../sponsors/sponsors.component";
import { AlbumsComponent } from "../albums/albums.component";
import { HeroAltComponent } from '../hero-alt/hero-alt.component';
import { StatsStickyComponent } from '../stats-sticky/stats-sticky.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SpeakersComponent, AgendaComponent, VenueComponent, PricingComponent, AboutComponent, SponsorsComponent, AlbumsComponent, HeroAltComponent, StatsStickyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {

  private viewportScroller = inject(ViewportScroller);
  private route = inject(ActivatedRoute);

  // ngAfterViewInit() {
  //   this.route.fragment.subscribe((fragment: string | null) => {
  //     if (fragment) {
  //       setTimeout(() => {
  //         this.viewportScroller.scrollToAnchor(fragment);
  //       }, 0);
  //     } else {
  //       this.viewportScroller.scrollToPosition([0, 0]);
  //     }
  //   });
  // }

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
