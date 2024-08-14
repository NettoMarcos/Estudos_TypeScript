/*eslint-disable*/

import { Pessoa } from './Pessoa';

// Tipos basicos
let nome:string = 'Marcos'
let idade: number = 30
let adulto: boolean = true
let simbolo: symbol = Symbol('qualquer-symbol')
//let big: bigint = 10n

//Arrays
let arrayNumbers: Array<number> = [1,2,3]
let arrayNumbers2: number[] = [1,2,3]
let arrayStrings: Array<string> = ['a','b']
let arrayStrings2: string[] = ['a','b']


//Objetos

let pessoa1 = new Pessoa('joao',30)

let pessoa: {nome:string, idade:number, adulto?: boolean} = {
        idade:25,
        nome: 'Marcos'
}

console.log(pessoa)
console.log(pessoa1)

//funções

function soma(x:number, y: number): number{
    return x + y
}

console.log(soma(5,8))

console.log(pessoa1.toString())