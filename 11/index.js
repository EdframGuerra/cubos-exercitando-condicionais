//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300_000;
const mesesDecorridos = 12;
const totalJaPagoPeloAluno = 1_000_000;
const valorDaParcela = (rendaMensalEmCentavos * 18 / 100);

if (rendaMensalEmCentavos > 200_000 && mesesDecorridos < 60 || totalJaPagoPeloAluno > 1_799_999) {
    console.log(`O valor a pagar pelo aluno é de R$ ${valorDaParcela / 100}`);
} else {
    console.log("Sem valor a pagar");
}
