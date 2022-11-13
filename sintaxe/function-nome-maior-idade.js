function escrevaMeuNome(nome) {
    return 'Meu nome é ' + nome;
}

function verificarIdade(idade) {
    if(idade >= 18) {
        return escrevaMeuNome('Renata ') + 'é maior de idade';
    } else {
        return escrevaMeuNome('Renata ') + 'é menor de idade';
    }
} 

console.log(verificarIdade(30));