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
var angular_velocity_data_1 = require("../data/angular-velocity.data");
var value_conversion_service_1 = require("./value-conversion.service");
var AngularVelocityConversionService = /** @class */ (function (_super) {
    __extends(AngularVelocityConversionService, _super);
    function AngularVelocityConversionService() {
        var _this = _super.call(this) || this;
        _this.loadData();
        return _this;
    }
    AngularVelocityConversionService.prototype.loadData = function () {
        this._data = angular_velocity_data_1.ANGULAR_VELOCITY_DATA;
    };
    AngularVelocityConversionService = __decorate([
        core_1.Injectable()
    ], AngularVelocityConversionService);
    return AngularVelocityConversionService;
}(value_conversion_service_1.ValueConversionService));
exports.AngularVelocityConversionService = AngularVelocityConversionService;
