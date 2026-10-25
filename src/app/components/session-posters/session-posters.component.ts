import { Component } from '@angular/core';
import { agenda } from '../../dto/agenda.json';
import { speakers } from '../../dto/speakers.json';
import { MarkdownPipe } from '../../pipes/markdown.pipe';

export interface SessionPoster {
  title: string;
  abstract: string;
  startTime: string;
  endTime: string;
  speakerName: string;
  speakerPosition: string;
  image: string;
  linkedin?: string;
  nomadcoder?: string;
  flip: boolean;
}

@Component({
  selector: 'app-session-posters',
  standalone: true,
  imports: [MarkdownPipe],
  templateUrl: './session-posters.component.html',
  styleUrl: './session-posters.component.scss',
})
export class SessionPostersComponent {
  readonly sessions: SessionPoster[] = buildSessionPosters();

  longTitle(title: string): boolean {
    return title.length > 42;
  }
}

export function buildSessionPosters(): SessionPoster[] {
  const byName = new Map(speakers.map((speaker) => [normalizeName(speaker.name), speaker]));

  let speakerCount = 0;

  return agenda.map((item) => {
    const speaker = item.speakerName.trim()
      ? byName.get(normalizeName(item.speakerName))
      : undefined;
    const flip = speaker ? speakerCount % 2 === 1 : false;
    if (speaker) {
      speakerCount += 1;
    }

    return {
      title: item.title,
      abstract: toAbstract(item.description),
      startTime: item.startTime,
      endTime: item.endTime,
      speakerName: speaker?.name ?? '',
      speakerPosition: speaker?.position ?? '',
      image: speaker?.image ?? '',
      linkedin: speaker?.linkedin,
      nomadcoder: speaker?.nomadcoder,
      flip,
    };
  });
}

function normalizeName(name: string): string {
  return name.toLowerCase().replace(/[^a-z]/g, '');
}

function toAbstract(description: string): string {
  const chunks = description
    .replace(/\r\n/g, '\n')
    .split(/\n\s*\n/)
    .map((chunk) => chunk.trim())
    .filter((chunk) => chunk.length > 0);

  let text = '';
  for (const chunk of chunks) {
    if (chunk.startsWith('#') || /^[-*]\s/m.test(chunk) || /^\d+\.\s/m.test(chunk)) {
      break;
    }
    const plain = chunk
      .replace(/\*\*(.+?)\*\*/g, '$1')
      .replace(/__(.+?)__/g, '$1')
      .replace(/`(.+?)`/g, '$1')
      .replace(/\s+/g, ' ')
      .trim();
    if (!plain || plain.endsWith(':')) {
      continue;
    }
    text = text ? `${text} ${plain}` : plain;
    if (text.length >= 160) {
      break;
    }
  }

  if (text.length <= 420) {
    return text;
  }

  const clipped = text.slice(0, 417);
  const lastSpace = clipped.lastIndexOf(' ');
  const shortened = lastSpace > 240 ? clipped.slice(0, lastSpace) : clipped;
  return `${shortened.trim()}…`;
}
