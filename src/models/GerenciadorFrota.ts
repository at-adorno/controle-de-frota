import { Motorista } from './Motorista'
import { Veiculo } from './Veiculo'


export class GerenciadorFrota {
    private veiculos: Veiculo[];
    private motoristas: Motorista[];

    constructor() {
        this.veiculos = [];
        this.motoristas = [];
    }

    public adicionarVeiculo(veiculo: Veiculo): void {
        this.veiculos.push(veiculo);
    }

    public adicionarMotorista(motorista: Motorista): void {
        this.motoristas.push(motorista);
    }

    public listarVeiculos(): string[] {
        return this.veiculos.map((veiculo) => {
            return veiculo.obterDescricao ? veiculo.obterDescricao() : `Veículo: ${veiculo}`;
        });
    }

    public atribuirMotorista(veiculo: Veiculo, motorista: Motorista): void {
        if (this.veiculos.includes(veiculo) && this.motoristas.includes(motorista)) {
            console.log(`Motorista ${motorista.getNome()} atribuído ao veículo ${veiculo.obterDescricao()}.`);
        } else {
            console.log('Veículo ou motorista não encontrado.');
        }
    }
}