const { Actividad } = require("../db");

const getActivitiesControl = async () => {
  const allActivities = await Actividad.findAll();
  return allActivities;
};

module.exports = getActivitiesControl;
