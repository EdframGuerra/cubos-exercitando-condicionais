const jogada1 = 5;
const jogada2 = 3;

if (jogada1 && jogada2) {
    const soma = jogada1 + jogada2;
    const numero = soma;

    {
        if (numero % 2 === 0) {
            console.log("par");
        } else {
            console.log("impar");
        }
    }
}