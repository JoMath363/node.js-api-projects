class Controller {
  constructor(model) {
    this.model = model;
  }

  async get(req, res, next) {
    try {
      const registersList = await this.model.find();

      res.status(200).send(registersList);  
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next){
    const { id } = req.params;

    try {
      const registersList = await this.model.findById(id);

      res.status(200).send(registersList);  
    } catch (error) {
      next(error);
    }
  }

  async createNew(req, res, next) {
    const newData = req.body;

    try {
      const newRegister = await this.model.create(newData);

      res.status(200).send(newRegister);  
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    const { id } = req.params;
    const newData = req.body;

    try {
      const updatedRegister = await this.model.findByIdAndUpdate(id, newData);

      res.status(200).send(updatedRegister);  
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    const { id } = req.params;

    try {
      await this.model.findByIdAndDelete(id);

      res.status(200).send({ message: `Register deleted with sucess from ${this.model.collection.collectionName}`});  
    } catch (error) {
      next(error);
    }
  }
}

export default Controller;