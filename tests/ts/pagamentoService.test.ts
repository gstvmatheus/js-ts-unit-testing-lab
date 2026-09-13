import { PagamentoService, ApiPagamento } from '../../src/ts/pagamentoService';

describe('Testes Unitários com Mock - PagamentoService', () => {
  let mockApi: ApiPagamento;
  let pagamentoService: PagamentoService;

  beforeEach(() => {
    mockApi = {
      processar: jest.fn(),
    };
    pagamentoService = new PagamentoService(mockApi);
  });

  test('Deve aprovar o pagamento quando a API retornar true', () => {
    jest.spyOn(mockApi, 'processar').mockReturnValue(true);

    const resultado = pagamentoService.realizarCompra(150);

    expect(resultado).toBe('PAGAMENTO_APROVADO');
    expect(mockApi.processar).toHaveBeenCalledWith(150);
    expect(mockApi.processar).toHaveBeenCalledTimes(1);
  });

  test('Deve recusar o pagamento quando a API retornar false', () => {
    jest.spyOn(mockApi, 'processar').mockReturnValue(false);

    const resultado = pagamentoService.realizarCompra(150);

    expect(resultado).toBe('PAGAMENTO_RECUSADO');
    expect(mockApi.processar).toHaveBeenCalledWith(150);
  });

  test('Deve lançar erro ao passar valor menor ou igual a zero', () => {
    expect(() => pagamentoService.realizarCompra(0)).toThrow('Valor inválido para pagamento');
  });
});