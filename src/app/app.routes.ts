import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'speakers', loadComponent: () => import('./components/speakers/speakers.component').then(m => m.SpeakersComponent) },
    { path: 'agenda', loadComponent: () => import('./components/agenda/agenda.component').then(m => m.AgendaComponent) },
    { path: 'venue', loadComponent: () => import('./components/venue/venue.component').then(m => m.VenueComponent) },
    { path: 'workshops', loadComponent: () => import('./components/workshops/workshops.component').then(m => m.WorkshopsComponent) },
    { path: 'workshops/workshop1', loadComponent: () => import('./components/workshops/workshop-1/workshop-1.component').then(m => m.Workshop1Component) },
    { path: 'workshops/workshop2', loadComponent: () => import('./components/workshops/workshop-2/workshop-2.component').then(m => m.Workshop2Component) },
    { path: 'sponsors', loadComponent: () => import('./components/sponsors/sponsors.component').then(m => m.SponsorsComponent) },
    { path: 'contact', loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent) },
    { path: 'coc', loadComponent: () => import('./components/coc/coc.component').then(m => m.CocComponent) },
    // { path: 'sponsorship', loadComponent: () => import('./components/sponsorship/sponsorship.component').then(m => m.SponsorshipComponent) },

    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
