const express = require(`express`);
const router = express.Router();
//Import Controller
const categories_controller = require("../controllers/categories.controller");
//Destructuring Controllers
const {
  addOneCategory,
  findBySex,
  findBySexAndCategory,
  getAllCats,
  editCategory,
  deleteCat,
} = categories_controller;

router.post(`/addCategory`, addOneCategory);

router.put(`/editCategory`, editCategory);

router.get(`/getCategories`, getAllCats);

router.get(`/:sex`, findBySex);

router.get("/:sex/:category", findBySexAndCategory);

router.delete(`/:id`, deleteCat);

module.exports = router;
