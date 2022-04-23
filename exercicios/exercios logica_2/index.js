// Escreva uma função chamada ePaisagem que
// recebe dois argumentos, largura e altura
// de uma imagem (number)
// Retorne true se a imagem estiver no modo paisagem ou se estiver no modo quadrado

// Minha resposta

const paisagem = (largura, altura) => (largura > altura ? true : false);

function verificaImagem(largura, altura) {
    return largura >= altura ? true : false;
}

const verificaImagem2 = function (largura, altura) {
    return largura >= altura ? true : false;
};

console.log(paisagem(1920, 1080));
console.log(verificaImagem(1920, 1080));
console.log(verificaImagem2(1920, 1080));

console.log("================================================");

console.log(paisagem(1080, 1920));
console.log(verificaImagem(1080, 1920));
console.log(verificaImagem2(1080, 1920));

// Resposta do professor

console.log("================================================");
function ePaisagem(largura, altura) {
    return largura >= altura;
}

console.log(ePaisagem(1920, 1080));
console.log(ePaisagem(1080, 1920));
console.log(ePaisagem(1920, 1920));

console.log("================================================");

const arrowPaisagem = (largura, altura) => largura >= altura;
console.log(arrowPaisagem(1920, 1080));
console.log(arrowPaisagem(1080, 1920));
console.log(arrowPaisagem(1920, 1920));
