const dataSource = require("../database/models");

class Service {
  constructor(modelName) {
    this.model = modelName;
  }

  async getRegisters() {
    return dataSource[this.model].findAll();
  }

  async getRegisterById(id) {
    return dataSource[this.model].findByPk(id);
  }

  async getRegistersByScope(scopeName) {
    return dataSource[this.model].scope(scopeName).findAll(); 
  }

  async createRegister(registerData) {
    return dataSource[this.model].create(registerData);
  }

  async updateRegister(updatedData, id) {
    const updatedRegistersList = dataSource[this.model].update(updatedData, {
      where: { id: id }
    });
    return !(updatedRegistersList[0] === 0);
  }

  async deleteRegister(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Service;