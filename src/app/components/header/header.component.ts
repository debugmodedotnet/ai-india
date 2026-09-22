import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  mobileMenuOpen = false;
  private router = inject(Router);

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    const mobileMenu = document.querySelector('.mobile-menu') as HTMLElement;
    const hamburger = document.querySelector('.navbar-toggler') as HTMLElement;
    const hamburgerIcon = document.querySelector('.burger') as HTMLElement;

    if (this.mobileMenuOpen) {
      hamburger.className = "navbar-toggler border-0 opened"
      hamburgerIcon.className = "burger isOpened"
      mobileMenu.style.opacity = '1';
      mobileMenu.style.visibility = 'visible';
    } else {
      hamburger.className = "navbar-toggler border-0 closed"
      hamburgerIcon.className = "burger isClosed"
      mobileMenu.style.opacity = '0';
      mobileMenu.style.visibility = 'hidden';
    }
  }

  closeMobileMenu() {
    if (this.mobileMenuOpen) {
      this.toggleMobileMenu();
    }
  }

  buyTickets() {
    this.closeMobileMenu();
    void this.router.navigate(['/home'], { fragment: 'pricing' }).then(() => {
      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

}
