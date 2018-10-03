import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-letter-one',
  templateUrl: './letter-one.component.html',
  styleUrls: ['./letter-one.component.css']
})
export class LetterOneComponent implements OnInit {

  seven_letter_choice_1: string;
  button: string;
  p: number;
  a: number;
  c: number;
  param_1: string;
  button_one: boolean;
  button_two: boolean;
  button_three: boolean;
  button_four: boolean;
  private currentColor: string;
  public isenabled: boolean;

  constructor(private router: Router) {
    this.a = 0;
    this.p = 0;
    this.c = 0;
    this.currentColor = 'compression';
    this.isenabled = false;
  }

  ngOnInit() {
    this.seven_letter_choice_1 = localStorage.getItem('seven_letter_choice_1');
    this.button = localStorage.getItem('button_letter_1');
    this.setButton(this.button);
  }

  select(seven_letter_choice_1, button) {
    console.log('letter one: ' + seven_letter_choice_1);
    this.param_1 = seven_letter_choice_1;
    this.button = button;
    this.a = 0;
    this.p = 0;
    this.c = 0;
    if (seven_letter_choice_1 === 'A') {
      this.a = this.a + 1;
    } else if (seven_letter_choice_1 === 'P') {
      this.p = this.p + 1;
    } else if (seven_letter_choice_1 === 'P/C') {
      this.c = this.c + 1;
      this.p = this.p + 1;
    }
    this.setButton(button);
    this.isenabled = true;
    console.log('this.a: ' + this.a);
    console.log('this.p: ' + this.p);
    console.log('this.c: ' + this.c);
    console.log('disabled ' + this.isenabled);
  }

  goToNext() {
    console.log('param_1: ' + this.param_1);
    localStorage.setItem('letter_one', this.param_1);
    localStorage.setItem('seven_letter_choice_1', this.param_1);
    localStorage.setItem('button_letter_1', this.button);
    localStorage.setItem('a', this.a.toString());
    localStorage.setItem('p', this.p.toString());
    localStorage.setItem('c', this.c.toString());
    localStorage.setItem('a1', this.a.toString());
    localStorage.setItem('p1', this.p.toString());
    localStorage.setItem('c1', this.c.toString());
    this.router.navigate(['two']);
  }

  showImages(letter) {
    this.router.navigate(['images'], {queryParams: {letter: letter}}).then((success) =>
      console.log(success)
    ).catch((error) =>
      console.log(error)
    );
  }

  private setButton(button) {
    if (button === 'button_one') {
      this.button_one = true;
      this.button_two = false;
      this.button_three = false;
      this.button_four = false;
    } else if (button === 'button_two') {
      this.button_one = false;
      this.button_two = true;
      this.button_three = false;
      this.button_four = false;
    } else if (button === 'button_three') {
      this.button_one = false;
      this.button_two = false;
      this.button_three = true;
      this.button_four = false;
    } else if (button === 'button_four') {
      this.button_one = false;
      this.button_two = false;
      this.button_three = false;
      this.button_four = true;
    }
  }

}
