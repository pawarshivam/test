(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @services/config.service */
      "r4Kj");
      /* harmony import */


      var _services_breakpoints_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @services/breakpoints.service */
      "2/li");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      function HomeComponent_h1_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.config.app.tagline);
        }
      }

      function HomeComponent_h1_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r1.config.app.tagline);
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(config, breakpoints) {
          _classCallCheck(this, HomeComponent);

          this.config = config;
          this.breakpoints = breakpoints;
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.??fac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_breakpoints_service__WEBPACK_IMPORTED_MODULE_2__["BreakPointsService"]));
      };

      HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 5,
        vars: 2,
        consts: [[1, "container", "container-lifted"], ["class", "mat-display-2 app-tagline", 4, "ngIf"], ["class", "mat-display-1 app-tagline", 4, "ngIf"], [1, "mat-elevation-z", "card-dark"], [1, "section"], [1, "mat-display-2", "app-tagline"], [1, "mat-display-1", "app-tagline"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, HomeComponent_h1_1_Template, 2, 1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, HomeComponent_h1_2_Template, 2, 1, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "mat-card-content", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.breakpoints.isMD);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.breakpoints.isMD == false);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"]],
        styles: [".card-dark[_ngcontent-%COMP%] {\r\n  background-color: #242424d4;\r\n}\r\n\r\n.card-dark[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n\r\n.app-tagline[_ngcontent-%COMP%] {\r\n  margin-top: 80px;\r\n  margin-left: 40px;\r\n  color: white;\r\n  font-weight: 800;\r\n}\r\n\r\n.section[_ngcontent-%COMP%] {\r\n  height: 320px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1kYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI0ZDQ7XHJcbn1cclxuXHJcbi5jYXJkLWRhcmsgKiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYXBwLXRhZ2xpbmUge1xyXG4gIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5zZWN0aW9uIHtcclxuICBoZWlnaHQ6IDMyMHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "A3+G":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomeRoutingModule */

    /***/
    function A3G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
        return HomeRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @home/home.component */
      "9vUh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
      }];

      var HomeRoutingModule = function HomeRoutingModule() {
        _classCallCheck(this, HomeRoutingModule);
      };

      HomeRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
        type: HomeRoutingModule
      });
      HomeRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
        factory: function HomeRoutingModule_Factory(t) {
          return new (t || HomeRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](HomeRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "ct+p":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomeModule */

    /***/
    function ctP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
        return HomeModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _home_home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @home/home-routing.module */
      "A3+G");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @home/home.component */
      "9vUh");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeModule = function HomeModule() {
        _classCallCheck(this, HomeModule);
      };

      HomeModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({
        type: HomeModule
      });
      HomeModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({
        factory: function HomeModule_Factory(t) {
          return new (t || HomeModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _home_home_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](HomeModule, {
          declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _home_home_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map