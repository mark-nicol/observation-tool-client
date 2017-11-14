"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var science_goal_page_1 = require("../shared/classes/science-goal-page");
var visualisation_viewer_component_1 = require("./components/visualisation-viewer/visualisation-viewer.component");
var science_goal_identifiers_enum_1 = require("../shared/enums/science-goal-identifiers.enum");
var SpectralSetupComponent = /** @class */ (function (_super) {
    __extends(SpectralSetupComponent, _super);
    function SpectralSetupComponent(persistenceService) {
        return _super.call(this, persistenceService, science_goal_identifiers_enum_1.ScienceGoalIdentifiers.SPECTRAL_SETUP) || this;
    }
    SpectralSetupComponent.prototype.ngOnInit = function () {
    };
    SpectralSetupComponent.prototype.bandsCheckedChange = function (event) {
        this.visualisationViewerComponent.hideShowBands(event);
    };
    SpectralSetupComponent.prototype.transmissionCheckedChange = function (event) {
        this.visualisationViewerComponent.hideShowTransmission(event);
    };
    SpectralSetupComponent.prototype.densityRadioChange = function (event) {
        if (event === 'automatic') {
            this.visualisationViewerComponent.changeLine('sin');
        }
    };
    SpectralSetupComponent.prototype.densitySelectorChange = function (event) {
        this.visualisationViewerComponent.changeLine(event);
    };
    __decorate([
        core_1.ViewChild(visualisation_viewer_component_1.VisualisationViewerComponent)
    ], SpectralSetupComponent.prototype, "visualisationViewerComponent", void 0);
    SpectralSetupComponent = __decorate([
        core_1.Component({
            selector: 'app-spectral-setup',
            templateUrl: './spectral-setup.component.html',
            styleUrls: ['./spectral-setup.component.scss']
        })
    ], SpectralSetupComponent);
    return SpectralSetupComponent;
}(science_goal_page_1.ScienceGoalPage));
exports.SpectralSetupComponent = SpectralSetupComponent;
