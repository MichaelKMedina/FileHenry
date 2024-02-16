const personajes =  [
    {
      nombre: "Jon Snow",
      numeroEpisodio: 5,
      edad: 23,
      descripcion: "A bastard son of Ned Stark, joined the Night's Watch.",
      id: "k7l8m9n0",
    },
    {
      nombre: "Bran Stark",
      numeroEpisodio: 9,
      edad: 17,
      descripcion: "Blessed with supernatural abilities and visions.",
      id: "i9j0k1l2",
    },
  ];
  
  const deletePersonaje = (personajeID) => {
    // Tu código aquí
    const personajeEncontrado = personajes.find((p) => p.id === personajeID);
    if(!personajeEncontrado) throw Error(`No existe el personaje con id: ${personajeID}`);
    const hayPersonaje = personajes.filter((p) => p.id !== personajeID);
    return hayPersonaje;
  };
  
  console.log(deletePersonaje("k7l8m9n0"))


