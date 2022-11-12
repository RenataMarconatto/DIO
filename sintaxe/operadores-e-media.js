const nota1 = 5;
const nota2 = 8;
const nota3 = 4;

const mediaNotas = (nota1 + nota2 + nota3) / 3;

if(mediaNotas > 7) {
    console.log('Aprovado');
}else if(mediaNotas <= 7 && mediaNotas > 5){
    console.log('Recuperação');
}else{
    console.log('Reprovado');
}