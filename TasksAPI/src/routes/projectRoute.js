import express from "express";
import ProjectController from "../Controller/ProjectController.js";

const projectRoute = express.Router();

projectRoute.post("/project", ProjectController.createProject)
  .get("/project", ProjectController.getAllProjects)
  .get("project/empty", ProjectController.getEmptyProjects)
  .get("project/recent", ProjectController.getRecentProjects)
  .get("/project/:id", ProjectController.getProjectById)
  .get("project/:id/tasks", ProjectController.getProjectTasks)
  .put("/project/:id", ProjectController.updateProjectById)
  .delete("/project/:id", ProjectController.deleteProjectById)
  .delete("/project/:id/tasks", ProjectController.deleteProjectById);

export default projectRoute;