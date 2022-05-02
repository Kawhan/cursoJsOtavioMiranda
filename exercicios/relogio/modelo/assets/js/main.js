function meuEscopo() {
    const relogio = document.querySelector(".relogio");
    const buttoStart = document.querySelector(".iniciar");
    const buttoStop = document.querySelector(".parar");
    const buttoReset = document.querySelector(".zerar");

    buttoStart.addEventListener("click", function (event) {
        const data = new Date("01-01-1970 00:00:00");
        let num = 0;
        let num2 = 0;

        setInterval(function () {
            let numeroSeconds;
            num++;
            let timer = data.getSeconds() + num;
            let timerMinutes = data.getMinutes() + num2;
            if (timer < 10) {
                numeroSeconds = `0${timerMinutes}:0${timer}`;
            } else if (timer >= 10 && timer <= 60) {
                numeroSeconds = `00:${timerMinutes}:${timer}`;
            } else {
                timer = 0;
                num = 0;
                num2++;
                timerMinutes = data.getMinutes() + num2;
                numeroSeconds = `00:${timerMinutes}:${timer}`;
            }

            relogio.innerHTML = numeroSeconds;
        }, 1000);
    });
}

function adicionaMinutos(num2) {
    console.log(num2);
}

meuEscopo();
