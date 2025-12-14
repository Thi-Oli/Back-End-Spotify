import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const URI = process.env.REACT_APP_URI;

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
