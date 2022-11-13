const precoNormal = 20;
const tiposDeCompra = ['Debito', 'Dinheiro', 'Pix', 'ate2P', 'mais3P'];
const tipoDeCompra = 'Debito';

function identificarTipoDeCompra(tipoDeCompra) {
    if(tipoDeCompra === 'Debito') {
        const aVistaDebito = precoNormal * 0.9;
        return('O preço é ' + aVistaDebito);
    }else if(tipoDeCompra === 'Dinheiro' || tipoDeCompra === 'Pix') {
        const aVistaDinheiroPix = precoNormal * 0.85;
        return('O preço é ' + aVistaDinheiroPix);
    }else if(tipoDeCompra === 'ate2P') {
        const ate2P = (precoNormal / 2) + (precoNormal / 2);
        return('O preço é ' + ate2P);
    }else if(tipoDeCompra === 'mais3P') {
        const mais3P = precoNormal * 1.1;
        return('O preço é ' + mais3P); 
    }else {
        return('Forma de compra inválida');
    }    
}

console.log(identificarTipoDeCompra(tipoDeCompra));

