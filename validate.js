const crearpropiedad = async (req, res) => {
  console.log("Enviando..");
  await check("titulo")
    .notEmpty()
    .withMessage("El campo de titulo es obligatorio")
    .run(req);

  await check("descripcion")
    .notEmpty()
    .withMessage("El campo de descripcion no puede estar vacio")
    .run(req);

  await check("categoria")
    .equals("Edificio")
    .withMessage("Tiene que seleccionar una categoria")
    .run(req);

  await check("precio")
    .equals("2")
    .withMessage("Tiene que seleccionar un precio")
    .run(req);

  await check("habitaciones")
    .equals("2")
    .withMessage("Tiene que seleccionar un numero de habitaciones")
    .run(req);

  await check("parqueaderos")
    .equals("2")
    .withMessage("Tiene que seleccionar un numero de parqueaderos")
    .run(req);

  await check("wc")
    .equals("2")
    .withMessage("Tiene que seleccionar un numero de baños")
    .run(req);

  return req;
};
