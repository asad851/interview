import mongoose from "mongoose";
import csv from "csv-parser";
import fs from "fs";
const mongo_uri = "mongodb://localhost:27017/interview";
mongoose.connect(mongo_uri).then(() => {
  console.log("mongodb connected");
});


export default mongoose.connection;
