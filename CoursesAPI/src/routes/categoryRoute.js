const { Router } = require("express");
const CategoryController = require("../controllers/CategoryController.js");

const router = Router();

const categoryController = new CategoryController();

router.get("/category", (req, res) => categoryController.getAll(req, res));
router.get("/category/:id", (req, res) => categoryController.getOneById(req, res));
router.post("/category", (req, res) => categoryController.createNew(req, res));
router.put("/category/:id", (req, res) => categoryController.update(req, res));
router.delete("/category/:id", (req, res) => categoryController.delete(req, res));

module.exports = router;