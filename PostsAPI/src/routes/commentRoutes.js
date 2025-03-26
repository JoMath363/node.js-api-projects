import express from "express";
import CommentController from "../controllers/CommentController.js";

const router = express.Router();

const commentController = new CommentController();

router
  .get("/comments", (req, res, next) => commentController.get(req, res, next))
  .get("/comments/:id", (req, res, next) => commentController.getById(req, res, next))
  .post("/comments", (req, res, next) => commentController.createNew(req, res, next))
  .put("/comments/:id", (req, res, next) => commentController.update(req, res, next))
  .delete("/comments/:id", (req, res, next) => commentController.delete(req, res, next));

export default router;