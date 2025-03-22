import express from "express";
import ContactController from "../controllers/contactController.js";
import pagination from "../middlewares/pagination.js";

const app = express.Router();

app
   .get("/", ContactController.getContacts, pagination)
   .post("/", ContactController.addNewContact)
   .put("/:id", ContactController.updateContactById)
   .delete("/:id", ContactController.deleteContactById);

export default app;