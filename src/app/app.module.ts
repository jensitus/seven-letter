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
import { LetterFiveComponent } from './letter-five/letter-five.component';
import { LetterSixComponent } from './letter-six/letter-six.component';
import { LetterSevenComponent } from './letter-seven/letter-seven.component';
import { ResultComponent } from './result/result.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { ImprintComponent } from './imprint/imprint.component';
import {ModalModule} from 'ngx-bootstrap';
import { LetterNavModalComponent } from './letter-nav-modal/letter-nav-modal.component';



const app_routes: Routes = [
  { path: 'one',     component:   LetterOneComponent        },
  { path: 'home',    component:   HomeComponent             },
  { path: '',        redirectTo:  'home', pathMatch: 'full' },
  { path: 'two',     component:   LetterTwoComponent        },
  { path: 'three',   component:   LetterThreeComponent      },
  { path: 'four',    component:   LetterFourComponent       },
  { path: 'five',    component:   LetterFiveComponent       },
  { path: 'six',     component:   LetterSixComponent        },
  { path: 'seven',   component:   LetterSevenComponent      },
  { path: 'result',  component:   ResultComponent           },
  { path: 'images',  component:   ImageViewerComponent      },
  { path: 'imprint', component:   ImprintComponent          }
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LetterOneComponent,
    HomeComponent,
    LetterTwoComponent,
    LetterThreeComponent,
    LetterFourComponent,
    LetterFiveComponent,
    LetterSixComponent,
    LetterSevenComponent,
    ResultComponent,
    ImageViewerComponent,
    ImprintComponent,
    LetterNavModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(app_routes, { enableTracing: true }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AngularFontAwesomeModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
