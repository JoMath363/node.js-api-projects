import commentModel from "../models/commentModel.js";
import Controller from "./Controller.js";

class CommentController extends Controller {
  constructor(){
    super(commentModel);
  }

  async getPostComments (req, res, next) {
    const { id } = req.params;

    try {
      const commentsList = await this.model.find({ post: id });

      res.status(200).send(commentsList);  
    } catch (error) {
      next(error);
    }
  }
}

export default CommentController;