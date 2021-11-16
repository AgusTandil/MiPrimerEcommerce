const { User_Profile } = require(`../models`);

const auth_controller = {
  register: async (req, res, next) => {
    try {
      const user = await User_Profile.create(req.body);
      return res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  },

  login: (req, res, next) => {
    const user = {
      access: req.user.access,
      address: req.user.address,
      country: req.user.country,
      email: req.user.email,
      fullName: req.user.fullName,
      id: req.user.id,
      phone: req.user.phone,
    };
    try {
      return res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  },

  logout: (req, res, next) => {
    try {
      req.logout();
      return res.redirect("/");
    } catch (err) {
      next(err);
    }
  },

  me: (req, res, next) => {
    try {
      if (!req.user) {
        return res.sendStatus(401);
      } else {
        const userLogged = {
          access: req.user.access,
          id: req.user.id,
          email: req.user.email,
          fullName: req.user.fullName,
          address: req.user.address,
          country: req.user.country,
          phone: req.user.phone,
        };
        return res.send(userLogged);
      }
    } catch (err) {
      next(err);
    }
  },
};

module.exports = auth_controller;
