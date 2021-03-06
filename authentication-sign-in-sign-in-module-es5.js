(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-sign-in-sign-in-module"], {
    /***/
    "BF7l":
    /*!***********************************************************************!*\
      !*** ./src/app/authentication/sign-in/sign-out/sign-out.component.ts ***!
      \***********************************************************************/

    /*! exports provided: SignOutComponent */

    /***/
    function BF7l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignOutComponent", function () {
        return SignOutComponent;
      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @services/authentication.service */
      "ej43");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function SignOutComponent_p_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx_r0.sse, " ");
        }
      }

      var SignOutComponent = /*#__PURE__*/function () {
        function SignOutComponent(data, $dialog, $snackBar, $authentication) {
          _classCallCheck(this, SignOutComponent);

          this.data = data;
          this.$dialog = $dialog;
          this.$snackBar = $snackBar;
          this.$authentication = $authentication;
          this.sse = '';
        }

        _createClass(SignOutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "signOut",
          value: function signOut() {
            var _this = this;

            this.$authentication.signOut().subscribe(function (result) {
              _this.$snackBar.open(result.message, '', {
                duration: 3000
              });

              _this.$dialog.close(true);
            }, function (error) {
              _this.sse = error.message;
            });
          }
        }]);

        return SignOutComponent;
      }();

      SignOutComponent.??fac = function SignOutComponent_Factory(t) {
        return new (t || SignOutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]));
      };

      SignOutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: SignOutComponent,
        selectors: [["app-sign-out"]],
        decls: 12,
        vars: 3,
        consts: [["mat-dialog-title", "", 1, "mat-h1"], ["mat-dialog-content", ""], [1, "sse-container"], ["class", "sse", 4, "ngIf"], ["mat-dialog-actions", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-button", "", 3, "click"], [1, "sse"]],
        template: function SignOutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "You are already signed in. If you wish to sign in with another you account, you will have to sign out first");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, SignOutComponent_p_6_Template, 2, 1, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function SignOutComponent_Template_button_click_10_listener() {
              return ctx.signOut();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Sign Out");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Hi ", ctx.data.name, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.sse);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("mat-dialog-close", false);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLW91dC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "QKNm":
    /*!*************************************************************!*\
      !*** ./src/app/authentication/sign-in/sign-in.component.ts ***!
      \*************************************************************/

    /*! exports provided: SignInComponent */

    /***/
    function QKNm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
        return SignInComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _authentication_sign_in_otp_otp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @authentication/sign-in/otp/otp.component */
      "gHoa");
      /* harmony import */


      var _authentication_sign_in_sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @authentication/sign-in/sign-out/sign-out.component */
      "BF7l");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @services/authentication.service */
      "ej43");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "2ChS");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @services/config.service */
      "r4Kj");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function SignInComponent_p_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", ctx_r2.sse, " ");
        }
      }

      var SignInComponent = /*#__PURE__*/function () {
        function SignInComponent($authentication, $bottomSheet, $dialog, $router, config) {
          var _this2 = this;

          _classCallCheck(this, SignInComponent);

          var _a;

          this.$authentication = $authentication;
          this.$bottomSheet = $bottomSheet;
          this.$dialog = $dialog;
          this.$router = $router;
          this.config = config;
          this.sse = '';
          this.sifg = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            slug: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^[A-Za-z]{1,8}$/)]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^[0-9]{10}$/)])
          });

          if ($authentication.authenticated.getValue()) {
            var sodr = this.$dialog.open(_authentication_sign_in_sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_2__["SignOutComponent"], {
              width: '360px',
              data: {
                name: ((_a = $authentication.user) === null || _a === void 0 ? void 0 : _a.name) || 'Untitled'
              },
              disableClose: true
            });
            sodr.afterClosed().subscribe(function (result) {
              if (result === false) {
                _this2.$router.navigate(['/dashboard']);
              }
            });
          }
        }

        _createClass(SignInComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "signIn",
          value: function signIn(event) {
            var _this3 = this;

            event.preventDefault();

            if (this.sifg.valid) {
              this.sse = '';
              this.sifg.disable();
              this.$authentication.getOTP(this.sifg.value.phone).subscribe(function (result) {
                _this3.sifg.enable();

                _this3.$bottomSheet.open(_authentication_sign_in_otp_otp_component__WEBPACK_IMPORTED_MODULE_1__["OTPComponent"], {
                  data: {
                    si: _this3.sifg.value
                  },
                  disableClose: true
                });
              }, function (error) {
                _this3.sifg.enable();

                _this3.sse = error.message;
              });
            }
          }
        }, {
          key: "beautifySlug",
          value: function beautifySlug(slug) {
            this.sifg.patchValue({
              slug: slug.trim().toUpperCase()
            });
          }
        }]);

        return SignInComponent;
      }();

      SignInComponent.??fac = function SignInComponent_Factory(t) {
        return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheet"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"]));
      };

      SignInComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
        type: SignInComponent,
        selectors: [["app-sign-in"]],
        decls: 46,
        vars: 8,
        consts: [[1, "container", "container-lifted"], [1, "d-flex", "justify-content-center"], [3, "formGroup", "ngSubmit"], [1, "card-sign-in"], [1, "row"], [1, "col-12"], ["hintLabel", "The one with admin", "appearance", "outline", 1, "w-100"], ["type", "text", "matInput", "", "maxlength", "8", "placeholder", "AIR", "formControlName", "slug", 3, "keyup"], ["slug", ""], ["align", "end"], ["hintLabel", "The one that you have registered", "appearance", "outline", 1, "w-100"], ["type", "text", "matInput", "", "maxlength", "10", "placeholder", "##########", "formControlName", "phone"], ["phone", ""], [1, "sse-container"], ["class", "sse", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "w-100", 3, "disabled"], ["mat-card-avatar", "", 1, "brand-logo"], [1, "sse"]],
        template: function SignInComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngSubmit", function SignInComponent_Template_form_ngSubmit_2_listener($event) {
              return ctx.signIn($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6, "Sign In");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "mat-form-field", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](14, "Slug");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "input", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("keyup", function SignInComponent_Template_input_keyup_15_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r3);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](16);

              return ctx.beautifySlug(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "mat-hint", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](20, "Allowed a-Z");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](24, "Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](25, "input", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](27, "mat-hint", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](30, "Allowed 0-9");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](31, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](32, "mat-checkbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](33, " Keep me signed in on this device ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](35, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](36, SignInComponent_p_36_Template, 2, 1, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](37, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](38, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](39, " Sign In ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](40, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](41, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](42, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](44, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](16);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.sifg);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"]("Stay updated on your professional world with ", ctx.config.app.name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"]("", _r0.value.length || 0, " / 8");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"]("", _r1.value.length || 0, " / 10");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.sse);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("disabled", ctx.sifg.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.config.app.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.config.app.tagline);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardAvatar"]],
        styles: [".card-sign-in[_ngcontent-%COMP%] {\r\n  width: 360px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1zaWduLWluIHtcclxuICB3aWR0aDogMzYwcHg7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "gHoa":
    /*!*************************************************************!*\
      !*** ./src/app/authentication/sign-in/otp/otp.component.ts ***!
      \*************************************************************/

    /*! exports provided: OTPComponent */

    /***/
    function gHoa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OTPComponent", function () {
        return OTPComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "2ChS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @services/authentication.service */
      "ej43");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function OTPComponent_p_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx_r1.sse, " ");
        }
      }

      var OTPComponent = /*#__PURE__*/function () {
        function OTPComponent(data, $authentication, $router, $bottomSheetRef, $snackBar) {
          _classCallCheck(this, OTPComponent);

          this.data = data;
          this.$authentication = $authentication;
          this.$router = $router;
          this.$bottomSheetRef = $bottomSheetRef;
          this.$snackBar = $snackBar;
          this.sse = '';
          this.vfg = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('000000', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^[0-9]{6}$/)])
          });
        }

        _createClass(OTPComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "verifyOTP",
          value: function verifyOTP(event) {
            var _this4 = this;

            event.preventDefault();

            if (this.vfg.valid) {
              this.sse = '';
              this.vfg.disable();
              this.$authentication.verifyOTP(this.data.si.phone, this.vfg.value.otp).subscribe(function () {
                _this4.$authentication.signIn(_this4.data.si).subscribe(function (result) {
                  _this4.vfg.enable();

                  _this4.$bottomSheetRef.dismiss();

                  _this4.$snackBar.open(result.message, '', {
                    duration: 3000
                  });

                  _this4.$router.navigate(['/dashboard']);
                }, function (error) {
                  _this4.vfg.enable();

                  _this4.sse = error.message;
                });
              }, function (error) {
                _this4.vfg.enable();

                _this4.sse = error.message;
              });
            }
          }
        }, {
          key: "dismiss",
          value: function dismiss(event) {
            this.$bottomSheetRef.dismiss();
            event.preventDefault();
          }
        }]);

        return OTPComponent;
      }();

      OTPComponent.??fac = function OTPComponent_Factory(t) {
        return new (t || OTPComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]));
      };

      OTPComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: OTPComponent,
        selectors: [["app-otp"]],
        decls: 36,
        vars: 5,
        consts: [[1, "container", "container-otp"], [3, "formGroup", "ngSubmit"], [1, "spacer"], ["mat-icon-button", "", 1, "mat-elevation-z", 3, "click"], ["src", "assets/images/x.svg"], [1, "row"], [1, "col-12", "col-md-6"], ["hintLabel", "The one that you registered", "appearance", "outline", 1, "w-100"], ["type", "text", "matInput", "", "maxlength", "6", "placeholder", "######", "formControlName", "otp"], ["otp", ""], ["align", "end"], [1, "col-12"], [1, "mat-display-1", "otp-clock"], [1, "sse-container"], ["class", "sse", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "w-100", 3, "disabled"], [1, "sse"]],
        template: function OTPComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngSubmit", function OTPComponent_Template_form_ngSubmit_1_listener($event) {
              return ctx.verifyOTP($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "Verify OTP");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Check you phone for OTP");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function OTPComponent_Template_button_click_8_listener($event) {
              return ctx.dismiss($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](9, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15, "OTP");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](16, "input", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "mat-hint", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](21, "Allowed 0-9");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](26, " OTP is valid for only 2 mins ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "h1", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](29, "01:59");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](32, OTPComponent_p_32_Template, 2, 1, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](35, " Verify OTP ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx.vfg);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("", _r0.value.length || 0, " / 6");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" We have shared a 6 digit OTP with ", ctx.data.si.phone, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.sse);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", ctx.vfg.invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"]],
        styles: [".container-otp[_ngcontent-%COMP%] {\r\n  width: 512px;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .container-otp[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n.otp-clock[_ngcontent-%COMP%] {\r\n  font-family: \"Courier New\", Courier, monospace;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRCIsImZpbGUiOiJvdHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItb3RwIHtcclxuICB3aWR0aDogNTEycHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGFpbmVyLW90cCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5vdHAtY2xvY2sge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "pujM":
    /*!******************************************************************!*\
      !*** ./src/app/authentication/sign-in/sign-in-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: SignInRoutingModule */

    /***/
    function pujM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignInRoutingModule", function () {
        return SignInRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _authentication_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @authentication/sign-in/sign-in.component */
      "QKNm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _authentication_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__["SignInComponent"]
      }];

      var SignInRoutingModule = function SignInRoutingModule() {
        _classCallCheck(this, SignInRoutingModule);
      };

      SignInRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
        type: SignInRoutingModule
      });
      SignInRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
        factory: function SignInRoutingModule_Factory(t) {
          return new (t || SignInRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](SignInRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "qk6a":
    /*!**********************************************************!*\
      !*** ./src/app/authentication/sign-in/sign-in.module.ts ***!
      \**********************************************************/

    /*! exports provided: SignInModule */

    /***/
    function qk6a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignInModule", function () {
        return SignInModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _authentication_sign_in_sign_in_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @authentication/sign-in/sign-in-routing.module */
      "pujM");
      /* harmony import */


      var _authentication_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @authentication/sign-in/sign-in.component */
      "QKNm");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "2ChS");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _authentication_sign_in_otp_otp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @authentication/sign-in/otp/otp.component */
      "gHoa");
      /* harmony import */


      var _authentication_sign_in_sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @authentication/sign-in/sign-out/sign-out.component */
      "BF7l");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SignInModule = function SignInModule() {
        _classCallCheck(this, SignInModule);
      };

      SignInModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["????defineNgModule"]({
        type: SignInModule
      });
      SignInModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["????defineInjector"]({
        factory: function SignInModule_Factory(t) {
          return new (t || SignInModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _authentication_sign_in_sign_in_routing_module__WEBPACK_IMPORTED_MODULE_1__["SignInRoutingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["????setNgModuleScope"](SignInModule, {
          declarations: [_authentication_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__["SignInComponent"], _authentication_sign_in_otp_otp_component__WEBPACK_IMPORTED_MODULE_12__["OTPComponent"], _authentication_sign_in_sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_13__["SignOutComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _authentication_sign_in_sign_in_routing_module__WEBPACK_IMPORTED_MODULE_1__["SignInRoutingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=authentication-sign-in-sign-in-module-es5.js.map