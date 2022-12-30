import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

console.log("hello");

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.end("Express + typeScript Server");
});

app.listen(port, () => {
  console.log(`Listen to ${port}`);
});
