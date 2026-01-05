import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-alt',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './hero-alt.component.html',
  styleUrl: './hero-alt.component.scss'
})
export class HeroAltComponent {

  navigatetongIndia(){
    window.open('https://www.ng-ind.com/','_blank');
  }
}
