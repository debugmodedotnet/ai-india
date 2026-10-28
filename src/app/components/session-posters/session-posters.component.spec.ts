import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionPostersComponent } from './session-posters.component';

describe('SessionPostersComponent', () => {
  let fixture: ComponentFixture<SessionPostersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionPostersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionPostersComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('lists talks with the speaker name and no photo', () => {
    const sessions: NodeListOf<HTMLElement> = fixture.nativeElement.querySelectorAll('.session');
    const talk = [...sessions].find((session) => session.textContent?.includes('Dhananjay Kumar'));

    expect(talk).toBeTruthy();
    expect(talk?.querySelector('img')).toBeNull();
    expect(talk?.querySelector('.time')?.textContent).toContain('10:30 AM');
    expect(fixture.nativeElement.querySelector('img')).toBeNull();
  });

  it('renders markdown lists in the description', () => {
    const details: HTMLElement | null = [...fixture.nativeElement.querySelectorAll('.details')]
      .find((node: HTMLElement) => node.textContent?.includes('What We\'ll Cover'));

    expect(details?.querySelector('h4')?.textContent).toContain('What We\'ll Cover');
    expect(details?.querySelectorAll('li').length).toBeGreaterThan(1);
    expect(details?.querySelector('strong')).toBeTruthy();
  });

  it('shows breaks as title and time only', () => {
    const sessions: NodeListOf<HTMLElement> = fixture.nativeElement.querySelectorAll('.session');
    const registration = [...sessions].find((session) =>
      session.textContent?.includes('Registration')
    );

    expect(registration?.querySelector('.time')?.textContent).toContain('10:00 AM');
    expect(registration?.querySelector('.speaker')).toBeNull();
    expect(registration?.querySelector('.details')).toBeNull();
    expect(fixture.nativeElement.textContent).toContain('Lunch');
    expect(fixture.nativeElement.textContent).toContain('Tea break');
  });
});
