function meuEscopo() {
    const divTime = document.querySelector(".timeDiv");
    const data = new Date();

    verificaData(data);

    contaData(divTime);
}
function formatData(data) {
    if (!(data instanceof Date)) {
        throw new TypeError("A variavel passada não é do tipo requisitado");
    }

    return data.toLocaleTimeString("pt-BR", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
}

function verificaData(data) {
    if (!(data instanceof Date)) {
        throw new TypeError("A variavel passada não é do tipo requisitado");
    }

    const horaData = data.getHours();

    if (horaData <= 12 && horaData >= 5) {
        document.body.classList.add("timeDia");
    } else if (horaData > 12 && horaData <= 18) {
        document.body.classList.add("timeTarde");
    } else if (horaData > 18 && horaData <= 24) {
        document.body.classList.add("timeNoite");
    } else {
        document.body.classList.add("timeMadrugada");
    }
}

function contaData(divTime) {
    setInterval(function () {
        colocaData(divTime);
    }, 1000);
}

function colocaData(divTime) {
    const data = new Date();

    const dataFormata = formatData(data);

    divTime.innerHTML = dataFormata;
}

meuEscopo();
