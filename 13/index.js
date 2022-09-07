const tipoDePagamento = "credito";
const valorDoProduto = 13000;

if (tipoDePagamento === "credito") {
    const valorFinal = valorDoProduto - (valorDoProduto * 5 / 100);

    console.log(`o valor final é R$ ${(valorFinal / 100).toFixed(2)}`);

} else if (tipoDePagamento === "cheque") {
    const valorFinal = valorDoProduto - (valorDoProduto * 3 / 100);

    console.log(`o valor final é R$ ${(valorFinal / 100).toFixed(2)}`);

} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
    const valorFinal = valorDoProduto - (valorDoProduto * 10 / 100);

    console.log(`o valor final é R$ ${(valorFinal / 100).toFixed(2)}`);
}

//cheque	3%
//debito ou dinheiro	10%
//Faça um programa que verifica o tipo de desconto,
// calcule o valor do produto com o desconto e imprima o
//resultado. O valor final do produto após o desconto pode ser
//encontrado com a fórmula:
// valorFinal = valorDoProduto - (valorDoProduto \* desconto)$$