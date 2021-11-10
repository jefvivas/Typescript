/* eslint-disable */

//tipos básicos onde ocorre inferência
let nome:string = 'Jeferson'
let idade:number = 26
let adulto:boolean = true
let simbolo:symbol = Symbol('anything')
//let big: bigint = 10n 

//Arrays

let numberArray: Array<number> = [1,2,3]
let numberArray2 : number[] = [1,2,3]
let stringArray: Array<string> =  ['um','dois','tres']
let stringArray2: string[] = ['um','dois','tres']

//obj

let pessoa : { nome: string, idade:number,adulto?: boolean}={
    nome : 'Jeferson',
    idade : 26
}

//function

function soma(x:number,y:number): number{                           //number seria inferido nesse caso
    return x+y
}

const soma2:(x:number,y:number) => number = (x,y) => x+y