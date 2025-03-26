import userModel from "../models/userModel.js";
import Controller from "./Controller.js";

class UserController extends Controller {
  constructor(){
    super(userModel);
  }
}

export default UserController;