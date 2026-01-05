import { Component } from '@angular/core';
import { IAgenda } from '../../models/agenda';
import { agenda } from '../../dto/agenda.json';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss'
})
export class AgendaComponent {

  agendas: IAgenda[] = agenda;

}
