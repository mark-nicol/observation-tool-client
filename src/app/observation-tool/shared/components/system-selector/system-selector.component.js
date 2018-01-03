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
 * System select components
 *
 * Allows for selecting of coordinates systems and whether sexagesimal units are used
 */
var SystemSelectorComponent = /** @class */ (function () {
    function SystemSelectorComponent() {
        /** The currently selected system */
        this.chosenSystem = 'ICRS';
        /** Controls if the sexagesimal checkbox is hidden */
        this.sexagesimalHidden = false;
        /** Controls if the sexagesimal checkbox is disabled */
        this.sexagesimalDisabled = false;
        /** Iterator for the systems */
        this.systemKeys = Object.keys;
        /** Possible system choices dict */
        this.systems = {
            'ICRS': {
                sexagesimalLabels: {
                    latLabel: 'Dec',
                    lonLabel: 'RA',
                },
                normalLabels: {
                    latLabel: 'Dec(deg)',
                    lonLabel: 'RA(deg)',
                },
                latPlaceholder: '0',
                lonPlaceholder: '0',
                lonHeader: 'RA',
                latHeader: 'Dec'
            },
            'FK5 J2000': {
                sexagesimalLabels: {
                    latLabel: 'Dec',
                    lonLabel: 'RA',
                },
                normalLabels: {
                    latLabel: 'Dec(deg)',
                    lonLabel: 'RA(deg)'
                },
                latPlaceholder: '0',
                lonPlaceholder: '0',
                lonHeader: 'RA',
                latHeader: 'Dec'
            },
            'galactic': {
                sexagesimalLabels: {
                    latLabel: '',
                    lonLabel: '',
                },
                normalLabels: {
                    latLabel: 'Lat(deg)',
                    lonLabel: 'Lon(deg)',
                },
                latPlaceholder: '-60.18855219',
                lonPlaceholder: '96.33728304',
                lonHeader: 'Lon',
                latHeader: 'Lat',
            },
            'eliptic': {
                sexagesimalLabels: {
                    latLabel: '',
                    lonLabel: '',
                },
                normalLabels: {
                    latLabel: 'Lat (deg)',
                    lonLabel: 'Lon (deg)',
                },
                latPlaceholder: '0',
                lonPlaceholder: '0',
                lonHeader: 'RA',
                latHeader: 'Deg'
            },
            'horizon': {
                sexagesimalLabels: {
                    latLabel: '',
                    lonLabel: '',
                },
                normalLabels: {
                    latLabel: 'Alt(deg)',
                    lonLabel: 'Az(deg)',
                },
                latPlaceholder: '0',
                lonPlaceholder: '0',
                lonHeader: 'RA',
                latHeader: 'Deg'
            },
            'azel': {
                sexagesimalLabels: {
                    latLabel: '',
                    lonLabel: '',
                },
                normalLabels: {
                    latLabel: 'Alt(deg)',
                    lonLabel: 'Az(deg)',
                },
                latPlaceholder: '0',
                lonPlaceholder: '0',
                lonHeader: 'RA',
                latHeader: 'Deg'
            }
        };
        /** True if the sexagesimal checkbox is checked */
        this.sexagesimalUnits = false;
        /** Emitter for a selected system change */
        this.systemEmitter = new core_1.EventEmitter();
        /** Emitter for a sexagesimal check change */
        this.sexagesimalEmitter = new core_1.EventEmitter();
    }
    /**
     * Emits the current system and sexagesimal state
     */
    SystemSelectorComponent.prototype.ngOnInit = function () {
        this.systemEmitter.emit(this.systems[this.chosenSystem]);
        this.sexagesimalEmitter.emit(this.sexagesimalUnits);
    };
    /**
     * Controls a change of system
     *
     * If the system is is ICRS or FK5 then sexagesimal units are allowed,
     * else the checkbox is disabled and hidden
     */
    SystemSelectorComponent.prototype.systemChange = function () {
        if (this.chosenSystem === 'ICRS' || this.chosenSystem === 'FK5 J2000') {
            this.sexagesimalDisabled = false;
        }
        else {
            this.sexagesimalDisabled = true;
            this.sexagesimalUnits = false;
        }
        this.systemEmitter.emit(this.systems[this.chosenSystem]);
        this.sexagesimalEmitter.emit(this.sexagesimalUnits);
    };
    /**
     * Controls a change of the sexagesimal state
     */
    SystemSelectorComponent.prototype.sexagesimalChange = function () {
        this.sexagesimalEmitter.emit(this.sexagesimalUnits);
    };
    __decorate([
        core_1.Input()
    ], SystemSelectorComponent.prototype, "chosenSystem", void 0);
    __decorate([
        core_1.Input()
    ], SystemSelectorComponent.prototype, "sexagesimalHidden", void 0);
    __decorate([
        core_1.Output()
    ], SystemSelectorComponent.prototype, "systemEmitter", void 0);
    __decorate([
        core_1.Output()
    ], SystemSelectorComponent.prototype, "sexagesimalEmitter", void 0);
    SystemSelectorComponent = __decorate([
        core_1.Component({
            selector: 'system-selector',
            templateUrl: './system-selector.component.html',
            styleUrls: ['./system-selector.component.scss']
        })
    ], SystemSelectorComponent);
    return SystemSelectorComponent;
}());
exports.SystemSelectorComponent = SystemSelectorComponent;
