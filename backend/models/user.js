import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: mongoose.Schema.ObjectId, ref: "roles" },
  dbStatus: { type: Boolean, default: true },
  registerDate: { type: Date, default: Date.now },
});

const user = mongoose.model("users", userSchema);
export default user;
