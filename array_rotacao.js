/*Rotação de matriz

Este desafio é sobre mover números em uma lista. É útil para reorganizar dados.

O problema

Você tem uma lista de números. Você precisa mover os números para a direita em uma certa quantidade. O usuário dirá quantas vezes.

Exemplo:
Lista de entrada: [1, 2, 3, 4, 5] 
Turnos: 2

Lista de saída: [4, 5, 1, 2, 3]

Sua contribuição para o desafio será: 
Matriz: 1, 2, 3, 4, 5, 6, 7
Turnos: 4
*/



function moveNumb(matriz, turnos) {
    let numeros = matriz.length;
    turnos = turnos % numeros;
    let rotacao = new Array(numeros);
    for (let i = 0; i < numeros; i++) {
        let resultados = (i + turnos) % numeros;
        rotacao[resultados] = matriz[i];

    }
    return rotacao;

}
let num = [1, 2, 3, 4, 5, 6, 7];
let turnos = 4
let resulTurno = moveNumb(num, turnos);
console.log(resulTurno);
