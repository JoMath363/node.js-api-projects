import ProjectSchema from "../models/ProjectSchema.js";

class ProjectController {
  static async createProject(req, res) {
    try {
      if (
        !req.body.name ||
        !req.body.description
      ) {
        return res.status(400).send("Name and description are required.");
      }

      const result = await ProjectSchema.create(req.body);

      res.status(200).send({
        message: "New project created.", 
        data: result
      });
    } catch (error) {
      res.status(500).send(`Internal server error: ${error.message}`);
    }
  }

  static async getAllProjects(req, res) {
    try {
      const result = await ProjectSchema.getAll();

      res.status(200).send({
        message: "Projects fetched with sucess.", 
        data: result
      });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getEmptyProjects(req, res) {
    try {
      const result = await ProjectSchema.getEmpty();

      res.status(200).send({
        message: "Projects fetched with sucess.", 
        data: result
      });
    } catch (error) {
      res.status(500).send(`Internal server error: ${error.message}`);
    }
  }

  static async getRecentProjects(req, res) {
    try {
      const result = await ProjectSchema.getRecent();

      res.status(200).send({
        message: "Projects fetched with sucess.", 
        data: result
      });
    } catch (error) {
      res.status(500).send(`Internal server error: ${error.message}`);
    }
  }

  static async getProjectById(req, res) {
    try {
      const { id } = req.params;

      const result = await ProjectSchema.getById({ id });

      res.status(200).send({
        message: "Project fetched with sucess.", 
        data: result
      });
    } catch (error) {
      res.status(500).send(`Internal server error: ${error.message}`);
    }
  }

  static async getProjectTasks(req, res) {
    try {
      const { id } = req.params;

      const result = await ProjectSchema.getTasks({ id });

      res.status(200).send({
        message: "Tasks fetched with sucess.", 
        data: result
      });
    } catch (error) {
      res.status(500).send(`Internal server error: ${error.message}`);
    }
  }

  static async updateProjectById(req, res) {
    try {
      const { id } = req.params;

      if (
        !req.body.name ||
        !req.body.description
      ) {
        return res.status(400).send("Name and description are required.");
      }

      const result = await ProjectSchema.updateById({ ...req.body, id });

      res.status(200).send({
        message: "Project updated with sucess.", 
        data: result
      });
    } catch (error) {
      res.status(500).send(`Internal server error: ${error.message}`);
    }
  }

  static async deleteProjectById(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).send("Id is required.");
      }

      await ProjectSchema.deleteById({ id });

      res.status(200).send({
        message: "Project fetched with sucess.", 
        data: []
      });
    } catch (error) {
      res.status(500).send(`Internal server error: ${error.message}`);
    }
  }
}

export default ProjectController;