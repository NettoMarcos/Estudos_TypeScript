let x: unknown

x = 100
x = 'luiz'
x = 900
x = '10'

//tipo any poder ser qualquer tipo como unknow porem unknow deve ser verificado para que não ocorra um erro.
const y:any = 800

if (typeof x === 'number')console.log(x + y)
else{
    console.log("verificação invalida")
}

