import bcrypt from "bcrypt";

const usuarios = [
  {
    nombre: "Juan Camilo Marin",
    email: "marin.jc2005@gmail.com",
    confirmado: 1,
    password: bcrypt.hashSync("123456", 10),
  },
];

export default usuarios;
