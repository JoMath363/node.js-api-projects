import postModel from "../models/postModel.js";
import Controller from "./Controller.js";

class PostController extends Controller {
  constructor(){
    super(postModel);
  }

  async getUserPosts (req, res, next) {
    const { id } = req.params;

    try {
      const registersList = await this.model.find({ user: id });

      res.status(200).send(registersList);  
    } catch (error) {
      next(error);
    }
  }
}

export default PostController;