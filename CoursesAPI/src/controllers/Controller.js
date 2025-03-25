class Controller {
  constructor(service) {
    this.service = service;
  }
 
  async getScope(req, res) {
    try {
      const { scope } = req.params;
      const registerList = await this.service.getRegisters(scope);
      return res.status(200).json(registerList);
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }
 
  async getById(req, res) {
    const { id } = req.params;
    try {
      const register = await this.service.getRegisterById(Number(id));
      return res.status(200).json(register);
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }
 
  async createNew(req, res) {
    const dataForCreation = req.body;
    try {
      const newCreatedRegister = await this.service.createRegister(dataForCreation);
      return res.status(200).json(newCreatedRegister);
    } catch (error) {
      return res.status(500).json({error: error.message});
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
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }
 
  async delete(req, res) {
    const { id } = req.params;
    try {
      await this.service.deleteRegister(Number(id));
      return res.status(200).json({ mensagem: `id ${id} deleted.` });
 
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }
}
 
module.exports = Controller;