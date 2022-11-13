class Pessoa {
    nome;
    idade;
    altura;
    naturalidade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`); //Pega as chaves de dentro do objeto com ${}
    }
}

const renata = new Pessoa();
renata.nome = 'Renata de Lucena Marconatto';
renata.idade = 30;
renata.altura = 1.65;
renata.naturalidade = 'Rio de Janeiro';

const adilson = new Pessoa();
adilson.nome = 'Adilson Frizon';
adilson.idade = 31;
adilson.altura = 1.74;
adilson.naturalidade = 'Foz do Iguaçu';

console.log(renata);
console.log(adilson);

adilson.descrever();
renata.descrever();