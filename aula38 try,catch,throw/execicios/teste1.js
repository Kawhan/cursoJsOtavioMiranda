// faça uma função que receba um array com 10 posições e retorne a soma deles se for somente numeros
// se qualquer disso não for atendido emita um erro

function sumArray(arr) {
    let sum = 0;

    if (arr.length > 10) {
        throw new lengthError("Seu tamanho passou do limite exigido!");
    }

    for (num of arr) {
        if (typeof num !== "number") {
            throw new TypeError("O array deve conter somente números");
        }
        sum += num;
    }

    return sum;
}

// Se você quiser testar as possibilidades apague as que dão error ou adicione novas :)
try {
    console.log(sumArray([3, 2, 1, 0, -1]));
    console.log(sumArray([3, 2, 1, 0, "1"]));
    console.log(sumArray(["1", "2", "3", "4"]));
    console.log(sumArray([]));
} catch (err) {
    console.log(err);
}
