import task from "../models/task.js";

const saveTask = async (req, res) => {
  if (!req.body.name || !req.body.description)
    return res.status(400).send({ message: "Incomplete data" });

  const boardSchema = new task({
    userId: req.user._id,
    name: req.body.name,
    description: req.body.description,
    taskStatus: "to-do",
    imageUrl: "",
  });

  const result = await boardSchema.save();
  return !result
    ? res.status(400).send({ message: "Error registering task" })
    : res.status(200).send({ result });
};

const listTask = async (req, res) => {
  const taskList = await task.find({ userId: req.user._id });
  return taskList.length === 0
    ? res.status(400).send({ message: "You have no assigned tasks" })
    : res.status(200).send({ taskList });
};

const updateTask = async (req, res) => {
  if (!req.body._id || !req.body.taskStatus)
    return res.status(400).send({ message: "Incomplete data" });

  const taskUpdate = await task.findByIdAndUpdate(req.body._id, {
    taskStatus: req.body.taskStatus,
  });

  return !taskUpdate
    ? res.status(400).send({ message: "Task not found" })
    : res.status(200).send({ message: "Task updated" });
};

const deleteTask = async (req, res) => {
  const taskDelete = await task.findByIdAndDelete({ _id: req.params["_id"] });
  if (!taskDelete) return res.status(400).send({ message: "Task not found" });

  return res.status(200).send({ message: "Task deleted" });
};

export default { saveTask, listTask, updateTask, deleteTask };
