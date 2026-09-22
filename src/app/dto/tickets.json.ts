import { ConferenceTicketCatalog } from '../models/ticket';

export const conferenceTickets = [
  {
    id: 1,
    title: 'How to Attend',
    features: [
      'Access to all sessions',
      'AI-India Light Grey T-Shirt',
      'Lunch/coffee/Tea',
      'Access to booths',
    ],
    buttonText: 'Register',
    enrollUrl: 'https://nomadcoder.ai/event/p/15',
    isDisabled: false,
  },
] as const satisfies ConferenceTicketCatalog;
