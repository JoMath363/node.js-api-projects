import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  text: {
    type: String,
    required: [true, "Text field is required"]
  },
  post: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "posts",
    required: [true, "Post field is required"]
  }
},
{
  timestamps: true
});

const commentModel = mongoose.model("comments", commentSchema);
export default commentModel;