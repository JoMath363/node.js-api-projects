import commentModel from "../models/commentModel.js";
import Controller from "./Controller.js";

class CommentController extends Controller {
  constructor(){
    super(commentModel);
  }
}

export default CommentController;