const { Actividad } = require("../db");

const postActivitiesControl = async (data) => {
  const { name, duracion, dificultad, temporada, pais } = data;
  if ((name && dificultad && temporada && pais) || duracion) {
    const newActividad = await Actividad.create({
      name,
      duracion,
      dificultad,
      temporada,
    });

    await newActividad.addCountrie(pais);
    return newActividad;
  } else {
    throw new Error("Los datos solicitados estan incompletos");
  }
};

module.exports = postActivitiesControl;
