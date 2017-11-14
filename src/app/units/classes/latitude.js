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
var latitude_units_enum_1 = require("../enums/latitude-units.enum");
var latitude_conversion_service_1 = require("../services/latitude-conversion.service");
var value_unit_pair_1 = require("./value-unit-pair");
/**
 * ValueUnitPair for latitude units
 */
var Latitude = /** @class */ (function (_super) {
    __extends(Latitude, _super);
    /**
     * Calls super constructor, injects correct conversion service
     * @param unit  The units which the value is stored in
     * @param value The value of the pair
     */
    function Latitude(unit, value) {
        if (unit === void 0) { unit = latitude_units_enum_1.LatitudeUnits.DEG; }
        if (value === void 0) { value = 0.0; }
        var _this = _super.call(this, unit, value, latitude_units_enum_1.LatitudeUnits.DEG) || this;
        var injector = core_1.ReflectiveInjector.resolveAndCreate([latitude_conversion_service_1.LatitudeConversionService]);
        _this._valueConversionService = injector.get(latitude_conversion_service_1.LatitudeConversionService);
        return _this;
    }
    return Latitude;
}(value_unit_pair_1.ValueUnitPair));
exports.Latitude = Latitude;
