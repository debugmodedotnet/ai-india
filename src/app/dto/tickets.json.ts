import { ConferenceTicketCatalog } from '../models/ticket';

export const conferenceTickets = [
  {
    id: 1,
    title: 'How to Attend',
    features: [
      'Access to all sessions',
      'AI-India Black T-shirt',
      'Lunch/coffee/Tea',
      'Access to booths',
    ],
    buttonText: 'Enroll For the Conference',
    enrollUrl: 'https://www.nomadcoder.ai/ai-india-2026',
    isDisabled: false,
  },
] as const satisfies ConferenceTicketCatalog;
