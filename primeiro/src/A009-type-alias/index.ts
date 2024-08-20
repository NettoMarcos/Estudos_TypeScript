/*eslint-disable*/
type Idade = number

type Pessoa = {
    nome: string
    idade: Idade
    salario: number
    corPreferida?: String
}

type corRGB = 'Vermelho' | 'Verde' | 'Azul'
type corCMX = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'

type corPreferida = corRGB | corCMX

const pessoa: Pessoa = {
    idade: 30,
    nome: 'Marcos',
    salario: 200_000,
}

export function setCorPreferida(pessoa:Pessoa, cor: corPreferida):Pessoa{
    return {...pessoa, corPreferida: cor}
}

console.log(setCorPreferida(pessoa, 'Azul'))
console.log(pessoa)