//consultar for off ver clases CSS y ir anotando al igual que ESS

const traverseDomAndCollectElements = (matchFunc, startEl = document.body) => {
  var resultSet = [];
  if(startEl.children === 0) return resultSet;
  let starC = startEl.children;
  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
  // TU CÓDIGO AQUÍ
  //verifico el elemento 0 despues dentro de el hago lo mismo y asi sucesivamente hasta que me retorna
  // y me da el resultado y despues voy al siguiente elemento y hago lo mismo.
  if(starC.length === 1 && matchFunc(starC[0])) {
    resultSet.push(starC[0])
    return resultSet;
  };
  if(starC.length > 1 && traverseDomAndCollectElements(matchFunc, starC.nextElementSibling)) {
  }
return resultSet;
}

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  let selectorArr = selector.split('');
  if(selectorArr[0] === '#') return 'id'
  if(selectorArr[0] === '.') return 'class'
  if(selectorArr.includes('.')) return 'tag.class'
  return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = function(el){
      return '#' + el.id === selector;
    }
  } else if (selectorType === "class") {
      matchFunction = function(el){
        let sinPunto = selector.split('');
        sinPunto.splice(0, 1);
        return el.classList.contains(sinPunto.join(''));
      }
  } else if (selectorType === "tag.class") {
      matchFunction = function(el){
        let arr = selector.split('');
        let selectorTag = arr.slice(0, puntoArr(arr));
        let selectorClase = arr.slice(puntoArr(arr) + 1);
        return el.tagName.toLowerCase() === selectorTag.join('') && el.classList.contains(selectorClase.join(''));
      } 
  } else if (selectorType === "tag") {
      matchFunction = function(el){
        return el.tagName && el.tagName.toLowerCase() === selector.toLowerCase();
      } 
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

function puntoArr(arr){
  //ubica el punto en un array
  let i = 1;
  while(arr[i] != '.'){
     i++;
  }
  return i;
}