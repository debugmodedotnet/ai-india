import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsStickyComponent } from './stats-sticky.component';

describe('StatsStickyComponent', () => {
  let component: StatsStickyComponent;
  let fixture: ComponentFixture<StatsStickyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsStickyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsStickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
