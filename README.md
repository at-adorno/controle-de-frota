
# Controle de Frota

Este projeto é um sistema simples para gerenciamento de frota de veículos e motoristas, desenvolvido em TypeScript.

## Estrutura do Projeto

```
src/
  app.ts                # Arquivo principal de execução
  models/
	 Caminhao.ts         # Classe Caminhao
	 Carro.ts            # Classe Carro
	 Motorista.ts        # Classe Motorista
	 Veiculo.ts          # Classe base Veiculo
  services/
	 GerenciadorFrota.ts # Serviço para gerenciar frota
```

## Funcionalidades

- Cadastro de veículos (Carro, Caminhão)
- Cadastro de motoristas
- Associação de veículos e motoristas
- Gerenciamento centralizado via `GerenciadorFrota`

## Como executar

1. Instale as dependências:
	```bash
	npm install
	```
2. Compile o projeto:
	```bash
	npx tsc
	```
3. Execute o arquivo principal:
	```bash
	node dist/app.js
	```

## Exemplo de uso

```typescript
import { Motorista } from './models/Motorista'
import { Carro } from './models/Carro'
import { Caminhao } from './models/Caminhao'
import { GerenciadorFrota } from './services/GerenciadorFrota'

const gerenciador = new GerenciadorFrota();
const carro1 = new Carro('Toyota Corolla', 2020, 4);
const motorista1 = new Motorista('João Silva', '123.456.789-00', 'CNH123456');
gerenciador.adicionarVeiculo(carro1);
gerenciador.adicionarMotorista(motorista1);
```

## Autor

Projeto desenvolvido por at-adorno e diciane38.
