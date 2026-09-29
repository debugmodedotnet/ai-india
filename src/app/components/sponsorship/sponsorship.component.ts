import { Component, OnInit, signal } from '@angular/core';
import { MarkdownPipe } from '../../pipes/markdown.pipe';

@Component({
  selector: 'app-sponsorship',
  standalone: true,
  imports: [MarkdownPipe],
  templateUrl: './sponsorship.component.html',
  styleUrl: './sponsorship.component.scss'
})
export class SponsorshipComponent implements OnInit {
  markdown = signal('');

  ngOnInit(): void {
    void this.loadMarkdown();
  }

  private async loadMarkdown(): Promise<void> {
    try {
      const response = await fetch('/sponsorship.md');
      if (response.ok) {
        this.markdown.set(await response.text());
      }
    } catch {
      this.markdown.set('');
    }
  }
}
