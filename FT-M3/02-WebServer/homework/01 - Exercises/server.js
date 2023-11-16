var fs = require("fs");
var http = require("http");
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️ */
/* AQUÍ DEBAJO PUEDES ESCRIBIR LA CONSTANTE DEL PUERTO */
const PORT = 3001;

http.createServer((req, res) => {
  const { url } = req;
  console.log(`Server raised in port ${PORT}`);
  console.log(url);
  if(url === '/api') {
    fs.readFile(__dirname +'/utils/dogsData.json', (err, data) => {
      if(err) {
        res.writeHead(404, {'Content-type' : 'text/plain'});
        return res.end('json not found')
      }
      else{
        res.writeHead(200, {'Content-type' : 'application/json'});
        return res.end(data);
      }
    });
  } 
  else if(url === '/allDogs'){
    fs.readFile(__dirname +'/utils/allDogs.html', 'utf-8', (err, data) => {
      if(err) {
        res.writeHead(404, {'Content-type' : 'text/plain'});
        return res.end('html not found')
      }
      else{
        res.writeHead(200, {'Content-type' : 'text/html'});
        res.end(data);
      }
    })
  }
  else{
    res.writeHead(404, {'Content-type' : 'text/plain'})
    return res.end("Route not found")
  }
}).listen(PORT, "localhost") 


/* ⚠️ LA LÍNEA SIGUIENTE TIENE QUE QUEDAR COMO ESTÁ PARA PODER EXPORTAR EL SERVIDOR ⚠️ */
module.exports =
  /* AQUÍ DEBAJO YA PUEDES ESCRIBIR TÚ CÓDIGO REEMPLAZANDO EL VALOR DE NULL POR EL SERVIDOR */
  null;
