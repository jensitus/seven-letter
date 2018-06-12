import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() public title: string;
  @Input() public bg: string;

  navback: string;
  navbar_title: string;

  constructor(private location: Location) {
    this.navback = 'light';
    this.navbar_title = '7 L C';
    // this.navback = localStorage.getItem('navback');
    // this.navbar_title = localStorage.getItem('navbar_title');
  }

  backClick() {
    this.location.back();
  }

  ngOnInit() {
  }

}
