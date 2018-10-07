import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  a: number;
  p: number;
  c: number;
  c_modifier: string;

  conclusio: string;
  currentColor: string;
  letter_one: string;
  letter_two: string;
  letter_three: string;
  letter_four: string;
  letter_five: string;
  letter_six: string;
  letter_seven: string;
  letterArray: string[];

  constructor() {
    /*
    this.a = Number(localStorage.getItem('a'));
    this.p = Number(localStorage.getItem('p'));
    this.c = Number(localStorage.getItem('c'));
    */
    this.currentColor = 'primary';
  }

  ngOnInit() {
    this.a = 0;
    this.p = 0;
    this.c = 0;
    this.letter_one = localStorage.getItem('seven_letter_choice_1');
    this.letter_two = localStorage.getItem('seven_letter_choice_2');
    this.letter_three = localStorage.getItem('seven_letter_choice_3');
    this.letter_four = localStorage.getItem('seven_letter_choice_4');
    this.letter_five = localStorage.getItem('seven_letter_choice_5');
    this.letter_six = localStorage.getItem('seven_letter_choice_6');
    this.letter_seven = localStorage.getItem('seven_letter_choice_7');
    this.c_modifier = localStorage.getItem('c_modifier');
    this.letterArray = [
      this.letter_one,
      this.letter_two,
      this.letter_three,
      this.letter_four,
      this.letter_five,
      this.letter_six,
      this.letter_seven
    ];
    for (let i = 0; i < this.letterArray.length; i++) {
      this.getResult(this.letterArray[i]);
    }
    this.showResult();
  }

  getResult(letter) {
    console.log('letter');
    console.log(letter);
    if (letter === 'A') {
      this.a = this.a + 1;
    } else if (letter === 'P') {
      this.p = this.p + 1;
    } else if (letter === 'C') {
      this.c = this.c + 1;
    } else if (letter === 'A / P') {
      this.a = this.a + 0.5;
      this.p = this.p + 0.5;
    } else if (letter === 'A / C') {
      this.a = this.a + 1;
      this.c = this.c + 1;
    } else if (letter === 'P / C') {
      this.c = this.c + 1;
      this.p = this.p + 1;
    }
  }

  showResult() {
    console.log(this.a);
    console.log('this.a');
    console.log(this.p);
    console.log('this.p');
    console.log(this.c);
    console.log('this.c');
    console.log(this.c_modifier);
    console.log('C MODIFIER');
    if (this.c_modifier === 'yes') {
      this.conclusio = 'A combined approach is recommended';
    } else if ((this.a > this.p) && (this.c < 2)) {
      this.conclusio = 'Anterior approach recommended';
    } else if ((this.a < this.p) && (this.c < 2)) {
      this.conclusio = 'Posterior approach recommended';
    } else if ((this.a > this.p) && (this.c >= 2)) {
      this.conclusio = 'Anterior (C): A combined approach must be considered but is not crucial';
    } else if ((this.a < this.p) && (this.c >= 2)) {
      this.conclusio = 'Posterior (C): A combined approach must be considered but is not crucial';
    } else if ((this.a === this.p) && (this.c < 2)) {
      this.conclusio = 'Either Anterior or Posterior approach is possible';
    } else if ((this.a === this.p) && (this.c >= 2)) {
      this.conclusio = 'Anterior and Posterior and C';
    }
  }
}
