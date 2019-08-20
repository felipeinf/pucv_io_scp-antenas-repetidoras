"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var region_1 = require("../repository/region");
var RegionService = /** @class */ (function () {
    function RegionService() {
        this.universo = region_1.UNIVERSO;
    }
    RegionService.prototype.getUniverso = function () {
        return this.universo;
    };
    return RegionService;
}());
exports.RegionService = RegionService;
