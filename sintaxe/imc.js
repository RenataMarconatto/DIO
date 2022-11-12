const peso = 55;
const altura = 1.65;

const imc = peso / (altura * altura);

if(imc > 40) {
    console.log('Obesidade grave');
}else if(imc <= 40 && imc > 30) {
    console.log('Obeso');
}else if(imc <= 30 && imc > 25) {
    console.log('Acima do peso');
}else if(imc <= 25 && imc > 18.5) {
    console.log('Peso normal');
}else if(imc <= 18.5 && imc > 0) {
    console.log('Abaixo do peso');
}else {
    console.log('Peso inválido');
}