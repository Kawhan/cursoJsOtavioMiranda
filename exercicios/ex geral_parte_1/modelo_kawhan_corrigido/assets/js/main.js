function meuEscopo () {
    const form = document.querySelector('.form');
    

    form.addEventListener('submit', (evento) => {
        const peso = document.querySelector('#input-peso');
        const altura = document.querySelector('#input-altura');
        evento.preventDefault();


        const value_peso = peso.value;
        const value_altura = altura.value;

        if (value_peso === "" && value_altura === "") {
            montaMensagem ("Campos vazios", false);
            return;
        } 
        
        if (!(Number(value_peso)) && !(Number(value_altura))){
            montaMensagem ("Campos invalidos", false);
            return;
        } 
        
        if (Number(value_peso) && !Number(value_altura)){
            montaMensagem ("Campo altura invalido", false);
            return;
        } 
        
        if (Number(value_altura) && !Number(value_peso)) {
            montaMensagem ("Campo peso invalido", false);
            return;
        } 
        
        const imc = calculaIMC(value_peso, value_altura);
        const msg = getImcNivel(imc);

        montaMensagem (msg, true);
    });
}

function getImcNivel (IMC) {
    if (IMC < 18.5) {
        string_texto = "Abaixo do peso";
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        string_texto = "Peso normal";
    } else if (IMC > 24.9 && IMC <= 29.9) {
        string_texto = "Sobrepeso";
    } else if (IMC > 29.9 && IMC <= 34.9) {
        string_texto = "Obesidade grau 1";
    } else if (IMC > 34.9 && IMC <= 39.9) {
        string_texto = "Obesidade grau 2";
    } else if (IMC > 39.9) {
        string_texto = "Obesidade grau 3";
    } 

    return msg = `<p> Seu IMC é ${IMC.toFixed(2)} (${string_texto})</p>`;
}


function calculaIMC(peso, altura) {
    const value_peso = Number(peso);
    const value_altura = Number(altura);

    const IMC = value_peso / Math.pow(value_altura, 2);

    return IMC;
}

function criaP () {
    const p = document.createElement("p");

    return p;
}

function montaMensagem (msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';


    const p = criaP();
    
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }


    p.innerHTML = msg;
    resultado.appendChild(p);
}

meuEscopo ();