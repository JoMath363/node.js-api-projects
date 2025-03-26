import express from "express";
import UserController from "../controllers/UserController.js";

const router = express.Router();

const userController = new UserController();

router
  .get("/users", (req, res, next) => userController.get(req, res, next))
  .get("/users/:id", (req, res, next) => userController.getById(req, res, next))
  .post("/users", (req, res, next) => userController.createNew(req, res, next))
  .put("/users/:id", (req, res, next) => userController.update(req, res, next))
  .delete("/users/:id", (req, res, next) => userController.delete(req, res, next));

export default router;