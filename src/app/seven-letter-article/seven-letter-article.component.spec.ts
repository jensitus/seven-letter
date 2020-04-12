import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenLetterArticleComponent } from './seven-letter-article.component';

describe('SevenLetterArticleComponent', () => {
  let component: SevenLetterArticleComponent;
  let fixture: ComponentFixture<SevenLetterArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SevenLetterArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SevenLetterArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
