"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var comuna_1 = require("./services/comuna");
function hello() {
    var comunaService = new comuna_1.ComunaService();
    var comunas = comunaService.getComunas();
    comunas.forEach(function (comuna) {
        console.log(comuna.id);
        console.log(comuna.nombre);
        //comuna.vecinos.push(comuna.id);
        comuna.vecinos.sort(function (a, b) { return a - b; });
        console.log(comuna.vecinos);
        console.log();
    });
}
hello();
