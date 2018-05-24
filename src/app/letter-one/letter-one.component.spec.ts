import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterOneComponent } from './letter-one.component';

describe('LetterOneComponent', () => {
  let component: LetterOneComponent;
  let fixture: ComponentFixture<LetterOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
