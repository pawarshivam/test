(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "rc/I":
    /*!************************************************!*\
      !*** ./src/app/services/department.service.ts ***!
      \************************************************/

    /*! exports provided: DepartmentService */

    /***/
    function rcI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DepartmentService", function () {
        return DepartmentService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @services/api.service */
      "H+bZ");

      var DepartmentService = /*#__PURE__*/function () {
        function DepartmentService($api) {
          var _this = this;

          _classCallCheck(this, DepartmentService);

          this.$api = $api;
          this.$init = false;
          this.$dirty = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
          this.$departments = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
          this.$dirty.subscribe(function (dirty) {
            if (dirty) {
              _this.$api.get('/department/all').subscribe(function (result) {
                _this.$dirty.next(false);

                _this.$departments.next(result.data.departments);
              }, function (error) {});
            }
          });
        }

        _createClass(DepartmentService, [{
          key: "getDepartments",
          value: function getDepartments() {
            if (this.$init === false || this.$departments.getValue().length === 0 && this.$dirty.getValue() === false) {
              this.$init = true;
              this.$dirty.next(true);
            }

            return this.$departments;
          }
        }, {
          key: "getDepartmentsSlugified",
          value: function getDepartmentsSlugified(slug) {
            return this.$api.get("/department/all/slugify/".concat(slug)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
              return result.data.departments;
            }));
          }
        }, {
          key: "addDepartment",
          value: function addDepartment(department) {
            return this.$api.put('/department', {
              department: department
            });
          }
        }, {
          key: "updateDepartment",
          value: function updateDepartment(id, department) {
            return this.$api.patch("/department/".concat(id), {
              department: department
            });
          }
        }, {
          key: "deleteDepartment",
          value: function deleteDepartment(id) {
            return this.$api["delete"]("/department/".concat(id));
          }
        }]);

        return DepartmentService;
      }();

      DepartmentService.ɵfac = function DepartmentService_Factory(t) {
        return new (t || DepartmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
      };

      DepartmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: DepartmentService,
        factory: DepartmentService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map