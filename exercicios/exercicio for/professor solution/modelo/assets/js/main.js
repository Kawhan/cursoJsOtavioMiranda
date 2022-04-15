const elementos = [
    { tag: "p", texto: "Frase 1" },
    { tag: "div", texto: "Frase 2" },
    { tag: "footer", texto: "Frase 3" },
    { tag: "section", texto: "Frase 4" },
];

// Usando querry selector acabamos selecionando apenas uma classe que seria a
// primeira

// Com querrySelectorAll pegamos todas
const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
    // Fazendo pela desestruturação podemos deixar menos verboso
    let { tag, texto } = elementos[i];
    let elemento = document.createElement(tag);

    // Criando um nó de texto que chama dentro do HTML
    let textoNode = document.createTextNode(texto);
    elemento.appendChild(textoNode);

    // Como no caso eu sei que aqui tem somente texto eu posso usar o innerText
    // Traz mais segurança e deixa algo mais semantico
    // elemento.innerText = texto;

    div.appendChild(elemento);
}

container.appendChild(div);
