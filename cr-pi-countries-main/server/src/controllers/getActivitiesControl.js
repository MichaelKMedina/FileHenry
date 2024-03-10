const { Actividad,  Countrie} = require("../db");

const getActivitiesControl = async () => {
  const allActivities = await Actividad.findAll(
    { include: Countrie }
  );
  return allActivities;
};

module.exports = getActivitiesControl;
