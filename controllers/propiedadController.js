const admin = (req, res) => {
  res.render("propiedades/admin", {
    tituloPagina: "Mis propiedades",
    csrfToken: req.csrfToken(),
    headerAdmin: true,
  });
};

const crear = (req, res) => {
  res.render("propiedades/crear", {
    tituloPagina: "Crear nueva propiedad",
    csrfToken: req.csrfToken(),
    headerAdmin: true,
  });
};

export { admin, crear };
