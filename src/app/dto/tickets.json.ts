import { ConferenceTicketCatalog } from '../models/ticket';

export const conferenceTickets = [
  {
    id: 1,
    title: 'Tickets',
    features: [
      'Access to all sessions',
      'AI-India Light Grey T-Shirt',
      'Lunch/coffee/Tea',
      'Access to booths',
    ],
    buttonText: '₹2000 Buy Ticket',
    enrollUrl: 'https://nomadcoder.ai/event/p/15',
    isDisabled: false,
  },
] as const satisfies ConferenceTicketCatalog;
