import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocComponent } from './coc.component';

describe('CocComponent', () => {
  let component: CocComponent;
  let fixture: ComponentFixture<CocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
