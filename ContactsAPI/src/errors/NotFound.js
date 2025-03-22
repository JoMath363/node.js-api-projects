import BaseError from "./BaseError.js";

class NotFound extends BaseError {
   constructor() {
      super("Nothing was found.", 404);
   }
}

export default NotFound;