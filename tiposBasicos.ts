// boolean

const contaPaga: boolean = false;

//Number

const idade: number = 23;

// string

const nome: string = 'Isabella Lima';

//Array

const idades: number[] = [23, 28, 45, 32, 45];
const idades2: Array<number> = [23, 345, 456, 46];

//tuple

let jogadores: [string, number, boolean];
jogadores = ['Bell', 35, true];

//Enum

enum statusAprovacao{
    Aprovado,
    Pendente,
    Reprovado
}

const situacao: statusAprovacao = statusAprovacao.Aprovado;

//Any

const retornoDaAPI: any[]= [123, 'Bell', false];
const retornoDaAPI2: any = {
    //.....
} 


// Void

function printaNaTela(msg: string): void{
    console.log(msg);
}

//Null e Undefined

const u: undefined = undefined;
const n: null = null;

//object
function criar(objecto: object) {
    //...
}
criar({
    propriedade: 1,
})
criar('vitor') //Dá erro
