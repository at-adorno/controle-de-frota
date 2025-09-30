import { Veiculo } from './Veiculo';

export class Caminhao extends Veiculo {
    private capacidadeCarga: number;

    constructor(modelo: string, ano: number, capacidadeCarga: number) {
        super(modelo, ano);
        this.capacidadeCarga = capacidadeCarga;
    }

    public obterDescricao(): string {
        return `Caminhão: Modelo ${this.modelo}, Ano ${this.ano}, Capacidade de carga: ${this.capacidadeCarga}kg, Ligado: ${this.isLigado()}`;
    }
}
