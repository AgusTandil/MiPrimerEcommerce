const Sequelize = require(`sequelize`);
const db = require("../db/db");

//-- User Model
class Products_Categories extends Sequelize.Model {}
Products_Categories.init(
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
    categoryId: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "products_categories" }
);
module.exports = Products_Categories;
