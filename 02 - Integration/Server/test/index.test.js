const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("GET /rickandmorty/character/:id", () => {
  it("Responde con status: 200", async () => {
    await agent.get("/rickandmorty/character/1").expect(200);
  });

  it("Responde un objeto con las propiedades: id, name, species, gender, status, origin e image", async () => {
    const response = await agent.get("/rickandmorty/character/1");
    expect(response.body).toHaveProperty([
      "id" &&
        "name" &&
        "species" &&
        "gender" &&
        "status" &&
        "origin" &&
        "image",
    ]);
  });

  it("Si hay un error responde con status: 404", async () => {
    await agent.get("/rickandmorty/character/2132").expect(404);
  });
});

describe("GET /rickandmorty/login", () => {
  it("GET a login con información correcta nos devuelve objeto acces true", async () => {
    const { body } = await agent.get(
      "/rickandmorty/login?email=1&password=1234"
    );
    console.log(body);
    expect(body.access).toEqual(true);
  });

  it("GET a login con información incorrecta nos devuelve objeto acces false", async () => {
    const { body } = await agent.get(
      "/rickandmorty/login?email=1&password=134"
    );
    expect(body).toEqual("clave o usuario incorrecto");
  });
});