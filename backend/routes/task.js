import express from "express";
import task from "../controllers/task.js";
import auth from "../middlewares/auth.js";
import validId from "../middlewares/validId.js";
const router = express.Router();

router.post("/saveTask", auth, task.saveTask);
router.get("/listTask", auth, task.listTask);
router.put("/updateTask", auth, task.updateTask);
router.delete("/deleteTask/:_id", auth, validId, task.deleteTask);

export default router;
