
 export class Pessoa{
    

    nome:string
    idade: number

    constructor(nome:string, idade: number){
        this.nome = nome
        this.idade = idade
    }

  
    toString(): string{
        return this.nome + ' ' + this.idade
    }
}