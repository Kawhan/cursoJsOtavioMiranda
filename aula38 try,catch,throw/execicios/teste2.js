// Faça uma função que receba um array verifica se só contem textos
// se isso não for atendido lance um erro

function verifyArray(arr) {
    for (word of arr) {
        if (typeof word !== "string") {
            throw new TypeError("A string deve receber somente textos");
        }
    }

    return 1;
}

// Se você quiser testar as possibilidades apague as que dão error ou adicione novas :)
try {
    console.log(verifyArray(["mochila", "array", "chave"]));
    console.log(verifyArray([1, 2, 3, 4, 5, 6, 7]));
    console.log(verifyArray(["1", 2, 3, 4]));
} catch (err) {
    console.log(err);
}
