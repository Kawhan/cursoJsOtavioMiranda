function getDateFormat(p) {
    const data = new Date();
    const diaSemanaNumber = data.getDay() - 1;
    const diaSemanaText = diaSemanaTextoFormat(data);
    const mes = data.getMonth();
    const mesFormtText = getMonthName(mes);
    const ano = data.getFullYear();
    const minutes = zeroAEsquerda(data.getMinutes());
    const hours = zeroAEsquerda(data.getHours());

    const montaData = (
        diaSemanaText,
        diaSemanaNumber,
        mes,
        ano,
        minutes,
        hours
    ) => {
        return `${diaSemanaText}, ${diaSemanaNumber} de ${mes} de ${ano} ${hours}:${minutes}`;
    };

    const dataMontada = montaData(
        diaSemanaText,
        diaSemanaNumber,
        mesFormtText,
        ano,
        minutes,
        hours
    );

    

    return dataMontada;
}


function diaSemanaTextoFormat(data) {
    let diaSemanaTexto = "";
    let diaSemana = data.getDay();

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = "domingo";
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = "Segunda-Feira";
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = "Terça-Feira";
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = "Quarta-Feira";
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = "Quinta-Feira";
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = "Sexta-Feira";
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = "Sabado";
            return diaSemanaTexto;
        default:
            diaSemanaTexto = "Valor invalido";
            return diaSemanaTexto;
    }
}

function getMonthName(mes) {
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

    return monthNames[mes];
}

function zeroAEsquerda (num) {
    return num>=10 ? num : `0${num}`;
}

function meuEscopo() {
    const form = document.querySelector(".container");
    const p = form.querySelector(".title");

    const texto = getDateFormat(p);
    p.innerHTML = texto;
}

meuEscopo();
