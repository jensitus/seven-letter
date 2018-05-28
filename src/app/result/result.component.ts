import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  a: number;
  p: number;
  c: number;
  c_modifier: boolean;
  conclusio: string;
  currentColor: string;
  letter_one: string;
  letter_two: string;
  letter_three: string;
  letter_four: string;
  letter_five: string;
  letter_six: string;
  letter_seven: string;

  constructor() {
    this.a = Number(localStorage.getItem('a'));
    this.p = Number(localStorage.getItem('p'));
    this.c = Number(localStorage.getItem('c'));
    this.c_modifier = Boolean(localStorage.getItem('c_modifier'));
    console.log('result a: ' + this.a);
    console.log('result p: ' + this.p);
    console.log('result c: ' + this.c);
    this.currentColor = 'primary';

    if (this.c_modifier == true) {
      this.conclusio = 'A combined approach is recommended';
    } else if ((this.a > this.p) && (this.c < 2)) {
      this.conclusio = 'Anterior approach recommended';
    } else if ((this.a < this.p) && (this.c < 2)) {
      this.conclusio = 'Posterior approach recommended';
    } else if ((this.a > this.p) && (this.c >= 2)) {
      this.conclusio = 'Anterior (C): A combined approach must be considered but is not crucial';
    } else if ((this.a < this.p) && (this.c >= 2)) {
      this.conclusio = 'Posterior (C): A combined approach must be considered but is not crucial';
    } else if ((this.a == this.p) && (this.c < 2)) {
      this.conclusio = 'Either Anterior or Posterior approach is possible';
    } else if ((this.a == this.p) && (this.c >= 2)) {
      this.conclusio = 'Anterior and Posterior and C';
    }
    console.log('localStorage:');
    console.log(localStorage.getItem('letter_one'));
    this.letter_one = localStorage.getItem('letter_one');
    this.letter_two = localStorage.getItem('letter_two');
    this.letter_three = localStorage.getItem('letter_three');
    this.letter_four = localStorage.getItem('letter_four');
    this.letter_five = localStorage.getItem('letter_five');
    this.letter_six = localStorage.getItem('letter_six');
    this.letter_seven = localStorage.getItem('letter_seven');
  }

  ngOnInit() {
  }

}
