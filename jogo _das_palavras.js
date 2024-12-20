/*
Encontre a palavra mais longa

Este desafio de codificação é sobre trabalhar com palavras em uma frase. É um bom exercício para melhorar o manuseio de texto.

O problema

Sua tarefa é escrever uma função que analisa uma frase e descobre qual palavra é a mais longa. Então, ela informa quantas letras essa palavra tem.

Exemplo de entrada:
"A rápida raposa marrom pulou sobre o cachorro preguiçoso"

Exemplo de saída:
6 (porque "pulou" é a palavra mais longa)

Seu input para o desafio será: “Banco Pan, um banco completo com soluções inteligentes”
*/

 
function encontrePalavraLonga(frase){
let palavras = frase.split(/\s+/)
let palavraMaisLonga = palavras.reduce((maior,atual)=> atual.length > maior.length ? atual: maior);

    return console.log(palavraMaisLonga.length +  ` porque ${palavraMaisLonga} é a palavra mais longa`);
   }

let sentenca = "Banco Pan,um banco completo com soluções inteligentes"
encontrePalavraLonga(sentenca);
