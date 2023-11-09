'use strict';

function BinarioADecimal(num) {
    let arrayBinario = num.split("");
    let resultadoTotal = 0;
    for(var i = 0; i < arrayBinario.length; i++){
        resultadoTotal += arrayBinario[i] * 2 ** (arrayBinario.length - 1 - i);
    }
    return (resultadoTotal);
}

function DecimalABinario(num) {
   let binarioArray = [];
   let numeroDivido = num;
   if(num >= 1){ 
       while(numeroDivido >= 1){
       binarioArray.unshift(numeroDivido - ((Math.floor(numeroDivido / 2)) * 2));
       numeroDivido = Math.floor(numeroDivido / 2);
   }
   return (binarioArray.join(""));
   } 
   else{
       return 0;
   }   
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
