/*eslint-disable*/
let x = 10 
let a = 100 as const

const pessoa = {
    nome: 'Marcos' as const,
    sobrenome: 'Netto'
}

export function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string{
    return cor
}

console.log(escolhaCor("Amarelo"))