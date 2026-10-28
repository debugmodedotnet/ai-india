import { Component } from '@angular/core';
import { agenda } from '../../dto/agenda.json';
import { IAgenda } from '../../models/agenda';
import { MarkdownPipe } from '../../pipes/markdown.pipe';

@Component({
  selector: 'app-session-posters',
  standalone: true,
  imports: [MarkdownPipe],
  templateUrl: './session-posters.component.html',
  styleUrl: './session-posters.component.scss',
})
export class SessionPostersComponent {
  readonly sessions: IAgenda[] = agenda;
}
