import { Component } from '@angular/core';
import { IAgenda } from '../../models/agenda';
import { agenda } from '../../dto/agenda.json';
import { MarkdownPipe } from '../../pipes/markdown.pipe';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [MarkdownPipe],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss'
})
export class AgendaComponent {

  agendas: IAgenda[] = agenda;

}
