/*const numero = 2;

const numeroPar = (numero % 2) === 0;

if (numeroPar) {
    console.log('Par');
} else {
    console.log('Impar');
}*/

const precoGasolina = 5.09;
const precoEtanol = 4.19;
const kmPorLitrosEtanol = 28;
const kmPorLitrosGasolina = 32;
const distanciaEmKm = 144;
const tipoDoCombustivel = 'Cerveja';

const litrosConsumidosEtanol = distanciaEmKm / kmPorLitrosEtanol;
const litrosConsumidosGasolina = distanciaEmKm / kmPorLitrosGasolina;

if (tipoDoCombustivel === 'Etanol') {
    const valorGastoEtanol = litrosConsumidosEtanol * precoEtanol;
    console.log('O gasto com Etanol é ' + valorGastoEtanol);
} else if(tipoDoCombustivel === 'Gasolina'){
    const valorGastoGasolina = litrosConsumidosGasolina * precoGasolina;
    console.log('O gasto com Gasolina é ' + valorGastoGasolina);
} else {
    console.log('O combustivel não é válido');
}