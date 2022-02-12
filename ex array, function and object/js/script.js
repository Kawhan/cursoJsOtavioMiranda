// Tudo que ocorre no navegador é considerado um evento
// Escopo global quer dizer que essa variavel ou valor esta em um lugar onde todo mundo esta
// Podemos encontrar problemas quando criamos variaveis em escopo global, porque pode muitas vezes conflitar com valores, podemos proteger essas variaveis usando o escopo de uma função
// IIFE uma função que é auto invocada e execultada ao mesmo tempo

function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    // Podemos colocar um espião para que possa observar os eventos, onsubmit vem na questão de submeter os valores
    // Sempre que utilizar o "=" precisamos utilizar o ponto e virgula

    // Explicando o que esta acontecendo, quando clickamos no nosso submit a pagina é atualizada e perdemos todo o conteudo que temos na nossa página, podemos tirar esse evento para que possamos agir de maneira normal
    // form.onsubmit = function (evento) {
    //     evento.preventDefault(); // Nesse evento você previne o que é para acontecer como padrão

    //     alert(1);
    //     console.log('Foi enviado');
    // };

    // Quando podemos verificar em um local menor ou seja em vez de pesquisar dentro do document, podemos pesquisar dentro do form que foi selecionado e se o elemento estiver lá dentro fica de forma melhor
    function recebeEventoForm (evento) {
        evento.preventDefault();// Nesse evento você previne o que é para acontecer como padrão

        // Selecionando os elementos e seus valores apartir da nossa classe
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        // Sempre que eu precisar do valor eu vou usar o value nome.value

        // Criando um objeto para salvar nossos dados apartir dos valores
        pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        };

        // Colocando para dentro do nosso array pessoas, o valor salvo no nosso objeto pessoa
        pessoas.push(pessoa);

        console.log(pessoas);

        // Outra maneira de fazer o exercicio
        // pessoas.push({
        //     nome: nome.value,
        //     sobrenome: sobrenome.value,
        //     peso: peso.value,
        //     altura: altura.value
        // });

        resultado.innerHTML += `
            <p>
                ${nome.value} 
                ${sobrenome.value} 
                ${peso.value} 
                ${altura.value}
            </p>
        `;
    }

    // Quando utilizamos o addEventListener não precisamos do on do evento
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();