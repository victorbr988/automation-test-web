import express from "express";
import { scrape } from "./scrape";
import "dotenv/config"

const app = express()


app.get("/", (request, response) => {
  response.status(200).json({ message: "Hello world" })
})

app.get("/scrap", async (request, response) => {
  await scrape(response)
})

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`)
})