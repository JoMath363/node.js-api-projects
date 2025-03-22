import NotFound from "../errors/NotFound.js";
import contactModel from "../models/contactModel.js";

class ContactController {
   static async getContacts(req, res, next) {
      try {
         const { name, id } =  req.query;
         const search = {};

         if (name) search.name = {$regex: name, $options: "i"};
         if (id) search.id = id;

         req.result = contactModel.find(search);

         next();
      } catch (error) {
         next(error);
      }
   }

   static async addNewContact(req, res, next) {
      try {
         const newContact = await contactModel.create(req.body);

         res.status(201).send(newContact);
      } catch (error) {
         next(error);
      }
   }

   static async updateContactById(req, res, next) {
      try {
         const id = req.params.id;

         const updatedContact = await contactModel.findByIdAndUpdate(id, req.body);

         if (updatedContact !== null) {
            res.status(200).send(updatedContact);
         } else {
            next(new NotFound());
         }
      } catch (error) {
         next(error);
      }
   }

   static async deleteContactById(req, res, next) {
      try {
         const id = req.params.id;

         await contactModel.findByIdAndDelete(id);

         res.status(200).send("Contact deleted with sucess.");

      } catch (error) {
         next(error);
      }
   }
}

export default ContactController;