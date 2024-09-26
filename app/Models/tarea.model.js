module.exports = (sequelize, Sequelize) => {
    const Tarea = sequelize.define("tarea", {
      
      idTarea: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      idProyecto: {
        type: Sequelize.INTEGER,
      },
      nombre: {
        type: Sequelize.STRING,
      },
      estado: {
        type: Sequelize.STRING,
      },
      fechaCreacion: {
        type: Sequelize.DATE,
      },
      fechaVencimiento: {
        type: Sequelize.DATE,
      }
    });
    return Tarea;
  };