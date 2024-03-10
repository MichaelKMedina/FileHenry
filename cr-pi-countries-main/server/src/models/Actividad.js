const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define(
    "Actividad",
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
      duracion: {
        type: DataTypes.INTEGER,
      },
      dificultad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isIn: [[1, 2, 3, 4, 5]],
        },
      },
      temporada: {
        type: DataTypes.ENUM("Primavera", "Verano", "Otoño", "Invierno"),
      },
    },
    { timestamps: false }
  );
};
