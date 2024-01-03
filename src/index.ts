import express from "express";
import { scrape } from "./scrape";

const app = express()


app.get("/", (request, response) => {
  response.status(200).json({ message: "Hello world" })
})

app.get("/scrap", async (request, response) => {
  await scrape(response)
})

app.listen(4000, () => {
  console.log(`Server listening on port 4000`)
})