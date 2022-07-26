import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// automatically loads env variable from .env file into process.env
dotenv.config();

import "./db/dataBase.js";
import userRouter from "./router/user.router.js";
import BookRouter from "./router/book.router.js";

//web application framework
const app = express();

//middle Ware
app.use(cors());

//parse incoming request
app.use(express.json({ limit: "10mb" }));

const port = process.env.PORT || 5000;

//creats a listener on the specific port or a path
app.listen(port, () => {
  console.log(`server running on ${port}`);
});

app.use("/users", userRouter);
app.use("/books", BookRouter);
