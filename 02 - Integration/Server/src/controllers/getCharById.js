const axios = require("axios");

const getCharById = (res, id) => {
    axios(`https://rym2.up.railway.app/api/character/${id}?key=mikemedina`)
    .then(({ data }) => {
        const {id, name, gender, species, origin, image, status} = data;
        const character = {id, name, gender, species, origin, image, status}
        res.writeHead(200, {'Content-type' : 'application/json'});
        return res.end(JSON.stringify(character));
    })
    .catch((err) => {
        res.writeHead(500, {'Content-type' : 'text/plain'});
        return res.end(err.message);
    });

}


module.exports = getCharById;
