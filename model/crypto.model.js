import mongoose, { mongo } from "mongoose";

const cryptoSchema = new mongoose.Schema({
  id: String,
  price: Number,
  marketCap: Number,
  change24h: Number,
  timeStamp: { type: Date, default: Date.now() },
});

const cryptoData = mongoose.model("cryptoData", cryptoSchema);
export default cryptoData;
