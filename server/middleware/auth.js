//for authorization 

import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization"); //from FE we're req the authorization header--token will be set

    if (!token) {
      return res.status(403).send("Access Denied");
    }

    if (token.startsWith("Bearer ")) {//make sure it starts with Bearer string
      token = token.slice(7, token.length).trimLeft();//7--Bearer--ebverything after bearer is taken as token
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next(); //to proceed next step of the function 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};