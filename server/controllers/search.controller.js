const { Products, Categories } = require(`../models`);
const { Op } = require("sequelize");

const search_controller = {
  searchList: async (req, res, next) => {
    const title = req.params.title;
    try {
      const products = await Products.findAll({
        where: {
          [Op.or]: {
            title: {
              [Op.iLike]: `%${title}%`,
            },
            category: {
              [Op.iLike]: `%${title}%`,
            },
            description: {
              [Op.iLike]: `%${title}%`,
            },
          },
        },
      });
      return res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = search_controller;
