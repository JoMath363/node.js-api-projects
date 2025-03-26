import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  title: {
    type: String,
    required: [true, "Title field is required"]
  },
  content: {
    type: String,
    required: [true, "Content field is required"]
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "users",
    required: [true, "User field is required"]
  }
},
{
  timestamps: true
});

const postModel = mongoose.model("posts", postSchema);
export default postModel;