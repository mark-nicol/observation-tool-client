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
 * Creates a modular panel wrapper around content
 */
var ModularPanelComponent = /** @class */ (function () {
    function ModularPanelComponent() {
        /** Used to control the minimizing and maximizing the panel */
        this.isCollapsed = false;
        /** Emits the id of the panel when the close button is pressed */
        this.hiddenChange = new core_1.EventEmitter();
    }
    /** Called when the close button is clicked, emits a signal to the parent component */
    ModularPanelComponent.prototype.removeClick = function () {
        console.log('Remove click', this.id);
        this.hiddenChange.emit(this.id);
    };
    __decorate([
        core_1.Input()
    ], ModularPanelComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input()
    ], ModularPanelComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input()
    ], ModularPanelComponent.prototype, "image", void 0);
    __decorate([
        core_1.Output()
    ], ModularPanelComponent.prototype, "hiddenChange", void 0);
    ModularPanelComponent = __decorate([
        core_1.Component({
            selector: 'modular-panel',
            templateUrl: './modular-panel.component.html',
            styleUrls: ['./modular-panel.component.css']
        })
    ], ModularPanelComponent);
    return ModularPanelComponent;
}());
exports.ModularPanelComponent = ModularPanelComponent;
