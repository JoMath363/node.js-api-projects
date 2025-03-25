const { Router } = require("express");
const PeopleController = require("../controllers/PeopleController.js");
const RegistrationController = require("../controllers/RegistrationController.js");

const router = Router();

const peopleController = new PeopleController();
const registrationController = new RegistrationController();

router.get("/people/:scope?", (req, res) => peopleController.getByScope(req, res));
router.get("/people/id/:id", (req, res) => peopleController.getById(req, res));
router.post("/people", (req, res) => peopleController.createNew(req, res));
router.put("/people/:id", (req, res) => peopleController.update(req, res));
router.delete("/people/:id", (req, res) => peopleController.delete(req, res));

router.get("/people/:student_id/registration/:scope?", (req, res) => peopleController.getRegistrations(req, res));
router.get("/people/:student_id/registration/id/:id", (req, res) => registrationController.getById(req, res));
router.post("/people/:student_id/registration", (req, res) => registrationController.createNew(req, res));
router.put("/people/:student_id/registration", (req, res) => registrationController.update(req, res));
router.delete("/people/:student_id/registration", (req, res) => registrationController.delete(req, res));

module.exports = router;