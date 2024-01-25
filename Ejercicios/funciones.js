let p = [
  { 
  email: "1", 
  password: "1234" 
  }
];
let email = 1
let password = 1234

let users = p.find(
  (user) => user.email == email && user.password == password
);

console.log(users)
