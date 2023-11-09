
function BinarioADecimal(num) {
    arrayBinario = num.split("");
    console.log (arrayBinario);
    resultado = 0;
    resultadoTotal = 0;
    exponenteReducido = arrayBinario.length - 1;
    for(i = 0; i < arrayBinario.length; i++){
        resultado = arrayBinario[i] * 2 ** (exponenteReducido - i);
        resultadoTotal += resultado;
    }
    return (resultadoTotal);
 }

function DecimalABinario(num) {
    binarioArray = [];
    numeroDivido = num;
    if(num >= 1){ 
        while(numeroDivido >= 1){
        binarioArray.unshift(numeroDivido - ((Math.floor(numeroDivido / 2)) * 2));
        console.log (Math.floor(numeroDivido / 2));
        console.log(binarioArray);
        numeroDivido = Math.floor(numeroDivido / 2);
    }
    return (binarioArray.join(""));
    } 
    else{
        return 0;
    }   
}

console.log(DecimalABinario(20));