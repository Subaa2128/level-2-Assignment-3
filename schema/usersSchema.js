import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
});

const User = mongoose.model("user", usersSchema);

export default User;
