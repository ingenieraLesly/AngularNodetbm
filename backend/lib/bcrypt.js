import bcrypt from "bcrypt";

const hassGenerate = async (password) => {
  const passHash = await bcrypt.hash(password, 10);
  return passHash;
};

const hassCompare = async (password, dbPassword) => {
  const passHash = await bcrypt.compare(password, dbPassword);
  return passHash;
};

export default { hassGenerate, hassCompare };
