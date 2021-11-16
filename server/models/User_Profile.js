const Sequelize = require(`sequelize`);
const db = require("../db/db");
const crypto = require(`bcrypt`);

//-- User Model
class User_Profile extends Sequelize.Model {}
User_Profile.init(
  {
    access: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "user",
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    fullName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    country: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    salt: {
      type: Sequelize.STRING,
    },
  },
  { sequelize: db, modelName: "user_profile" }
);

//hookardos!
User_Profile.addHook(`beforeCreate`, function (user) {
  return crypto
    .genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return user.hashPass(user.password, user.salt);
    })
    .then((hash) => (user.password = hash));
});

//instance method
User_Profile.prototype.hashPass = function (password, salt) {
  return crypto.hash(password, salt);
};

User_Profile.prototype.validPassword = function (password, salt) {
  return this.hashPass(password, salt).then((pass) => {
    return this.password === pass;
  });
};

module.exports = User_Profile;
