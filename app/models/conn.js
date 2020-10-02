import {
  DB,
  USER,
  PASSWORD,
  HOST,
  dialect as _dialect,
  pool as _pool
} from "../config/db.config.js";
import Sequelize from "sequelize";
import {
  customer,
  address
} from "./model.js";
const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: _dialect,
  // operatorsAliases: false,
  // storage:'../../data/db',
  pool: {
    max: _pool.max,
    min: _pool.min,
    acquire: _pool.acquire,
    idle: _pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customer = sequelize.define("customer", customer);
db.address = sequelize.define("address", address);

db.customer.hasMany(db.address);
db.address.belongsTo(db.customer);

sequelize.sync({
  // alter: true
}).then(() => {
  console.log('db created table');
  console.log("");
  console.log("***************************************************");
}).catch((err) => {
  console.log(err);
  console.log("");
});

export default db;