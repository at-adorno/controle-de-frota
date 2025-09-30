"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motorista = void 0;
var Motorista = /** @class */ (function () {
    function Motorista(nome, cpf, cnh) {
        this.nome = nome;
        this.cpf = cpf;
        this.cnh = cnh;
    }
    Motorista.prototype.getNome = function () {
        return this.nome;
    };
    Motorista.prototype.getCpf = function () {
        return this.cpf;
    };
    Motorista.prototype.getCnh = function () {
        return this.cnh;
    };
    Motorista.prototype.dirigir = function () {
        console.log("Motorista ".concat(this.nome, " est\u00E1 dirigindo."));
    };
    Motorista.prototype.obterDescricao = function () {
        return "Motorista: Nome ".concat(this.nome, ", CPF ").concat(this.cpf, ", CNH ").concat(this.cnh);
    };
    return Motorista;
}());
exports.Motorista = Motorista;
