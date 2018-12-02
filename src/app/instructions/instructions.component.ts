import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  instructionImageUrls;

  constructor() { }

  ngOnInit() {

    this.instructionImageUrls = [
      {
        image: '../assets/imgs/chrome-7lc.png',
        title: 'Chrome',
        instructions: 'click on Add seven-letter-Code to Home screen'
      },
      {
        image: '../assets/imgs/ff-7lc.png',
        title: 'Firefox',
        instructions: 'click on the small house icon and then add to your Home screen'
      }
    ];

  }

}
