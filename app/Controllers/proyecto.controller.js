const db = require('../Config/db.config.js');
const Proyecto = db.Proyecto;

exports.create = (req, res) => {
  let proyecto = {};

  try {
    libro.idUsuario = req.body.idUsuario;
    libro.nombre = req.body.nombre;
    libro.descripcion = req.body.descripcion;
    libro.fechaCreacion = req.body.fechaCreacion;

    Proyecto.create(proyecto).then((result) => {
      res.status(200).json({
        message: `Registro creado exitosamente con id = ${result.id}`,
        proyecto: result,
      });
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al momento de crear!",
      error: error.message,
    });
}
};

exports.retrieveAllProyecto = (req, res) => {
Proyecto.findAll()
  .then(proyectoInfo => {
    res.status(200).json({
      message: "Proyectos recuperados exitosamente!",
      proyectos: proyectoInfo
    });
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      message: "Error al obtener proyectos!",
      error: error.message
    });
  });
};

exports.getProyectoById = (req, res) => {
let proyectoId = req.params.id;
Proyecto.findByPk(proyectoId)
.then(proyecto => {
    if (proyecto) {
      res.status(200).json({
        message: `Proyecto obtenido con id = ${proyectoId}`,
        proyecto: proyecto
      });
    } else {
      res.status(404).json({
        message: `No se encontró el proyecto con id = ${proyectoId}`
      });
    }
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      message: "No fue posible obtener el proyecto",
      error: error.message
    });
  });
};

exports.updateById = async (req, res) => {
try {
  let proyectoId = req.params.id;
  let proyecto = await Proyecto.findByPk(proyectoId);
  if (!proyecto) {
    res.status(404).json({
      message: `No fue posible actualizar el proyecto con id = ${proyectoId}`,
      proyecto: "",
      error: "404"
    });
  } else {
    let updatedObject = {
      idUsuario: req.body.idUsuario,
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      fechaCreacion: req.body.fechaCreacion,
    };
    let result = await Proyecto.update(updatedObject, { returning: true, where: { idProyecto: proyectoId } });

    if (!result) {
      res.status(500).json({
        message: "Error -> No fue posible actualizar el proyecto con id = " + req.params.id,
        error: "Can NOT Updated"
      });
    }

    res.status(200).json({
      message: `Proyecto actualizado con éxito, id = ${proyectoId}`,
      proyecto: updatedObject
    });
  }
} catch (error) {
  res.status(500).json({
    message: "Error -> No se puede actualizar el proyecto con id = " + req.params.id,
    error: error.message
  });
}
};

exports.deleteById = async (req, res) => {
try {
  let proyectoId = req.params.id;
  let proyecto = await Proyecto.findByPk(proyectoId);

  if (!proyecto) {
    res.status(404).json({
      message: `No existe el proyecto con id = ${proyectoId}`,
      error: "404"
    });
} else {
    await proyecto.destroy();
    res.status(200).json({
      message: `Proyecto eliminado con éxito, id = ${proyectoId}`,
      proyecto: proyecto
    });
  }
} catch (error) {
  res.status(500).json({
    message: "Error -> No se puede eliminar el proyecto con id = " + req.params.id,
    error: error.message
  });
}
};