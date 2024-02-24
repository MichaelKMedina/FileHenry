const PORT = 3000;
const { conn } = require("./src/db.js");
const server = require("./src/server");
const montarBaseDeDatos = require("./src/utils/montarBase");

conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
      montarBaseDeDatos();
    });
  })
  .catch((error) => console.error(error));
