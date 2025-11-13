import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import db from "../config/db.js";
import { toDefaultValue } from "sequelize/lib/utils";

const Categorias = db.define("categorias", {
  nombre: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
});

export default Categorias;
