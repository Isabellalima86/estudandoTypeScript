"use strict";
//Never
function loopInfinito() {
    while (true) {
    }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
