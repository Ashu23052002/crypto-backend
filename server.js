import 'dotenv/config';
import express from "express";
import connectDB  from "./db/dbConnect.js";
import scheduleJob from './schedule/scheduleJob.js';
import cryptoRoutes from "./routes/crypto.routes.js"

const app = express();
connectDB();
scheduleJob();

app.use(express.json());


app.use("/",cryptoRoutes);
app.get("/", (req, res) => {
  res.send("hello new server");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started at PORT ${port}`);
});
