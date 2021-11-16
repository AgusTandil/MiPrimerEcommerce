const express = require(`express`);
const router = express.Router();
const passport = require("passport");
//import controllers
const auth_controller = require("../controllers/auth.controller");
//Controlers llamados por destructuracion
const { register, login, logout, me, edit } = auth_controller;

router.post(`/register`, register);

router.post(`/login`, passport.authenticate(`local`), login);

router.post(`/logout`, logout);

router.get("/me", me);

module.exports = router;
