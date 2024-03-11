const { Actividad } = require("../db");
const {
  tieneNro,
  esEnteroYEstaEntre,
  esNumero,
} = require("./validations/validations");

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
  } else if (tieneNro(name)) {
    throw new Error("El nombre del pais ingresado tiene numeros");
  } else if (esEnteroYEstaEntre(dificultad, 1, 1)) {
    throw new Error("Los numeros no estan entre 1 y 5");
  } else if (esNumero(dificultad)) {
    throw new Error("Dificultad no llega como numero");
  } else {
    throw new Error("Los datos solicitados estan incompletos");
  }
};

module.exports = postActivitiesControl;
