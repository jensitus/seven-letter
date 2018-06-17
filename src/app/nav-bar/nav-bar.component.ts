import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

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

  constructor(private location: Location, private router: Router) {

    // this.navback = localStorage.getItem('navback');
    // this.navbar_title = localStorage.getItem('navbar_title');
  }

  backClick() {
    this.location.back();
  }

  homeClick() {
    this.router.navigate(['home']).then().catch();
  }

  ngOnInit() {
    this.navback = 'light';
    this.navbar_title = '7 L C';
  }

}
