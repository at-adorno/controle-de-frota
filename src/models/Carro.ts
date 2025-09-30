import { Veiculo } from './Veiculo';

export class Carro extends Veiculo {
    private numeroPortas: number;

    constructor(modelo: string, ano: number, numeroPortas: number) {
        super(modelo, ano);
        this.numeroPortas = numeroPortas;
    }

    public obterDescricao(): string {
        return `Carro: Modelo ${this.modelo}, Ano ${this.ano}, Portas ${this.numeroPortas}, Ligado: ${this.isLigado()}`;
    }
}
