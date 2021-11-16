const Sequelize = require(`sequelize`);
const db = require("../db/db");

//-- User Model
class Order_Details extends Sequelize.Model {}
Order_Details.init(
  {
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    quantity: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "order_details" }
);
module.exports = Order_Details;
