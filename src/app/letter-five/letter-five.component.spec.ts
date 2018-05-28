import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterFiveComponent } from './letter-five.component';

describe('LetterFiveComponent', () => {
  let component: LetterFiveComponent;
  let fixture: ComponentFixture<LetterFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
