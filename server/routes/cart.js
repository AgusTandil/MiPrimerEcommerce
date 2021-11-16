const express = require(`express`);
const router = express.Router();

//Import Controller
const cart_controller = require("../controllers/cart.controller");
//Destructuring Controllers
const { createOrder, getHistoryOrders, getOrders } = cart_controller;

router.post("/createOrder", createOrder);

router.get("/history/:id", getHistoryOrders);

router.get("/orderList", getOrders);

module.exports = router;
