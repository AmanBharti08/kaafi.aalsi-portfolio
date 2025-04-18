import mongoose from "mongoose";
import bodyParser from "body-parser"
import 'dotenv/config'

// console.log("AALSI_KEY", process.env.AALSI_KEY);
import blogs from "./Schemas/BlogSchema.js"

mongoose
  .connect(process.env.AALSI_KEY)
  .then(() => {
    console.log("Connected to MongoDB");
    // console.log(blogs.find())
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
