import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-alt',
  standalone: true,
  imports: [],
  templateUrl: './hero-alt.component.html',
  styleUrl: './hero-alt.component.scss'
})
export class HeroAltComponent {
  private router = inject(Router);

  scrollToTickets(): void {
    void this.router.navigate(['/home'], { fragment: 'pricing' }).then(() => {
      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}
