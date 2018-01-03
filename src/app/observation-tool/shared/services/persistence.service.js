"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var science_goal_pages_1 = require("../data/science-goal-pages");
var PersistenceService = /** @class */ (function () {
    function PersistenceService() {
        this._dataStore = { pages: {} };
        this._pages = new BehaviorSubject_1.BehaviorSubject({});
        this.pages = this._pages.asObservable();
        this._dataStore.pages = science_goal_pages_1.SCIENCE_GOAL_PAGES;
        this._pages.next(Object.assign({}, this._dataStore).pages);
    }
    PersistenceService.prototype.getPages = function () {
        return this.pages;
    };
    PersistenceService.prototype.getPage = function (page) {
        var returnPage;
        var subject = new BehaviorSubject_1.BehaviorSubject({});
        returnPage = subject.asObservable();
        subject.next(this._dataStore.pages[page]);
        return returnPage;
    };
    PersistenceService.prototype.getPanelData = function (page, panel) {
        var returnData;
        var subject = new BehaviorSubject_1.BehaviorSubject({});
        returnData = subject.asObservable();
        subject.next(this._dataStore.pages[page].panels[panel].data);
        return returnData;
    };
    PersistenceService.prototype.getDataItem = function (page, panel, item) {
        return this._dataStore.pages[page].panels[panel].data[item];
    };
    PersistenceService.prototype.hiddenChange = function (page, panel) {
        this._dataStore.pages[page].panels[panel].shown = !this._dataStore.pages[page].panels[panel].shown;
    };
    PersistenceService = __decorate([
        core_1.Injectable()
    ], PersistenceService);
    return PersistenceService;
}());
exports.PersistenceService = PersistenceService;
