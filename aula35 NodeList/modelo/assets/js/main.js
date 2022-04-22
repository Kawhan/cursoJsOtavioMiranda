const paragrafos = document.querySelector(".paragrafos");

// Selecionando da nossa div todos os paragrafos
const ps = paragrafos.querySelectorAll("p");
// Isso vai nos retornar uma NodeList
// que não é um array porém como ele se comporta de maneira parecida
// podemos utilizar as coisas dos arrays

// Como pegar os estilos computados do CSS
// Função do browser não funciona no NodeJS
const estilos_body = getComputedStyle(document.body); // Contem todos os estilos computados no browser

// Background color do nosso body
const background_color_body = estilos_body.backgroundColor;

for (let p of ps) {
    p.style.backgroundColor = background_color_body;
    p.style.color = "white";
}
