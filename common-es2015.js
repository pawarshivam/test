(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "rc/I":
/*!************************************************!*\
  !*** ./src/app/services/department.service.ts ***!
  \************************************************/
/*! exports provided: DepartmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentService", function() { return DepartmentService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/api.service */ "H+bZ");




class DepartmentService {
    constructor($api) {
        this.$api = $api;
        this.$init = false;
        this.$dirty = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.$departments = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.$dirty.subscribe((dirty) => {
            if (dirty) {
                this.$api.get('/department/all').subscribe((result) => {
                    this.$dirty.next(false);
                    this.$departments.next(result.data.departments);
                }, (error) => {
                });
            }
        });
    }
    getDepartments() {
        if (this.$init === false || (this.$departments.getValue().length === 0 && this.$dirty.getValue() === false)) {
            this.$init = true;
            this.$dirty.next(true);
        }
        return this.$departments;
    }
    getDepartmentsSlugified(slug) {
        return this.$api.get(`/department/all/slugify/${slug}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((result) => result.data.departments));
    }
    addDepartment(department) {
        return this.$api.put('/department', {
            department,
        });
    }
    updateDepartment(id, department) {
        return this.$api.patch(`/department/${id}`, {
            department,
        });
    }
    deleteDepartment(id) {
        return this.$api.delete(`/department/${id}`);
    }
}
DepartmentService.ɵfac = function DepartmentService_Factory(t) { return new (t || DepartmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
DepartmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DepartmentService, factory: DepartmentService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map