const {gets, print} = require('./auxiliary-functions');
const numsSorts = [];

for (let i = 0; i < 5; i++) {
    const numSort = gets();
    numsSorts.push(numSort);
}

console.log(numsSorts);

let maiorValor = 0;

for (let i = 0; i < numsSorts.length; i++) {
    const numSort = numsSorts[i];
    if(numSort > maiorValor) {
        maiorValor = numSort;
    }
}

print(maiorValor);