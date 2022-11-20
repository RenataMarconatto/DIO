let str = gets(); 
let strSplit = str.toLowerCase().split('');
let vogais;
let espBrancos;

espBrancos = strSplit.filter(vetorBrancos);
vogais = strSplit.filter(vetorVogais);

function vetorVogais(str){
  if (str === "a" || str === "e" || str === "i" || str === "o" || str === "u") {
    return true;
  } 
}

function vetorBrancos(str) {
  if (str === " ") {
    return true;
  }
}

print("Espacos em branco: " + espBrancos.length + " Vogais: " + vogais.length)