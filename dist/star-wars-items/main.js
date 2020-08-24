(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_util/util.ts":
/*!*******************************!*\
  !*** ./src/app/_util/util.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Util; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _category_list_categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../category-list/categories */ "./src/app/category-list/categories.ts");


class Util {
    static getCategoryByUrl(url) {
        const { apiProtocol, apiServer, apiPrefix } = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"];
        const path = apiServer + apiPrefix;
        ;
        const regex = new RegExp('(?<=https?:/' + path + '/).[^/]*');
        const category = url.match(regex);
        return _category_list_categories__WEBPACK_IMPORTED_MODULE_1__["Categories"][category[0]] || null;
    }
    static isValidCategoryString(category) {
        return Object.values(_category_list_categories__WEBPACK_IMPORTED_MODULE_1__["Categories"]).includes(category);
    }
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _item_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item/item-list/item-list.component */ "./src/app/item/item-list/item-list.component.ts");
/* harmony import */ var _item_item_list_item_list_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item/item-list/item-list.resolver */ "./src/app/item/item-list/item-list.resolver.ts");







const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
    {
        path: ':category',
        component: _item_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_3__["ItemListComponent"],
        resolve: { ItemListResolver: _item_item_list_item_list_resolver__WEBPACK_IMPORTED_MODULE_4__["ItemListResolver"] }
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-list/category-list.component */ "./src/app/category-list/category-list.component.ts");




const _c0 = function () { return ["/"]; };
class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'starwars';
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 2, consts: [[1, "menu"], [3, "routerLink"], [1, "error-msg-modal"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-category-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_2__["CategoryListComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  background-color: #111111;\n  color: goldenrod;\n}\n\n*[ng-reflect-router-link][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.menu[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QUFUQTtFQUNJLGtCQUFBO0FBWUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xuICAgIGNvbG9yOiBnb2xkZW5yb2Q7XG59XG5cbipbbmctcmVmbGVjdC1yb3V0ZXItbGlua10ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiIsIkBpbXBvcnQgJy4uL3N0eWxlcy5zY3NzJztcblxuLm1lbnUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/ngrx-store-devtools.js");
/* harmony import */ var ngx_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-icons */ "./node_modules/ngx-icons/__ivy_ngcc__/dist/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.reducer */ "./src/app/app.reducer.ts");
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./category-list/category-list.component */ "./src/app/category-list/category-list.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _item_item_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./item/item.module */ "./src/app/item/item.module.ts");
/* harmony import */ var _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui-components/ui-components.module */ "./src/app/ui-components/ui-components.module.ts");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            ngx_icons__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot(_app_reducer__WEBPACK_IMPORTED_MODULE_9__["reducers"]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production,
            }),
            _item_item_module__WEBPACK_IMPORTED_MODULE_12__["ItemModule"],
            _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_13__["UiComponentsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_10__["CategoryListComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        ngx_icons__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"], _item_item_module__WEBPACK_IMPORTED_MODULE_12__["ItemModule"],
        _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_13__["UiComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_10__["CategoryListComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]],
                imports: [
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    ngx_icons__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot(_app_reducer__WEBPACK_IMPORTED_MODULE_9__["reducers"]),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument({
                        maxAge: 25,
                        logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production,
                    }),
                    _item_item_module__WEBPACK_IMPORTED_MODULE_12__["ItemModule"],
                    _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_13__["UiComponentsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.reducer.ts":
/*!********************************!*\
  !*** ./src/app/app.reducer.ts ***!
  \********************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/ngrx-router-store.js");

const reducers = {
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["routerReducer"],
};


/***/ }),

/***/ "./src/app/category-list/categories.ts":
/*!*********************************************!*\
  !*** ./src/app/category-list/categories.ts ***!
  \*********************************************/
/*! exports provided: Categories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categories", function() { return Categories; });
var Categories;
(function (Categories) {
    Categories[Categories["FILMS"] = 'films'] = "FILMS";
    Categories[Categories["PEOPLE"] = 'people'] = "PEOPLE";
    Categories[Categories["PLANETS"] = 'planets'] = "PLANETS";
    Categories[Categories["SPECIES"] = 'species'] = "SPECIES";
    Categories[Categories["STARSHIPS"] = 'starships'] = "STARSHIPS";
    Categories[Categories["VEHICLES"] = 'vehicles'] = "VEHICLES";
})(Categories || (Categories = {}));


/***/ }),

/***/ "./src/app/category-list/category-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/category-list/category-list.component.ts ***!
  \**********************************************************/
/*! exports provided: CategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function() { return CategoryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class CategoryListComponent {
    constructor(router) {
        this.router = router;
    }
    navigate(category) {
        this.router.navigate([category]);
    }
}
CategoryListComponent.ɵfac = function CategoryListComponent_Factory(t) { return new (t || CategoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CategoryListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryListComponent, selectors: [["app-category-list"]], decls: 13, vars: 0, consts: [[3, "click"]], template: function CategoryListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryListComponent_Template_li_click_1_listener() { return ctx.navigate("people"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "PEOPLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryListComponent_Template_li_click_3_listener() { return ctx.navigate("films"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "FILMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryListComponent_Template_li_click_5_listener() { return ctx.navigate("starships"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "STARSHIPS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryListComponent_Template_li_click_7_listener() { return ctx.navigate("vehicles"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "VEHICLES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryListComponent_Template_li_click_9_listener() { return ctx.navigate("species"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "SPECIES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryListComponent_Template_li_click_11_listener() { return ctx.navigate("planets"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "PLANETS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["ul[_ngcontent-%COMP%] {\n  display: inline;\n  padding: 0;\n}\n\nli[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 6px;\n  margin-left: 12px;\n  cursor: pointer;\n}\n\n@media (max-width: 580px) {\n  li[_ngcontent-%COMP%] {\n    display: block;\n    text-align: center;\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnktbGlzdC9jYXRlZ29yeS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUFDSjs7QUFDQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUNBO0VBQ0k7SUFDSSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0VBRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5LWxpc3QvY2F0ZWdvcnktbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgcGFkZGluZzogMDtcbn1cbmxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category-list',
                templateUrl: './category-list.component.html',
                styleUrls: ['./category-list.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../category-list/category-list.component */ "./src/app/category-list/category-list.component.ts");



class HomeComponent {
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 0, consts: [[1, "logo-container"], [1, "menu-container"], [1, "menu"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-category-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_1__["CategoryListComponent"]], styles: [".logo-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-image: url('Star_Wars_Logo.svg');\n  background-position: 50%, 50%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-color: black;\n  cursor: pointer;\n}\n\n.menu-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  background-color: black;\n  padding: 30px;\n  box-shadow: 2px 0 100px 100px gold, inset 0 0 4px 5px goldenrod;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n}\n\n@media (max-width: 580px) {\n  .menu-container[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n}\n\n.menu[_ngcontent-%COMP%] {\n  color: gold;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsMkNBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSwrREFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBRUo7O0FBQUE7RUFDSTtJQUNJLG9DQUFBO0VBR047QUFDRjs7QUFEQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQUdKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9TdGFyX1dhcnNfTG9nby5zdmcnKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUsIDUwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWVudS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBib3gtc2hhZG93OiAycHggMCAxMDBweCAxMDBweCBnb2xkLCBpbnNldCAwIDAgNHB4IDVweCBnb2xkZW5yb2Q7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgICAubWVudS1jb250YWluZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC44KTtcbiAgICB9XG59XG4ubWVudSB7XG4gICAgY29sb3I6IGdvbGQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/item/item-list/item-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/item/item-list/item-list.component.ts ***!
  \*******************************************************/
/*! exports provided: ItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListComponent", function() { return ItemListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_util/util */ "./src/app/_util/util.ts");
/* harmony import */ var _store_store_data_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/store-data.reducer */ "./src/app/store/store-data.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../item/item.component */ "./src/app/item/item/item.component.ts");








function ItemListComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r1.value);
} }
class ItemListComponent {
    constructor(store, route, router) {
        this.store = store;
        this.route = route;
        this.router = router;
        const category = route.snapshot.params.category;
        if (category && src_app_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].isValidCategoryString(category)) {
            this.category = category.toUpperCase();
            this.items$ = this.store.select(Object(_store_store_data_reducer__WEBPACK_IMPORTED_MODULE_2__["selectItemEntriesByCategory"])(category));
        }
        else {
            this.category = 'PEOPLE';
            this.items$ = this.store.select(_store_store_data_reducer__WEBPACK_IMPORTED_MODULE_2__["selectPeopleEntries"]);
        }
    }
}
ItemListComponent.ɵfac = function ItemListComponent_Factory(t) { return new (t || ItemListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ItemListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemListComponent, selectors: [["app-item-list"]], decls: 6, vars: 6, consts: [[1, "list"], [4, "ngFor", "ngForOf"], [3, "item"]], template: function ItemListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ItemListComponent_ng_container_3_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx.items$)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _item_item_component__WEBPACK_IMPORTED_MODULE_6__["ItemComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.list[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 270px;\n  margin: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS9pdGVtLWxpc3QvaXRlbS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFBSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBRVIiLCJmaWxlIjoic3JjL2FwcC9pdGVtL2l0ZW0tbGlzdC9pdGVtLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgJiA+ICoge1xuICAgICAgICB3aWR0aDogMjcwcHg7XG4gICAgICAgIG1hcmdpbjogMTJweDtcbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-item-list',
                templateUrl: './item-list.component.html',
                styleUrls: ['./item-list.component.scss'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/item/item-list/item-list.resolver.ts":
/*!******************************************************!*\
  !*** ./src/app/item/item-list/item-list.resolver.ts ***!
  \******************************************************/
/*! exports provided: ItemListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListResolver", function() { return ItemListResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_util/util */ "./src/app/_util/util.ts");
/* harmony import */ var _store_storeData_dispatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/storeData.dispatcher */ "./src/app/store/storeData.dispatcher.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class ItemListResolver {
    constructor(dispatcher, router) {
        this.dispatcher = dispatcher;
        this.router = router;
    }
    resolve(route) {
        const category = route.params.category;
        if (category && src_app_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].isValidCategoryString(category)) {
            this.dispatcher.loadItems(category);
        }
        else {
            this.router.navigate(['/']);
        }
    }
}
ItemListResolver.ɵfac = function ItemListResolver_Factory(t) { return new (t || ItemListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_store_storeData_dispatcher__WEBPACK_IMPORTED_MODULE_2__["StoreDataDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ItemListResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ItemListResolver, factory: ItemListResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemListResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _store_storeData_dispatcher__WEBPACK_IMPORTED_MODULE_2__["StoreDataDispatcher"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/item/item.module.ts":
/*!*************************************!*\
  !*** ./src/app/item/item.module.ts ***!
  \*************************************/
/*! exports provided: ItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemModule", function() { return ItemModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _store_store_data_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/store-data.reducer */ "./src/app/store/store-data.reducer.ts");
/* harmony import */ var _store_storeData_dispatcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/storeData.dispatcher */ "./src/app/store/storeData.dispatcher.ts");
/* harmony import */ var _store_storeData_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/storeData.effects */ "./src/app/store/storeData.effects.ts");
/* harmony import */ var _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui-components/ui-components.module */ "./src/app/ui-components/ui-components.module.ts");
/* harmony import */ var _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./item-list/item-list.component */ "./src/app/item/item-list/item-list.component.ts");
/* harmony import */ var _item_list_item_list_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./item-list/item-list.resolver */ "./src/app/item/item-list/item-list.resolver.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./item/item.component */ "./src/app/item/item/item.component.ts");














class ItemModule {
}
ItemModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ItemModule });
ItemModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ItemModule_Factory(t) { return new (t || ItemModule)(); }, providers: [_item_list_item_list_resolver__WEBPACK_IMPORTED_MODULE_9__["ItemListResolver"], _store_storeData_dispatcher__WEBPACK_IMPORTED_MODULE_5__["StoreDataDispatcher"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forRoot([_store_storeData_effects__WEBPACK_IMPORTED_MODULE_6__["StoreDataEffects"]]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(_store_store_data_reducer__WEBPACK_IMPORTED_MODULE_4__["storeSliceKey"], _store_store_data_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"]),
            _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_7__["UiComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ItemModule, { declarations: [_item_item_component__WEBPACK_IMPORTED_MODULE_10__["ItemComponent"],
        _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_8__["ItemListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsRootModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreFeatureModule"], _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_7__["UiComponentsModule"]], exports: [_item_item_component__WEBPACK_IMPORTED_MODULE_10__["ItemComponent"],
        _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_8__["ItemListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ItemModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _item_item_component__WEBPACK_IMPORTED_MODULE_10__["ItemComponent"],
                    _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_8__["ItemListComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forRoot([_store_storeData_effects__WEBPACK_IMPORTED_MODULE_6__["StoreDataEffects"]]),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(_store_store_data_reducer__WEBPACK_IMPORTED_MODULE_4__["storeSliceKey"], _store_store_data_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"]),
                    _ui_components_ui_components_module__WEBPACK_IMPORTED_MODULE_7__["UiComponentsModule"]
                ],
                exports: [
                    _item_item_component__WEBPACK_IMPORTED_MODULE_10__["ItemComponent"],
                    _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_8__["ItemListComponent"]
                ],
                providers: [_item_list_item_list_resolver__WEBPACK_IMPORTED_MODULE_9__["ItemListResolver"], _store_storeData_dispatcher__WEBPACK_IMPORTED_MODULE_5__["StoreDataDispatcher"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/item/item/item.component.ts":
/*!*********************************************!*\
  !*** ./src/app/item/item/item.component.ts ***!
  \*********************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_store_store_data_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/store-data.reducer */ "./src/app/store/store-data.reducer.ts");
/* harmony import */ var _category_list_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../category-list/categories */ "./src/app/category-list/categories.ts");
/* harmony import */ var _store_storeData_dispatcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/storeData.dispatcher */ "./src/app/store/storeData.dispatcher.ts");
/* harmony import */ var _ui_components_icon_menu_icon_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui-components/icon-menu/icon-menu.component */ "./src/app/ui-components/icon-menu/icon-menu.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ui_components_specs_list_specs_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui-components/specs-list/specs-list.component */ "./src/app/ui-components/specs-list/specs-list.component.ts");
/* harmony import */ var _ui_components_expandable_list_expandable_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui-components/expandable-list/expandable-list.component */ "./src/app/ui-components/expandable-list/expandable-list.component.ts");













function ItemComponent_app_specs_list_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-specs-list", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx_r0.item);
} }
function ItemComponent_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-expandable-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const people_r9 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", people_r9);
} }
function ItemComponent_ng_container_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-expandable-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const species_r10 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", species_r10);
} }
function ItemComponent_ng_container_5_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-expandable-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const planets_r11 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", planets_r11);
} }
function ItemComponent_ng_container_5_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-expandable-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const films_r12 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", films_r12);
} }
function ItemComponent_ng_container_5_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-expandable-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const vehicles_r13 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", vehicles_r13);
} }
function ItemComponent_ng_container_5_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-expandable-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const starships_r14 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", starships_r14);
} }
function ItemComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ItemComponent_ng_container_5_ng_container_2_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ItemComponent_ng_container_5_ng_container_4_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ItemComponent_ng_container_5_ng_container_6_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ItemComponent_ng_container_5_ng_container_8_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ItemComponent_ng_container_5_ng_container_10_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ItemComponent_ng_container_5_ng_container_12_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const label_r2 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", label_r2 === "people" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx_r1.people$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", label_r2 === "species" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 8, ctx_r1.species$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", label_r2 === "planets" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 10, ctx_r1.planets$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", label_r2 === "films" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 12, ctx_r1.films$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", label_r2 === "vehicles" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 14, ctx_r1.vehicles$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", label_r2 === "starships" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 16, ctx_r1.starships$));
} }
class ItemComponent {
    constructor(store, dispatcher) {
        this.store = store;
        this.dispatcher = dispatcher;
        this.selected = -1;
    }
    set setItem(item) { this.init(item); }
    ;
    iconMenuClick(idx) {
        this.setSelected(idx);
        const category = this.iconMenuConfig.entries[idx].label;
        this.dispatcher.loadItemBatchByUrl(this.item[category]);
    }
    setSelected(idx) {
        this.selected = idx;
    }
    init(item) {
        this.item = item;
        let entries = [];
        if (item.people) {
            entries.push({
                label: _category_list_categories__WEBPACK_IMPORTED_MODULE_5__["Categories"].PEOPLE.toString(),
                iconId: 'group',
                disabled: item.people.length <= 0,
            });
            this.people$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.item.people.map(characterUrl => this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(Object(src_app_store_store_data_reducer__WEBPACK_IMPORTED_MODULE_4__["selectItemByUrl"])(characterUrl))))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((people) => people && people.length > 0 && !people.some(character => !character)));
        }
        if (item.species) {
            entries.push({
                label: _category_list_categories__WEBPACK_IMPORTED_MODULE_5__["Categories"].SPECIES.toString(),
                iconId: 'male',
                disabled: item.species.length <= 0,
            });
            this.species$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.item.species.map(speciesUrl => this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(Object(src_app_store_store_data_reducer__WEBPACK_IMPORTED_MODULE_4__["selectItemByUrl"])(speciesUrl))))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((species) => species && species.length > 0 && !species.some(species => !species)));
        }
        if (item.planets) {
            entries.push({
                label: _category_list_categories__WEBPACK_IMPORTED_MODULE_5__["Categories"].PLANETS.toString(),
                iconId: 'star',
                disabled: item.planets.length <= 0,
            });
            this.planets$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.item.planets.map(planetUrl => this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(Object(src_app_store_store_data_reducer__WEBPACK_IMPORTED_MODULE_4__["selectItemByUrl"])(planetUrl))))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((planets) => planets && planets.length > 0 && !planets.some(planet => !planet)));
        }
        if (item.films) {
            entries.push({
                label: _category_list_categories__WEBPACK_IMPORTED_MODULE_5__["Categories"].FILMS.toString(),
                iconId: 'film',
                disabled: item.films.length <= 0,
            });
            this.films$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.item.films.map(filmUrl => this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(Object(src_app_store_store_data_reducer__WEBPACK_IMPORTED_MODULE_4__["selectItemByUrl"])(filmUrl))))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((films) => films && films.length > 0 && !films.some(film => !film)));
        }
        if (item.vehicles) {
            entries.push({
                label: _category_list_categories__WEBPACK_IMPORTED_MODULE_5__["Categories"].VEHICLES.toString(),
                iconId: 'truck',
                disabled: item.vehicles.length <= 0,
            });
            this.vehicles$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.item.vehicles.map(vehicleUrl => this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(Object(src_app_store_store_data_reducer__WEBPACK_IMPORTED_MODULE_4__["selectItemByUrl"])(vehicleUrl))))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((vehicles) => vehicles && vehicles.length > 0 && !vehicles.some(vehicle => !vehicle)));
        }
        if (item.starships) {
            entries.push({
                label: _category_list_categories__WEBPACK_IMPORTED_MODULE_5__["Categories"].STARSHIPS.toString(),
                iconId: 'space-shuttle',
                disabled: item.starships.length <= 0,
            });
            this.starships$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.item.starships.map(starshipUrl => this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(Object(src_app_store_store_data_reducer__WEBPACK_IMPORTED_MODULE_4__["selectItemByUrl"])(starshipUrl))))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((starships) => starships && starships.length > 0 && !starships.some(starship => !starship)));
        }
        this.iconMenuConfig = { defaultLabel: 'characteristics', entries };
    }
}
ItemComponent.ɵfac = function ItemComponent_Factory(t) { return new (t || ItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_storeData_dispatcher__WEBPACK_IMPORTED_MODULE_6__["StoreDataDispatcher"])); };
ItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemComponent, selectors: [["app-item"]], inputs: { setItem: ["item", "setItem"] }, decls: 6, vars: 5, consts: [[1, "item"], [3, "click"], [1, "item__icon-menu", 3, "config", "active", "itemClicked"], [3, "item", 4, "ngIf"], [4, "ngIf"], [3, "item"], [1, "item__dropdown-container", "dropdown-container"], [3, "items"]], template: function ItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemComponent_Template_h3_click_1_listener() { return ctx.setSelected(0 - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-icon-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemClicked", function ItemComponent_Template_app_icon_menu_itemClicked_3_listener($event) { return ctx.iconMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ItemComponent_app_specs_list_4_Template, 1, 1, "app-specs-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ItemComponent_ng_container_5_Template, 14, 18, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.iconMenuConfig)("active", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected < 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected >= 0 && ctx.iconMenuConfig.entries[ctx.selected].label);
    } }, directives: [_ui_components_icon_menu_icon_menu_component__WEBPACK_IMPORTED_MODULE_7__["IconMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ui_components_specs_list_specs_list_component__WEBPACK_IMPORTED_MODULE_9__["SpecsListComponent"], _ui_components_expandable_list_expandable_list_component__WEBPACK_IMPORTED_MODULE_10__["ExpandableListComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  border: solid 2px gold;\n  border-radius: 12px;\n  padding: 6px;\n  width: 100%;\n}\n.item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  cursor: pointer;\n}\n.item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover {\n  color: violet;\n}\n.item__icon-menu[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.item__dropdown-container[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.dropdown-container[_ngcontent-%COMP%] {\n  max-height: 320px;\n  overflow: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS9pdGVtL2l0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQUNSO0FBQ1E7RUFDSSxhQUFBO0FBQ1o7QUFHSTtFQUNJLGtCQUFBO0FBRFI7QUFJSTtFQUNJLGdCQUFBO0FBRlI7QUFNQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFISiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0vaXRlbS9pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0ge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm9yZGVyOiBzb2xpZCAycHggZ29sZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgICYgaDMge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB2aW9sZXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19pY29uLW1lbnUge1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJl9fZHJvcGRvd24tY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICB9XG59XG5cbi5kcm9wZG93bi1jb250YWluZXIge1xuICAgIG1heC1oZWlnaHQ6IDMyMHB4O1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-item',
                templateUrl: './item.component.html',
                styleUrls: ['./item.component.scss'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: _store_storeData_dispatcher__WEBPACK_IMPORTED_MODULE_6__["StoreDataDispatcher"] }]; }, { setItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['item']
        }] }); })();


/***/ }),

/***/ "./src/app/store/actions.ts":
/*!**********************************!*\
  !*** ./src/app/store/actions.ts ***!
  \**********************************/
/*! exports provided: loadItemsStartedAction, loadItemsSucceededAction, loadItemsFailedAction, loadSingleItemByUrlFailedAction, loadSingleItemByUrlStartedAction, loadSingleItemByUrlSucceededAction, loadSingleItemBatchByUrlsFailedAction, loadSingleItemBatchByUrlsStartedAction, loadSingleItemBatchByUrlsSucceededAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadItemsStartedAction", function() { return loadItemsStartedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadItemsSucceededAction", function() { return loadItemsSucceededAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadItemsFailedAction", function() { return loadItemsFailedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSingleItemByUrlFailedAction", function() { return loadSingleItemByUrlFailedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSingleItemByUrlStartedAction", function() { return loadSingleItemByUrlStartedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSingleItemByUrlSucceededAction", function() { return loadSingleItemByUrlSucceededAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSingleItemBatchByUrlsFailedAction", function() { return loadSingleItemBatchByUrlsFailedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSingleItemBatchByUrlsStartedAction", function() { return loadSingleItemBatchByUrlsStartedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSingleItemBatchByUrlsSucceededAction", function() { return loadSingleItemBatchByUrlsSucceededAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const loadItemsStartedAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Global] Load Items Started', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadItemsSucceededAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Global] Load Items Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadItemsFailedAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Global] Load Items Error');
const loadSingleItemByUrlFailedAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Global] Load Single Item Error');
const loadSingleItemByUrlStartedAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Global] Load Single Item Started', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadSingleItemByUrlSucceededAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Global] Load Single Item Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadSingleItemBatchByUrlsFailedAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Global] Load Single Item Batch Error');
const loadSingleItemBatchByUrlsStartedAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Global] Load Single Item Batch Started', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadSingleItemBatchByUrlsSucceededAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Global] Load Single Item Batch Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/store/store-data.reducer.ts":
/*!*********************************************!*\
  !*** ./src/app/store/store-data.reducer.ts ***!
  \*********************************************/
/*! exports provided: storeSliceKey, reducer, selectStoreData, selectItemListContainerByCategory, selectItemEntriesByCategory, selectItemByCategory, selectItemListContainerByUrl, selectCategoryEntriesByUrl, selectItemByUrl, selectPeopleListContainer, selectPeopleEntries, selectCharacterById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeSliceKey", function() { return storeSliceKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectStoreData", function() { return selectStoreData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectItemListContainerByCategory", function() { return selectItemListContainerByCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectItemEntriesByCategory", function() { return selectItemEntriesByCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectItemByCategory", function() { return selectItemByCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectItemListContainerByUrl", function() { return selectItemListContainerByUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCategoryEntriesByUrl", function() { return selectCategoryEntriesByUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectItemByUrl", function() { return selectItemByUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPeopleListContainer", function() { return selectPeopleListContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPeopleEntries", function() { return selectPeopleEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCharacterById", function() { return selectCharacterById; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _category_list_categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../category-list/categories */ "./src/app/category-list/categories.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_util/util */ "./src/app/_util/util.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/app/store/actions.ts");
/* harmony import */ var _store_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store-data */ "./src/app/store/store-data.ts");





const storeSliceKey = 'storeData';
const storeDataReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(_store_data__WEBPACK_IMPORTED_MODULE_4__["INITIAL_STORE_DATA_STATE"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_3__["loadItemsSucceededAction"], (state, { category, items }) => {
    return Object.assign(Object.assign({}, state), { [category]: {
            count: items.count,
            previous: items.previous,
            next: items.next,
            entries: Object.assign(Object.assign({}, state[category].entries), items.entries)
        } });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_3__["loadSingleItemByUrlSucceededAction"], (state, { item }) => addSingleItemToState(state, item)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_3__["loadSingleItemBatchByUrlsSucceededAction"], (state, { items }) => {
    let tmpState = Object.assign({}, state);
    for (let i = 0; i < items.length; i++) {
        tmpState = addSingleItemToState(tmpState, items[i]);
    }
    return tmpState;
}));
function addSingleItemToState(state, item) {
    var _a;
    const category = _category_list_categories__WEBPACK_IMPORTED_MODULE_1__["Categories"][_util_util__WEBPACK_IMPORTED_MODULE_2__["default"].getCategoryByUrl(item.url)];
    return category === null ? state : Object.assign(Object.assign({}, state), { [category]: Object.assign(Object.assign({}, state[category]), { entries: Object.assign(Object.assign({}, (_a = state[category]) === null || _a === void 0 ? void 0 : _a.entries), { [item.url]: item }) }) });
}
function reducer(state, action) {
    return storeDataReducer(state, action);
}
const selectStoreData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('storeData');
const selectItemListContainerByCategory = (category) => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStoreData, state => state && state[category]);
const selectItemEntriesByCategory = (category) => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectItemListContainerByCategory(category), state => state === null || state === void 0 ? void 0 : state.entries);
const selectItemByCategory = (category) => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectItemEntriesByCategory(category), state => state && state[category]);
const selectItemListContainerByUrl = (url) => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStoreData, state => {
    if (!url)
        return;
    const category = _category_list_categories__WEBPACK_IMPORTED_MODULE_1__["Categories"][_util_util__WEBPACK_IMPORTED_MODULE_2__["default"].getCategoryByUrl(url)];
    return state && state[category];
});
const selectCategoryEntriesByUrl = (url) => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectItemListContainerByUrl(url), state => state === null || state === void 0 ? void 0 : state.entries);
const selectItemByUrl = (url) => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCategoryEntriesByUrl(url), state => state && state[url]);
const selectPeopleListContainer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStoreData, state => state.people);
const selectPeopleEntries = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectPeopleListContainer, state => state.entries);
const selectCharacterById = (id) => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectPeopleEntries, peopleEntries => peopleEntries && peopleEntries[id]);


/***/ }),

/***/ "./src/app/store/store-data.ts":
/*!*************************************!*\
  !*** ./src/app/store/store-data.ts ***!
  \*************************************/
/*! exports provided: INITIAL_STORE_DATA_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STORE_DATA_STATE", function() { return INITIAL_STORE_DATA_STATE; });
const INITIAL_STORE_DATA_STATE = {
    people: { count: 0, previous: null, next: null, entries: {} },
    films: { count: 0, previous: null, next: null, entries: {} },
    starships: { count: 0, previous: null, next: null, entries: {} },
    vehicles: { count: 0, previous: null, next: null, entries: {} },
    species: { count: 0, previous: null, next: null, entries: {} },
    planets: { count: 0, previous: null, next: null, entries: {} },
};


/***/ }),

/***/ "./src/app/store/storeData.dispatcher.ts":
/*!***********************************************!*\
  !*** ./src/app/store/storeData.dispatcher.ts ***!
  \***********************************************/
/*! exports provided: StoreDataDispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreDataDispatcher", function() { return StoreDataDispatcher; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/store/actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");




class StoreDataDispatcher {
    constructor(store) {
        this.store = store;
    }
    // loadCharacters(page?: string): void {
    //     this.store.dispatch(loadCharactersStartedAction(page ? { page } : {}));
    // }
    loadItems(category, page) {
        this.store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["loadItemsStartedAction"])({ category, page }));
    }
    loadItemByUrl(url) {
        this.store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["loadSingleItemByUrlStartedAction"])({ url }));
    }
    loadItemBatchByUrl(urls) {
        this.store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["loadSingleItemBatchByUrlsStartedAction"])({ urls }));
    }
}
StoreDataDispatcher.ɵfac = function StoreDataDispatcher_Factory(t) { return new (t || StoreDataDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
StoreDataDispatcher.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StoreDataDispatcher, factory: StoreDataDispatcher.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreDataDispatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/storeData.effects.ts":
/*!********************************************!*\
  !*** ./src/app/store/storeData.effects.ts ***!
  \********************************************/
/*! exports provided: StoreDataEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreDataEffects", function() { return StoreDataEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./src/app/store/actions.ts");
/* harmony import */ var _swapi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../swapi.service */ "./src/app/swapi.service.ts");








class StoreDataEffects {
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.loadItems$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["loadItemsStartedAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((action) => this.service
            .getItems(action.category, action.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((items) => Object(_actions__WEBPACK_IMPORTED_MODULE_4__["loadItemsSucceededAction"])({ category: action.category, items })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["loadItemsFailedAction"])()))))));
        this.loadSingleItem$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["loadSingleItemByUrlStartedAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((action) => this.service
            .getItemByUrl(action.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((item) => Object(_actions__WEBPACK_IMPORTED_MODULE_4__["loadSingleItemByUrlSucceededAction"])({ item })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["loadSingleItemByUrlFailedAction"])()))))));
        this.loadSingelItemBatch$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["loadSingleItemBatchByUrlsStartedAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((action) => this.service
            .getItemBatchByUrls(action.urls)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(value => !!value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((items) => Object(_actions__WEBPACK_IMPORTED_MODULE_4__["loadSingleItemBatchByUrlsSucceededAction"])({ items })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["loadSingleItemBatchByUrlsFailedAction"])()))))));
    }
}
StoreDataEffects.ɵfac = function StoreDataEffects_Factory(t) { return new (t || StoreDataEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_swapi_service__WEBPACK_IMPORTED_MODULE_5__["SwapiService"])); };
StoreDataEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StoreDataEffects, factory: StoreDataEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreDataEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _swapi_service__WEBPACK_IMPORTED_MODULE_5__["SwapiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/swapi.service.ts":
/*!**********************************!*\
  !*** ./src/app/swapi.service.ts ***!
  \**********************************/
/*! exports provided: SwapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapiService", function() { return SwapiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _category_list_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-list/categories */ "./src/app/category-list/categories.ts");
/* harmony import */ var _store_store_data_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/store-data.reducer */ "./src/app/store/store-data.reducer.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_util/util */ "./src/app/_util/util.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");











class SwapiService {
    constructor(httpClient, store) {
        this.httpClient = httpClient;
        this.store = store;
        const { apiProtocol, apiServer, apiPrefix } = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"];
        this.baseUrl = apiProtocol + apiServer + apiPrefix;
    }
    getItems(category, page) {
        return this.httpClient.get(this.baseUrl + '/' + category, page ? { params: { page } } : {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(res => res.hasOwnProperty('results')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => this.parseItems(res)));
    }
    getItemByUrl(url) {
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(Object(_store_store_data_reducer__WEBPACK_IMPORTED_MODULE_6__["selectItemByUrl"])(url))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(item => !item
            ? this.httpClient.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(item => this.parseItem(item)))
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(item)));
    }
    getItemBatchByUrls(urls) {
        const batch = [];
        urls.map(url => batch.push(this.getItemByUrl(url)));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(batch).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])());
    }
    parseItems(response) {
        const { count, next, previous, results } = response;
        let itemMap = {};
        results.forEach(element => {
            itemMap[element === null || element === void 0 ? void 0 : element.url] = this.parseItem(element);
        });
        return {
            count,
            next,
            previous,
            entries: itemMap
        };
    }
    parseItem(response) {
        const category = _category_list_categories__WEBPACK_IMPORTED_MODULE_5__["Categories"][_util_util__WEBPACK_IMPORTED_MODULE_7__["default"].getCategoryByUrl(response.url)];
        switch (category) {
            case _category_list_categories__WEBPACK_IMPORTED_MODULE_5__["Categories"].FILMS.toString():
                return this.parseFilm(response);
            case _category_list_categories__WEBPACK_IMPORTED_MODULE_5__["Categories"].PEOPLE.toString():
                return this.parseCharacter(response);
            case _category_list_categories__WEBPACK_IMPORTED_MODULE_5__["Categories"].PLANETS.toString():
                return this.parsePlanet(response);
            case _category_list_categories__WEBPACK_IMPORTED_MODULE_5__["Categories"].SPECIES.toString():
                return this.parseSpecies(response);
            case _category_list_categories__WEBPACK_IMPORTED_MODULE_5__["Categories"].STARSHIPS.toString():
                return this.parseStarship(response);
            case _category_list_categories__WEBPACK_IMPORTED_MODULE_5__["Categories"].VEHICLES.toString():
                return this.parseVehicle(response);
            default:
                break;
        }
    }
    parseCharacter(response) {
        response.planets = response.homeworld ? [response.homeworld] : [];
        delete response.homeworld;
        return response;
    }
    parseFilm(response) {
        response.people = response.characters;
        delete response.characters;
        response.name = response.title;
        delete response.title;
        return response;
    }
    parseStarship(response) {
        response.people = response.pilots;
        delete response.pilots;
        return response;
    }
    parseVehicle(response) {
        response.people = response.pilots;
        delete response.pilots;
        return response;
    }
    parseSpecies(response) {
        response.planets = response.homeworld ? [response.homeworld] : [];
        delete response.homeworld;
        return response;
    }
    parsePlanet(response) {
        response.people = response.residents;
        delete response.residents;
        return response;
    }
}
SwapiService.ɵfac = function SwapiService_Factory(t) { return new (t || SwapiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
SwapiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SwapiService, factory: SwapiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SwapiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ui-components/crawling-content-box/crawling-content-box.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/ui-components/crawling-content-box/crawling-content-box.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CrawlingContentBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrawlingContentBoxComponent", function() { return CrawlingContentBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
class CrawlingContentBoxComponent {
}
CrawlingContentBoxComponent.ɵfac = function CrawlingContentBoxComponent_Factory(t) { return new (t || CrawlingContentBoxComponent)(); };
CrawlingContentBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CrawlingContentBoxComponent, selectors: [["app-crawling-content-box"]], ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[1, "container"], [1, "content"]], template: function CrawlingContentBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: block;\n  height: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  font-weight: bold;\n  text-align: justify;\n  transform-origin: 50% 100%;\n  transform: perspective(250px) rotateX(30deg) translateY(100%);\n  animation: 30s cubic-bezier(0.95, 0.5, 1, 0.8) 0s infinite crawl;\n}\n\n@keyframes crawl {\n  0% {\n    opacity: 1;\n    transform: perspective(120px) rotateX(30deg) translateY(100%);\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: perspective(120px) rotateX(30deg) translateY(-300%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktY29tcG9uZW50cy9jcmF3bGluZy1jb250ZW50LWJveC9jcmF3bGluZy1jb250ZW50LWJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkRBQUE7RUFFQSxnRUFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsNkRBQUE7RUFDTjtFQUNFO0lBQ0ksVUFBQTtFQUNOO0VBQ0U7SUFDSSxVQUFBO0lBQ0EsOERBQUE7RUFDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdWktY29tcG9uZW50cy9jcmF3bGluZy1jb250ZW50LWJveC9jcmF3bGluZy1jb250ZW50LWJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMjUwcHgpIHJvdGF0ZVgoMzBkZWcpIHRyYW5zbGF0ZVkoMTAwJSk7XG5cbiAgICBhbmltYXRpb246IDMwcyBjdWJpYy1iZXppZXIoLjk1LCAuNSwgMSwgLjgpIDBzIGluZmluaXRlIGNyYXdsO1xufVxuXG5Aa2V5ZnJhbWVzIGNyYXdsIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoMzBkZWcpIHRyYW5zbGF0ZVkoMTAwJSk7XG4gICAgfVxuICAgIDgwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKDMwZGVnKSB0cmFuc2xhdGVZKC0zMDAlKTtcbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrawlingContentBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-crawling-content-box',
                templateUrl: './crawling-content-box.component.html',
                styleUrls: ['./crawling-content-box.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/ui-components/expandable-list-item/expandable-list-item.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/ui-components/expandable-list-item/expandable-list-item.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ExpandableListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableListItemComponent", function() { return ExpandableListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ExpandableListItemComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = ["*"];
class ExpandableListItemComponent {
    constructor() {
        this.labelClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    emitLabelClicked() {
        this.labelClicked.emit();
    }
}
ExpandableListItemComponent.ɵfac = function ExpandableListItemComponent_Factory(t) { return new (t || ExpandableListItemComponent)(); };
ExpandableListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExpandableListItemComponent, selectors: [["app-expandable-list-item"]], inputs: { label: "label", expand: "expand" }, outputs: { labelClicked: "labelClicked" }, ngContentSelectors: _c0, decls: 4, vars: 2, consts: [[1, "item"], [1, "item__label", "label", 3, "click"], ["class", "content", 4, "ngIf"], [1, "content"]], template: function ExpandableListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpandableListItemComponent_Template_div_click_1_listener() { return ctx.emitLabelClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExpandableListItemComponent_div_3_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expand);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".label[_ngcontent-%COMP%] {\n  font-family: monospace;\n  line-height: 24px;\n  font-size: 18px;\n  color: goldenrod;\n  text-align: center;\n  padding: 6px auto;\n  cursor: pointer;\n}\n\n.content[_ngcontent-%COMP%] {\n  color: darkgoldenrod;\n  padding: 0 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktY29tcG9uZW50cy9leHBhbmRhYmxlLWxpc3QtaXRlbS9leHBhbmRhYmxlLWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC91aS1jb21wb25lbnRzL2V4cGFuZGFibGUtbGlzdC1pdGVtL2V4cGFuZGFibGUtbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmVsIHtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogZ29sZGVucm9kO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA2cHggYXV0bztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb250ZW50IHtcbiAgICBjb2xvcjogZGFya2dvbGRlbnJvZDtcbiAgICBwYWRkaW5nOiAwIDEycHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpandableListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-expandable-list-item',
                templateUrl: './expandable-list-item.component.html',
                styleUrls: ['./expandable-list-item.component.scss']
            }]
    }], null, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], expand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], labelClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui-components/expandable-list/expandable-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/ui-components/expandable-list/expandable-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: ExpandableListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableListComponent", function() { return ExpandableListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _expandable_list_item_expandable_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../expandable-list-item/expandable-list-item.component */ "./src/app/ui-components/expandable-list-item/expandable-list-item.component.ts");
/* harmony import */ var _specs_list_specs_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../specs-list/specs-list.component */ "./src/app/ui-components/specs-list/specs-list.component.ts");





function ExpandableListComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-expandable-list-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("labelClicked", function ExpandableListComponent_ng_container_1_Template_app_expandable_list_item_labelClicked_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.expand(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-specs-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", item_r1.name)("expand", ctx_r0.idxExpanded === i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r1);
} }
class ExpandableListComponent {
    constructor() {
        this.idxExpanded = -1;
    }
    expand(idx) {
        this.idxExpanded = idx === this.idxExpanded ? -1 : idx;
    }
}
ExpandableListComponent.ɵfac = function ExpandableListComponent_Factory(t) { return new (t || ExpandableListComponent)(); };
ExpandableListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExpandableListComponent, selectors: [["app-expandable-list"]], inputs: { items: "items" }, decls: 2, vars: 1, consts: [[1, "list"], [4, "ngFor", "ngForOf"], [1, "list__item", 3, "label", "expand", "labelClicked"], [3, "item"]], template: function ExpandableListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExpandableListComponent_ng_container_1_Template, 3, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _expandable_list_item_expandable_list_item_component__WEBPACK_IMPORTED_MODULE_2__["ExpandableListItemComponent"], _specs_list_specs_list_component__WEBPACK_IMPORTED_MODULE_3__["SpecsListComponent"]], styles: [".list[_ngcontent-%COMP%] {\n  border: solid 1px darkslategray;\n  border-radius: 6px;\n  padding: 6px;\n}\n.list__item[_ngcontent-%COMP%] {\n  display: block;\n  margin: 3px 0;\n  border-bottom: solid 1px #2e4e4e;\n  \n}\n.list__item[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktY29tcG9uZW50cy9leHBhbmRhYmxlLWxpc3QvZXhwYW5kYWJsZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUNJO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUFxRSw0QkFBQTtBQUU3RTtBQUFRO0VBQ0ksWUFBQTtBQUVaIiwiZmlsZSI6InNyYy9hcHAvdWktY29tcG9uZW50cy9leHBhbmRhYmxlLWxpc3QvZXhwYW5kYWJsZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3Qge1xuICAgIGJvcmRlcjogc29saWQgMXB4IGRhcmtzbGF0ZWdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmc6IDZweDtcblxuICAgICZfX2l0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAzcHggMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGRhcmtlbigkY29sb3I6IGRhcmtzbGF0ZWdyYXksICRhbW91bnQ6IC4zKTsgLyogcmdiYSgyNTUsIDIxNSwgMCwgMC40KTsgKi9cblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpandableListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-expandable-list',
                templateUrl: './expandable-list.component.html',
                styleUrls: ['./expandable-list.component.scss']
            }]
    }], null, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui-components/icon-menu/icon-menu.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/ui-components/icon-menu/icon-menu.component.ts ***!
  \****************************************************************/
/*! exports provided: IconMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconMenuComponent", function() { return IconMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-icons */ "./node_modules/ngx-icons/__ivy_ngcc__/dist/index.js");




function IconMenuComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function IconMenuComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IconMenuComponent_ng_container_3_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.menuItemClicked(i_r3); })("mouseover", function IconMenuComponent_ng_container_3_Template_div_mouseover_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.menuItemHovered(i_r3); })("mouseout", function IconMenuComponent_ng_container_3_Template_div_mouseout_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.menuItemHovered(0 - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r1.hover >= 0 && !item_r2.disabled ? i_r3 == ctx_r1.hover : i_r3 == ctx_r1.active)("icon-bar__item--disabled", item_r2.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", item_r2.iconId);
} }
class IconMenuComponent {
    constructor() {
        this.itemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itemHovered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    menuItemHovered(idx) {
        this.hover = idx;
        if (idx < 0)
            return;
        this.itemHovered.emit(idx);
    }
    menuItemClicked(idx) {
        if (this.config.entries[idx].disabled)
            return;
        this.active = idx;
        if (idx < 0)
            return;
        this.itemClicked.emit(idx);
    }
}
IconMenuComponent.ɵfac = function IconMenuComponent_Factory(t) { return new (t || IconMenuComponent)(); };
IconMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconMenuComponent, selectors: [["app-icon-menu"]], inputs: { config: "config", active: "active" }, outputs: { itemClicked: "itemClicked", itemHovered: "itemHovered" }, decls: 7, vars: 5, consts: [[1, "info-menu"], [1, "icon-bar"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "label-bar"], [1, "icon-bar__item", "icon-bar-item", 3, "click", "mouseover", "mouseout"], [3, "name"]], template: function IconMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IconMenuComponent_ng_container_2_Template, 1, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IconMenuComponent_ng_container_3_Template, 3, 5, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.config && ctx.config.entries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.config.entries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("label-bar--disabled", ctx.hover >= 0 && ctx.config.entries[ctx.hover].disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.hover >= 0 ? ctx.config.entries[ctx.hover].label : ctx.active >= 0 ? ctx.config.entries[ctx.active].label : ctx.config.defaultLabel, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ngx_icons__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeComponent"]], styles: [".info-menu[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.icon-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.icon-bar__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 3px;\n}\n\n.icon-bar__item--disabled[_ngcontent-%COMP%] {\n  color: grey;\n}\n\n.icon-bar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  flex-basis: 100%;\n}\n\n.icon-bar-item[_ngcontent-%COMP%] {\n  width: 30px;\n  border: solid 1px grey;\n  border-radius: 6px;\n  padding: 3px;\n}\n\n.icon-bar-item[_ngcontent-%COMP%]:hover {\n  cursor: not-allowed;\n}\n\n.icon-bar-item.active[_ngcontent-%COMP%] {\n  border-color: violet;\n}\n\n.icon-bar-item.active[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.label-bar[_ngcontent-%COMP%] {\n  position: relative;\n  height: 20px;\n  font-family: monospace;\n  font-size: 20px;\n  padding-top: 6px;\n  color: darkgoldenrod;\n}\n\n.label-bar[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  transition: opacity 0.5s;\n}\n\n.label-bar--disabled[_ngcontent-%COMP%] {\n  color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktY29tcG9uZW50cy9pY29uLW1lbnUvaWNvbi1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQ1I7O0FBQ1E7RUFDSSxXQUFBO0FBQ1o7O0FBR0k7RUFDSSxnQkFBQTtBQURSOztBQUtBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRko7O0FBSUk7RUFDSSxtQkFBQTtBQUZSOztBQUtJO0VBQ0ksb0JBQUE7QUFIUjs7QUFLUTtFQUNJLGVBQUE7QUFIWjs7QUFRQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFMSjs7QUFPSTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtBQUxSOztBQVFJO0VBQ0ksV0FBQTtBQU5SIiwiZmlsZSI6InNyYy9hcHAvdWktY29tcG9uZW50cy9pY29uLW1lbnUvaWNvbi1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8tbWVudSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaWNvbi1iYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgJl9faXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMCAzcHg7XG5cbiAgICAgICAgJi0tZGlzYWJsZWQge1xuICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIGRpdjpsYXN0LWNoaWxkIHtcbiAgICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICB9XG59XG5cbi5pY29uLWJhci1pdGVtIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCBncmV5O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nOiAzcHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmlvbGV0O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubGFiZWwtYmFyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiA2cHg7XG4gICAgY29sb3I6IGRhcmtnb2xkZW5yb2Q7XG5cbiAgICAmID4gKiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xuICAgIH1cblxuICAgICYtLWRpc2FibGVkIHtcbiAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-icon-menu',
                templateUrl: './icon-menu.component.html',
                styleUrls: ['./icon-menu.component.scss'],
            }]
    }], null, { config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], itemHovered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui-components/specs-list/specs-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/ui-components/specs-list/specs-list.component.ts ***!
  \******************************************************************/
/*! exports provided: SpecsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecsListComponent", function() { return SpecsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_category_list_categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/category-list/categories */ "./src/app/category-list/categories.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_util/util */ "./src/app/_util/util.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _crawling_content_box_crawling_content_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crawling-content-box/crawling-content-box.component */ "./src/app/ui-components/crawling-content-box/crawling-content-box.component.ts");






function SpecsListComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 8);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r12);
} }
function SpecsListComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 8);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r6);
} }
function SpecsListComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 8);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r10);
} }
function SpecsListComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 8);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r8);
} }
function SpecsListComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 8);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r16);
} }
function SpecsListComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 8);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r14);
} }
function SpecsListComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("height: ", ctx_r7.item.height || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("mass: ", ctx_r7.item.mass || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("hair color: ", ctx_r7.item.hair_color || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("skin color: ", ctx_r7.item.skin_color || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("eye color: ", ctx_r7.item.eye_color || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("birth year: ", ctx_r7.item.birth_year || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("gender: ", ctx_r7.item.gender || "n/a", "");
} }
function SpecsListComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("name: ", ctx_r9.item.name || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("classification: ", ctx_r9.item.classification || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("designation: ", ctx_r9.item.designation || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("language: ", ctx_r9.item.language || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00F8 lifespang: ", ctx_r9.item.average_lifespan || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00F8 height: ", ctx_r9.item.average_height || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("eye colors: ", ctx_r9.item.eye_colors || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("hair colors: ", ctx_r9.item.hair_colors || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("skin colors: ", ctx_r9.item.skin_colors || "n/a", "");
} }
function SpecsListComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("name: ", ctx_r11.item.name || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("rotation period: ", ctx_r11.item.rotation_period || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("orbital period: ", ctx_r11.item.orbital_period || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("diameter: ", ctx_r11.item.diameter || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("climate: ", ctx_r11.item.climate || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("gravity: ", ctx_r11.item.gravity || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("terrain: ", ctx_r11.item.terrain || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("surface water: ", ctx_r11.item.surface_water || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("population: ", ctx_r11.item.population || "n/a", "");
} }
function SpecsListComponent_ng_template_13_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "opening crawl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-crawling-content-box", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r18.item.opening_crawl, " ");
} }
function SpecsListComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SpecsListComponent_ng_template_13_ng_container_11_Template, 5, 1, "ng-container", 9);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("title: ", ctx_r13.item.name || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("episode: ", ctx_r13.item.episode_id || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("director: ", ctx_r13.item.director || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("producer: ", ctx_r13.item.producer || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("release date: ", ctx_r13.item.release_date || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.item.opening_crawl && ctx_r13.item.opening_crawl.trim());
} }
function SpecsListComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("name: ", ctx_r15.item.name || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("model: ", ctx_r15.item.model || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("manufacturer: ", ctx_r15.item.manufacturer || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("cost in credits: ", ctx_r15.item.cost_in_credits || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("length: ", ctx_r15.item.length || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("max atmosphering speed: ", ctx_r15.item.max_atmosphering_speed || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("crew: ", ctx_r15.item.crew || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("passengers: ", ctx_r15.item.passengers || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("cargo capacity: ", ctx_r15.item.cargo_capacity || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("consumables: ", ctx_r15.item.consumables || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("vehicle class: ", ctx_r15.item.vehicle_class || "n/a", "");
} }
function SpecsListComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("name: ", ctx_r17.item.name || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("model: ", ctx_r17.item.model || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("manufacturer: ", ctx_r17.item.manufacturer || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("cost in credits: ", ctx_r17.item.cost_in_credits || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("length: ", ctx_r17.item.length || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("max atmosphering speed: ", ctx_r17.item.max_atmosphering_speed || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("crew: ", ctx_r17.item.crew || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("passengers: ", ctx_r17.item.passengers || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("cargo capacity: ", ctx_r17.item.cargo_capacity || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("consumables: ", ctx_r17.item.consumables || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("hyperdrive rating: ", ctx_r17.item.hyperdrive_rating || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("MGLT: ", ctx_r17.item.MGLT || "n/a", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("starship class: ", ctx_r17.item.starship_class || "n/a", "");
} }
class SpecsListComponent {
    constructor() {
        this.Categories = src_app_category_list_categories__WEBPACK_IMPORTED_MODULE_1__["Categories"];
    }
    set setItem(item) {
        this.item = item;
        this.category = _util_util__WEBPACK_IMPORTED_MODULE_2__["default"].getCategoryByUrl(item.url);
    }
    ;
}
SpecsListComponent.ɵfac = function SpecsListComponent_Factory(t) { return new (t || SpecsListComponent)(); };
SpecsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpecsListComponent, selectors: [["app-specs-list"]], inputs: { setItem: ["item", "setItem"] }, decls: 19, vars: 7, consts: [[3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], ["people", ""], ["species", ""], ["planets", ""], ["films", ""], ["vehicles", ""], ["starships", ""], [3, "ngTemplateOutlet"], [4, "ngIf"], [1, "crawl"]], template: function SpecsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SpecsListComponent_ng_container_1_Template, 1, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SpecsListComponent_ng_container_2_Template, 1, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SpecsListComponent_ng_container_3_Template, 1, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SpecsListComponent_ng_container_4_Template, 1, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SpecsListComponent_ng_container_5_Template, 1, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SpecsListComponent_ng_container_6_Template, 1, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SpecsListComponent_ng_template_7_Template, 15, 7, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SpecsListComponent_ng_template_9_Template, 19, 9, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SpecsListComponent_ng_template_11_Template, 19, 9, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SpecsListComponent_ng_template_13_Template, 12, 6, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SpecsListComponent_ng_template_15_Template, 23, 11, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SpecsListComponent_ng_template_17_Template, 27, 13, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.Categories[ctx.category]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.Categories.FILMS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.Categories.PEOPLE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.Categories.PLANETS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.Categories.SPECIES);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.Categories.STARSHIPS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.Categories.VEHICLES);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _crawling_content_box_crawling_content_box_component__WEBPACK_IMPORTED_MODULE_4__["CrawlingContentBoxComponent"]], styles: ["h4[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.crawl[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 160px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktY29tcG9uZW50cy9zcGVjcy1saXN0L3NwZWNzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC91aS1jb21wb25lbnRzL3NwZWNzLWxpc3Qvc3BlY3MtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY3Jhd2wge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDE2MHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpecsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-specs-list',
                templateUrl: './specs-list.component.html',
                styleUrls: ['./specs-list.component.scss'],
            }]
    }], null, { setItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['item']
        }] }); })();


/***/ }),

/***/ "./src/app/ui-components/ui-components.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/ui-components/ui-components.module.ts ***!
  \*******************************************************/
/*! exports provided: UiComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiComponentsModule", function() { return UiComponentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-icons */ "./node_modules/ngx-icons/__ivy_ngcc__/dist/index.js");
/* harmony import */ var _crawling_content_box_crawling_content_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crawling-content-box/crawling-content-box.component */ "./src/app/ui-components/crawling-content-box/crawling-content-box.component.ts");
/* harmony import */ var _expandable_list_item_expandable_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expandable-list-item/expandable-list-item.component */ "./src/app/ui-components/expandable-list-item/expandable-list-item.component.ts");
/* harmony import */ var _expandable_list_expandable_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expandable-list/expandable-list.component */ "./src/app/ui-components/expandable-list/expandable-list.component.ts");
/* harmony import */ var _icon_menu_icon_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon-menu/icon-menu.component */ "./src/app/ui-components/icon-menu/icon-menu.component.ts");
/* harmony import */ var _specs_list_specs_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./specs-list/specs-list.component */ "./src/app/ui-components/specs-list/specs-list.component.ts");









class UiComponentsModule {
}
UiComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UiComponentsModule });
UiComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function UiComponentsModule_Factory(t) { return new (t || UiComponentsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_icons__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UiComponentsModule, { declarations: [_icon_menu_icon_menu_component__WEBPACK_IMPORTED_MODULE_6__["IconMenuComponent"],
        _specs_list_specs_list_component__WEBPACK_IMPORTED_MODULE_7__["SpecsListComponent"],
        _expandable_list_item_expandable_list_item_component__WEBPACK_IMPORTED_MODULE_4__["ExpandableListItemComponent"],
        _expandable_list_expandable_list_component__WEBPACK_IMPORTED_MODULE_5__["ExpandableListComponent"],
        _crawling_content_box_crawling_content_box_component__WEBPACK_IMPORTED_MODULE_3__["CrawlingContentBoxComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_icons__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"]], exports: [_icon_menu_icon_menu_component__WEBPACK_IMPORTED_MODULE_6__["IconMenuComponent"],
        _specs_list_specs_list_component__WEBPACK_IMPORTED_MODULE_7__["SpecsListComponent"],
        _expandable_list_item_expandable_list_item_component__WEBPACK_IMPORTED_MODULE_4__["ExpandableListItemComponent"],
        _expandable_list_expandable_list_component__WEBPACK_IMPORTED_MODULE_5__["ExpandableListComponent"],
        _crawling_content_box_crawling_content_box_component__WEBPACK_IMPORTED_MODULE_3__["CrawlingContentBoxComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UiComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _icon_menu_icon_menu_component__WEBPACK_IMPORTED_MODULE_6__["IconMenuComponent"],
                    _specs_list_specs_list_component__WEBPACK_IMPORTED_MODULE_7__["SpecsListComponent"],
                    _expandable_list_item_expandable_list_item_component__WEBPACK_IMPORTED_MODULE_4__["ExpandableListItemComponent"],
                    _expandable_list_expandable_list_component__WEBPACK_IMPORTED_MODULE_5__["ExpandableListComponent"],
                    _crawling_content_box_crawling_content_box_component__WEBPACK_IMPORTED_MODULE_3__["CrawlingContentBoxComponent"],
                ],
                exports: [
                    _icon_menu_icon_menu_component__WEBPACK_IMPORTED_MODULE_6__["IconMenuComponent"],
                    _specs_list_specs_list_component__WEBPACK_IMPORTED_MODULE_7__["SpecsListComponent"],
                    _expandable_list_item_expandable_list_item_component__WEBPACK_IMPORTED_MODULE_4__["ExpandableListItemComponent"],
                    _expandable_list_expandable_list_component__WEBPACK_IMPORTED_MODULE_5__["ExpandableListComponent"],
                    _crawling_content_box_crawling_content_box_component__WEBPACK_IMPORTED_MODULE_3__["CrawlingContentBoxComponent"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_icons__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiProtocol: 'https:/',
    apiServer: '/swapi.dev',
    apiPrefix: '/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/cpt/Documents/ANGULAR/Assecor Frontend Assessment/assecor-fe/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map