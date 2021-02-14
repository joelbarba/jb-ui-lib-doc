(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-jb-ui-lib-sandbox-src-app-jb-lazy-loaded-module-jb-lazy-loaded-module"],{

/***/ "./src/app/jb-lazy-loaded-module/jb-lazy-loaded-test.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/jb-lazy-loaded-module/jb-lazy-loaded-test.component.ts ***!
  \************************************************************************/
/*! exports provided: jbLazyLoadedTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jbLazyLoadedTestComponent", function() { return jbLazyLoadedTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _jb_ui_lib_src_lib_jb_label_jb_label_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../jb-ui-lib/src/lib/jb-label/jb-label.component */ "../jb-ui-lib/src/lib/jb-label/jb-label.component.ts");
/* harmony import */ var _jb_ui_lib_src_lib_jb_textarea_jb_textarea_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../jb-ui-lib/src/lib/jb-textarea/jb-textarea.component */ "../jb-ui-lib/src/lib/jb-textarea/jb-textarea.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _jb_ui_lib_src_lib_jb_btn_jb_btn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../jb-ui-lib/src/lib/jb-btn/jb-btn.component */ "../jb-ui-lib/src/lib/jb-btn/jb-btn.component.ts");






console.log('jbLazyLoadedTestComponent', new Date());
var jbLazyLoadedTestComponent = /** @class */ (function () {
    function jbLazyLoadedTestComponent() {
        this.myVal = '';
    }
    jbLazyLoadedTestComponent.prototype.ngOnInit = function () { };
    jbLazyLoadedTestComponent.ɵfac = function jbLazyLoadedTestComponent_Factory(t) { return new (t || jbLazyLoadedTestComponent)(); };
    jbLazyLoadedTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: jbLazyLoadedTestComponent, selectors: [["app-jb-lazy-loaded-test"]], decls: 7, vars: 1, consts: [["jbText", "view.common.username"], ["jbLabel", "My Text", 3, "ngModel", "ngModelChange"], ["jbText", "eeeeeeeee"]], template: function jbLazyLoadedTestComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Lazy Loaded Module");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "jb-label", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "jb-textarea", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function jbLazyLoadedTestComponent_Template_jb_textarea_ngModelChange_5_listener($event) { return ctx.myVal = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "jb-btn", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.myVal);
        } }, directives: [_jb_ui_lib_src_lib_jb_label_jb_label_component__WEBPACK_IMPORTED_MODULE_1__["JbLabelComponent"], _jb_ui_lib_src_lib_jb_textarea_jb_textarea_component__WEBPACK_IMPORTED_MODULE_2__["JbTextareaComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _jb_ui_lib_src_lib_jb_btn_jb_btn_component__WEBPACK_IMPORTED_MODULE_4__["JbBtnComponent"]], styles: ["jb-btn[_nghost-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: inline-block;\n}\n\n.jb-btn[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 4px;\n  height: 35px;\n  padding: 0;\n  overflow: hidden;\n  cursor: pointer;\n  box-shadow: 0 1px 2px rgba(34, 36, 38, 0.6);\n}\n\n.jb-btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.jb-btn[_ngcontent-%COMP%]   .btn-text-section[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 13px;\n  letter-spacing: 1px;\n  padding: 0 15px;\n  line-height: 35px;\n  vertical-align: top;\n}\n\n.jb-btn[_ngcontent-%COMP%]   .btn-icon-section[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 10.5px;\n  line-height: 14px;\n  font-size: 14px;\n}\n\n.jb-btn[_ngcontent-%COMP%]   .btn-icon-section.small-btn[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n}\n\n.jb-btn[_ngcontent-%COMP%]   .btn-icon-section[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 600ms;\n          animation-duration: 600ms;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-name: jb-btn-spinner;\n          animation-name: jb-btn-spinner;\n  border: 2px solid rgba(255, 255, 255, 0.6);\n  width: 14px;\n  height: 14px;\n  border-radius: 100%;\n  border-top-color: transparent;\n}\n\n@-webkit-keyframes jb-btn-spinner {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes jb-btn-spinner {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.jb-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);\n}\n\n.jb-btn[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: .65;\n}\n\n.jb-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  box-shadow: inset 2px 2px 5px rgba(34, 36, 38, 0.4);\n}\n\n.jb-btn[_ngcontent-%COMP%]:active:not(:disabled)   .btn-icon-section[_ngcontent-%COMP%] {\n  box-shadow: inset 0px 2px 5px rgba(34, 36, 38, 0.4);\n}\n\n.disabled-tooltip[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.squash[_nghost-%COMP%]   .jb-btn[_ngcontent-%COMP%] {\n  height: 25px;\n}\n\n.squash[_nghost-%COMP%]   .jb-btn[_ngcontent-%COMP%]   .btn-icon-section[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n}\n\n.squash[_nghost-%COMP%]   .jb-btn[_ngcontent-%COMP%]   .btn-text-section[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  line-height: 13px;\n}\n\n.full-width[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.full-width[_nghost-%COMP%]   .disabled-tooltip[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.full-width[_nghost-%COMP%]   .disabled-tooltip[_ngcontent-%COMP%]   .jb-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n}\n\n.full-width[_nghost-%COMP%]   .disabled-tooltip[_ngcontent-%COMP%]   .jb-btn[_ngcontent-%COMP%]   .btn-icon-section.left[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.full-width[_nghost-%COMP%]   .disabled-tooltip[_ngcontent-%COMP%]   .jb-btn[_ngcontent-%COMP%]   .btn-icon-section.right[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2piLXVpLWxpYi1zYW5kYm94L3NyYy9hcHAvamItbGF6eS1sb2FkZWQtbW9kdWxlL2piLWxhenktbG9hZGVkLXRlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFlBQVk7RUFFWixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFHZiwyQ0FBMkM7QUFGN0M7O0FBUkE7RUFRWSxhQUFhO0FBSXpCOztBQVpBO0VBYUkscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFHdkI7O0FBckJBO0VBcUJJLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFFcEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFHbkI7O0FBNUJBO0VBdUJrQixrQkFBa0I7QUFTcEM7O0FBaENBO0VBNEJNLGlDQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIsMkNBQW1DO1VBQW5DLG1DQUFtQztFQUNuQyx5Q0FBaUM7VUFBakMsaUNBQWlDO0VBQ2pDLHNDQUE4QjtVQUE5Qiw4QkFBOEI7RUFNOUIsMENBQTBDO0VBQzFDLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUduQzs7QUFaTTtFQUNFO0lBQU8sdUJBQXVCO0VBZ0JwQztFQWZRO0lBQUsseUJBQXlCO0VBa0J0QztBQUNGOztBQXJCTTtFQUNFO0lBQU8sdUJBQXVCO0VBZ0JwQztFQWZRO0lBQUsseUJBQXlCO0VBa0J0QztBQUNGOztBQXJEQTtFQThDSSx3Q0FBd0M7QUFXNUM7O0FBekRBO0VBbURJLG1CQUFtQjtFQUNuQixZQUFZO0FBVWhCOztBQTlEQTtFQXdESSxtREFBbUQ7QUFVdkQ7O0FBbEVBO0VBMERNLG1EQUFtRDtBQVl6RDs7QUFQQTtFQUNFLHFCQUFxQjtBQVV2Qjs7QUFOQTtFQUVJLFlBQVk7QUFRaEI7O0FBVkE7RUFJTSxpQkFBaUI7QUFVdkI7O0FBZEE7RUFPTSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBV3ZCOztBQUxBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFRYjs7QUFWQTtFQUlJLFdBQVc7QUFVZjs7QUFkQTtFQU1NLFdBQVc7RUFDWCxTQUFTO0FBWWY7O0FBbkJBO0VBUStCLFdBQVc7QUFlMUM7O0FBdkJBO0VBU2dDLFlBQVk7QUFrQjVDIiwiZmlsZSI6InByb2plY3RzL2piLXVpLWxpYi1zYW5kYm94L3NyYy9hcHAvamItbGF6eS1sb2FkZWQtbW9kdWxlL2piLWxhenktbG9hZGVkLXRlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJqYi1idG46aG9zdCB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uamItYnRuIHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogMzVweDtcbiAgLy9tYXJnaW46IDIuNXB4O1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gICY6Zm9jdXMgeyBvdXRsaW5lOiBub25lOyB9XG5cbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMzQsIDM2LCAzOCwgMC42KTtcblxuICAuYnRuLXRleHQtc2VjdGlvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG4gIC5idG4taWNvbi1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMTBweCAxMC41cHg7XG4gICAgJi5zbWFsbC1idG4geyBwYWRkaW5nOiAxMHB4IDEycHg7IH1cbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAubG9hZGluZy1zcGlubmVyIHtcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNjAwbXM7XG4gICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBqYi1idG4tc3Bpbm5lcjtcbiAgICAgIEBrZXlmcmFtZXMgamItYnRuLXNwaW5uZXIge1xuICAgICAgICBmcm9tIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7ICAgfVxuICAgICAgICAgIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgICAgfVxuXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gICAgICB3aWR0aDogMTRweDtcbiAgICAgIGhlaWdodDogMTRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gIH1cblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIC5idG4taWNvbi1zZWN0aW9uIHsgfVxuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBvcGFjaXR5OiAuNjU7XG4gIH1cblxuICAmOmFjdGl2ZTpub3QoOmRpc2FibGVkKSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCA1cHggcmdiYSgzNCwgMzYsIDM4LCAwLjQpO1xuICAgIC5idG4taWNvbi1zZWN0aW9uIHtcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggNXB4IHJnYmEoMzQsIDM2LCAzOCwgMC40KTtcbiAgICB9XG4gIH1cbn1cblxuLmRpc2FibGVkLXRvb2x0aXAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi8vIFN0eWxlcyBmb3Igc3F1YXNoZWQgYnV0dG9ucyAoY2xhc3MgXCJzcXVhc2hcIiBhcHBsaWVkIG9uIHRoZSA8amItYnRuPilcbjpob3N0LnNxdWFzaCB7XG4gIC5qYi1idG4ge1xuICAgIGhlaWdodDogMjVweDtcbiAgICAuYnRuLWljb24tc2VjdGlvbiB7XG4gICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICB9XG4gICAgLmJ0bi10ZXh0LXNlY3Rpb24ge1xuICAgICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgICBsaW5lLWhlaWdodDogMTNweDtcbiAgICB9XG4gIH1cbn1cblxuLy8gU3R5bGVzIGZvciBmdWxsIHdpZHRoIGJ1dHRvbnMgKGNsYXNzIFwiZnVsbC13aWR0aFwiIGFwcGxpZWQgb24gdGhlIDxqYi1idG4+KVxuOmhvc3QuZnVsbC13aWR0aCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgLmRpc2FibGVkLXRvb2x0aXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5qYi1idG4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICAuYnRuLWljb24tc2VjdGlvbi5sZWZ0IHsgZmxvYXQ6IGxlZnQ7IH1cbiAgICAgIC5idG4taWNvbi1zZWN0aW9uLnJpZ2h0IHsgZmxvYXQ6IHJpZ2h0OyB9XG4gICAgfVxuICB9XG59XG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRoaXMgaXMgdG8gcmVzZXQgdGhlIGJ1dHRvbiBjb2xvcjpcbkBtaXhpbiBidG4tY29sb3ItbWl4aW4oJGJ0bi1jb2xvcikge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICRidG4tY29sb3I7XG4gIC5idG4taWNvbi1zZWN0aW9uIHsgYmFja2dyb3VuZDogZGFya2VuKCRidG4tY29sb3IsIDUlKTsgfVxuICAuYnRuLWljb24tc2VjdGlvbi5zbWFsbC1idG4geyBiYWNrZ3JvdW5kOiAkYnRuLWNvbG9yOyB9IC8vIElmIGljb24gYnRuXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgIGJhY2tncm91bmQ6IGRhcmtlbigkYnRuLWNvbG9yLCAzJSk7XG4gICAgLmJ0bi1pY29uLXNlY3Rpb24geyBiYWNrZ3JvdW5kOiBkYXJrZW4oJGJ0bi1jb2xvciwgNyUpOyB9XG4gIH1cbn1cbi8vIC5qYi1idG4geyBAaW5jbHVkZSBidG4tY29sb3ItbWl4aW4oZ3JlZW4pOyB9XG5cblxuIl19 */"] });
    return jbLazyLoadedTestComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](jbLazyLoadedTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-jb-lazy-loaded-test',
                templateUrl: './jb-lazy-loaded-test.component.html',
                styleUrls: ['./jb-lazy-loaded-test.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/jb-lazy-loaded-module/jb-lazy-loaded.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/jb-lazy-loaded-module/jb-lazy-loaded.module.ts ***!
  \****************************************************************/
/*! exports provided: JbLazyLoadedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JbLazyLoadedModule", function() { return JbLazyLoadedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _jb_lazy_loaded_test_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jb-lazy-loaded-test.component */ "./src/app/jb-lazy-loaded-module/jb-lazy-loaded-test.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _jb_ui_lib_src_lib_jb_ui_lib_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../jb-ui-lib/src/lib/jb-ui-lib.module */ "../jb-ui-lib/src/lib/jb-ui-lib.module.ts");






console.log('JbLazyLoadedModule', new Date());
var routes = [
    { path: '', component: _jb_lazy_loaded_test_component__WEBPACK_IMPORTED_MODULE_1__["jbLazyLoadedTestComponent"] }
];
var JbLazyLoadedModule = /** @class */ (function () {
    function JbLazyLoadedModule() {
    }
    JbLazyLoadedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: JbLazyLoadedModule });
    JbLazyLoadedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function JbLazyLoadedModule_Factory(t) { return new (t || JbLazyLoadedModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _jb_ui_lib_src_lib_jb_ui_lib_module__WEBPACK_IMPORTED_MODULE_3__["JbUiLibModule"],
            ]] });
    return JbLazyLoadedModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](JbLazyLoadedModule, { declarations: [_jb_lazy_loaded_test_component__WEBPACK_IMPORTED_MODULE_1__["jbLazyLoadedTestComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _jb_ui_lib_src_lib_jb_ui_lib_module__WEBPACK_IMPORTED_MODULE_3__["JbUiLibModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JbLazyLoadedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _jb_ui_lib_src_lib_jb_ui_lib_module__WEBPACK_IMPORTED_MODULE_3__["JbUiLibModule"],
                ],
                declarations: [_jb_lazy_loaded_test_component__WEBPACK_IMPORTED_MODULE_1__["jbLazyLoadedTestComponent"]],
                exports: [],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=projects-jb-ui-lib-sandbox-src-app-jb-lazy-loaded-module-jb-lazy-loaded-module.js.map