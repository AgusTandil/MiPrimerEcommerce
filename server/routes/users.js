const express = require(`express`);
const router = express.Router();

const user_controller = require("../controllers/user.controller");

const { edit, toAdmin, deleteUser, allUsersAdmin } = user_controller;

router.get(`/allUsers`, allUsersAdmin);

router.put(`/edit`, edit);

router.put(`/toAdmin`, toAdmin);

router.delete(`/delete/:id`, deleteUser);

module.exports = router;
