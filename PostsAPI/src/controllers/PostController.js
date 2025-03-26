import postModel from "../models/postModel.js";
import Controller from "./Controller.js";

class PostController extends Controller {
  constructor(){
    super(postModel);
  }
}

export default PostController;