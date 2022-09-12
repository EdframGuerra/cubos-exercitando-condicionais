const valorDoProduto = 100_000;
const quantidadeDoParcelamento = 10;
const valorPago = 300;
const saldoDevedor = (valorDoProduto / 100) - valorPago;
const valorDasParcelas = (valorDoProduto / 100) / quantidadeDoParcelamento;
const parcelasAPagar = saldoDevedor / valorDasParcelas;

console.log(`Faltam ${parcelasAPagar} parcelas que corresponde R$ ${saldoDevedor}`);