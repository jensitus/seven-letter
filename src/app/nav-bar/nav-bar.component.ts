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
  @Input() public home: string;

  constructor(private location: Location, private router: Router) {
  }

  backClick() {
    console.log(this.location);
    this.location.back();
  }

  homeClick() {
    this.router.navigate(['home']).then().catch();
  }

  imprint() {
    this.router.navigate(['imprint']).then().catch();
  }

  ngOnInit() {
    console.log(this.home);
    console.log(typeof this.home);
  }

}
