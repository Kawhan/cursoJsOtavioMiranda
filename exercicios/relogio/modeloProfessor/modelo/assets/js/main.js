// Como eu to lidando com time 0 quando eu passar os segundos ele vai começar do time 00:00:segundos
function getTimeFromSeconds(segundos) {
    // Estamos passando aqui no nosso contexto milisegundos, como vamos receber segundos para trasnformar mutiplicamos por 1000
    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString("pt-BR", {
        hour12: false,
        timeZone: "GMT",
    });
}

function meuEscopo() {
    const relogio = document.querySelector(".relogio");
    let segundos = 0;
    let timer;

    // Função responsavel por iniciar meu relogio passando os segundos
    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        }, 1000);
    }

    document.addEventListener("click", function (e) {
        const elemento = e.target;

        if (elemento.classList.contains("zerar")) {
            relogio.classList.remove("pausado");
            clearInterval(timer);
            relogio.innerHTML = "00:00:00";
            segundos = 0;
        }

        if (elemento.classList.contains("iniciar")) {
            // Garantindo que quando de start num vai ter nenhum intervalo rodando de fundo
            relogio.classList.remove("pausado");
            clearInterval(timer);
            iniciaRelogio();
        }

        if (elemento.classList.contains("parar")) {
            relogio.classList.add("pausado");
            clearInterval(timer);
        }
    });
}

meuEscopo();
