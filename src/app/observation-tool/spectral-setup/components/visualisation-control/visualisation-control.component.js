"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var VisualisationControlComponent = /** @class */ (function () {
    function VisualisationControlComponent() {
        this.bandsChecked = true;
        this.bandsCheckedEmitter = new core_1.EventEmitter();
        this.transmissionChecked = true;
        this.transmissionCheckedEmitter = new core_1.EventEmitter();
        this.densityRadioEmitter = new core_1.EventEmitter();
        this.densitySelectorEmitter = new core_1.EventEmitter();
        this.densityRadioChoice = 'automatic';
        this.columnDensityChoices = [
            '0.472mm (1st Octile)',
            '0.658mm (2nd Octile)',
            '0.913mm (3rd Octile)',
            '1.262mm (4th Octile)',
            '1.796mm (5th Octile)',
            '2.748mm (6th Octile)',
            '5.186mm (7th Octile)',
        ];
    }
    VisualisationControlComponent.prototype.ngOnInit = function () {
    };
    VisualisationControlComponent.prototype.bandsCheckedChange = function () {
        this.bandsChecked = !this.bandsChecked;
        this.bandsCheckedEmitter.emit(this.bandsChecked);
    };
    VisualisationControlComponent.prototype.transmissionCheckedChange = function () {
        this.transmissionChecked = !this.transmissionChecked;
        this.transmissionCheckedEmitter.emit(this.transmissionChecked);
    };
    VisualisationControlComponent.prototype.densityRadioChange = function (newRadio) {
        this.densityRadioChoice = newRadio;
        this.densityRadioEmitter.emit(newRadio);
    };
    VisualisationControlComponent.prototype.densitySelectorChange = function (newDensity) {
        this.densitySelectorEmitter.emit(newDensity);
    };
    __decorate([
        core_1.Output()
    ], VisualisationControlComponent.prototype, "bandsCheckedEmitter", void 0);
    __decorate([
        core_1.Output()
    ], VisualisationControlComponent.prototype, "transmissionCheckedEmitter", void 0);
    __decorate([
        core_1.Output()
    ], VisualisationControlComponent.prototype, "densityRadioEmitter", void 0);
    __decorate([
        core_1.Output()
    ], VisualisationControlComponent.prototype, "densitySelectorEmitter", void 0);
    VisualisationControlComponent = __decorate([
        core_1.Component({
            selector: 'app-visualisation-control',
            templateUrl: './visualisation-control.component.html',
            styleUrls: ['./visualisation-control.component.scss']
        })
    ], VisualisationControlComponent);
    return VisualisationControlComponent;
}());
exports.VisualisationControlComponent = VisualisationControlComponent;
