const express = require("express");
const server = express();
<<<<<<< HEAD
////////////////////////////////MIDDLE
=======

//MIDDLEWARES
server.use(express.json());

//VARIABLES
let publications = [];
//CODIGO

server.post("/posts", (req, res) => {
  const { author, title, contents } = req.body;
  if (author && title && contents) {
    let publiction = {
      id: 1,
      author,
      title,
      contents,
    };

    publications.push(publiction);
    res.status(200).json(publiction);
  } else {
    res.status(400).json({
      error:
        "No se recibieron los parámetros necesarios para crear la publicación",
    });
  }
});

server.get("/posts", (req, res) => {
  const { author, title } = req.query;
  console.log(author, title);
  console.log(publications);
  const publication = publications.filter(
    (publi) => publi.author == author && publi.title == title
  );
  if (publication.length > 0) {
    console.log(publication);
    res.status(200).json(publication);
  } else {
    res.status(400).json({
      error: "No existe ninguna publicación con dicho título y autor indicado",
    });
  }
});

server.get("/posts/:author", (req, res) => {
  const { author } = req.params;
  const publication = publications.filter((publi) => publi.author == author);
  if (publication.length > 0) {
    res.status(200).json(publication);
  } else {
    res
      .status(400)
      .json({ error: "No existe ninguna publicación del autor indicado" });
  }
});

server.put("/posts/:id", (req, res) => {
  const { id } = req.params;
  const { title, contents } = req.body;
  const publication = publications.filter((publi) => publi.id == id);
  if (publication > 0) {
    publication.title = title;
    publication.contents = contents;
    res.status(200).json(publication);
  } else if (!title && !contents) {
    res
      .status(400)
      .json({
        error:
          "No se recibieron los parámetros necesarios para modificar la publicación",
      });
  } else {
    res
      .status(400)
      .json({
        error:
          "No se recibió el id correcto necesario para modificar la publicación",
      });
  }
});

server.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  const { title, contents } = req.body;
  let sum = 0;
  const publication = publications.find((publi) => {
    publi.id == id;
    ++sum;
  });
  if (publication > 0) {
    delete publications[sum -1];
    res.status(200).json({ success: true });
  } else if (!id) {
    res
      .status(400)
      .json({error: "No se recibió el id de la publicación a eliminar"});
  } else {
    res
      .status(400)
      .json({error: "No se recibió el id correcto necesario para eliminar la publicación"});
  }
});

>>>>>>> ca68ccc2e0572b4e8c7a2f3a1d72b7a4c3eed1d7
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
