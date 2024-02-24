const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define(
    "Countrie",
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
        type: DataTypes.STRING,
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
        defaultValue: "Sin capital",
      },
      subregion: {
        type: DataTypes.STRING,
        defaultValue: "Sin Subregión",
      },
      bandera: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      area: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
        defaultValue: 0,
      },
      poblacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    { timestamps: false }
  );
};
