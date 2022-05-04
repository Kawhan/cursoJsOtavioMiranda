function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString("pt-BR", {
        hour12: false,
    });
}

console.log(mostraHora());

// Quando eu quero trabalhar com intervalo de tempo, eu utilizo a função set interval
// setInterval vai configurar um intervalo de tempo para que uma função seja executada

// Como esta sem parenteses eu estou passando a referencia para o set inteval
// Segundo parametro é de quanto e quanto tempo eu quero que isso seja executado
//Referencia, time
// Você pode armazenar dentro de uma variável tmb
const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

// setTimeOut é uma função igual o setTimeOut mas só executa apenas uma vez

setTimeout(function () {
    clearInterval(timer);
}, 3000);

setTimeout(function () {
    console.log("Olá mundo");
}, 5000);
