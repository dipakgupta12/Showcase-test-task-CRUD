import express, { Router } from "express";
import {
  createRecord,
  getRecords,
  getRecordById,
  updateRecord,
  deleteRecord,
} from "../controller/education.js";

const recordRouter = express.Router();

recordRouter.post("/createrecord", createRecord);
recordRouter.get("/getRecords" , getRecords);
recordRouter.get("/getuserbyId/:id", getRecordById);
recordRouter.put("/updateRecord/:id", updateRecord);
recordRouter.delete("/deleteRecord/:id", deleteRecord);

export default recordRouter;
