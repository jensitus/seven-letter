import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterSevenComponent } from './letter-seven.component';

describe('LetterSevenComponent', () => {
  let component: LetterSevenComponent;
  let fixture: ComponentFixture<LetterSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
