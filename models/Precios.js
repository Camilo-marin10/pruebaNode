import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import db from "../config/db.js";
import { toDefaultValue } from "sequelize/lib/utils";

const Precios = db.define("precios", {
  nombre: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
});

export default Precios;
