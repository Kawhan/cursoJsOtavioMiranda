const numero = 10;

// IF e o else, um depende do outro
// Se (numero >= 0 && numero <= 5) ocrrer, faça isso aqui {codigo}
// Se não faça isso aqui {o código}
// blocos dentro de código utilizam ";" mas no if não se utiliza

if (numero >= 0 && numero <= 5) {
    console.log("Seu número esta entre 0 e 5");
} else {
    console.log("Seu número não esta entre 0 e 5");
}

// Else depende que nada seja executado antes para que seja chamado
// Se ele achar uma condição verdadeira de else if ele ignora todos os outros que vinherem depois, dessa forma o else if vai ser executado somente quando os outros acima não forem
// ele vai fazer a checagem de cima para baixo começando da esquerda para direita
// se eu preciso de alguma condição independente eu crio um if e se eu preciso de mais condições ligadas eu crio um else if

const numero2 = 50;

if (numero2 >= 0 && numero2 <= 5) {
    console.log("Seu número esta entre 0 e 5");
}  else if (numero >= 6 && numero2 <= 8) {
    console.log("Seu número esta entre 6 e 8");
} else if (numero >= 9 && numero2 <= 11) {
    console.log("Seu número esta entre 9 e 11");
} else {
    console.log("Seu número não esta entre 0 e 11");
}