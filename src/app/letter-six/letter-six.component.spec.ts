import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterSixComponent } from './letter-six.component';

describe('LetterSixComponent', () => {
  let component: LetterSixComponent;
  let fixture: ComponentFixture<LetterSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
