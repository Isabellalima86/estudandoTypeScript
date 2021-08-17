"use strict";
//Alias
// type Funcionarios = Array<Funcionario>;
var funcionarios = [{
        nome: 'Bell',
        sobrenome: 'Lima',
        dataNascimento: new Date()
    }, {
        nome: 'Marcus',
        sobrenome: 'Lima',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('nome do funcionário', funcionario.nome);
    }
}
