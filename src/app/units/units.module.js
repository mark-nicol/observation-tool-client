"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angle_conversion_service_1 = require("./services/angle-conversion.service");
var angular_velocity_conversion_service_1 = require("./services/angular-velocity-conversion.service");
var frequency_conversion_service_1 = require("./services/frequency-conversion.service");
var latitude_conversion_service_1 = require("./services/latitude-conversion.service");
var length_conversion_service_1 = require("./services/length-conversion.service");
var longitude_conversion_service_1 = require("./services/longitude-conversion.service");
var sensitivity_conversion_service_1 = require("./services/sensitivity-conversion.service");
var speed_conversion_service_1 = require("./services/speed-conversion.service");
var UnitsModule = /** @class */ (function () {
    function UnitsModule() {
    }
    UnitsModule = __decorate([
        core_1.NgModule({
            declarations: [],
            providers: [
                angle_conversion_service_1.AngleConversionService,
                angular_velocity_conversion_service_1.AngularVelocityConversionService,
                frequency_conversion_service_1.FrequencyConversionService,
                latitude_conversion_service_1.LatitudeConversionService,
                length_conversion_service_1.LengthConversionService,
                longitude_conversion_service_1.LongitudeConversionService,
                sensitivity_conversion_service_1.SensitivityConversionService,
                speed_conversion_service_1.SpeedConversionService,
            ],
            exports: []
        })
    ], UnitsModule);
    return UnitsModule;
}());
exports.UnitsModule = UnitsModule;
