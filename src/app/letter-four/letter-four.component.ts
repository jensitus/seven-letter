import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

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
  a3: number;
  p3: number;
  c3: number;
  a4: number;
  p4: number;
  c4: number;
  button_one: boolean;
  button_two: boolean;
  button_three: boolean;
  private currentColor: string;
  isenabled: boolean;

  constructor(private router: Router) {
    this.seven_letter_choice_3 = localStorage.getItem('seven_letter_choice_3');
    this.a3 = Number(localStorage.getItem('a3'));
    this.p3 = Number(localStorage.getItem('p3'));
    this.c3 = Number(localStorage.getItem('c3'));
    this.a = this.a3;
    this.p = this.p3;
    this.c = this.c3;
    this.currentColor = 'spine';
    this.isenabled = false;
  }

  select(seven_letter_choice_4, button) {
    console.log('letter four: ' + seven_letter_choice_4);
    this.param_4 = seven_letter_choice_4;
    this.a = this.a3;
    this.p = this.p3;
    this.c = this.c3;
    if (seven_letter_choice_4 === 'A / P') {
      this.a = this.a + 0.5;
      this.p = this.p + 0.5;
    } else if (seven_letter_choice_4 === 'C') {
      this.c = this.c + 1;
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
    this.a4 = this.a;
    this.c4 = this.c;
    this.p4 = this.p;
  }

  goToNext() {
    console.log('param_4: ' + this.param_4);
    localStorage.setItem('letter_four', this.param_4);
    localStorage.setItem('seven_letter_choice_4', this.param_4);
    localStorage.setItem('a', this.a.toString());
    localStorage.setItem('p', this.p.toString());
    localStorage.setItem('c', this.c.toString());
    localStorage.setItem('a4', this.a4.toString());
    localStorage.setItem('p4', this.p4.toString());
    localStorage.setItem('c4', this.c4.toString());
    this.router.navigate(['five']).then().catch();
  }

  ngOnInit() {
  }

}
