// Capturar evento de submit do formulario
const form = document.querySelector('.formulario');

// Criar uma função para tirar a parte de submit, essa função é uma função anonima
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // se é um click no elemento esse target vai pegar necessariamente esse elemento
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    // Falando sobre isso é o seguinte ele vai tentar converter nossos valres, se não conseguir ele vai da NaN que em javaScript é considerado como falsy, dessa forma o que podemos fazer é criar um if colocando isso como se fosse o inverso e se o peso for invalido mostramos a mensagem
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // COndicional que faz a verificação e adiciona a mensagem de erro
    if (!peso) {
        setResultado('Peso invalido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura invalido', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu imc é ${imc} (${nivelImc})`;

    setResultado(msg, true);
});

function getImc (peso , altura) {
    const imc  = peso / altura ** 2;
    return imc.toFixed(2);
}

function getNivelImc (imc) {
    const nivel = [
        'Abaixo do peso', 
        'Peso normal',
        'Sobrepeso',
        'Obesidade grau 1',
        'Obesidade grau 2',
        'Obesidade grau 3',
    ]

    // Não precisamos de else if porque se a condição for verdadeira a função já para, quando só temos uma linha de bloco podemos colocar ele sem chaves
    if (imc >= 39.9) return nivel[5];

    if (imc >= 34.9) return nivel[4];

    if (imc >= 29.9) return nivel[3];

    if (imc >= 24.9) return nivel[2];
    
    if (imc >= 18.5) return nivel[1];
    
    if (imc < 18.5) return nivel[0];
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';  

    const p = criaP();
    
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }


    p.innerHTML = msg;
    resultado.appendChild(p); // Insera um elemento ou seja um filho dentro desse elemento que seria o p
}

function criaP () {
    const p = document.createElement('p'); // Usado para criar um paragrafo
    return p;
}