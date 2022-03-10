function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  query {\n    party_instr {\n      party_ref\n      instr_type\n      instr_ref_type\n      instr_ref\n      user_def\n      description\n  }\n}\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  query {\n    party {\n      party_ref\n      party_type\n      party_long_name\n      party_short_name\n      party_extra_long_name\n      version_no\n  }\n}\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  query players($offset:Int) {\n    players(offset: $offset, limit:10) {\n      id\n      first_name\n      last_name\n      hand\n      birthday\n      country\n    }\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  query {\n    party_instr {\n      party_ref\n      instr_type\n      instr_ref_type\n      instr_ref\n      user_def\n      description\n  }\n}\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["query {\n            party_instr {\n              party_ref\n              instr_type\n              instr_ref_type\n              instr_ref\n              user_def\n              description\n          }\n        }"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  query {\n    party_instr {\n      party_ref\n      instr_type\n      instr_ref_type\n      instr_ref\n      user_def\n      description\n  }\n}\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  query {\n    party_instr {\n      party_ref\n      instr_type\n      instr_ref_type\n      instr_ref\n      user_def\n      description\n  }\n}\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  query {\n    party_instr {\n      party_ref\n      instr_type\n      instr_ref_type\n      instr_ref\n      user_def\n      description\n  }\n}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  query {\n    party_instr {\n      party_ref\n      instr_type\n      instr_ref_type\n      instr_ref\n      user_def\n      description\n  }\n}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  query books($offset:Int) {\n    books(offset: $offset, limit:10) {\n      id\n      first_name\n      last_name\n      hand\n      birthday\n      country\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    party {\n      party_ref\n      party_type\n      party_long_name\n      party_short_name\n      party_extra_long_name\n      version_no\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _static_static_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./static/static.component */
    "./src/app/static/static.component.ts");
    /* harmony import */


    var _static_dacc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./static/dacc.component */
    "./src/app/static/dacc.component.ts");
    /* harmony import */


    var _party_party_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./party/party.component */
    "./src/app/party/party.component.ts");
    /* harmony import */


    var _shell_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shell/login/login.component */
    "./src/app/shell/login/login.component.ts");
    /* harmony import */


    var _static_instruments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./static/instruments.component */
    "./src/app/static/instruments.component.ts");
    /* harmony import */


    var _static_taskexplorer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./static/taskexplorer.component */
    "./src/app/static/taskexplorer.component.ts");
    /* harmony import */


    var _static_charges_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./static/charges.component */
    "./src/app/static/charges.component.ts");
    /* harmony import */


    var _static_intro_intro_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./static/intro/intro.component */
    "./src/app/static/intro/intro.component.ts");

    var routes = [{
      path: 'introduction',
      component: _static_intro_intro_component__WEBPACK_IMPORTED_MODULE_10__["IntroComponent"]
    }, {
      path: '',
      redirectTo: '/introduction',
      pathMatch: 'full'
    }, {
      path: 'book',
      component: _party_party_component__WEBPACK_IMPORTED_MODULE_5__["PartyComponent"]
    }, {
      path: 'static',
      component: _static_static_component__WEBPACK_IMPORTED_MODULE_3__["StaticComponent"]
    }, {
      path: 'dacc',
      component: _static_dacc_component__WEBPACK_IMPORTED_MODULE_4__["DaccComponent"]
    }, {
      path: 'instruments',
      component: _static_instruments_component__WEBPACK_IMPORTED_MODULE_7__["InstrumentsComponent"]
    }, {
      path: 'login',
      component: _shell_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }, {
      path: 'company',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'taskexplorer',
      component: _static_taskexplorer_component__WEBPACK_IMPORTED_MODULE_8__["TaskexplorerComponent"]
    }, {
      path: 'charges',
      component: _static_charges_component__WEBPACK_IMPORTED_MODULE_9__["ChargesComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shell_shell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shell/shell.component */
    "./src/app/shell/shell.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'glossconfig';
        this.isAuthenticated = true;
      }

      _createClass(AppComponent, [{
        key: "login",
        value: function login() {}
      }, {
        key: "logout",
        value: function logout() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-shell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shell_shell_component__WEBPACK_IMPORTED_MODULE_1__["ShellComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: [".content[_ngcontent-%COMP%] {\n  padding: 1rem;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21zdC9Qcm9qZWN0cy9ncmFwaHFsL2dsb3NzQXBpQ2xpZW50cy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICBwYWRkaW5nOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi5jb250ZW50IHtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _graphql_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./graphql.module */
    "./src/app/graphql.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ag-grid-community/angular */
    "./node_modules/@ag-grid-community/angular/__ivy_ngcc__/fesm2015/ag-grid-community-angular.js");
    /* harmony import */


    var _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ag-grid-community/all-modules */
    "./node_modules/@ag-grid-community/all-modules/dist/es6/main.js");
    /* harmony import */


    var _grid_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./grid/grid.component */
    "./src/app/grid/grid.component.ts");
    /* harmony import */


    var _shell_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shell/shared.module */
    "./src/app/shell/shared.module.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _static_instruments_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./static/instruments.component */
    "./src/app/static/instruments.component.ts");
    /* harmony import */


    var _static_static_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./static/static.component */
    "./src/app/static/static.component.ts");
    /* harmony import */


    var _shell_static_sidebar_static_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shell/static-sidebar/static-sidebar.component */
    "./src/app/shell/static-sidebar/static-sidebar.component.ts");
    /* harmony import */


    var _static_depo_nostro_depo_nostro_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./static/depo-nostro/depo-nostro.component */
    "./src/app/static/depo-nostro/depo-nostro.component.ts");
    /* harmony import */


    var _static_dacc_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./static/dacc.component */
    "./src/app/static/dacc.component.ts");
    /* harmony import */


    var _static_book_book_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./static/book/book.component */
    "./src/app/static/book/book.component.ts");
    /* harmony import */


    var _static_ssip_ssip_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./static/ssip/ssip.component */
    "./src/app/static/ssip/ssip.component.ts");
    /* harmony import */


    var _home_home_form_home_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./home/home-form/home-form.component */
    "./src/app/home/home-form/home-form.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _menubar_menubar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./menubar/menubar.component */
    "./src/app/menubar/menubar.component.ts");
    /* harmony import */


    var _party_party_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./party/party.component */
    "./src/app/party/party.component.ts");
    /* harmony import */


    var _static_instr_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./static/instr-list.component */
    "./src/app/static/instr-list.component.ts");
    /* harmony import */


    var _static_company_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./static/company.component */
    "./src/app/static/company.component.ts");
    /* harmony import */


    var _static_taskexplorer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./static/taskexplorer.component */
    "./src/app/static/taskexplorer.component.ts");
    /* harmony import */


    var _static_charges_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./static/charges.component */
    "./src/app/static/charges.component.ts");
    /* harmony import */


    var _static_intro_intro_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./static/intro/intro.component */
    "./src/app/static/intro/intro.component.ts");
    /* harmony import */


    var _client_update_client_update_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./client-update/client-update.component */
    "./src/app/client-update/client-update.component.ts");

    _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_8__["ModuleRegistry"].registerModules(_ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_8__["AllCommunityModules"]);

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _graphql_module__WEBPACK_IMPORTED_MODULE_4__["GraphQLModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _shell_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"], _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_7__["AgGridModule"].withComponents([])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _grid_grid_component__WEBPACK_IMPORTED_MODULE_9__["GridComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _static_instruments_component__WEBPACK_IMPORTED_MODULE_12__["InstrumentsComponent"], _static_static_component__WEBPACK_IMPORTED_MODULE_13__["StaticComponent"], _static_depo_nostro_depo_nostro_component__WEBPACK_IMPORTED_MODULE_15__["DepoNostroComponent"], _static_dacc_component__WEBPACK_IMPORTED_MODULE_16__["DaccComponent"], _static_ssip_ssip_component__WEBPACK_IMPORTED_MODULE_18__["SsipComponent"], _static_book_book_component__WEBPACK_IMPORTED_MODULE_17__["BookComponent"], _home_home_form_home_form_component__WEBPACK_IMPORTED_MODULE_19__["HomeFormComponent"], _menubar_menubar_component__WEBPACK_IMPORTED_MODULE_21__["MenubarComponent"], _party_party_component__WEBPACK_IMPORTED_MODULE_22__["PartyComponent"], _static_instr_list_component__WEBPACK_IMPORTED_MODULE_23__["InstrListComponent"], _static_company_component__WEBPACK_IMPORTED_MODULE_24__["CompanyComponent"], _static_taskexplorer_component__WEBPACK_IMPORTED_MODULE_25__["TaskexplorerComponent"], _static_charges_component__WEBPACK_IMPORTED_MODULE_26__["ChargesComponent"], _static_intro_intro_component__WEBPACK_IMPORTED_MODULE_27__["IntroComponent"], _client_update_client_update_component__WEBPACK_IMPORTED_MODULE_28__["ClientUpdateComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _graphql_module__WEBPACK_IMPORTED_MODULE_4__["GraphQLModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _shell_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"], _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_7__["AgGridModule"]],
        exports: [_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__["GridComponent"], _shell_static_sidebar_static_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["StaticSidebarComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _grid_grid_component__WEBPACK_IMPORTED_MODULE_9__["GridComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _static_instruments_component__WEBPACK_IMPORTED_MODULE_12__["InstrumentsComponent"], _static_static_component__WEBPACK_IMPORTED_MODULE_13__["StaticComponent"], _static_depo_nostro_depo_nostro_component__WEBPACK_IMPORTED_MODULE_15__["DepoNostroComponent"], _static_dacc_component__WEBPACK_IMPORTED_MODULE_16__["DaccComponent"], _static_ssip_ssip_component__WEBPACK_IMPORTED_MODULE_18__["SsipComponent"], _static_book_book_component__WEBPACK_IMPORTED_MODULE_17__["BookComponent"], _home_home_form_home_form_component__WEBPACK_IMPORTED_MODULE_19__["HomeFormComponent"], _menubar_menubar_component__WEBPACK_IMPORTED_MODULE_21__["MenubarComponent"], _party_party_component__WEBPACK_IMPORTED_MODULE_22__["PartyComponent"], _static_instr_list_component__WEBPACK_IMPORTED_MODULE_23__["InstrListComponent"], _static_company_component__WEBPACK_IMPORTED_MODULE_24__["CompanyComponent"], _static_taskexplorer_component__WEBPACK_IMPORTED_MODULE_25__["TaskexplorerComponent"], _static_charges_component__WEBPACK_IMPORTED_MODULE_26__["ChargesComponent"], _static_intro_intro_component__WEBPACK_IMPORTED_MODULE_27__["IntroComponent"], _client_update_client_update_component__WEBPACK_IMPORTED_MODULE_28__["ClientUpdateComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _graphql_module__WEBPACK_IMPORTED_MODULE_4__["GraphQLModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _shell_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"], _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_7__["AgGridModule"].withComponents([])],
          exports: [_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__["GridComponent"], _shell_static_sidebar_static_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["StaticSidebarComponent"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/client-update/client-update.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/client-update/client-update.component.ts ***!
    \**********************************************************/

  /*! exports provided: ClientUpdateComponent */

  /***/
  function srcAppClientUpdateClientUpdateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientUpdateComponent", function () {
      return ClientUpdateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ag_grid_community_client_side_row_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ag-grid-community/client-side-row-model */
    "./node_modules/@ag-grid-community/client-side-row-model/dist/es6/main.js");
    /* harmony import */


    var _ag_grid_community_core_dist_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ag-grid-community/core/dist/styles/ag-grid.css */
    "./node_modules/@ag-grid-community/core/dist/styles/ag-grid.css");
    /* harmony import */


    var _ag_grid_community_core_dist_styles_ag_theme_alpine_dark_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ag-grid-community/core/dist/styles/ag-theme-alpine-dark.css */
    "./node_modules/@ag-grid-community/core/dist/styles/ag-theme-alpine-dark.css");
    /* harmony import */


    var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ag-grid-community/angular */
    "./node_modules/@ag-grid-community/angular/__ivy_ngcc__/fesm2015/ag-grid-community-angular.js");

    var ClientUpdateComponent = /*#__PURE__*/function () {
      function ClientUpdateComponent() {
        _classCallCheck(this, ClientUpdateComponent);

        this.modules = [_ag_grid_community_client_side_row_model__WEBPACK_IMPORTED_MODULE_1__["ClientSideRowModelModule"]];
        this.columnDefs = [{
          headerName: 'Name',
          valueGetter: function valueGetter(params) {
            return params.data.firstName + ' ' + params.data.lastName;
          },
          valueSetter: function valueSetter(params) {
            var fullName = params.newValue;
            var nameSplit = fullName.split(' ');
            var newFirstName = nameSplit[0];
            var newLastName = nameSplit[1];
            var data = params.data;

            if (data.firstName !== newFirstName || data.lastName !== newLastName) {
              data.firstName = newFirstName;
              data.lastName = newLastName;
              return true;
            } else {
              return false;
            }
          }
        }, {
          headerName: 'A',
          field: 'a'
        }, {
          headerName: 'B',
          valueGetter: function valueGetter(params) {
            return params.data.b;
          },
          valueSetter: function valueSetter(params) {
            if (params.data.b !== params.newValue) {
              // tslint:disable-next-line: radix
              params.data.b = parseInt(params.newValue);
              return true;
            } else {
              return false;
            }
          }
        }, {
          headerName: 'C.X',
          valueGetter: function valueGetter(params) {
            if (params.data.c) {
              return params.data.c.x;
            } else {
              return undefined;
            }
          },
          valueSetter: function valueSetter(params) {
            if (!params.data.c) {
              params.data.c = {};
            }

            params.data.c.x = params.newValue;
            return true;
          }
        }, {
          headerName: 'C.Y',
          valueGetter: function valueGetter(params) {
            if (params.data.c) {
              return params.data.c.y;
            } else {
              return undefined;
            }
          },
          valueSetter: function valueSetter(params) {
            if (!params.data.c) {
              params.data.c = {};
            }

            params.data.c.y = params.newValue;
            return true;
          }
        }];
        this.defaultColDef = {
          flex: 1,
          resizable: true,
          editable: true
        };
        this.rowData = createRowData();
      }

      _createClass(ClientUpdateComponent, [{
        key: "onGridReady",
        value: function onGridReady(params) {
          this.gridApi = params.api;
          this.gridColumnApi = params.columnApi;
        }
      }]);

      return ClientUpdateComponent;
    }();

    ClientUpdateComponent.ɵfac = function ClientUpdateComponent_Factory(t) {
      return new (t || ClientUpdateComponent)();
    };

    ClientUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClientUpdateComponent,
      selectors: [["client"]],
      decls: 2,
      vars: 4,
      consts: [["id", "myGrid", 1, "ag-theme-alpine-dark", 2, "width", "100%", "height", "100%", 3, "modules", "columnDefs", "defaultColDef", "rowData", "gridReady"], ["agGrid", ""]],
      template: function ClientUpdateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ag-grid-angular", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gridReady", function ClientUpdateComponent_Template_ag_grid_angular_gridReady_0_listener($event) {
            return ctx.onGridReady($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("modules", ctx.modules)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.defaultColDef)("rowData", ctx.rowData);
        }
      },
      directives: [_ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridAngular"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          // tslint:disable-next-line: component-selector
          selector: 'client',
          template: "<ag-grid-angular\n    #agGrid\n    style=\"width: 100%; height: 100%;\"\n    id=\"myGrid\"\n    class=\"ag-theme-alpine-dark\"\n    [modules]=\"modules\"\n    [columnDefs]=\"columnDefs\"\n    [defaultColDef]=\"defaultColDef\"\n    [rowData]=\"rowData\"\n    (gridReady)=\"onGridReady($event)\"\n  ></ag-grid-angular>"
        }]
      }], function () {
        return [];
      }, null);
    })();

    function createRowData() {
      var rowData = [];
      var firstNames = ['Niall', 'John', 'Rob', 'Alberto', 'Bas', 'Dimple', 'Sean'];
      var lastNames = ['Pink', 'Black', 'White', 'Brown', 'Smith', 'Smooth', 'Anderson'];

      for (var i = 0; i < 100; i++) {
        rowData.push({
          a: Math.floor(Math.random() * 100),
          b: Math.floor(Math.random() * 100),
          firstName: firstNames[i % firstNames.length],
          lastName: lastNames[i % lastNames.length]
        });
      }

      return rowData;
    }
    /***/

  },

  /***/
  "./src/app/graphql.module.ts":
  /*!***********************************!*\
    !*** ./src/app/graphql.module.ts ***!
    \***********************************/

  /*! exports provided: createApollo, GraphQLModule */

  /***/
  function srcAppGraphqlModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createApollo", function () {
      return createApollo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraphQLModule", function () {
      return GraphQLModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var _apollo_client_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @apollo/client/core */
    "./node_modules/@apollo/client/core/index.js");
    /* harmony import */


    var apollo_angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! apollo-angular/http */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApolloLinkHttp.js");

    var uri = 'http://localhost:3010/graphql';

    function createApollo(httpLink) {
      return {
        link: httpLink.create({
          uri: uri
        }),
        cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"]()
      };
    }

    var GraphQLModule = function GraphQLModule() {
      _classCallCheck(this, GraphQLModule);
    };

    GraphQLModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GraphQLModule
    });
    GraphQLModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GraphQLModule_Factory(t) {
        return new (t || GraphQLModule)();
      },
      providers: [{
        provide: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["APOLLO_OPTIONS"],
        useFactory: createApollo,
        deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]]
      }]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphQLModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          providers: [{
            provide: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["APOLLO_OPTIONS"],
            useFactory: createApollo,
            deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]]
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/grid/grid.component.ts":
  /*!****************************************!*\
    !*** ./src/app/grid/grid.component.ts ***!
    \****************************************/

  /*! exports provided: GridComponent */

  /***/
  function srcAppGridGridComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridComponent", function () {
      return GridComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ag-grid-community/angular */
    "./node_modules/@ag-grid-community/angular/__ivy_ngcc__/fesm2015/ag-grid-community-angular.js");

    var _c0 = ["agGrid"];

    var GridComponent = /*#__PURE__*/function () {
      function GridComponent() {
        _classCallCheck(this, GridComponent);

        this.page = 0;
      }

      _createClass(GridComponent, [{
        key: "onRowClicked",
        value: function onRowClicked(event) {
          var data = event.node.data;
          var myJSON = JSON.stringify(data);
          console.log('JSON Object', myJSON);
        }
      }, {
        key: "onCellClicked",
        value: function onCellClicked(event) {
          var data = event.node.data;
          var myJSON = JSON.stringify(data);
          console.log('OnCellClicked: JSON Object', myJSON);
        }
      }, {
        key: "onSelectionChanged",
        value: function onSelectionChanged(event) {
          console.log('onSelectionChanged', event);
          var selectedRows = event.api.getSelectedNodes();
          console.log('onSelectionChanged', selectedRows);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('Grid initializing ...');
          this.defaultColDef = {
            flex: 1,
            minWidth: 110,
            filter: true,
            sortable: true,
            resizable: true,
            editable: true
          };
          this.autoGroupColumnDef = {
            minWidth: 50
          };
          console.log('Auto grid group initialized ... ');
        }
      }, {
        key: "onBtStopEditing",
        value: function onBtStopEditing() {
          this.gridApi.stopEditing();
        }
      }, {
        key: "onCellEditingStarted",
        value: function onCellEditingStarted(event) {
          console.log('Started editing: now');
        }
      }, {
        key: "onGridReady",
        value: function onGridReady(params) {
          this.gridApi = params.api;
          this.gridColumnApi = params.columnApi;
          params.api.sizeColumnsToFit();
        }
      }]);

      return GridComponent;
    }();

    GridComponent.ɵfac = function GridComponent_Factory(t) {
      return new (t || GridComponent)();
    };

    GridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GridComponent,
      selectors: [["grid"]],
      viewQuery: function GridComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.agGrid = _t.first);
        }
      },
      inputs: {
        cols: "cols",
        rows: "rows"
      },
      decls: 4,
      vars: 6,
      consts: [[1, "example-header"], ["id", "selectedRows"], ["domLayout", "autoHeight", 1, "ag-theme-alpine-dark", 2, "width", "100%", "height", "100%", 3, "defaultColDef", "autoGroupColumnDef", "enableRangeSelection", "animateRows", "rowData", "columnDefs", "rowClicked", "cellClicked", "selectionChanged", "cellEditingStarted"]],
      template: function GridComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Selection: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ag-grid-angular", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowClicked", function GridComponent_Template_ag_grid_angular_rowClicked_3_listener($event) {
            return ctx.onRowClicked($event);
          })("cellClicked", function GridComponent_Template_ag_grid_angular_cellClicked_3_listener($event) {
            return ctx.onCellClicked($event);
          })("selectionChanged", function GridComponent_Template_ag_grid_angular_selectionChanged_3_listener($event) {
            return ctx.onSelectionChanged($event);
          })("cellEditingStarted", function GridComponent_Template_ag_grid_angular_cellEditingStarted_3_listener($event) {
            return ctx.onCellEditingStarted($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultColDef", ctx.defaultColDef)("autoGroupColumnDef", ctx.autoGroupColumnDef)("enableRangeSelection", true)("animateRows", true)("rowData", ctx.rows)("columnDefs", ctx.cols);
        }
      },
      directives: [_ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_1__["AgGridAngular"]],
      styles: ["h1[_ngcontent-%COMP%] { font-weight: normal; }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          // tslint:disable-next-line: component-selector
          selector: 'grid',
          template: "\n  <div class=\"example-header\">\n        Selection:\n        <span id=\"selectedRows\"></span>\n  </div>\n   <ag-grid-angular\n      style=\"width: 100%; height: 100%;\"\n      class=\"ag-theme-alpine-dark\"\n      [defaultColDef]=\"defaultColDef\"\n      [autoGroupColumnDef]=\"autoGroupColumnDef\"\n      [enableRangeSelection]=\"true\"\n      [animateRows]=\"true\"\n      domLayout='autoHeight'\n      [rowData]=rows\n      [columnDefs]=cols\n      (rowClicked)='onRowClicked($event)'\n      (cellClicked)='onCellClicked($event)'\n      (selectionChanged) = 'onSelectionChanged($event)'\n      (cellEditingStarted) = 'onCellEditingStarted($event)'\n      >\n  </ag-grid-angular>\n  ",
          styles: ['h1 { font-weight: normal; }']
        }]
      }], null, {
        agGrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['agGrid']
        }],
        cols: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/home-form/home-form.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/home/home-form/home-form.component.ts ***!
    \*******************************************************/

  /*! exports provided: HomeFormComponent */

  /***/
  function srcAppHomeHomeFormHomeFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeFormComponent", function () {
      return HomeFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _static_company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../static/company.component */
    "./src/app/static/company.component.ts");
    /* harmony import */


    var _party_party_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../party/party.component */
    "./src/app/party/party.component.ts");

    function HomeFormComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "company");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeFormComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "party");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeFormComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "party");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeFormComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "party");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeFormComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "party");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeFormComponent_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r6.post), " ");
      }
    }

    var HomeFormComponent = /*#__PURE__*/function () {
      function HomeFormComponent(formBuilder) {
        _classCallCheck(this, HomeFormComponent);

        this.formBuilder = formBuilder;
        this.titleAlert = 'This field is required';
        this.post = '';
      }

      _createClass(HomeFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createForm();
          this.setChangeValidate();
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.formGroup = this.formBuilder.group({
            Status: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Host: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            CompanyName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Reference: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ReferenceParty: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ReferenceSNAM: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            InternalNarrativeEnglish: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            NarrativeJapanese: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            NarrativeBaseCcy: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PurgeDays: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Location: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            CountryCode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            HolidayType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            TimezoneOffset: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            BICCode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            JASDECRef: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            JSDARef: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            TSERef: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            OSERef: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            BOJRef: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            JGBNetting: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ACGL: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            DBAgent: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            BICJGBCC: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            AgentBICNonJGBCC: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            validate: ''
          });
        }
      }, {
        key: "setChangeValidate",
        value: function setChangeValidate() {
          var _this = this;

          this.formGroup.get('validate').valueChanges.subscribe(function (validate) {
            if (validate === '1') {
              _this.formGroup.get('name').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]);

              _this.titleAlert = 'You need to specify at least 3 characters';
            } else {
              _this.formGroup.get('name').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            }

            _this.formGroup.get('name').updateValueAndValidity();
          });
        }
      }, {
        key: "checkPassword",
        value: function checkPassword(control) {
          var enteredPassword = control.value;
          var passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
          return !passwordCheck.test(enteredPassword) && enteredPassword ? {
            requirements: true
          } : null;
        }
      }, {
        key: "checkInUseEmail",
        value: function checkInUseEmail(control) {
          // mimic http database access
          var db = ['tony@gmail.com'];
          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            setTimeout(function () {
              var result = db.indexOf(control.value) !== -1 ? {
                alreadyInUse: true
              } : null;
              observer.next(result);
              observer.complete();
            }, 4000);
          });
        }
      }, {
        key: "getErrorEmail",
        value: function getErrorEmail() {
          return this.formGroup.get('email').hasError('required') ? 'Field is required' : this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' : this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
        }
      }, {
        key: "getErrorPassword",
        value: function getErrorPassword() {
          return this.formGroup.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' : this.formGroup.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(post) {
          this.post = post;
        }
      }, {
        key: "name",
        get: function get() {
          return this.formGroup.get('name');
        }
      }]);

      return HomeFormComponent;
    }();

    HomeFormComponent.ɵfac = function HomeFormComponent_Factory(t) {
      return new (t || HomeFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    HomeFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeFormComponent,
      selectors: [["app-home-form"]],
      decls: 13,
      vars: 10,
      consts: [["mat-align-tabs", "start"], ["label", "Company Setup"], ["class", "container", "novalidate", "", 4, "ngIf", "ngIfElse"], ["label", "Reference"], ["label", "Classifications"], ["label", "Flags"], ["label", "SSI"], ["forminfo", ""], ["novalidate", "", 1, "container"], [1, "container"]],
      template: function HomeFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeFormComponent_div_2_Template, 2, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeFormComponent_div_4_Template, 2, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeFormComponent_div_6_Template, 2, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-tab", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeFormComponent_div_8_Template, 2, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-tab", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeFormComponent_div_10_Template, 2, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeFormComponent_ng_template_11_Template, 3, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.post)("ngIfElse", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.post)("ngIfElse", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.post)("ngIfElse", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.post)("ngIfElse", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.post)("ngIfElse", _r5);
        }
      },
      directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _static_company_component__WEBPACK_IMPORTED_MODULE_5__["CompanyComponent"], _party_party_component__WEBPACK_IMPORTED_MODULE_6__["PartyComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]],
      styles: [".fill-remaining-space[_ngcontent-%COMP%] {\n  \n  flex: 1;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 100%;\n  height: 50%;\n}\n\n.form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 80%;\n}\n\n.form-element[_ngcontent-%COMP%] {\n  padding: 5px 10px 25px 2px;\n  width: 33%;\n  min-width: 100px;\n}\n\n.button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-tab-group[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21zdC9Qcm9qZWN0cy9ncmFwaHFsL2dsb3NzQXBpQ2xpZW50cy9zcmMvYXBwL2hvbWUvaG9tZS1mb3JtL2hvbWUtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLWZvcm0vaG9tZS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7bURBQUE7RUFFQSxPQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUtZm9ybS9ob21lLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guXG4gICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4gIGZsZXg6IDE7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbi5mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA4MCU7XG59XG5cbi5mb3JtLWVsZW1lbnQge1xuICBwYWRkaW5nOiA1cHggMTBweCAyNXB4IDJweDtcbiAgd2lkdGg6IDMzJTtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cblxuLmJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LXRhYi1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XG59XG4iLCIuZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guXG4gICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4gIGZsZXg6IDE7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbi5mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA4MCU7XG59XG5cbi5mb3JtLWVsZW1lbnQge1xuICBwYWRkaW5nOiA1cHggMTBweCAyNXB4IDJweDtcbiAgd2lkdGg6IDMzJTtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cblxuLmJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LXRhYi1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-form',
          templateUrl: './home-form.component.html',
          styleUrls: ['./home-form.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _menubar_menubar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../menubar/menubar.component */
    "./src/app/menubar/menubar.component.ts");
    /* harmony import */


    var _home_form_home_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home-form/home-form.component */
    "./src/app/home/home-form/home-form.component.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.title = 'Company Setup';
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 2,
      vars: 1,
      consts: [[3, "customTitle"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menubar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-home-form");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("customTitle", ctx.title);
        }
      },
      directives: [_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_1__["MenubarComponent"], _home_form_home_form_component__WEBPACK_IMPORTED_MODULE_2__["HomeFormComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/menubar/menubar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/menubar/menubar.component.ts ***!
    \**********************************************/

  /*! exports provided: MenubarComponent */

  /***/
  function srcAppMenubarMenubarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenubarComponent", function () {
      return MenubarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var MenubarComponent = /*#__PURE__*/function () {
      function MenubarComponent() {
        _classCallCheck(this, MenubarComponent);

        this.notifyParentSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.notifyParentRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.notifyParentDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(MenubarComponent, [{
        key: "onSave",
        value: function onSave() {
          this.notifyParentSave.emit();
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          this.notifyParentDelete.emit();
        }
      }, {
        key: "onRefresh",
        value: function onRefresh() {
          this.notifyParentRefresh.emit();
        }
      }, {
        key: "onClickAdd",
        value: function onClickAdd() {
          console.log('Add emitter is sent');
          this.onSave();
        }
      }, {
        key: "onClickRefresh",
        value: function onClickRefresh() {
          console.log('Refresh emitter is sent');
          this.onRefresh();
        }
      }, {
        key: "onClickDelete",
        value: function onClickDelete() {
          console.log('Delete emitter is sent');
          this.onDelete();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MenubarComponent;
    }();

    MenubarComponent.ɵfac = function MenubarComponent_Factory(t) {
      return new (t || MenubarComponent)();
    };

    MenubarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenubarComponent,
      selectors: [["app-menubar"]],
      inputs: {
        customTitle: "customTitle"
      },
      outputs: {
        notifyParentSave: "notifyParentSave",
        notifyParentRefresh: "notifyParentRefresh",
        notifyParentDelete: "notifyParentDelete"
      },
      decls: 16,
      vars: 1,
      consts: [["color", "primary"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], [1, "toolbar-spacer"], ["mat-icon-button", "", "aria-label", "refresh", 3, "click"], ["mat-icon-button", "", "aria-label", "Add", 3, "click"], ["mat-icon-button", "", "aria-label", "Delete", 3, "click"]],
      template: function MenubarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenubarComponent_Template_button_click_7_listener() {
            return ctx.onClickRefresh();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "refresh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenubarComponent_Template_button_click_10_listener() {
            return ctx.onClickAdd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenubarComponent_Template_button_click_13_listener() {
            return ctx.onClickDelete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.customTitle);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
      styles: [".toolbar-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21zdC9Qcm9qZWN0cy9ncmFwaHFsL2dsb3NzQXBpQ2xpZW50cy9zcmMvYXBwL21lbnViYXIvbWVudWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWVudWJhci9tZW51YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQW9CLGNBQUE7QUNFcEIiLCJmaWxlIjoic3JjL2FwcC9tZW51YmFyL21lbnViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhci1zcGFjZXIgeyAgIGZsZXg6IDEgMSBhdXRvOyB9XG4iLCIudG9vbGJhci1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenubarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menubar',
          templateUrl: './menubar.component.html',
          styleUrls: ['./menubar.component.scss']
        }]
      }], function () {
        return [];
      }, {
        notifyParentSave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        notifyParentRefresh: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        notifyParentDelete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        customTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/party/party.component.ts":
  /*!******************************************!*\
    !*** ./src/app/party/party.component.ts ***!
    \******************************************/

  /*! exports provided: PartyComponent */

  /***/
  function srcAppPartyPartyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PartyComponent", function () {
      return PartyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ag-grid-community/all-modules */
    "./node_modules/@ag-grid-community/all-modules/dist/es6/main.js");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ag-grid-community/angular */
    "./node_modules/@ag-grid-community/angular/__ivy_ngcc__/fesm2015/ag-grid-community-angular.js");

    var party = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a(_templateObject());
    /*
    mst16289
    mst16288
    
    */

    var PartyComponent = /*#__PURE__*/function () {
      function PartyComponent(apollo) {
        _classCallCheck(this, PartyComponent);

        this.apollo = apollo;
        this.title = 'Party Component';
        this.page = 1;
        this.rows = [];
        this.modules = [_ag_grid_community_all_modules__WEBPACK_IMPORTED_MODULE_2__["ClientSideRowModelModule"]];
        this.cols = [{
          headerName: 'Party Ref',
          field: 'party_ref',
          checkboxSelection: true
        }, {
          headerName: 'Type',
          field: 'party_type'
        }, {
          headerName: 'Long Name',
          field: 'party_long_name'
        }, {
          headerName: 'Short Name',
          field: 'party_short_name'
        }, {
          headerName: 'Full Name',
          field: 'party_extra_long_name'
        }, {
          headerName: 'Version',
          field: 'version_no'
        }];
      }

      _createClass(PartyComponent, [{
        key: "onRowClicked",
        value: function onRowClicked(event) {
          var data = event.node.data;
          var myJSON = JSON.stringify(data);
          console.log('JSON Object', myJSON);
        }
      }, {
        key: "onCellClicked",
        value: function onCellClicked(event) {
          var data = event.node.data;
          var myJSON = JSON.stringify(data);
          console.log('OnCellClicked: JSON Object', myJSON);
        }
      }, {
        key: "onSelectionChanged",
        value: function onSelectionChanged(event) {
          console.log('onSelectionChanged', event);
          var selectedRow = event.api.getSelectedNode();
          console.log('onSelectionChanged', selectedRow);
        }
      }, {
        key: "onBtStopEditing",
        value: function onBtStopEditing() {
          this.gridApi.stopEditing();
        }
      }, {
        key: "onCellEditingStarted",
        value: function onCellEditingStarted(event) {
          console.log('Started editing: now');
        }
      }, {
        key: "onGridReady",
        value: function onGridReady(params) {
          this.gridApi = params.api;
          this.gridColumnApi = params.columnApi;
          params.api.sizeColumnsToFit();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.defaultColDef = {
            flex: 1,
            minWidth: 110,
            filter: true,
            sortable: true,
            resizable: true,
            editable: true
          };
          this.autoGroupColumnDef = {
            minWidth: 50
          };
          console.log('Auto grid group initialized ... ');
          this.query = this.apollo.watchQuery({
            query: party,
            variables: {
              offset: 10 * this.page
            },
            errorPolicy: 'all'
          });
          this.query.valueChanges.subscribe(function (result) {
            _this2.rows = result.data && result.data.party;
            console.log('from Party : rows returned');
          });
        }
      }, {
        key: "update",
        value: function update() {
          console.log('Update static page ....');
          this.query.refetch({
            offset: 10 * this.page
          });
        }
      }, {
        key: "nextPage",
        value: function nextPage() {
          this.page++;
          this.update();
        }
      }, {
        key: "prevPage",
        value: function prevPage() {
          if (this.page > 0) {
            this.page--;
          }

          this.update();
        }
      }, {
        key: "onSave",
        value: function onSave() {
          console.log('onSave completed.');
        }
      }, {
        key: "onAdd",
        value: function onAdd() {
          console.log('Did Add');
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          console.log('Did Add');
        }
      }, {
        key: "onRefresh",
        value: function onRefresh() {
          console.log('Did Add');
        }
      }]);

      return PartyComponent;
    }();

    PartyComponent.ɵfac = function PartyComponent_Factory(t) {
      return new (t || PartyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"]));
    };

    PartyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PartyComponent,
      selectors: [["party"]],
      decls: 1,
      vars: 7,
      consts: [["domLayout", "autoHeight", 1, "ag-theme-alpine-dark", 2, "width", "100%", "height", "100%", 3, "defaultColDef", "autoGroupColumnDef", "enableRangeSelection", "animateRows", "rowData", "columnDefs", "modules", "rowClicked", "cellClicked", "selectionChanged", "cellEditingStarted"]],
      template: function PartyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ag-grid-angular", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowClicked", function PartyComponent_Template_ag_grid_angular_rowClicked_0_listener($event) {
            return ctx.onRowClicked($event);
          })("cellClicked", function PartyComponent_Template_ag_grid_angular_cellClicked_0_listener($event) {
            return ctx.onCellClicked($event);
          })("selectionChanged", function PartyComponent_Template_ag_grid_angular_selectionChanged_0_listener($event) {
            return ctx.onSelectionChanged($event);
          })("cellEditingStarted", function PartyComponent_Template_ag_grid_angular_cellEditingStarted_0_listener($event) {
            return ctx.onCellEditingStarted($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultColDef", ctx.defaultColDef)("autoGroupColumnDef", ctx.autoGroupColumnDef)("enableRangeSelection", true)("animateRows", true)("rowData", ctx.rows)("columnDefs", ctx.cols)("modules", ctx.modules);
        }
      },
      directives: [_ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridAngular"]],
      styles: [".toolbar-spacer[_ngcontent-%COMP%] {   flex: 1 1 auto;}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PartyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          // tslint:disable-next-line: component-selector
          selector: 'party',
          template: "\n       <ag-grid-angular\n      style=\"width: 100%; height: 100%;\"\n      class=\"ag-theme-alpine-dark\"\n      [defaultColDef]=\"defaultColDef\"\n      [autoGroupColumnDef]=\"autoGroupColumnDef\"\n      [enableRangeSelection]=\"true\"\n      [animateRows]=\"true\"\n      domLayout='autoHeight'\n      [rowData]=rows\n      [columnDefs]=cols\n      (rowClicked)='onRowClicked($event)'\n      (cellClicked)='onCellClicked($event)'\n      (selectionChanged) = 'onSelectionChanged($event)'\n      (cellEditingStarted) = 'onCellEditingStarted($event)'\n      [modules]=\"modules\"\n\n      >\n  </ag-grid-angular>\n  ",
          styles: ['.toolbar-spacer {   flex: 1 1 auto;}']
        }]
      }], function () {
        return [{
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shell/delete.button/delete-button.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shell/delete.button/delete-button.component.ts ***!
    \****************************************************************/

  /*! exports provided: DeleteButtonComponent */

  /***/
  function srcAppShellDeleteButtonDeleteButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteButtonComponent", function () {
      return DeleteButtonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DeleteButtonComponent_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "confirm");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DeleteButtonComponent_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteButtonComponent_button_4_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.cancel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cancel\n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var DeleteButtonComponent = /*#__PURE__*/function () {
      function DeleteButtonComponent() {
        _classCallCheck(this, DeleteButtonComponent);

        this["delete"] = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(DeleteButtonComponent, [{
        key: "cancel",
        value: function cancel() {
          this.canDelete = false;
        }
      }, {
        key: "prepareForDelete",
        value: function prepareForDelete() {
          this.canDelete = true;
        }
      }, {
        key: "deleteBoard",
        value: function deleteBoard() {
          this["delete"].emit(true);
          this.canDelete = false;
        }
      }]);

      return DeleteButtonComponent;
    }();

    DeleteButtonComponent.ɵfac = function DeleteButtonComponent_Factory(t) {
      return new (t || DeleteButtonComponent)();
    };

    DeleteButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DeleteButtonComponent,
      selectors: [["app-delete-button"]],
      outputs: {
        "delete": "delete"
      },
      decls: 5,
      vars: 2,
      consts: [["mat-button", "", "color", "warn", 3, "click"], [4, "ngIf"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "click"]],
      template: function DeleteButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteButtonComponent_Template_button_click_0_listener() {
            return ctx.canDelete ? ctx.deleteBoard() : ctx.prepareForDelete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DeleteButtonComponent_span_3_Template, 2, 0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DeleteButtonComponent_button_4_Template, 2, 0, "button", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canDelete);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canDelete);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".confirm[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21zdC9Qcm9qZWN0cy9ncmFwaHFsL2dsb3NzQXBpQ2xpZW50cy9zcmMvYXBwL3NoZWxsL2RlbGV0ZS5idXR0b24vZGVsZXRlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbGwvZGVsZXRlLmJ1dHRvbi9kZWxldGUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVcsZ0JBQUE7QUNFWCIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2RlbGV0ZS5idXR0b24vZGVsZXRlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25maXJtIHsgbWluLXdpZHRoOiAyMDBweDsgfVxuXG4iLCIuY29uZmlybSB7XG4gIG1pbi13aWR0aDogMjAwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-delete-button',
          templateUrl: './delete-button.component.html',
          styleUrls: ['./delete-button.component.scss']
        }]
      }], null, {
        "delete": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shell/gallery/gallary.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/shell/gallery/gallary.component.ts ***!
    \****************************************************/

  /*! exports provided: GallaryComponent */

  /***/
  function srcAppShellGalleryGallaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GallaryComponent", function () {
      return GallaryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GallaryComponent = /*#__PURE__*/function () {
      function GallaryComponent() {
        _classCallCheck(this, GallaryComponent);
      }

      _createClass(GallaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GallaryComponent;
    }();

    GallaryComponent.ɵfac = function GallaryComponent_Factory(t) {
      return new (t || GallaryComponent)();
    };

    GallaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GallaryComponent,
      selectors: [["app-gallary"]],
      decls: 5,
      vars: 0,
      consts: [[1, "gallery"], [1, "gallery__item"], ["src", "../assets/img/rainbow.jpg", "alt", "Rainbow Bridge", 1, "gallery__photo"], ["src", "../assets/img/rainbow-bridge-1.jpg", "alt", "rainbow Bridge", 1, "gallery__photo"]],
      template: function GallaryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "figure", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".gallery[_ngcontent-%COMP%] {\n  display: flex;\n}\n.gallery__photo[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21zdC9Qcm9qZWN0cy9ncmFwaHFsL2dsb3NzQXBpQ2xpZW50cy9zcmMvYXBwL3NoZWxsL2dhbGxlcnkvZ2FsbGFyeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbGwvZ2FsbGVyeS9nYWxsYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtBQ0RKO0FER0k7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvZ2FsbGVyeS9nYWxsYXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gR0FMTEVSWVxuLmdhbGxlcnkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAmX19waG90byB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG4iLCIuZ2FsbGVyeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZ2FsbGVyeV9fcGhvdG8ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GallaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-gallary',
          templateUrl: './gallary.component.html',
          styleUrls: ['./gallary.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shell/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/shell/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppShellLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function LoginComponent_mat_error_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " The username and password were not recognised ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    } // import { AuthService } from '../auth.service';


    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(fb, route, router) {
        _classCallCheck(this, LoginComponent);

        this.fb = fb;
        this.route = route;
        this.router = router;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/company';
                    this.formGroup = this.fb.group({
                      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
                      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    });

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var username, password;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.loginInvalid = false;
                    this.formSubmitAttempt = false;

                    if (this.formGroup.valid) {
                      try {
                        username = this.formGroup.get('username').value;
                        password = this.formGroup.get('password').value; // await this.authService.login(username, password);
                      } catch (err) {
                        this.loginInvalid = true;
                      }
                    } else {
                      this.formSubmitAttempt = true;
                    }

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 16,
      vars: 1,
      consts: [[1, "form", 3, "ngSubmit"], [4, "ngIf"], [1, "full-width-input"], ["matInput", "", "placeholder", "Email", "formControlName", "username", "required", ""], ["matInput", "", "type", "password", "placeholder", "Password", "formControlName", "password", "required", ""], ["mat-raised-button", "", "color", "primary"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Log In");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LoginComponent_mat_error_5_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Please provide a valid email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Please provide a valid password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginInvalid);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
      styles: ["mat-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 2em auto;\n  text-align: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21zdC9Qcm9qZWN0cy9ncmFwaHFsL2dsb3NzQXBpQ2xpZW50cy9zcmMvYXBwL3NoZWxsL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW46IDJlbSBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgbWF0LWZvcm0tZmllbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9IiwibWF0LWNhcmQge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDJlbSBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shell/shared.module.ts":
  /*!****************************************!*\
    !*** ./src/app/shell/shared.module.ts ***!
    \****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppShellSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _shell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shell.component */
    "./src/app/shell/shell.component.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./delete.button/delete-button.component */
    "./src/app/shell/delete.button/delete-button.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _gallery_gallary_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./gallery/gallary.component */
    "./src/app/shell/gallery/gallary.component.ts");
    /* harmony import */


    var _static_sidebar_static_sidebar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./static-sidebar/static-sidebar.component */
    "./src/app/shell/static-sidebar/static-sidebar.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/shell/login/login.component.ts");

    var components = [_shell_component__WEBPACK_IMPORTED_MODULE_4__["ShellComponent"], _delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_11__["DeleteButtonComponent"], _gallery_gallary_component__WEBPACK_IMPORTED_MODULE_21__["GallaryComponent"], _static_sidebar_static_sidebar_component__WEBPACK_IMPORTED_MODULE_22__["StaticSidebarComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"]];
    var modules = [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__["MatBadgeModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"]];

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[].concat(modules), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__["MatBadgeModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_shell_component__WEBPACK_IMPORTED_MODULE_4__["ShellComponent"], _delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_11__["DeleteButtonComponent"], _gallery_gallary_component__WEBPACK_IMPORTED_MODULE_21__["GallaryComponent"], _static_sidebar_static_sidebar_component__WEBPACK_IMPORTED_MODULE_22__["StaticSidebarComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__["MatBadgeModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"]],
        exports: [_shell_component__WEBPACK_IMPORTED_MODULE_4__["ShellComponent"], _delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_11__["DeleteButtonComponent"], _gallery_gallary_component__WEBPACK_IMPORTED_MODULE_21__["GallaryComponent"], _static_sidebar_static_sidebar_component__WEBPACK_IMPORTED_MODULE_22__["StaticSidebarComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__["MatBadgeModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [].concat(components, [_login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"]]),
          imports: [].concat(modules),
          exports: [].concat(components, modules)
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shell/shell.component.ts":
  /*!******************************************!*\
    !*** ./src/app/shell/shell.component.ts ***!
    \******************************************/

  /*! exports provided: ShellComponent */

  /***/
  function srcAppShellShellComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShellComponent", function () {
      return ShellComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _static_sidebar_static_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./static-sidebar/static-sidebar.component */
    "./src/app/shell/static-sidebar/static-sidebar.component.ts");
    /* harmony import */


    var _gallery_gallary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./gallery/gallary.component */
    "./src/app/shell/gallery/gallary.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function ShellComponent_button_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShellComponent_button_12_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r0.toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ShellComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\uD83C\uDF71 LOGIN ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = ["*"]; //import { AngularFireAuth } from '@angular/fire/auth';

    var ShellComponent = function ShellComponent(breakpointObserver // , public afAuth: AngularFireAuth
    ) {
      _classCallCheck(this, ShellComponent);

      this.breakpointObserver = breakpointObserver;
      this.isHandset$ = this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
        return result.matches;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
    };

    ShellComponent.ɵfac = function ShellComponent_Factory(t) {
      return new (t || ShellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]));
    };

    ShellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShellComponent,
      selectors: [["app-shell"]],
      ngContentSelectors: _c0,
      decls: 27,
      vars: 13,
      consts: [[1, "sidenav-container"], ["fixedInViewport", "", 1, "side-nav", 3, "mode", "opened"], ["drawer", ""], ["mat-list-item", "", "routerLink", "/book", 3, "click"], ["color", "primary"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["routerLink", "/", 1, "logo1"], [1, "fill-space"], [4, "ngIf"], [1, "container"], [1, "content"], [1, "hotel-view"], [1, "detail"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"], ["mat-button", "", "routerLink", "/login"]],
      template: function ShellComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-nav-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShellComponent_Template_a_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "LOGIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-toolbar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ShellComponent_button_12_Template, 3, 0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "GLOSS API CONFIGURATION");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ShellComponent_div_17_Template, 3, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-static-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "main", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-gallary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, ctx.isHandset$) ? "over" : "side")("opened", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, ctx.isHandset$) ? "dialog" : "navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 9, ctx.isHandset$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 11, ctx.isHandset$));
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _static_sidebar_static_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["StaticSidebarComponent"], _gallery_gallary_component__WEBPACK_IMPORTED_MODULE_9__["GallaryComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatAnchor"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
      styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.pin[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 1.2em;\n  padding: 1px;\n  cursor: pointer;\n  outline: none;\n  height: 4rem;\n  width: 8rem;\n  overflow: hidden;\n  text-indent: 100%;\n  white-space: nowrap;\n  background-size: 100% auto;\n  background-position: 5px center;\n  background-repeat: no-repeat;\n}\n\n.logo[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 1.2em;\n  padding: 1px;\n  cursor: pointer;\n  outline: none;\n  height: 4rem;\n  width: 150px;\n  overflow: hidden;\n  text-indent: 100%;\n  white-space: nowrap;\n  background-size: 80% auto;\n  background-position: 5px center;\n  background-repeat: no-repeat;\n  background-image: url('broadridge.jpeg');\n}\n\n.mat-drawer-side[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.3);\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n  font-family: sofia-pro;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.fill-space[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\ni[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-size: 1.25em;\n  margin-right: 16px;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 1.75em;\n  border-radius: 50%;\n  margin: 0 10px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21zdC9Qcm9qZWN0cy9ncmFwaHFsL2dsb3NzQXBpQ2xpZW50cy9zcmMvYXBwL3NoZWxsL3NoZWxsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC9zaGVsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FDQ0Y7O0FESUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHdDQUFBO0FDREY7O0FES0E7RUFDRSxZQUFBO0VBQ0EsK0NBQUE7QUNGRjs7QURLQTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtBQ0ZGOztBREtBO0VBQ0UsbUJBQUE7QUNGRjs7QURLQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0ZGOztBREtBO0VBQ0UsY0FBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRkY7O0FES0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvc2hlbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5waW4ge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgcGFkZGluZzogMXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGhlaWdodDogNHJlbTtcbiAgd2lkdGg6IDhyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtaW5kZW50OiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNXB4IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vc3R5bGVzL2ltYWdlcy9idXR0b24vYnRuX2hkcl9teXBhZ2Uuc3ZnKTtcbn1cblxuXG4ubG9nbyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDEuMmVtO1xuICBwYWRkaW5nOiAxcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgaGVpZ2h0OiA0cmVtO1xuICB3aWR0aDogMTUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtaW5kZW50OiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBiYWNrZ3JvdW5kLXNpemU6IDgwJSBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1cHggY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2Jyb2FkcmlkZ2UuanBlZyk7XG59XG5cblxuLm1hdC1kcmF3ZXItc2lkZSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBmb250LWZhbWlseTogc29maWEtcHJvO1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5maWxsLXNwYWNlIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbmkge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5hdmF0YXIge1xuICB3aWR0aDogMS43NWVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMCAxMHB4IDVweDtcbn0iLCIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5waW4ge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgcGFkZGluZzogMXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGhlaWdodDogNHJlbTtcbiAgd2lkdGg6IDhyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtaW5kZW50OiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNXB4IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmxvZ28ge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgcGFkZGluZzogMXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGhlaWdodDogNHJlbTtcbiAgd2lkdGg6IDE1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWluZGVudDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYmFja2dyb3VuZC1zaXplOiA4MCUgYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNXB4IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9icm9hZHJpZGdlLmpwZWcpO1xufVxuXG4ubWF0LWRyYXdlci1zaWRlIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG4gIGZvbnQtZmFtaWx5OiBzb2ZpYS1wcm87XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLmZpbGwtc3BhY2Uge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuaSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxLjI1ZW07XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuLmF2YXRhciB7XG4gIHdpZHRoOiAxLjc1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAwIDEwcHggNXB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-shell',
          templateUrl: './shell.component.html',
          styleUrls: ['./shell.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shell/static-sidebar/static-sidebar.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shell/static-sidebar/static-sidebar.component.ts ***!
    \******************************************************************/

  /*! exports provided: StaticSidebarComponent */

  /***/
  function srcAppShellStaticSidebarStaticSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaticSidebarComponent", function () {
      return StaticSidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");

    var StaticSidebarComponent = /*#__PURE__*/function () {
      function StaticSidebarComponent() {
        _classCallCheck(this, StaticSidebarComponent);
      }

      _createClass(StaticSidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StaticSidebarComponent;
    }();

    StaticSidebarComponent.ɵfac = function StaticSidebarComponent_Factory(t) {
      return new (t || StaticSidebarComponent)();
    };

    StaticSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StaticSidebarComponent,
      selectors: [["app-static-sidebar"]],
      decls: 44,
      vars: 1,
      consts: [[1, "sidebar"], [1, "side-nav"], [1, "side-nav__item"], ["routerLink", "/introduction", "routerLinkActive", "active", 1, "side-nav__link"], [1, "side-nav__icon"], [0, "xlink", "href", "/assets/img/sprite.svg#icon-home"], ["mat-button", "", 1, "side-nav__item", 3, "matMenuTriggerFor"], ["routerLink", "/home", "routerLinkActive", "active", 1, "side-nav__link"], [0, "xlink", "href", "/assets/img/sprite.svg#icon-chevron-thin-right"], ["routerLink", "/instruments", "routerLinkActive", "active", 1, "side-nav__link"], [0, "xlink", "href", "/assets/img/sprite.svg#icon-key"], ["routerLink", "/charges", "routerLinkActive", "active", 1, "side-nav__link"], ["routerLink", "/taskexplorer", "routerLinkActive", "active", 1, "side-nav__link"], [1, "legal"], ["xPosition", "before"], ["partyconfig", "matMenu"], ["mat-menu-item", "", "routerLink", "/company", "routerLinkActive", "active"], ["mat-menu-item", "", "routerLink", "/dacc", "routerLinkActive", "active"], ["mat-menu-item", "", "routerLink", "/book", "routerLinkActive", "active"], ["mat-menu-item", "", "routerLink", "/counterparty", "routerLinkActive", "active"]],
      template: function StaticSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "use", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "HOME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "use", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "PARTY CONFIGURATION");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "use", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "INSTRUMENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "svg", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "use", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "CHARGES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "svg", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "use", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "TASK EXPLORER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \xA9 2020 broadridge financial ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-menu", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "COMPANY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "DACC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "BOOK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "COUNTERPARTY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3N0YXRpYy1zaWRlYmFyL3N0YXRpYy1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StaticSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-static-sidebar',
          templateUrl: './static-sidebar.component.html',
          styleUrls: ['./static-sidebar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/static/book/book.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/static/book/book.component.ts ***!
    \***********************************************/

  /*! exports provided: BookComponent */

  /***/
  function srcAppStaticBookBookComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookComponent", function () {
      return BookComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var _shell_static_sidebar_static_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shell/static-sidebar/static-sidebar.component */
    "./src/app/shell/static-sidebar/static-sidebar.component.ts");
    /* harmony import */


    var _shell_gallery_gallary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shell/gallery/gallary.component */
    "./src/app/shell/gallery/gallary.component.ts");
    /* harmony import */


    var _menubar_menubar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../menubar/menubar.component */
    "./src/app/menubar/menubar.component.ts");
    /* harmony import */


    var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ag-grid-community/angular */
    "./node_modules/@ag-grid-community/angular/__ivy_ngcc__/fesm2015/ag-grid-community-angular.js");

    var BOOKS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a(_templateObject2());

    var BookComponent = /*#__PURE__*/function () {
      function BookComponent(apollo) {
        _classCallCheck(this, BookComponent);

        this.apollo = apollo;
        this.page = 0;
        this.players = [];
        this.cols = [{
          headerName: 'Name',
          field: 'Name'
        }, {
          headerName: 'ShortName',
          field: 'ShortName'
        }, {
          headerName: 'FullName',
          field: 'FullName'
        }, {
          headerName: 'PositionType',
          field: 'PositionType'
        }, {
          headerName: 'HedgingCategory',
          field: 'HedgingCategory'
        }, {
          headerName: 'BusinessUnit',
          field: 'BusinessUnit'
        }, {
          headerName: 'GenBookClass',
          field: 'GenBookClass'
        }, {
          headerName: 'AccountClass',
          field: 'AccountClass'
        }, {
          headerName: 'BookingUnit',
          field: 'BookingUnit'
        }, {
          headerName: 'RapideReference',
          field: 'RapideReference'
        }, {
          headerName: 'FidessaCPTYRef',
          field: 'FidessaCPTYRef'
        }, {
          headerName: 'CustodyRef',
          field: 'CustodyRef'
        }, {
          headerName: 'CumulusCode',
          field: 'CumulusCode'
        }, {
          headerName: 'GenBookExtRef',
          field: 'GenBookExtRef'
        }, {
          headerName: 'TradingDesk',
          field: 'TradingDesk'
        }, {
          headerName: 'BloombergReference',
          field: 'BloombergReference'
        }, {
          headerName: 'ADPBookAccountNo',
          field: 'ADPBookAccountNo'
        }, {
          headerName: 'ADPOSPBrokerID',
          field: 'ADPOSPBrokerID'
        }, {
          headerName: 'TRAXEntity',
          field: 'TRAXEntity'
        }, {
          headerName: 'SegregationParty',
          field: 'SegregationParty'
        }, {
          headerName: 'ParentBook',
          field: 'ParentBook'
        }, {
          headerName: 'ParentBookAgency',
          field: 'ParentBookAgency'
        }, {
          headerName: 'IntroducingBroker',
          field: 'IntroducingBroker'
        }, {
          headerName: 'CompanyPartyType',
          field: 'CompanyPartyType'
        }, {
          headerName: 'ADRTurnBook',
          field: 'ADRTurnBook'
        }, {
          headerName: 'GenBookFlag',
          field: 'GenBookFlag'
        }, {
          headerName: 'HedgeRelFlag',
          field: 'HedgeRelFlag'
        }, {
          headerName: 'MarktoMkt',
          field: 'MarktoMkt'
        }, {
          headerName: 'ExcludeOasys',
          field: 'ExcludeOasys'
        }, {
          headerName: 'ProgramBookPAID',
          field: 'ProgramBookPAID'
        }, {
          headerName: 'PAIDPrinOnMkt',
          field: 'PAIDPrinOnMkt'
        }, {
          headerName: 'PAIDPrinOffMkt',
          field: 'PAIDPrinOffMkt'
        }, {
          headerName: 'PAIDAgenOnMkt',
          field: 'PAIDAgenOnMkt'
        }, {
          headerName: 'PAIDAgenOffMkt',
          field: 'PAIDAgenOffMkt'
        }, {
          headerName: 'PAIDPrinInvOnMkt',
          field: 'PAIDPrinInvOnMkt'
        }, {
          headerName: 'PAIDPrinInvOffMkt',
          field: 'PAIDPrinInvOffMkt'
        }, {
          headerName: 'PAIDAverage',
          field: 'PAIDAverage'
        }, {
          headerName: 'HostReference',
          field: 'HostReference'
        }, {
          headerName: 'PartyReference',
          field: 'PartyReference'
        }, {
          headerName: 'Name',
          field: 'Name'
        }, {
          headerName: 'ShortName',
          field: 'ShortName'
        }, {
          headerName: 'FullName',
          field: 'FullName'
        }, {
          headerName: 'PositionType',
          field: 'PositionType'
        }, {
          headerName: 'HedgingCategory',
          field: 'HedgingCategory'
        }, {
          headerName: 'BusinessUnit',
          field: 'BusinessUnit'
        }, {
          headerName: 'GenBookClassn',
          field: 'GenBookClassn'
        }, {
          headerName: 'AccountClass',
          field: 'AccountClass'
        }, {
          headerName: 'BookingUnit',
          field: 'BookingUnit'
        }, {
          headerName: 'RapideReference',
          field: 'RapideReference'
        }, {
          headerName: 'FidessaCPTYRef',
          field: 'FidessaCPTYRef'
        }, {
          headerName: 'CustodyRef',
          field: 'CustodyRef'
        }, {
          headerName: 'CumulusCode',
          field: 'CumulusCode'
        }, {
          headerName: 'GenBookExtRef',
          field: 'GenBookExtRef'
        }, {
          headerName: 'TradingDesk',
          field: 'TradingDesk'
        }, {
          headerName: 'BloombergReference',
          field: 'BloombergReference'
        }, {
          headerName: 'ADPBookAccountNo',
          field: 'ADPBookAccountNo'
        }, {
          headerName: 'ADPOSPBrokerID',
          field: 'ADPOSPBrokerID'
        }, {
          headerName: 'TRAXEntity',
          field: 'TRAXEntity'
        }, {
          headerName: 'SegregationParty',
          field: 'SegregationParty'
        }, {
          headerName: 'ParentBook',
          field: 'ParentBook'
        }, {
          headerName: 'ParentBookAgency',
          field: 'ParentBookAgency'
        }, {
          headerName: 'IntroducingBroker',
          field: 'IntroducingBroker'
        }, {
          headerName: 'CompanyPartyType',
          field: 'CompanyPartyType'
        }, {
          headerName: 'ADRTurnBook',
          field: 'ADRTurnBook'
        }, {
          headerName: 'GenBookFlag',
          field: 'GenBookFlag'
        }, {
          headerName: 'HedgeRelFlag',
          field: 'HedgeRelFlag'
        }, {
          headerName: 'MarktoMkt',
          field: 'MarktoMkt'
        }, {
          headerName: 'ExcludeOasys',
          field: 'ExcludeOasys'
        }, {
          headerName: 'ProgramBookPAID',
          field: 'ProgramBookPAID'
        }, {
          headerName: 'PAIDPrinOnMkt',
          field: 'PAIDPrinOnMkt'
        }, {
          headerName: 'PAIDPrinOffMkt',
          field: 'PAIDPrinOffMkt'
        }, {
          headerName: 'PAIDAgenOnMkt',
          field: 'PAIDAgenOnMkt'
        }, {
          headerName: 'PAIDAgenOffMkt',
          field: 'PAIDAgenOffMkt'
        }, {
          headerName: 'PAIDPrinInvOnMkt',
          field: 'PAIDPrinInvOnMkt'
        }, {
          headerName: 'PAIDPrinInvOffMkt',
          field: 'PAIDPrinInvOffMkt'
        }, {
          headerName: 'PAIDAverage',
          field: 'PAIDAverage'
        }];
        this.rows = [];
      }

      _createClass(BookComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          console.log('Initializing ...');
          this.query = this.apollo.watchQuery({
            query: BOOKS,
            variables: {
              offset: 10 * this.page
            }
          });
          this.query.valueChanges.subscribe(function (result) {
            _this3.players = result.data && result.data.players;
          });
          this.defaultColDef = {
            flex: 1,
            minWidth: 100,
            filter: true,
            sortable: true,
            resizable: true
          };
          this.autoGroupColumnDef = {
            minWidth: 200
          };
        }
      }, {
        key: "update",
        value: function update() {
          this.query.refetch({
            offset: 10 * this.page
          });
        }
      }, {
        key: "nextPage",
        value: function nextPage() {
          this.page++;
          this.update();
        }
      }, {
        key: "prevPage",
        value: function prevPage() {
          if (this.page > 0) {
            this.page--;
          }

          this.update();
        }
      }]);

      return BookComponent;
    }();

    BookComponent.ɵfac = function BookComponent_Factory(t) {
      return new (t || BookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]));
    };

    BookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BookComponent,
      selectors: [["app-book"]],
      inputs: {
        customTitle: "customTitle"
      },
      decls: 9,
      vars: 6,
      consts: [[1, "container"], [1, "content"], [1, "hotel-view"], [1, "detail"], ["customTitle", "Book Configuration"], ["domLayout", "autoHeight", "rowSelection", "multiple", 1, "ag-theme-balham", 2, "width", "100%", "height", "100%", 3, "defaultColDef", "autoGroupColumnDef", "enableRangeSelection", "animateRows", "rowData", "columnDefs"]],
      template: function BookComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-static-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-gallary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-menubar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ag-grid-angular", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultColDef", ctx.defaultColDef)("autoGroupColumnDef", ctx.autoGroupColumnDef)("enableRangeSelection", true)("animateRows", true)("rowData", ctx.rows)("columnDefs", ctx.cols);
        }
      },
      directives: [_shell_static_sidebar_static_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["StaticSidebarComponent"], _shell_gallery_gallary_component__WEBPACK_IMPORTED_MODULE_4__["GallaryComponent"], _menubar_menubar_component__WEBPACK_IMPORTED_MODULE_5__["MenubarComponent"], _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_6__["AgGridAngular"]],
      styles: [".toolbar-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  height: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21zdC9Qcm9qZWN0cy9ncmFwaHFsL2dsb3NzQXBpQ2xpZW50cy9zcmMvYXBwL3N0YXRpYy9ib29rL2Jvb2suY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0YXRpYy9ib29rL2Jvb2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc3RhdGljL2Jvb2svYm9vay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBoZWlnaHQ6IDVyZW07XG59XG4iLCIudG9vbGJhci1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgaGVpZ2h0OiA1cmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-book',
          templateUrl: './book.component.html',
          styleUrls: ['./book.component.scss']
        }]
      }], function () {
        return [{
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]
        }];
      }, {
        customTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/static/charges.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/static/charges.component.ts ***!
    \*********************************************/

  /*! exports provided: ChargesComponent */

  /***/
  function srcAppStaticChargesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChargesComponent", function () {
      return ChargesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var _menubar_menubar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../menubar/menubar.component */
    "./src/app/menubar/menubar.component.ts");
    /* harmony import */


    var _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../grid/grid.component */
    "./src/app/grid/grid.component.ts");

    var instr = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a(_templateObject3());

    var ChargesComponent = /*#__PURE__*/function () {
      function ChargesComponent(apollo) {
        _classCallCheck(this, ChargesComponent);

        this.apollo = apollo;
        this.title = 'Charges';
        this.page = 1;
        this.rows = [];
        this.cols = [{
          headerName: 'Party Ref',
          field: 'party_ref'
        }, {
          headerName: 'Instrument Type',
          field: 'instr_type'
        }, {
          headerName: 'Reference Type',
          field: 'instr_ref_type'
        }, {
          headerName: 'Reference',
          field: 'instr_ref'
        }, {
          headerName: 'User Defined',
          field: 'user_def'
        }, {
          headerName: 'Description',
          field: 'description'
        }];
      }

      _createClass(ChargesComponent, [{
        key: "extractValues",
        value: function extractValues(mappings) {
          return Object.keys(mappings);
        }
      }, {
        key: "lookupValue",
        value: function lookupValue(mappings, key) {
          return mappings[key];
        }
      }, {
        key: "lookupKey",
        value: function lookupKey(_ref) {
          var mappings = _ref.mappings,
              name = _ref.name;
          var keys = Object.keys(mappings); // tslint:disable-next-line: prefer-for-of

          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];

            if (mappings[key] === name) {
              return key;
            }
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.query = this.apollo.watchQuery({
            query: instr,
            variables: {
              offset: 10 * this.page
            },
            errorPolicy: 'all'
          });
          this.query.valueChanges.subscribe(function (result) {
            _this4.rows = result.data && result.data.party_instr;
          });
        }
      }, {
        key: "update",
        value: function update() {
          console.log('Update static page ....');
          this.query.refetch({
            offset: 10 * this.page
          });
        }
      }, {
        key: "nextPage",
        value: function nextPage() {
          this.page++;
          this.update();
        }
      }, {
        key: "prevPage",
        value: function prevPage() {
          if (this.page > 0) {
            this.page--;
          }

          this.update();
        }
      }, {
        key: "onAdd",
        value: function onAdd() {
          console.log('Did add');
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          console.log('Did delete');
        }
      }, {
        key: "onRefresh",
        value: function onRefresh() {
          console.log('Did refresh');
          this.update();
        }
      }, {
        key: "onSave",
        value: function onSave() {
          console.log('Did save');
        }
      }]);

      return ChargesComponent;
    }();

    ChargesComponent.ɵfac = function ChargesComponent_Factory(t) {
      return new (t || ChargesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]));
    };

    ChargesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChargesComponent,
      selectors: [["Charges"]],
      decls: 2,
      vars: 3,
      consts: [[3, "customTitle", "notifyParentSave", "notifyParentRefresh", "notifyParentDelete"], [3, "cols", "rows"]],
      template: function ChargesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-menubar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("notifyParentSave", function ChargesComponent_Template_app_menubar_notifyParentSave_0_listener() {
            return ctx.onSave();
          })("notifyParentRefresh", function ChargesComponent_Template_app_menubar_notifyParentRefresh_0_listener() {
            return ctx.onRefresh();
          })("notifyParentDelete", function ChargesComponent_Template_app_menubar_notifyParentDelete_0_listener() {
            return ctx.onDelete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "grid", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("customTitle", ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.cols)("rows", ctx.rows);
        }
      },
      directives: [_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_3__["MenubarComponent"], _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"]],
      styles: [".toolbar-spacer[_ngcontent-%COMP%] {   flex: 1 1 auto;}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChargesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          // tslint:disable-next-line: component-selector
          selector: 'Charges',
          template: "\n    <app-menubar\n      (notifyParentSave)=\"onSave()\"\n      (notifyParentRefresh)=\"onRefresh()\"\n      (notifyParentDelete)=\"onDelete()\"\n      customTitle={{title}}>\n    </app-menubar>\n    <grid [cols]=\"cols\" [rows]=\"rows\"></grid>\n  ",
          styles: ['.toolbar-spacer {   flex: 1 1 auto;}']
        }]
      }], function () {
        return [{
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/static/company.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/static/company.component.ts ***!
    \*********************************************/

  /*! exports provided: CompanyComponent */

  /***/
  function srcAppStaticCompanyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyComponent", function () {
      return CompanyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var _grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../grid/grid.component */
    "./src/app/grid/grid.component.ts");

    var instr = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a(_templateObject4());

    var CompanyComponent = /*#__PURE__*/function () {
      function CompanyComponent(apollo) {
        _classCallCheck(this, CompanyComponent);

        this.apollo = apollo;
        this.title = 'Company Setup';
        this.page = 1;
        this.rows = [];
        this.cols = [{
          headerName: 'Party Ref',
          field: 'party_ref'
        }, {
          headerName: 'Instrument Type',
          field: 'instr_type'
        }, {
          headerName: 'Reference Type',
          field: 'instr_ref_type'
        }, {
          headerName: 'Reference',
          field: 'instr_ref'
        }, {
          headerName: 'User Defined',
          field: 'user_def'
        }, {
          headerName: 'Description',
          field: 'description'
        }];
      }

      _createClass(CompanyComponent, [{
        key: "extractValues",
        value: function extractValues(mappings) {
          return Object.keys(mappings);
        }
      }, {
        key: "lookupValue",
        value: function lookupValue(mappings, key) {
          return mappings[key];
        }
      }, {
        key: "lookupKey",
        value: function lookupKey(_ref2) {
          var mappings = _ref2.mappings,
              name = _ref2.name;
          var keys = Object.keys(mappings); // tslint:disable-next-line: prefer-for-of

          for (var i = 0; i < keys.length; i++) {
            // tslint:disable-next-line: prefer-const
            var key = keys[i];

            if (mappings[key] === name) {
              return key;
            }
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.query = this.apollo.watchQuery({
            query: instr,
            variables: {
              offset: 10 * this.page
            },
            errorPolicy: 'all'
          });
          this.query.valueChanges.subscribe(function (result) {
            _this5.rows = result.data && result.data.party_instr;
          });
        }
      }, {
        key: "update",
        value: function update() {
          console.log('Update static page ....');
          this.query.refetch({
            offset: 10 * this.page
          });
        }
      }, {
        key: "nextPage",
        value: function nextPage() {
          this.page++;
          this.update();
        }
      }, {
        key: "prevPage",
        value: function prevPage() {
          if (this.page > 0) {
            this.page--;
          }

          this.update();
        }
      }, {
        key: "onAdd",
        value: function onAdd() {
          console.log('Did add');
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          console.log('Did delete');
        }
      }, {
        key: "onRefresh",
        value: function onRefresh() {
          console.log('Did refresh');
          this.update();
        }
      }, {
        key: "onSave",
        value: function onSave() {
          console.log('Did save');
        }
      }]);

      return CompanyComponent;
    }();

    CompanyComponent.ɵfac = function CompanyComponent_Factory(t) {
      return new (t || CompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]));
    };

    CompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CompanyComponent,
      selectors: [["company"]],
      decls: 1,
      vars: 2,
      consts: [[3, "cols", "rows"]],
      template: function CompanyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "grid", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.cols)("rows", ctx.rows);
        }
      },
      directives: [_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"]],
      styles: [".toolbar-spacer[_ngcontent-%COMP%] {   flex: 1 1 auto;}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          // tslint:disable-next-line: component-selector
          selector: 'company',
          template: "\n    <!-- <app-menubar\n      (notifyParentSave)=\"onSave()\"\n      (notifyParentRefresh)=\"onRefresh()\"\n      (notifyParentDelete)=\"onDelete()\"\n      customTitle={{title}}>\n    </app-menubar> -->\n    <grid [cols]=\"cols\" [rows]=\"rows\"></grid>\n  ",
          styles: ['.toolbar-spacer {   flex: 1 1 auto;}']
        }]
      }], function () {
        return [{
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/static/dacc.component.ts":
  /*!******************************************!*\
    !*** ./src/app/static/dacc.component.ts ***!
    \******************************************/

  /*! exports provided: DaccComponent */

  /***/
  function srcAppStaticDaccComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DaccComponent", function () {
      return DaccComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var _menubar_menubar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../menubar/menubar.component */
    "./src/app/menubar/menubar.component.ts");
    /* harmony import */


    var _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../grid/grid.component */
    "./src/app/grid/grid.component.ts");

    var instr = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a(_templateObject5());

    var DaccComponent = /*#__PURE__*/function () {
      function DaccComponent(apollo) {
        _classCallCheck(this, DaccComponent);

        this.apollo = apollo;
        this.title = 'DACC';
        this.page = 1;
        this.rows = [];
        this.cols = [{
          headerName: 'Party Ref',
          field: 'party_ref'
        }, {
          headerName: 'Instrument Type',
          field: 'instr_type'
        }, {
          headerName: 'Reference Type',
          field: 'instr_ref_type'
        }, {
          headerName: 'Reference',
          field: 'instr_ref'
        }, {
          headerName: 'User Defined',
          field: 'user_def'
        }, {
          headerName: 'Description',
          field: 'description'
        }];
      }

      _createClass(DaccComponent, [{
        key: "extractValues",
        value: function extractValues(mappings) {
          return Object.keys(mappings);
        }
      }, {
        key: "lookupValue",
        value: function lookupValue(mappings, key) {
          return mappings[key];
        }
      }, {
        key: "lookupKey",
        value: function lookupKey(_ref3) {
          var mappings = _ref3.mappings,
              name = _ref3.name;
          var keys = Object.keys(mappings); // tslint:disable-next-line: prefer-for-of

          for (var i = 0; i < keys.length; i++) {
            // tslint:disable-next-line: prefer-const
            var key = keys[i];

            if (mappings[key] === name) {
              return key;
            }
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.query = this.apollo.watchQuery({
            query: instr,
            variables: {
              offset: 10 * this.page
            },
            errorPolicy: 'all'
          });
          this.query.valueChanges.subscribe(function (result) {
            _this6.rows = result.data && result.data.party_instr;
          });
        }
      }, {
        key: "update",
        value: function update() {
          console.log('Update static page ....');
          this.query.refetch({
            offset: 10 * this.page
          });
        }
      }, {
        key: "nextPage",
        value: function nextPage() {
          this.page++;
          this.update();
        }
      }, {
        key: "prevPage",
        value: function prevPage() {
          if (this.page > 0) {
            this.page--;
          }

          this.update();
        }
      }, {
        key: "onAdd",
        value: function onAdd() {
          console.log('Did add');
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          console.log('Did delete');
        }
      }, {
        key: "onRefresh",
        value: function onRefresh() {
          console.log('Did refresh');
          this.update();
        }
      }, {
        key: "onSave",
        value: function onSave() {
          console.log('Did save');
        }
      }]);

      return DaccComponent;
    }();

    DaccComponent.ɵfac = function DaccComponent_Factory(t) {
      return new (t || DaccComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]));
    };

    DaccComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DaccComponent,
      selectors: [["dacc"]],
      decls: 2,
      vars: 3,
      consts: [[3, "customTitle", "notifyParentSave", "notifyParentRefresh", "notifyParentDelete"], [3, "cols", "rows"]],
      template: function DaccComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-menubar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("notifyParentSave", function DaccComponent_Template_app_menubar_notifyParentSave_0_listener() {
            return ctx.onSave();
          })("notifyParentRefresh", function DaccComponent_Template_app_menubar_notifyParentRefresh_0_listener() {
            return ctx.onRefresh();
          })("notifyParentDelete", function DaccComponent_Template_app_menubar_notifyParentDelete_0_listener() {
            return ctx.onDelete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "grid", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("customTitle", ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.cols)("rows", ctx.rows);
        }
      },
      directives: [_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_3__["MenubarComponent"], _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"]],
      styles: [".toolbar-spacer[_ngcontent-%COMP%] {   flex: 1 1 auto;}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DaccComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          // tslint:disable-next-line: component-selector
          selector: 'dacc',
          template: "\n    <app-menubar\n      (notifyParentSave)=\"onSave()\"\n      (notifyParentRefresh)=\"onRefresh()\"\n      (notifyParentDelete)=\"onDelete()\"\n      customTitle={{title}}>\n    </app-menubar>\n    <grid [cols]=\"cols\" [rows]=\"rows\"></grid>\n  ",
          styles: ['.toolbar-spacer {   flex: 1 1 auto;}']
        }]
      }], function () {
        return [{
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/static/depo-nostro/depo-nostro.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/static/depo-nostro/depo-nostro.component.ts ***!
    \*************************************************************/

  /*! exports provided: DepoNostroComponent */

  /***/
  function srcAppStaticDepoNostroDepoNostroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DepoNostroComponent", function () {
      return DepoNostroComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shell_static_sidebar_static_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shell/static-sidebar/static-sidebar.component */
    "./src/app/shell/static-sidebar/static-sidebar.component.ts");
    /* harmony import */


    var _shell_gallery_gallary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shell/gallery/gallary.component */
    "./src/app/shell/gallery/gallary.component.ts");

    var DepoNostroComponent = /*#__PURE__*/function () {
      function DepoNostroComponent() {
        _classCallCheck(this, DepoNostroComponent);

        this.title = "Dep Nostro component is working";
      }

      _createClass(DepoNostroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DepoNostroComponent;
    }();

    DepoNostroComponent.ɵfac = function DepoNostroComponent_Factory(t) {
      return new (t || DepoNostroComponent)();
    };

    DepoNostroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DepoNostroComponent,
      selectors: [["app-depo-nostro"]],
      decls: 9,
      vars: 1,
      consts: [[1, "container"], [1, "content"], [1, "hotel-view"], [1, "detail"]],
      template: function DepoNostroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-static-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-gallary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.title, " is working");
        }
      },
      directives: [_shell_static_sidebar_static_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["StaticSidebarComponent"], _shell_gallery_gallary_component__WEBPACK_IMPORTED_MODULE_2__["GallaryComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpYy9kZXBvLW5vc3Ryby9kZXBvLW5vc3Ryby5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepoNostroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-depo-nostro',
          templateUrl: './depo-nostro.component.html',
          styleUrls: ['./depo-nostro.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/static/instr-list.component.ts":
  /*!************************************************!*\
    !*** ./src/app/static/instr-list.component.ts ***!
    \************************************************/

  /*! exports provided: InstrListComponent */

  /***/
  function srcAppStaticInstrListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstrListComponent", function () {
      return InstrListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var _grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../grid/grid.component */
    "./src/app/grid/grid.component.ts");

    var instr = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a(_templateObject6());

    var InstrListComponent = /*#__PURE__*/function () {
      function InstrListComponent(apollo) {
        _classCallCheck(this, InstrListComponent);

        this.apollo = apollo;
        this.title = 'Instruments';
        this.page = 1;
        this.rows = [];
        this.cols = [{
          headerName: 'Party Ref',
          field: 'party_ref'
        }, {
          headerName: 'Instrument Type',
          field: 'instr_type'
        }, {
          headerName: 'Reference Type',
          field: 'instr_ref_type'
        }, {
          headerName: 'Reference',
          field: 'instr_ref'
        }, {
          headerName: 'User Defined',
          field: 'user_def'
        }, {
          headerName: 'Description',
          field: 'description'
        }];
      }

      _createClass(InstrListComponent, [{
        key: "extractValues",
        value: function extractValues(mappings) {
          return Object.keys(mappings);
        }
      }, {
        key: "lookupValue",
        value: function lookupValue(mappings, key) {
          return mappings[key];
        }
      }, {
        key: "lookupKey",
        value: function lookupKey(_ref4) {
          var mappings = _ref4.mappings,
              name = _ref4.name;
          var keys = Object.keys(mappings); // tslint:disable-next-line: prefer-for-of

          for (var i = 0; i < keys.length; i++) {
            // tslint:disable-next-line: prefer-const
            var key = keys[i];

            if (mappings[key] === name) {
              return key;
            }
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.query = this.apollo.watchQuery({
            query: instr,
            variables: {
              offset: 10 * this.page
            },
            errorPolicy: 'all'
          });
          this.query.valueChanges.subscribe(function (result) {
            _this7.rows = result.data && result.data.party_instr;
          });
        }
      }, {
        key: "getCompanyName",
        value: function getCompanyName(companyName) {
          var _this8 = this;

          this.company = this.apollo.watchQuery({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a(_templateObject7()),
            variables: {
              offset: 10 * this.page
            },
            errorPolicy: 'all'
          });
          this.company.valueChanges.subscribe(function (result) {
            _this8.rows = result.data && result.data.party_instr;
          });
        }
      }, {
        key: "update",
        value: function update() {
          console.log('Update static page ....');
          this.query.refetch({
            offset: 10 * this.page
          });
        }
      }, {
        key: "nextPage",
        value: function nextPage() {
          this.page++;
          this.update();
        }
      }, {
        key: "prevPage",
        value: function prevPage() {
          if (this.page > 0) {
            this.page--;
          }

          this.update();
        }
      }, {
        key: "onAdd",
        value: function onAdd() {
          console.log('Did add');
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          console.log('Did delete');
        }
      }, {
        key: "onRefresh",
        value: function onRefresh() {
          console.log('Did refresh');
          this.update();
        }
      }, {
        key: "onSave",
        value: function onSave() {
          console.log('Did save');
        }
      }]);

      return InstrListComponent;
    }();

    InstrListComponent.ɵfac = function InstrListComponent_Factory(t) {
      return new (t || InstrListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]));
    };

    InstrListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InstrListComponent,
      selectors: [["instrument-list"]],
      decls: 1,
      vars: 2,
      consts: [[3, "cols", "rows"]],
      template: function InstrListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "grid", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.cols)("rows", ctx.rows);
        }
      },
      directives: [_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"]],
      styles: [".toolbar-spacer[_ngcontent-%COMP%] {   flex: 1 1 auto;}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstrListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          // tslint:disable-next-line: component-selector
          selector: 'instrument-list',
          template: "\n  <grid [cols]=\"cols\" [rows]=\"rows\"></grid>\n",
          styles: ['.toolbar-spacer {   flex: 1 1 auto;}']
        }]
      }], function () {
        return [{
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/static/instruments.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/static/instruments.component.ts ***!
    \*************************************************/

  /*! exports provided: InstrumentsComponent */

  /***/
  function srcAppStaticInstrumentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstrumentsComponent", function () {
      return InstrumentsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var _menubar_menubar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../menubar/menubar.component */
    "./src/app/menubar/menubar.component.ts");
    /* harmony import */


    var _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../grid/grid.component */
    "./src/app/grid/grid.component.ts");

    var instr = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a(_templateObject8());

    var InstrumentsComponent = /*#__PURE__*/function () {
      function InstrumentsComponent(apollo) {
        _classCallCheck(this, InstrumentsComponent);

        this.apollo = apollo;
        this.title = 'Instruments';
        this.page = 1;
        this.rows = [];
        this.cols = [{
          headerName: 'Party Ref',
          field: 'party_ref'
        }, {
          headerName: 'Instrument Type',
          field: 'instr_type'
        }, {
          headerName: 'Reference Type',
          field: 'instr_ref_type'
        }, {
          headerName: 'Reference',
          field: 'instr_ref'
        }, {
          headerName: 'User Defined',
          field: 'user_def'
        }, {
          headerName: 'Description',
          field: 'description'
        }];
      }

      _createClass(InstrumentsComponent, [{
        key: "extractValues",
        value: function extractValues(mappings) {
          return Object.keys(mappings);
        }
      }, {
        key: "lookupValue",
        value: function lookupValue(mappings, key) {
          return mappings[key];
        }
      }, {
        key: "lookupKey",
        value: function lookupKey(_ref5) {
          var mappings = _ref5.mappings,
              name = _ref5.name;
          var keys = Object.keys(mappings); // tslint:disable-next-line: prefer-for-of

          for (var i = 0; i < keys.length; i++) {
            // tslint:disable-next-line: prefer-const
            var key = keys[i];

            if (mappings[key] === name) {
              return key;
            }
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.query = this.apollo.watchQuery({
            query: instr,
            variables: {
              offset: 10 * this.page
            },
            errorPolicy: 'all'
          });
          this.query.valueChanges.subscribe(function (result) {
            _this9.rows = result.data && result.data.party_instr;
          });
        }
      }, {
        key: "update",
        value: function update() {
          console.log('Update static page ....');
          this.query.refetch({
            offset: 10 * this.page
          });
        }
      }, {
        key: "nextPage",
        value: function nextPage() {
          this.page++;
          this.update();
        }
      }, {
        key: "prevPage",
        value: function prevPage() {
          if (this.page > 0) {
            this.page--;
          }

          this.update();
        }
      }, {
        key: "onAdd",
        value: function onAdd() {
          console.log('Did add');
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          console.log('Did delete');
        }
      }, {
        key: "onRefresh",
        value: function onRefresh() {
          console.log('Did refresh');
          this.update();
        }
      }, {
        key: "onSave",
        value: function onSave() {
          console.log('Did save');
        }
      }]);

      return InstrumentsComponent;
    }();

    InstrumentsComponent.ɵfac = function InstrumentsComponent_Factory(t) {
      return new (t || InstrumentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]));
    };

    InstrumentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InstrumentsComponent,
      selectors: [["instruments"]],
      decls: 2,
      vars: 3,
      consts: [[3, "customTitle", "notifyParentSave", "notifyParentRefresh", "notifyParentDelete"], [3, "cols", "rows"]],
      template: function InstrumentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-menubar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("notifyParentSave", function InstrumentsComponent_Template_app_menubar_notifyParentSave_0_listener() {
            return ctx.onSave();
          })("notifyParentRefresh", function InstrumentsComponent_Template_app_menubar_notifyParentRefresh_0_listener() {
            return ctx.onRefresh();
          })("notifyParentDelete", function InstrumentsComponent_Template_app_menubar_notifyParentDelete_0_listener() {
            return ctx.onDelete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "grid", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("customTitle", ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.cols)("rows", ctx.rows);
        }
      },
      directives: [_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_3__["MenubarComponent"], _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"]],
      styles: [".toolbar-spacer[_ngcontent-%COMP%] {   flex: 1 1 auto;}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstrumentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          // tslint:disable-next-line: component-selector
          selector: 'instruments',
          template: "\n    <app-menubar\n      (notifyParentSave)=\"onSave()\"\n      (notifyParentRefresh)=\"onRefresh()\"\n      (notifyParentDelete)=\"onDelete()\"\n      customTitle={{title}}>\n    </app-menubar>\n    <grid [cols]=\"cols\" [rows]=\"rows\"></grid>\n  ",
          styles: ['.toolbar-spacer {   flex: 1 1 auto;}']
        }]
      }], function () {
        return [{
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/static/intro/intro.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/static/intro/intro.component.ts ***!
    \*************************************************/

  /*! exports provided: IntroComponent */

  /***/
  function srcAppStaticIntroIntroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroComponent", function () {
      return IntroComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _client_update_client_update_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../client-update/client-update.component */
    "./src/app/client-update/client-update.component.ts");

    var IntroComponent = /*#__PURE__*/function () {
      function IntroComponent() {
        _classCallCheck(this, IntroComponent);
      }

      _createClass(IntroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IntroComponent;
    }();

    IntroComponent.ɵfac = function IntroComponent_Factory(t) {
      return new (t || IntroComponent)();
    };

    IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IntroComponent,
      selectors: [["app-intro"]],
      decls: 17,
      vars: 0,
      consts: [[1, "gallery"], [1, "gallery__item"], ["src", "../assets/image002.png", "alt", "Gloss Image", 1, "gallery__photo"]],
      template: function IntroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "GLOSS In A Box");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "figure", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "General Outline of the application");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "GraphGL Query Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Queries to the Database");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Edits and Updates");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "GraphQL Playground");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "client");
        }
      },
      directives: [_client_update_client_update_component__WEBPACK_IMPORTED_MODULE_1__["ClientUpdateComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpYy9pbnRyby9pbnRyby5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-intro',
          templateUrl: './intro.component.html',
          styleUrls: ['./intro.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/static/ssip/ssip.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/static/ssip/ssip.component.ts ***!
    \***********************************************/

  /*! exports provided: SsipComponent */

  /***/
  function srcAppStaticSsipSsipComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SsipComponent", function () {
      return SsipComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var _menubar_menubar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../menubar/menubar.component */
    "./src/app/menubar/menubar.component.ts");
    /* harmony import */


    var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ag-grid-community/angular */
    "./node_modules/@ag-grid-community/angular/__ivy_ngcc__/fesm2015/ag-grid-community-angular.js");

    var PLAYERS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a(_templateObject9());

    var SsipComponent = /*#__PURE__*/function () {
      function SsipComponent(apollo) {
        _classCallCheck(this, SsipComponent);

        this.apollo = apollo;
        this.title = 'SSI Component';
        this.page = 0;
        this.players = [];
        this.col = [{
          headerName: 'Host Reference',
          field: 'Host Reference'
        }, {
          headerName: 'ID',
          field: 'ID'
        }, {
          headerName: 'PartyReferenceType',
          field: 'PartyReferenceType'
        }, {
          headerName: 'PartyReferenceValue',
          field: 'PartyReferenceValue'
        }, {
          headerName: 'Depo Alias',
          field: 'Depo Alias'
        }, {
          headerName: 'Description',
          field: 'Description'
        }, {
          headerName: 'Type',
          field: 'Type'
        }, {
          headerName: 'CommServiceType',
          field: 'CommServiceType'
        }, {
          headerName: 'CommServiceValue',
          field: 'CommServiceValue'
        }, {
          headerName: 'AccountNumber',
          field: 'AccountNumber'
        }, {
          headerName: 'LocationType',
          field: 'LocationType'
        }, {
          headerName: 'LocationValue',
          field: 'LocationValue'
        }, {
          headerName: 'Inactive',
          field: 'Inactive'
        }, {
          headerName: 'Verify',
          field: 'Verify'
        }, {
          headerName: 'DepotAccountType',
          field: 'DepotAccountType'
        }, {
          headerName: 'DepotAccountValue',
          field: 'DepotAccountValue'
        }, {
          headerName: 'CorrepondentAlias',
          field: 'CorrepondentAlias'
        }, {
          headerName: 'AccountName',
          field: 'AccountName'
        }, {
          headerName: 'CorrepondentAccountName',
          field: 'CorrepondentAccountName'
        }, {
          headerName: 'CorrepondentAccountDepoAlias',
          field: 'CorrepondentAccountDepoAlias'
        }, {
          headerName: 'CorrepondentAccountDescription',
          field: 'CorrepondentAccountDescription'
        }, {
          headerName: 'CorrepondentAccountType',
          field: 'CorrepondentAccountType'
        }, {
          headerName: 'CorrepondentAccountCommServiceType',
          field: 'CorrepondentAccountCommServiceType'
        }, {
          headerName: 'CorrepondentAccountCommServiceValue',
          field: 'CorrepondentAccountCommServiceValue'
        }, {
          headerName: 'CorrepondentAccountAccountNumber',
          field: 'CorrepondentAccountAccountNumber'
        }, {
          headerName: 'CorrepondentAccountLocationType',
          field: 'CorrepondentAccountLocationType'
        }, {
          headerName: 'CorrepondentAccountLocationValue',
          field: 'CorrepondentAccountLocationValue'
        }, {
          headerName: 'CorrepondentAccountInactive',
          field: 'CorrepondentAccountInactive'
        }, {
          headerName: 'CorrepondentAccountVerify',
          field: 'CorrepondentAccountVerify'
        }, {
          headerName: 'CorrepondentAccountDepotAccountType',
          field: 'CorrepondentAccountDepotAccountType'
        }, {
          headerName: 'CorrepondentAccountDepotAccountValue',
          field: 'CorrepondentAccountDepotAccountValue'
        }, {
          headerName: 'CorrepondentAccountNarrative1',
          field: 'CorrepondentAccountNarrative1'
        }, {
          headerName: 'CorrepondentAccountNarrative2',
          field: 'CorrepondentAccountNarrative2'
        }, {
          headerName: 'CorrepondentAccountNarrative3',
          field: 'CorrepondentAccountNarrative3'
        }, {
          headerName: 'CorrepondentAccountNarrative4',
          field: 'CorrepondentAccountNarrative4'
        }, {
          headerName: 'CorrepondentAccountNarrative5',
          field: 'CorrepondentAccountNarrative5'
        }, {
          headerName: 'CorrepondentAccountEffectiveDateFrom',
          field: 'CorrepondentAccountEffectiveDateFrom'
        }, {
          headerName: 'CorrepondentAccountEffectiveDateTo',
          field: 'CorrepondentAccountEffectiveDateTo'
        }, {
          headerName: 'CorrepondentAccountCorrepondentAlias1',
          field: 'CorrepondentAccountCorrepondentAlias1'
        }, {
          headerName: 'CorrespondentChainAlias1',
          field: 'CorrespondentChainAlias1'
        }, {
          headerName: 'ParentSSI1',
          field: 'ParentSSI1'
        }, {
          headerName: 'CorrepondentAccountAccountName',
          field: 'CorrepondentAccountAccountName'
        }, {
          headerName: 'CorrepondentInactive',
          field: 'CorrepondentInactive'
        }, {
          headerName: 'CorrespondentVerify',
          field: 'CorrespondentVerify'
        }];
        this.rows = [{
          HostReference: 'JDCC',
          ID: 'JDCC',
          PartyReferenceType: 'INT',
          PartyReferenceValue: 'JDCC',
          'Depo Alias': 'JASD00',
          Description: 'JASD00',
          Type: 'Depot',
          CommServiceType: 'INT',
          CommServiceValue: 'JASDEC',
          AccountNumber: '1957000',
          LocationType: 'INT',
          LocationValue: 'JDCCJPJ1',
          Inactive: 'FALSE',
          Verify: 'FALSE',
          DepotAccountType: 'JASD00',
          DepotAccountValue: '',
          CorrepondentAlias: '',
          AccountName: '',
          CorrepondentAccountName: '',
          CorrepondentAccountDepoAlias: '',
          CorrepondentAccountDescription: '',
          CorrepondentAccountType: '',
          CorrepondentAccountCommServiceType: '',
          CorrepondentAccountCommServiceValue: '',
          CorrepondentAccountAccountNumber: '',
          CorrepondentAccountLocationType: '',
          CorrepondentAccountLocationValue: '',
          CorrepondentAccountInactive: '',
          CorrepondentAccountVerify: '',
          CorrepondentAccountDepotAccountType: '',
          CorrepondentAccountDepotAccountValue: '',
          CorrepondentAccountNarrative1: '',
          CorrepondentAccountNarrative2: '',
          CorrepondentAccountNarrative3: '',
          CorrepondentAccountNarrative4: '',
          CorrepondentAccountNarrative5: '',
          CorrepondentAccountEffectiveDateFrom: '',
          CorrepondentAccountEffectiveDateTo: '',
          CorrepondentAccountCorrepondentAlias1: '',
          CorrespondentChainAlias1: '',
          ParentSSI1: '',
          CorrepondentAccountAccountName: '',
          CorrepondentInactive: '',
          CorrespondentVerify: ''
        }, {
          HostReference: 'JDCC',
          ID: 'JDCC',
          PartyReferenceType: 'INT',
          PartyReferenceValue: 'JDCC',
          'Depo Alias': 'JASD40',
          Description: 'JASD40',
          Type: 'Depot',
          CommServiceType: 'INT',
          CommServiceValue: 'JASDEC',
          AccountNumber: '1957040',
          LocationType: 'INT',
          LocationValue: 'JDCCJPJ1',
          Inactive: 'FALSE',
          Verify: 'FALSE',
          DepotAccountType: 'JASD40',
          DepotAccountValue: '',
          CorrepondentAlias: '',
          AccountName: '',
          CorrepondentAccountName: '',
          CorrepondentAccountDepoAlias: '',
          CorrepondentAccountDescription: '',
          CorrepondentAccountType: '',
          CorrepondentAccountCommServiceType: '',
          CorrepondentAccountCommServiceValue: '',
          CorrepondentAccountAccountNumber: '',
          CorrepondentAccountLocationType: '',
          CorrepondentAccountLocationValue: '',
          CorrepondentAccountInactive: '',
          CorrepondentAccountVerify: '',
          CorrepondentAccountDepotAccountType: '',
          CorrepondentAccountDepotAccountValue: '',
          CorrepondentAccountNarrative1: '',
          CorrepondentAccountNarrative2: '',
          CorrepondentAccountNarrative3: '',
          CorrepondentAccountNarrative4: '',
          CorrepondentAccountNarrative5: '',
          CorrepondentAccountEffectiveDateFrom: '',
          CorrepondentAccountEffectiveDateTo: '',
          CorrepondentAccountCorrepondentAlias1: '',
          CorrespondentChainAlias1: '',
          ParentSSI1: '',
          CorrepondentAccountAccountName: '',
          CorrepondentInactive: '',
          CorrespondentVerify: ''
        }, {
          'Host Reference': 'JDCC',
          ID: 'JDCC',
          PartyReferenceType: 'INT',
          PartyReferenceValue: 'JDCC',
          'Depo Alias': 'JASD49',
          Description: 'JASD49',
          Type: 'Depot',
          CommServiceType: 'INT',
          CommServiceValue: 'JASDEC',
          AccountNumber: '1957049',
          LocationType: 'INT',
          LocationValue: 'JDCCJPJ1',
          Inactive: 'FALSE',
          Verify: 'FALSE',
          DepotAccountType: 'JASD49',
          DepotAccountValue: '',
          CorrepondentAlias: '',
          AccountName: '',
          CorrepondentAccountName: '',
          CorrepondentAccountDepoAlias: '',
          CorrepondentAccountDescription: '',
          CorrepondentAccountType: '',
          CorrepondentAccountCommServiceType: '',
          CorrepondentAccountCommServiceValue: '',
          CorrepondentAccountAccountNumber: '',
          CorrepondentAccountLocationType: '',
          CorrepondentAccountLocationValue: '',
          CorrepondentAccountInactive: '',
          CorrepondentAccountVerify: '',
          CorrepondentAccountDepotAccountType: '',
          CorrepondentAccountDepotAccountValue: '',
          CorrepondentAccountNarrative1: '',
          CorrepondentAccountNarrative2: '',
          CorrepondentAccountNarrative3: '',
          CorrepondentAccountNarrative4: '',
          CorrepondentAccountNarrative5: '',
          CorrepondentAccountEffectiveDateFrom: '',
          CorrepondentAccountEffectiveDateTo: '',
          CorrepondentAccountCorrepondentAlias1: '',
          CorrespondentChainAlias1: '',
          ParentSSI1: '',
          CorrepondentAccountAccountName: '',
          CorrepondentInactive: '',
          CorrespondentVerify: ''
        }, {
          'Host Reference': 'JDCC',
          ID: 'JDCC',
          PartyReferenceType: 'INT',
          PartyReferenceValue: 'JDCC',
          'Depo Alias': 'JASD98',
          Description: 'JASD98',
          Type: 'Depot',
          CommServiceType: 'INT',
          CommServiceValue: 'JASDEC',
          AccountNumber: '1957098',
          LocationType: 'INT',
          LocationValue: 'JDCCJPJ1',
          Inactive: 'FALSE',
          Verify: 'FALSE',
          DepotAccountType: 'JASD98',
          DepotAccountValue: '',
          CorrepondentAlias: '',
          AccountName: '',
          CorrepondentAccountName: '',
          CorrepondentAccountDepoAlias: '',
          CorrepondentAccountDescription: '',
          CorrepondentAccountType: '',
          CorrepondentAccountCommServiceType: '',
          CorrepondentAccountCommServiceValue: '',
          CorrepondentAccountAccountNumber: '',
          CorrepondentAccountLocationType: '',
          CorrepondentAccountLocationValue: '',
          CorrepondentAccountInactive: '',
          CorrepondentAccountVerify: '',
          CorrepondentAccountDepotAccountType: '',
          CorrepondentAccountDepotAccountValue: '',
          CorrepondentAccountNarrative1: '',
          CorrepondentAccountNarrative2: '',
          CorrepondentAccountNarrative3: '',
          CorrepondentAccountNarrative4: '',
          CorrepondentAccountNarrative5: '',
          CorrepondentAccountEffectiveDateFrom: '',
          CorrepondentAccountEffectiveDateTo: '',
          CorrepondentAccountCorrepondentAlias1: '',
          CorrespondentChainAlias1: '',
          ParentSSI1: '',
          CorrepondentAccountAccountName: '',
          CorrepondentInactive: '',
          CorrespondentVerify: ''
        }, {
          'Host Reference': 'JSCC',
          ID: 'JSCC',
          PartyReferenceType: 'INT',
          PartyReferenceValue: 'JSCC',
          'Depo Alias': 'JASD00',
          Description: 'JASD00',
          Type: 'Depot',
          CommServiceType: 'INT',
          CommServiceValue: 'JASDEC',
          AccountNumber: '1955000',
          LocationType: 'INT',
          LocationValue: 'JSCCJPJ1',
          Inactive: 'FALSE',
          Verify: 'FALSE',
          DepotAccountType: 'JASD00',
          DepotAccountValue: '',
          CorrepondentAlias: '',
          AccountName: '',
          CorrepondentAccountName: '',
          CorrepondentAccountDepoAlias: '',
          CorrepondentAccountDescription: '',
          CorrepondentAccountType: '',
          CorrepondentAccountCommServiceType: '',
          CorrepondentAccountCommServiceValue: '',
          CorrepondentAccountAccountNumber: '',
          CorrepondentAccountLocationType: '',
          CorrepondentAccountLocationValue: '',
          CorrepondentAccountInactive: '',
          CorrepondentAccountVerify: '',
          CorrepondentAccountDepotAccountType: '',
          CorrepondentAccountDepotAccountValue: '',
          CorrepondentAccountNarrative1: '',
          CorrepondentAccountNarrative2: '',
          CorrepondentAccountNarrative3: '',
          CorrepondentAccountNarrative4: '',
          CorrepondentAccountNarrative5: '',
          CorrepondentAccountEffectiveDateFrom: '',
          CorrepondentAccountEffectiveDateTo: '',
          CorrepondentAccountCorrepondentAlias1: '',
          CorrespondentChainAlias1: '',
          ParentSSI1: '',
          CorrepondentAccountAccountName: '',
          CorrepondentInactive: '',
          CorrespondentVerify: ''
        }, {
          'Host Reference': 'JSCC',
          ID: 'JSCC',
          PartyReferenceType: 'INT',
          PartyReferenceValue: 'JSCC',
          'Depo Alias': 'JGB',
          Description: 'OWN',
          Type: 'II',
          CommServiceType: 'JGB',
          CommServiceValue: 'OWN',
          AccountNumber: 'II',
          LocationType: 'Depot',
          LocationValue: 'INT',
          Inactive: 'BOJ',
          Verify: '9110002',
          DepotAccountType: 'INT',
          DepotAccountValue: 'JSCCJPJ1',
          CorrepondentAlias: 'FALSE',
          AccountName: 'FALSE',
          CorrepondentAccountName: 'JGB',
          CorrepondentAccountDepoAlias: 'OWN',
          CorrepondentAccountDescription: 'II',
          CorrepondentAccountType: '',
          CorrepondentAccountCommServiceType: '',
          CorrepondentAccountCommServiceValue: '',
          CorrepondentAccountAccountNumber: '',
          CorrepondentAccountLocationType: '',
          CorrepondentAccountLocationValue: '',
          CorrepondentAccountInactive: '',
          CorrepondentAccountVerify: '',
          CorrepondentAccountDepotAccountType: '',
          CorrepondentAccountDepotAccountValue: '',
          CorrepondentAccountNarrative1: '',
          CorrepondentAccountNarrative2: '',
          CorrepondentAccountNarrative3: '',
          CorrepondentAccountNarrative4: '',
          CorrepondentAccountNarrative5: '',
          CorrepondentAccountEffectiveDateFrom: '',
          CorrepondentAccountEffectiveDateTo: '',
          CorrepondentAccountCorrepondentAlias1: '',
          CorrespondentChainAlias1: '',
          ParentSSI1: '',
          CorrepondentAccountAccountName: '',
          CorrepondentInactive: '',
          CorrespondentVerify: ''
        }, {
          'Host Reference': 'JSCC',
          ID: 'JSCC',
          PartyReferenceType: 'INT',
          PartyReferenceValue: 'JSCC',
          'Depo Alias': 'JSCC',
          Description: 'CASH',
          Type: 'JSCC',
          CommServiceType: 'CASH',
          CommServiceValue: 'Nostro',
          AccountNumber: 'INT',
          LocationType: 'JASDEC',
          LocationValue: '909000',
          Inactive: 'INT',
          Verify: 'JSCCJPJ1',
          DepotAccountType: 'FALSE',
          DepotAccountValue: 'FALSE',
          CorrepondentAlias: 'JSCC',
          AccountName: 'CASH',
          CorrepondentAccountName: '',
          CorrepondentAccountDepoAlias: '',
          CorrepondentAccountDescription: '',
          CorrepondentAccountType: '',
          CorrepondentAccountCommServiceType: '',
          CorrepondentAccountCommServiceValue: '',
          CorrepondentAccountAccountNumber: '',
          CorrepondentAccountLocationType: '',
          CorrepondentAccountLocationValue: '',
          CorrepondentAccountInactive: '',
          CorrepondentAccountVerify: '',
          CorrepondentAccountDepotAccountType: '',
          CorrepondentAccountDepotAccountValue: '',
          CorrepondentAccountNarrative1: '',
          CorrepondentAccountNarrative2: '',
          CorrepondentAccountNarrative3: '',
          CorrepondentAccountNarrative4: '',
          CorrepondentAccountNarrative5: '',
          CorrepondentAccountEffectiveDateFrom: '',
          CorrepondentAccountEffectiveDateTo: '',
          CorrepondentAccountCorrepondentAlias1: '',
          CorrespondentChainAlias1: '',
          ParentSSI1: '',
          CorrepondentAccountAccountName: '',
          CorrepondentInactive: '',
          CorrespondentVerify: ''
        }, {
          'Host Reference': 'JSCCFOOWN',
          ID: 'JSCCFOOWN',
          PartyReferenceType: 'INT',
          PartyReferenceValue: 'JSCCFOOWN',
          'Depo Alias': 'FUTR',
          Description: 'CASH',
          Type: 'FUTR',
          CommServiceType: 'CASH',
          CommServiceValue: 'Both',
          AccountNumber: 'INT',
          LocationType: 'BOJ',
          LocationValue: '909000',
          Inactive: 'INT',
          Verify: 'JSCCJPJ1',
          DepotAccountType: 'FALSE',
          DepotAccountValue: 'FALSE',
          CorrepondentAlias: 'FUTR',
          AccountName: 'CASH',
          CorrepondentAccountName: '',
          CorrepondentAccountDepoAlias: '',
          CorrepondentAccountDescription: '',
          CorrepondentAccountType: '',
          CorrepondentAccountCommServiceType: '',
          CorrepondentAccountCommServiceValue: '',
          CorrepondentAccountAccountNumber: '',
          CorrepondentAccountLocationType: '',
          CorrepondentAccountLocationValue: '',
          CorrepondentAccountInactive: '',
          CorrepondentAccountVerify: '',
          CorrepondentAccountDepotAccountType: '',
          CorrepondentAccountDepotAccountValue: '',
          CorrepondentAccountNarrative1: '',
          CorrepondentAccountNarrative2: '',
          CorrepondentAccountNarrative3: '',
          CorrepondentAccountNarrative4: '',
          CorrepondentAccountNarrative5: '',
          CorrepondentAccountEffectiveDateFrom: '',
          CorrepondentAccountEffectiveDateTo: '',
          CorrepondentAccountCorrepondentAlias1: '',
          CorrespondentChainAlias1: '',
          ParentSSI1: '',
          CorrepondentAccountAccountName: '',
          CorrepondentInactive: '',
          CorrespondentVerify: ''
        }, {
          'Host Reference': 'JSCCFOCLNT',
          ID: 'JSCCFOCLNT',
          PartyReferenceType: 'INT',
          PartyReferenceValue: 'JSCCFOCLNT',
          'Depo Alias': 'FUTR',
          Description: 'CASH',
          Type: 'FUTR',
          CommServiceType: 'CASH',
          CommServiceValue: 'Both',
          AccountNumber: 'INT',
          LocationType: 'BOJ',
          LocationValue: '909000',
          Inactive: 'INT',
          Verify: 'JSCCJPJ1',
          DepotAccountType: 'FALSE',
          DepotAccountValue: 'FALSE',
          CorrepondentAlias: 'FUTR',
          AccountName: 'CASH',
          CorrepondentAccountName: '',
          CorrepondentAccountDepoAlias: '',
          CorrepondentAccountDescription: '',
          CorrepondentAccountType: '',
          CorrepondentAccountCommServiceType: '',
          CorrepondentAccountCommServiceValue: '',
          CorrepondentAccountAccountNumber: '',
          CorrepondentAccountLocationType: '',
          CorrepondentAccountLocationValue: '',
          CorrepondentAccountInactive: '',
          CorrepondentAccountVerify: '',
          CorrepondentAccountDepotAccountType: '',
          CorrepondentAccountDepotAccountValue: '',
          CorrepondentAccountNarrative1: '',
          CorrepondentAccountNarrative2: '',
          CorrepondentAccountNarrative3: '',
          CorrepondentAccountNarrative4: '',
          CorrepondentAccountNarrative5: '',
          CorrepondentAccountEffectiveDateFrom: '',
          CorrepondentAccountEffectiveDateTo: '',
          CorrepondentAccountCorrepondentAlias1: '',
          CorrespondentChainAlias1: '',
          ParentSSI1: '',
          CorrepondentAccountAccountName: '',
          CorrepondentInactive: '',
          CorrespondentVerify: ''
        }, {
          'Host Reference': 'JSFC',
          ID: 'JSFC',
          PartyReferenceType: 'INT',
          PartyReferenceValue: 'JSFC',
          'Depo Alias': 'JASD00',
          Description: 'JASD00',
          Type: 'Depot',
          CommServiceType: 'INT',
          CommServiceValue: 'JASDEC',
          AccountNumber: '951000',
          LocationType: 'INT',
          LocationValue: 'JSFTJPJ1',
          Inactive: 'FALSE',
          Verify: 'FALSE',
          DepotAccountType: 'JASD00',
          DepotAccountValue: '',
          CorrepondentAlias: '',
          AccountName: '',
          CorrepondentAccountName: '',
          CorrepondentAccountDepoAlias: '',
          CorrepondentAccountDescription: '',
          CorrepondentAccountType: '',
          CorrepondentAccountCommServiceType: '',
          CorrepondentAccountCommServiceValue: '',
          CorrepondentAccountAccountNumber: '',
          CorrepondentAccountLocationType: '',
          CorrepondentAccountLocationValue: '',
          CorrepondentAccountInactive: '',
          CorrepondentAccountVerify: '',
          CorrepondentAccountDepotAccountType: '',
          CorrepondentAccountDepotAccountValue: '',
          CorrepondentAccountNarrative1: '',
          CorrepondentAccountNarrative2: '',
          CorrepondentAccountNarrative3: '',
          CorrepondentAccountNarrative4: '',
          CorrepondentAccountNarrative5: '',
          CorrepondentAccountEffectiveDateFrom: '',
          CorrepondentAccountEffectiveDateTo: '',
          CorrepondentAccountCorrepondentAlias1: '',
          CorrespondentChainAlias1: '',
          ParentSSI1: '',
          CorrepondentAccountAccountName: '',
          CorrepondentInactive: '',
          CorrespondentVerify: ''
        }, {
          'Host Reference': 'JSFC',
          ID: 'JSFC',
          PartyReferenceType: 'INT',
          PartyReferenceValue: 'JSFC',
          'Depo Alias': 'JASD40',
          Description: 'JASD40',
          Type: 'Depot',
          CommServiceType: 'INT',
          CommServiceValue: 'JASDEC',
          AccountNumber: '951040',
          LocationType: 'INT',
          LocationValue: 'JSFTJPJ1',
          Inactive: 'FALSE',
          Verify: 'FALSE',
          DepotAccountType: 'JASD40',
          DepotAccountValue: '',
          CorrepondentAlias: '',
          AccountName: '',
          CorrepondentAccountName: '',
          CorrepondentAccountDepoAlias: '',
          CorrepondentAccountDescription: '',
          CorrepondentAccountType: '',
          CorrepondentAccountCommServiceType: '',
          CorrepondentAccountCommServiceValue: '',
          CorrepondentAccountAccountNumber: '',
          CorrepondentAccountLocationType: '',
          CorrepondentAccountLocationValue: '',
          CorrepondentAccountInactive: '',
          CorrepondentAccountVerify: '',
          CorrepondentAccountDepotAccountType: '',
          CorrepondentAccountDepotAccountValue: '',
          CorrepondentAccountNarrative1: '',
          CorrepondentAccountNarrative2: '',
          CorrepondentAccountNarrative3: '',
          CorrepondentAccountNarrative4: '',
          CorrepondentAccountNarrative5: '',
          CorrepondentAccountEffectiveDateFrom: '',
          CorrepondentAccountEffectiveDateTo: '',
          CorrepondentAccountCorrepondentAlias1: '',
          CorrespondentChainAlias1: '',
          ParentSSI1: '',
          CorrepondentAccountAccountName: '',
          CorrepondentInactive: '',
          CorrespondentVerify: ''
        }, {
          'Host Reference': 'JSFC',
          ID: 'JSFC',
          PartyReferenceType: 'INT',
          PartyReferenceValue: 'JSFC',
          'Depo Alias': 'JASD98',
          Description: 'JASD98',
          Type: 'Depot',
          CommServiceType: 'INT',
          CommServiceValue: 'JASDEC',
          AccountNumber: '951098',
          LocationType: 'INT',
          LocationValue: 'JSFTJPJ1',
          Inactive: 'FALSE',
          Verify: 'FALSE',
          DepotAccountType: 'JASD98',
          DepotAccountValue: '',
          CorrepondentAlias: '',
          AccountName: '',
          CorrepondentAccountName: '',
          CorrepondentAccountDepoAlias: '',
          CorrepondentAccountDescription: '',
          CorrepondentAccountType: '',
          CorrepondentAccountCommServiceType: '',
          CorrepondentAccountCommServiceValue: '',
          CorrepondentAccountAccountNumber: '',
          CorrepondentAccountLocationType: '',
          CorrepondentAccountLocationValue: '',
          CorrepondentAccountInactive: '',
          CorrepondentAccountVerify: '',
          CorrepondentAccountDepotAccountType: '',
          CorrepondentAccountDepotAccountValue: '',
          CorrepondentAccountNarrative1: '',
          CorrepondentAccountNarrative2: '',
          CorrepondentAccountNarrative3: '',
          CorrepondentAccountNarrative4: '',
          CorrepondentAccountNarrative5: '',
          CorrepondentAccountEffectiveDateFrom: '',
          CorrepondentAccountEffectiveDateTo: '',
          CorrepondentAccountCorrepondentAlias1: '',
          CorrespondentChainAlias1: '',
          ParentSSI1: '',
          CorrepondentAccountAccountName: '',
          CorrepondentInactive: '',
          CorrespondentVerify: ''
        }, {
          'Host Reference': 'JSFC',
          ID: 'JSFC',
          PartyReferenceType: 'INT',
          PartyReferenceValue: 'JSFC',
          'Depo Alias': 'JPY',
          Description: 'CASH',
          Type: 'JPY',
          CommServiceType: 'CASH',
          CommServiceValue: 'Nostro',
          AccountNumber: 'INT',
          LocationType: 'JASDEC',
          LocationValue: '9510001',
          Inactive: 'INT',
          Verify: 'BOJPJPJT',
          DepotAccountType: 'FALSE',
          DepotAccountValue: 'FALSE',
          CorrepondentAlias: 'JPY',
          AccountName: 'CASH',
          CorrepondentAccountName: '',
          CorrepondentAccountDepoAlias: '',
          CorrepondentAccountDescription: '',
          CorrepondentAccountType: '',
          CorrepondentAccountCommServiceType: '',
          CorrepondentAccountCommServiceValue: '',
          CorrepondentAccountAccountNumber: '',
          CorrepondentAccountLocationType: '',
          CorrepondentAccountLocationValue: '',
          CorrepondentAccountInactive: '',
          CorrepondentAccountVerify: '',
          CorrepondentAccountDepotAccountType: '',
          CorrepondentAccountDepotAccountValue: '',
          CorrepondentAccountNarrative1: '',
          CorrepondentAccountNarrative2: '',
          CorrepondentAccountNarrative3: '',
          CorrepondentAccountNarrative4: '',
          CorrepondentAccountNarrative5: '',
          CorrepondentAccountEffectiveDateFrom: '',
          CorrepondentAccountEffectiveDateTo: '',
          CorrepondentAccountCorrepondentAlias1: '',
          CorrespondentChainAlias1: '',
          ParentSSI1: '',
          CorrepondentAccountAccountName: '',
          CorrepondentInactive: '',
          CorrespondentVerify: ''
        }, {
          'Host Reference': 'JSFC',
          ID: 'AUC',
          PartyReferenceType: 'JSFC',
          PartyReferenceValue: 'AUC',
          'Depo Alias': 'INT',
          Description: 'JSFC',
          Type: 'AUC',
          CommServiceType: 'JASD00',
          CommServiceValue: 'JASD00',
          AccountNumber: 'Depot',
          LocationType: 'INT',
          LocationValue: 'JASDEC',
          Inactive: '1955000',
          Verify: 'INT',
          DepotAccountType: 'JSCCJPJ1',
          DepotAccountValue: 'FALSE',
          CorrepondentAlias: 'FALSE',
          AccountName: 'JASD00',
          CorrepondentAccountName: '',
          CorrepondentAccountDepoAlias: '',
          CorrepondentAccountDescription: '',
          CorrepondentAccountType: '',
          CorrepondentAccountCommServiceType: '',
          CorrepondentAccountCommServiceValue: '',
          CorrepondentAccountAccountNumber: '',
          CorrepondentAccountLocationType: '',
          CorrepondentAccountLocationValue: '',
          CorrepondentAccountInactive: '',
          CorrepondentAccountVerify: '',
          CorrepondentAccountDepotAccountType: '',
          CorrepondentAccountDepotAccountValue: '',
          CorrepondentAccountNarrative1: '',
          CorrepondentAccountNarrative2: '',
          CorrepondentAccountNarrative3: '',
          CorrepondentAccountNarrative4: '',
          CorrepondentAccountNarrative5: '',
          CorrepondentAccountEffectiveDateFrom: '',
          CorrepondentAccountEffectiveDateTo: '',
          CorrepondentAccountCorrepondentAlias1: '',
          CorrespondentChainAlias1: '',
          ParentSSI1: '',
          CorrepondentAccountAccountName: '',
          CorrepondentInactive: '',
          CorrespondentVerify: ''
        }];
      }

      _createClass(SsipComponent, [{
        key: "update",
        value: function update() {
          this.query.refetch({
            offset: 10 * this.page
          });
        }
      }, {
        key: "nextPage",
        value: function nextPage() {
          this.page++;
          this.update();
        }
      }, {
        key: "prevPage",
        value: function prevPage() {
          if (this.page > 0) {
            this.page--;
          }

          this.update();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          console.log('Initializing ...');
          this.query = this.apollo.watchQuery({
            query: PLAYERS_QUERY,
            variables: {
              offset: 10 * this.page
            }
          });
          this.query.valueChanges.subscribe(function (result) {
            _this10.players = result.data && result.data.players;
          });
          this.defaultColDef = {
            flex: 1,
            minWidth: 100,
            filter: true,
            sortable: true,
            resizable: true
          };
          this.autoGroupColumnDef = {
            minWidth: 200
          };
        }
      }]);

      return SsipComponent;
    }();

    SsipComponent.ɵfac = function SsipComponent_Factory(t) {
      return new (t || SsipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]));
    };

    SsipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SsipComponent,
      selectors: [["app-ssip"]],
      decls: 2,
      vars: 6,
      consts: [["customTitle", "Settlement Instructions"], ["domLayout", "autoHeight", "rowSelection", "multiple", 1, "ag-theme-balham", 2, "width", "100%", "height", "100%", 3, "defaultColDef", "autoGroupColumnDef", "enableRangeSelection", "animateRows", "rowData", "columnDefs"]],
      template: function SsipComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menubar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ag-grid-angular", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultColDef", ctx.defaultColDef)("autoGroupColumnDef", ctx.autoGroupColumnDef)("enableRangeSelection", true)("animateRows", true)("rowData", ctx.rows)("columnDefs", ctx.col);
        }
      },
      directives: [_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_3__["MenubarComponent"], _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridAngular"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpYy9zc2lwL3NzaXAuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SsipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ssip',
          templateUrl: './ssip.component.html',
          styleUrls: ['./ssip.component.scss']
        }]
      }], function () {
        return [{
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/static/static.component.ts":
  /*!********************************************!*\
    !*** ./src/app/static/static.component.ts ***!
    \********************************************/

  /*! exports provided: StaticComponent */

  /***/
  function srcAppStaticStaticComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaticComponent", function () {
      return StaticComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var _menubar_menubar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../menubar/menubar.component */
    "./src/app/menubar/menubar.component.ts");
    /* harmony import */


    var _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../grid/grid.component */
    "./src/app/grid/grid.component.ts");

    var party = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a(_templateObject10());

    var StaticComponent = /*#__PURE__*/function () {
      function StaticComponent(apollo) {
        _classCallCheck(this, StaticComponent);

        this.apollo = apollo;
        this.title = 'Static Data Components';
        this.page = 1;
        this.rows = [];
        this.cols = [{
          headerName: 'Party Ref',
          field: 'party_ref'
        }, {
          headerName: 'Type',
          field: 'party_type'
        }, {
          headerName: 'Long Name',
          field: 'party_long_name'
        }, {
          headerName: 'Short Name',
          field: 'party_short_name'
        }, {
          headerName: 'Full Name',
          field: 'party_extra_long_name'
        }, {
          headerName: 'Version',
          field: 'version_no'
        }];
      }

      _createClass(StaticComponent, [{
        key: "onSave",
        value: function onSave() {
          console.log('onSave: Run mutation to save data ...');
        }
      }, {
        key: "onRefresh",
        value: function onRefresh() {
          console.log('onRefresh: Run query to refresh data ...');
          this.update();
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          console.log('onDelete: Run mutation to delete data ...');
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          console.log('ngOnDestroy called!');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.query = this.apollo.watchQuery({
            query: party,
            variables: {
              offset: 10 * this.page
            },
            errorPolicy: 'all'
          });
          this.query.valueChanges.subscribe(function (result) {
            _this11.rows = result.data && result.data.party;
          });
        }
      }, {
        key: "update",
        value: function update() {
          console.log('Update static page ....');
          this.query.refetch({
            offset: 10 * this.page
          });
        }
      }, {
        key: "nextPage",
        value: function nextPage() {
          this.page++;
          this.update();
        }
      }, {
        key: "prevPage",
        value: function prevPage() {
          if (this.page > 0) {
            this.page--;
          }

          this.update();
        }
      }, {
        key: "openAddDialog",
        value: function openAddDialog(addData) {
          console.log('starting open add dialog...');
          console.log(addData);
        }
      }]);

      return StaticComponent;
    }();

    StaticComponent.ɵfac = function StaticComponent_Factory(t) {
      return new (t || StaticComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]));
    };

    StaticComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StaticComponent,
      selectors: [["app-static"]],
      decls: 2,
      vars: 3,
      consts: [[3, "customTitle", "notifyParentSave", "notifyParentRefresh", "notifyParentDelete"], [3, "cols", "rows"]],
      template: function StaticComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-menubar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("notifyParentSave", function StaticComponent_Template_app_menubar_notifyParentSave_0_listener() {
            return ctx.onSave();
          })("notifyParentRefresh", function StaticComponent_Template_app_menubar_notifyParentRefresh_0_listener() {
            return ctx.onRefresh();
          })("notifyParentDelete", function StaticComponent_Template_app_menubar_notifyParentDelete_0_listener() {
            return ctx.onDelete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "grid", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("customTitle", ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.cols)("rows", ctx.rows);
        }
      },
      directives: [_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_3__["MenubarComponent"], _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"]],
      styles: [".toolbar-spacer[_ngcontent-%COMP%] { flex: 1 1 auto; }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StaticComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-static',
          template: "\n     <app-menubar\n      (notifyParentSave)=\"onSave()\"\n      (notifyParentRefresh)=\"onRefresh()\"\n      (notifyParentDelete)=\"onDelete()\"\n      customTitle={{title}}>\n     </app-menubar>\n     <grid [cols]=\"cols\" [rows]=\"rows\"></grid>\n  ",
          styles: ['.toolbar-spacer { flex: 1 1 auto; }']
        }]
      }], function () {
        return [{
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/static/taskexplorer.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/static/taskexplorer.component.ts ***!
    \**************************************************/

  /*! exports provided: TaskexplorerComponent */

  /***/
  function srcAppStaticTaskexplorerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskexplorerComponent", function () {
      return TaskexplorerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var _menubar_menubar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../menubar/menubar.component */
    "./src/app/menubar/menubar.component.ts");
    /* harmony import */


    var _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../grid/grid.component */
    "./src/app/grid/grid.component.ts");

    var instr = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a(_templateObject11());

    var TaskexplorerComponent = /*#__PURE__*/function () {
      function TaskexplorerComponent(apollo) {
        _classCallCheck(this, TaskexplorerComponent);

        this.apollo = apollo;
        this.title = 'Charges';
        this.page = 1;
        this.rows = [];
        this.cols = [{
          headerName: 'Party Ref',
          field: 'party_ref'
        }, {
          headerName: 'Instrument Type',
          field: 'instr_type'
        }, {
          headerName: 'Reference Type',
          field: 'instr_ref_type'
        }, {
          headerName: 'Reference',
          field: 'instr_ref'
        }, {
          headerName: 'User Defined',
          field: 'user_def'
        }, {
          headerName: 'Description',
          field: 'description'
        }];
      }

      _createClass(TaskexplorerComponent, [{
        key: "extractValues",
        value: function extractValues(mappings) {
          return Object.keys(mappings);
        }
      }, {
        key: "lookupValue",
        value: function lookupValue(mappings, key) {
          return mappings[key];
        }
      }, {
        key: "lookupKey",
        value: function lookupKey(_ref6) {
          var mappings = _ref6.mappings,
              name = _ref6.name;
          var keys = Object.keys(mappings); // tslint:disable-next-line: prefer-for-of

          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];

            if (mappings[key] === name) {
              return key;
            }
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.query = this.apollo.watchQuery({
            query: instr,
            variables: {
              offset: 10 * this.page
            },
            errorPolicy: 'all'
          });
          this.query.valueChanges.subscribe(function (result) {
            _this12.rows = result.data && result.data.party_instr;
          });
        }
      }, {
        key: "update",
        value: function update() {
          console.log('Update static page ....');
          this.query.refetch({
            offset: 10 * this.page
          });
        }
      }, {
        key: "nextPage",
        value: function nextPage() {
          this.page++;
          this.update();
        }
      }, {
        key: "prevPage",
        value: function prevPage() {
          if (this.page > 0) {
            this.page--;
          }

          this.update();
        }
      }, {
        key: "onAdd",
        value: function onAdd() {
          console.log('Did add');
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          console.log('Did delete');
        }
      }, {
        key: "onRefresh",
        value: function onRefresh() {
          console.log('Did refresh');
          this.update();
        }
      }, {
        key: "onSave",
        value: function onSave() {
          console.log('Did save');
        }
      }]);

      return TaskexplorerComponent;
    }();

    TaskexplorerComponent.ɵfac = function TaskexplorerComponent_Factory(t) {
      return new (t || TaskexplorerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]));
    };

    TaskexplorerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TaskexplorerComponent,
      selectors: [["Charges"]],
      decls: 2,
      vars: 3,
      consts: [[3, "customTitle", "notifyParentSave", "notifyParentRefresh", "notifyParentDelete"], [3, "cols", "rows"]],
      template: function TaskexplorerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-menubar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("notifyParentSave", function TaskexplorerComponent_Template_app_menubar_notifyParentSave_0_listener() {
            return ctx.onSave();
          })("notifyParentRefresh", function TaskexplorerComponent_Template_app_menubar_notifyParentRefresh_0_listener() {
            return ctx.onRefresh();
          })("notifyParentDelete", function TaskexplorerComponent_Template_app_menubar_notifyParentDelete_0_listener() {
            return ctx.onDelete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "grid", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("customTitle", ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.cols)("rows", ctx.rows);
        }
      },
      directives: [_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_3__["MenubarComponent"], _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"]],
      styles: [".toolbar-spacer[_ngcontent-%COMP%] {   flex: 1 1 auto;}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskexplorerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          // tslint:disable-next-line: component-selector
          selector: 'Charges',
          template: "\n      <app-menubar\n        (notifyParentSave)=\"onSave()\"\n        (notifyParentRefresh)=\"onRefresh()\"\n        (notifyParentDelete)=\"onDelete()\"\n        customTitle={{title}}>\n      </app-menubar>\n      <grid [cols]=\"cols\" [rows]=\"rows\"></grid>\n    ",
          styles: ['.toolbar-spacer {   flex: 1 1 auto;}']
        }]
      }], function () {
        return [{
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/mst/Projects/graphql/glossApiClients/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map