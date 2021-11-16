const { Products, Categories } = require(`../models`);

const products_controller = {
  getAll: async (req, res, next) => {
    try {
      const products = await Products.findAll();
      return res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  },

  getOne: async (req, res, next) => {
    const name = req.params.name;
    try {
      const product = await Products.findOne({
        where: { title: name },
      });
      return res.status(200).send(product);
    } catch (err) {
      console.log(err);
    }
  },

  addOneProduct: async (req, res, next) => {
    const body = req.body;
    const nombre = req.body.category;
    console.log(body);
    try {
      const product = await Products.create(body);
      console.log(product);
      const category = await Categories.findOne({ where: { name: nombre } });
      console.log(category);
      await product.addCategories(category);
      return res.status(200).json(product);
    } catch (err) {
      next(err);
    }
  },

  edit: async (req, res, next) => {
    const { id } = req.body;
    try {
      const [numberAfected, product] = await Products.update(req.body, {
        where: { id: id },
        returning: true,
      });
      //update nos retorna las filas que fueron afectadas y un arreglo de las mismas
      res.status(201).json(product[0]);
    } catch (err) {
      next(err);
    }
  },

  deleteProduct: async (req, res, next) => {
    const id = req.params.id;
    try {
      const product = await Products.findByPk(id);
      product.destroy();
      res.sendStatus(202);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = products_controller;
