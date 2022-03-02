// A função date é uma função construtora como chamamos, dessa forma para utilizarmos o objeto date temos que usar a palavra new e o nome da função, uma função construtora sempre vai começar cor uma letra maiuscula

//Valor em base ao número de milisegundos desde a data de primeiro de janeiro de 1970, que é considerado o marco 0 da Unix

// const tresHoras = 60*60*3* 1000; // tres horas convertendo de milisigundos
// const umDia = 60*60*24 * 1000; // 24 horas convertendo de milisigundos
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970 TImestamp unix ou época unix

// Ano, mes, dia , hora, minutos , segundos e milesimos de segundo
// Se eu não passo um valor de referencia para o nosso date ele omite o valor e coloca o mais arrendondado possivel
// Os meses começa do 0
// const data = new Date(2019, 3, 20, 15, 13, 27, 500);


// Outro formato seria como sendo string

// Ano, mes, dia , hora, minutos , segundos
const data = new Date('2019-04-20 20:20:59');
console.log(data.toString());

// Obtendo dados da data
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); // Mes começa do 0
console.log('Ano', data.getFullYear());
console.log('hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Mili Segundos', data.getMilliseconds());
console.log('Número do dia da semana', data.getDay()); // 0 é domingo e 6 é sabado
console.log(Date.now()); // Contagem de milésimo de segundos do marco 0 até agora

// Criando uma função que formata nossa data
function formataData (data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());
    
    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

// function para colocar o 0 a esquerda
function zeroAEsquerda (num) {
    return num>=10 ? num : `0${num}`;
}

const data_2 = new Date();
const dataBrasil = formataData(data_2);
console.log(dataBrasil);