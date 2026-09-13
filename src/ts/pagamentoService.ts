export interface ApiPagamento {
  processar(valor: number): boolean;
}

export class PagamentoService {
  constructor(private api: ApiPagamento) {}

  public realizarCompra(valor: number): string {
    if (valor <= 0) {
      throw new Error('Valor inválido para pagamento');
    }

    const sucesso = this.api.processar(valor);

    if (!sucesso) {
      return 'PAGAMENTO_RECUSADO';
    }

    return 'PAGAMENTO_APROVADO';
  }
}