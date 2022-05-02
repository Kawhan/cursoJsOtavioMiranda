function meuEscopo() {
    const relogio = document.querySelector(".relogio");
    const buttoStart = document.querySelector(".iniciar");
    const buttoStop = document.querySelector(".parar");
    const buttoReset = document.querySelector(".zerar");
    let numeroSegundos = 0;
    let numMinutos = 0;
    let numHoras = 0;
    let msgSegundos,
        msgMinutos = "00",
        msgHoras = "00";
    let timerSet;
    let value = false;

    data = new Date(`01-01-1970 ${msgHoras}:${msgMinutos}:${msgHoras}`);

    buttoStart.addEventListener("click", (event) => {
        relogio.classList.remove("redText");

        if (value === false) {
            value = true;
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
        }
    });

    buttoStop.addEventListener("click", function (event) {
        setTimeout(function () {
            clearInterval(timerSet);
        }, 1);

        value = false;
        relogio.classList.add("redText");
    });

    buttoReset.addEventListener("click", function (event) {
        setTimeout(function () {
            clearInterval(timerSet);
        }, 1);

        numeroSegundos = 0;
        numMinutos = 0;
        numHoras = 0;
        msgSegundos, (msgMinutos = "00"), (msgHoras = "00");

        value = false;
        data = new Date(`01-01-1970 ${msgHoras}:${msgMinutos}:${msgHoras}`);
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
