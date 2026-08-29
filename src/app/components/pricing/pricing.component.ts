import { Component, signal } from '@angular/core';
import { conferenceTickets } from '../../dto/tickets.json';
import { ConferenceTicketCatalog, IConferenceTicket } from '../../models/ticket';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
})
export class PricingComponent {
  readonly tickets = signal<ConferenceTicketCatalog>(conferenceTickets);

  enroll(ticket: IConferenceTicket): void {
    if (ticket.isDisabled || !ticket.enrollUrl) {
      return;
    }

    window.open(ticket.enrollUrl, '_blank', 'noopener,noreferrer');
  }
}
