const Controller = require("./Controller.js");
const PeopleService = require("../services/PeopleService.js");

const peopleService = new PeopleService();

class PeopleController extends Controller {
  constructor() {
    super(peopleService);
  }

  async getRegistrations(req, res) {
    try {
      const studentId = Number(req.params.id);
      const registrationsList = await peopleService.getRegistrationsByStudent(studentId);
      return res.status(200).json(registrationsList);
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }
}

module.exports = PeopleController;