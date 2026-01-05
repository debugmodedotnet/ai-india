import { Component } from '@angular/core';

@Component({
  selector: 'app-sponsorship',
  standalone: true,
  imports: [],
  templateUrl: './sponsorship.component.html',
  styleUrl: './sponsorship.component.scss'
})
export class SponsorshipComponent {

  downloadFile() {
    const fileUrl = 'assets/AI-India 2025 sponsorship document.pdf';
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'AI-India 2025 sponsorship document.pdf';
    a.click();
  }

}
