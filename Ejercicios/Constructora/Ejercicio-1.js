//Hacer funcion constructora con la cual podamos modelar tipos de ropa con su talle y genero.
function Ropa(categoria, talle, genero, material){
    this.categoria = categoria;
    this.talle = talle;
    this.genero = genero;
    this.material = material;
}

// hacer por medio de una variable una función que imprima 'yo quiero ropa con estas caracteristicas : ....'
//las cuales debe sacar del objeto constructor. 

function ropita (obj){
    console.log('yo quiero ropa con estas caracteristicas: ' + ' talle: ' + obj.talle + ' tipo: ' + obj.categoria)
}

module.exports = Ropa;