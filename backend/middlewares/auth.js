import jwt from "jsonwebtoken";

//Bearer a234TOKEN314JMD
const auth = async (req, res, next) => {
  let token = req.header("Authorization");//esta vble la llaman así postman, angular, react
  if (!token)
    return res.status(400).send({ message: "Authorization denied: No token" });

  token = token.split(" ")[1];//en posición del array donde quedó el token despues de hacer split
  if (!token)
    return res.status(400).send({ message: "Authorization denied: No token" });

  try {
    req.user = jwt.verify(token, process.env.SK_JWT);
    next();
  } catch (e) {
    return res
      .status(400)
      .send({ message: "Authorization denied: Invalid token" });
  }
};

export default auth;
