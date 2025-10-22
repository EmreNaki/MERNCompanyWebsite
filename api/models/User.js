import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,  // ensures no duplicate usernames
    trim: true
  },
  password: {
    type: String,
    required: true, // hashed password will be stored
  },
  

  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("User", userSchema);
