import express from "express";
import PostController from "../controllers/PostController.js";

const router = express.Router();

const postController = new PostController();

router
  .get("/posts", (req, res, next) => postController.get(req, res, next))
  .get("/posts/:id", (req, res, next) => postController.getById(req, res, next))
  .post("/posts", (req, res, next) => postController.createNew(req, res, next))
  .put("/posts/:id", (req, res, next) => postController.update(req, res, next))
  .delete("/posts/:id", (req, res, next) => postController.delete(req, res, next));

export default router;