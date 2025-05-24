import express from "express";
import TaskController from "../Controller/TaskController.js";

const taskRoute = express.Router();

taskRoute.post("/task", TaskController.createTask);
taskRoute.get("/task", TaskController.getAllTasks);
taskRoute.get("/task/:id", TaskController.getTaskById);
taskRoute.put("/task/:id", TaskController.updateTaskById);
taskRoute.delete("/task/:id", TaskController.deleteTaskById);

export default taskRoute;