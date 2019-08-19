"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var comunas_1 = require("./repository/comunas");
function hello() {
    var comunas = comunas_1.COMUNAS;
    comunas.forEach(function (comuna) {
        console.log(comuna.nombre);
        comuna.vecinos.push(comuna.id);
        comuna.vecinos.sort(function (a, b) { return a - b; });
        console.log(comuna.vecinos);
        console.log();
    });
}
hello();
