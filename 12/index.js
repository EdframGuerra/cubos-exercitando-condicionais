const diaDaSemana = 8;

if (diaDaSemana === 1) {
    console.log("segunda");
} else if (diaDaSemana === 2) {
    console.log("terça");
} else if (diaDaSemana === 3) {
    console.log("quarta");
} else if (diaDaSemana === 4) {
    console.log("quinta");
} else if (diaDaSemana === 5) {
    console.log("sexta");
} else if (diaDaSemana === 6) {
    console.log("sabado");
} else if (diaDaSemana === 7) {
    console.log("domingo");
} else if (diaDaSemana < 1 || diaDaSemana > 7) {
    console.log("O dia da semana informado não é válido");
}
