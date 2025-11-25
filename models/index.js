import Propiedades from "./Propiedades.js";
import Precios from "./Precios.js";
import Categorias from "./Categorias.js";
import Usuarios from "./Usuarios.js";

Propiedades.belongsTo(Precios, { foreignKey: "precioId" });
Propiedades.belongsTo(Categorias, { foreignKey: "categoriaId" });
Propiedades.belongsTo(Usuarios, { foreignKey: "usuarioId" });

export { Propiedades, Precios, Categorias, Usuarios };
