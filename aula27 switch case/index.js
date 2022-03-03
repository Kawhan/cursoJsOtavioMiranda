const data = new Date("1987-04-20 00:00:00");
const diaSemana = data.getDay();
let diaSemanaTexto;

// if (diaSemana === 0 ) {
//     diaSemanaTexto = "domingo";
// } else if (diaSemana === 1) {
//     diaSemanaTexto = "Segunda";
// } else if (diaSemana === 2) {
//     diaSemanaTexto = "Terça";
// } else if (diaSemana === 3) {
//     diaSemanaTexto = "Quarta";
// } else if (diaSemana === 4) {
//     diaSemanaTexto = "Quinta";
// } else if (diaSemana === 5) {
//     diaSemanaTexto = "Sexta";
// } else if (diaSemana === 6) {
//     diaSemanaTexto = "Sabado";
// } else {
//     diaSemanaTexto = "Dia invalido";
// }

// Condições usando testes de valores em uma mesma variavel é o melhor caso para se usar switch case
// Quando terminar de execultar o código você precisa passar para nossa variável um breka para que ela possa parar o que esta editando

//      Variavel
switch (diaSemana) {
    case 0:
        diaSemanaTexto = "domingo";
        break;
    case 1:
        diaSemanaTexto = "Segunda";
        break;
    case 2:
        diaSemanaTexto = "Terça";
        break;
    case 3:
        diaSemanaTexto = "Quarta";
        break;
    case 4:
        diaSemanaTexto = "Quinta";
        break;
    case 5:
        diaSemanaTexto = "Sexta";
        break;
    case 6:
        diaSemanaTexto = "Sabado";
        break;
    default:
        diaSemanaTexto = "Valor invalido";
        break;
}


// Eu poderia criar uma função que ficasse responsavel por colocar esses retornos que funcionassem como o break em si
function getDiaSemanaTexto (diaSemana) {
    let diaSemanaTexto_2;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto_2 = "domingo";
            return diaSemanaTexto_2;
        case 1:
            diaSemanaTexto_2 = "Segunda";
            return diaSemanaTexto_2;
        case 2:
            diaSemanaTexto_2 = "Terça";
            return diaSemanaTexto_2;
        case 3:
            diaSemanaTexto_2 = "Quarta";
            return diaSemanaTexto_2;
        case 4:
            diaSemanaTexto_2 = "Quinta";
            return diaSemanaTexto_2;
        case 5:
            diaSemanaTexto_2 = "Sexta";
            return diaSemanaTexto_2;
        case 6:
            diaSemanaTexto_2 = "Sabado";
            return diaSemanaTexto_2;
        default:
            diaSemanaTexto_2 = "Valor invalido";
            return diaSemanaTexto_2;
    }
}

const diaSemanaTexto_2 = getDiaSemanaTexto(diaSemana);


console.log(diaSemanaTexto_2);
console.log(diaSemana, diaSemanaTexto);
