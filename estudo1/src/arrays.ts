function multArgs(...args:Array<number>): number{
    return args.reduce((ac,valor)=> ac*valor,1)
}

function concatenarStrings(...args:string[]):string{
    return args.reduce((ac,valor)=> ac+valor)

}

function toUpper(...args:string[]):string[] {
    return args.map((valor)=> valor.toUpperCase())
}

const resultado = multArgs(1,2,3,4,5)
const concatenar = concatenarStrings('oi','meu','nome','é','Jéferson')
const maiusculo = toUpper('a','b','c','d')

console.log(resultado)
console.log(concatenar)
console.log(maiusculo)
