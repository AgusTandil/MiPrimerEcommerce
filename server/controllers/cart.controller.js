const { Orders, Order_Details, User_Profile } = require(`../models`);

const cart_controller = {
  getAllforOneUserAdmin: async (req, res, next) => {
    try {
      const user = await User_Profile.findByPk(id);
      const { id } = user;
      const order = await Orders.findOne({
        where: { userId: id, orderStatus: "open" },
      });
      const { orderId } = order;
      const order_details = await Order_Details.findAll({
        where: { orderId: orderId },
      });
      return res.status(200).json(order_details);
    } catch (err) {
      next(err);
    }
  },

  createOrder: async (req, res, next) => {
    const { order, items, clientProfile } = req.body;
    let ordersDetails = [];
    try {
      const user = await User_Profile.findByPk(clientProfile.id);
      order.userProfileId = user.id;
      const newOrder = await Orders.create(order);
      if (items.length <= 1) {
        let oneItem = items.pop();
        const obj = {
          image: oneItem.image,
          title: oneItem.title,
          price: oneItem.price,
          quantity: oneItem.quantity,
          orderId: newOrder.id,
        };
        const oneOrder = await Order_Details.create(obj);
        return res.status(200).json([newOrder, oneOrder]);
      } else {
        items.map((item) => {
          ordersDetails.push({
            image: item.image,
            title: item.title,
            price: item.price,
            quantity: item.quantity,
            orderId: newOrder.id,
          });
        });
        const bulkOrders = await Order_Details.bulkCreate(ordersDetails);
        return res.status(200).json([newOrder, bulkOrders]);
      }
    } catch (err) {
      console.log(err);
    }
  },

  getHistoryOrders: async (req, res, next) => {
    const id = req.params.id;
    try {
      const orderHistory = await Orders.findAll({
        where: { userProfileId: id },
        include: {
          model: Order_Details,
        },
      });
      return res.status(200).json(orderHistory);
    } catch (err) {
      next(err);
    }
  },

  getOrders: async (req, res, next) => {
    try {
      const orderHistory = await Orders.findAll();
      return res.status(200).json(orderHistory);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = cart_controller;
