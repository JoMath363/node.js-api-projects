import express from "express";
import PostController from "../controllers/PostController.js";
import CommentController from "../controllers/CommentController.js";

const router = express.Router();

const postController = new PostController();
const commentController = new CommentController();

router
  .get("/posts", (req, res, next) => postController.get(req, res, next))
  .get("/posts/:id", (req, res, next) => postController.getById(req, res, next))
  .post("/posts", (req, res, next) => postController.createNew(req, res, next))
  .put("/posts/:id", (req, res, next) => postController.update(req, res, next))
  .delete("/posts/:id", (req, res, next) => postController.delete(req, res, next))
  .get("/posts/:id/comments", (req, res, next) => commentController.getPostComments(req, res, next));


export default router;