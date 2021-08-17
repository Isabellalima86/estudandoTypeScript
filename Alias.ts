//Alias

type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}

// type Funcionarios = Array<Funcionario>;
const funcionarios: Funcionario[] = [{
    nome: 'Bell',
    sobrenome: 'Lima',
    dataNascimento: new Date()   
}, {

    nome: 'Marcus',
    sobrenome: 'Lima',
    dataNascimento: new Date()   
}];

function tratarFuncionarios(funcionarios: Funcionario[]) {
    for(let funcionario of funcionarios) {
        console.log('nome do funcionário', funcionario.nome);
    }

}

