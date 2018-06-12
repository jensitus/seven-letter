(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = '7 Letter Code';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _letter_one_letter_one_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./letter-one/letter-one.component */ "./src/app/letter-one/letter-one.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _letter_two_letter_two_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./letter-two/letter-two.component */ "./src/app/letter-two/letter-two.component.ts");
/* harmony import */ var _letter_three_letter_three_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./letter-three/letter-three.component */ "./src/app/letter-three/letter-three.component.ts");
/* harmony import */ var _letter_four_letter_four_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./letter-four/letter-four.component */ "./src/app/letter-four/letter-four.component.ts");
/* harmony import */ var _letter_five_letter_five_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./letter-five/letter-five.component */ "./src/app/letter-five/letter-five.component.ts");
/* harmony import */ var _letter_six_letter_six_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./letter-six/letter-six.component */ "./src/app/letter-six/letter-six.component.ts");
/* harmony import */ var _letter_seven_letter_seven_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./letter-seven/letter-seven.component */ "./src/app/letter-seven/letter-seven.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./result/result.component */ "./src/app/result/result.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var app_routes = [
    { path: 'one', component: _letter_one_letter_one_component__WEBPACK_IMPORTED_MODULE_4__["LetterOneComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'two', component: _letter_two_letter_two_component__WEBPACK_IMPORTED_MODULE_7__["LetterTwoComponent"] },
    { path: 'three', component: _letter_three_letter_three_component__WEBPACK_IMPORTED_MODULE_8__["LetterThreeComponent"] },
    { path: 'four', component: _letter_four_letter_four_component__WEBPACK_IMPORTED_MODULE_9__["LetterFourComponent"] },
    { path: 'five', component: _letter_five_letter_five_component__WEBPACK_IMPORTED_MODULE_10__["LetterFiveComponent"] },
    { path: 'six', component: _letter_six_letter_six_component__WEBPACK_IMPORTED_MODULE_11__["LetterSixComponent"] },
    { path: 'seven', component: _letter_seven_letter_seven_component__WEBPACK_IMPORTED_MODULE_12__["LetterSevenComponent"] },
    { path: 'result', component: _result_result_component__WEBPACK_IMPORTED_MODULE_13__["ResultComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
                _letter_one_letter_one_component__WEBPACK_IMPORTED_MODULE_4__["LetterOneComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _letter_two_letter_two_component__WEBPACK_IMPORTED_MODULE_7__["LetterTwoComponent"],
                _letter_three_letter_three_component__WEBPACK_IMPORTED_MODULE_8__["LetterThreeComponent"],
                _letter_four_letter_four_component__WEBPACK_IMPORTED_MODULE_9__["LetterFourComponent"],
                _letter_five_letter_five_component__WEBPACK_IMPORTED_MODULE_10__["LetterFiveComponent"],
                _letter_six_letter_six_component__WEBPACK_IMPORTED_MODULE_11__["LetterSixComponent"],
                _letter_seven_letter_seven_component__WEBPACK_IMPORTED_MODULE_12__["LetterSevenComponent"],
                _result_result_component__WEBPACK_IMPORTED_MODULE_13__["ResultComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(app_routes, { enableTracing: true }),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].production })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar title=\"7 L C\"></app-nav-bar>\n<div class=\"container\">\n  <p>\n    Welcome to 7 Letter Code\n  </p>\n  <div><button class=\"btn btn-outline-warning\" (click)=\"letsBeginn()\">beginn</button> </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.letsBeginn = function () {
        this.router.navigate(['/one']);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/letter-five/letter-five.component.css":
/*!*******************************************************!*\
  !*** ./src/app/letter-five/letter-five.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intermediate_result {\n  padding: 8px;\n  background: #ffffff;\n  font-size: 10px;\n}\n\n.one_header {\n  padding: 15px;\n  font-weight: bold;\n  font-size: 18px;\n}\n"

/***/ }),

/***/ "./src/app/letter-five/letter-five.component.html":
/*!********************************************************!*\
  !*** ./src/app/letter-five/letter-five.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar title=\"Morbidity\" bg=\"danger\"></app-nav-bar>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"card mt-2\">\n        <div class=\"card-header morb_header\">\n          5 ASA\n        </div>\n      </div>\n      <div class=\"card mt-2\">\n\n        <button (click)=\"select('A / P', 'button_one')\" class=\"btn btn-outline-danger\">\n          <div class=\"row\">\n            <div class=\"col\">\n              ASA &le; 3\n            </div>\n            <div class=\"col\">\n              <div *ngIf=\"button_one == true\"><b>:</b></div>\n            </div>\n          </div>\n\n        </button>\n      </div>\n      <div class=\"card mt-2\">\n\n        <button (click)=\"select('P', 'button_two')\" class=\"btn btn-outline-danger\">\n          <div class=\"row\">\n            <div class=\"col\">\n              ASA > 3\n            </div>\n            <div class=\"col\">\n              <div *ngIf=\"button_two == true\"><b>:</b></div>\n            </div>\n          </div>\n        </button>\n      </div>\n\n      <div class=\"card mt-2\">\n        <div class=\"row\">\n          <div class=\"col-3 center text-left\">\n            <button class=\"btn btn-outline-danger\" (click)=\"goToNext()\" [disabled]=\"!isenabled\">Next</button>\n          </div>\n          <div class=\"col-6 center text-center\">\n            <div class=\"card intermediate_result\">\n              <div class=\"row\">\n                <div class=\"col center text-center\">\n                  A: {{a}}\n                </div>\n                <div class=\"col center text-center\">\n                  P: {{p}}\n                </div>\n                <div class=\"col center text-center\">\n                  C: {{c}}\n                </div>\n              </div>\n\n            </div>\n          </div>\n          <div class=\"col center text-right\">\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/letter-five/letter-five.component.ts":
/*!******************************************************!*\
  !*** ./src/app/letter-five/letter-five.component.ts ***!
  \******************************************************/
/*! exports provided: LetterFiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterFiveComponent", function() { return LetterFiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LetterFiveComponent = /** @class */ (function () {
    function LetterFiveComponent(router) {
        this.router = router;
        this.seven_letter_choice_4 = localStorage.getItem('seven_letter_choice_4');
        console.log('seven_letter_choice_4:', this.seven_letter_choice_4);
        this.a5 = Number(localStorage.getItem('a'));
        this.p5 = Number(localStorage.getItem('p'));
        this.c5 = Number(localStorage.getItem('c'));
        this.a = this.a5;
        this.p = this.p5;
        this.c = this.c5;
        this.currentColor = 'morbidity';
        this.isenabled = false;
    }
    LetterFiveComponent.prototype.select = function (seven_letter_choice_5, button) {
        console.log('letter five: ' + seven_letter_choice_5);
        this.param_5 = seven_letter_choice_5;
        this.a = this.a5;
        this.p = this.p5;
        this.c = this.c5;
        if (seven_letter_choice_5 == 'A / P') {
            this.a = this.a + 0.5;
            this.p = this.p + 0.5;
        }
        else if (seven_letter_choice_5 == 'P') {
            this.p = this.p + 1;
        }
        if (button == 'button_one') {
            this.button_one = true;
            this.button_two = false;
        }
        else if (button == 'button_two') {
            this.button_one = false;
            this.button_two = true;
        }
        this.isenabled = true;
    };
    LetterFiveComponent.prototype.goToNext = function () {
        console.log('param_5: ' + this.param_5);
        localStorage.setItem('letter_five', this.param_5);
        localStorage.setItem('seven_letter_choice_5', this.param_5);
        localStorage.setItem('a', this.a.toString());
        localStorage.setItem('p', this.p.toString());
        localStorage.setItem('c', this.c.toString());
        this.router.navigate(['six']);
    };
    LetterFiveComponent.prototype.ngOnInit = function () {
    };
    LetterFiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-letter-five',
            template: __webpack_require__(/*! ./letter-five.component.html */ "./src/app/letter-five/letter-five.component.html"),
            styles: [__webpack_require__(/*! ./letter-five.component.css */ "./src/app/letter-five/letter-five.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LetterFiveComponent);
    return LetterFiveComponent;
}());



/***/ }),

/***/ "./src/app/letter-four/letter-four.component.css":
/*!*******************************************************!*\
  !*** ./src/app/letter-four/letter-four.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intermediate_result {\n  padding: 8px;\n  background: #ffffff;\n  font-size: 10px;\n}\n\n.one_header {\n  padding: 15px;\n  font-weight: bold;\n  font-size: 18px;\n}\n"

/***/ }),

/***/ "./src/app/letter-four/letter-four.component.html":
/*!********************************************************!*\
  !*** ./src/app/letter-four/letter-four.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar title=\"Spine\" bg=\"warning\"></app-nav-bar>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"card mt-2\">\n        <div class=\"one_header\">\n          4 Instability\n        </div>\n      </div>\n      <div class=\"card mt-2\">\n\n        <button (click)=\"select('A / P', 'button_one')\" class=\"btn btn-outline-warning\">\n          <div class=\"row\">\n            <div class=\"col\">\n              < 6 mm\n            </div>\n            <div class=\"col\">\n              <div *ngIf=\"button_one == true\"><b>:</b></div>\n            </div>\n          </div>\n        </button>\n      </div>\n      <div class=\"card mt-2\">\n        <button (click)=\"select('C', 'button_two')\" class=\"btn btn-outline-warning\">\n          <div class=\"row\">\n            <div class=\"col\">\n              > 6 mm\n            </div>\n            <div class=\"col\">\n              <div *ngIf=\"button_two == true\"><b>:</b></div>\n            </div>\n          </div>\n        </button>\n      </div>\n\n      <div class=\"card mt-2\">\n        <div class=\"row\">\n          <div class=\"col-3 center text-left\">\n            <button class=\"btn btn-outline-warning\" (click)=\"goToNext()\" [disabled]=\"!isenabled\">Next</button>\n          </div>\n          <div class=\"col-6 center text-center\">\n            <div class=\"card intermediate_result\">\n              <div class=\"row\">\n                <div class=\"col center text-center\">\n                  A: {{a}}\n                </div>\n                <div class=\"col center text-center\">\n                  P: {{p}}\n                </div>\n                <div class=\"col center text-center\">\n                  C: {{c}}\n                </div>\n              </div>\n\n            </div>\n          </div>\n          <div class=\"col-2 center text-right\">\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/letter-four/letter-four.component.ts":
/*!******************************************************!*\
  !*** ./src/app/letter-four/letter-four.component.ts ***!
  \******************************************************/
/*! exports provided: LetterFourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterFourComponent", function() { return LetterFourComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LetterFourComponent = /** @class */ (function () {
    function LetterFourComponent(router) {
        this.router = router;
        this.seven_letter_choice_3 = localStorage.getItem('seven_letter_choice_3');
        this.a4 = Number(localStorage.getItem('a'));
        this.p4 = Number(localStorage.getItem('p'));
        this.c4 = Number(localStorage.getItem('c'));
        this.a = this.a4;
        this.p = this.p4;
        this.c = this.c4;
        this.currentColor = 'spine';
        this.isenabled = false;
    }
    LetterFourComponent.prototype.select = function (seven_letter_choice_4, button) {
        console.log('letter four: ' + seven_letter_choice_4);
        this.param_4 = seven_letter_choice_4;
        this.a = this.a4;
        this.p = this.p4;
        this.c = this.c4;
        if (seven_letter_choice_4 === 'A / P') {
            this.a = this.a + 0.5;
            this.p = this.p + 0.5;
        }
        else if (seven_letter_choice_4 === 'C') {
            this.c = this.c + 1;
        }
        if (button === 'button_one') {
            this.button_one = true;
            this.button_two = false;
        }
        else if (button === 'button_two') {
            this.button_one = false;
            this.button_two = true;
        }
        this.isenabled = true;
    };
    LetterFourComponent.prototype.goToNext = function () {
        console.log('param_4: ' + this.param_4);
        localStorage.setItem('letter_four', this.param_4);
        localStorage.setItem('seven_letter_choice_4', this.param_4);
        localStorage.setItem('a', this.a.toString());
        localStorage.setItem('p', this.p.toString());
        localStorage.setItem('c', this.c.toString());
        this.router.navigate(['five']).then().catch();
    };
    LetterFourComponent.prototype.ngOnInit = function () {
    };
    LetterFourComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-letter-four',
            template: __webpack_require__(/*! ./letter-four.component.html */ "./src/app/letter-four/letter-four.component.html"),
            styles: [__webpack_require__(/*! ./letter-four.component.css */ "./src/app/letter-four/letter-four.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LetterFourComponent);
    return LetterFourComponent;
}());



/***/ }),

/***/ "./src/app/letter-one/letter-one.component.css":
/*!*****************************************************!*\
  !*** ./src/app/letter-one/letter-one.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.one_header {\n  padding: 15px;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.comp_a_button {\n  padding: 8px;\n  background: #cccccc;\n}\n\n.comp_p_button {\n  padding: 8px;\n  background: #dddddd;\n}\n\n.comp_c_button {\n  padding: 8px;\n  background: #eeeeee;\n}\n\n.intermediate_result {\n  padding: 8px;\n  background: #ffffff;\n  font-size: 10px;\n}\n\n.tabs-md .tabbar {\n  background: #000;\n}\n\n/*// all tabs texts*/\n\n.tabs-md .tab-button-text {\n     font-size: 14px;\n     color: #fff;\n   }\n\n/*// selected tab*/\n\n.tabs-md .tab-button {\n     background-color: #fff;\n   }\n\n"

/***/ }),

/***/ "./src/app/letter-one/letter-one.component.html":
/*!******************************************************!*\
  !*** ./src/app/letter-one/letter-one.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar title=\"Compression\" bg=\"secondary\"></app-nav-bar>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n\n      <div class=\"card mt-2\">\n        <div class=\"one_header bg-outline-secondary\">\n          1 Location\n        </div>\n      </div>\n\n      <div class=\"card mt-2\">\n        <button (click)=\"select('A', 'button_one')\" class=\"btn btn-outline-secondary\">\n          <div class=\"row\">\n            <div class=\"col\">\n              Ant -> hill type / flat 1-2\n            </div>\n            <div class=\"col\">\n              <div name=\"checkmark-circle\" float-end *ngIf=\"button_one == true\"><b>:</b></div>\n            </div>\n          </div>\n        </button>\n      </div>\n      <div class=\"card mt-2\">\n        <button (click)=\"select('P', 'button_two')\" class=\"btn btn-outline-secondary\">\n          <div class=\"row\">\n            <div class=\"col\">\n              Ant -> flat 3\n            </div>\n            <div class=\"col\">\n              <div *ngIf=\"button_two == true\"><b>:</b></div>\n            </div>\n          </div>\n        </button>\n      </div>\n      <div class=\"card mt-2\">\n        <button (click)=\"select('P', 'button_three')\" class=\"btn btn-outline-secondary\">\n          <div class=\"row\">\n            <div class=\"col\">\n              Post\n            </div>\n            <div class=\"col\">\n              <div *ngIf=\"button_three == true\"><b>:</b></div>\n            </div>\n          </div>\n        </button>\n      </div>\n      <div class=\"card mt-2\">\n        <button (click)=\"select('P/C', 'button_four')\" class=\"btn btn-outline-secondary\">\n          <div class=\"row\">\n            <div class=\"col\">\n              Post\n            </div>\n            <div class=\"col\">\n              <div *ngIf=\"button_four == true\"><b>:</b></div>\n            </div>\n          </div>\n        </button>\n      </div>\n\n      <div class=\"card mt-2\">\n        <div class=\"row\">\n          <div class=\"col-2\">\n            <button class=\"btn btn-sm btn-outline-dark\" (click)=\"goToNext()\" [disabled]=\"!isenabled\">Next</button>\n          </div>\n          <div class=\"col-7\">\n            <div class=\"card intermediate_result\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  A: {{a}}\n                </div>\n                <div class=\"col\">\n                  P: {{p}}\n                </div>\n                <div class=\"col\">\n                  C: {{c}}\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-3 text-right\">\n            <button class=\"btn btn-sm btn-outline-dark\" (click)=\"presentModal()\" outline>Picture</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/letter-one/letter-one.component.ts":
/*!****************************************************!*\
  !*** ./src/app/letter-one/letter-one.component.ts ***!
  \****************************************************/
/*! exports provided: LetterOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterOneComponent", function() { return LetterOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LetterOneComponent = /** @class */ (function () {
    function LetterOneComponent(router) {
        this.router = router;
        this.a = 0;
        this.p = 0;
        this.c = 0;
        this.currentColor = 'compression';
        this.isenabled = false;
    }
    LetterOneComponent.prototype.ngOnInit = function () {
    };
    LetterOneComponent.prototype.select = function (seven_letter_choice_1, button) {
        console.log('letter one: ' + seven_letter_choice_1);
        this.param_1 = seven_letter_choice_1;
        this.a = 0;
        this.p = 0;
        this.c = 0;
        if (seven_letter_choice_1 == 'A') {
            this.a = this.a + 1;
        }
        else if (seven_letter_choice_1 == 'P') {
            this.p = this.p + 1;
        }
        else if (seven_letter_choice_1 == 'P/C') {
            this.c = this.c + 1;
            this.p = this.p + 1;
        }
        if (button == 'button_one') {
            this.button_one = true;
            this.button_two = false;
            this.button_three = false;
            this.button_four = false;
        }
        else if (button == 'button_two') {
            this.button_one = false;
            this.button_two = true;
            this.button_three = false;
            this.button_four = false;
        }
        else if (button == 'button_three') {
            this.button_one = false;
            this.button_two = false;
            this.button_three = true;
            this.button_four = false;
        }
        else if (button == 'button_four') {
            this.button_one = false;
            this.button_two = false;
            this.button_three = false;
            this.button_four = true;
        }
        this.isenabled = true;
        console.log('this.a: ' + this.a);
        console.log('this.p: ' + this.p);
        console.log('this.c: ' + this.c);
        console.log('disabled ' + this.isenabled);
    };
    LetterOneComponent.prototype.goToNext = function () {
        console.log('param_1: ' + this.param_1);
        localStorage.setItem('letter_one', this.param_1);
        localStorage.setItem('seven_letter_choice_1', this.param_1);
        localStorage.setItem('a', this.a.toString());
        localStorage.setItem('p', this.p.toString());
        localStorage.setItem('c', this.c.toString());
        this.router.navigate(['two']);
    };
    LetterOneComponent.prototype.presentModal = function () {
        // const modal = this.modalCtrl.create(InfoPicturePage);
        // modal.present().then((result) =>
        //   console.log(result)
        // ).catch((error) =>
        //   console.log(error)
        // );
    };
    LetterOneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-letter-one',
            template: __webpack_require__(/*! ./letter-one.component.html */ "./src/app/letter-one/letter-one.component.html"),
            styles: [__webpack_require__(/*! ./letter-one.component.css */ "./src/app/letter-one/letter-one.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LetterOneComponent);
    return LetterOneComponent;
}());



/***/ }),

/***/ "./src/app/letter-seven/letter-seven.component.css":
/*!*********************************************************!*\
  !*** ./src/app/letter-seven/letter-seven.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intermediate_result {\n  padding: 8px;\n  background: #ffffff;\n  font-size: 10px;\n}\n\n.one_header {\n  padding: 15px;\n  font-weight: bold;\n  font-size: 18px;\n}\n"

/***/ }),

/***/ "./src/app/letter-seven/letter-seven.component.html":
/*!**********************************************************!*\
  !*** ./src/app/letter-seven/letter-seven.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar title=\"C-Modifier\" bg=\"primary\"></app-nav-bar>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"card mt-2\">\n        <div class=\"card-header morb_header\">\n          7 C-Modifier\n        </div>\n      </div>\n      <div class=\"card mt-2\">\n\n        <button (click)=\"select('C', 'button_one')\" class=\"btn btn-outline-primary\">\n          <div class=\"row\">\n            <div class=\"col\">\n              K-line neg. type of compression<br>\n              Corpectomy &ge; 2 level\n            </div>\n            <div class=\"col\">\n              <div *ngIf=\"button_one == true\"><b>:</b></div>\n            </div>\n          </div>\n\n        </button>\n      </div>\n      <div class=\"card mt-2\">\n\n        <button (click)=\"select('0', 'button_two')\" class=\"btn btn-outline-primary\">\n          <div class=\"row\">\n            <div class=\"col\">\n              no C-Modifier\n            </div>\n            <div class=\"col\">\n              <div *ngIf=\"button_two == true\"><b>:</b></div>\n            </div>\n          </div>\n        </button>\n      </div>\n\n      <div class=\"card mt-2\">\n        <div class=\"row\">\n          <div class=\"col-3 text-left\">\n            <button class=\"btn btn-outline-primary\" (click)=\"goToNext()\" [disabled]=\"!isenabled\">Next</button>\n          </div>\n          <div class=\"col-6 text-center\">\n            <div class=\"card intermediate_result\">\n              <div class=\"row\">\n                <div class=\"col center text-center\">\n                  A: {{a}}\n                </div>\n                <div class=\"col center text-center\">\n                  P: {{p}}\n                </div>\n                <div class=\"col center text-center\">\n                  C: {{c}}\n                </div>\n              </div>\n\n            </div>\n          </div>\n          <div class=\"col center text-right\">\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/letter-seven/letter-seven.component.ts":
/*!********************************************************!*\
  !*** ./src/app/letter-seven/letter-seven.component.ts ***!
  \********************************************************/
/*! exports provided: LetterSevenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterSevenComponent", function() { return LetterSevenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LetterSevenComponent = /** @class */ (function () {
    function LetterSevenComponent(router) {
        this.router = router;
        this.seven_letter_choice_6 = localStorage.getItem('seven_letter_choice_6');
        console.log('seven_letter_choice_6:', this.seven_letter_choice_6);
        this.a7 = Number(localStorage.getItem('a'));
        this.p7 = Number(localStorage.getItem('p'));
        this.c7 = Number(localStorage.getItem('c'));
        this.a = this.a7;
        this.p = this.p7;
        this.c = this.c7;
        this.button_one = false;
        this.button_two = false;
        this.c_modifier = false;
        this.currentColor = 'c_modifier';
        this.isenabled = false;
    }
    LetterSevenComponent.prototype.select = function (seven_letter_choice_7, button) {
        console.log('letter three: ' + seven_letter_choice_7);
        this.param_7 = seven_letter_choice_7;
        this.a = this.a7;
        this.p = this.p7;
        this.c = this.c7;
        this.isenabled = true;
        if (button == 'button_one') {
            this.button_one = true;
            this.button_two = false;
            console.log('button_one: ' + this.button_one);
        }
        else if (button == 'button_two') {
            this.button_one = false;
            this.button_two = true;
            this.c_modifier = false;
            console.log('C-MODI + ' + this.c_modifier);
        }
        if (seven_letter_choice_7 == 'C' && this.button_one == true) {
            // this.p = this.p + 1;
            // this.c = this.c + 1;
            this.c_modifier = true;
        }
        else {
            this.param_7 = '0';
        }
    };
    LetterSevenComponent.prototype.goToNext = function () {
        console.log('param_7: ' + this.param_7);
        localStorage.setItem('letter_seven', this.param_7);
        localStorage.setItem('a', this.a.toString());
        localStorage.setItem('p', this.p.toString());
        localStorage.setItem('c', this.c.toString());
        this.router.navigate(['result']).then().catch();
    };
    LetterSevenComponent.prototype.ngOnInit = function () {
    };
    LetterSevenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-letter-seven',
            template: __webpack_require__(/*! ./letter-seven.component.html */ "./src/app/letter-seven/letter-seven.component.html"),
            styles: [__webpack_require__(/*! ./letter-seven.component.css */ "./src/app/letter-seven/letter-seven.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LetterSevenComponent);
    return LetterSevenComponent;
}());



/***/ }),

/***/ "./src/app/letter-six/letter-six.component.css":
/*!*****************************************************!*\
  !*** ./src/app/letter-six/letter-six.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intermediate_result {\n  padding: 8px;\n  background: #ffffff;\n  font-size: 10px;\n}\n\n.one_header {\n  padding: 15px;\n  font-weight: bold;\n  font-size: 18px;\n}\n"

/***/ }),

/***/ "./src/app/letter-six/letter-six.component.html":
/*!******************************************************!*\
  !*** ./src/app/letter-six/letter-six.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar title=\"Morbidity\" bg=\"danger\"></app-nav-bar>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"card mt-2\">\n        <div class=\"one_header\">\n          6 bone diseases\n        </div>\n      </div>\n      <div class=\"card mt-2\">\n\n        <button (click)=\"select('P / C', 'button_one')\" class=\"btn btn-outline-danger\">\n          <div class=\"row\">\n            <div class=\"col\">\n              Relevant Osteoporosis,<br>\n              Rheumatoid Arthritis,<br>\n              Ankylosing Spondilytis<br>\n            </div>\n            <div class=\"col\">\n              <div name=\"checkmark-circle\" float-end *ngIf=\"button_one == true\"><b>:</b></div>\n            </div>\n          </div>\n\n        </button>\n      </div>\n      <div class=\"card mt-2\">\n\n        <button (click)=\"select('0', 'button_two')\" class=\"btn btn-outline-danger\">\n          <div class=\"row\">\n            <div class=\"col\">\n              no bone disease\n            </div>\n            <div class=\"col\">\n              <div *ngIf=\"button_two == true\"><b>:</b></div>\n            </div>\n          </div>\n        </button>\n      </div>\n\n      <div class=\"card mt-2\">\n        <div class=\"row\">\n          <div class=\"col-3 text-left\">\n            <button class=\"btn btn-outline-danger\" (click)=\"goToNext()\" [disabled]=\"!isenabled\">Next</button>\n          </div>\n          <div class=\"col-6 text-center\">\n            <div class=\"card intermediate_result\">\n              <div class=\"row\">\n                <div class=\"col center text-center\">\n                  A: {{a}}\n                </div>\n                <div class=\"col center text-center\">\n                  P: {{p}}\n                </div>\n                <div class=\"col center text-center\">\n                  C: {{c}}\n                </div>\n              </div>\n\n            </div>\n          </div>\n          <div class=\"col center text-right\">\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/letter-six/letter-six.component.ts":
/*!****************************************************!*\
  !*** ./src/app/letter-six/letter-six.component.ts ***!
  \****************************************************/
/*! exports provided: LetterSixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterSixComponent", function() { return LetterSixComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LetterSixComponent = /** @class */ (function () {
    function LetterSixComponent(router) {
        this.router = router;
        this.seven_letter_choice_5 = localStorage.getItem('seven_letter_choice_5');
        console.log('seven_letter_choice_5:', this.seven_letter_choice_5);
        this.a6 = Number(localStorage.getItem('a'));
        this.p6 = Number(localStorage.getItem('p'));
        this.c6 = Number(localStorage.getItem('c'));
        this.a = this.a6;
        this.p = this.p6;
        this.c = this.c6;
        this.button_one = false;
        this.button_two = false;
        this.currentColor = 'morbidity';
        this.isenabled = false;
    }
    LetterSixComponent.prototype.select = function (seven_letter_choice_6, button) {
        console.log('letter three: ' + seven_letter_choice_6);
        this.param_6 = seven_letter_choice_6;
        this.a = this.a6;
        this.p = this.p6;
        this.c = this.c6;
        this.isenabled = true;
        if (button === 'button_one') {
            this.button_one = true;
            this.button_two = false;
        }
        else if (button === 'button_two') {
            this.button_one = false;
            this.button_two = true;
        }
        if (seven_letter_choice_6 === 'P / C' && this.button_one === true) {
            this.p = this.p + 1;
            this.c = this.c + 1;
        }
        else {
            this.param_6 = '0';
        }
    };
    LetterSixComponent.prototype.goToNext = function () {
        console.log('param_6: ' + this.param_6);
        localStorage.setItem('letter_six', this.param_6);
        localStorage.setItem('a', this.a.toString());
        localStorage.setItem('p', this.p.toString());
        localStorage.setItem('c', this.c.toString());
        this.router.navigate(['seven']).then().catch();
    };
    LetterSixComponent.prototype.ngOnInit = function () {
    };
    LetterSixComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-letter-six',
            template: __webpack_require__(/*! ./letter-six.component.html */ "./src/app/letter-six/letter-six.component.html"),
            styles: [__webpack_require__(/*! ./letter-six.component.css */ "./src/app/letter-six/letter-six.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LetterSixComponent);
    return LetterSixComponent;
}());



/***/ }),

/***/ "./src/app/letter-three/letter-three.component.css":
/*!*********************************************************!*\
  !*** ./src/app/letter-three/letter-three.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intermediate_result {\n  padding: 8px;\n  background: #ffffff;\n  font-size: 10px;\n}\n\n.one_header {\n  padding: 15px;\n  font-weight: bold;\n  font-size: 18px;\n}\n"

/***/ }),

/***/ "./src/app/letter-three/letter-three.component.html":
/*!**********************************************************!*\
  !*** ./src/app/letter-three/letter-three.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar title=\"Spine\" bg=\"warning\"></app-nav-bar>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <!--<div class=\"header\">-->\n      <!--<div class=\"title\">Spine</div>-->\n      <!--</div>-->\n\n      <div class=\"card mt-2\">\n        <div class=\"one_header\">\n          3 Alignment\n        </div>\n      </div>\n      <div class=\"card mt-2\">\n\n        <button (click)=\"select('A / P', 'button_one')\" class=\"btn btn-outline-warning\">\n          <div class=\"row\">\n            <div class=\"col\">\n              Lordotic\n            </div>\n            <div class=\"col\">\n              <div *ngIf=\"button_one == true\"><b>:</b></div>\n            </div>\n          </div>\n\n        </button>\n      </div>\n      <div class=\"card mt-2\">\n\n        <button (click)=\"select('A / P', 'button_two')\" class=\"btn btn-outline-warning\">\n          <div class=\"row\">\n            <div class=\"col\">\n              Kyphotic -> flex or 10°\n            </div>\n            <div class=\"col\">\n              <div *ngIf=\"button_two == true\"><b>:</b></div>\n            </div>\n          </div>\n        </button>\n      </div>\n\n      <div class=\"card mt-2\">\n        <button (click)=\"select('A / C', 'button_three')\" class=\"btn btn-outline-warning\">\n          <div class=\"row\">\n            <div class=\"col\">\n              Kyphotic -> fix or 10°\n            </div>\n            <div class=\"col\">\n              <div *ngIf=\"button_three == true\"><b>:</b></div>\n            </div>\n          </div>\n        </button>\n      </div>\n\n      <div class=\"card mt-2\">\n        <div class=\"row\">\n          <div class=\"col-3 center text-left\">\n            <button class=\"btn btn-outline-warning\" (click)=\"goToNext()\" [disabled]=\"!isenabled\">Next</button>\n          </div>\n          <div class=\"col-7 center text-center\">\n            <div class=\"card intermediate_result\">\n              <div class=\"row\">\n                <div class=\"col center text-center\">\n                  A: {{a}}\n                </div>\n                <div class=\"col center text-center\">\n                  P: {{p}}\n                </div>\n                <div class=\"col center text-center\">\n                  C: {{c}}\n                </div>\n              </div>\n\n            </div>\n          </div>\n          <div class=\"col center text-right\">\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/letter-three/letter-three.component.ts":
/*!********************************************************!*\
  !*** ./src/app/letter-three/letter-three.component.ts ***!
  \********************************************************/
/*! exports provided: LetterThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterThreeComponent", function() { return LetterThreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LetterThreeComponent = /** @class */ (function () {
    function LetterThreeComponent(router) {
        this.router = router;
        this.seven_letter_choice_2 = localStorage.getItem('seven_letter_choice_2');
        console.log('P2:', this.seven_letter_choice_2);
        this.a3 = Number(localStorage.getItem('a'));
        this.p3 = Number(localStorage.getItem('p'));
        this.c3 = Number(localStorage.getItem('c'));
        this.a = this.a3;
        this.p = this.p3;
        this.c = this.c3;
        this.currentColor = 'spine';
        this.isenabled = false;
    }
    LetterThreeComponent.prototype.select = function (seven_letter_choice_3, button) {
        console.log('letter three: ' + seven_letter_choice_3);
        this.param_3 = seven_letter_choice_3;
        this.a = this.a3;
        this.p = this.p3;
        this.c = this.c3;
        if (seven_letter_choice_3 === 'A / P') {
            this.a = this.a + 0.5;
            this.p = this.p + 0.5;
        }
        else if (seven_letter_choice_3 === 'A / C') {
            this.a = this.a + 1;
            this.c = this.c + 1;
        }
        if (button === 'button_one') {
            this.button_one = true;
            this.button_two = false;
            this.button_three = false;
        }
        else if (button === 'button_two') {
            this.button_one = false;
            this.button_two = true;
            this.button_three = false;
        }
        else if (button === 'button_three') {
            this.button_one = false;
            this.button_two = false;
            this.button_three = true;
        }
        this.isenabled = true;
        console.log('this.a - 3: ' + this.a);
        console.log('this.p - 3: ' + this.p);
        console.log('this.c - 3: ' + this.c);
    };
    LetterThreeComponent.prototype.goToNext = function () {
        console.log('param_3: ' + this.param_3);
        localStorage.setItem('letter_three', this.param_3);
        localStorage.setItem('seven_letter_choice_3', this.param_3);
        localStorage.setItem('a', this.a.toString());
        localStorage.setItem('p', this.p.toString());
        localStorage.setItem('c', this.c.toString());
        this.router.navigate(['four']).then();
    };
    LetterThreeComponent.prototype.ngOnInit = function () {
    };
    LetterThreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-letter-three',
            template: __webpack_require__(/*! ./letter-three.component.html */ "./src/app/letter-three/letter-three.component.html"),
            styles: [__webpack_require__(/*! ./letter-three.component.css */ "./src/app/letter-three/letter-three.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LetterThreeComponent);
    return LetterThreeComponent;
}());



/***/ }),

/***/ "./src/app/letter-two/letter-two.component.css":
/*!*****************************************************!*\
  !*** ./src/app/letter-two/letter-two.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comp_a_button {\n  padding: 8px;\n  background: #cccccc;\n}\n\n.one_header {\n  padding: 15px;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.intermediate_result {\n  padding: 8px;\n  background: #ffffff;\n  font-size: 10px;\n}\n"

/***/ }),

/***/ "./src/app/letter-two/letter-two.component.html":
/*!******************************************************!*\
  !*** ./src/app/letter-two/letter-two.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar title=\"Compression\" bg=\"secondary\"></app-nav-bar>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <!--<div class=\"card\">-->\n      <!--<div class=\"one_header bg-secondary\">Compression</div>-->\n      <!--</div>-->\n\n      <div class=\"card mt-2\">\n        <div class=\"one_header\">\n          2 Extension\n        </div>\n      </div>\n      <div class=\"card mt-2\">\n\n        <button (click)=\"select('A', 'button_one')\" class=\"btn btn-outline-secondary\">\n          <div class=\"row\">\n            <div class=\"col\">\n              < 3\n            </div>\n            <div class=\"col\">\n              <div *ngIf=\"button_one == true\"><b>:</b></div>\n            </div>\n          </div>\n\n        </button>\n      </div>\n      <div class=\"card mt-2\">\n\n        <button (click)=\"select('A / P', 'button_two')\" class=\"btn btn-outline-secondary\">\n          <div class=\"row\">\n            <div class=\"col\">\n              3\n            </div>\n            <div class=\"col\">\n              <div *ngIf=\"button_two == true\"><b>:</b></div>\n            </div>\n          </div>\n        </button>\n      </div>\n\n      <div class=\"card mt-2\">\n        <button (click)=\"select('P', 'button_three')\" class=\"btn btn-outline-secondary\">\n          <div class=\"row\">\n            <div class=\"col\">\n              > 3\n            </div>\n            <div class=\"col\">\n              <div name=\"checkmark-circle\" float-end *ngIf=\"button_three == true\"><b>:</b></div>\n            </div>\n          </div>\n        </button>\n      </div>\n\n      <div class=\"card mt-2\">\n        <div class=\"row\">\n          <div class=\"col-2 center text-left\">\n            <button class=\"btn btn-outline-dark\" (click)=\"goToNext()\" [disabled]=\"!isenabled\">Next</button>\n          </div>\n          <div class=\"col-7 center text-center\">\n            <div class=\"card intermediate_result\">\n              <div class=\"row\">\n                <div class=\"col center text-center\">\n                  A: {{a}}\n                </div>\n                <div class=\"col center text-center\">\n                  P: {{p}}\n                </div>\n                <div class=\"col center text-center\">\n                  C: {{c}}\n                </div>\n              </div>\n\n            </div>\n          </div>\n          <div class=\"col center text-right\">\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/letter-two/letter-two.component.ts":
/*!****************************************************!*\
  !*** ./src/app/letter-two/letter-two.component.ts ***!
  \****************************************************/
/*! exports provided: LetterTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterTwoComponent", function() { return LetterTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LetterTwoComponent = /** @class */ (function () {
    function LetterTwoComponent(router) {
        this.router = router;
        this.seven_letter_choice_1 = localStorage.getItem('seven_letter_choice_1');
        this.a2 = Number(localStorage.getItem('a'));
        this.p2 = Number(localStorage.getItem('p'));
        this.c2 = Number(localStorage.getItem('c'));
        this.a = this.a2;
        this.p = this.p2;
        this.c = this.c2;
        this.currentColor = 'compression';
        this.isenabled = false;
        console.log('P1: ' + this.seven_letter_choice_1);
        console.log('this.a2' + this.a2);
        console.log(typeof this.a2);
    }
    LetterTwoComponent.prototype.select = function (seven_letter_choice_2, button) {
        this.param_2 = seven_letter_choice_2;
        console.log('param_2: ' + this.param_2);
        this.a = this.a2;
        this.p = this.p2;
        this.c = this.c2;
        if (seven_letter_choice_2 === 'A') {
            this.a = this.a + 1;
        }
        else if (seven_letter_choice_2 === 'P') {
            this.p = this.p + 1;
        }
        else if (seven_letter_choice_2 === 'A / P') {
            this.a = this.a + 0.5;
            this.p = this.p + 0.5;
        }
        if (button === 'button_one') {
            this.button_one = true;
            this.button_two = false;
            this.button_three = false;
        }
        else if (button === 'button_two') {
            this.button_one = false;
            this.button_two = true;
            this.button_three = false;
        }
        else if (button === 'button_three') {
            this.button_one = false;
            this.button_two = false;
            this.button_three = true;
        }
        this.isenabled = true;
        console.log('this.a - 2: ' + this.a);
        console.log('this.p - 2: ' + this.p);
        console.log('this.c - 2: ' + this.c);
    };
    LetterTwoComponent.prototype.goToNext = function () {
        localStorage.setItem('letter_two', this.param_2);
        localStorage.setItem('seven_letter_choice_2', this.param_2);
        localStorage.setItem('a', this.a.toString());
        localStorage.setItem('p', this.p.toString());
        localStorage.setItem('c', this.c.toString());
        this.router.navigate(['three']).then().catch();
    };
    LetterTwoComponent.prototype.ngOnInit = function () {
    };
    LetterTwoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-letter-two',
            template: __webpack_require__(/*! ./letter-two.component.html */ "./src/app/letter-two/letter-two.component.html"),
            styles: [__webpack_require__(/*! ./letter-two.component.css */ "./src/app/letter-two/letter-two.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LetterTwoComponent);
    return LetterTwoComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-{{bg}}\">\n  <a class=\"navbar-brand\" href=\"/\">{{title}}</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <!--<a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>-->\n      </li>\n      <li class=\"nav-item\">\n        <!--<a class=\"nav-link\" href=\"#\">Link</a>-->\n      </li>\n      <li class=\"nav-item dropdown\">\n        <!--<a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>-->\n      </li>\n<!--      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>-->\n    </ul>\n<!--    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>-->\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
        this.navback = 'light';
        this.navbar_title = '7 L C';
        // this.navback = localStorage.getItem('navback');
        // this.navbar_title = localStorage.getItem('navbar_title');
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NavBarComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NavBarComponent.prototype, "bg", void 0);
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/result/result.component.css":
/*!*********************************************!*\
  !*** ./src/app/result/result.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intermediate_result {\n  padding: 8px;\n  background: #ffffff;\n  font-size: 10px;\n  border: 0px;\n}\n\n.one_header {\n  padding: 15px;\n  font-weight: bold;\n  font-size: 18px;\n}\n"

/***/ }),

/***/ "./src/app/result/result.component.html":
/*!**********************************************!*\
  !*** ./src/app/result/result.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar title=\"Result\" bg=\"primary\"></app-nav-bar>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"card mt-2\">\n        <div class=\"one_header\">\n          Conclusion\n        </div>\n      </div>\n      <div class=\"card mt-2\">\n\n        <div class=\"row\">\n          <div class=\"col text-center\">\n            {{conclusio}}\n          </div>\n        </div>\n\n      </div>\n\n\n    <div class=\"card mt-2\">\n      <div class=\"row\">\n        <div class=\"col-3 text-left\">\n\n        </div>\n        <div class=\"col-6 text-center\">\n          <div class=\"card intermediate_result\">\n            <div class=\"row\">\n              <div class=\"col center text-center\">\n                A: {{a}}\n              </div>\n              <div class=\"col center text-center\">\n                P: {{p}}\n              </div>\n              <div class=\"col center text-center\">\n                C: {{c}}\n              </div>\n            </div>\n\n          </div>\n        </div>\n        <div class=\"col center text-right\">\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card mt-2\" text-left>\n      <div class=\"row\">\n        <div class=\"col\" text-left>\n          Location:\n        </div>\n        <div class=\"col\" text-right>\n          {{letter_one}}\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\" text-left>\n          Extension:\n        </div>\n        <div class=\"col\" text-right>\n          {{letter_two}}\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\" text-left>\n          Alignment:\n        </div>\n        <div class=\"col\" text-right>\n          {{letter_three}}\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\" text-left>\n          Instability:\n        </div>\n        <div class=\"col\" text-right>\n          {{letter_four}}\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\" text-left>\n          ASA:\n        </div>\n        <div class=\"col\" text-right>\n          {{letter_five}}\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\" text-left>\n          bone diseases:\n        </div>\n        <div class=\"col\" text-right>\n          {{letter_six}}\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\" text-left>\n          C-Modifier:\n        </div>\n        <div class=\"col\" text-right>\n          {{letter_seven}}\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/result/result.component.ts":
/*!********************************************!*\
  !*** ./src/app/result/result.component.ts ***!
  \********************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultComponent = /** @class */ (function () {
    function ResultComponent() {
        this.a = Number(localStorage.getItem('a'));
        this.p = Number(localStorage.getItem('p'));
        this.c = Number(localStorage.getItem('c'));
        this.c_modifier = Boolean(localStorage.getItem('c_modifier'));
        console.log('result a: ' + this.a);
        console.log('result p: ' + this.p);
        console.log('result c: ' + this.c);
        this.currentColor = 'primary';
        if (this.c_modifier == true) {
            this.conclusio = 'A combined approach is recommended';
        }
        else if ((this.a > this.p) && (this.c < 2)) {
            this.conclusio = 'Anterior approach recommended';
        }
        else if ((this.a < this.p) && (this.c < 2)) {
            this.conclusio = 'Posterior approach recommended';
        }
        else if ((this.a > this.p) && (this.c >= 2)) {
            this.conclusio = 'Anterior (C): A combined approach must be considered but is not crucial';
        }
        else if ((this.a < this.p) && (this.c >= 2)) {
            this.conclusio = 'Posterior (C): A combined approach must be considered but is not crucial';
        }
        else if ((this.a == this.p) && (this.c < 2)) {
            this.conclusio = 'Either Anterior or Posterior approach is possible';
        }
        else if ((this.a == this.p) && (this.c >= 2)) {
            this.conclusio = 'Anterior and Posterior and C';
        }
        console.log('localStorage:');
        console.log(localStorage.getItem('letter_one'));
        this.letter_one = localStorage.getItem('letter_one');
        this.letter_two = localStorage.getItem('letter_two');
        this.letter_three = localStorage.getItem('letter_three');
        this.letter_four = localStorage.getItem('letter_four');
        this.letter_five = localStorage.getItem('letter_five');
        this.letter_six = localStorage.getItem('letter_six');
        this.letter_seven = localStorage.getItem('letter_seven');
    }
    ResultComponent.prototype.ngOnInit = function () {
    };
    ResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-result',
            template: __webpack_require__(/*! ./result.component.html */ "./src/app/result/result.component.html"),
            styles: [__webpack_require__(/*! ./result.component.css */ "./src/app/result/result.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jensitus/workspace/sevenletter/seven-letter-code/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map