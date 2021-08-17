let altura: number | null = 1.63
altura = null;

type Contato = {
nome: String;
telefone1: string;
telefone2?: string | null;
}// ooperador ? diz que o valor é opcional

const contato: Contato = {
    nome: 'Bell',
    telefone1: '21 90965-2788',
    telefone2: null,
}
