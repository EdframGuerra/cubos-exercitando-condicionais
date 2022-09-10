const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3_000_000;
const tetoLimiteParaPagamentoDoImposto = 2855970
const limiteParaPagamentoDeIpostoEmCentavos = tetoLimiteParaPagamentoDoImposto * 100;


if (aposentada || portadoraDeDoenca) {
    console.log("ISENTA");
} else if (totalDeRendimentos <= limiteParaPagamentoDeIpostoEmCentavos) {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
} else {
    console.log("PEGA LEAO");
}