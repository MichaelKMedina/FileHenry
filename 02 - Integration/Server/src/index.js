const http = require("http")
const data = require('./utils/data')
const PORT = 3001;

http.createServer((req, res) => {
    const {url} = req;
    const urlMod = url.split('/')
    const urlNuevo = urlMod.slice(0, 3).join('/');
    console.log(url)
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(urlNuevo == "/rickandmorty/character"){
        const id = urlMod.pop();
        const match = [];
        data.forEach((e) => {
            if(e.id == id) {match.unshift(e)};
        })
        res.writeHead(200, {'Content-type' : 'application/json'});
        return res.end(JSON.stringify(match));
    }
    else {
        res.writeHead(400, {'Content-type' : 'text/plain'})
        res.end('Ruta no existe')
    }
}).listen(PORT, "localhost");