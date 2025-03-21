const { Router } = require("express");
const PeopleController = require("../controllers/PeopleController.js");

const router = Router();

const controller = new PeopleController();

router.get("/people", (req, res) => controller.getAll(req, res));
router.get("/people/:id", (req, res) => controller.getOneById(req, res));
router.post("/people", (req, res) => controller.createNew(req, res));
router.put("/people/:id", (req, res) => controller.update(req, res));
router.delete("/people/:id", (req, res) => controller.delete(req, res));

module.exports = router;