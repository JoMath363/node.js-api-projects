const Service = require("./Service.js");

class PeopleService extends Service {
  constructor() {
    super("people");
  }
}

module.exports = PeopleService;