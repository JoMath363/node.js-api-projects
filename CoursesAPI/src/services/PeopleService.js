const Service = require("./Service.js");

class PeopleService extends Service {
  constructor() {
    super("People");
  }

  async getRegistrationsByStudent(id, scope) {
    const student = await super.getRegisterById(id);

    if (scope == "all") {
      return student.getAllStudentRegistrations();
    } 

    if (!scope) {
      return student.getStudentRegistrations();
    }

    throw new Error(`Invalid scope ${scope} called.`);
  }
}

module.exports = PeopleService;