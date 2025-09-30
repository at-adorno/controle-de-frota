"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerenciadorFrota = void 0;
var GerenciadorFrota = /** @class */ (function () {
    function GerenciadorFrota() {
        this.veiculos = [];
        this.motoristas = [];
    }
    GerenciadorFrota.prototype.adicionarVeiculo = function (veiculo) {
        this.veiculos.push(veiculo);
    };
    GerenciadorFrota.prototype.adicionarMotorista = function (motorista) {
        this.motoristas.push(motorista);
    };
    GerenciadorFrota.prototype.listarVeiculos = function () {
        return this.veiculos.map(function (veiculo) {
            return veiculo.obterDescricao ? veiculo.obterDescricao() : "Ve\u00EDculo: ".concat(veiculo);
        });
    };
    GerenciadorFrota.prototype.listarMotoristas = function () {
        return this.motoristas.map(function (motorista) { return motorista.obterDescricao(); });
    };
    GerenciadorFrota.prototype.atribuirMotorista = function (veiculo, motorista) {
        if (this.veiculos.includes(veiculo) && this.motoristas.includes(motorista)) {
            console.log("Motorista ".concat(motorista.getNome(), " atribu\u00EDdo ao ve\u00EDculo ").concat(veiculo.obterDescricao(), "."));
        }
        else {
            console.log('Veículo ou motorista não encontrado.');
        }
    };
    return GerenciadorFrota;
}());
exports.GerenciadorFrota = GerenciadorFrota;
