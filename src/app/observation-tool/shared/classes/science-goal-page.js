"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Abstract class defining science goal pages
 *
 * Handles ID setting, data loading, and hiding and showing panels
 */
var ScienceGoalPage = /** @class */ (function () {
    /**
     * Sets the id and loads page data
     * @param persistenceService Injected service
     * @param id                      Id for the page
     */
    function ScienceGoalPage(persistenceService, id) {
        var _this = this;
        this.persistenceService = persistenceService;
        this.id = id;
        this.persistenceService.getPage(this.id).subscribe(function (data) { return _this.page = data; });
    }
    /**
     * Handles closing or opening of panels
     * @param panel The id of the panel to change state
     */
    ScienceGoalPage.prototype.hiddenChange = function (panel) {
        this.persistenceService.hiddenChange(this.id, panel);
    };
    return ScienceGoalPage;
}());
exports.ScienceGoalPage = ScienceGoalPage;
