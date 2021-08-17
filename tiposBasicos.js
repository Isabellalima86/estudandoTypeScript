"use strict";
// boolean
var contaPaga = false;
//Number
var idade = 23;
// string
var nome = 'Isabella Lima';
//Array
var idades = [23, 28, 45, 32, 45];
var idades2 = [23, 345, 456, 46];
//tuple
var jogadores;
jogadores = ['Bell', 35, true];
//Enum
var statusAprovacao;
(function (statusAprovacao) {
    statusAprovacao[statusAprovacao["Aprovado"] = 0] = "Aprovado";
    statusAprovacao[statusAprovacao["Pendente"] = 1] = "Pendente";
    statusAprovacao[statusAprovacao["Reprovado"] = 2] = "Reprovado";
})(statusAprovacao || (statusAprovacao = {}));
var situacao = statusAprovacao.Aprovado;
//Any
var retornoDaAPI = [123, 'Bell', false];
var retornoDaAPI2 = {
//.....
};
// Void
function printaNaTela(msg) {
    console.log(msg);
}
//Null e Undefined
var u = undefined;
var n = null;
//object
function criar(objecto) {
    //...
}
criar({
    propriedade: 1,
});
criar('vitor'); //Dá erro
