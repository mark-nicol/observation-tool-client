"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var type_component_1 = require("./components/type/type.component");
var visualisation_control_component_1 = require("./components/visualisation-control/visualisation-control.component");
var visualisation_viewer_component_1 = require("./components/visualisation-viewer/visualisation-viewer.component");
var spectral_setup_component_1 = require("./spectral-setup.component");
var shared_module_1 = require("../shared/shared.module");
var spectral_data_service_1 = require("./services/spectral-data.service");
var ngx_papaparse_1 = require("ngx-papaparse");
var SpectralSetupModule = /** @class */ (function () {
    function SpectralSetupModule() {
    }
    SpectralSetupModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                ngx_papaparse_1.PapaParseModule
            ],
            declarations: [
                type_component_1.TypeComponent,
                visualisation_control_component_1.VisualisationControlComponent,
                visualisation_viewer_component_1.VisualisationViewerComponent,
                spectral_setup_component_1.SpectralSetupComponent
            ],
            providers: [spectral_data_service_1.SpectralDataService],
            exports: [
                spectral_setup_component_1.SpectralSetupComponent
            ]
        })
    ], SpectralSetupModule);
    return SpectralSetupModule;
}());
exports.SpectralSetupModule = SpectralSetupModule;
