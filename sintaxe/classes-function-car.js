class Carro {
    marca;
    cor;
    mediaPorKm;

    constructor(marca, cor, mediaPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.mediaPorKm = mediaPorKm;
    }

    calculoDeValorViagem(distanciaEmKm, valorDoCombustivel) {
        return distanciaEmKm * this.mediaPorKm * valorDoCombustivel;
    }
}

const chevette = new Carro('Chevrolet', 'Dourado', 1/11);
const polo = new Carro('Volksvagen', 'Azul Marinho', 1/9);
const f147 = new Carro('Fiat', 'Branco', 1/13);

console.log(chevette.calculoDeValorViagem(420, 5.09));
console.log(polo.calculoDeValorViagem(420, 5.09));
console.log(f147.calculoDeValorViagem(420, 5.09));