import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterTwoComponent } from './letter-two.component';

describe('LetterTwoComponent', () => {
  let component: LetterTwoComponent;
  let fixture: ComponentFixture<LetterTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
