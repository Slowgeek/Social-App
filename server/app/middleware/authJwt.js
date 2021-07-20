const jwt = require("jsonWebtoken");
const JWT = process.env.JWT_SEC;
const db = require("../models");
const User = db.user;

verifyToken=(req,res,next)=>{
    const token=req.header["x-acces-token"];
    if(!token){
        return res.status(403).send({message:"No token Provided"});
    }
    jwt.verify(token, JWT, (err, decoded) => {
        if (err) {
          return res.status(401).send({ message: "Unauthorized!" });
        }
        req.userId = decoded.id;
        next();
      });
    
}
const authJwt = {
    verifyToken
  };
  module.exports = authJwt;
