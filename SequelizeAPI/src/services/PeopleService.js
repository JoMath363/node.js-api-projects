const Service = require("./Service.js");

class PeopleService extends Service {
  constructor() {
    super("People");
  }
}

module.exports = PeopleService;