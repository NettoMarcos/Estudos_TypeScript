type TemNome = {nome: string}
type TemSobrenome = {sobrenome: string}
type TemIdade ={idade: number}

type Pessoa = TemNome & TemSobrenome & TemIdade

const pessoa: Pessoa = {
    nome: 'Marcos',
    sobrenome: 'Netto',
    idade: 25
}

console.log(pessoa)
