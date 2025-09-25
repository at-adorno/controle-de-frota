import { Motorista } from './models/Motorista'
import { Veiculo } from './models/Veiculo'
import { GerenciadorFrota } from './models/GerenciadorFrota'

const gerenciador = new GerenciadorFrota();

//criando veiculos
const carro1 = new Veiculo('Carro', 'Toyota', 'Corolla', 2020, 'ABC-1234');
const carro2 = new Veiculo('Carro', 'Honda', 'Civic', 2019, 'DEF-5678');
const caminhao1 = new Veiculo('Caminhão', 'Volvo', 'FH16', 2018, 'GHI-9012');

//criando motoristas
const motorista1 = new Motorista('João Silva', '123.456.789-00', 'CNH123456');
const motorista2 = new Motorista('Maria Souza', '987.654.321-00', 'CNH654321');

//adicionando veiculos e motoristas ao gerenciador
gerenciador.adicionarVeiculo(carro1);
gerenciador.adicionarVeiculo(carro2);
gerenciador.adicionarVeiculo(caminhao1);
gerenciador.adicionarMotorista(motorista1);
gerenciador.adicionarMotorista(motorista2);

//listando veiculos
console.log('Lista de Veículos:');
gerenciador.listarVeiculos().forEach((descricao) => console.log(descricao));

//atribuindo motoristas aos veiculos
console.log('\nAtribuindo Motoristas:');
gerenciador.atribuirMotorista(carro1, motorista1);
gerenciador.atribuirMotorista(caminhao1, motorista2);
gerenciador.atribuirMotorista(carro2, motorista1);
gerenciador.atribuirMotorista(caminhao1, motorista2);

// Testes de atribuição com motoristas e veículos não adicionados
gerenciador.atribuirMotorista(carro1, motorista2);
gerenciador.atribuirMotorista(new Veiculo('Carro', 'Ford', 'Focus', 2021, 'JKL-3456'), motorista1);

//Status dos veiculos e motoristas
console.log('Status dos Veículos:');
gerenciador.listarVeiculos().forEach((descricao) => console.log(descricao));
console.log('Status dos Motoristas:');
gerenciador.listarMotoristas().forEach((descricao) => console.log(descricao));

console.log('Fim dos testes.');