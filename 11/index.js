//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300_000;
const mesesDecorridos = 12;
const totalJaPagoPeloAluno = 1_000_000;
const valorDaParcela = ((rendaMensalEmCentavos / 100) * 18 / 100);

if (rendaMensalEmCentavos <= 200_000) {
    console.log("O aluno não poassui renda minima para pagar parcela");

} else if (mesesDecorridos > 59 || totalJaPagoPeloAluno > 1_799_999) {
    console.log("O aluno já quitou a divida");
} else {
    console.log(`O valor a pagar pelo aluno é de R$ ${valorDaParcela}`);
}

