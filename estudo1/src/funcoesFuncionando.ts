function semReturn(...args: string[]):void{
    console.log(args.join(' '))
}

const pessoas ={
    nome: 'Jeferson',
    Sobrenome: 'Vivas',

    exibirNome():void{
        console.log(this.nome + ' ' + this.Sobrenome)
    }
}



semReturn('Jeferson','Vivas',"Aragao")
pessoas.exibirNome()

