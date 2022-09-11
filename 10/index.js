const caractere = "E";

const vogalMaiuscula = "A E I O U";
const vogalMinuscula = "a e i o u"
const consoantes = "B C D F G H I J K L M N P Q R S T V X W Y Z";
const consoanteMinuscula = " b c d f g h i j k l m n p q r s t v x w y z "
const numeros = "1 2 3 4 5 6 7 8 9 0";

if (caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U") {
    console.log("Vogal Maiuscula");

} else if (caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {
    console.log("Vogal Minucula");

} else if (caractere === "1" || caractere === "2" || caractere === "3" || caractere === "4" || caractere === "5" || caractere === "6" || caractere === "7" || caractere === "8" || caractere === "9" || caractere === "0") {
    console.log("numeral");

} else {
    console.log("Consoante")
}