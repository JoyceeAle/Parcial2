let express = require("express");
let router = express.Router();

const proyecto = require("../Controllers/proyecto.controller.js");

router.post("/proyecto/create", proyecto.create);
router.get("/proyecto/all", proyecto.retrieveAllProyecto);
router.get("/proyecto/onebyid/:id", proyecto.getProyectoById);
router.put("/proyecto/update/:id", proyecto.updateById);
router.delete("/proyecto/delete/:id", proyecto.deleteById);


const tarea = require("../Controllers/tarea.controller.js");

router.post("/tarea/create", tarea.create);
router.get("/tarea/all", tarea.retrieveAllTarea);
router.get("/tarea/onebyid/:id", tarea.getTareaById);
router.put("/tarea/update/:id", tarea.updateById);
router.delete("/tarea/delete/:id", tarea.deleteById);


const usuario = require("../Controllers/usuario.controller.js");

router.post("/usuario/create", usuario.create);
router.get("/usuario/all", usuario.retrieveAllUsuario);
router.get("/usuario/onebyid/:id", usuario.getUsuarioById);
router.put("/usuario/update/:id", usuario.updateById);
router.delete("/usuario/delete/:id", usuario.deleteById);


module.exports = router;
