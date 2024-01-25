const users = require("../utils/users");

const loginControl = (datosLogin) => {
  const { email, password } = datosLogin;
  const userValor = users.find(
    (user) => user.email == email && user.password == password
  );
  if (!userValor) {
    throw new Error("clave o usuario incorrecto");
  } else {
    return ({ access: true })
  }
};

module.exports = loginControl;
