'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arrayPrimos = [1];
  let numP = num;
  let i = 2;
  while(numP > 1){
    if(numP % i == 0){
      numP = numP / i;
      arrayPrimos.push(i); 
    }
    else{
      i++;
    }
  }
  return arrayPrimos;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let aux = 0;
  for(let j = 0; j < array.length; j++){//j=1
    for(let i = 0; i < array.length - 1 - j; i++){
      if(array[i] > array [i+1]){
        aux =  array[i];
        array[i] = array [i+1];
        array[i+1] = aux;
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let aux = 0;
  for(let i = 1; i < array.length; i++){
    let j = i;
    while(j > 0){
      if(array[j-1] > array[j]){
        aux =  array[j];
        array[j] = array [j-1];
        array[j-1] = aux;
      }else{
        j--;
      }
    }
  }
  return array;
}



function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let aux = 0;
  let auxInd = 0; 
  for(let i = 0; i < array.length - 1; i++){
    auxInd = i;
    for(let j = i + 1; j < array.length; j++){
      if(array[auxInd] > array[j]) {
        auxInd = j;
      }
    }
    if(auxInd > i){
      aux = array[auxInd];
      array[auxInd] = array[i];
      array[i] = aux;
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
