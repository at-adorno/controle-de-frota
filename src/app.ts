import { Motorista } from './models/Motorista'
import { Veiculo } from './models/Veiculo'
import { GerenciadorFrota } from './models/GerenciadorFrota'

const gerenciador = new GerenciadorFrota();

//criando veiculos
import { Carro } from './models/Carro'
import { Caminhao } from './models/Caminhao'

const carro1 = new Carro('Toyota Corolla', 2020, 4);
const carro2 = new Carro('Honda Civic', 2019, 4);
const caminhao1 = new Caminhao('Volvo FH', 2018, 20000);

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
gerenciador.atribuirMotorista(new Carro('Ford', 2021, 4), motorista1);

//Status dos veiculos e motoristas
console.log('Status dos Veículos:');
gerenciador.listarVeiculos().forEach((descricao) => console.log(descricao));
console.log('Status dos Motoristas:');
gerenciador.listarMotoristas().forEach((descricao: string) => console.log(descricao));

console.log('Fim dos testes.');