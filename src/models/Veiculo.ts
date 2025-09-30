export abstract class Veiculo {
    protected modelo: string;
    protected ano: number;
    private ligado: boolean;

    constructor(modelo: string, ano: number) {
        this.modelo = modelo;
        this.ano = ano;
        this.ligado = false;
    }

    public ligar(): void {
        this.ligado = true;
        console.log(`${this.modelo} está ligado.`);
    }

    public desligar(): void {
        this.ligado = false;
        console.log(`${this.modelo} está desligado.`);
    }

    public acelerar(): void {
        console.log(`${this.modelo} está acelerando.`);
    }

    public isLigado(): boolean {
        return this.ligado;
    }

    public abstract obterDescricao(): string;
}
