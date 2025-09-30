"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caminhao = void 0;
var Veiculo_1 = require("./Veiculo");
var Caminhao = /** @class */ (function (_super) {
    __extends(Caminhao, _super);
    function Caminhao(modelo, ano, capacidadeCarga) {
        var _this = _super.call(this, modelo, ano) || this;
        _this.capacidadeCarga = capacidadeCarga;
        return _this;
    }
    Caminhao.prototype.obterDescricao = function () {
        return "Caminh\u00E3o: Modelo ".concat(this.modelo, ", Ano ").concat(this.ano, ", Capacidade de carga: ").concat(this.capacidadeCarga, "kg, Ligado: ").concat(this.isLigado());
    };
    return Caminhao;
}(Veiculo_1.Veiculo));
exports.Caminhao = Caminhao;
