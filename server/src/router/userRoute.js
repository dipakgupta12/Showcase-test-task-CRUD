import express, { Router } from "express";
import {
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getAllUser,
} from "../controller/user.js";

const userRouter = express.Router();

userRouter.post("/createuser", createUser);
userRouter.get("/getuserbyId", getUserById);
userRouter.get("/getalluser", getAllUser);
userRouter.put("/updateuser/:id", updateUser);
userRouter.delete("/delete/:id", deleteUser);

export default userRouter;
