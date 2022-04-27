// Faça uma função que receba 2 strings e concate as 2
// Se isso não for feito lance um erro

function concatString(str_1, str_2) {
    if (typeof str_1 !== "string" || typeof str_2 !== "string") {
        throw new TypeError("Tipo de variavel diferente do permitido");
    }

    return str_1 + str_2;
}

// Se você quiser testar as possibilidades apague as que dão error ou adicione novas :)
try {
    console.log(concatString("ola", "mundo"));
    console.log(concatString("ola", "1"));
    console.log(concatString("1", "1"));
    console.log(concatString("ola", 1));
    console.log(concatString(2, "1"));
} catch (err) {
    console.log(err);
}
