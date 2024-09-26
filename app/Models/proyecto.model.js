module.exports = (sequelize, Sequelize) => {
    const Proyecto = sequelize.define("proyecto", {
      
      idProyecto: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      idUsuario: {
        type: Sequelize.INTEGER,
      },
      nombre: {
        type: Sequelize.STRING,
      },
      descripcion: {
        type: Sequelize.STRING,
      },
      fechaCreacion: {
        type: Sequelize.DATE,
      },
    });
    return Proyecto;
  };
  