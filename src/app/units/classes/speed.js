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
var speed_units_enum_1 = require("../enums/speed-units.enum");
var core_1 = require("@angular/core");
var speed_conversion_service_1 = require("../services/speed-conversion.service");
var value_unit_pair_1 = require("./value-unit-pair");
/**
 * ValueUnitPair for speed units
 */
var Speed = /** @class */ (function (_super) {
    __extends(Speed, _super);
    // TODO: Add light speed
    /**
     * Calls super constructor, injects correct conversion service
     * @param unit  The units which the value is stored in
     * @param value The value of the pair
     */
    function Speed(unit, value) {
        if (unit === void 0) { unit = speed_units_enum_1.SpeedUnits.KM_S; }
        if (value === void 0) { value = 0.0; }
        var _this = _super.call(this, unit, value, speed_units_enum_1.SpeedUnits.KM_S) || this;
        var injector = core_1.ReflectiveInjector.resolveAndCreate([speed_conversion_service_1.SpeedConversionService]);
        _this._valueConversionService = injector.get(speed_conversion_service_1.SpeedConversionService);
        return _this;
    }
    return Speed;
}(value_unit_pair_1.ValueUnitPair));
exports.Speed = Speed;
