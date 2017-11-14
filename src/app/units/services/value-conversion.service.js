"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * Service to convert a value of a type from one unit to another
 */
var ValueConversionService = /** @class */ (function () {
    function ValueConversionService() {
    }
    /**
     * Returns the conversion factor for converting one unit to another
     * @param sourceUnit The unit to convert from
     * @param targetUnit The unit to convert to
     */
    ValueConversionService.prototype.getConversionFactor = function (sourceUnit, targetUnit) {
        var sourceFactor = this._data[sourceUnit], targetFactor = this._data[targetUnit];
        return sourceFactor / targetFactor;
    };
    /**
     * Get all the possible units for the current value type
     */
    ValueConversionService.prototype.getUnits = function () {
        var returnArray = [];
        var dataKeys = Object.keys;
        for (var _i = 0, _a = dataKeys(this._data); _i < _a.length; _i++) {
            var unit = _a[_i];
            returnArray.push(unit);
        }
        return returnArray;
    };
    ValueConversionService = __decorate([
        core_1.Injectable()
    ], ValueConversionService);
    return ValueConversionService;
}());
exports.ValueConversionService = ValueConversionService;
