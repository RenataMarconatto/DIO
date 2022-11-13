class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculoImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.calculoImc();
        if(imc > 40) {
            return('Obesidade grave');
        }else if(imc <= 40 && imc > 30) {
            return('Obeso');
        }else if(imc <= 30 && imc > 25) {
            return('Acima do peso');
        }else if(imc <= 25 && imc > 18.5) {
            return('Peso normal');
        }else if(imc <= 18.5 && imc > 0) {
            return('Abaixo do peso');
        }else {
            return('Peso inválido');
        }
    }
}


const renata = new Pessoa('Renata', 55, 1.65);
console.log(renata.calculoImc());
console.log(renata.classificarImc());

const adilson = new Pessoa('Adilson', 78, 1.74);
console.log(adilson.calculoImc());
console.log(adilson.classificarImc());