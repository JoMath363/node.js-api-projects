class Controller {
  constructor(service) {
    this.service = service;
  }
 
  async getAll(req, res) {
    try {
      const registerList = await this.service.getAllRegisters();
      return res.status(200).json(registerList);
    } catch (erro) {
      // erro
    }
  }
 
  async getOneById(req, res) {
    const { id } = req.params;
    try {
      const register = await this.service.getOneRegisterById(Number(id));
      return res.status(200).json(register);
    } catch (erro) {
      // erro
    }
  }
 
  async createNew(req, res) {
    const dataForCreation = req.body;
    try {
      const newCreatedRegister = await this.service.createRegister(dataForCreation);
      return res.status(200).json(newCreatedRegister);
    } catch (erro) {
      // erro
    }
  }
 
  async update(req, res) {
    const { id } = req.params;
    const updatedData = req.body;
    try {
      const gotUpdated = await this.service.updateRegister(updatedData, Number(id));
      if (!gotUpdated) {
        return res.status(400).json({ mensagem: "Register was not updated." });
      }
      return res.status(200).json({ mensagem: "Updated with sucess!" });
    } catch (erro) {
      // erro
    }
  }
 
  async delete(req, res) {
    const { id } = req.params;
    try {
      await this.service.deleteRegister(Number(id));
      return res.status(200).json({ mensagem: `id ${id} deleted.` });
 
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}
 
module.exports = Controller;