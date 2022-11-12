const precoNormal = 20;
const tiposDeCompra = ['Debito', 'Dinheiro', 'Pix', 'ate2P', 'mais3P'];
const tipoDeCompra = 'Debito';

if(tipoDeCompra === 'Debito') {
    const aVistaDebito = precoNormal * 0.9;
    console.log('O preço é ' + aVistaDebito);
}else if(tipoDeCompra === 'Dinheiro' || tipoDeCompra === 'Pix') {
    const aVistaDinheiroPix = precoNormal * 0.85;
    console.log('O preço é ' + aVistaDinheiroPix);
}else if(tipoDeCompra === 'ate2P') {
    const ate2P = (precoNormal / 2) + (precoNormal / 2);
    console.log('O preço é ' + ate2P);
}else if(tipoDeCompra === 'mais3P') {
    const mais3P = precoNormal * 1.1;
    console.log('O preço é ' + mais3P); 
}else {
    console.log('Forma de compra inválida');
}



