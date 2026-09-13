function calcularDesconto(valor, percentual) {
    if (valor <= 0 || percentual < 0) {
        throw new Error('Valores inválidos para cálculo de desconto');
    }
    return valor - (valor * (percentual / 100));
}

module.exports = { calcularDesconto };