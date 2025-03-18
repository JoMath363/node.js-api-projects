import BaseError from "./BaseError.js";

class IncorrectValidation extends BaseError {
   constructor(error) {
      const errorMessages = Object.values(error.errors)
         .map(err => err.message)
         .join(";\n");
  
      super(`The following errors were found: ${errorMessages}`, 400);
   }
}

export default IncorrectValidation;