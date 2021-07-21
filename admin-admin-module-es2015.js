(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "0Em7":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: '', redirectTo: 'org', pathMatch: 'full',
    },
    {
        path: 'org', loadChildren: () => Promise.all(/*! import() | admin-org-org-module */[__webpack_require__.e("default~admin-agendas-agendas-module~admin-feedbacks-feedbacks-module~admin-org-org-module~admin-use~f5d435ee"), __webpack_require__.e("default~admin-agendas-agendas-module~admin-feedbacks-feedbacks-module~admin-org-org-module~authentic~5ed2fa36"), __webpack_require__.e("common"), __webpack_require__.e("admin-org-org-module")]).then(__webpack_require__.bind(null, /*! @admin/org/org.module */ "wZ+S")).then(module => module.OrgModule),
    },
    {
        path: 'agendas', loadChildren: () => Promise.all(/*! import() | admin-agendas-agendas-module */[__webpack_require__.e("default~admin-agendas-agendas-module~admin-feedbacks-feedbacks-module~admin-org-org-module~admin-use~f5d435ee"), __webpack_require__.e("default~admin-agendas-agendas-module~admin-feedbacks-feedbacks-module~admin-org-org-module~authentic~5ed2fa36"), __webpack_require__.e("admin-agendas-agendas-module")]).then(__webpack_require__.bind(null, /*! @admin/agendas/agendas.module */ "QIbk")).then(module => module.AgendasModule),
    },
    {
        path: 'feedbacks', loadChildren: () => Promise.all(/*! import() | admin-feedbacks-feedbacks-module */[__webpack_require__.e("default~admin-agendas-agendas-module~admin-feedbacks-feedbacks-module~admin-org-org-module~admin-use~f5d435ee"), __webpack_require__.e("default~admin-agendas-agendas-module~admin-feedbacks-feedbacks-module~admin-org-org-module~authentic~5ed2fa36"), __webpack_require__.e("default~admin-feedbacks-feedbacks-module~admin-users-users-module~admin-visitors-visitors-module~pro~aa160e34"), __webpack_require__.e("admin-feedbacks-feedbacks-module")]).then(__webpack_require__.bind(null, /*! @admin/feedbacks/feedbacks.module */ "B69p")).then(module => module.FeedbacksModule),
    },
    {
        path: 'nda', loadChildren: () => __webpack_require__.e(/*! import() | admin-nda-nda-module */ "admin-nda-nda-module").then(__webpack_require__.bind(null, /*! @admin/nda/nda.module */ "mAxe")).then(module => module.NdaModule),
    },
    {
        path: 'users', loadChildren: () => Promise.all(/*! import() | admin-users-users-module */[__webpack_require__.e("default~admin-agendas-agendas-module~admin-feedbacks-feedbacks-module~admin-org-org-module~admin-use~f5d435ee"), __webpack_require__.e("default~admin-feedbacks-feedbacks-module~admin-users-users-module~admin-visitors-visitors-module~pro~aa160e34"), __webpack_require__.e("default~admin-users-users-module~admin-visitors-visitors-module"), __webpack_require__.e("common"), __webpack_require__.e("admin-users-users-module")]).then(__webpack_require__.bind(null, /*! @admin/users/users.module */ "+FD+")).then(module => module.UsersModule),
    },
    {
        path: 'visitors', loadChildren: () => Promise.all(/*! import() | admin-visitors-visitors-module */[__webpack_require__.e("default~admin-agendas-agendas-module~admin-feedbacks-feedbacks-module~admin-org-org-module~admin-use~f5d435ee"), __webpack_require__.e("default~admin-feedbacks-feedbacks-module~admin-users-users-module~admin-visitors-visitors-module~pro~aa160e34"), __webpack_require__.e("default~admin-users-users-module~admin-visitors-visitors-module"), __webpack_require__.e("admin-visitors-visitors-module")]).then(__webpack_require__.bind(null, /*! @admin/visitors/visitors.module */ "ysrM")).then(module => module.VisitorsModule),
    },
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "jkDv":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @admin/admin-routing.module */ "0Em7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class AdminModule {
}
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_1__["AdminRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AdminModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_1__["AdminRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=admin-admin-module-es2015.js.map