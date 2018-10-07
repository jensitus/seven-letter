import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-letter-seven',
  templateUrl: './letter-seven.component.html',
  styleUrls: ['./letter-seven.component.css']
})
export class LetterSevenComponent implements OnInit {
  seven_letter_choice_6: string;
  seven_letter_choice_7: string;
  button: string;
  param_7: string;
  c_modifier: string;
  button_one: boolean;
  private currentColor: string;
  button_two: boolean;
  isenabled: boolean;

  constructor(private router: Router) {
    this.seven_letter_choice_6 = localStorage.getItem('seven_letter_choice_6');
    // console.log('seven_letter_choice_6:', this.seven_letter_choice_6);
    this.button_one = false;
    this.button_two = false;
    this.c_modifier = '0';
    this.currentColor = 'c_modifier';
    this.isenabled = false;
  }

  select(seven_letter_choice_7, button) {
    this.seven_letter_choice_7 = seven_letter_choice_7;
    this.button = button;
    this.isenabled = true;
    this.setButton(this.button);
    if (seven_letter_choice_7 === 'C') { // && this.button_one === true) {
      this.c_modifier = 'yes';
      this.param_7 = 'Yes';
    } else {
      this.c_modifier = '0';
      this.param_7 = '0';
    }
    localStorage.setItem('seven_letter_choice_7', this.seven_letter_choice_7);
    localStorage.setItem('button_letter_7', this.button);
    localStorage.setItem('c_modifier', this.c_modifier);
    console.log(this.c_modifier);
  }

  goToNext() {
    this.router.navigate(['result']).then().catch();
  }

  ngOnInit() {
    this.seven_letter_choice_7 = localStorage.getItem('seven_letter_choice_7');
    this.button = localStorage.getItem('button_letter_7');
    this.setButton(this.button);
    if (this.button != null) {
      this.isenabled = true;
    } else {
      this.isenabled = false;
    }
  }

  showImages(letter) {
    this.router.navigate(['images'], {queryParams: { letter: letter }}).then().catch();
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
