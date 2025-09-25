class Motorista {
    private nome: string;
    private readonly cpf: string;
    private readonly cnh: string;

    constructor(nome: string, cpf: string, cnh: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.cnh = cnh;
    }

    public getNome(): string {
        return this.nome;
    }

    public getCpf(): string {
        return this.cpf;
    }

    public getCnh(): string {
        return this.cnh;
    }

    public dirigir(): void {
        console.log(`Motorista ${this.nome} está dirigindo.`);
    }
}