import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-letter-five',
  templateUrl: './letter-five.component.html',
  styleUrls: ['./letter-five.component.css']
})
export class LetterFiveComponent implements OnInit {
  seven_letter_choice_4: string;
  param_5: string;
  a: number;
  p: number;
  c: number;
  a4: number;
  p4: number;
  c4: number;
  a5: number;
  p5: number;
  c5: number;
  button_one: boolean;
  button_two: boolean;
  private currentColor: string;
  isenabled: boolean;

  constructor(private router: Router) {
    this.seven_letter_choice_4 = localStorage.getItem('seven_letter_choice_4');
    console.log('seven_letter_choice_4:', this.seven_letter_choice_4);
    this.a4 = Number(localStorage.getItem('a'));
    this.p4 = Number(localStorage.getItem('p'));
    this.c4 = Number(localStorage.getItem('c'));
    this.a = this.a4;
    this.p = this.p4;
    this.c = this.c4;
    this.currentColor = 'morbidity';
    this.isenabled = false;
  }

  select(seven_letter_choice_5, button) {
    console.log('letter five: ' + seven_letter_choice_5);
    this.param_5 = seven_letter_choice_5;
    this.a = this.a4;
    this.p = this.p4;
    this.c = this.c4;
    if (seven_letter_choice_5 === 'A / P') {
      this.a = this.a + 0.5;
      this.p = this.p + 0.5;
    } else if (seven_letter_choice_5 === 'P') {
      this.p = this.p + 1;
    }
    if (button === 'button_one') {
      this.button_one = true;
      this.button_two = false;
    } else if (button === 'button_two') {
      this.button_one = false;
      this.button_two = true;
    }
    this.isenabled = true;
  }

  goToNext() {
    console.log('param_5: ' + this.param_5);
    localStorage.setItem('letter_five', this.param_5);
    localStorage.setItem('seven_letter_choice_5', this.param_5);
    localStorage.setItem('a', this.a.toString());
    localStorage.setItem('p', this.p.toString());
    localStorage.setItem('c', this.c.toString());
    localStorage.setItem('a5', this.a5.toString());
    localStorage.setItem('p5', this.p5.toString());
    localStorage.setItem('c5', this.c5.toString());
    this.router.navigate(['six']);
  }

  ngOnInit() {
  }

}