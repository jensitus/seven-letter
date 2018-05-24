import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LetterOneComponent } from './letter-one/letter-one.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LetterTwoComponent } from './letter-two/letter-two.component';
import { LetterThreeComponent } from './letter-three/letter-three.component';
import { LetterFourComponent } from './letter-four/letter-four.component';

const app_routes: Routes = [
  { path: 'one',   component: LetterOneComponent },
  { path: 'home',  component: HomeComponent },
  { path: '',      redirectTo: 'home', pathMatch: 'full' },
  { path: 'two',   component: LetterTwoComponent },
  { path: 'three', component: LetterThreeComponent },
  { path: 'four',  component: LetterFourComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LetterOneComponent,
    HomeComponent,
    LetterTwoComponent,
    LetterThreeComponent,
    LetterFourComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(app_routes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
