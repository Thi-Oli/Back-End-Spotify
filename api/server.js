// API - APPLICATION PROGRAMING INTERFACE

// POST, GET, PUT, DELETE
// CRUD - CREATE, READ, UPDATE, DELETE

import express from "express";
import cors from "cors";
import { db } from "./conect.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
// app.use(cors());

app.get("/", (request, response) => {
  response.send("Olá, seja bem-vindo(a) ao servidor do Spotify!");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
