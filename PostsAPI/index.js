import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import setRoutes from "./src/routes/index.js";
import setMiddlewares from "./src/middlewares/index.js";

const app = express();

dotenv.config();
const mongoDBURL = process.env.DB_URL;
const port = 3000;

setRoutes(app);
setMiddlewares(app);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to the database successfully.");
    app.listen(port, () => {
      console.log(`App is listening on port: ${port}`);
      console.log(`Server running at: http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error.message);
  });