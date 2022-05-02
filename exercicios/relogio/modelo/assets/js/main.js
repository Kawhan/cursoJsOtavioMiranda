function meuEscopo() {
    const relogio = document.querySelector(".relogio");
    const buttoStart = document.querySelector(".iniciar");
    const buttoStop = document.querySelector(".parar");
    const buttoReset = document.querySelector(".zerar");

    let timerSet;

    buttoStart.addEventListener("click", function (event) {
        relogio.classList.remove("redText");
        const data = new Date("01-01-1970 00:00:00");
        let numeroSegundos = 0;
        let numMinutos = 0;
        let numHoras = 0;
        let msgSegundos,
            msgMinutos = "00",
            msgHoras = "00";

        timerSet = setInterval(function () {
            let timerSegundos = data.getSeconds() + numeroSegundos;
            let timerMinutes = data.getMinutes() + numMinutos;
            let timerHoras = data.getHours() + numHoras;

            if (timerSegundos <= 60) {
                numeroSegundos++;
                msgSegundos = adicionaSegundos(timerSegundos);
            }

            if (timerSegundos > 60) {
                timerSegundos = 0;
                numeroSegundos = 0;

                numMinutos++;
                msgSegundos = adicionaSegundos(timerSegundos);
                timerMinutes = data.getMinutes() + numMinutos;
                msgMinutos = adicionaMinutos(timerMinutes);
            }

            if (timerMinutes > 60) {
                timerMinutes = 0;
                numMinutos = 0;
                numeroSegundos = 0;
                timerSegundos = 0;

                numHoras++;
                timerHoras = data.getHours() + numHoras;
                msgMinutos = adicionaMinutos(timerMinutes);
                msgHoras = adicionaHora(timerHoras);
            }

            relogio.innerHTML = `${msgHoras}:${msgMinutos}:${msgSegundos}`;
        }, 1000);
    });

    buttoStop.addEventListener("click", function (event) {
        setTimeout(function () {
            clearInterval(timerSet);
        }, 1);

        relogio.classList.add("redText");
    });

    buttoReset.addEventListener("click", function (event) {
        setTimeout(function () {
            clearInterval(timerSet);
        }, 1);

        relogio.innerHTML = `00:00:00`;
        relogio.classList.remove("redText");
    });
}

function adicionaSegundos(numeroSegundos) {
    return `${zeroAEsquerda(numeroSegundos)}`;
}

function adicionaMinutos(numeroMinutos) {
    return `${zeroAEsquerda(numeroMinutos)}`;
}

function adicionaHora(numeroHoras) {
    return `${zeroAEsquerda(numeroHoras)}`;
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}
meuEscopo();
