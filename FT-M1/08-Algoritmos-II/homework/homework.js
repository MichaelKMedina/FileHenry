'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // if(array.length === 0) return array;
  // if(array.length === 1) return array;
  // let pivot = array[0];
  // let mayores = [];
  // let menores = [];
  // for(let i = 0; i < array.length; i++){
  //   if(array[i] > pivot) {
  //     mayores.push(array[i]);
  //   };
  //   if(array[i] < pivot) {
  //     menores.push(array[i]);
  //   }
  // }
  // if(menores != null && mayores != null) {
  //   return unirArray(unirArray(quickSort(menores), volverArrayValor(array)), quickSort(mayores));
  // };
  // if(menores != null && mayores === null) {
  //   return unirArray(unirArray(quickSort(menores), volverArrayValor(array)))
  // };
  // if(menores === null && mayores != null) {
  //   return unirArray(volverArrayValor(array), quickSort(mayores))
  // };
  if (array.length <= 1) {
    return array;
  }
  const pivot = array[0];
  const menores = [];
  const mayores = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      menores.push(array[i]); 
    } else {
      mayores.push(array[i]); 
    }
  }
  return quickSort(menores).concat(pivot, quickSort(mayores));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
    if(array.length < 2) return array;
    const mitad = Math.floor(array.length / 2);
    let arr1 = array.slice(0, mitad);
    let arr2 = array.slice(mitad);
    array = [];
    arr1 =  mergeSort(arr1);
    arr2 =  mergeSort(arr2);
    while(arr1.length && arr2.length){
        if(arr1[0] < arr2[0]){
           array.push(arr1.shift());
        }
        else{
            array.push(arr2.shift());
        }
    }
    array = array.concat(arr1, arr2)
    return(array);
}

// function volverArrayValor(arr) {
//   let array = [];
//   if(arr[0] != arr[1]) array[0] = arr[0];
//   else {
//   array[0] = arr[0];
//   array[1] = arr[1]
//   }
//   return array;
// };

// function unirArray(ar1, ar2){
//   let concatenado = [];
//   ar1.forEach((n) => {concatenado.push(n)})
//   ar2.forEach((n) => {concatenado.push(n)})
//   return concatenado;
// }

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
