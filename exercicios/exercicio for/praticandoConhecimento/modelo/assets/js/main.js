const ELEMENTOS = [
    { mercado: "São jõao", mercadoria: "caixa" },
    { mercado: "São jõao", mercadoria: "caderno" },
    { mercado: "Boa vista", mercadoria: "mouse" },
    { mercado: "Boa vista", mercadoria: "peixe" },
];

let elementosCopy = [];
let mercadoriaReal = [];

const meuObj = new Object();

let temp = "";

for (let i = 0; i < ELEMENTOS.length; i++) {
    let { mercado, mercadoria } = ELEMENTOS[i];

    if (mercado !== temp) {
        temp = mercado;
        mercadoriaReal.push(mercadoria);
        meuObj[temp] = mercadoriaReal;
    } else {
        temp = mercado;
        mercadoriaReal.push(mercadoria);
        meuObj[temp] = mercadoriaReal;
    }
}
elementosCopy.push(meuObj);

console.log(elementosCopy);
