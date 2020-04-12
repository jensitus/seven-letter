import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seven-letter-article',
  templateUrl: './seven-letter-article.component.html',
  styleUrls: ['./seven-letter-article.component.css']
})
export class SevenLetterArticleComponent implements OnInit {

  pdfSrc: string;
  page = 1;
  totalPages: number;
  isLoaded = false;

  constructor() { }

  ngOnInit() {
    this.pdfSrc = '/assets/pdf/Degenerative_Cervical_Myelopathy_A_Seven-Letter_C.pdf';
  }

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }

}
