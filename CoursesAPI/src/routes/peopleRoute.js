const { Router } = require("express");
const PeopleController = require("../controllers/PeopleController.js");
const RegistrationController = require("../controllers/RegistrationController.js");

const router = Router();

const peopleController = new PeopleController();
const registrationController = new RegistrationController();

router.get("/people", (req, res) => peopleController.getDefault(req, res));
router.get("/people/:id", (req, res) => peopleController.getById(req, res));
router.get("/people/scope/:scope", (req, res) => peopleController.getByScope(req, res));
router.post("/people", (req, res) => peopleController.createNew(req, res));
router.put("/people/:id", (req, res) => peopleController.update(req, res));
router.delete("/people/:id", (req, res) => peopleController.delete(req, res));

router.get("/people/:id/registration", (req, res) => peopleController.getRegistrations(req, res));
router.post("/people/:id/registration", (req, res) => registrationController.createNew(req, res));

module.exports = router;