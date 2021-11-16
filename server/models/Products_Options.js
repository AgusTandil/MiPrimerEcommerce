const Sequelize = require(`sequelize`);
const db = require("../db/db");

//-- User Model
class Products_Options extends Sequelize.Model {}
Products_Options.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    productId: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    optionId: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "products_options" }
);
module.exports = Products_Options;
