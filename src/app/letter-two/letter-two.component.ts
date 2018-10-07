import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-letter-two',
  templateUrl: './letter-two.component.html',
  styleUrls: ['./letter-two.component.css']
})
export class LetterTwoComponent implements OnInit {

  seven_letter_choice_1: string;
  seven_letter_choice_2: string;
  param_2: string;
  button: string;
  button_one: boolean;
  button_two: boolean;
  button_three: boolean;
  private currentColor: string;
  isenabled: boolean;

  constructor(private router: Router) {
    this.seven_letter_choice_1 = localStorage.getItem('seven_letter_choice_1');
    this.currentColor = 'compression';
    console.log('P1: ' + this.seven_letter_choice_1);
    // console.log('this.a2' + this.a1);
    // console.log(typeof this.a1);
  }

  select(seven_letter_choice_2, button) {
    this.param_2 = seven_letter_choice_2;
    this.seven_letter_choice_2 = seven_letter_choice_2;
    console.log('param_2: ' + this.param_2);
    this.button = button;
    this.setButton(this.button);
    this.isenabled = true;
    localStorage.setItem('letter_two', this.param_2);
    localStorage.setItem('seven_letter_choice_2', this.seven_letter_choice_2);
    localStorage.setItem('button_letter_2', this.button);
  }

  goToNext() {
    this.router.navigate(['three']).then().catch();
  }

  ngOnInit() {
    this.seven_letter_choice_2 = localStorage.getItem('seven_letter_choice_2');
    this.button = localStorage.getItem('button_letter_2');
    console.log('choice2: ' + this.seven_letter_choice_2);
    console.log('this.button: ' + this.button);
    this.setButton(this.button);
    if (this.button != null) {
      this.isenabled = true;
    } else {
      this.isenabled = false;
    }
  }

  private setButton(button) {
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
