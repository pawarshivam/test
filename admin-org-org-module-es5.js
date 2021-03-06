(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-org-org-module"], {
    /***/
    "BHRT":
    /*!************************************************************************!*\
      !*** ./src/app/admin/org/department-play/department-play.component.ts ***!
      \************************************************************************/

    /*! exports provided: DepartmentPlayComponent */

    /***/
    function BHRT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DepartmentPlayComponent", function () {
        return DepartmentPlayComponent;
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


      var _services_department_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @services/department.service */
      "rc/I");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @services/config.service */
      "r4Kj");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DepartmentPlayComponent_p_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx_r1.sse, " ");
        }
      }

      function DepartmentPlayComponent_ng_container_28_p_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx_r4.sse, " ");
        }
      }

      function DepartmentPlayComponent_ng_container_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngSubmit", function DepartmentPlayComponent_ng_container_28_Template_form_ngSubmit_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r5["delete"]($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "Delete Department");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "This action is irreversible");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "mat-form-field", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](13, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "mat-hint", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](18, "Provided and subject's name do not match");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](21, " Deleting a department will result into deleting of all the information associated with the department. This action cannot be undone. Provide the department's name to confirm your intention ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](24, DepartmentPlayComponent_ng_container_28_p_24_Template, 2, 1, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](27, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](14);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx_r2.delfg);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("hintLabel", ctx_r2.data.department.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("", _r3.value.length || 0, " / 75");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r2.sse);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", ctx_r2.delfg.invalid || ctx_r2.delfg.disabled);
        }
      }

      var DepartmentPlayComponent = /*#__PURE__*/function () {
        function DepartmentPlayComponent(data, $authentication, $department, $snackBar, $bottomSheetRef, config) {
          _classCallCheck(this, DepartmentPlayComponent);

          var _a;

          this.data = data;
          this.$authentication = $authentication;
          this.$department = $department;
          this.$snackBar = $snackBar;
          this.$bottomSheetRef = $bottomSheetRef;
          this.config = config;
          this.sse = '';
          this.action = '';
          this.depfg = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^.{1,75}$/)])
          });
          this.delfg = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({});

          if (data.department == null) {
            this.action = 'Add';
            this.delfg = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({});
          } else {
            this.action = 'Update';
            this.delfg = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(data.department.name)])
            });
            this.depfg.patchValue(Object.assign({}, this.data.department));
          } // ACL


          var role = (_a = this.$authentication.user) === null || _a === void 0 ? void 0 : _a.role;

          if (role) {
            if (this.config.role.rp == role.id == false) {
              this.depfg.disable();
              this.delfg.disable();
            }
          }
        }

        _createClass(DepartmentPlayComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "play",
          value: function play(event) {
            var _this = this;

            event.preventDefault();

            if (this.depfg.valid) {
              this.sse = '';
              this.depfg.disable();

              switch (this.action) {
                case 'Add':
                  this.$department.addDepartment(this.depfg.value).subscribe(function () {
                    _this.depfg.enable();

                    _this.$snackBar.open("Department added", '', {
                      duration: 3000
                    });

                    _this.$bottomSheetRef.dismiss();
                  }, function (error) {
                    _this.depfg.enable();

                    _this.sse = error.message;
                  });
                  break;

                case 'Update':
                  this.$department.updateDepartment(this.data.department.id, this.depfg.value).subscribe(function () {
                    _this.depfg.enable();

                    _this.$snackBar.open("Department updated", '', {
                      duration: 3000
                    });
                  }, function (error) {
                    _this.depfg.enable();

                    _this.sse = error.message;
                  });
                  break;
              }
            }
          }
        }, {
          key: "delete",
          value: function _delete(event) {
            var _this2 = this;

            event.preventDefault();

            if (this.delfg.valid) {
              this.sse = '';
              this.delfg.disable();
              this.$department.deleteDepartment(this.data.department.id).subscribe(function () {
                _this2.delfg.enable();

                _this2.$snackBar.open("Department and associated information deleted", '', {
                  duration: 3000
                });

                _this2.$bottomSheetRef.dismiss();
              }, function (error) {
                _this2.delfg.enable();

                _this2.sse = error.message;
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

        return DepartmentPlayComponent;
      }();

      DepartmentPlayComponent.??fac = function DepartmentPlayComponent_Factory(t) {
        return new (t || DepartmentPlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_services_department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]));
      };

      DepartmentPlayComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: DepartmentPlayComponent,
        selectors: [["app-department-play"]],
        decls: 29,
        vars: 7,
        consts: [[1, "container", "container-department"], [3, "formGroup", "ngSubmit"], [1, "spacer"], ["mat-icon-button", "", 1, "mat-elevation-z", 3, "click"], ["src", "assets/images/x.svg"], [1, "row"], [1, "col-12"], ["hintLabel", "What it is called", "appearance", "outline", 1, "w-100"], ["type", "text", "matInput", "", "maxlength", "75", "placeholder", "Main", "formControlName", "name"], ["name", ""], ["align", "end"], [1, "sse-container"], ["class", "sse", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "w-100", 3, "disabled"], [4, "ngIf"], [1, "sse"], [1, "col-12", "col-md-6"], ["appearance", "outline", 1, "w-100", 3, "hintLabel"], ["mat-flat-button", "", "color", "warn", "type", "submit", 1, "w-100", 3, "disabled"]],
        template: function DepartmentPlayComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngSubmit", function DepartmentPlayComponent_Template_form_ngSubmit_1_listener($event) {
              return ctx.play($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Get low when the whistle go");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function DepartmentPlayComponent_Template_button_click_8_listener($event) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](16, "input", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "mat-hint", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](21, "Allowed a-Z, 0-9");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](24, DepartmentPlayComponent_p_24_Template, 2, 1, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](28, DepartmentPlayComponent_ng_container_28_Template, 28, 5, "ng-container", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx.depfg);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("", ctx.action, " Department");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("", _r0.value.length || 0, " / 75");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.sse);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", ctx.depfg.invalid || ctx.depfg.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx.action);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.action == "Update");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"]],
        styles: [".container-department[_ngcontent-%COMP%] {\r\n    width: 512px;\r\n  }\r\n  \r\n  @media only screen and (max-width: 768px) {\r\n    .container-department[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGFydG1lbnQtcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtFQUNkOztFQUVBO0lBQ0U7TUFDRSxXQUFXO0lBQ2I7RUFDRiIsImZpbGUiOiJkZXBhcnRtZW50LXBsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZGVwYXJ0bWVudCB7XHJcbiAgICB3aWR0aDogNTEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb250YWluZXItZGVwYXJ0bWVudCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"]
      });
      /***/
    },

    /***/
    "ayzI":
    /*!********************************************!*\
      !*** ./src/app/admin/org/org.component.ts ***!
      \********************************************/

    /*! exports provided: OrgComponent */

    /***/
    function ayzI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrgComponent", function () {
        return OrgComponent;
      });
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _admin_org_department_play_department_play_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @admin/org/department-play/department-play.component */
      "BHRT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @services/authentication.service */
      "ej43");
      /* harmony import */


      var _services_org_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @services/org.service */
      "46RQ");
      /* harmony import */


      var _services_department_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @services/department.service */
      "rc/I");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "2ChS");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _services_breakpoints_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @services/breakpoints.service */
      "2/li");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");

      function OrgComponent_button_70_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function OrgComponent_button_70_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r18.departmentPlay(null);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function OrgComponent_button_71_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function OrgComponent_button_71_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r20.departmentPlay(null);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Add Department ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function OrgComponent_mat_header_cell_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-header-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function OrgComponent_mat_cell_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var department_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](department_r22.id);
        }
      }

      function OrgComponent_mat_header_cell_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-header-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function OrgComponent_mat_cell_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var department_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](department_r23.name);
        }
      }

      function OrgComponent_mat_header_cell_81_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-header-cell", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function OrgComponent_mat_cell_82_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function OrgComponent_mat_cell_82_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r26);

            var department_r24 = ctx.$implicit;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r25.departmentPlay(department_r24);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function OrgComponent_mat_header_row_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "mat-header-row");
        }
      }

      function OrgComponent_mat_row_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "mat-row");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "background-image": a0
        };
      };

      var OrgComponent = /*#__PURE__*/function () {
        function OrgComponent($authentication, $org, $department, $bottomSheet, $snackBar, breakpoints) {
          _classCallCheck(this, OrgComponent);

          this.$authentication = $authentication;
          this.$org = $org;
          this.$department = $department;
          this.$bottomSheet = $bottomSheet;
          this.$snackBar = $snackBar;
          this.breakpoints = breakpoints; // Departments table

          this.dtdc = ['id', 'name', 'action'];
          this.dtds = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]([]);
        }

        _createClass(OrgComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.getDepartments();
          }
        }, {
          key: "getDepartments",
          value: function getDepartments() {
            var _this3 = this;

            this.$department.getDepartments().subscribe(function (departments) {
              _this3.dtds.data = departments;
            });
          }
        }, {
          key: "departmentPlay",
          value: function departmentPlay(department) {
            this.$bottomSheet.open(_admin_org_department_play_department_play_component__WEBPACK_IMPORTED_MODULE_1__["DepartmentPlayComponent"], {
              data: {
                department: department
              }
            });
          }
        }, {
          key: "pickWallpaper",
          value: function pickWallpaper(event, wallpaper) {
            event.preventDefault();
            wallpaper.click();
          }
        }, {
          key: "pickLogo",
          value: function pickLogo(event, logo) {
            event.preventDefault();
            logo.click();
          }
        }, {
          key: "uploadLogo",
          value: function uploadLogo(event) {
            var _this4 = this;

            event.preventDefault();

            if (event.target.files.length > 0) {
              var _event$target$files = _slicedToArray(event.target.files, 1),
                  file = _event$target$files[0];

              this.$org.uploadLogo(file).subscribe(function (result) {
                _this4.$snackBar.open(result.message, '', {
                  duration: 3000
                });
              }, function (error) {
                _this4.$snackBar.open(error.message, '', {
                  duration: 3000
                });
              });
            }
          }
        }, {
          key: "uploadWallpaper",
          value: function uploadWallpaper(event) {
            var _this5 = this;

            event.preventDefault();

            if (event.target.files.length > 0) {
              var _event$target$files2 = _slicedToArray(event.target.files, 1),
                  file = _event$target$files2[0];

              this.$org.uploadWallpaper(file).subscribe(function (result) {
                _this5.$snackBar.open(result.message, '', {
                  duration: 3000
                });
              }, function (error) {
                _this5.$snackBar.open(error.message, '', {
                  duration: 3000
                });
              });
            }
          }
        }, {
          key: "org",
          get: function get() {
            var _a;

            return (_a = this.$authentication.user) === null || _a === void 0 ? void 0 : _a.org;
          }
        }, {
          key: "wallpaperPath",
          get: function get() {
            return this.$org.wallpaperPath;
          }
        }, {
          key: "logoPath",
          get: function get() {
            return this.$org.logoPath;
          }
        }]);

        return OrgComponent;
      }();

      OrgComponent.??fac = function OrgComponent_Factory(t) {
        return new (t || OrgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_services_org_service__WEBPACK_IMPORTED_MODULE_4__["OrgService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_services_department_service__WEBPACK_IMPORTED_MODULE_5__["DepartmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheet"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_services_breakpoints_service__WEBPACK_IMPORTED_MODULE_8__["BreakPointsService"]));
      };

      OrgComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: OrgComponent,
        selectors: [["app-org"]],
        decls: 87,
        vars: 22,
        consts: [[1, "container-fluid", "container-cover", "container-org"], [1, "row"], [1, "col-12", "col-lg-5"], ["mat-card-avatar", "", 1, "org-logo", 3, "ngStyle"], [1, "spacer"], ["mat-icon-button", "", 1, "mat-elevation-z", 3, "matMenuTriggerFor"], ["src", "assets/images/edit.svg", "width", "18px"], ["type", "file", "accept", "image/jpg,image/jpeg,image/png", 1, "d-none", 3, "change"], ["logo", ""], ["wallpaper", ""], ["medit", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-card-image", "", 3, "src"], [1, "col-12"], ["hintLabel", "What it is called", "appearance", "outline", 1, "w-100"], ["type", "text", "matInput", "", "maxlength", "75", "placeholder", "Main", "readonly", "", 3, "value"], ["name", ""], ["align", "end"], ["hintLabel", "Where they call you", "appearance", "outline", 1, "w-100"], ["type", "text", "matInput", "", "maxlength", "10", "placeholder", "##########", "readonly", "", 3, "value"], ["phone", ""], ["hintLabel", "Where they visit you", "appearance", "outline", 1, "w-100"], ["type", "text", "matInput", "", "maxlength", "255", "placeholder", "https://air.io", "readonly", "", 3, "value"], ["website", ""], ["hintLabel", "Where they spam you", "appearance", "outline", 1, "w-100"], ["type", "text", "matInput", "", "maxlength", "320", "placeholder", "user@air.io", "readonly", "", 3, "value"], ["email", ""], ["hintLabel", "Your unique namespace", "appearance", "outline", 1, "w-100"], ["type", "text", "matInput", "", "maxlength", "10", "placeholder", "AIR", "readonly", "", 3, "value"], ["slug", ""], [1, "col-12", "col-lg-7"], ["mat-mini-fab", "", "class", "mat-elevation-z", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 3, "click", 4, "ngIf"], [3, "dataSource"], ["matColumnDef", "id"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "action"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["mat-mini-fab", "", 1, "mat-elevation-z", 3, "click"], ["src", "assets/images/add.svg"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["mat-sort-header", ""], ["mat-icon-button", "", 1, "mat-elevation-z", 3, "click"]],
        template: function OrgComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](12, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "input", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("change", function OrgComponent_Template_input_change_13_listener($event) {
              return ctx.uploadLogo($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "input", 7, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("change", function OrgComponent_Template_input_change_15_listener($event) {
              return ctx.uploadWallpaper($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "mat-menu", null, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function OrgComponent_Template_button_click_19_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r28);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](14);

              return ctx.pickLogo($event, _r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](20, "Logo");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function OrgComponent_Template_button_click_21_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r28);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](16);

              return ctx.pickWallpaper($event, _r1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](22, "Wallpaper");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](23, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "mat-form-field", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](29, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](30, "input", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "mat-hint", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](36, "Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](37, "input", 19, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "mat-hint", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "mat-form-field", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](42, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](43, "Website");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](44, "input", 22, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](46, "mat-hint", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](48, "mat-form-field", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](49, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](50, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](51, "input", 25, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](53, "mat-hint", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](55, "mat-form-field", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](56, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](57, "SLUG");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](58, "input", 28, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](60, "mat-hint", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](61);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](62, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](63, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](64, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](65, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](66, "Departments");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](67, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](68, "Yet another level of heirarchy");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](69, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](70, OrgComponent_button_70_Template, 2, 0, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](71, OrgComponent_button_71_Template, 2, 0, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](72, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](73, "mat-table", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](74, 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](75, OrgComponent_mat_header_cell_75_Template, 2, 0, "mat-header-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](76, OrgComponent_mat_cell_76_Template, 2, 1, "mat-cell", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](77, 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](78, OrgComponent_mat_header_cell_78_Template, 2, 0, "mat-header-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](79, OrgComponent_mat_cell_79_Template, 2, 1, "mat-cell", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](80, 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](81, OrgComponent_mat_header_cell_81_Template, 2, 0, "mat-header-cell", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](82, OrgComponent_mat_cell_82_Template, 3, 0, "mat-cell", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](83, OrgComponent_mat_header_row_83_Template, 1, 0, "mat-header-row", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](84, OrgComponent_mat_row_84_Template, 1, 0, "mat-row", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](85, "mat-card-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](86, " She said what you know about love? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](18);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](31);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](38);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](45);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](52);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](59);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](20, _c0, "url(" + ctx.logoPath + ")"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"]((ctx.org == null ? null : ctx.org.name) || "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"]((ctx.org == null ? null : ctx.org.website) || "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("matMenuTriggerFor", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("src", ctx.wallpaperPath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("value", (ctx.org == null ? null : ctx.org.name) || "Untitled");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("", _r3.value.length || 0, " / 75");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("value", (ctx.org == null ? null : ctx.org.phone) || "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("", _r4.value.length || 0, " / 10");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("value", (ctx.org == null ? null : ctx.org.website) || "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("", _r5.value.length || 0, " / 255");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("value", (ctx.org == null ? null : ctx.org.email) || "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("", _r6.value.length || 0, " / 320");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("value", (ctx.org == null ? null : ctx.org.slug) || "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("", _r7.value.length || 0, " / 10");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.breakpoints.isMD == false);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.breakpoints.isMD == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("dataSource", ctx.dtds);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("matHeaderRowDef", ctx.dtdc);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("matRowDefColumns", ctx.dtdc);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardAvatar"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardSubtitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardFooter"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]],
        styles: [".container-org[_ngcontent-%COMP%] {\r\n    padding-top: 16px;\r\n}\r\n\r\n.mat-card-content[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%] {\r\n  margin-left: -16px;\r\n  margin-right: -16px;\r\n}\r\n\r\n.mat-column-action[_ngcontent-%COMP%] {\r\n  max-width: 64px;\r\n}\r\n\r\n.mat-column-short[_ngcontent-%COMP%] {\r\n  max-width: 128px;\r\n}\r\n\r\n.mat-column-id[_ngcontent-%COMP%] {\r\n  max-width: 96px;\r\n}\r\n\r\n.org-logo[_ngcontent-%COMP%] {\r\n  border-radius: 0;\r\n  background-size: contain;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJvcmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItb3JnIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQtY29udGVudCAubWF0LXRhYmxlIHtcclxuICBtYXJnaW4tbGVmdDogLTE2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tYWN0aW9uIHtcclxuICBtYXgtd2lkdGg6IDY0cHg7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLXNob3J0IHtcclxuICBtYXgtd2lkdGg6IDEyOHB4O1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1pZCB7XHJcbiAgbWF4LXdpZHRoOiA5NnB4O1xyXG59XHJcblxyXG4ub3JnLWxvZ28ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "rNo6":
    /*!*************************************************!*\
      !*** ./src/app/admin/org/org-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: OrgRoutingModule */

    /***/
    function rNo6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrgRoutingModule", function () {
        return OrgRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _admin_org_org_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @admin/org/org.component */
      "ayzI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _admin_org_org_component__WEBPACK_IMPORTED_MODULE_1__["OrgComponent"]
      }];

      var OrgRoutingModule = function OrgRoutingModule() {
        _classCallCheck(this, OrgRoutingModule);
      };

      OrgRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
        type: OrgRoutingModule
      });
      OrgRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
        factory: function OrgRoutingModule_Factory(t) {
          return new (t || OrgRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](OrgRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "wZ+S":
    /*!*****************************************!*\
      !*** ./src/app/admin/org/org.module.ts ***!
      \*****************************************/

    /*! exports provided: OrgModule */

    /***/
    function wZS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrgModule", function () {
        return OrgModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _admin_org_org_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @admin/org/org-routing.module */
      "rNo6");
      /* harmony import */


      var _admin_org_org_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @admin/org/org.component */
      "ayzI");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _admin_org_department_play_department_play_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @admin/org/department-play/department-play.component */
      "BHRT");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "2ChS");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var OrgModule = function OrgModule() {
        _classCallCheck(this, OrgModule);
      };

      OrgModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????defineNgModule"]({
        type: OrgModule
      });
      OrgModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????defineInjector"]({
        factory: function OrgModule_Factory(t) {
          return new (t || OrgModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _admin_org_org_routing_module__WEBPACK_IMPORTED_MODULE_1__["OrgRoutingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheetModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["????setNgModuleScope"](OrgModule, {
          declarations: [_admin_org_org_component__WEBPACK_IMPORTED_MODULE_2__["OrgComponent"], _admin_org_department_play_department_play_component__WEBPACK_IMPORTED_MODULE_6__["DepartmentPlayComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _admin_org_org_routing_module__WEBPACK_IMPORTED_MODULE_1__["OrgRoutingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheetModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=admin-org-org-module-es5.js.map