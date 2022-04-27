// Mostrando o finally
// Eu posso ter varios try, catch e finally dentro de um mesmo try

// try {
// Executada quando não há erros
//     console.log("Abri um arquivo");
//     console.log("Manipulei o arquivo e gerou erro");
//     console.log("Fechei o arquivo");
// } catch (err) {
//     // Executada quando há erros
//     console.log("tratando erro");
// } finally {
//     // Vai ser executado sempre
//     console.log("FINALLY: eu sempre sou executado");
// }

// Criando uma função para verificar se o parametro passado é realmente uma data objeto
// Quando eu falo instaceof eu quero dizer que aquela variavel é uma instancia daquele construtor

function retornaData(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError("Esperando instancia de date");
    }

    // Se eu não enviar nada ele cria uma instancia de date
    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString("pt-BR", {
        hour: "2-digit", // Coloca 2 digitos nas horas
        minute: "2-digit", //  Coloca 2 digitos nos minutos
        second: "2-digit", // Coloca 2 digitos nos segundos
        hour12: false, // Tira o PM e o AM, por padrão ele n vem
    });
}

try {
    const horaCriada = new Date("01-01-1970 12:58:12");
    console.log(retornaData(horaCriada));
    console.log(retornaData(hora));
} catch (err) {
    // tratando o erro
    console.log(err);
    console.log(
        `Aconteceu um erro na hora enviada, mandando a hora atual: ${retornaData()}`
    );
} finally {
    console.log("Tenha um bom dia");
}
