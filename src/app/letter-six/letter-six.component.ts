import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-letter-six',
  templateUrl: './letter-six.component.html',
  styleUrls: ['./letter-six.component.css']
})
export class LetterSixComponent implements OnInit {
  seven_letter_choice_5: string;
  seven_letter_choice_6: string;
  button: string;
  param_6: string;
  a: number;
  p: number;
  c: number;
  a5: number;
  p5: number;
  c5: number;
  a6: number;
  p6: number;
  c6: number;
  button_one: boolean;
  private currentColor: string;
  button_two: boolean;
  isenabled: boolean;

  constructor(private router: Router) {
    this.seven_letter_choice_5 = localStorage.getItem('seven_letter_choice_5');
    console.log('seven_letter_choice_5:', this.seven_letter_choice_5);
    // this.a5 = Number(localStorage.getItem('a5'));
    // this.p5 = Number(localStorage.getItem('p5'));
    // this.c5 = Number(localStorage.getItem('c5'));
    // this.a = this.a5;
    // this.p = this.p5;
    // this.c = this.c5;
    this.button_one = false;
    this.button_two = false;
    this.currentColor = 'morbidity';
    this.isenabled = false;
/*    this.a6 = this.a;
    this.c6 = this.c;
    this.p6 = this.p;*/
  }

  select(seven_letter_choice_6, button) {
    console.log('letter three: ' + seven_letter_choice_6);
    this.param_6 = seven_letter_choice_6;
    this.seven_letter_choice_6 = seven_letter_choice_6;
    this.button = button;
    // this.a = this.a5;
    // this.p = this.p5;
    // this.c = this.c5;
    this.isenabled = true;
    this.setButton(this.button);
    // if (seven_letter_choice_6 === 'P / C') { // && this.button_one === true) {
    //   this.p = this.p + 1;
    //   this.c = this.c + 1;
    // } else {
    //   this.param_6 = '0';
    // }
    localStorage.setItem('seven_letter_choice_6', this.seven_letter_choice_6);
    localStorage.setItem('button_letter_6', this.button);
  }

  goToNext() {
    console.log('param_6: ' + this.param_6);
    this.router.navigate(['seven']).then().catch();
  }

  ngOnInit() {
    this.seven_letter_choice_6 = localStorage.getItem('seven_letter_choice_6');
    this.button = localStorage.getItem('button_letter_6');
    this.setButton(this.button);
    if (this.button != null) {
      this.isenabled = true;
    } else {
      this.isenabled = false;
    }
  }

  setButton(button) {
    if (button === 'button_one') {
      this.button_one = true;
      this.button_two = false;
    } else if (button === 'button_two') {
      this.button_one = false;
      this.button_two = true;
    }
  }

}
