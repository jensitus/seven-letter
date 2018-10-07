import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-letter-four',
  templateUrl: './letter-four.component.html',
  styleUrls: ['./letter-four.component.css']
})
export class LetterFourComponent implements OnInit {
  seven_letter_choice_3: string;
  seven_letter_choice_4: string;
  button: string;
  param_4: string;
  button_one: boolean;
  button_two: boolean;
  button_three: boolean;
  private currentColor: string;
  isenabled: boolean;

  constructor(private router: Router) {
    this.seven_letter_choice_3 = localStorage.getItem('seven_letter_choice_3');
    this.currentColor = 'spine';
  }

  select(seven_letter_choice_4, button) {
    console.log('letter four: ' + seven_letter_choice_4);
    this.seven_letter_choice_4 = seven_letter_choice_4;
    this.button = button;
    this.setButton(this.button);
    this.isenabled = true;
    localStorage.setItem('letter_four', this.param_4);
    localStorage.setItem('seven_letter_choice_4', this.seven_letter_choice_4);
    localStorage.setItem('button_letter_4', this.button);
  }

  goToNext() {
    console.log('param_4: ' + this.param_4);
    this.router.navigate(['five']).then().catch();
  }

  ngOnInit() {
    this.seven_letter_choice_4 = localStorage.getItem('seven_letter_choice_4');
    this.button = localStorage.getItem('button_letter_4');
    this.param_4 = this.seven_letter_choice_4;
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
