import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
   id: {
      type: mongoose.Schema.Types.ObjectId
   },
   name: {
      type: String,
      required: [true, "The 'name' field is required"],
   },
   ddd: {
      type: String,
      required: [true, "The 'ddd' field is required"],
      validate: {
         validator: (val) => {
            const notDDDList = ["23", "25", "26", "29", "36", "39", "52", "56", "57", "58", "59", "63", "68", "72", "76", "78", "80", "90"];
            return val.length == 2 && !notDDDList.includes(val); 
         },
         message: "The DDD must be valid"
      }
   },
   number: {
      type: String,
      required: [true, "The 'number' field is required"],
      validate: {
         validator: (val) => /\d{9}/.test(val),
         message: "The number must be valid"
      }
   },
   email: {
      type: String,
      validate: {
         validator: (val) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(val),
         message: "The email must be valid"
      }
   },
   description: {
      type: String,
   }
});

const contactModel = mongoose.model("contact", contactSchema);
export default contactModel;