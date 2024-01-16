const http = require("http")
const PORT = 3001;
const getCharById = require("./controllers/getCharById");


http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;
    const urlMod = url.split('/')
    if(url.includes("/rickandmorty/character")){
        const id = urlMod.pop();
        getCharById(res, id);
    }
}).listen(PORT, "localhost");