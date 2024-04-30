import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/db.js";
import auth from "./routes/auth.js";
import post from "./routes/post.js";

dotenv.config();

const app = express();
db();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", auth);
app.use("/", post);

app.get("/", (req, res) => {
  res.json({ message: "Hello, world!" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
