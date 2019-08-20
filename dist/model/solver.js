"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var comuna_1 = require("../services/comuna");
var Solver = /** @class */ (function () {
    function Solver() {
        this.comunaService = new comuna_1.ComunaService();
        this.comunas = this.comunaService.getComunas();
    }
    Solver.prototype.buscarSolucion = function () {
        this.comunas.forEach(function (comuna) {
            console.log('\n' + comuna.nombre);
            console.log(comuna.id);
            comuna.vecinos.sort(function (a, b) { return a - b; });
            console.log(comuna.vecinos);
        });
    };
    return Solver;
}());
exports.Solver = Solver;
