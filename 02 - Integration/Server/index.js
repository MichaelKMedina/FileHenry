const PORT = 3001;
const server = require("./src/app");
const { conn } = require("./src/DB_connection");

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT} OK`);
  });
});
