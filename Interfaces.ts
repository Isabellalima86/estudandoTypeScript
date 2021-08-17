interface Usuario{
    nome: string;
    email:string
    address?: string;
}

function getUser(): Usuario {
    return{
        nome: 'Bell',
        email: 'isabellalimasilva@gmail.com'
    }
}

function setUser(Usuario: Usuario){
    
}