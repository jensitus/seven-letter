import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-letter-four',
  templateUrl: './letter-four.component.html',
  styleUrls: ['./letter-four.component.css']
})
export class LetterFourComponent implements OnInit {
  seven_letter_choice_3: string;
  param_4: string;
  a: number;
  p: number;
  c: number;
  a4: number;
  p4: number;
  c4: number;
  button_one: boolean;
  button_two: boolean;
  private currentColor: string;
  private isenabled: boolean;

  constructor() {
    this.seven_letter_choice_3 = localStorage.getItem('seven_letter_choice_3');
    this.a4 = Number(localStorage.getItem('a'));
    this.p4 = Number(localStorage.getItem('p'));
    this.c4 = Number(localStorage.getItem('c'));
    this.a = this.a4;
    this.p = this.p4;
    this.c = this.c4;
    this.currentColor = 'spine';
    this.isenabled = false;
  }

  select(seven_letter_choice_4, button) {
    console.log('letter four: ' + seven_letter_choice_4);
    this.param_4 = seven_letter_choice_4;
    this.a = this.a4;
    this.p = this.p4;
    this.c = this.c4;
    if (seven_letter_choice_4 == 'A / P') {
      this.a = this.a + 0.5;
      this.p = this.p + 0.5;
    } else if (seven_letter_choice_4 == 'C') {
      this.c = this.c + 1;
    }
    if (button == 'button_one') {
      this.button_one = true;
      this.button_two = false;
    } else if (button == 'button_two') {
      this.button_one = false;
      this.button_two = true;
    }
    this.isenabled = true;
  }

  goToNext() {
    console.log('param_4: ' + this.param_4);
    localStorage.setItem('letter_four', this.param_4);
    localStorage.setItem('seven_letter_choice_4', this.param_4);
    localStorage.setItem('a', this.a.toString());
    localStorage.setItem('p', this.p.toString());
    localStorage.setItem('c', this.c.toString());
  }

  ngOnInit() {
  }

}
