const Sequelize = require(`sequelize`);
const db = require("../db/db");

//-- User Model
class Orders extends Sequelize.Model {}
Orders.init(
  {
    orderAddress: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    orderDate: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    orderPaymentType: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    totalAmmount: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    orderStatus: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  { sequelize: db, modelName: "orders" }
);
module.exports = Orders;
