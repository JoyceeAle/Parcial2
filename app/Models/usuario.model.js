module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
      
      idUsuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: Sequelize.STRING,
      },
      correo: {
        type: Sequelize.STRING,
      },
      contrasena: {
        type: Sequelize.STRING,
      },
      fechaCreacion: {
        type: Sequelize.DATE,
      },
    });
    return Usuario;
  };
  