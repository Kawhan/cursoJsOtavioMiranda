// Funções executam ações
// Tudo que esta dentro da função esta protegido, dessa maneira não consigo mecher no que esta dentro dela.
// Parametros é o que é passado para nossa função e fica armazenado dentro dos ()
// Por padrão no js a função vai retornar undefined se você não especificar o que quer que ela retorne dentro da função

function saudacao (nome) {// Quando criada a função dessa maneira não precisa colocar ";" no final
    console.log(`Bom dia ${nome}!`);


}



saudacao("Kawhan"); // Chamada da função
saudacao("Luiz");
saudacao("Felipe");