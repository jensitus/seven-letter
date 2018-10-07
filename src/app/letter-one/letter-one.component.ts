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
  param_1: string;
  button_one: boolean;
  button_two: boolean;
  button_three: boolean;
  button_four: boolean;
  private currentColor: string;
  public isenabled: boolean;
  home: boolean;

  constructor(private router: Router) {
    this.currentColor = 'compression';
    this.isenabled = false;
  }

  ngOnInit() {
    this.seven_letter_choice_1 = localStorage.getItem('seven_letter_choice_1');
    this.button = localStorage.getItem('button_letter_1');
    this.setButton(this.button);
    if (this.button != null) {
      this.isenabled = true;
    } else {
      this.isenabled = false;
    }
  }

  select(seven_letter_choice_1, button) {
    console.log('letter one: ' + seven_letter_choice_1);
    this.param_1 = seven_letter_choice_1;
    this.seven_letter_choice_1 = seven_letter_choice_1;
    this.button = button;
    this.setButton(button);
    this.isenabled = true;
    localStorage.setItem('letter_one', this.param_1);
    localStorage.setItem('seven_letter_choice_1', this.seven_letter_choice_1);
    localStorage.setItem('button_letter_1', this.button);
  }

  goToNext() {
    console.log('param_1: ' + this.param_1);
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
