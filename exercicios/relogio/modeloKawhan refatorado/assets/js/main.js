function generateTimeFromSeconds(seconds) {
    const data = new Date(seconds * 1000);

    return data.toLocaleTimeString("pt-BR", {
        hour12: false,
        timeZone: "GMT",
    });
}

function meuEscopo() {
    const relogio = document.querySelector(".relogio");
    let temp;
    let seconds = 0;

    function iniciaRelogio() {
        temp = setInterval(function () {
            seconds++;
            relogio.innerHTML = generateTimeFromSeconds(seconds);
        }, 1000);
    }

    document.addEventListener("click", function (event) {
        const element = event.target;

        if (element.classList.contains("iniciar")) {
            relogio.classList.remove("stoped");

            clearInterval(temp);
            iniciaRelogio();
        }

        if (element.classList.contains("parar")) {
            clearInterval(temp);
            relogio.classList.add("stoped");
        }

        if (element.classList.contains("zerar")) {
            relogio.classList.remove("stoped");

            clearInterval(temp);
            seconds = 0;
            relogio.innerHTML = "00:00:00";
        }
    });
}

meuEscopo();
