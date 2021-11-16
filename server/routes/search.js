const express = require(`express`);
const router = express.Router();

const search_controller = require("../controllers/search.controller");

const { searchList } = search_controller;

router.get(`/:title`, searchList);

module.exports = router;
