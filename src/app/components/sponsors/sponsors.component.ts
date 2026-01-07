import { Component } from '@angular/core';
import { ISponsors } from '../../models/sponsors';
import { sponsors } from '../../dto/sponsors.json';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sponsors',
  standalone: true,
  imports: [NgClass],
  templateUrl: './sponsors.component.html',
  styleUrl: './sponsors.component.scss'
})
export class SponsorsComponent {

  sponsors: ISponsors[] = sponsors;

  openSponsorshipDoc(): void {
    const pdfUrl = 'sponsorship.pdf';
    window.open(pdfUrl, '_blank');
  }
}
