import 'dotenv/config';
import express from "express";
import connectDB  from "./db/dbConnect.js";

const app = express();
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello new server");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started at PORT ${port}`);
});
