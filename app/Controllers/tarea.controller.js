const db = require('../Config/db.config.js');
const Tarea = db.Tarea;

exports.create = (req, res) => {
  let tarea = {};

  try {
    autor.idProyecto = req.body.idProyecto;
    autor.nombre = req.body.nombre;
    autor.estado = req.body.estado;
    autor.fechaCreacion = req.body.fechaCreacion;
    autor.fechaVencimiento = req.body.fechaVencimiento;

    Tarea.create(tarea).then((result) => {
      res.status(200).json({
        message: `Registro creado exitosamente con id = ${result.id}`,
        autor: result,
      });
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al momento de crear!",
      error: error.message,
    });
}
};

exports.retrieveAllTarea = (req, res) => {
Tarea.findAll()
  .then(tareaInfo => {
    res.status(200).json({
      message: "Tareas recuperadas exitosamente!",
      tareas: tareaInfo
    });
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      message: "Error al obtener tareas!",
      error: error.message
    });
  });
};

exports.getTareaById = (req, res) => {
let tareaId = req.params.id;
Tarea.findByPk(tareaId)
.then(tarea => {
    if (tarea) {
      res.status(200).json({
        message: `Tarea obtenida con id = ${tareaId}`,
        tarea: tarea
      });
    } else {
      res.status(404).json({
        message: `No se encontró la tarea con id = ${tareaId}`
      });
    }
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      message: "No fue posible obtener la tarea",
      error: error.message
    });
  });
};

exports.updateById = async (req, res) => {
try {
  let tareaId = req.params.id;
  let tarea = await Tarea.findByPk(tareaId);
  if (!tarea) {
    res.status(404).json({
      message: `No fue posible actualizar la tarea con id = ${tareaId}`,
      tarea: "",
      error: "404"
    });
  } else {
    let updatedObject = {
      idProyecto: req.body.idProyecto,
      nombre: req.body.nombre,
      estado: req.body.estado,
      fechaCreacion: req.body.fechaCreacion,
      fechaVencimiento: req.body.fechaVencimiento,
    };
    let result = await Tarea.update(updatedObject, { returning: true, where: { idTarea: tareaId } });

    if (!result) {
      res.status(500).json({
        message: "Error -> No fue posible actualizar la tarea con id = " + req.params.id,
        error: "Can NOT Updated"
      });
    }

    res.status(200).json({
      message: `Tarea actualizada con éxito, id = ${tareaId}`,
      tarea: updatedObject
    });
  }
} catch (error) {
  res.status(500).json({
    message: "Error -> No se puede actualizar la tarea con id = " + req.params.id,
    error: error.message
  });
}
};

exports.deleteById = async (req, res) => {
try {
  let tareaId = req.params.id;
  let tarea = await Tarea.findByPk(tareaId);

  if (!tarea) {
    res.status(404).json({
      message: `No existe la tarea con id = ${tareaId}`,
      error: "404"
    });
} else {
    await tarea.destroy();
    res.status(200).json({
      message: `Tarea eliminada con éxito, id = ${tareaId}`,
      tarea: tarea
    });
  }
} catch (error) {
  res.status(500).json({
    message: "Error -> No se puede eliminar la tarea con id = " + req.params.id,
    error: error.message
  });
}
};