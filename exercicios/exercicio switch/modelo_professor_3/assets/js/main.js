const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toString();


function getDiaSemanaTexto (diaSemana) {
    const diasSemana = [
        'domingo',
        'segunda-feira',
        'terça-feira',
        'quarta-feira',
        'quinta-feira',
        'sexta-feira',
        'sabado',
    ];

    return diasSemana[diaSemana];
}

function getNomeMes (numeroMes) {
    const monthNames = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];

    return monthNames[numeroMes];
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (`
        ${nomeDia},
        ${data.getDate()}
        de ${nomeMes}
        de ${data.getFullYear()}
        ${zeroAEsquerda(data.getHours())}`
        + `:${zeroAEsquerda(data.getMinutes())}`
    );
}

function zeroAEsquerda (num) {
    return num>=10 ? num : `0${num}`;
}

h1.innerHTML = criaData(data);

// const h1 = document.querySelector('.container h1');
// const data = new Date();

// const opcoes = {
//     dateStyle: 'full',
//     timeStyle: 'short',
// };

// h1.innerHTML = data.toLocaleString('pt-BR', opcoes);

// h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});