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
    this.speakers.sort((a, b) => a.id - b.id);
  }

  openCallForPaper(): void {
    const url = 'https://docs.google.com/forms/d/e/1FAIpQLSdZvRKIeJ0x6tjQuPjCBHFNjiRNAhs7_zyqL9zJdPM63fH4XA/viewform';
    window.open(url, '_blank');
  }
}
