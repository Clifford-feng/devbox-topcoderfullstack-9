import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { config } from "./config.js"

dotenv.config();

const app = express();

const num = 8765
app.listen(num, () => {
  console.log(`Server is running http://localhost:${num}`)
})