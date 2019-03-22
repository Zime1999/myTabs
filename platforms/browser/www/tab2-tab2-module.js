(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Tweets</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding class=\"background\" scroll-events=true (ionScroll)=\"scrollTester($event)\">\n  <img class=\"logo\" src=\"assets/twitterlogo.png\" />\n  <ion-grid>\n    <ion-row align-items: center>\n      <ion-col size=\"10\">\n        <ion-searchbar [(ngModel)]=\"input\" (keyup.enter)=\"checkOnEnter()\" (ionBlur)=\"checkOnEnter()\"\n          placeholder=\"#javascript\"></ion-searchbar>\n      </ion-col>\n      <ion-col size=\"2\" align-self-center>\n        <ion-button (click)=\"activateFilters()\" class=\"optionsButton\">\n          <ion-icon name=\"arrow-dropdown\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <div *ngIf=filtersActive>\n\n      <ion-row align-items: center>\n        <ion-col size=\"12\">\n          <ion-item class=\"transparent\">\n            <ion-label>Location</ion-label>\n            <ion-toggle [(ngModel)]=\"locationToggle\" (ngModelChange)=\"checkToggle()\"></ion-toggle>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item class=\"transparent\">\n            <ion-label>sort by</ion-label>\n            <ion-select [(ngModel)]=\"sortValue\" (ngModelChange)=\"sort()\">\n              <ion-select-option value=\"author\">Author</ion-select-option>\n              <ion-select-option value=\"date\">Date</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-grid>\n\n  <p *ngIf=\"missingData\" [style.text-align]=\"'center'\">No tweets found <br /><br /><img class=\"emoji\"\n      src=\"assets/icon/sad_emoji.png\" /></p>\n\n\n  <ion-card *ngFor=\"let tweet of tweets\" [style.margin-bottom]=\"'20px'\">\n    <ion-item>\n      <ion-img class=\"iconCard\" src={{tweet.avatarUrl}} slot=\"start\"></ion-img>\n      <ion-label>{{tweet.user}}</ion-label>\n\n      <ion-icon [ngClass]=\"{'activeStar': tweet.isFavorite, 'inactiveStar': !tweet.isFavorite}\" (click)=\"pushToFavorites(tweet)\" name=\"star\"></ion-icon>\n\n    </ion-item>\n\n    <ion-card-content (click)=\"onSelect(tweet)\" [routerDirection]=\"'forward'\" [routerLink]=\"['/tabs/tab2/details']\">\n      {{tweet.text}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n\n  <ion-fab *ngIf=\"visibleTopScroll\" (click)=\"scrollToTop()\" vertical=\"bottom\" horizontal=\"end\">\n    <ion-fab-button size=\"small\">\n      <ion-icon name=\"arrow-up\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-infinite-scroll (ionInfinite)=\"loadMore($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"lines\" loadingText=\"More tweets...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  width: 120px;\n  display: block;\n  margin: auto; }\n\n.iconCard {\n  padding-top: 5px; }\n\n.buttonStyle {\n  --background: #1dcaff;\n  width: 50px; }\n\n.optionsButton {\n  --background: #1dacff; }\n\n.background {\n  --background: #f9f9f9; }\n\n.transparent {\n  --background: rgba(0, 0, 0, 0); }\n\n.buttonGroup {\n  text-align: center; }\n\nion-spinner {\n  width: 20px;\n  height: 20px;\n  margin-left: 5px; }\n\n.borderButton {\n  --border-color:  #1dcaff;\n  --color: grey; }\n\n.filledButton {\n  --background: #1dcaff; }\n\nion-fab {\n  position: fixed; }\n\nion-fab-button {\n  --background: grey; }\n\n.emoji {\n  width: 30px; }\n\n.activeStar {\n  color: orange; }\n\n.inactiveStar {\n  color: light-grey; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaW1vbnNjaGxlY2tlci9Eb2N1bWVudHMvbXlUYWJzL3NyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixjQUFjO0VBQ2QsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLHFCQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUdmO0VBQ0kscUJBQWEsRUFBQTs7QUFHakI7RUFDSSxxQkFBYSxFQUFBOztBQUdqQjtFQUNJLDhCQUFhLEVBQUE7O0FBR2pCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHbkI7RUFDSSx3QkFBZTtFQUNmLGFBQVEsRUFBQTs7QUFHWjtFQUNHLHFCQUFhLEVBQUE7O0FBR2hCO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGtCQUFhLEVBQUE7O0FBR2pCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaWNvbkNhcmQge1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5idXR0b25TdHlsZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMWRjYWZmO1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG4ub3B0aW9uc0J1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMWRhY2ZmO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjlmOWY5O1xufVxuXG4udHJhbnNwYXJlbnQge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcbn1cblxuLmJ1dHRvbkdyb3VwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1zcGlubmVyIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiB9XG5cbiAuYm9yZGVyQnV0dG9uIHtcbiAgICAgLS1ib3JkZXItY29sb3I6ICAjMWRjYWZmO1xuICAgICAtLWNvbG9yOiBncmV5O1xuIH1cblxuIC5maWxsZWRCdXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogIzFkY2FmZjtcbiB9XG5cbiBpb24tZmFiIHtcbiAgICAgcG9zaXRpb246IGZpeGVkO1xuIH1cblxuIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgLS1iYWNrZ3JvdW5kOiBncmV5O1xuIH1cblxuIC5lbW9qaSB7XG4gICAgIHdpZHRoOiAzMHB4O1xuIH1cblxuIC5hY3RpdmVTdGFyIHtcbiAgICAgY29sb3I6IG9yYW5nZTtcbiB9XG5cbiAuaW5hY3RpdmVTdGFyIHtcbiAgICAgY29sb3I6IGxpZ2h0LWdyZXk7XG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _twitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../twitter.service */ "./src/app/twitter.service.ts");
/* harmony import */ var _favorites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../favorites.service */ "./src/app/favorites.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");








var Tab2Page = /** @class */ (function () {
    function Tab2Page(twitterService, favoriteService, loadingController, alertController, storage) {
        this.twitterService = twitterService;
        this.favoriteService = favoriteService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.storage = storage;
        this.filtersActive = false;
        this.geoSearchString = this.twitterService.geoSearchString;
        this.missingData = false;
        this.visibleTopScroll = false;
        this.favoriteService.page = this;
    }
    Tab2Page.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, subscription;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Loading'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        subscription = this.twitterService.fetchData(this.locationToggle)
                            .subscribe(function (data) {
                            _this.tweets = data;
                        }, function (err) { return _this.handleError(); });
                        subscription.add(function () { return loading.dismiss(); });
                        this.twitterService.activateGPS();
                        this.favoriteService.getAllFavorites();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab2Page.prototype.checkOnEnter = function () {
        if (this.input != "") {
            this.twitterService.getSearchText(this.input);
            this.ngOnInit();
        }
        else {
            this.twitterService.getSearchText("#javascript");
            this.ngOnInit();
        }
    };
    Tab2Page.prototype.scrollToTop = function () {
        this.content.scrollToTop(400);
    };
    Tab2Page.prototype.pushToFavorites = function (tweet) {
        this.favoriteService.pushToFavorites(tweet);
        this.checkFavorite(tweet);
        this.starColor = !this.starColor;
        console.log(this.starColor);
    };
    Tab2Page.prototype.saveTweets = function () {
        this.favoriteService.saveTweet();
    };
    Tab2Page.prototype.checkFavorite = function (tweet) {
        tweet.isFavorite = this.favoriteService.list.some(function (item) { return item.id === tweet.id; });
    };
    Tab2Page.prototype.handleError = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Something failed',
                            message: 'Please check internet-connection.',
                            buttons: [
                                {
                                    text: 'Try again',
                                    handler: function () {
                                        _this.ngOnInit();
                                    }
                                },
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab2Page.prototype.loadMore = function (event) {
        var _this = this;
        var subscription = this.twitterService.fetchMoreData()
            .subscribe(function (data) {
            console.log("loadmore data: ", data);
            data.map(function (item) { return _this.tweets.push(item); });
        }, function (err) { return _this.handleError(); });
        subscription.add(function () { return event.target.complete(); });
    };
    Tab2Page.prototype.scrollTester = function (e) {
        e.detail.scrollTop > 10 ? this.visibleTopScroll = true : this.visibleTopScroll = false;
    };
    Tab2Page.prototype.timeOutForSearch = function () {
        setTimeout(function () {
            this.checkOnEnter();
        }, 3000);
    };
    Tab2Page.prototype.checkToggle = function () {
        this.ngOnInit();
    };
    Tab2Page.prototype.activateFilters = function () {
        this.filtersActive = !this.filtersActive;
    };
    Tab2Page.prototype.onSelect = function (tweet) {
        this.twitterService.selectedTweet = tweet;
    };
    Tab2Page.prototype.sort = function () {
        if (this.sortValue == "author") {
            this.tweets.sort(function (a, b) { return a.user.localeCompare(b.user); });
        }
        else {
            this.tweets.sort(function (a, b) { return a.date.localeCompare(b.date); });
        }
    };
    Tab2Page.prototype.doRefresh = function (e) {
        var _this = this;
        var subscription = this.twitterService.fetchData(this.locationToggle)
            .subscribe(function (data) { return (_this.tweets = data); }, function (err) { return (console.log(err), _this.handleError()); });
        subscription.add(function () { return e.target.complete(); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])
    ], Tab2Page.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"])
    ], Tab2Page.prototype, "infiniteScroll", void 0);
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_twitter_service__WEBPACK_IMPORTED_MODULE_2__["TwitterService"],
            _favorites_service__WEBPACK_IMPORTED_MODULE_3__["FavoritesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map