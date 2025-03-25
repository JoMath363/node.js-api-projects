const Controller = require("./Controller.js");
const PeopleService = require("../services/PeopleService.js");

const peopleService = new PeopleService();

class PeopleController extends Controller {
  constructor() {
    super(peopleService);
  }

  async getRegistrations(req, res) {
    try {
      const { student_id, scope } = req.params;
      const registrationsList = await peopleService.getRegistrationsByStudent(student_id, scope);
      return res.status(200).json(registrationsList);
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }
}

module.exports = PeopleController;