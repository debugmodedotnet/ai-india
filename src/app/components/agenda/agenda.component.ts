import { Component, signal } from '@angular/core';
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

  private readonly openSessionKeys = signal<ReadonlySet<string>>(new Set());

  hasDetails(item: IAgenda): boolean {
    return item.description.trim().length > 0;
  }

  isOpen(item: IAgenda): boolean {
    return this.openSessionKeys().has(this.sessionKey(item));
  }

  toggle(item: IAgenda): void {
    const key = this.sessionKey(item);
    this.openSessionKeys.update((current) => {
      const next = new Set(current);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  }

  private sessionKey(item: IAgenda): string {
    return `${item.startTime}${item.title}`;
  }

}
