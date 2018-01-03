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
 * Directive to delay the opening of NgbTooltips by 1 second
 */
var DelayTooltipDirective = /** @class */ (function () {
    function DelayTooltipDirective() {
    }
    /**
     * Listens for a mouseenter on the tooltipped element and delays the opening
     */
    DelayTooltipDirective.prototype.onMouseEnter = function () {
        var _this = this;
        this.openCode = setTimeout(function () { _this.tooltip.open(); }, 1000);
    };
    /**
     * Listens for a mouseleave on the tooltipped element, removes the timeout, and closes
     */
    DelayTooltipDirective.prototype.onMouseLeave = function () {
        clearTimeout(this.openCode);
        this.tooltip.close();
    };
    __decorate([
        core_1.Input('tooltip-delay')
    ], DelayTooltipDirective.prototype, "tooltip", void 0);
    __decorate([
        core_1.HostListener('mouseenter')
    ], DelayTooltipDirective.prototype, "onMouseEnter", null);
    __decorate([
        core_1.HostListener('mouseleave')
    ], DelayTooltipDirective.prototype, "onMouseLeave", null);
    DelayTooltipDirective = __decorate([
        core_1.Directive({
            selector: '[tooltip-delay]'
        })
    ], DelayTooltipDirective);
    return DelayTooltipDirective;
}());
exports.DelayTooltipDirective = DelayTooltipDirective;
