import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterThreeComponent } from './letter-three.component';

describe('LetterThreeComponent', () => {
  let component: LetterThreeComponent;
  let fixture: ComponentFixture<LetterThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
