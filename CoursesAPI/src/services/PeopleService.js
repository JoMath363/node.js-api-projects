const Service = require("./Service.js");

class PeopleService extends Service {
  constructor() {
    super("People");
  }

  async getRegistrationsByStudent(id) {
    const student = await super.getOneRegisterById(id);
    const studentRegistrations = student.getStudentRegistrations();
    return studentRegistrations;
  }
}

module.exports = PeopleService;