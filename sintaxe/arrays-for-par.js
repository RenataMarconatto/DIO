const listaNum = [1, 22, 24, 27, 32, 39, 41, 46, 49, 52, 55, 57];
for (let i = 0; i < listaNum.length; i++) {
    const num = listaNum[i];
    if(num % 2 === 0) {
        console.log(num);
    }
}