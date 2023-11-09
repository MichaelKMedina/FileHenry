function buildToDos(toDos) {
    // Tu código acá:
    let nuevoToDos = toDos.map(function(num) {
      buildToDo(toDos[num], num);
    })
    return nuevoToDos;
  }

  

