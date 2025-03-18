import BaseError from "./BaseError.js";

class BadRequest extends BaseError {
   constructor() {
      super("One or more inputs are incorrect.", 400);
   }
}

export default BadRequest;