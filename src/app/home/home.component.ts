import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imageUrls;
  logoUrl;

  constructor(private router: Router) { }

  ngOnInit() {
    localStorage.clear();
    this.imageUrls = [
      {
        image: '../assets/imgs/MRTaxialwebsite.jpg',
        title: ''
      }];
    this.logoUrl = '../assets/imgs/logotrans.png';
  }

  showPdf() {}

  letsBegin() {
    this.router.navigate(['/one']).then().catch();
  }

}
