import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'speakers', loadComponent: () => import('./components/speakers/speakers.component').then(m => m.SpeakersComponent) },
    { path: 'agenda', loadComponent: () => import('./components/agenda/agenda.component').then(m => m.AgendaComponent) },
    { path: 'venue', loadComponent: () => import('./components/venue/venue.component').then(m => m.VenueComponent) },
    { path: 'sponsors', loadComponent: () => import('./components/sponsors/sponsors.component').then(m => m.SponsorsComponent) },
    { path: 'coc', loadComponent: () => import('./components/coc/coc.component').then(m => m.CocComponent) },

    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
