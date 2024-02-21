const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define(
    "Country",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      continente: {
        type: DataTypes.ENUM("Africa", "Europa", "Oceania", "Asia", "South America", "North America", "Antarctica"),
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      subregion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bandera: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      area: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
      },
      poblacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
