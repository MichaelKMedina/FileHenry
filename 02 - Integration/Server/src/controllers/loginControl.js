const users = require("../utils/users");

const loginControl = (datosLogin) => {
  const { email, password } = datosLogin;
  const userValor = users.find(
    (user) => user.email == String(email) && user.password == String(password)
  );
  if (!userValor) {
    throw new Error("clave o usuario incorrecto");
  } else {
    return ({ access: true })
  }
};

module.exports = loginControl;
