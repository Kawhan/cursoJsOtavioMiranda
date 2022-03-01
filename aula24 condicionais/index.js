/* 
Entre 0 - 11 -> Bom dia
Entre 12 - 17 -> Boa tarde
Entre 18 - 23 -> Boa noite
*/

const hora = 18;

// Isso que esta dentro das chaves pertence ao escopo desse if (se)
// If pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu posso ter varios else ifs na condição
// Eu só posso ter um else na checagem
// Podemos usar condições sem else if, utilizando apenas if e else


if (hora >= 0 && hora <= 11) {
    console.log("Bom dia");
} else if (hora >= 12 && hora <= 17){ // Se não
    console.log("Boa tarde");
}else if (hora >= 18 && hora <= 23){
    console.log('Boa noite');
} else {
    console.log("Olá");
}

const tenhoGrana = undefined;

// Se nosso valor for true ele entra nessa variavel, ou se nosso valor mesmo for considerado um trulpy também entra
if (tenhoGrana) {
    console.log("Vou sair de casa");
} else {
    console.log("Não vou sair de casa");
}