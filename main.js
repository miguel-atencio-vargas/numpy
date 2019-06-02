(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation col-lg-12\">\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark \">\n        <a class=\"navbar-brand\" [routerLink]=\"['/']\">ÁLGEBRA LINEAL</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item\">\n                    <a [routerLink]=\"['/operaciones']\" [routerLinkActive]=\"['active']\" class=\"nav-link\">Operaciones con dos matrices</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a [routerLink]=\"['/unimatriz']\" [routerLinkActive]=\"['active']\" class=\"nav-link\">Operaciones con una matriz</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a [routerLink]=\"['/random']\" [routerLinkActive]=\"['active']\" class=\"nav-link\">Generar Archivos Excel</a>\n                </li>\n            </ul>\n        </div>\n    </nav>\n    <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_excel_excel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/excel/excel.component */ "./src/app/components/excel/excel.component.ts");
/* harmony import */ var _components_resultado_resultado_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/resultado/resultado.component */ "./src/app/components/resultado/resultado.component.ts");
/* harmony import */ var _components_unimatriz_unimatriz_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/unimatriz/unimatriz.component */ "./src/app/components/unimatriz/unimatriz.component.ts");
/* harmony import */ var _components_input_visual_input_visual_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/input-visual/input-visual.component */ "./src/app/components/input-visual/input-visual.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_export_export_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/export/export.component */ "./src/app/components/export/export.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _components_excel_excel_component__WEBPACK_IMPORTED_MODULE_9__["ExcelComponent"],
                _components_resultado_resultado_component__WEBPACK_IMPORTED_MODULE_10__["ResultadoComponent"],
                _components_unimatriz_unimatriz_component__WEBPACK_IMPORTED_MODULE_11__["UnimatrizComponent"],
                _components_input_visual_input_visual_component__WEBPACK_IMPORTED_MODULE_12__["InputVisualComponent"],
                _components_export_export_component__WEBPACK_IMPORTED_MODULE_14__["ExportComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"]
            ],
            providers: [
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["appRoutingProviders"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingProviders, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_excel_excel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/excel/excel.component */ "./src/app/components/excel/excel.component.ts");
/* harmony import */ var _components_unimatriz_unimatriz_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/unimatriz/unimatriz.component */ "./src/app/components/unimatriz/unimatriz.component.ts");
/* harmony import */ var _components_export_export_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/export/export.component */ "./src/app/components/export/export.component.ts");





var appRoutes = [
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"] },
    { path: 'operaciones', component: _components_excel_excel_component__WEBPACK_IMPORTED_MODULE_2__["ExcelComponent"] },
    { path: 'unimatriz', component: _components_unimatriz_unimatriz_component__WEBPACK_IMPORTED_MODULE_3__["UnimatrizComponent"] },
    { path: 'random', component: _components_export_export_component__WEBPACK_IMPORTED_MODULE_4__["ExportComponent"] },
    { path: '**', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"] }
];
var appRoutingProviders = [];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"jumbotron\">\n        <h1 class=\"display-4\">Bienvenidos a Numpy y Scipy</h1>\n        <div>\n            En esta pagina usted puede realizar operaciones con sus archivos de excel. Las operaciones que puede realizar son las siguientes:\n            <ul>\n                <li *ngFor=\"let i of a\">{{i}}</li>\n            </ul>\n            <a class=\"btn btn-warning\" [routerLink]=\"['/operaciones']\" [routerLinkActive]=\"['active']\">Operaciones con dos matrices</a>\n            <hr> Tambien puede obtener informacion de las matrices como:\n            <ul>\n                <li *ngFor=\"let i of b\">{{i}}</li>\n            </ul>\n            <a [routerLink]=\"['/unimatriz']\" [routerLinkActive]=\"['active']\" class=\"btn btn-info\">Operaciones con una matriz</a>\n            <hr> En este apartado puede generar un archivo de excel otorgandoles rangos, con las dimensiones que usted elija y con los siguientes parametros:\n            <ul>\n                <li *ngFor=\"let i of c\">{{i}}</li>\n            </ul>\n            <a [routerLink]=\"['/random']\" [routerLinkActive]=\"['active']\" class=\"btn btn-success\">Generar Archivos Excel</a>\n        </div>\n\n    </div>\n    <p class=\"text-muted small text-center\">Universidad Loyola de Bolivia - 2019</p>\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.a = ['Suma de Matrices', 'Resta de Matrices', 'Multiplicacion vectorial de Matrices', 'Multiplicacion escalar de Matrices'];
        this.b = ['Determinante', 'Rango', 'Norma', 'Traspuesta', 'Diagonal', 'Inversa', 'Triangular Inferior', 'Triangular Superior'];
        this.c = ['Numeros aleatorios enteros', 'Numeros aleatorios con punto decimal', 'Numeros aleatorios según una distribucion de probabilidad'];
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/excel/excel.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/excel/excel.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <h2>Suba sus dos archivos excel para efectuar la operacion.</h2>\n        <h6>\n            Para realizar las siguientes operaciones por favor verifique que sus matrices sean cuadradas Para el caso de la multiplicacion entre matrices verifique que la cantidad de columnas de A sea igual a la cantidad de filas de B. <br>\n            <B>\n            Para la resolucion de ecuaciones lineales solo introduzca los valores de las constantes dejando solamente su notación en matrices.\n            La respuesta se la dara en una fila por cada incognita.\n            </B>\n        </h6>\n    </div>\n    <div class=\"row\">\n\n        <form (ngSubmit)=\"onSubmit()\">\n            <div class=\"row\">\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">Suba su archivo (A) .xlsx</h5>\n                        <input class=\"btn-success \" type=\"file\" (change)=\"onFileChange($event)\" multiple=\"false\" />\n                    </div>\n                </div>\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">Suba su archivo (B) .xlsx</h5>\n                        <input class=\"btn-success \" type=\"file\" (change)=\"onFileChange($event)\" multiple=\"false\" />\n                    </div>\n                </div>\n                <div>\n                    <input (click)=\"operacion('+')\" type=\"submit\" value=\"Sumar\" class=\"btn btn-outline-success miBtn\">\n                    <input (click)=\"operacion('-')\" type=\"submit\" value=\"Restar\" class=\"btn btn-outline-info miBtn\">\n                    <input (click)=\"operacion('*')\" type=\"submit\" value=\"Producto Vectorial\" class=\"btn btn-outline-danger miBtn\">\n                    <input (click)=\"operacion('escalar')\" type=\"submit\" value=\"Producto Escalar\" class=\"btn btn-outline-primary miBtn\">\n                    <hr>\n                    <input (click)=\"operacion('lineal')\" type=\"submit\" value=\"Resolver el sistema de ecuaciones de la forma A*X=B\" class=\"btn btn-warning miBtn\">\n                </div>\n            </div>\n        </form>\n    </div>\n    <app-resultado class=\"col-6\" [matriz_resultado]=\"resultado\" [mensaje]=\"mensaje\"></app-resultado>\n\n</div>"

/***/ }),

/***/ "./src/app/components/excel/excel.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/excel/excel.component.ts ***!
  \*****************************************************/
/*! exports provided: ExcelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelComponent", function() { return ExcelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_operaciones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/operaciones.service */ "./src/app/services/operaciones.service.ts");




var ExcelComponent = /** @class */ (function () {
    // tslint:disable-next-line: variable-name
    function ExcelComponent(_operacionesService) {
        this._operacionesService = _operacionesService;
        this.data = { matrix: [], operacion: '' };
        this.mensaje = '';
    }
    ExcelComponent.prototype.ngOnInit = function () { };
    ExcelComponent.prototype.onSubmit = function () {
        var _this = this;
        this._operacionesService.operaciones(this.data).subscribe(function (response) {
            _this.mensaje = response.mensaje;
            response = JSON.parse(response.resultado);
            _this.resultado = response.data;
        });
    };
    ExcelComponent.prototype.operacion = function (value) {
        this.data.operacion = value;
    };
    ExcelComponent.prototype.onFileChange = function (evt) {
        var _this = this;
        /* wire up file reader */
        var target = (evt.target);
        if (target.files.length !== 1) {
            throw new Error('NO se pueden subir multiples archivos');
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            /* read workbook */
            var bstr = e.target.result;
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_2__["read"](bstr, { type: 'binary' });
            /* grab first sheet */
            var wsname = wb.SheetNames[0];
            var ws = wb.Sheets[wsname];
            /* save data */
            var excelVector = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].sheet_to_json(ws, { header: 1 });
            _this.data.matrix.push(excelVector);
            /* empaquetamos el vector para enviarlo al backend */
        };
        reader.readAsBinaryString(target.files[0]);
    };
    ExcelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-excel',
            template: __webpack_require__(/*! ./excel.component.html */ "./src/app/components/excel/excel.component.html"),
            providers: [_services_operaciones_service__WEBPACK_IMPORTED_MODULE_3__["OperacionesService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_operaciones_service__WEBPACK_IMPORTED_MODULE_3__["OperacionesService"]])
    ], ExcelComponent);
    return ExcelComponent;
}());



/***/ }),

/***/ "./src/app/components/export/export.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/export/export.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row\">\n        <form (ngSubmit)=\"onSubmit()\">\n            <h2>Introduzca los siguientes valores para generar un archivo excel</h2>\n            <div class=\"row\">\n                <div class=\"col-6\">\n                    <span>Seleccione un tipo de dato o distribucion normal: \n                                <select class=\"form-control mySelect\" [(ngModel)]=\"type\" [ngModelOptions]=\"{standalone: true}\" ><option *ngFor=\"let t of types\" >{{t}}</option></select>\n                            </span>\n                    <span>Filas: <input class=\"form-control mySelect\"type=\"number\" [(ngModel)]=\"rows\" [ngModelOptions]=\"{standalone: true}\"></span>\n                    <span>Columnas: <input class=\"form-control mySelect\"type=\"number\" [(ngModel)]=\"cols\" [ngModelOptions]=\"{standalone: true}\"></span>\n                    <hr>\n                    <h6>Rango: (A, B)</h6>\n                    <span>A: <input class=\"form-control mySelect\"type=\"number\" [(ngModel)]=\"a\" [ngModelOptions]=\"{standalone: true}\"></span>\n                    <span>B: <input class=\"form-control mySelect\"type=\"number\" [(ngModel)]=\"b\" [ngModelOptions]=\"{standalone: true}\"></span>\n                </div>\n                <div class=\"col-6\">\n\n                    <hr>\n                    <h6>Para generar valores dentro de una distribucion normal tambien ingrese la media(µ) y la Desviacion estandar(σ)</h6>\n                    <span>Media µ: <input class=\"form-control mySelect\"type=\"number\" [(ngModel)]=\"sigma\" [ngModelOptions]=\"{standalone: true}\"></span>\n                    <span>Desviacion estandar σ: <input class=\"form-control mySelect\"type=\"number\" [(ngModel)]=\"mu\" [ngModelOptions]=\"{standalone: true}\"></span>\n                    <span><input type=\"submit\" value=\"Descargar excel \" class=\"btn btn-outline-success miBtn\"></span>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/export/export.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/export/export.component.ts ***!
  \*******************************************************/
/*! exports provided: ExportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportComponent", function() { return ExportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_operaciones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/operaciones.service */ "./src/app/services/operaciones.service.ts");




var ExportComponent = /** @class */ (function () {
    function ExportComponent(_operacionesService) {
        this._operacionesService = _operacionesService;
        this.rows = 0;
        this.cols = 0;
        this.a = 0;
        this.b = 0;
        this.types = ['Integer', 'float', 'normal', 'normal_Scipy', 'Multivariate_normal'];
    }
    ExportComponent.prototype.ngOnInit = function () {
    };
    ExportComponent.prototype.onExport = function (json, name) {
        /* generate worksheet */
        console.log(name);
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].aoa_to_sheet(json.data);
        /* generate workbook and add the worksheet */
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_append_sheet(wb, ws);
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_2__["writeFile"](wb, name);
    };
    ExportComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = { m: this.rows, n: this.cols, a: this.a, b: this.b, type: this.type, mu: this.mu, sigma: this.sigma };
        this._operacionesService.random(data).subscribe(function (response) {
            console.log(response);
            var name = response.name + '.xlsx';
            response = JSON.parse(response.data);
            _this.onExport(response, name);
        });
    };
    ExportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-export',
            template: __webpack_require__(/*! ./export.component.html */ "./src/app/components/export/export.component.html"),
            providers: [_services_operaciones_service__WEBPACK_IMPORTED_MODULE_3__["OperacionesService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_operaciones_service__WEBPACK_IMPORTED_MODULE_3__["OperacionesService"]])
    ], ExportComponent);
    return ExportComponent;
}());



/***/ }),

/***/ "./src/app/components/input-visual/input-visual.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/input-visual/input-visual.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n    <div class=\"row\">\n        <div *ngFor=\"let i of rows\" class=\"col-2\">\n            <p *ngFor=\"let i of cols\">\n                <input type=\"text\" (select)=\"onKey($event)\">\n            </p>\n            {{values}}\n        </div>\n\n    </div>\n    <div>\n        <p> <input type=\"number\" (click)=\"changeCols()\" value=\"1\" min=\"1\" max=\"5\"> filas</p>\n        <p><input type=\"number\" (click)=\"changeRows()\" value=\"2\" min=\"2\" max=\"5\"> columnas</p>\n    </div>\n</form>\n<section>\n    <label for=\"workStatus\">Work Status</label>\n    <select name=\"workStatus\" [(ngModel)]=\"contact.workStatus\">\n      <option *ngFor=\"let wkSt of workStatuses\" [value]=\"wkSt.id\">\n        <span>{{ wkSt.description }}</span>\n      </option>\n    </select>\n</section>"

/***/ }),

/***/ "./src/app/components/input-visual/input-visual.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/input-visual/input-visual.component.ts ***!
  \*******************************************************************/
/*! exports provided: InputVisualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputVisualComponent", function() { return InputVisualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputVisualComponent = /** @class */ (function () {
    function InputVisualComponent() {
        this.cols = [1];
        this.rows = [1, 1];
        this.values = '';
        this.workStatuses = [
            { id: 0, description: 'unknow' },
            { id: 1, description: 'student' },
            { id: 2, description: 'unemployed' },
            { id: 3, description: 'employed' }
        ];
        this.contact = { name: '', isVIP: false, gender: '', workStatus: 0 };
    }
    InputVisualComponent.prototype.ngOnInit = function () { };
    InputVisualComponent.prototype.onKey = function (event) {
        this.values += event.target.value + ' ';
    };
    InputVisualComponent.prototype.changeCols = function () {
        this.cols.push(1);
    };
    InputVisualComponent.prototype.changeRows = function () {
        this.rows.push(1);
    };
    InputVisualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-visual',
            template: __webpack_require__(/*! ./input-visual.component.html */ "./src/app/components/input-visual/input-visual.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputVisualComponent);
    return InputVisualComponent;
}());



/***/ }),

/***/ "./src/app/components/resultado/resultado.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/resultado/resultado.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tr {\n    text-align: center\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bHRhZG8vcmVzdWx0YWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXN1bHRhZG8vcmVzdWx0YWRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/resultado/resultado.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/resultado/resultado.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-success\" *ngIf=\"mensaje.includes('Error')==false\">\n    {{mensaje}}\n</div>\n<div class=\"alert alert-danger\" *ngIf=\"mensaje.includes('Error')==true\">\n    {{mensaje}}\n</div>\n<table class=\"table table-striped table-dark\">\n    <tbody>\n        <tr *ngFor=\"let i of matriz_resultado\">\n            <td *ngFor=\"let j of i\">{{ j }}</td>\n        </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "./src/app/components/resultado/resultado.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/resultado/resultado.component.ts ***!
  \*************************************************************/
/*! exports provided: ResultadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultadoComponent", function() { return ResultadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResultadoComponent = /** @class */ (function () {
    function ResultadoComponent() {
    }
    ResultadoComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ResultadoComponent.prototype, "matriz_resultado", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ResultadoComponent.prototype, "mensaje", void 0);
    ResultadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resultado',
            template: __webpack_require__(/*! ./resultado.component.html */ "./src/app/components/resultado/resultado.component.html"),
            styles: [__webpack_require__(/*! ./resultado.component.css */ "./src/app/components/resultado/resultado.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResultadoComponent);
    return ResultadoComponent;
}());



/***/ }),

/***/ "./src/app/components/unimatriz/unimatriz.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/unimatriz/unimatriz.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdW5pbWF0cml6L3VuaW1hdHJpei5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/unimatriz/unimatriz.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/unimatriz/unimatriz.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <h2>Suba su archivo de excel y elija una operacion.</h2>\n        <h6>\n            Para encontrar la matriz inversa o su determinante por favor verifique que su matriz sea <b>cuadrada</b> .\n        </h6>\n    </div>\n    <div class=\"row\">\n\n        <form (ngSubmit)=\"onSubmit()\">\n            <div class=\"row\">\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">Suba su archivo .xlsx</h5>\n                        <input class=\"btn-success \" type=\"file\" (change)=\"onFileChange($event)\" multiple=\"false\" />\n                    </div>\n                </div>\n                <div>\n                    <p> Por favor elija una operación:</p>\n                    <input (click)=\"operacion('transpuesta')\" type=\"submit\" value=\"Transpuesta\" class=\"btn btn-outline-primary miBtn\">\n                    <input (click)=\"operacion('diagonal')\" type=\"submit\" value=\"Diagonal\" class=\"btn btn-outline-success miBtn\">\n                    <input (click)=\"operacion('inversa')\" type=\"submit\" value=\"Inversa\" class=\"btn btn-outline-warning miBtn\">\n                    <input (click)=\"operacion('triangularI')\" type=\"submit\" value=\"Triangular Inferior\" class=\"btn btn-outline-info miBtn\">\n                    <input (click)=\"operacion('triangularS')\" type=\"submit\" value=\"Triangular Superior\" class=\"btn btn-outline-info miBtn\">\n                    <hr>\n                    <input (click)=\"operacion('determinante')\" type=\"submit\" value=\"Determinante\" class=\"btn btn-primary miBtn\">\n                    <input (click)=\"operacion('rango')\" type=\"submit\" value=\"Rango\" class=\"btn btn-success miBtn\">\n                    <input (click)=\"operacion('norma')\" type=\"submit\" value=\"Norma\" class=\"btn btn-warning miBtn\">\n                </div>\n            </div>\n        </form>\n    </div>\n    <app-resultado class=\"col-6\" [matriz_resultado]=\"resultado\" [mensaje]=\"mensaje\"></app-resultado>"

/***/ }),

/***/ "./src/app/components/unimatriz/unimatriz.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/unimatriz/unimatriz.component.ts ***!
  \*************************************************************/
/*! exports provided: UnimatrizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnimatrizComponent", function() { return UnimatrizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_operaciones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/operaciones.service */ "./src/app/services/operaciones.service.ts");




var UnimatrizComponent = /** @class */ (function () {
    function UnimatrizComponent(_operacionesService) {
        this._operacionesService = _operacionesService;
        this.data = { matrix: [], operacion: '' };
        this.mensaje = '';
    }
    UnimatrizComponent.prototype.ngOnInit = function () {
    };
    UnimatrizComponent.prototype.onSubmit = function () {
        var _this = this;
        this._operacionesService.unimatriz(this.data).subscribe(function (response) {
            _this.mensaje = response.mensaje;
            response = JSON.parse(response.resultado);
            _this.resultado = response.data;
            console.log(response);
        });
    };
    UnimatrizComponent.prototype.onFileChange = function (evt) {
        var _this = this;
        /* wire up file reader */
        var target = (evt.target);
        if (target.files.length !== 1) {
            throw new Error('Cannot use multiple files');
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            /* read workbook */
            var bstr = e.target.result;
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_2__["read"](bstr, { type: 'binary' });
            /* grab first sheet */
            var wsname = wb.SheetNames[0];
            var ws = wb.Sheets[wsname];
            /* save data */
            var excelVector = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].sheet_to_json(ws, { header: 1 });
            _this.data.matrix.push(excelVector);
            /* empaquetamos el vector para enviarlo al backend */
        };
        reader.readAsBinaryString(target.files[0]);
    };
    UnimatrizComponent.prototype.operacion = function (value) {
        this.data.operacion = value;
    };
    UnimatrizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-unimatriz',
            template: __webpack_require__(/*! ./unimatriz.component.html */ "./src/app/components/unimatriz/unimatriz.component.html"),
            providers: [_services_operaciones_service__WEBPACK_IMPORTED_MODULE_3__["OperacionesService"]],
            styles: [__webpack_require__(/*! ./unimatriz.component.css */ "./src/app/components/unimatriz/unimatriz.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_operaciones_service__WEBPACK_IMPORTED_MODULE_3__["OperacionesService"]])
    ], UnimatrizComponent);
    return UnimatrizComponent;
}());



/***/ }),

/***/ "./src/app/services/global.ts":
/*!************************************!*\
  !*** ./src/app/services/global.ts ***!
  \************************************/
/*! exports provided: GLOBAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL", function() { return GLOBAL; });
/* export let GLOBAL = {
    url: 'https://agile-crag-29584.herokuapp.com/'
};  */
var GLOBAL = {
    url: 'http://localhost:5000/'
};


/***/ }),

/***/ "./src/app/services/operaciones.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/operaciones.service.ts ***!
  \*************************************************/
/*! exports provided: OperacionesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperacionesService", function() { return OperacionesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");




var OperacionesService = /** @class */ (function () {
    function OperacionesService(_http) {
        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    OperacionesService.prototype.operaciones = function (data) {
        var params = JSON.stringify(data);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'operacion', params, { headers: headers });
    };
    OperacionesService.prototype.unimatriz = function (data) {
        var params = JSON.stringify(data);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'unimatriz', params, { headers: headers });
    };
    OperacionesService.prototype.random = function (data) {
        var params = JSON.stringify(data);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'random', params, { headers: headers });
    };
    OperacionesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OperacionesService);
    return OperacionesService;
}());

/* se puede hacer que la direccion de la peticion al servicio sea solo uno mandando desde el componente
una conf para que este solo sea un metodo toDo() */ 


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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /run/media/atencio/Datos/Programacion/python/frontend/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map