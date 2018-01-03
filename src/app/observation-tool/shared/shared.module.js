"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var units_module_1 = require("../../units/units.module");
var modular_panel_component_1 = require("./components/modular-panel/modular-panel.component");
var system_selector_component_1 = require("./components/system-selector/system-selector.component");
var delay_tooltip_directive_1 = require("./directives/delay-tooltip.directive");
var degrees_pipe_1 = require("./pipes/degrees.pipe");
var sexagesimal_pipe_1 = require("./pipes/sexagesimal.pipe");
var persistence_service_1 = require("./services/persistence.service");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var router_1 = require("@angular/router");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                router_1.RouterModule,
                units_module_1.UnitsModule,
            ],
            declarations: [
                modular_panel_component_1.ModularPanelComponent,
                delay_tooltip_directive_1.DelayTooltipDirective,
                degrees_pipe_1.DegreesPipe,
                sexagesimal_pipe_1.SexagesimalPipe,
                system_selector_component_1.SystemSelectorComponent,
            ],
            providers: [
                persistence_service_1.PersistenceService,
            ],
            exports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                units_module_1.UnitsModule,
                modular_panel_component_1.ModularPanelComponent,
                system_selector_component_1.SystemSelectorComponent,
                delay_tooltip_directive_1.DelayTooltipDirective,
                degrees_pipe_1.DegreesPipe,
                sexagesimal_pipe_1.SexagesimalPipe,
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
