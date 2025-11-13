import { exit } from "node:process";
import categorias from "./categorias.js";
import Categorias from "../models/Categorias.js";
import Precios from "../models/Precios.js";
import db from "../config/db.js";
import precios from "./precios.js";
import { truncate } from "node:fs";

const importarDatos = async () => {
  try {
    //Autenticar
    await db.authenticate();

    //Generar las columnas
    await db.sync();

    //Insertar los datos
    await Promise.all([
      Categorias.bulkCreate(categorias),
      Precios.bulkCreate(precios),
    ]);
  } catch (error) {
    console.log(error);
    exit(1);
  }
};

const eliminarDatos = async () => {
  try {
    //Opcion 1
    // await Promise.all([
    //   Categorias.destroy({ where: {}, truncate: true }),
    //   Precios.destroy({ where: {}, truncate: true }),
    // ]);

    //Opcion recomendada
    await db.sync({ force: true });
    console.log("Datos eliminados correctamente");
    exit();
  } catch (error) {
    console.log(error);
    exit(1);
  }
};

if (process.argv[2] === "-i") {
  importarDatos();
}
if (process.argv[2] === "-e") {
  eliminarDatos();
}
