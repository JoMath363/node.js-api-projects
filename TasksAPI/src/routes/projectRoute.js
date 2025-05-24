import express from "express";
import ProjectController from "../Controller/ProjectController.js";

const projectRoute = express.Router();

projectRoute.post("/project", ProjectController.createProject);
projectRoute.get("/project", ProjectController.getAllProjects);
projectRoute.get("/project/:id", ProjectController.getProjectById);
projectRoute.put("/project/:id", ProjectController.updateProjectById);
projectRoute.delete("/project/:id", ProjectController.deleteProjectById);

export default projectRoute;