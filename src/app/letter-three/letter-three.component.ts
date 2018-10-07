import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-letter-three',
  templateUrl: './letter-three.component.html',
  styleUrls: ['./letter-three.component.css']
})
export class LetterThreeComponent implements OnInit {

  seven_letter_choice_2: string;
  seven_letter_choice_3: string;
  button: string;
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
    this.currentColor = 'spine';
    this.isenabled = false;
  }

  select(seven_letter_choice_3, button) {
    console.log('letter three: ' + seven_letter_choice_3);
    this.param_3 = seven_letter_choice_3;
    this.seven_letter_choice_3 = seven_letter_choice_3;
    this.button = button;
    this.setButton(this.button);
    this.isenabled = true;
    localStorage.setItem('letter_three', this.param_3);
    localStorage.setItem('seven_letter_choice_3', this.seven_letter_choice_3);
    localStorage.setItem('button_letter_3', this.button);
  }

  goToNext() {
    console.log('param_3: ' + this.param_3);
    this.router.navigate(['four']).then();
  }

  ngOnInit() {
    this.seven_letter_choice_3 = localStorage.getItem('seven_letter_choice_3');
    this.button = localStorage.getItem('button_letter_3');
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
  }

}
