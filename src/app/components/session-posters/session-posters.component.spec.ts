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

  it('alternates speaker and session sides', () => {
    const posters: NodeListOf<HTMLElement> = fixture.nativeElement.querySelectorAll('.poster');

    expect(posters.length).toBeGreaterThan(1);
    expect(posters[0].classList.contains('is-flip')).toBeFalse();
    expect(posters[1].classList.contains('is-flip')).toBeTrue();
    expect(posters[0].textContent).toContain('Dhananjay Kumar');
    expect(posters[0].querySelector('.time')?.textContent).toContain('10:30 AM');
  });

  it('shows breaks as time cards without a photo', () => {
    const breaks: NodeListOf<HTMLElement> = fixture.nativeElement.querySelectorAll('.break');
    const titles = [...breaks].map((card) => card.querySelector('.break-title')?.textContent);

    expect(titles).toContain('Registration and T-shirt collection');
    expect(titles).toContain('Lunch');
    expect(titles).toContain('Tea break');
    expect(breaks[0].querySelector('img')).toBeNull();
    expect(breaks[0].textContent).toContain('9:00 AM');
  });
});
