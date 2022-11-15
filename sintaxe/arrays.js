const pessoas = ['Giraia', 'Xururu', 'Lauguie'];
console.log(pessoas);
console.log(pessoas[0]); // primeira posição do array
console.log(pessoas[1]); // segunda...
console.log(pessoas[2]); // terceira...

pessoas.push('Liandra'); // add no final da array
console.log(pessoas[3]);

pessoas.pop('Liandra'); // remove o último item da array
console.log(pessoas[3]);

pessoas.shift('Turbio'); // add no início da array
console.log(pessoas[0]);

pessoas.unshift('Turbio'); // remove do início da array
console.log(pessoas[0]);

console.log(pessoas.length); // saber o tamanho da array