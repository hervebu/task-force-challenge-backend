import jwt from "jsonwebtoken";

 const generateToken = (id, email) => {
    return jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    })
  }

 const verifyToken = (token) => {
    let decoded;
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      decoded = user;
    });
    return decoded;
  }

export default { generateToken, verifyToken }  