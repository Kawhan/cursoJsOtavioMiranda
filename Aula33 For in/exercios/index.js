/* 

- Crie um algoritmo usando o for que leia uma lista. 
- Mostre no console apenas os números pares. 
- Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];

*/

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const lista_aux = [];

for (let numero in lista) {
    if (lista[numero] % 2 === 0) {
        console.log(lista[numero]);
    }
}

/* 

Exercício 2:
Utilizando a lista do exercício anterior, 
crie um algoritmo que mostre de maneira decrescente os elementos desta lista.

Resolva estes exercícios para melhor aprendizado!

Gostou deste exercício? Mostre o seu resultado nos comentários!

*/

for (let i = lista.length - 1; i >= 0; i--) {
    lista_aux.push(lista[i]);
}

console.log(lista_aux);
