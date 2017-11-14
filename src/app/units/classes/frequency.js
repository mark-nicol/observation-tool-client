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
var frequency_units_enum_1 = require("../enums/frequency-units.enum");
var core_1 = require("@angular/core");
var frequency_conversion_service_1 = require("../services/frequency-conversion.service");
/**
 * ValueUnitPair for frequency units
 */
var Frequency = /** @class */ (function (_super) {
    __extends(Frequency, _super);
    /**
     * Calls super constructor, injects correct conversion service
     * @param unit  The units which the value is stored in
     * @param value The value of the pair
     */
    function Frequency(unit, value) {
        if (unit === void 0) { unit = frequency_units_enum_1.FrequencyUnits.GHZ; }
        if (value === void 0) { value = 0.0; }
        var _this = _super.call(this, unit, value, frequency_units_enum_1.FrequencyUnits.GHZ) || this;
        var injector = core_1.ReflectiveInjector.resolveAndCreate([frequency_conversion_service_1.FrequencyConversionService]);
        _this._valueConversionService = injector.get(frequency_conversion_service_1.FrequencyConversionService);
        return _this;
    }
    return Frequency;
}(value_unit_pair_1.ValueUnitPair));
exports.Frequency = Frequency;
