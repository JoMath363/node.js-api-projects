import mongoose from "mongoose";
import BaseError from "../errors/BaseError.js";
import NotFound from "../errors/NotFound.js";
import BadRequest from "../errors/BadRequest.js";
import IncorrectValidation from "../errors/IncorretValidation.js";

function handleErrors(error, req, res, next) {
   console.log(error);

   switch (true) {
   case (error instanceof mongoose.Error.CastError):
      new BadRequest().sendResponse(res);
      break; 

   case (error instanceof mongoose.Error.ValidationError):
      new IncorrectValidation(error).sendResponse(res);
      break;

   case (error instanceof NotFound):
      error.sendResponse(res);
      break;

   default:
      new BaseError().sendResponse(res);
      break;
   }
}

export default handleErrors;