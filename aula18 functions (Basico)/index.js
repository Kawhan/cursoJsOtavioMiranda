// Funções executam ações

// Tudo que esta dentro da função esta protegido, dessa maneira não consigo mecher no que esta dentro dela.
// Parametros é o que é passado para nossa função e fica armazenado dentro dos ()

// Por padrão no js a função vai retornar undefined se você não especificar o que quer que ela retorne dentro da função

// Funções são execultadas podem ou não retornar valores, podem ou não receber parametros e fazem alguma coisa

// Quando a engineer do javascript encontra o return na nossa função, nada mais vai ser executado

// Se você quiser colocar valores padrões nas nossas funções do javascript, é simples nos (x = 1, y = 1), fazendo dessa forma podemos manda valores para nossa função, mesmo não passando antes

// Não é interessante criar uma função que faz varias coisas, é melhor criar varias funções pequenas que fazem apenas uma coisa especifica

function saudacao (nome) {// Quando criada a função dessa maneira não precisa colocar ";" no final
    console.log(`Bom dia ${nome}!`);


}

function soma (num1 = 1, num2 = 2) {
    const resultado = num1 + num2;
    return resultado;
}


function saudacao2 (nome) {
    return `Bom dia ${nome}`
}


saudacao("Kawhan"); // Chamada da função
saudacao("Luiz");
saudacao("Felipe");

const variavel = saudacao2("kawhan");

console.log(variavel)

console.log(soma(1, 2));

console.log(soma(4));


// Outro modo de fazer função colocando ela dentro de uma variavel também chamada de função anonima

const raiz =  function (n) {
    return n ** 0.5;
}; // Quando estamos indicando que nossa função é de fato anonima precisamos encerar com ;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

// Também temos a maneira que é descrita como arrow function

// Essas arrow function vinheram para simplificar a vida do programador

const raiz2 =  (n) => {
    return n ** 0.5;
};

// Quando só tenho uma linha na minha função posso eliminar nossas chaves, eliminando nosso return e quando só temos um parametro na nossa função também podemos eliminar os ();

const raiz_real = n => n ** 0.5;

console.log(raiz_real(9));
console.log(raiz_real(16));
console.log(raiz_real(25));