import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterNavModalComponent } from './letter-nav-modal.component';

describe('LetterNavModalComponent', () => {
  let component: LetterNavModalComponent;
  let fixture: ComponentFixture<LetterNavModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterNavModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterNavModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
