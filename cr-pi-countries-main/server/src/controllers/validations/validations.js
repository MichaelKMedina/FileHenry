//Esta función valida si un string cadena tiene algun nro, devuelve un booleano.
const tieneNro = (string) => {
  const regex = /\d/;
  return regex.test(string);
};

//Esta funcion recibe 3 numeros el primero es el valor a evaluar los siguientes dos son los valores intervalos
//entre los cuales el nro debe estar si se pasa arroja false, ademas debe ser entero.
const esEnteroYEstaEntre = (num, vMin, vMax) => vMin <= num && num <= vMax;

//Esta funcion valida si un valor es nro
const esNumero = (valor) => typeof valor === "number";

module.exports = {
  tieneNro,
  esEnteroYEstaEntre,
  esNumero,
};
