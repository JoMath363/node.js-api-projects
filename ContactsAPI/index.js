import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import contactRoute from "./routes/contactRoute.js";
import handleErrors from "./middlewares/handleErrors.js";
import handle404 from "./middlewares/handle404.js";

const app = express();
app.use(express.json());
dotenv.config();

const mongoDBURL = process.env.DB_URL;
const port = 5555;

//Routes
app.use("/contact", contactRoute);
app.use(handle404);

app.use(handleErrors);

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
