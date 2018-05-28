import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-letter-six',
  templateUrl: './letter-six.component.html',
  styleUrls: ['./letter-six.component.css']
})
export class LetterSixComponent implements OnInit {
  seven_letter_choice_5: string;
  param_6: string;
  a: number;
  p: number;
  c: number;
  a6: number;
  p6: number;
  c6: number;
  button_one: boolean;
  private currentColor: string;
  button_two: boolean;
  private isenabled: boolean;

  constructor(private router: Router) {
    this.seven_letter_choice_5 = localStorage.getItem('seven_letter_choice_5');
    console.log('seven_letter_choice_5:', this.seven_letter_choice_5);
    this.a6 = Number(localStorage.getItem('a'));
    this.p6 = Number(localStorage.getItem('p'));
    this.c6 = Number(localStorage.getItem('c'));
    this.a = this.a6;
    this.p = this.p6;
    this.c = this.c6;
    this.button_one = false;
    this.button_two = false;
    this.currentColor = 'morbidity';
    this.isenabled = false;
  }

  select(seven_letter_choice_6, button) {
    console.log('letter three: ' + seven_letter_choice_6);
    this.param_6 = seven_letter_choice_6;
    this.a = this.a6;
    this.p = this.p6;
    this.c = this.c6;
    this.isenabled = true;
    if (button === 'button_one') {
      this.button_one = true;
      this.button_two = false;
    } else if (button === 'button_two') {
      this.button_one = false;
      this.button_two = true;
    }
    if (seven_letter_choice_6 === 'P / C' && this.button_one === true) {
      this.p = this.p + 1;
      this.c = this.c + 1;
    } else {
      this.param_6 = '0';
    }
  }

  goToNext() {
    console.log('param_6: ' + this.param_6);
    localStorage.setItem('letter_six', this.param_6);
    localStorage.setItem('a', this.a.toString());
    localStorage.setItem('p', this.p.toString());
    localStorage.setItem('c', this.c.toString());
    this.router.navigate(['seven']).then().catch();
  }

  ngOnInit() {
  }

}
