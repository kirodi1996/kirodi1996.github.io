(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "sIil":
/*!***************************************************!*\
  !*** ./src/app/shared/services/helper.service.ts ***!
  \***************************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class HelperService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.behaviourSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    getObservable() {
        return this.subject;
    }
    setObservable(d) {
        console.log("Next called:", d);
        this.subject.next(d);
    }
    getBehaviourObservable() {
        return this.behaviourSubject;
    }
    setBehaviourObservable(obj) {
        this.behaviourSubject.next(obj);
    }
}
HelperService.ɵfac = function HelperService_Factory(t) { return new (t || HelperService)(); };
HelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HelperService, factory: HelperService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map