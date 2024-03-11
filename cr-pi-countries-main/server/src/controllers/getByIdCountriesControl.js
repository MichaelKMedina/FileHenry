const { Countrie, Actividad} = require("../db");

const getByIdCountriesControl = async (id) => {
  id = id.toString();

  if (!id) throw new Error("No se ha proporcionado un ID");
  if (id.length !== 3) throw new Error("El ID no tiene 3 letras");

  const paisConActividad = await Countrie.findOne({
    where: {
      id: id
    },
    include: [
      { model: Actividad, through: "ActividadCountry"},
    ],
  });

  if (!paisConActividad) throw new Error("No se encontró un país con ese ID");
  
  return paisConActividad;
};

module.exports = getByIdCountriesControl;
