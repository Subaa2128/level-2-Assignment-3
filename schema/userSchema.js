import mongoose from "mongoose";

// mongoose.Schema defines the structure of document
const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  carts: { type: [String], default: [] },
});

// mongoose.model intreface for database for CRUD records
// "users" - is a file name in database
const User = mongoose.model("users", userSchema);

export default User;
