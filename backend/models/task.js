import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "users" },
  name: String,
  description: String,
  taskStatus: { type: String, default: "to-do" },
  imageUrl: String,
  registerDate: { type: Date, default: Date.now },
});

const board = mongoose.model("tasks", boardSchema);
export default board;