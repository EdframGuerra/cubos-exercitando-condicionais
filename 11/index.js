//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300_000;
const mesesDecorridos = 12;
const totalJaPagoPeloAluno = 1_000_000;


if (rendaMensalEmCentavos > 200000 && mesesDecorridos < 60 && totalJaPagoPeloAluno <= 1800000) {
    const valorDaParcela = (rendaMensalEmCentavos * 18 / 100) / 100;
    console.log(`O valor a pagar pelo aluno é de R$ ${valorDaParcela}`);
} else {
    console.log("Esse mês o aluno não pagara a parcela");
}