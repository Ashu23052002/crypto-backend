import mongoose from "mongoose";

// console.log("process.env.MONGO_URI: ",process.env.MONGO_URI);

function connectDB(){
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to mongodb"))
    .catch((error) => console.log(error));
};


export default connectDB