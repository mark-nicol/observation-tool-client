"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Value unit pair class
 *
 * Allows for storing of a value and defining a unit against it.
 * From this the value can be retrieved in different units of the same type allowing simple conversions
 */
var ValueUnitPair = /** @class */ (function () {
    /**
     * Constructor, sets the unit, value, and default units
     * @param unit        The units to use
     * @param value       The value to store
     * @param defaultUnit The default units for a value of this type
     */
    function ValueUnitPair(unit, value, defaultUnit) {
        if (value === void 0) { value = 0.0; }
        this.unit = unit;
        this.value = value;
        if (defaultUnit) {
            this._defaultUnit = defaultUnit;
        }
    }
    Object.defineProperty(ValueUnitPair.prototype, "defaultUnit", {
        /**
         * Returns the default unit type
         */
        get: function () {
            return this._defaultUnit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValueUnitPair.prototype, "unit", {
        /**
         * Returns the current unit
         */
        get: function () {
            return this._unit;
        },
        /**
         * Sets the current unit
         * @param newUnit The new unit to use
         */
        set: function (newUnit) {
            this._unit = newUnit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValueUnitPair.prototype, "value", {
        /**
         * Returns the current value
         */
        get: function () {
            return this._value;
        },
        /**
         * Sets the current value
         * @param newValue The new value to store
         */
        set: function (newValue) {
            this._value = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValueUnitPair.prototype, "valueConversionService", {
        /**
         * Returns the correct conversion service for a value of this type
         */
        get: function () {
            return this._valueConversionService;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the stored value in its default units
     */
    ValueUnitPair.prototype.getValueInDefaultUnits = function () {
        return this.getValueInUnits(this.defaultUnit);
    };
    /**
     * Returns the stored value converted to the specified units
     * @param targetUnits The units to covert the value into
     */
    ValueUnitPair.prototype.getValueInUnits = function (targetUnits) {
        return this.value * this._valueConversionService.getConversionFactor(this.unit, targetUnits);
    };
    /**
     * Sets the current units to the default unit of this type
     */
    ValueUnitPair.prototype.setUnitsToDefault = function () {
        this.unit = this.defaultUnit;
    };
    /**
     * Returns a string array of all possible units of this type
     */
    ValueUnitPair.prototype.getPossibleUnits = function () {
        return this.valueConversionService.getUnits();
    };
    return ValueUnitPair;
}());
exports.ValueUnitPair = ValueUnitPair;
