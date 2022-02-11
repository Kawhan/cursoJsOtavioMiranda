const numero = Number(prompt('Digite um número: '));

/*
    Raiz quadrada é: 3.9140771581561853.

    15.32 é inteiro: false

    é NaN: false

    Arredondado para baixo: 15

    Arredondado para cima: 16

    Com duas casas decimais: 15.32

 */

const numeroTitulo = document.getElementById('numero-titulo');

const texto = window.document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = ''; // Limparando nosso texto que tem por la
texto.innerHTML += `<p>Raiz quadrada é: ${numero ** 0.5}.</p>`
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p>é NaN: ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`