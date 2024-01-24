const express = require("express");
const server = express();
////////////////////////////////MIDDLE
server.use(express.json());
/////////////////////////////////VARIABLES
let publications = [];
const errorJson = { error: "No se recibieron los parámetros necesarios para crear la publicación" }
const id = 0;
//////////////////////////////////CODIGO
server.post("/posts", (req, res) => {
    if(req.body.author && req.body.title && req.body.contents){
        const newLibro = {};
        newLibro.id = ++id;
        newLibro.author = req.body.author;
        newLibro.title = req.body.title;
        newLibro.contents = req.body.contents;
        publications.push()
        publications.push(newLibro);
        res.estatus(200).json(publications)
    }
    else{
        res.json(errorJson)
    }
});


//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
