const objetoA:{
    keyA : string,
   readonly keyB : string,
    [key: string] : string
} = {
    keyA : 'Valor A',
    keyB : "valor B",
    KeyF : 'Valor F'
}

objetoA.keyA = 'Outro A'
objetoA.keyL = 'Valor L'
//objetoA.keyB = 'Outro  B'  B é readonly nao pode ser alterado

console.log(objetoA)