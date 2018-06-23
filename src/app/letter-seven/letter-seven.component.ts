import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-letter-seven',
  templateUrl: './letter-seven.component.html',
  styleUrls: ['./letter-seven.component.css']
})
export class LetterSevenComponent implements OnInit {
  seven_letter_choice_6: string;
  param_7: string;
  a: number;
  p: number;
  c: number;
  a7: number;
  p7: number;
  c7: number;
  c_modifier: boolean;
  button_one: boolean;
  private currentColor: string;
  button_two: boolean;
  isenabled: boolean;

  constructor(private router: Router) {
    this.seven_letter_choice_6 = localStorage.getItem('seven_letter_choice_6');
    console.log('seven_letter_choice_6:', this.seven_letter_choice_6);
    this.a7 = Number(localStorage.getItem('a'));
    this.p7 = Number(localStorage.getItem('p'));
    this.c7 = Number(localStorage.getItem('c'));
    this.a = this.a7;
    this.p = this.p7;
    this.c = this.c7;
    this.button_one = false;
    this.button_two = false;
    this.c_modifier = false;
    this.currentColor = 'c_modifier';
    this.isenabled = false;
  }

  select(seven_letter_choice_7, button) {
    console.log('letter three: ' + seven_letter_choice_7);
    this.param_7 = seven_letter_choice_7;
    this.a = this.a7;
    this.p = this.p7;
    this.c = this.c7;
    this.isenabled = true;
    if (button === 'button_one') {
      this.button_one = true;
      this.button_two = false;
      console.log('button_one: ' + this.button_one);
    } else if (button === 'button_two') {
      this.button_one = false;
      this.button_two = true;
      this.c_modifier = false;
      console.log('C-MODI + ' + this.c_modifier);
    }
    if (seven_letter_choice_7 === 'C' && this.button_one === true) {
      // this.p = this.p + 1;
      // this.c = this.c + 1;
      this.c_modifier = true;
      this.param_7 = 'Yes';
    } else {
      this.c_modifier = false;
      this.param_7 = '0';
    }
  }

  goToNext() {
    console.log('param_7: ' + this.param_7);
    localStorage.setItem('letter_seven', this.param_7);
    localStorage.setItem('a', this.a.toString());
    localStorage.setItem('p', this.p.toString());
    localStorage.setItem('c', this.c.toString());
    localStorage.setItem('c_modifier', String(this.c_modifier));
    console.log('C-MODI + ' + this.c_modifier);
    this.router.navigate(['result']).then().catch();
  }

  ngOnInit() {
  }

}
