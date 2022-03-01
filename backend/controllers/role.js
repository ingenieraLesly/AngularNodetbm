import Role from "../models/role.js";

const registerRole = async (req, res) => {
  if (!req.body.name || !req.body.description)
    return res.status(400).send({ message: "Incomplete data" });

  const schema = new Role({
    name: req.body.name,
    description: req.body.description,
    dbStatus: true,
  });

  const role = await schema.save();
  return !role
    ? res.status(500).send({ message: "Failed to register role" })
    : res.status(200).send({ role });
};

const roleList = async (req, res) => {
  const roles = await Role.find({
    name: new RegExp(req.params["name"]),
  });
  return roles.length == 0
    ? res.status(400).send({ message: "Empty role list" })
    : res.status(200).send({ roles });
};

const updateRole = async (req, res) => {
  if (!req.body.description)
    return res.status(400).send({ message: "Incomplete data" });

  const editedRole = await Role.findByIdAndUpdate(req.body._id, {
    description: req.body.description,
  });

  return !editedRole
    ? res.status(500).send({ message: "Failed to editing role" })
    : res.status(200).send({ message: "Role updated" });
};

const deleteRole = async (req, res) => {
  const deletedRole = await Role.findByIdAndUpdate(
    { _id: req.params["_id"] },
    { dbStatus: false }
  );
  return !deletedRole
    ? res.status(400).send({ message: "Role no found" })
    : res.status(200).send({ message: "Role deleted" });
};

const getRoleById = async (req, res) => {
  const role = await Role.findById({ _id: req.params["_id"] });
  return !role
    ? res.status(400).send({ message: "No search results" })
    : res.status(200).send({ role });
};

export default { registerRole, roleList, updateRole, deleteRole, getRoleById };