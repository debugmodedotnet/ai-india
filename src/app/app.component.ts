import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  scrollTop: HTMLElement | null = null;
  private router = inject(Router);

  ngOnInit(): void {
    //this.setupPreloader();
    this.setupScrollTopButton();
    
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // setupPreloader(): void {
  //   const preloader = document.querySelector('#preloader') as HTMLElement | null;
  //   if (preloader) {
  //     window.addEventListener('load', () => {
  //       setTimeout(() => {
  //         preloader.style.opacity = '0';
  //         preloader.style.transition = 'opacity 0.5s ease-out';
  //         preloader.addEventListener('transitionend', () => {
  //           preloader.remove();
  //         });
  //       }, 100);
  //     });
  //   }
  // }

  setupScrollTopButton(): void {
    this.scrollTop = document.querySelector('.scroll-top') as HTMLElement;

    if (this.scrollTop) {
      this.toggleScrollTop();
      window.addEventListener('scroll', () => this.toggleScrollTop());
      this.scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }

  toggleScrollTop(): void {
    if (this.scrollTop) {
      this.scrollTop.classList.toggle('active', window.scrollY > 100);
    }
  }

}