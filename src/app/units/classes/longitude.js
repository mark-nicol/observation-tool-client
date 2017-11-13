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
var longitude_units_enum_1 = require("../enums/longitude-units.enum");
var longitude_conversion_service_1 = require("../services/longitude-conversion.service");
var value_unit_pair_1 = require("./value-unit-pair");
/**
 * ValueUnitPair for longitude units
 */
var Longitude = /** @class */ (function (_super) {
    __extends(Longitude, _super);
    /**
     * Calls super constructor, injects correct conversion service
     * @param unit  The units which the value is stored in
     * @param value The value of the pair
     */
    function Longitude(unit, value) {
        if (unit === void 0) { unit = longitude_units_enum_1.LongitudeUnits.DEG; }
        if (value === void 0) { value = 0.0; }
        var _this = _super.call(this, unit, value, longitude_units_enum_1.LongitudeUnits.DEG) || this;
        var injector = core_1.ReflectiveInjector.resolveAndCreate([longitude_conversion_service_1.LongitudeConversionService]);
        _this._valueConversionService = injector.get(longitude_conversion_service_1.LongitudeConversionService);
        return _this;
    }
    return Longitude;
}(value_unit_pair_1.ValueUnitPair));
exports.Longitude = Longitude;
