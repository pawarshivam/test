(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"], {
    /***/
    "0Em7":
    /*!***********************************************!*\
      !*** ./src/app/admin/admin-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: AdminRoutingModule */

    /***/
    function Em7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function () {
        return AdminRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        redirectTo: 'org',
        pathMatch: 'full'
      }, {
        path: 'org',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | admin-org-org-module */
          [__webpack_require__.e("default~admin-agendas-agendas-module~admin-feedbacks-feedbacks-module~admin-org-org-module~admin-use~f5d435ee"), __webpack_require__.e("default~admin-agendas-agendas-module~admin-feedbacks-feedbacks-module~admin-org-org-module~authentic~5ed2fa36"), __webpack_require__.e("common"), __webpack_require__.e("admin-org-org-module")]).then(__webpack_require__.bind(null,
          /*! @admin/org/org.module */
          "wZ+S")).then(function (module) {
            return module.OrgModule;
          });
        }
      }, {
        path: 'agendas',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | admin-agendas-agendas-module */
          [__webpack_require__.e("default~admin-agendas-agendas-module~admin-feedbacks-feedbacks-module~admin-org-org-module~admin-use~f5d435ee"), __webpack_require__.e("default~admin-agendas-agendas-module~admin-feedbacks-feedbacks-module~admin-org-org-module~authentic~5ed2fa36"), __webpack_require__.e("admin-agendas-agendas-module")]).then(__webpack_require__.bind(null,
          /*! @admin/agendas/agendas.module */
          "QIbk")).then(function (module) {
            return module.AgendasModule;
          });
        }
      }, {
        path: 'feedbacks',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | admin-feedbacks-feedbacks-module */
          [__webpack_require__.e("default~admin-agendas-agendas-module~admin-feedbacks-feedbacks-module~admin-org-org-module~admin-use~f5d435ee"), __webpack_require__.e("default~admin-agendas-agendas-module~admin-feedbacks-feedbacks-module~admin-org-org-module~authentic~5ed2fa36"), __webpack_require__.e("default~admin-feedbacks-feedbacks-module~admin-users-users-module~admin-visitors-visitors-module~pro~aa160e34"), __webpack_require__.e("admin-feedbacks-feedbacks-module")]).then(__webpack_require__.bind(null,
          /*! @admin/feedbacks/feedbacks.module */
          "B69p")).then(function (module) {
            return module.FeedbacksModule;
          });
        }
      }, {
        path: 'nda',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | admin-nda-nda-module */
          "admin-nda-nda-module").then(__webpack_require__.bind(null,
          /*! @admin/nda/nda.module */
          "mAxe")).then(function (module) {
            return module.NdaModule;
          });
        }
      }, {
        path: 'users',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | admin-users-users-module */
          [__webpack_require__.e("default~admin-agendas-agendas-module~admin-feedbacks-feedbacks-module~admin-org-org-module~admin-use~f5d435ee"), __webpack_require__.e("default~admin-feedbacks-feedbacks-module~admin-users-users-module~admin-visitors-visitors-module~pro~aa160e34"), __webpack_require__.e("default~admin-users-users-module~admin-visitors-visitors-module"), __webpack_require__.e("common"), __webpack_require__.e("admin-users-users-module")]).then(__webpack_require__.bind(null,
          /*! @admin/users/users.module */
          "+FD+")).then(function (module) {
            return module.UsersModule;
          });
        }
      }, {
        path: 'visitors',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | admin-visitors-visitors-module */
          [__webpack_require__.e("default~admin-agendas-agendas-module~admin-feedbacks-feedbacks-module~admin-org-org-module~admin-use~f5d435ee"), __webpack_require__.e("default~admin-feedbacks-feedbacks-module~admin-users-users-module~admin-visitors-visitors-module~pro~aa160e34"), __webpack_require__.e("default~admin-users-users-module~admin-visitors-visitors-module"), __webpack_require__.e("admin-visitors-visitors-module")]).then(__webpack_require__.bind(null,
          /*! @admin/visitors/visitors.module */
          "ysrM")).then(function (module) {
            return module.VisitorsModule;
          });
        }
      }];

      var AdminRoutingModule = function AdminRoutingModule() {
        _classCallCheck(this, AdminRoutingModule);
      };

      AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AdminRoutingModule
      });
      AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AdminRoutingModule_Factory(t) {
          return new (t || AdminRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "jkDv":
    /*!***************************************!*\
      !*** ./src/app/admin/admin.module.ts ***!
      \***************************************/

    /*! exports provided: AdminModule */

    /***/
    function jkDv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
        return AdminModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @admin/admin-routing.module */
      "0Em7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AdminModule = function AdminModule() {
        _classCallCheck(this, AdminModule);
      };

      AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AdminModule
      });
      AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AdminModule_Factory(t) {
          return new (t || AdminModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_1__["AdminRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AdminModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_1__["AdminRoutingModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=admin-admin-module-es5.js.map