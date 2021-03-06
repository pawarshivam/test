(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "A5z7":
    /*!***********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js ***!
      \***********************************************************************/

    /*! exports provided: MAT_CHIPS_DEFAULT_OPTIONS, MAT_CHIP_AVATAR, MAT_CHIP_REMOVE, MAT_CHIP_TRAILING_ICON, MatChip, MatChipAvatar, MatChipInput, MatChipList, MatChipListChange, MatChipRemove, MatChipSelectionChange, MatChipTrailingIcon, MatChipsModule, ??0 */

    /***/
    function A5z7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_CHIPS_DEFAULT_OPTIONS", function () {
        return MAT_CHIPS_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_CHIP_AVATAR", function () {
        return MAT_CHIP_AVATAR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_CHIP_REMOVE", function () {
        return MAT_CHIP_REMOVE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_CHIP_TRAILING_ICON", function () {
        return MAT_CHIP_TRAILING_ICON;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChip", function () {
        return MatChip;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipAvatar", function () {
        return MatChipAvatar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipInput", function () {
        return MatChipInput;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipList", function () {
        return MatChipList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipListChange", function () {
        return MatChipListChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipRemove", function () {
        return MatChipRemove;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipSelectionChange", function () {
        return MatChipSelectionChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipTrailingIcon", function () {
        return MatChipTrailingIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatChipsModule", function () {
        return MatChipsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??0", function () {
        return ??0;
      });
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Event object emitted by MatChip when selected or deselected. */


      var _c0 = ["*"];

      var MatChipSelectionChange = function MatChipSelectionChange(
      /** Reference to the chip that emitted the event. */
      source,
      /** Whether the chip that emitted the event is selected. */
      selected) {
        var isUserInput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        _classCallCheck(this, MatChipSelectionChange);

        this.source = source;
        this.selected = selected;
        this.isUserInput = isUserInput;
      };
      /**
       * Injection token that can be used to reference instances of `MatChipRemove`. It serves as
       * alternative token to the actual `MatChipRemove` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var MAT_CHIP_REMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatChipRemove');
      /**
       * Injection token that can be used to reference instances of `MatChipAvatar`. It serves as
       * alternative token to the actual `MatChipAvatar` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */

      var MAT_CHIP_AVATAR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatChipAvatar');
      /**
       * Injection token that can be used to reference instances of `MatChipTrailingIcon`. It serves as
       * alternative token to the actual `MatChipTrailingIcon` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */

      var MAT_CHIP_TRAILING_ICON = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatChipTrailingIcon'); // Boilerplate for applying mixins to MatChip.

      /** @docs-private */

      var MatChipBase = function MatChipBase(_elementRef) {
        _classCallCheck(this, MatChipBase);

        this._elementRef = _elementRef;
      };

      var _MatChipMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatChipBase), 'primary'), -1);
      /**
       * Dummy directive to add CSS class to chip avatar.
       * @docs-private
       */


      var MatChipAvatar = function MatChipAvatar() {
        _classCallCheck(this, MatChipAvatar);
      };

      MatChipAvatar.??fac = function MatChipAvatar_Factory(t) {
        return new (t || MatChipAvatar)();
      };

      MatChipAvatar.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({
        type: MatChipAvatar,
        selectors: [["mat-chip-avatar"], ["", "matChipAvatar", ""]],
        hostAttrs: [1, "mat-chip-avatar"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????ProvidersFeature"]([{
          provide: MAT_CHIP_AVATAR,
          useExisting: MatChipAvatar
        }])]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](MatChipAvatar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'mat-chip-avatar, [matChipAvatar]',
            host: {
              'class': 'mat-chip-avatar'
            },
            providers: [{
              provide: MAT_CHIP_AVATAR,
              useExisting: MatChipAvatar
            }]
          }]
        }], null, null);
      })();
      /**
       * Dummy directive to add CSS class to chip trailing icon.
       * @docs-private
       */


      var MatChipTrailingIcon = function MatChipTrailingIcon() {
        _classCallCheck(this, MatChipTrailingIcon);
      };

      MatChipTrailingIcon.??fac = function MatChipTrailingIcon_Factory(t) {
        return new (t || MatChipTrailingIcon)();
      };

      MatChipTrailingIcon.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({
        type: MatChipTrailingIcon,
        selectors: [["mat-chip-trailing-icon"], ["", "matChipTrailingIcon", ""]],
        hostAttrs: [1, "mat-chip-trailing-icon"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????ProvidersFeature"]([{
          provide: MAT_CHIP_TRAILING_ICON,
          useExisting: MatChipTrailingIcon
        }])]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](MatChipTrailingIcon, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'mat-chip-trailing-icon, [matChipTrailingIcon]',
            host: {
              'class': 'mat-chip-trailing-icon'
            },
            providers: [{
              provide: MAT_CHIP_TRAILING_ICON,
              useExisting: MatChipTrailingIcon
            }]
          }]
        }], null, null);
      })();
      /**
       * Material design styled Chip component. Used inside the MatChipList component.
       */


      var MatChip = /*#__PURE__*/function (_MatChipMixinBase2) {
        _inherits(MatChip, _MatChipMixinBase2);

        var _super = _createSuper(MatChip);

        function MatChip(_elementRef, _ngZone, platform, globalRippleOptions, _changeDetectorRef, _document, animationMode, tabIndex) {
          var _this;

          _classCallCheck(this, MatChip);

          _this = _super.call(this, _elementRef);
          _this._elementRef = _elementRef;
          _this._ngZone = _ngZone;
          _this._changeDetectorRef = _changeDetectorRef;
          /** Whether the chip has focus. */

          _this._hasFocus = false;
          /** Whether the chip list is selectable */

          _this.chipListSelectable = true;
          /** Whether the chip list is in multi-selection mode. */

          _this._chipListMultiple = false;
          /** Whether the chip list as a whole is disabled. */

          _this._chipListDisabled = false;
          _this._selected = false;
          _this._selectable = true;
          _this._disabled = false;
          _this._removable = true;
          /** Emits when the chip is focused. */

          _this._onFocus = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /** Emits when the chip is blured. */

          _this._onBlur = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /** Emitted when the chip is selected or deselected. */

          _this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Emitted when the chip is destroyed. */

          _this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Emitted when a chip is to be removed. */

          _this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

          _this._addHostClassName(); // Dynamically create the ripple target, append it within the chip, and use it as the
          // chip's ripple target. Adding the class '.mat-chip-ripple' ensures that it will have
          // the proper styles.


          _this._chipRippleTarget = _document.createElement('div');

          _this._chipRippleTarget.classList.add('mat-chip-ripple');

          _this._elementRef.nativeElement.appendChild(_this._chipRippleTarget);

          _this._chipRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["RippleRenderer"](_assertThisInitialized(_this), _ngZone, _this._chipRippleTarget, platform);

          _this._chipRipple.setupTriggerEvents(_elementRef);

          _this.rippleConfig = globalRippleOptions || {};
          _this._animationsDisabled = animationMode === 'NoopAnimations';
          _this.tabIndex = tabIndex != null ? parseInt(tabIndex) || -1 : -1;
          return _this;
        }
        /**
         * Whether ripples are disabled on interaction
         * @docs-private
         */


        _createClass(MatChip, [{
          key: "rippleDisabled",
          get: function get() {
            return this.disabled || this.disableRipple || this._animationsDisabled || !!this.rippleConfig.disabled;
          }
          /** Whether the chip is selected. */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(value) {
            var coercedValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

            if (coercedValue !== this._selected) {
              this._selected = coercedValue;

              this._dispatchSelectionChange();
            }
          }
          /** The value of the chip. Defaults to the content inside `<mat-chip>` tags. */

        }, {
          key: "value",
          get: function get() {
            return this._value !== undefined ? this._value : this._elementRef.nativeElement.textContent;
          },
          set: function set(value) {
            this._value = value;
          }
          /**
           * Whether or not the chip is selectable. When a chip is not selectable,
           * changes to its selected state are always ignored. By default a chip is
           * selectable, and it becomes non-selectable if its parent chip list is
           * not selectable.
           */

        }, {
          key: "selectable",
          get: function get() {
            return this._selectable && this.chipListSelectable;
          },
          set: function set(value) {
            this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
          }
          /** Whether the chip is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._chipListDisabled || this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
          }
          /**
           * Determines whether or not the chip displays the remove styling and emits (removed) events.
           */

        }, {
          key: "removable",
          get: function get() {
            return this._removable;
          },
          set: function set(value) {
            this._removable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
          }
          /** The ARIA selected applied to the chip. */

        }, {
          key: "ariaSelected",
          get: function get() {
            // Remove the `aria-selected` when the chip is deselected in single-selection mode, because
            // it adds noise to NVDA users where "not selected" will be read out for each chip.
            return this.selectable && (this._chipListMultiple || this.selected) ? this.selected.toString() : null;
          }
        }, {
          key: "_addHostClassName",
          value: function _addHostClassName() {
            var basicChipAttrName = 'mat-basic-chip';
            var element = this._elementRef.nativeElement;

            if (element.hasAttribute(basicChipAttrName) || element.tagName.toLowerCase() === basicChipAttrName) {
              element.classList.add(basicChipAttrName);
              return;
            } else {
              element.classList.add('mat-standard-chip');
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed.emit({
              chip: this
            });

            this._chipRipple._removeTriggerEvents();
          }
          /** Selects the chip. */

        }, {
          key: "select",
          value: function select() {
            if (!this._selected) {
              this._selected = true;

              this._dispatchSelectionChange();

              this._changeDetectorRef.markForCheck();
            }
          }
          /** Deselects the chip. */

        }, {
          key: "deselect",
          value: function deselect() {
            if (this._selected) {
              this._selected = false;

              this._dispatchSelectionChange();

              this._changeDetectorRef.markForCheck();
            }
          }
          /** Select this chip and emit selected event */

        }, {
          key: "selectViaInteraction",
          value: function selectViaInteraction() {
            if (!this._selected) {
              this._selected = true;

              this._dispatchSelectionChange(true);

              this._changeDetectorRef.markForCheck();
            }
          }
          /** Toggles the current selected state of this chip. */

        }, {
          key: "toggleSelected",
          value: function toggleSelected() {
            var isUserInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this._selected = !this.selected;

            this._dispatchSelectionChange(isUserInput);

            this._changeDetectorRef.markForCheck();

            return this.selected;
          }
          /** Allows for programmatic focusing of the chip. */

        }, {
          key: "focus",
          value: function focus() {
            if (!this._hasFocus) {
              this._elementRef.nativeElement.focus();

              this._onFocus.next({
                chip: this
              });
            }

            this._hasFocus = true;
          }
          /**
           * Allows for programmatic removal of the chip. Called by the MatChipList when the DELETE or
           * BACKSPACE keys are pressed.
           *
           * Informs any listeners of the removal request. Does not remove the chip from the DOM.
           */

        }, {
          key: "remove",
          value: function remove() {
            if (this.removable) {
              this.removed.emit({
                chip: this
              });
            }
          }
          /** Handles click events on the chip. */

        }, {
          key: "_handleClick",
          value: function _handleClick(event) {
            if (this.disabled) {
              event.preventDefault();
            } else {
              event.stopPropagation();
            }
          }
          /** Handle custom key presses. */

        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            if (this.disabled) {
              return;
            }

            switch (event.keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["DELETE"]:
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["BACKSPACE"]:
                // If we are removable, remove the focused chip
                this.remove(); // Always prevent so page navigation does not occur

                event.preventDefault();
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["SPACE"]:
                // If we are selectable, toggle the focused chip
                if (this.selectable) {
                  this.toggleSelected(true);
                } // Always prevent space from scrolling the page since the list has focus


                event.preventDefault();
                break;
            }
          }
        }, {
          key: "_blur",
          value: function _blur() {
            var _this2 = this;

            // When animations are enabled, Angular may end up removing the chip from the DOM a little
            // earlier than usual, causing it to be blurred and throwing off the logic in the chip list
            // that moves focus not the next item. To work around the issue, we defer marking the chip
            // as not focused until the next time the zone stabilizes.
            this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(function () {
              _this2._ngZone.run(function () {
                _this2._hasFocus = false;

                _this2._onBlur.next({
                  chip: _this2
                });
              });
            });
          }
        }, {
          key: "_dispatchSelectionChange",
          value: function _dispatchSelectionChange() {
            var isUserInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this.selectionChange.emit({
              source: this,
              isUserInput: isUserInput,
              selected: this._selected
            });
          }
        }]);

        return MatChip;
      }(_MatChipMixinBase);

      MatChip.??fac = function MatChip_Factory(t) {
        return new (t || MatChip)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_RIPPLE_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????injectAttribute"]('tabindex'));
      };

      MatChip.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({
        type: MatChip,
        selectors: [["mat-basic-chip"], ["", "mat-basic-chip", ""], ["mat-chip"], ["", "mat-chip", ""]],
        contentQueries: function MatChip_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????contentQuery"](dirIndex, MAT_CHIP_AVATAR, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????contentQuery"](dirIndex, MAT_CHIP_TRAILING_ICON, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????contentQuery"](dirIndex, MAT_CHIP_REMOVE, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.avatar = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.trailingIcon = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.removeIcon = _t.first);
          }
        },
        hostAttrs: ["role", "option", 1, "mat-chip", "mat-focus-indicator"],
        hostVars: 14,
        hostBindings: function MatChip_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MatChip_click_HostBindingHandler($event) {
              return ctx._handleClick($event);
            })("keydown", function MatChip_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            })("focus", function MatChip_focus_HostBindingHandler() {
              return ctx.focus();
            })("blur", function MatChip_blur_HostBindingHandler() {
              return ctx._blur();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????attribute"]("tabindex", ctx.disabled ? null : ctx.tabIndex)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString())("aria-selected", ctx.ariaSelected);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("mat-chip-selected", ctx.selected)("mat-chip-with-avatar", ctx.avatar)("mat-chip-with-trailing-icon", ctx.trailingIcon || ctx.removeIcon)("mat-chip-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationsDisabled);
          }
        },
        inputs: {
          color: "color",
          disableRipple: "disableRipple",
          tabIndex: "tabIndex",
          selected: "selected",
          value: "value",
          selectable: "selectable",
          disabled: "disabled",
          removable: "removable"
        },
        outputs: {
          selectionChange: "selectionChange",
          destroyed: "destroyed",
          removed: "removed"
        },
        exportAs: ["matChip"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????InheritDefinitionFeature"]]
      });

      MatChip.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }];
      };

      MatChip.propDecorators = {
        avatar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MAT_CHIP_AVATAR]
        }],
        trailingIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MAT_CHIP_TRAILING_ICON]
        }],
        removeIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [MAT_CHIP_REMOVE]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        removable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        destroyed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        removed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](MatChip, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]",
            inputs: ['color', 'disableRipple', 'tabIndex'],
            exportAs: 'matChip',
            host: {
              'class': 'mat-chip mat-focus-indicator',
              '[attr.tabindex]': 'disabled ? null : tabIndex',
              'role': 'option',
              '[class.mat-chip-selected]': 'selected',
              '[class.mat-chip-with-avatar]': 'avatar',
              '[class.mat-chip-with-trailing-icon]': 'trailingIcon || removeIcon',
              '[class.mat-chip-disabled]': 'disabled',
              '[class._mat-animation-noopable]': '_animationsDisabled',
              '[attr.disabled]': 'disabled || null',
              '[attr.aria-disabled]': 'disabled.toString()',
              '[attr.aria-selected]': 'ariaSelected',
              '(click)': '_handleClick($event)',
              '(keydown)': '_handleKeydown($event)',
              '(focus)': 'focus()',
              '(blur)': '_blur()'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
              args: ['tabindex']
            }]
          }];
        }, {
          selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          destroyed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          removed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          selectable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          removable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          avatar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MAT_CHIP_AVATAR]
          }],
          trailingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MAT_CHIP_TRAILING_ICON]
          }],
          removeIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MAT_CHIP_REMOVE]
          }]
        });
      })();
      /**
       * Applies proper (click) support and adds styling for use with the Material Design "cancel" icon
       * available at https://material.io/icons/#ic_cancel.
       *
       * Example:
       *
       *     `<mat-chip>
       *       <mat-icon matChipRemove>cancel</mat-icon>
       *     </mat-chip>`
       *
       * You *may* use a custom icon, but you may need to override the `mat-chip-remove` positioning
       * styles to properly center the icon within the chip.
       */


      var MatChipRemove = /*#__PURE__*/function () {
        function MatChipRemove(_parentChip, elementRef) {
          _classCallCheck(this, MatChipRemove);

          this._parentChip = _parentChip;

          if (elementRef.nativeElement.nodeName === 'BUTTON') {
            elementRef.nativeElement.setAttribute('type', 'button');
          }
        }
        /** Calls the parent chip's public `remove()` method if applicable. */


        _createClass(MatChipRemove, [{
          key: "_handleClick",
          value: function _handleClick(event) {
            var parentChip = this._parentChip;

            if (parentChip.removable && !parentChip.disabled) {
              parentChip.remove();
            } // We need to stop event propagation because otherwise the event will bubble up to the
            // form field and cause the `onContainerClick` method to be invoked. This method would then
            // reset the focused chip that has been focused after chip removal. Usually the parent
            // the parent click listener of the `MatChip` would prevent propagation, but it can happen
            // that the chip is being removed before the event bubbles up.


            event.stopPropagation();
          }
        }]);

        return MatChipRemove;
      }();

      MatChipRemove.??fac = function MatChipRemove_Factory(t) {
        return new (t || MatChipRemove)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](MatChip), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
      };

      MatChipRemove.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({
        type: MatChipRemove,
        selectors: [["", "matChipRemove", ""]],
        hostAttrs: [1, "mat-chip-remove", "mat-chip-trailing-icon"],
        hostBindings: function MatChipRemove_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function MatChipRemove_click_HostBindingHandler($event) {
              return ctx._handleClick($event);
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????ProvidersFeature"]([{
          provide: MAT_CHIP_REMOVE,
          useExisting: MatChipRemove
        }])]
      });

      MatChipRemove.ctorParameters = function () {
        return [{
          type: MatChip
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](MatChipRemove, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[matChipRemove]',
            host: {
              'class': 'mat-chip-remove mat-chip-trailing-icon',
              '(click)': '_handleClick($event)'
            },
            providers: [{
              provide: MAT_CHIP_REMOVE,
              useExisting: MatChipRemove
            }]
          }]
        }], function () {
          return [{
            type: MatChip
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token to be used to override the default options for the chips module. */


      var MAT_CHIPS_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-chips-default-options');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatChipList.

      /** @docs-private */

      var MatChipListBase = function MatChipListBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup,
      /** @docs-private */
      ngControl) {
        _classCallCheck(this, MatChipListBase);

        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
      };

      var _MatChipListMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinErrorState"])(MatChipListBase); // Increasing integer for generating unique ids for chip-list components.


      var nextUniqueId = 0;
      /** Change event object that is emitted when the chip list value has changed. */

      var MatChipListChange = function MatChipListChange(
      /** Chip list that emitted the event. */
      source,
      /** Value of the chip list when the event was emitted. */
      value) {
        _classCallCheck(this, MatChipListChange);

        this.source = source;
        this.value = value;
      };
      /**
       * A material design chips component (named ChipList for its similarity to the List component).
       */


      var MatChipList = /*#__PURE__*/function (_MatChipListMixinBase2) {
        _inherits(MatChipList, _MatChipListMixinBase2);

        var _super2 = _createSuper(MatChipList);

        function MatChipList(_elementRef, _changeDetectorRef, _dir, _parentForm, _parentFormGroup, _defaultErrorStateMatcher,
        /** @docs-private */
        ngControl) {
          var _this3;

          _classCallCheck(this, MatChipList);

          _this3 = _super2.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
          _this3._elementRef = _elementRef;
          _this3._changeDetectorRef = _changeDetectorRef;
          _this3._dir = _dir;
          _this3.ngControl = ngControl;
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

          _this3.controlType = 'mat-chip-list';
          /**
           * When a chip is destroyed, we store the index of the destroyed chip until the chips
           * query list notifies about the update. This is necessary because we cannot determine an
           * appropriate chip that should receive focus until the array of chips updated completely.
           */

          _this3._lastDestroyedChipIndex = null;
          /** Subject that emits when the component has been destroyed. */

          _this3._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /** Uid of the chip list */

          _this3._uid = "mat-chip-list-".concat(nextUniqueId++);
          /** Tab index for the chip list. */

          _this3._tabIndex = 0;
          /**
           * User defined tab index.
           * When it is not null, use user defined tab index. Otherwise use _tabIndex
           */

          _this3._userTabIndex = null;
          /** Function when touched */

          _this3._onTouched = function () {};
          /** Function when changed */


          _this3._onChange = function () {};

          _this3._multiple = false;

          _this3._compareWith = function (o1, o2) {
            return o1 === o2;
          };

          _this3._required = false;
          _this3._disabled = false;
          /** Orientation of the chip list. */

          _this3.ariaOrientation = 'horizontal';
          _this3._selectable = true;
          /** Event emitted when the selected chip list value has been changed by the user. */

          _this3.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Event that emits whenever the raw value of the chip-list changes. This is here primarily
           * to facilitate the two-way binding for the `value` input.
           * @docs-private
           */

          _this3.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

          if (_this3.ngControl) {
            _this3.ngControl.valueAccessor = _assertThisInitialized(_this3);
          }

          return _this3;
        }
        /** The array of selected chips inside chip list. */


        _createClass(MatChipList, [{
          key: "selected",
          get: function get() {
            return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
          }
          /** The ARIA role applied to the chip list. */

        }, {
          key: "role",
          get: function get() {
            return this.empty ? null : 'listbox';
          }
          /** Whether the user should be allowed to select multiple chips. */

        }, {
          key: "multiple",
          get: function get() {
            return this._multiple;
          },
          set: function set(value) {
            this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

            this._syncChipsState();
          }
          /**
           * A function to compare the option values with the selected values. The first argument
           * is a value from an option. The second is a value from the selection. A boolean
           * should be returned.
           */

        }, {
          key: "compareWith",
          get: function get() {
            return this._compareWith;
          },
          set: function set(fn) {
            this._compareWith = fn;

            if (this._selectionModel) {
              // A different comparator means the selection could change.
              this._initializeSelection();
            }
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(value) {
            this.writeValue(value);
            this._value = value;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "id",
          get: function get() {
            return this._chipInput ? this._chipInput.id : this._uid;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
            this.stateChanges.next();
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "placeholder",
          get: function get() {
            return this._chipInput ? this._chipInput.placeholder : this._placeholder;
          },
          set: function set(value) {
            this._placeholder = value;
            this.stateChanges.next();
          }
          /** Whether any chips or the matChipInput inside of this chip-list has focus. */

        }, {
          key: "focused",
          get: function get() {
            return this._chipInput && this._chipInput.focused || this._hasFocusedChip();
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "empty",
          get: function get() {
            return (!this._chipInput || this._chipInput.empty) && (!this.chips || this.chips.length === 0);
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "shouldLabelFloat",
          get: function get() {
            return !this.empty || this.focused;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "disabled",
          get: function get() {
            return this.ngControl ? !!this.ngControl.disabled : this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

            this._syncChipsState();
          }
          /**
           * Whether or not this chip list is selectable. When a chip list is not selectable,
           * the selected states for all the chips inside the chip list are always ignored.
           */

        }, {
          key: "selectable",
          get: function get() {
            return this._selectable;
          },
          set: function set(value) {
            var _this4 = this;

            this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);

            if (this.chips) {
              this.chips.forEach(function (chip) {
                return chip.chipListSelectable = _this4._selectable;
              });
            }
          }
        }, {
          key: "tabIndex",
          set: function set(value) {
            this._userTabIndex = value;
            this._tabIndex = value;
          }
          /** Combined stream of all of the child chips' selection change events. */

        }, {
          key: "chipSelectionChanges",
          get: function get() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(function (chip) {
              return chip.selectionChange;
            })));
          }
          /** Combined stream of all of the child chips' focus change events. */

        }, {
          key: "chipFocusChanges",
          get: function get() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(function (chip) {
              return chip._onFocus;
            })));
          }
          /** Combined stream of all of the child chips' blur change events. */

        }, {
          key: "chipBlurChanges",
          get: function get() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(function (chip) {
              return chip._onBlur;
            })));
          }
          /** Combined stream of all of the child chips' remove change events. */

        }, {
          key: "chipRemoveChanges",
          get: function get() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"]).apply(void 0, _toConsumableArray(this.chips.map(function (chip) {
              return chip.destroyed;
            })));
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this5 = this;

            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusKeyManager"](this.chips).withWrap().withVerticalOrientation().withHomeAndEnd().withHorizontalOrientation(this._dir ? this._dir.value : 'ltr');

            if (this._dir) {
              this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed)).subscribe(function (dir) {
                return _this5._keyManager.withHorizontalOrientation(dir);
              });
            }

            this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed)).subscribe(function () {
              _this5._allowFocusEscape();
            }); // When the list changes, re-subscribe


            this.chips.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this._destroyed)).subscribe(function () {
              if (_this5.disabled) {
                // Since this happens after the content has been
                // checked, we need to defer it to the next tick.
                Promise.resolve().then(function () {
                  _this5._syncChipsState();
                });
              }

              _this5._resetChips(); // Reset chips selected/deselected status


              _this5._initializeSelection(); // Check to see if we need to update our tab index


              _this5._updateTabIndex(); // Check to see if we have a destroyed chip and need to refocus


              _this5._updateFocusForDestroyedChips();

              _this5.stateChanges.next();
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__["SelectionModel"](this.multiple, undefined, false);
            this.stateChanges.next();
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.ngControl) {
              // We need to re-evaluate this on every change detection cycle, because there are some
              // error triggers that we can't subscribe to (e.g. parent form submissions). This means
              // that whatever logic is in here has to be super lean or we risk destroying the performance.
              this.updateErrorState();

              if (this.ngControl.disabled !== this._disabled) {
                this.disabled = !!this.ngControl.disabled;
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();

            this.stateChanges.complete();

            this._dropSubscriptions();
          }
          /** Associates an HTML input element with this chip list. */

        }, {
          key: "registerInput",
          value: function registerInput(inputElement) {
            this._chipInput = inputElement; // We use this attribute to match the chip list to its input in test harnesses.
            // Set the attribute directly here to avoid "changed after checked" errors.

            this._elementRef.nativeElement.setAttribute('data-mat-chip-input', inputElement.id);
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "setDescribedByIds",
          value: function setDescribedByIds(ids) {
            this._ariaDescribedby = ids.join(' ');
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            if (this.chips) {
              this._setSelectionByValue(value, false);
            }
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
            this.stateChanges.next();
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "onContainerClick",
          value: function onContainerClick(event) {
            if (!this._originatesFromChip(event)) {
              this.focus();
            }
          }
          /**
           * Focuses the first non-disabled chip in this chip list, or the associated input when there
           * are no eligible chips.
           */

        }, {
          key: "focus",
          value: function focus(options) {
            if (this.disabled) {
              return;
            } // TODO: ARIA says this should focus the first `selected` chip if any are selected.
            // Focus on first element if there's no chipInput inside chip-list


            if (this._chipInput && this._chipInput.focused) {// do nothing
            } else if (this.chips.length > 0) {
              this._keyManager.setFirstItemActive();

              this.stateChanges.next();
            } else {
              this._focusInput(options);

              this.stateChanges.next();
            }
          }
          /** Attempt to focus an input if we have one. */

        }, {
          key: "_focusInput",
          value: function _focusInput(options) {
            if (this._chipInput) {
              this._chipInput.focus(options);
            }
          }
          /**
           * Pass events to the keyboard manager. Available here for tests.
           */

        }, {
          key: "_keydown",
          value: function _keydown(event) {
            var target = event.target; // If they are on an empty input and hit backspace, focus the last chip

            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["BACKSPACE"] && this._isInputEmpty(target)) {
              this._keyManager.setLastItemActive();

              event.preventDefault();
            } else if (target && target.classList.contains('mat-chip')) {
              this._keyManager.onKeydown(event);

              this.stateChanges.next();
            }
          }
          /**
           * Check the tab index as you should not be allowed to focus an empty list.
           */

        }, {
          key: "_updateTabIndex",
          value: function _updateTabIndex() {
            // If we have 0 chips, we should not allow keyboard focus
            this._tabIndex = this._userTabIndex || (this.chips.length === 0 ? -1 : 0);
          }
          /**
           * If the amount of chips changed, we need to update the
           * key manager state and focus the next closest chip.
           */

        }, {
          key: "_updateFocusForDestroyedChips",
          value: function _updateFocusForDestroyedChips() {
            // Move focus to the closest chip. If no other chips remain, focus the chip-list itself.
            if (this._lastDestroyedChipIndex != null) {
              if (this.chips.length) {
                var newChipIndex = Math.min(this._lastDestroyedChipIndex, this.chips.length - 1);

                this._keyManager.setActiveItem(newChipIndex);
              } else {
                this.focus();
              }
            }

            this._lastDestroyedChipIndex = null;
          }
          /**
           * Utility to ensure all indexes are valid.
           *
           * @param index The index to be checked.
           * @returns True if the index is valid for our list of chips.
           */

        }, {
          key: "_isValidIndex",
          value: function _isValidIndex(index) {
            return index >= 0 && index < this.chips.length;
          }
        }, {
          key: "_isInputEmpty",
          value: function _isInputEmpty(element) {
            if (element && element.nodeName.toLowerCase() === 'input') {
              var input = element;
              return !input.value;
            }

            return false;
          }
        }, {
          key: "_setSelectionByValue",
          value: function _setSelectionByValue(value) {
            var _this6 = this;

            var isUserInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            this._clearSelection();

            this.chips.forEach(function (chip) {
              return chip.deselect();
            });

            if (Array.isArray(value)) {
              value.forEach(function (currentValue) {
                return _this6._selectValue(currentValue, isUserInput);
              });

              this._sortValues();
            } else {
              var correspondingChip = this._selectValue(value, isUserInput); // Shift focus to the active item. Note that we shouldn't do this in multiple
              // mode, because we don't know what chip the user interacted with last.


              if (correspondingChip) {
                if (isUserInput) {
                  this._keyManager.setActiveItem(correspondingChip);
                }
              }
            }
          }
          /**
           * Finds and selects the chip based on its value.
           * @returns Chip that has the corresponding value.
           */

        }, {
          key: "_selectValue",
          value: function _selectValue(value) {
            var _this7 = this;

            var isUserInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var correspondingChip = this.chips.find(function (chip) {
              return chip.value != null && _this7._compareWith(chip.value, value);
            });

            if (correspondingChip) {
              isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();

              this._selectionModel.select(correspondingChip);
            }

            return correspondingChip;
          }
        }, {
          key: "_initializeSelection",
          value: function _initializeSelection() {
            var _this8 = this;

            // Defer setting the value in order to avoid the "Expression
            // has changed after it was checked" errors from Angular.
            Promise.resolve().then(function () {
              if (_this8.ngControl || _this8._value) {
                _this8._setSelectionByValue(_this8.ngControl ? _this8.ngControl.value : _this8._value, false);

                _this8.stateChanges.next();
              }
            });
          }
          /**
           * Deselects every chip in the list.
           * @param skip Chip that should not be deselected.
           */

        }, {
          key: "_clearSelection",
          value: function _clearSelection(skip) {
            this._selectionModel.clear();

            this.chips.forEach(function (chip) {
              if (chip !== skip) {
                chip.deselect();
              }
            });
            this.stateChanges.next();
          }
          /**
           * Sorts the model values, ensuring that they keep the same
           * order that they have in the panel.
           */

        }, {
          key: "_sortValues",
          value: function _sortValues() {
            var _this9 = this;

            if (this._multiple) {
              this._selectionModel.clear();

              this.chips.forEach(function (chip) {
                if (chip.selected) {
                  _this9._selectionModel.select(chip);
                }
              });
              this.stateChanges.next();
            }
          }
          /** Emits change event to set the model value. */

        }, {
          key: "_propagateChanges",
          value: function _propagateChanges(fallbackValue) {
            var valueToEmit = null;

            if (Array.isArray(this.selected)) {
              valueToEmit = this.selected.map(function (chip) {
                return chip.value;
              });
            } else {
              valueToEmit = this.selected ? this.selected.value : fallbackValue;
            }

            this._value = valueToEmit;
            this.change.emit(new MatChipListChange(this, valueToEmit));
            this.valueChange.emit(valueToEmit);

            this._onChange(valueToEmit);

            this._changeDetectorRef.markForCheck();
          }
          /** When blurred, mark the field as touched when focus moved outside the chip list. */

        }, {
          key: "_blur",
          value: function _blur() {
            var _this10 = this;

            if (!this._hasFocusedChip()) {
              this._keyManager.setActiveItem(-1);
            }

            if (!this.disabled) {
              if (this._chipInput) {
                // If there's a chip input, we should check whether the focus moved to chip input.
                // If the focus is not moved to chip input, mark the field as touched. If the focus moved
                // to chip input, do nothing.
                // Timeout is needed to wait for the focus() event trigger on chip input.
                setTimeout(function () {
                  if (!_this10.focused) {
                    _this10._markAsTouched();
                  }
                });
              } else {
                // If there's no chip input, then mark the field as touched.
                this._markAsTouched();
              }
            }
          }
          /** Mark the field as touched */

        }, {
          key: "_markAsTouched",
          value: function _markAsTouched() {
            this._onTouched();

            this._changeDetectorRef.markForCheck();

            this.stateChanges.next();
          }
          /**
           * Removes the `tabindex` from the chip list and resets it back afterwards, allowing the
           * user to tab out of it. This prevents the list from capturing focus and redirecting
           * it back to the first chip, creating a focus trap, if it user tries to tab away.
           */

        }, {
          key: "_allowFocusEscape",
          value: function _allowFocusEscape() {
            var _this11 = this;

            if (this._tabIndex !== -1) {
              this._tabIndex = -1;
              setTimeout(function () {
                _this11._tabIndex = _this11._userTabIndex || 0;

                _this11._changeDetectorRef.markForCheck();
              });
            }
          }
        }, {
          key: "_resetChips",
          value: function _resetChips() {
            this._dropSubscriptions();

            this._listenToChipsFocus();

            this._listenToChipsSelection();

            this._listenToChipsRemoved();
          }
        }, {
          key: "_dropSubscriptions",
          value: function _dropSubscriptions() {
            if (this._chipFocusSubscription) {
              this._chipFocusSubscription.unsubscribe();

              this._chipFocusSubscription = null;
            }

            if (this._chipBlurSubscription) {
              this._chipBlurSubscription.unsubscribe();

              this._chipBlurSubscription = null;
            }

            if (this._chipSelectionSubscription) {
              this._chipSelectionSubscription.unsubscribe();

              this._chipSelectionSubscription = null;
            }

            if (this._chipRemoveSubscription) {
              this._chipRemoveSubscription.unsubscribe();

              this._chipRemoveSubscription = null;
            }
          }
          /** Listens to user-generated selection events on each chip. */

        }, {
          key: "_listenToChipsSelection",
          value: function _listenToChipsSelection() {
            var _this12 = this;

            this._chipSelectionSubscription = this.chipSelectionChanges.subscribe(function (event) {
              event.source.selected ? _this12._selectionModel.select(event.source) : _this12._selectionModel.deselect(event.source); // For single selection chip list, make sure the deselected value is unselected.

              if (!_this12.multiple) {
                _this12.chips.forEach(function (chip) {
                  if (!_this12._selectionModel.isSelected(chip) && chip.selected) {
                    chip.deselect();
                  }
                });
              }

              if (event.isUserInput) {
                _this12._propagateChanges();
              }
            });
          }
          /** Listens to user-generated selection events on each chip. */

        }, {
          key: "_listenToChipsFocus",
          value: function _listenToChipsFocus() {
            var _this13 = this;

            this._chipFocusSubscription = this.chipFocusChanges.subscribe(function (event) {
              var chipIndex = _this13.chips.toArray().indexOf(event.chip);

              if (_this13._isValidIndex(chipIndex)) {
                _this13._keyManager.updateActiveItem(chipIndex);
              }

              _this13.stateChanges.next();
            });
            this._chipBlurSubscription = this.chipBlurChanges.subscribe(function () {
              _this13._blur();

              _this13.stateChanges.next();
            });
          }
        }, {
          key: "_listenToChipsRemoved",
          value: function _listenToChipsRemoved() {
            var _this14 = this;

            this._chipRemoveSubscription = this.chipRemoveChanges.subscribe(function (event) {
              var chip = event.chip;

              var chipIndex = _this14.chips.toArray().indexOf(event.chip); // In case the chip that will be removed is currently focused, we temporarily store
              // the index in order to be able to determine an appropriate sibling chip that will
              // receive focus.


              if (_this14._isValidIndex(chipIndex) && chip._hasFocus) {
                _this14._lastDestroyedChipIndex = chipIndex;
              }
            });
          }
          /** Checks whether an event comes from inside a chip element. */

        }, {
          key: "_originatesFromChip",
          value: function _originatesFromChip(event) {
            var currentElement = event.target;

            while (currentElement && currentElement !== this._elementRef.nativeElement) {
              if (currentElement.classList.contains('mat-chip')) {
                return true;
              }

              currentElement = currentElement.parentElement;
            }

            return false;
          }
          /** Checks whether any of the chips is focused. */

        }, {
          key: "_hasFocusedChip",
          value: function _hasFocusedChip() {
            return this.chips && this.chips.some(function (chip) {
              return chip._hasFocus;
            });
          }
          /** Syncs the list's state with the individual chips. */

        }, {
          key: "_syncChipsState",
          value: function _syncChipsState() {
            var _this15 = this;

            if (this.chips) {
              this.chips.forEach(function (chip) {
                chip._chipListDisabled = _this15._disabled;
                chip._chipListMultiple = _this15.multiple;
              });
            }
          }
        }]);

        return MatChipList;
      }(_MatChipListMixinBase);

      MatChipList.??fac = function MatChipList_Factory(t) {
        return new (t || MatChipList)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], 10));
      };

      MatChipList.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: MatChipList,
        selectors: [["mat-chip-list"]],
        contentQueries: function MatChipList_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????contentQuery"](dirIndex, MatChip, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.chips = _t);
          }
        },
        hostAttrs: [1, "mat-chip-list"],
        hostVars: 15,
        hostBindings: function MatChipList_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("focus", function MatChipList_focus_HostBindingHandler() {
              return ctx.focus();
            })("blur", function MatChipList_blur_HostBindingHandler() {
              return ctx._blur();
            })("keydown", function MatChipList_keydown_HostBindingHandler($event) {
              return ctx._keydown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????hostProperty"]("id", ctx._uid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????attribute"]("tabindex", ctx.disabled ? null : ctx._tabIndex)("aria-describedby", ctx._ariaDescribedby || null)("aria-required", ctx.role ? ctx.required : null)("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-multiselectable", ctx.multiple)("role", ctx.role)("aria-orientation", ctx.ariaOrientation);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("mat-chip-list-disabled", ctx.disabled)("mat-chip-list-invalid", ctx.errorState)("mat-chip-list-required", ctx.required);
          }
        },
        inputs: {
          ariaOrientation: ["aria-orientation", "ariaOrientation"],
          multiple: "multiple",
          compareWith: "compareWith",
          value: "value",
          required: "required",
          placeholder: "placeholder",
          disabled: "disabled",
          selectable: "selectable",
          tabIndex: "tabIndex",
          errorStateMatcher: "errorStateMatcher"
        },
        outputs: {
          change: "change",
          valueChange: "valueChange"
        },
        exportAs: ["matChipList"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????ProvidersFeature"]([{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldControl"],
          useExisting: MatChipList
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????InheritDefinitionFeature"]],
        ngContentSelectors: _c0,
        decls: 2,
        vars: 0,
        consts: [[1, "mat-chip-list-wrapper"]],
        template: function MatChipList_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????projectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????projection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }
        },
        styles: [".mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:\"\";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatChipList.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }]
        }];
      };

      MatChipList.propDecorators = {
        errorStateMatcher: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        ariaOrientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['aria-orientation']
        }],
        selectable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        chips: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [MatChip, {
            // We need to use `descendants: true`, because Ivy will no longer match
            // indirect descendants if it's left as false.
            descendants: true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](MatChipList, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'mat-chip-list',
            template: "<div class=\"mat-chip-list-wrapper\"><ng-content></ng-content></div>",
            exportAs: 'matChipList',
            host: {
              '[attr.tabindex]': 'disabled ? null : _tabIndex',
              '[attr.aria-describedby]': '_ariaDescribedby || null',
              '[attr.aria-required]': 'role ? required : null',
              '[attr.aria-disabled]': 'disabled.toString()',
              '[attr.aria-invalid]': 'errorState',
              '[attr.aria-multiselectable]': 'multiple',
              '[attr.role]': 'role',
              '[class.mat-chip-list-disabled]': 'disabled',
              '[class.mat-chip-list-invalid]': 'errorState',
              '[class.mat-chip-list-required]': 'required',
              '[attr.aria-orientation]': 'ariaOrientation',
              'class': 'mat-chip-list',
              '(focus)': 'focus()',
              '(blur)': '_blur()',
              '(keydown)': '_keydown($event)',
              '[id]': '_uid'
            },
            providers: [{
              provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldControl"],
              useExisting: MatChipList
            }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:\"\";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }]
          }];
        }, {
          ariaOrientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-orientation']
          }],
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          selectable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          errorStateMatcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          chips: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [MatChip, {
              // We need to use `descendants: true`, because Ivy will no longer match
              // indirect descendants if it's left as false.
              descendants: true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Increasing integer for generating unique ids.


      var nextUniqueId$1 = 0;
      /**
       * Directive that adds chip-specific behaviors to an input element inside `<mat-form-field>`.
       * May be placed inside or outside of an `<mat-chip-list>`.
       */

      var MatChipInput = /*#__PURE__*/function () {
        function MatChipInput(_elementRef, _defaultOptions) {
          _classCallCheck(this, MatChipInput);

          this._elementRef = _elementRef;
          this._defaultOptions = _defaultOptions;
          /** Whether the control is focused. */

          this.focused = false;
          this._addOnBlur = false;
          /**
           * The list of key codes that will trigger a chipEnd event.
           *
           * Defaults to `[ENTER]`.
           */

          this.separatorKeyCodes = this._defaultOptions.separatorKeyCodes;
          /** Emitted when a chip is to be added. */

          this.chipEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** The input's placeholder text. */

          this.placeholder = '';
          /** Unique id for the input. */

          this.id = "mat-chip-list-input-".concat(nextUniqueId$1++);
          this._disabled = false;
          this._inputElement = this._elementRef.nativeElement;
        }
        /** Register input for chip list */


        _createClass(MatChipInput, [{
          key: "chipList",
          set: function set(value) {
            if (value) {
              this._chipList = value;

              this._chipList.registerInput(this);
            }
          }
          /**
           * Whether or not the chipEnd event will be emitted when the input is blurred.
           */

        }, {
          key: "addOnBlur",
          get: function get() {
            return this._addOnBlur;
          },
          set: function set(value) {
            this._addOnBlur = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
          }
          /** Whether the input is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled || this._chipList && this._chipList.disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
          }
          /** Whether the input is empty. */

        }, {
          key: "empty",
          get: function get() {
            return !this._inputElement.value;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this._chipList.stateChanges.next();
          }
          /** Utility method to make host definition/tests more clear. */

        }, {
          key: "_keydown",
          value: function _keydown(event) {
            // Allow the user's focus to escape when they're tabbing forward. Note that we don't
            // want to do this when going backwards, because focus should go back to the first chip.
            if (event && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["TAB"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["hasModifierKey"])(event, 'shiftKey')) {
              this._chipList._allowFocusEscape();
            }

            this._emitChipEnd(event);
          }
          /** Checks to see if the blur should emit the (chipEnd) event. */

        }, {
          key: "_blur",
          value: function _blur() {
            if (this.addOnBlur) {
              this._emitChipEnd();
            }

            this.focused = false; // Blur the chip list if it is not focused

            if (!this._chipList.focused) {
              this._chipList._blur();
            }

            this._chipList.stateChanges.next();
          }
        }, {
          key: "_focus",
          value: function _focus() {
            this.focused = true;

            this._chipList.stateChanges.next();
          }
          /** Checks to see if the (chipEnd) event needs to be emitted. */

        }, {
          key: "_emitChipEnd",
          value: function _emitChipEnd(event) {
            if (!this._inputElement.value && !!event) {
              this._chipList._keydown(event);
            }

            if (!event || this._isSeparatorKey(event)) {
              this.chipEnd.emit({
                input: this._inputElement,
                value: this._inputElement.value
              });

              if (event) {
                event.preventDefault();
              }
            }
          }
        }, {
          key: "_onInput",
          value: function _onInput() {
            // Let chip list know whenever the value changes.
            this._chipList.stateChanges.next();
          }
          /** Focuses the input. */

        }, {
          key: "focus",
          value: function focus(options) {
            this._inputElement.focus(options);
          }
          /** Checks whether a keycode is one of the configured separators. */

        }, {
          key: "_isSeparatorKey",
          value: function _isSeparatorKey(event) {
            return !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["hasModifierKey"])(event) && new Set(this.separatorKeyCodes).has(event.keyCode);
          }
        }]);

        return MatChipInput;
      }();

      MatChipInput.??fac = function MatChipInput_Factory(t) {
        return new (t || MatChipInput)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](MAT_CHIPS_DEFAULT_OPTIONS));
      };

      MatChipInput.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({
        type: MatChipInput,
        selectors: [["input", "matChipInputFor", ""]],
        hostAttrs: [1, "mat-chip-input", "mat-input-element"],
        hostVars: 5,
        hostBindings: function MatChipInput_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("keydown", function MatChipInput_keydown_HostBindingHandler($event) {
              return ctx._keydown($event);
            })("blur", function MatChipInput_blur_HostBindingHandler() {
              return ctx._blur();
            })("focus", function MatChipInput_focus_HostBindingHandler() {
              return ctx._focus();
            })("input", function MatChipInput_input_HostBindingHandler() {
              return ctx._onInput();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????hostProperty"]("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????attribute"]("disabled", ctx.disabled || null)("placeholder", ctx.placeholder || null)("aria-invalid", ctx._chipList && ctx._chipList.ngControl ? ctx._chipList.ngControl.invalid : null)("aria-required", ctx._chipList && ctx._chipList.required || null);
          }
        },
        inputs: {
          separatorKeyCodes: ["matChipInputSeparatorKeyCodes", "separatorKeyCodes"],
          placeholder: "placeholder",
          id: "id",
          chipList: ["matChipInputFor", "chipList"],
          addOnBlur: ["matChipInputAddOnBlur", "addOnBlur"],
          disabled: "disabled"
        },
        outputs: {
          chipEnd: "matChipInputTokenEnd"
        },
        exportAs: ["matChipInput", "matChipInputFor"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????NgOnChangesFeature"]]
      });

      MatChipInput.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_CHIPS_DEFAULT_OPTIONS]
          }]
        }];
      };

      MatChipInput.propDecorators = {
        chipList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matChipInputFor']
        }],
        addOnBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matChipInputAddOnBlur']
        }],
        separatorKeyCodes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['matChipInputSeparatorKeyCodes']
        }],
        chipEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
          args: ['matChipInputTokenEnd']
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](MatChipInput, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'input[matChipInputFor]',
            exportAs: 'matChipInput, matChipInputFor',
            host: {
              'class': 'mat-chip-input mat-input-element',
              '(keydown)': '_keydown($event)',
              '(blur)': '_blur()',
              '(focus)': '_focus()',
              '(input)': '_onInput()',
              '[id]': 'id',
              '[attr.disabled]': 'disabled || null',
              '[attr.placeholder]': 'placeholder || null',
              '[attr.aria-invalid]': '_chipList && _chipList.ngControl ? _chipList.ngControl.invalid : null',
              '[attr.aria-required]': '_chipList && _chipList.required || null'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [MAT_CHIPS_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          separatorKeyCodes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['matChipInputSeparatorKeyCodes']
          }],
          chipEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['matChipInputTokenEnd']
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          chipList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['matChipInputFor']
          }],
          addOnBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['matChipInputAddOnBlur']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var CHIP_DECLARATIONS = [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon];
      var ??0 = {
        separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"]]
      };

      var MatChipsModule = function MatChipsModule() {
        _classCallCheck(this, MatChipsModule);
      };

      MatChipsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: MatChipsModule
      });
      MatChipsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        factory: function MatChipsModule_Factory(t) {
          return new (t || MatChipsModule)();
        },
        providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"], {
          provide: MAT_CHIPS_DEFAULT_OPTIONS,
          useValue: ??0
        }],
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](MatChipsModule, {
          declarations: function declarations() {
            return [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](MatChipsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            exports: CHIP_DECLARATIONS,
            declarations: CHIP_DECLARATIONS,
            providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"], {
              provide: MAT_CHIPS_DEFAULT_OPTIONS,
              useValue: ??0
            }]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=chips.js.map

      /***/

    },

    /***/
    "Fyp9":
    /*!**********************************************!*\
      !*** ./src/app/profile/otp/otp.component.ts ***!
      \**********************************************/

    /*! exports provided: OTPComponent */

    /***/
    function Fyp9(module, __webpack_exports__, __webpack_require__) {
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
            var _this16 = this;

            event.preventDefault();

            if (this.vfg.valid) {
              this.sse = '';
              this.vfg.disable();
              this.$authentication.verifyOTP(this.data.user.phone, this.vfg.value.otp).subscribe(function () {
                _this16.$authentication.updateUser(_this16.data.user).subscribe(function (result) {
                  _this16.vfg.enable();

                  _this16.$authentication.detox();

                  _this16.$snackBar.open(result.message, '', {
                    duration: 3000
                  });

                  _this16.$bottomSheetRef.dismiss();

                  _this16.$router.navigate(['/home']);
                }, function (error) {
                  _this16.vfg.enable();

                  _this16.sse = error.message;
                });
              }, function (error) {
                _this16.sse = error.message;
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

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "Verify OTP Sing up");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" We have shared a 6 digit OTP with ", ctx.data.user.phone, " ");

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
    "W6KJ":
    /*!**********************************************!*\
      !*** ./src/app/profile/profile.component.ts ***!
      \**********************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function W6KJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _profile_otp_otp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @profile/otp/otp.component */
      "Fyp9");
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


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "2ChS");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @services/config.service */
      "r4Kj");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function ProfileComponent_mat_option_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var department_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", department_r9.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", department_r9.name, " ");
        }
      }

      function ProfileComponent_p_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "p", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx_r7.sse, " ");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "background-image": a0
        };
      };

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent($authentication, $department, $bottomSheet, $snackBar, config) {
          _classCallCheck(this, ProfileComponent);

          this.$authentication = $authentication;
          this.$department = $department;
          this.$bottomSheet = $bottomSheet;
          this.$snackBar = $snackBar;
          this.config = config;
          this.sse = '';
          this.roles = [];
          this.departments = [];
          this.pfg = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            did: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^[0-9]$/)]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^[A-Za-z\s]{1,50}$/)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^.{1,30}$/)]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^[0-9]{10}$/)])
          });
          this.pfg.patchValue(Object.assign({}, this.$authentication.user));
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.getOrg();
          }
        }, {
          key: "updateUser",
          value: function updateUser(event) {
            var _this17 = this;

            event.preventDefault();

            if (this.pfg.valid) {
              this.sse = '';
              this.pfg.disable();
              this.$authentication.getOTP(this.pfg.value.phone).subscribe(function (result) {
                _this17.pfg.enable();

                _this17.$bottomSheet.open(_profile_otp_otp_component__WEBPACK_IMPORTED_MODULE_1__["OTPComponent"], {
                  data: {
                    user: _this17.pfg.value
                  },
                  disableClose: true
                });
              }, function (error) {
                _this17.pfg.enable();

                _this17.sse = error.message;
              });
            }
          }
        }, {
          key: "getOrg",
          value: function getOrg() {
            this.getDepartments();
          }
        }, {
          key: "getDepartments",
          value: function getDepartments() {
            var _this18 = this;

            this.$department.getDepartments().subscribe(function (departments) {
              _this18.departments = departments;
            }, function (error) {});
          }
        }, {
          key: "pickProfile",
          value: function pickProfile(event, profile) {
            event.preventDefault();
            profile.click();
          }
        }, {
          key: "uploadProfile",
          value: function uploadProfile(event) {
            var _this19 = this;

            event.preventDefault();

            if (event.target.files.length > 0) {
              var _event$target$files = _slicedToArray(event.target.files, 1),
                  file = _event$target$files[0];

              this.$authentication.uploadProfile(file).subscribe(function (result) {
                _this19.$snackBar.open(result.message, '', {
                  duration: 3000
                });
              }, function (error) {
                _this19.$snackBar.open(error.message, '', {
                  duration: 3000
                });
              });
            }
          }
        }, {
          key: "userName",
          get: function get() {
            var _a;

            return ((_a = this.$authentication.user) === null || _a === void 0 ? void 0 : _a.name) || 'Untitled';
          }
        }, {
          key: "roleLabel",
          get: function get() {
            var _a;

            var role = (_a = this.$authentication.user) === null || _a === void 0 ? void 0 : _a.role;

            if (role) {
              return role.label;
            } else {
              return '';
            }
          }
        }, {
          key: "profilePath",
          get: function get() {
            return this.$authentication.profilePath;
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.??fac = function ProfileComponent_Factory(t) {
        return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_services_department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheet"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]));
      };

      ProfileComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: ProfileComponent,
        selectors: [["app-profile"]],
        decls: 89,
        vars: 14,
        consts: [[1, "container-fluid", "container-cover"], [1, "container-profile"], [3, "formGroup", "ngSubmit"], [1, "d-flex", "justify-content-center", "bg-dotted"], ["mat-card-avatar", "", 1, "mat-card-avatar", 3, "ngStyle"], ["type", "file", "accept", "image/jpg,image/jpeg,image/png", 1, "d-none", 3, "change"], ["profile", ""], ["mat-mini-fab", "", "color", "secondary", 1, "mat-elevation-z", 3, "click"], ["src", "assets/images/edit.svg", "width", "18px"], [1, "row"], [1, "col-12"], [1, "mat-h2"], [1, "col-12", "col-lg-4"], ["hintLabel", "What they call you", "appearance", "outline", 1, "w-100"], ["type", "text", "matInput", "", "maxlength", "50", "placeholder", "Shivam Pawar", "formControlName", "name"], ["name", ""], ["align", "end"], [1, "col-12", "col-lg-3"], ["hintLabel", "Where they call you", "appearance", "outline", 1, "w-100"], ["type", "text", "matInput", "", "maxlength", "10", "placeholder", "##########", "formControlName", "phone"], ["phone", ""], [1, "col-12", "col-lg-7"], ["hintLabel", "Where they spam you", "appearance", "outline", 1, "w-100"], ["type", "email", "matInput", "", "maxlength", "320", "placeholder", "shivampawar@air.io", "formControlName", "email"], ["email", ""], ["hintLabel", "Your designation", "appearance", "outline", 1, "w-100"], ["type", "text", "matInput", "", "maxlength", "50", "placeholder", "Steve", "formControlName", "designation"], ["designation", ""], ["hintLabel", "Division of oragnization", "appearance", "outline", 1, "w-100"], ["formControlName", "did", 3, "disabled"], ["did", ""], [3, "value", 4, "ngFor", "ngForOf"], ["hintLabel", "Your privilege level", "appearance", "outline", 1, "w-100"], ["type", "text", "matInput", "", "placeholder", "Admin", "disabled", "", 3, "value"], [1, "sse-container"], ["class", "sse", 4, "ngIf"], [1, "col-12", "col-md-6"], [1, "checkbox-ack"], ["ack", ""], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "w-100", 3, "disabled"], [3, "value"], [1, "sse"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_2_listener($event) {
              return ctx.updateUser($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("change", function ProfileComponent_Template_input_change_12_listener($event) {
              return ctx.uploadProfile($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ProfileComponent_Template_button_click_14_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r10);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](13);

              return ctx.pickProfile($event, _r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](15, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "h2", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19, "Personal");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "mat-form-field", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](23, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](24, "input", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "mat-hint", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](29, "Allowed a-Z");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](33, "Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](34, "input", 19, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](37, "Allowed 0-9");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "mat-form-field", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](41, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](42, "input", 23, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](44, "mat-hint", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](46, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](47, "Provide a valid email address");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](48, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](49, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "h2", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](51, "Professional");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](52, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](53, "mat-form-field", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](54, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](55, "Designation");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](56, "input", 26, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](58, "mat-hint", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](59);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](60, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](61, "Allowed a-Z, 0-9");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](62, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](63, "mat-form-field", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](64, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](65, "Department");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](66, "mat-select", 29, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](68, ProfileComponent_mat_option_68_Template, 2, 2, "mat-option", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](69, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](70, "mat-form-field", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](71, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](72, "Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](73, "input", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](74, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](75, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](76, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](77, ProfileComponent_p_77_Template, 2, 1, "p", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](78, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](79, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](80, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](81, "mat-checkbox", 37, 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](83, " Above information is correct to the best of my knowledge ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](84, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](85, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](86, " Update ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](87, "mat-card-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](88, " She said what you know about love? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](25);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](43);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](57);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](82);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx.pfg);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("Hi ", ctx.userName, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx.roleLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](12, _c0, "url(" + ctx.profilePath + ")"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("", _r1.value.length || 0, " / 50");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("", _r3.value.length || 0, " / 320");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("", _r4.value.length || 0, " / 50");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", ctx.departments.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.departments);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("value", ctx.roleLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.sse);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", ctx.pfg.invalid || _r8.checked == false);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardAvatar"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardActions"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckbox"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardFooter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"]],
        styles: [".container-profile[_ngcontent-%COMP%] {\r\n  padding-top: 16px;\r\n}\r\n\r\n.mat-card-avatar[_ngcontent-%COMP%] {\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  width: 144px;\r\n  height: 144px;\r\n  position: relative;\r\n  margin: 16px 0;\r\n}\r\n\r\n.mat-card-avatar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n\r\n.checkbox-ack[_ngcontent-%COMP%] {\r\n  margin-left: 16px;\r\n  margin-bottom: 16px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztBQUNUOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLXByb2ZpbGUge1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQtYXZhdGFyIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgd2lkdGg6IDE0NHB4O1xyXG4gIGhlaWdodDogMTQ0cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMTZweCAwO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtYXZhdGFyIGJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uY2hlY2tib3gtYWNrIHtcclxuICBtYXJnaW4tbGVmdDogMTZweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "cRhG":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.module.ts ***!
      \*******************************************/

    /*! exports provided: ProfileModule */

    /***/
    function cRhG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
        return ProfileModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _profile_profile_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @profile/profile-routing.module */
      "v+7O");
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @profile/profile.component */
      "W6KJ");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "2ChS");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _profile_otp_otp_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @profile/otp/otp.component */
      "Fyp9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProfileModule = function ProfileModule() {
        _classCallCheck(this, ProfileModule);
      };

      ProfileModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["????defineNgModule"]({
        type: ProfileModule
      });
      ProfileModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["????defineInjector"]({
        factory: function ProfileModule_Factory(t) {
          return new (t || ProfileModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _profile_profile_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProfileRoutingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["????setNgModuleScope"](ProfileModule, {
          declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"], _profile_otp_otp_component__WEBPACK_IMPORTED_MODULE_13__["OTPComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _profile_profile_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProfileRoutingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"]]
        });
      })();
      /***/

    },

    /***/
    "v+7O":
    /*!***************************************************!*\
      !*** ./src/app/profile/profile-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ProfileRoutingModule */

    /***/
    function v7O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function () {
        return ProfileRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @profile/profile.component */
      "W6KJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"]
      }];

      var ProfileRoutingModule = function ProfileRoutingModule() {
        _classCallCheck(this, ProfileRoutingModule);
      };

      ProfileRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
        type: ProfileRoutingModule
      });
      ProfileRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
        factory: function ProfileRoutingModule_Factory(t) {
          return new (t || ProfileRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](ProfileRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map