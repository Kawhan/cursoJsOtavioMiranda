function meuEscopo () {
    const peso = document.querySelector('#input-peso');
    const altura = document.querySelector('#input-altura');
    const resultado = document.querySelector('.resultado');
    const form = document.querySelector('.form');
    

    function verificaCampo(evento) {
        let valor = false;
        evento.preventDefault();
        const value_peso = peso.value;
        const value_altura = altura.value;

        if (value_peso === "" && value_altura === "") {
            resultado.innerHTML = "Campos vazios";
        } else if (!(Number(value_peso)) && !(Number(value_altura))){
            resultado.innerHTML = "Campos invalidos";
        } else if (Number(value_peso) && !Number(value_altura)){
            resultado.innerHTML = "Campo altura invalido";
        } else if (Number(value_altura) && !Number(value_peso)) {
            resultado.innerHTML = "Campo peso invalido";
        } else {
            calculaIMC();
        }
    }

    function calculaIMC() {
        const value_peso = Number(peso.value);
        const value_altura = Number(altura.value);

        let string_texto = "";
        const IMC = value_peso / Math.pow(value_altura, 2);


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



        resultado.innerHTML = `<p> Seu IMC é ${IMC.toFixed(1)} ${string_texto}</p>`;
    }

    resultado.innerHTML = '';
    form.addEventListener('submit', verificaCampo);
}

meuEscopo ();