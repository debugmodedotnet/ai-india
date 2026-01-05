import { Component } from '@angular/core';
import { ISponsors } from '../../models/sponsors';
import { sponsors } from '../../dto/sponsors.json';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sponsors',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sponsors.component.html',
  styleUrl: './sponsors.component.scss'
})
export class SponsorsComponent {

  sponsors: ISponsors[] = sponsors;

}
