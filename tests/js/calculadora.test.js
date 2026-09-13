const { calcularDesconto } = require('../../src/js/calculadora');

describe('Testes unitários - calculadora de desconto (JS)', () => {
  test('Deve aplicar 10% de desconto corretamente', () => {
    const resultado = calcularDesconto(100, 10);
    expect(resultado).toBe(90);
  });

  test('Deve lançar erro ao passar valor menor ou igual a zero', () => {
    expect(() => calcularDesconto(0, 10)).toThrow('Valores inválidos para cálculo de desconto');
  });
});