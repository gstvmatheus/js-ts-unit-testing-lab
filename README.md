<h1 align="center" style="font-weight: bold;">JS & TS Unit Testing Lab</h1>
<h3 align="center" style="font-weight: bold;">Laboratório prático de testes unitários utilizando Jest, JavaScript e TypeScript, cobrindo validação de regras de negócio, tratamento de exceções, Mocks/Spies e relatórios de cobertura de código.</h3>

<hr>

### Tecnologias:
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

### Destaques:
* **Suíte em JS e TS:** validação de módulos em JavaScript puro e classes tipadas em TypeScript.
* **Mocks e Spies:** isolamento de serviços e APIs externas utilizando `jest.fn()` e `jest.spyOn()`.
* **Tratamento de exceções:** cenários cobrindo fluxos de falha e disparos de exceções (`toThrow`).
* **Code coverage:** relatórios completos de cobertura de código gerados pelo Jest.

### Estrutura do projeto:

```text
js-ts-unit-testing-lab/
├── src/
│   ├── js/
│   │   └── calculadora.js           # Funções e lógica em JavaScript
│   └── ts/
│       ├── pagamentoService.ts     # Serviço tipado com dependências externas
│       └── usuarioService.ts       # Regras de negócio de cadastro e busca
├── tests/
│   ├── js/
│   │   └── calculadora.test.js      # Testes unitários para JS
│   └── ts/
│       ├── pagamentoService.test.ts # Testes de Mocking e Spies
│       └── usuarioService.test.ts   # Testes de regras de negócio em TS
├── .gitignore
├── jest.config.js
├── package.json
├── README.md
└── tsconfig.json

```

---

### Execução dos testes:

1. Instalar as dependências do projeto:

```bash
npm install --legacy-peer-deps

```

2. Executar a suíte de testes unitários:

```bash
npm test

```

3. Gerar o relatório de cobertura de código (*Code Coverage*):

```bash
npm run test:coverage

```
