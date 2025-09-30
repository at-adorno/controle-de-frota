"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Motorista_1 = require("./models/Motorista");
var GerenciadorFrota_1 = require("./models/GerenciadorFrota");
var gerenciador = new GerenciadorFrota_1.GerenciadorFrota();
//criando veiculos
var Carro_1 = require("./models/Carro");
var Caminhao_1 = require("./models/Caminhao");
var carro1 = new Carro_1.Carro('Toyota Corolla', 2020, 4);
var carro2 = new Carro_1.Carro('Honda Civic', 2019, 4);
var caminhao1 = new Caminhao_1.Caminhao('Volvo FH', 2018, 20000);
//criando motoristas
var motorista1 = new Motorista_1.Motorista('João Silva', '123.456.789-00', 'CNH123456');
var motorista2 = new Motorista_1.Motorista('Maria Souza', '987.654.321-00', 'CNH654321');
//adicionando veiculos e motoristas ao gerenciador
gerenciador.adicionarVeiculo(carro1);
gerenciador.adicionarVeiculo(carro2);
gerenciador.adicionarVeiculo(caminhao1);
gerenciador.adicionarMotorista(motorista1);
gerenciador.adicionarMotorista(motorista2);
//listando veiculos
console.log('Lista de Veículos:');
gerenciador.listarVeiculos().forEach(function (descricao) { return console.log(descricao); });
//atribuindo motoristas aos veiculos
console.log('\nAtribuindo Motoristas:');
gerenciador.atribuirMotorista(carro1, motorista1);
gerenciador.atribuirMotorista(caminhao1, motorista2);
gerenciador.atribuirMotorista(carro2, motorista1);
gerenciador.atribuirMotorista(caminhao1, motorista2);
// Testes de atribuição com motoristas e veículos não adicionados
gerenciador.atribuirMotorista(carro1, motorista2);
gerenciador.atribuirMotorista(new Carro_1.Carro('Ford', 2021, 4), motorista1);
//Status dos veiculos e motoristas
console.log('Status dos Veículos:');
gerenciador.listarVeiculos().forEach(function (descricao) { return console.log(descricao); });
console.log('Status dos Motoristas:');
gerenciador.listarMotoristas().forEach(function (descricao) { return console.log(descricao); });
console.log('Fim dos testes.');
