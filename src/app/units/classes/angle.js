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
var value_unit_pair_1 = require("./value-unit-pair");
var angle_units_enum_1 = require("../enums/angle-units.enum");
var core_1 = require("@angular/core");
var angle_conversion_service_1 = require("../services/angle-conversion.service");
/**
 * ValueUnitPair for angular units
 */
var Angle = /** @class */ (function (_super) {
    __extends(Angle, _super);
    /**
     * Calls super constructor, injects correct conversion service
     * @param unit  The units which the value is stored in
     * @param value The value of the pair
     */
    function Angle(unit, value) {
        if (unit === void 0) { unit = angle_units_enum_1.AngleUnits.DEG; }
        if (value === void 0) { value = 0.0; }
        var _this = _super.call(this, unit, value, angle_units_enum_1.AngleUnits.DEG) || this;
        var injector = core_1.ReflectiveInjector.resolveAndCreate([angle_conversion_service_1.AngleConversionService]);
        _this._valueConversionService = injector.get(angle_conversion_service_1.AngleConversionService);
        return _this;
    }
    return Angle;
}(value_unit_pair_1.ValueUnitPair));
exports.Angle = Angle;
