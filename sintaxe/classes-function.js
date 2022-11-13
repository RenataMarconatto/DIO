class Pessoa {
    nome;
    idade;
    altura;
    naturalidade;
    anoDeNascimento;

    constructor(nome, idade, altura, naturalidade, anoDeNascimento) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.naturalidade = naturalidade;
        this.anoDeNascimento = 2022 - idade;
    }
}

function compararIdade(p1, p2) {
    if(p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    } else if(p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const renata = new Pessoa('Renata', 30, 1.65, 'Rio de Janeiro');
const adilson = new Pessoa('Adilson', 31, 1.74, 'Foz do Iguaçu');

compararIdade(renata, adilson);