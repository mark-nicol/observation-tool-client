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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_velocity_units_enum_1 = require("../enums/angular-velocity-units.enum");
var angular_velocity_conversion_service_1 = require("../services/angular-velocity-conversion.service");
var value_unit_pair_1 = require("./value-unit-pair");
/**
 * ValueUnitPair for angular velocity units
 */
var AngularVelocity = /** @class */ (function (_super) {
    __extends(AngularVelocity, _super);
    /**
     * Calls super constructor, injects correct conversion service
     * @param unit  The units which the value is stored in
     * @param value The value of the pair
     */
    function AngularVelocity(unit, value) {
        if (unit === void 0) { unit = angular_velocity_units_enum_1.AngularVelocityUnits.DEG_S; }
        if (value === void 0) { value = 0.0; }
        var _this = _super.call(this, unit, value, angular_velocity_units_enum_1.AngularVelocityUnits.DEG_S) || this;
        var injector = core_1.ReflectiveInjector.resolveAndCreate([angular_velocity_conversion_service_1.AngularVelocityConversionService]);
        _this._valueConversionService = injector.get(angular_velocity_conversion_service_1.AngularVelocityConversionService);
        return _this;
    }
    return AngularVelocity;
}(value_unit_pair_1.ValueUnitPair));
exports.AngularVelocity = AngularVelocity;
