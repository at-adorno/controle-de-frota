"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
var Veiculo = /** @class */ (function () {
    function Veiculo(modelo, ano) {
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = false;
    }
    Veiculo.prototype.ligar = function () {
        this.ligado = true;
        console.log("".concat(this.modelo, " est\u00E1 ligado."));
    };
    Veiculo.prototype.desligar = function () {
        this.ligado = false;
        console.log("".concat(this.modelo, " est\u00E1 desligado."));
    };
    Veiculo.prototype.acelerar = function () {
        console.log("".concat(this.modelo, " est\u00E1 acelerando."));
    };
    Veiculo.prototype.isLigado = function () {
        return this.ligado;
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
