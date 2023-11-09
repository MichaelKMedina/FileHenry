'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus 
  variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no 
  se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value){
	this.value = value;
	this.left = null;
	this.right = null;
}

BinarySearchTree.prototype.size = function(){
   let cont = 1;
   if(this.left || this.right){
      if(this.right){
         cont++;
         this.right.size();
      }
      if(this.left){
         cont++;
         this.left.size();
      }
   }
   return cont;
}

BinarySearchTree.prototype.insert = function(dato){
   if(dato < this.value){
      if(!this.left){
         this.left = new BinarySearchTree(dato);
         return;
      }
      else {
         this.left.insert(dato);
      }
   }
   else if(dato >= this.value){
      if(!this.right){
         this.right = new BinarySearchTree(dato);
         return;
      }
      else{
         this.right.insert(dato);
      }
   }
}

BinarySearchTree.prototype.contains = function(dato){
   if(this.value === dato) return true;
   if(dato < this.value){
      if(this.left){
         return this.left.contains(dato);
      }
      return false;
   }
   else{
      if(this.right){
         return this.right.contains(dato);
      }
      return false;
   }
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
   if(order === 'in-order' || !order){ //left,root,right
      if(this.left) this.left.depthFirstForEach(cb, order);
      cb(this.value);
      if(this.right) this.right.depthFirstForEach(cb, order);
   }
   if(order === 'pre-order'){//root, left, righ
      cb(this.value);
      if(this.left) this.left.depthFirstForEach(cb, order);
      if(this.right) this.right.depthFirstForEach(cb, order);
   }
   if(order === 'post-order'){// left, right, root 
      if(this.left) this.left.depthFirstForEach(cb, order);
      if(this.right) this.right.depthFirstForEach(cb, order);
      cb(this.value);
   }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, array){
   if(!array){
      var array = [];
   }
   cb(this.value);
   if(this.left){
      array.push(this.left);
   }
   if(this.right){
      array.push(this.right)
   }
   if(array.length > 0){
      array.shift().breadthFirstForEach(cb, array);
   }
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
