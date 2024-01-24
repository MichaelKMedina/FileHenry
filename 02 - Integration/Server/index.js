const PORT = 3001;
const server = require("./src/server");
const cors = require('cors');

const corsOptions = {
   origin: 'http://localhost:3000', // Reemplaza con la URL de tu aplicación React
   credentials: true,
 };

server.use(cors(corsOptions));

server.listen(PORT, () => {console.log(`Servidor en puerto ${PORT} OK`)});
