import express from "express";
import userRoutes from "./userRoutes.js";
import postRoutes from "./postRoutes.js";
import commentsRoutes from "./commentRoutes.js";

const setRoutes = (app) => {
  app.use(express.json());
  app.use(userRoutes);
  app.use(postRoutes);
  app.use(commentsRoutes);
};

export default setRoutes;
