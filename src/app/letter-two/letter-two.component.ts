import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-letter-two',
  templateUrl: './letter-two.component.html',
  styleUrls: ['./letter-two.component.css']
})
export class LetterTwoComponent implements OnInit {

  seven_letter_choice_1: String;
  param_2: string;
  a: number;
  p: number;
  c: number;
  a2: number;
  p2: number;
  c2: number;
  button_one: boolean;
  button_two: boolean;
  button_three: boolean;
  private currentColor: string;
  private isenabled: boolean;

  constructor(private router: Router) {
    this.seven_letter_choice_1 = localStorage.getItem('seven_letter_choice_1');
    this.a2 = Number(localStorage.getItem('a'));
    this.p2 = Number(localStorage.getItem('p'));
    this.c2 = Number(localStorage.getItem('c'));
    this.a = this.a2;
    this.p = this.p2;
    this.c = this.c2;
    this.currentColor = 'compression';
    this.isenabled = false;
    console.log('P1: ' + this.seven_letter_choice_1);
    console.log('this.a2' + this.a2);
    console.log(typeof this.a2);
  }

  select(seven_letter_choice_2, button) {
    this.param_2 = seven_letter_choice_2;
    console.log('param_2: ' + this.param_2);
    this.a = this.a2;
    this.p = this.p2;
    this.c = this.c2;
    if (seven_letter_choice_2 === 'A') {
      this.a = this.a + 1;
    } else if (seven_letter_choice_2 === 'P') {
      this.p = this.p + 1;
    } else if (seven_letter_choice_2 === 'A / P') {
      this.a = this.a + 0.5;
      this.p = this.p + 0.5;
    }
    if (button === 'button_one') {
      this.button_one = true;
      this.button_two = false;
      this.button_three = false;
    } else if (button === 'button_two') {
      this.button_one = false;
      this.button_two = true;
      this.button_three = false;
    } else if (button === 'button_three') {
      this.button_one = false;
      this.button_two = false;
      this.button_three = true;
    }
    this.isenabled = true;
    console.log('this.a - 2: ' + this.a);
    console.log('this.p - 2: ' + this.p);
    console.log('this.c - 2: ' + this.c);
  }

  goToNext() {
    localStorage.setItem('seven_letter_choice_2', this.param_2);
    localStorage.setItem('a', this.a.toString());
    localStorage.setItem('p', this.p.toString());
    localStorage.setItem('c', this.c.toString());
    this.router.navigate(['three']).then().catch();
  }

  ngOnInit() {
  }

}
