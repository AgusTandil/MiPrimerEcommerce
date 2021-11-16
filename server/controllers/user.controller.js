const { User_Profile } = require(`../models`);

const user_controller = {
  allUsersAdmin: async (req, res, next) => {
    try {
      const users = await User_Profile.findAll();
      return res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  },

  edit: async (req, res, next) => {
    const { id } = req.body;
    try {
      const [numberAfected, user] = await User_Profile.update(req.body, {
        where: { id: id },
        returning: true,
      });
      //update nos retorna las filas que fueron afectadas y un arreglo de las mismas
      res.status(201).json(user[0]);
    } catch (err) {
      next(err);
    }
  },

  toAdmin: async (req, res, next) => {
    const { id, access } = req.body;
    try {
      const [numberAfected, user] = await User_Profile.update(
        { access: access },
        {
          where: { id: id },
        }
      );
      res
        .status(201)
        .json({ message: `User change to ${access} successfully` });
    } catch (err) {
      next(err);
    }
  },

  deleteUser: async (req, res, next) => {
    const id = req.params.id;
    try {
      const user = await User_Profile.findByPk(id);
      user.destroy();
      res.sendStatus(202);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = user_controller;
