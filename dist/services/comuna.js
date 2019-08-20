"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var comunas_1 = require("../repository/comunas");
var ComunaService = /** @class */ (function () {
    function ComunaService() {
        this.comunas = comunas_1.COMUNAS;
    }
    ComunaService.prototype.getComunas = function () {
        return this.comunas;
    };
    ComunaService.prototype.getComunaById = function (id) {
        return this.comunas.filter(function (comuna) { return id === comuna.id; })[0];
    };
    ComunaService.prototype.getVecinosById = function (id) {
        var comuna = this.getComunaById(id);
        return this.comunas.filter(function (data) { return data.vecinos.includes(comuna.id); });
    };
    ComunaService.prototype.getIdsComunas = function () {
        return this.comunas.map(function (data) { return data.id; });
    };
    return ComunaService;
}());
exports.ComunaService = ComunaService;
