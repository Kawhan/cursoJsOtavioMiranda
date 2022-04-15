function escopo() {
    const section = document.querySelector(".container");

    const elementos = [
        { tag: "p", texto: "Frase 1" },
        { tag: "div", texto: "Frase 2" },
        { tag: "footer", texto: "Frase 3" },
        { tag: "section", texto: "Frase 4" },
    ];

    section.appendChild(montaEstrutura(elementos));
}

function montaEstrutura(elementos) {
    const divCentral = createDiv("");

    for (let i = 0; i < elementos.length; i++) {
        if (elementos[i].tag === "p") {
            const variavelP = createP(elementos[i].texto);
            divCentral.appendChild(variavelP);
        } else if (elementos[i].tag === "div") {
            const variavelDiv = createDiv(elementos[i].texto);
            divCentral.appendChild(variavelDiv);
        } else if (elementos[i].tag === "footer") {
            const variavelFooter = createFooter(elementos[i].texto);
            divCentral.appendChild(variavelFooter);
        } else if (elementos[i].tag === "section") {
            const variavelSection = createSection(elementos[i].texto);
            divCentral.appendChild(variavelSection);
        }
    }

    return divCentral;
}

function createP(msg) {
    const p = document.createElement("p");
    p.innerHTML = msg;

    return p;
}

function createDiv(msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;

    return div;
}

function createSection(msg) {
    const section = document.createElement("section");
    section.innerHTML = msg;

    return section;
}

function createFooter(msg) {
    const footer = document.createElement("footer");
    footer.innerHTML = msg;

    return footer;
}

escopo();
