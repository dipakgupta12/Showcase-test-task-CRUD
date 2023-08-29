import "./src/config/db.js";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRouter from "./src/router/userRoute.js";
import authRouter from "./src/router/auth.js";

import recordRouter from "./src/router/educationRouter.js";

const app = express();

app.use(cors());

const PORT = 8000;
app.use(bodyParser.json({ extended: true }));

app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use(authRouter);
app.use(recordRouter);
app.listen(PORT, () =>
  console.log(`Your server is running successfully on PORT ${PORT}`)
);
