import { ConferenceTicketCatalog } from '../models/ticket';

export const conferenceTickets = [
  {
    id: 1,
    title: 'How to Attend',
    features: [
      'You should be paid member of nomadcoder developer community',
      'You will have access to all sessions',
      "Session won't be recorded",
      'You will get AI-India T-Shirt',
    ],
    buttonText: 'Enroll For the Conference',
    enrollUrl: 'https://www.nomadcoder.ai',
    isDisabled: false,
  },
] as const satisfies ConferenceTicketCatalog;
