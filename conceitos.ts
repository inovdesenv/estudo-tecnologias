class Pessoa {
    nome: string;
    endereco: string;
    telefone: string;

    //pagarConta();

}

class PessoaJuridica extends Pessoa {
    cnpj: string;
    razaoSocial: string;

    //pagarColaboradores();
}

class PessoaFisica extends Pessoa {
    cpf: string;
    idade: string;
    sexo: string;

    //comer();
}

var restoque = new PessoaJuridica();
var pessoa = new PessoaFisica();

pessoa.nome = "Márcio";
pessoa.idade = "10";

console.log('PESSOA', pessoa);