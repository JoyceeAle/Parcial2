const env = require("./env.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, 
    },
  },
  pool: {
    max: env.pool.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Proyecto = require('../Models/proyecto.model.js')(sequelize, Sequelize);
db.Tarea = require('../Models/tarea.model.js')(sequelize, Sequelize);
db.Usuario = require('../Models/usuario.model.js')(sequelize, Sequelize);

module.exports = db;
