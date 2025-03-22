const { Router } = require("express");
const CourseController = require("../controllers/CourseController.js");

const router = Router();

const courseController = new CourseController();

router.get("/course", (req, res) => courseController.getAll(req, res));
router.get("/course/:id", (req, res) => courseController.getOneById(req, res));
router.post("/course", (req, res) => courseController.createNew(req, res));
router.put("/course/:id", (req, res) => courseController.update(req, res));
router.delete("/course/:id", (req, res) => courseController.delete(req, res));

module.exports = router;