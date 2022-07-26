import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "./db/dataBase.js";
import booksRoutes from "./routes/booksRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.use("/books", booksRoutes);
app.use("/users", usersRoutes);

app.get("/", (req, res) => res.send("hello"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
