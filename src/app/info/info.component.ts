import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  pdfSrc: string;
  page = 1;
  totalPages: number;
  isLoaded = false;

  constructor() {
  }

  ngOnInit() {
    this.pdfSrc = '/assets/pdf/info.pdf';
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
