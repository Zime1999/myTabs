(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selected-tweet-selected-tweet-module"],{

/***/ "./src/app/selected-tweet/selected-tweet.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/selected-tweet/selected-tweet.module.ts ***!
  \*********************************************************/
/*! exports provided: SelectedTweetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedTweetPageModule", function() { return SelectedTweetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _selected_tweet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selected-tweet.page */ "./src/app/selected-tweet/selected-tweet.page.ts");







var routes = [
    {
        path: '',
        component: _selected_tweet_page__WEBPACK_IMPORTED_MODULE_6__["SelectedTweetPage"]
    }
];
var SelectedTweetPageModule = /** @class */ (function () {
    function SelectedTweetPageModule() {
    }
    SelectedTweetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_selected_tweet_page__WEBPACK_IMPORTED_MODULE_6__["SelectedTweetPage"]]
        })
    ], SelectedTweetPageModule);
    return SelectedTweetPageModule;
}());



/***/ }),

/***/ "./src/app/selected-tweet/selected-tweet.page.html":
/*!*********************************************************!*\
  !*** ./src/app/selected-tweet/selected-tweet.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"/tabs/tab2\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item class=\"content\">\n        <ion-img class=\"iconCard\" src={{singleTweet?.avatarUrl}} slot=\"start\"></ion-img>\n        <ion-label>{{singleTweet?.user}}</ion-label>\n      </ion-item>\n      <ion-item-divider class=\"divider\"></ion-item-divider>\n\n      <ion-card [style.margin-top]=\"'20px'\">\n        <ion-card-content>\n          {{singleTweet?.text}}\n          <ion-item-divider class=\"divider\"></ion-item-divider>\n          Created: {{singleTweet?.date | date: 'short'}} <br />\n          <a href=\"{{singleTweet?.link}\" *ngIf=\"singleTweet?.link != null\">Visit my page!</a>\n        </ion-card-content>\n        \n      </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/selected-tweet/selected-tweet.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/selected-tweet/selected-tweet.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".iconDetails {\n  width: 50px; }\n\n.content {\n  margin-top: 20px;\n  --background: #f9f9f9; }\n\nion-content {\n  --background: #f9f9f9; }\n\n.divider {\n  --background: #f9f9f9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaW1vbnNjaGxlY2tlci9Eb2N1bWVudHMvbXlUYWJzL3NyYy9hcHAvc2VsZWN0ZWQtdHdlZXQvc2VsZWN0ZWQtdHdlZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksZ0JBQWdCO0VBQ2hCLHFCQUFhLEVBQUE7O0FBR2pCO0VBQ0kscUJBQWEsRUFBQTs7QUFHakI7RUFDSSxxQkFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VsZWN0ZWQtdHdlZXQvc2VsZWN0ZWQtdHdlZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25EZXRhaWxzIHtcbiAgICB3aWR0aDogNTBweDtcbn1cblxuLmNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjlmOWY5O1xufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjlmOWY5O1xufVxuXG4uZGl2aWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjlmOWY5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/selected-tweet/selected-tweet.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/selected-tweet/selected-tweet.page.ts ***!
  \*******************************************************/
/*! exports provided: SelectedTweetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedTweetPage", function() { return SelectedTweetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _twitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../twitter.service */ "./src/app/twitter.service.ts");



var SelectedTweetPage = /** @class */ (function () {
    function SelectedTweetPage(twitterService) {
        this.twitterService = twitterService;
    }
    SelectedTweetPage.prototype.ngOnInit = function () {
    };
    SelectedTweetPage.prototype.ngDoCheck = function () {
        this.singleTweet = this.twitterService.selectedTweet;
    };
    SelectedTweetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-selected-tweet',
            template: __webpack_require__(/*! ./selected-tweet.page.html */ "./src/app/selected-tweet/selected-tweet.page.html"),
            styles: [__webpack_require__(/*! ./selected-tweet.page.scss */ "./src/app/selected-tweet/selected-tweet.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_twitter_service__WEBPACK_IMPORTED_MODULE_2__["TwitterService"]])
    ], SelectedTweetPage);
    return SelectedTweetPage;
}());



/***/ })

}]);
//# sourceMappingURL=selected-tweet-selected-tweet-module.js.map