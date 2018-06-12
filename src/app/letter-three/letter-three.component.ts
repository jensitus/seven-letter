import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-letter-three',
  templateUrl: './letter-three.component.html',
  styleUrls: ['./letter-three.component.css']
})
export class LetterThreeComponent implements OnInit {

  seven_letter_choice_2: string;
  param_3: string;
  a: number;
  p: number;
  c: number;
  a2: number;
  p2: number;
  c2: number;
  a3: number;
  p3: number;
  c3: number;
  button_one: boolean;
  button_two: boolean;
  button_three: boolean;
  private currentColor: string;
  isenabled: boolean;

  constructor(private router: Router) {
    this.seven_letter_choice_2 = localStorage.getItem('seven_letter_choice_2');
    console.log('P2:', this.seven_letter_choice_2);
    this.a2 = Number(localStorage.getItem('a2'));
    this.p2 = Number(localStorage.getItem('p2'));
    this.c2 = Number(localStorage.getItem('c2'));
    this.a = this.a2;
    this.p = this.p2;
    this.c = this.c2;
    this.currentColor = 'spine';
    this.isenabled = false;
  }

  select(seven_letter_choice_3, button) {
    console.log('letter three: ' + seven_letter_choice_3);
    this.param_3 = seven_letter_choice_3;
    this.a = this.a2;
    this.p = this.p2;
    this.c = this.c2;
    if (seven_letter_choice_3 === 'A / P') {
      this.a = this.a + 0.5;
      this.p = this.p + 0.5;
    } else if (seven_letter_choice_3 === 'A / C') {
      this.a = this.a + 1;
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
    this.a3 = this.a;
    this.c3 = this.c;
    this.p3 = this.p;
    console.log('this.a - 3: ' + this.a);
    console.log('this.p - 3: ' + this.p);
    console.log('this.c - 3: ' + this.c);
  }

  goToNext() {
    console.log('param_3: ' + this.param_3);
    localStorage.setItem('letter_three', this.param_3);
    localStorage.setItem('seven_letter_choice_3', this.param_3);
    localStorage.setItem('a', this.a.toString());
    localStorage.setItem('p', this.p.toString());
    localStorage.setItem('c', this.c.toString());
    localStorage.setItem('a3', this.a3.toString());
    localStorage.setItem('p3', this.p3.toString());
    localStorage.setItem('c3', this.c3.toString());
    this.router.navigate(['four']).then();
  }

  ngOnInit() {
  }

}
