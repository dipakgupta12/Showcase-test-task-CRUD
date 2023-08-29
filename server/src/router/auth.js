import express from "express";
import { register,login } from "../controller/auth.js";

const authRouter = express.Router();

authRouter.post("/login", login);

authRouter.post("/register",register);

export default authRouter;


