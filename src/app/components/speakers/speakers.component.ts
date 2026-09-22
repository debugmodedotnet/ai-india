import { SlicePipe } from '@angular/common';
import { ISpeakers } from '../../models/speakers';
import { speakers } from './../../dto/speakers.json';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.scss'
})
export class SpeakersComponent implements OnInit {

  speakers: ISpeakers[] = speakers;

  ngOnInit(): void {
    this.speakers.sort((a, b) => {
      const aLast = a.name === 'Dhananjay Kumar';
      const bLast = b.name === 'Dhananjay Kumar';
      if (aLast !== bLast) {
        return aLast ? 1 : -1;
      }
      return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
    });
  }
}
