const http = require("http")


http.createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url} = req;
    if(url.includes("/rickandmorty/character"))
    res.writeHead(200, {})
}).listen(3001, "localhost");