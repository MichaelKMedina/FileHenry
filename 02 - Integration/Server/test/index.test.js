const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
        await agent.get('/rickandmorty/character/1').expect(200)
    })

    it("Responde un objeto con las propiedades: id, name, species, gender, status, origin e image", async () => {
        const response = await agent.get('/rickandmorty/character/1');
        expect(response.body).toHaveProperty(["id" && "name" &&"species" && "gender" && "status" && "origin" &&"image"]);
    })

    it("Si hay un error responde con status: 500", async () => {
        const response = await agent.get('/rickandmorty/character/2132');
        expect(response.statusCode).toEqual(500);
    })
});

describe("GET /rickandmorty/login", () => {
    it("GET a login con información correcta nos devuelve objeto acces true", async () => {
        const objVal = {
            access: true,
        }
        const response = await agent.get('/rickandmorty/login?name=1&password=1234')
        expect(response.body).toEqual(objVal);
    })

    it("GET a login con información incorrecta nos devuelve objeto acces false", async () => {
        const objVal = {
            access: false,
        }
        const response = await agent.get('/rickandmorty/login?name=1&password=124');
        expect(response.body).toEqual(objVal);
    })
});


