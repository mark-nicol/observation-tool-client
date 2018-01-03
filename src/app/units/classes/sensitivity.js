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
var sensitivity_units_enum_1 = require("../enums/sensitivity-units.enum");
var sensitivity_conversion_service_1 = require("../services/sensitivity-conversion.service");
var value_unit_pair_1 = require("./value-unit-pair");
/**
 * ValueUnitPair for sensitivity units
 */
var Sensitivity = /** @class */ (function (_super) {
    __extends(Sensitivity, _super);
    /**
     * Calls super constructor, injects correct conversion service
     * @param unit  The units which the value is stored in
     * @param value The value of the pair
     */
    function Sensitivity(unit, value) {
        if (unit === void 0) { unit = sensitivity_units_enum_1.SensitivityUnits.JY; }
        if (value === void 0) { value = 0.0; }
        var _this = _super.call(this, unit, value, sensitivity_units_enum_1.SensitivityUnits.JY) || this;
        var injector = core_1.ReflectiveInjector.resolveAndCreate([sensitivity_conversion_service_1.SensitivityConversionService]);
        _this._valueConversionService = injector.get(sensitivity_conversion_service_1.SensitivityConversionService);
        return _this;
    }
    return Sensitivity;
}(value_unit_pair_1.ValueUnitPair));
exports.Sensitivity = Sensitivity;
