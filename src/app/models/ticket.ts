export type TicketFeature = string & { readonly __brand?: 'TicketFeature' };

export interface IConferenceTicket {
  readonly id: number;
  readonly title: string;
  readonly features: readonly TicketFeature[];
  readonly buttonText: string;
  readonly enrollUrl: string;
  readonly isDisabled: boolean;
}

export type ConferenceTicketCatalog = readonly IConferenceTicket[];
