const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();
// console.log("AALSI_KEY", process.env.AALSI_KEY);
import blogs from "./Schemas/BlogSchema"

mongoose
  .connect(process.env.AALSI_KEY)
  .then(() => {
    console.log("Connected to MongoDB");
    console.log(blogs)
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
