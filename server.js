import express from "express";
// const fs = require("fs");
import fs from "node:fs";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const port = process.env.PORT;

// Midleware
app.use(express.json());



app.listen(port, () => {
  console.log(`server is runing on ${port}`);
});