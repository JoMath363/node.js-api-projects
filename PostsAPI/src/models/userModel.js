import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  name: {
    type: String,
    required: [true, "Name field is required"]
  },
  email: {
    type: String,
    required: [true, "Email field is required"]
  }
},
{
  timestamps: true
});

const userModel = mongoose.model("users", userSchema);
export default userModel;