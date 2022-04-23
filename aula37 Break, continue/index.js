// Quando você quer pular o elemento
// O break e continue funciona em todos os laços
// Continue significa continua para proxima iteração
// Break pode poupar recursos do servidor ou do cliente

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    // Ele vai verificar se o numero é igual a 2, se for igual a 2 ele pula para proxima iteração do laço
    // temos de colocar sempre o código que queremos executar a baixo da palavra continue
    // Eu posso ter mais de um continue dentro do mesmo laço
    if (numero === 2 || numero === 5) {
        console.log("pulei");
        continue;
    }

    if (numero === 7) {
        console.log("Achei");
        break;
    }

    console.log(numero);
}
console.log("\n==========================================\n");

// No caso do while quando colocamos continue ele cria meio que um laço infinito]
// Já que na proxima iteração o laço para proxima execução e para de fazer aquilo que tinha feito antes
// Para evitar isso podemos fazer o seguinte

let i = 0;
while (i < numeros.length) {
    // colocando os i++ antes dos breaks ou continues temos um laço seguro
    let numero = numeros[i];

    if (numero === 2 || numero === 5) {
        console.log("pulei");
        i++;
        continue;
    }

    if (numero === 7) {
        console.log("Achei");
        i++;
        break;
    }

    console.log(numero);
    i++;
}

console.log("\n==========================================\n");

for (let i in numeros) {
    const numero = numeros[i];

    if (numero === 2 || numero === 5) {
        console.log("pulei");
        continue;
    }

    if (numero === 7) {
        console.log("Achei");
        break;
    }

    console.log(numero);
}

console.log("\n==========================================\n");

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];

    if (numero === 2 || numero === 5) {
        console.log("pulei");
        continue;
    }

    if (numero === 7) {
        console.log("Achei");
        break;
    }

    console.log(numero);
}

console.log("\n==========================================\n");

i = 0;

do {
    const numero = numeros[i];

    if (numero === 2 || numero === 5) {
        console.log("pulei");
        i++;
        continue;
    }

    if (numero === 7) {
        console.log("Achei");
        i++;
        break;
    }

    console.log(numero);
    i++;
} while (i < numeros.length);
