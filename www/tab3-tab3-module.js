(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic-native/native-page-transitions/ngx/index.js ***!
  \*************************************************************************/
/*! exports provided: NativePageTransitions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativePageTransitions", function() { return NativePageTransitions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NativePageTransitions = /** @class */ (function (_super) {
    __extends(NativePageTransitions, _super);
    function NativePageTransitions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativePageTransitions.prototype.slide = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "slide", {}, arguments); };
    NativePageTransitions.prototype.flip = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "flip", {}, arguments); };
    NativePageTransitions.prototype.fade = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "fade", { "platforms": ["iOS", "Android"] }, arguments); };
    NativePageTransitions.prototype.drawer = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "drawer", { "platforms": ["iOS", "Android"] }, arguments); };
    NativePageTransitions.prototype.curl = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "curl", { "platforms": ["iOS"] }, arguments); };
    NativePageTransitions.prototype.executePendingTransition = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "executePendingTransition", {}, arguments); };
    NativePageTransitions.prototype.cancelPendingTransition = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "cancelPendingTransition", {}, arguments); };
    NativePageTransitions.pluginName = "NativePageTransitions";
    NativePageTransitions.plugin = "com.telerik.plugins.nativepagetransitions";
    NativePageTransitions.pluginRef = "plugins.nativepagetransitions";
    NativePageTransitions.repo = "https://github.com/Telerik-Verified-Plugins/NativePageTransitions";
    NativePageTransitions.platforms = ["Android", "iOS", "Windows Phone 8"];
    NativePageTransitions = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], NativePageTransitions);
    return NativePageTransitions;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS1wYWdlLXRyYW5zaXRpb25zL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXdFN0IseUNBQWlCOzs7O0lBTzFELHFDQUFLLGFBQUMsT0FBZ0M7SUFVdEMsb0NBQUksYUFBQyxPQUFnQztJQVVyQyxvQ0FBSSxhQUFDLE9BQWdDO0lBV3JDLHNDQUFNLGFBQUMsT0FBZ0M7SUFXdkMsb0NBQUksYUFBQyxPQUFnQztJQVNyQyx3REFBd0I7SUFTeEIsdURBQXVCOzs7Ozs7SUFuRVoscUJBQXFCO1FBSGpDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxxQkFBcUI7Z0NBekVsQztFQXlFMkMsaUJBQWlCO1NBQS9DLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdGl2ZVRyYW5zaXRpb25PcHRpb25zIHtcbiAgZGlyZWN0aW9uPzogc3RyaW5nO1xuICBkdXJhdGlvbj86IG51bWJlcjtcbiAgc2xvd2Rvd25mYWN0b3I/OiBudW1iZXI7XG4gIHNsaWRlUGl4ZWxzPzogbnVtYmVyO1xuICBpb3NkZWxheT86IG51bWJlcjtcbiAgYW5kcm9pZGRlbGF5PzogbnVtYmVyO1xuICB3aW5waG9uZWRlbGF5PzogbnVtYmVyO1xuICBmaXhlZFBpeGVsc1RvcD86IG51bWJlcjtcbiAgZml4ZWRQaXhlbHNCb3R0b20/OiBudW1iZXI7XG4gIGFjdGlvbj86IHN0cmluZztcbiAgb3JpZ2luPzogc3RyaW5nO1xuICBocmVmPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIE5hdGl2ZSBQYWdlIFRyYW5zaXRpb25zXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBOYXRpdmUgUGFnZSBUcmFuc2l0aW9ucyBwbHVnaW4gdXNlcyBuYXRpdmUgaGFyZHdhcmUgYWNjZWxlcmF0aW9uIHRvIGFuaW1hdGUgeW91ciB0cmFuc2l0aW9ucyBiZXR3ZWVuIHZpZXdzLiBZb3UgaGF2ZSBjb21wbGV0ZSBjb250cm9sIG92ZXIgdGhlIHR5cGUgb2YgdHJhbnNpdGlvbiwgdGhlIGR1cmF0aW9uLCBhbmQgZGlyZWN0aW9uLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTmF0aXZlUGFnZVRyYW5zaXRpb25zLCBOYXRpdmVUcmFuc2l0aW9uT3B0aW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmF0aXZlLXBhZ2UtdHJhbnNpdGlvbnMvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdGl2ZVBhZ2VUcmFuc2l0aW9uczogTmF0aXZlUGFnZVRyYW5zaXRpb25zKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogLy8gZXhhbXBsZSBvZiBhZGRpbmcgYSB0cmFuc2l0aW9uIHdoZW4gYSBwYWdlL21vZGFsIGNsb3Nlc1xuICogaW9uVmlld1dpbGxMZWF2ZSgpIHtcbiAqXG4gKiAgbGV0IG9wdGlvbnM6IE5hdGl2ZVRyYW5zaXRpb25PcHRpb25zID0ge1xuICogICAgIGRpcmVjdGlvbjogJ3VwJyxcbiAqICAgICBkdXJhdGlvbjogNTAwLFxuICogICAgIHNsb3dkb3duZmFjdG9yOiAzLFxuICogICAgIHNsaWRlUGl4ZWxzOiAyMCxcbiAqICAgICBpb3NkZWxheTogMTAwLFxuICogICAgIGFuZHJvaWRkZWxheTogMTUwLFxuICogICAgIGZpeGVkUGl4ZWxzVG9wOiAwLFxuICogICAgIGZpeGVkUGl4ZWxzQm90dG9tOiA2MFxuICogICAgfVxuICpcbiAqICB0aGlzLm5hdGl2ZVBhZ2VUcmFuc2l0aW9ucy5zbGlkZShvcHRpb25zKVxuICogICAgLnRoZW4ob25TdWNjZXNzKVxuICogICAgLmNhdGNoKG9uRXJyb3IpO1xuICpcbiAqIH1cbiAqXG4gKlxuICogLy8gZXhhbXBsZSBvZiBhZGRpbmcgYSB0cmFuc2l0aW9uIHdoZW4gcHVzaGluZyBhIG5ldyBwYWdlXG4gKiBvcGVuUGFnZShwYWdlOiBhbnkpIHtcbiAqXG4gKiAgIHRoaXMubmF0aXZlUGFnZVRyYW5zaXRpb25zLnNsaWRlKG9wdGlvbnMpO1xuICogICB0aGlzLm5hdkN0cmwucHVzaChwYWdlKTtcbiAqXG4gKiB9XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTmF0aXZlUGFnZVRyYW5zaXRpb25zJyxcbiAgcGx1Z2luOiAnY29tLnRlbGVyaWsucGx1Z2lucy5uYXRpdmVwYWdldHJhbnNpdGlvbnMnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLm5hdGl2ZXBhZ2V0cmFuc2l0aW9ucycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vVGVsZXJpay1WZXJpZmllZC1QbHVnaW5zL05hdGl2ZVBhZ2VUcmFuc2l0aW9ucycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lIDgnXVxufSlcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5hdGl2ZVBhZ2VUcmFuc2l0aW9ucyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFBlcmZvcm0gYSBzbGlkZSBhbmltYXRpb25cbiAgICogQHBhcmFtIG9wdGlvbnMge05hdGl2ZVRyYW5zaXRpb25PcHRpb25zfSBPcHRpb25zIGZvciB0aGUgdHJhbnNpdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzbGlkZShvcHRpb25zOiBOYXRpdmVUcmFuc2l0aW9uT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSBmbGlwIGFuaW1hdGlvblxuICAgKiBAcGFyYW0gb3B0aW9ucyB7TmF0aXZlVHJhbnNpdGlvbk9wdGlvbnN9IE9wdGlvbnMgZm9yIHRoZSB0cmFuc2l0aW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGZsaXAob3B0aW9uczogTmF0aXZlVHJhbnNpdGlvbk9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGEgZmFkZSBhbmltYXRpb25cbiAgICogQHBhcmFtIG9wdGlvbnMge05hdGl2ZVRyYW5zaXRpb25PcHRpb25zfSBPcHRpb25zIGZvciB0aGUgdHJhbnNpdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSB9KVxuICBmYWRlKG9wdGlvbnM6IE5hdGl2ZVRyYW5zaXRpb25PcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGEgc2xpZGUgYW5pbWF0aW9uXG4gICAqIEBwYXJhbSBvcHRpb25zIHtOYXRpdmVUcmFuc2l0aW9uT3B0aW9uc30gT3B0aW9ucyBmb3IgdGhlIHRyYW5zaXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10gfSlcbiAgZHJhd2VyKG9wdGlvbnM6IE5hdGl2ZVRyYW5zaXRpb25PcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGEgc2xpZGUgYW5pbWF0aW9uXG4gICAqIEBwYXJhbSBvcHRpb25zIHtOYXRpdmVUcmFuc2l0aW9uT3B0aW9uc30gT3B0aW9ucyBmb3IgdGhlIHRyYW5zaXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgcGxhdGZvcm1zOiBbJ2lPUyddIH0pXG4gIGN1cmwob3B0aW9uczogTmF0aXZlVHJhbnNpdGlvbk9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlIHBlbmRpbmcgdHJhbnNpdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBleGVjdXRlUGVuZGluZ1RyYW5zaXRpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VsIHBlbmRpbmcgdHJhbnNpdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjYW5jZWxQZW5kaW5nVHJhbnNpdGlvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG4iXX0=

/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.html":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>m-way solutions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"content\">\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n\n    <ion-slide>\n    <div class=\"container\">\n        <h1>Messe-App</h1>  \n          <ion-img class=\"images\" src=\"/assets/messeFrankfurt.jpg\"></ion-img>\n          <p>Mit mobilen Funktionen wie zum Beispiel der Integration von Kalender, Adressbuch und Mail hilft die Messe Frankfurt App Ausstellern und Besuchern schneller und effizienter zusammen zu finden und sich auszutauschen.</p>\n        </div>\n    </ion-slide>\n    <ion-slide>\n    <div class=\"container\">\n        <h1>Mutabor Audi</h1>  \n          <ion-img class=\"images\" src=\"/assets/mutabor.jpg\"></ion-img>\n          <p>Mit dem Experience Pass individuelle Inhalte erhalten und ein interaktives Messeerlebnis ermöglichen, welches die Nutzer begeistert.</p>\n        </div>\n    </ion-slide>\n    <ion-slide>\n        <div class=\"container\">\n            <h1>Lern-App</h1>  \n              <ion-img class=\"images\" src=\"/assets/lernnApp.jpg\"></ion-img>\n              <p>Die leistungsfähige native Applikation ermöglicht ein sehr einfaches Verständnis und Zugriff auf alle relevanten chemischen Eigenschaften von Elementen. Das herausragende User Interface/ UX dieser App sorgt für eine leichte Nutzung mit einem hohen Spaßfaktor beim Lernen und Arbeiten mit dem Periodensystem.</p>\n            </div>\n        </ion-slide>\n  </ion-slides>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 350px; }\n\n.images {\n  margin-top: 30px; }\n\np {\n  margin-bottom: 50px;\n  font-size: 12pt; }\n\nion-content {\n  --background: #f9f9f9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaW1vbnNjaGxlY2tlci9Eb2N1bWVudHMvbXlUYWJzL3R3aXR0ZXJDbGllbnROZXcvc3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBRW5CO0VBQ0kscUJBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb250YWluZXIge1xuICAgIHdpZHRoOiAzNTBweDtcbn1cblxuLmltYWdlcyB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxucCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBmb250LXNpemU6IDEycHQ7XG59XG5pb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjlmOWY5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");



var Tab3Page = /** @class */ (function () {
    function Tab3Page(nativePageTransitions) {
        this.nativePageTransitions = nativePageTransitions;
    }
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! ./tab3.page.html */ "./src/app/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_2__["NativePageTransitions"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map