const idadeDoAluno = 16;
const possuiResponsavel = false;
const ehEmancipado = (idadeDoAluno >= 18 || possuiResponsavel);

if (ehEmancipado) {
    console.log("Rematrícula realizada com sucesso");

} else {
    console.log("Não é possível fazer a rematrícula");
}