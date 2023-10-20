import express from "express";
import { login } from "../controllers/auth.js";

//set up our routes 

const router = express.Router();

router.post("/login", login); //it will be auth/login --in index.js for routes we have /auth, so it link it from here

export default router;