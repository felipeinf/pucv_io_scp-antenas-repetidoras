"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var comuna_1 = require("./services/comuna");
var comunaService = new comuna_1.ComunaService();
simulatedAnnealing(comunaService.getComunas());
function simulatedAnnealing(comunas) {
    comunas.forEach(function (comuna) {
        console.log('\n' + comuna.nombre);
        console.log(comuna.id);
        comuna.vecinos.sort(function (a, b) { return a - b; });
        console.log(comuna.vecinos);
    });
}
