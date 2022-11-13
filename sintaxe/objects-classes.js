const renata = {
    nome: 'Renata de Lucena Marconatto',
    idade: 30,
    naturalidade: 'Rio de Janeiro',
    descrever: function() {
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}'); //Pega as chaves de dentro do objeto com ${}
    }
}

console.log(renata.nome);
console.log(renata.idade);
console.log(renata.naturalidade);
console.log(renata);

renata.altura = 1.65; //Essa chave será incrementada no objeto
console.log(renata);

delete renata.naturalidade; //Essa chave será removida do objeto
console.log(renata);

renata.descrever();

renata.nome = 'Renata'; //Muda o valor da chave com acesso direto
renata['nome'] = 'Renata de Lucena Marconatto'; // Acesso dinâmico através de uma string com o mesmo nome da chave do objeto