import TaskSchema from "../models/TaskSchema.js";

class TaskController {
  static async createTask(req, res) {
    try {
      if (
        !req.body.projectId ||
        !req.body.title ||
        !req.body.description ||
        !req.body.status ||
        !req.body.priority ||
        !req.body.dueDate
      ) {
        return res.status(400).send("Name and description are required.");
      }

      const result = await TaskSchema.create(req.body);

      res.status(200).send({
        message: "New task created.", 
        data: result
      });
    } catch (error) {
      res.status(500).send(`Internal server error: ${error.message}`);
    }
  }

  static async getAllTasks(req, res) {
    try {
      const result = await TaskSchema.getAll();

      res.status(200).send({
        message: "Tasks fetched with sucess.", 
        data: result
      });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getTaskById(req, res) {
    try {
      const { id } = req.params;

      const result = await TaskSchema.getById({ id });

      res.status(200).send({
        message: "Task fetched with sucess.", 
        data: result
      });
    } catch (error) {
      res.status(500).send(`Internal server error: ${error.message}`);
    }
  }

  static async updateTaskById(req, res) {
    try {
      const { id } = req.params;

      if (
        !req.body.projectId ||
        !req.body.title ||
        !req.body.description ||
        !req.body.status ||
        !req.body.priority ||
        !req.body.dueDate
      ) {
        return res.status(400).send("Name and description are required.");
      }

      const result = await TaskSchema.updateById({ ...req.body, id });

      res.status(200).send({
        message: "Task updated with sucess.", 
        data: result
      });
    } catch (error) {
      res.status(500).send(`Internal server error: ${error.message}`);
    }
  }

  static async deleteTaskById(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).send("Id is required.");
      }

      await TaskSchema.deleteById({ id });

      res.status(200).send({
        message: "Task fetched with sucess.", 
        data: []
      });
    } catch (error) {
      res.status(500).send(`Internal server error: ${error.message}`);
    }
  }
}

export default TaskController;