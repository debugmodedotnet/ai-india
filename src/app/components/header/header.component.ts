import { NgClass } from '@angular/common';
import { Component, inject, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  mobileMenuOpen = false;
  isSticky = false;
  private router = inject(Router);

  // @HostListener('window:scroll', [])
  // onScroll() {
  //   const heroSection = document.querySelector('.hero-section') as HTMLElement;
  //   const heroEndPosition = heroSection.offsetTop + heroSection.offsetHeight;
  //   this.isSticky = window.scrollY >= heroEndPosition;
  // }

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

  navigateAndCloseMenu(fragment: string) {
    this.toggleMobileMenu();
    this.router.navigate(['/home'], { fragment });
  }

  openPhotoalbum(){
    const url = 'https://photos.app.goo.gl/WfWXVR2P9CxK4LW16'; // Replace with your desired URL
    window.open(url, '_blank');
  }

  buyTickets(){
    this.router.navigate(['/home'], { fragment: 'pricing' });
  }

}
